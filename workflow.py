import re
from typing import Final, Optional, Any
import httpx
import asyncio
import os
import logging
import json
from dataclasses import dataclass
from datetime import datetime, timezone

logging.basicConfig(
    level=os.getenv("LOG_LEVEL", "INFO").upper(),
    format="%(asctime)s %(levelname)s [%(name)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

TCE_GLOBAL_VARIABLE_PATTERN: Final[re.Pattern] = re.compile(
    r'(\'use\s*strict\';)?(?P<code>var\s*(?P<varname>[a-zA-Z0-9_$]+)\s*=\s*(?P<value>(?:"[^"\\]*(?:\\.[^"\\]*)*"|\'[^\'\\]*(?:\\.[^\'\\]*)*\')\.split\((?:"[^"\\]*(?:\\.[^"\\]*)*"|\'[^\'\\]*(?:\\.[^\'\\]*)*\')\)|\[(?:(?:"[^"\\]*(?:\\.[^"\\]*)*"|\'[^\'\\]*(?:\\.[^\'\\]*)*\')\s*,?\s*)*\]|"[^"]*"\.split\("[^"]*"\)))'
)
SIG_FUNCTION_TCE_PATTERN: Final[re.Pattern] = re.compile(
    r"function\(\s*([a-zA-Z0-9$])\s*\)\s*\{\s*\1\s*=\s*\1\[(\w+)\[\d+\]\]\(\2\[\d+\]\);([a-zA-Z0-9$]+)\[\2\[\d+\]\]\(\s*\1\s*,\s*\d+\s*\);\s*\3\[\2\[\d+\]\]\(\s*\1\s*,\s*\d+\s*\);\s*\3\[\2\[\d+\]\]\(\s*\1\s*,\s*\d+\s*\);.*?return\s*\1\[\2\[\d+\]\]\(\2\[\d+\]\)\}\s*\;"
)
NSIG_FUNCTION_TCE_PATTERN: Final[re.Pattern] = re.compile(
    r"function\s*\((\w+)\)\s*\{var\s*\w+\s*=\s*\1\[\w+\[\d+\]\]\(\w+\[\d+\]\)\s*,\s*\w+\s*=\s*\[.*?\]\;.*?catch\s*\(\s*(\w+)\s*\)\s*\{return\s*\w+\[\d+\]\s*\+\s*\1\}\s*return\s*\w+\[\w+\[\d+\]\]\(\w+\[\d+\]\)\}\s*\;",
    re.DOTALL,
)
SIG_FUNCTION_ACTIONS_TCE_PATTERN: Final[re.Pattern] = re.compile(
    r"var\s+([$A-Za-z0-9_]+)\s*=\s*\{\s*(?:[$A-Za-z0-9_]+)\s*:\s*function\s*\([^)]*\)\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}\s*,\s*(?:[$A-Za-z0-9_]+)\s*:\s*function\s*\([^)]*\)\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}\s*,\s*(?:[$A-Za-z0-9_]+)\s*:\s*function\s*\([^)]*\)\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}\s*\}\s*;"
)


YTCFG_EXTRACT_PATTERN: Final[re.Pattern] = re.compile(
    r"ytcfg\.set\((.*?)\);", re.DOTALL
)

SIGNATURE_TIMESTAMP_PATTERN: Final[re.Pattern] = re.compile(
    r"(signatureTimestamp|sts):(\d+)"
)


@dataclass
class TceVariable:
    name: str
    code: str
    value: str

    def get_escaped_name(self) -> str:
        return self.name.replace("$", "\\$")


class Workflow:
    def __init__(self) -> None:
        self._client: Optional[httpx.AsyncClient] = None

    @property
    def client(self) -> httpx.AsyncClient:
        if self._client is None:
            raise RuntimeError("HTTP client not initialized")
        return self._client

    def extract_key_value_recursively(
        self, key: str, data: dict[str, Any], max_depth: int = 3
    ) -> Optional[Any]:
        stack: list[tuple[dict[str, Any], int]] = [(data, 0)]
        while stack:
            current, depth = stack.pop()
            if depth > max_depth:
                logger.debug("Max depth %d reached, skipping deeper search.", max_depth)
                continue

            for k, v in current.items():
                if k == key:
                    logger.debug("Found key=%r at depth=%d, value=%r", key, depth, v)
                    return v

                if isinstance(v, dict):
                    logger.debug("Descending into key=%r at depth=%d", k, depth + 1)
                    stack.append((v, depth + 1))

        logger.debug("Key=%r not found within max_depth=%d", key, max_depth)
        return None

    async def fetch_script_url(self) -> str:
        """Fetch Youtube homepage and extract the JS config bundle url."""
        resp = await self.client.get("https://www.youtube.com/embed/")
        resp.raise_for_status()

        html = resp.text
        logger.info("Fetched HTML; extracting script URL...")
        match = YTCFG_EXTRACT_PATTERN.search(html)
        if not match:
            logger.error("Failed to extract ytcfg data from HTML")
            raise RuntimeError("Failed to fetch ytcfg.")
        result = match.group(1)
        data = json.loads(result)
        context: dict[str, Any] = data["WEB_PLAYER_CONTEXT_CONFIGS"]
        script_url = self.extract_key_value_recursively(
            key="jsUrl", data=context, max_depth=3
        )
        return f"https://www.youtube.com" + script_url

    def check_new_script(self, player_id: str) -> bool:
        """Checks whether the js bundle is newly released."""
        for file in os.listdir("./"):
            if player_id.strip() == file.strip():
                return False
        return True

    def extract_tce_global_variable(
        self, jscode: str, player_id: str
    ) -> Optional[TceVariable]:
        """Extract the tce global variable from the jscode."""
        match = TCE_GLOBAL_VARIABLE_PATTERN.search(jscode)
        if match:
            return TceVariable(
                name=match.group("varname"),
                code=match.group("code"),
                value=match.group("value"),
            )

        logger.fatal(
            f"Failed to find the tce global variable for player {player_id} in the jscode."
        )
        return None

    def extract_tce_nsig_function(self, jscode: str, player_id: str) -> Optional[str]:
        """Extract the tce variant n param transformation function from the jscode."""
        match = NSIG_FUNCTION_TCE_PATTERN.search(jscode)
        if match:
            return match.group(0)
        logger.fatal(
            f"Failed to extract tce variant n param tranformation function for player {player_id} from the jscode."
        )
        return None

    def extract_tce_sig_function(self, jscode: str, player_id: str) -> Optional[str]:
        """Extract the tce variant s param transformation function from the jscode."""
        match = SIG_FUNCTION_TCE_PATTERN.search(jscode)
        if match:
            return match.group(0)
        logger.fatal(
            f"Failed to extract tce variant s param transformation function for player {player_id} from the jscode."
        )
        return None

    def extract_tce_variant_sig_function_actions(
        self, jscode: str, player_id: str
    ) -> Optional[str]:
        """Extract the tce variant s param transformation actions function from the jscode."""
        match = SIG_FUNCTION_ACTIONS_TCE_PATTERN.search(jscode)
        if match:
            return match.group(0)
        logger.fatal(
            f"Failed to extract tce variant s param transformation function actions for player {player_id} from the jscode."
        )
        return None

    def extract_signature_timestamp(self, jscode: str, player_id: str) -> Optional[int]:
        """Extract the signature timestamp from the jscode."""
        match = SIGNATURE_TIMESTAMP_PATTERN.search(jscode)
        if match:
            return int(match.group(2))
        logger.fatal(
            f"Failed to extract the signature timestamp for player {player_id} from the jscode."
        )
        return None

    def fix_nsig_function_code(
        self, function_code: str, player_id: str, tce: TceVariable
    ) -> str:
        """Fix the short circuit in n param tranformation function code."""
        pattern = re.compile(
            r";\s*if\s*\(\s*typeof\s+[a-zA-Z0-9_$]+\s*===?\s*(?:\"undefined\"|\'undefined\'|{}\[\d+\])\s*\)\s*return\s+\w+;".format(
                tce.get_escaped_name()
            )
        )
        match = pattern.search(function_code)

        if match:
            logger.warning(
                f"Short-Circuit dectected in n param tranformation code. Fixing the player {player_id} n function code..."
            )
            fixed_code = re.sub(
                r";\s*if\s*\(\s*typeof\s+[a-zA-Z0-9_$]+\s*===?\s*(?:\"undefined\"|\'undefined\'|{}\[\d+\])\s*\)\s*return\s+\w+;".format(
                    tce.get_escaped_name()
                ),
                f";\n// {match.group(0)} fixed short-circuit\n",
                string=function_code,
                count=1,
            )
            return fixed_code
        else:
            logger.info("No short-circuit match found in the script.")
            return function_code

    def build_minified_javascript_file(
        self,
        player_id: str,
        script_url: str,
        tce: TceVariable,
        sig_function_code: str,
        nsig_function_code: str,
        sig_function_actions_code: str,
        signature_timestamp: int,
    ) -> None:
        """Make minified javascript file from the code."""
        code = ""
        code += f"// taken from -> {script_url}\n"
        code += f"// time -> {datetime.now(timezone.utc).isoformat()} \n"
        code += (
            f'var signatureTimestamp = "signatureTimestamp:{signature_timestamp}";\n\n'
        )
        code += f"{tce.code};\n\n"
        code += f"decrypt_nsig = {nsig_function_code}\n\n"
        code += f"decrypt_sig = {sig_function_code}\n\n"
        code += f"{sig_function_actions_code}"
        os.makedirs(player_id, exist_ok=True)
        with open(f"{player_id}/base.js", "w") as file:
            file.write(code)

    async def __aenter__(self) -> "Workflow":
        self._client = httpx.AsyncClient(
            headers={
                "User-Agent": (
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                    "AppleWebKit/537.36 (KHTML, like Gecko) "
                    "Chrome/135.0.0.0 Safari/537.36"
                )
            }
        )
        # bypass cookie consent
        self._client.cookies.set(name="SOCS", value="CAI")
        return self

    async def __aexit__(self, exc_type: Any, exc: Any, tb: Any) -> None:
        if self._client:
            await self._client.aclose()

    async def run(self) -> None:
        """High-level entry point for running the workflow."""
        script_url = await self.fetch_script_url()
        logger.info(f"Script URl : {script_url}")
        match = re.search(
            r"\/player\/([a-zA-Z0-9]+)\/.*?base.js", script_url, re.DOTALL
        )
        player_id = match.group(1)
        if not self.check_new_script(player_id=player_id):
            logger.info(f"JS bundle already present for Player ID : {player_id}")
        else:
            resp = await self.client.get(script_url)
            resp.raise_for_status()
            js_script = resp.text
            tce = self.extract_tce_global_variable(
                jscode=js_script, player_id=player_id
            )
            signature_timestamp = self.extract_signature_timestamp(
                jscode=js_script, player_id=player_id
            )
            nsig_function = self.extract_tce_nsig_function(
                jscode=js_script, player_id=player_id
            )
            final_nsig_function = self.fix_nsig_function_code(
                function_code=nsig_function, player_id=player_id, tce=tce
            )
            sig_function = self.extract_tce_sig_function(
                jscode=js_script, player_id=player_id
            )
            sig_function_actions = self.extract_tce_variant_sig_function_actions(
                jscode=js_script, player_id=player_id
            )
            missing = [
                name
                for name, val in [
                    ("TCE variable", tce),
                    ("signature timestamp", signature_timestamp),
                    ("nsig function", final_nsig_function),
                    ("sig function", sig_function),
                    ("sig actions", sig_function_actions),
                ]
                if val is None
            ]
            if missing:
                raise RuntimeError(
                    f"Workflow failed: could not extract {', '.join(missing)} "
                    f"for player {player_id}"
                )

            self.build_minified_javascript_file(player_id=player_id , script_url=script_url , tce=tce , sig_function_code=sig_function , sig_function_actions_code=sig_function_actions , nsig_function_code=final_nsig_function , signature_timestamp=signature_timestamp)


async def main():
    async with Workflow() as wf:
        await wf.run()


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logger.info("Interrupted by user, shutting down.")
