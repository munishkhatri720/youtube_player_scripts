// taken from :-> https://www.youtube.com/s/player/aa3fc80b/player_ias.vflset/en_US/base.js
var signatureTimestamp = "signatureTimestamp:20208";

var a =
  "}V}W}LM}split}length}forEach}unshift}path}1970-01-01T04:45:05.000+04:45}slice}set}push}join}130Td3FeaCE8J0Bj-L-_w8_}prototype}/}file}=}url}clone}://}rr?[1-9].*\\.c\\.youtube\\.com$}Gw}1970-01-01T02:31:40.000+02:15}rr},}signatureCipher}Z}n}Jh}reverse}mn}xG}1}s}pop}1969-12-31T14:15:25.000-09:45}\\.a1\\.googlevideo\\.com$}scheme}get}undefined}&}match}replace}1969-12-31T12:30:36.000-11:30}sp}indexOf}a1.googlevideo.com}//}youtube.player.web_20250429_10_RC00}/initplayback}splice}assign}/videoplayback}?}IP}N}fromCharCode}startsWith}\\.googlevideo\\.com$}local}cmo=}false}Untrusted URL}cmo=pf}catch}toString}/;'\"{}playerfallback}index.m3u8}1969-12-31T14:30:40.000-09:30}/api/manifest}redirector.googlevideo.com}fallback_count}1969-12-31T17:45:30.000-06:15}%3D}1970-01-01T08:30:36.000+08:30}www.youtube.com}1970-01-01T09:30:56.000+09:30}r}cmo=td}cmo}nI}:}1969-12-31T19:30:20.000-04:30}/file/index.m3u8}---}fvip}1970-01-01T08:14:57.000+08:15".split(
    "}"
  );

decrypt_nsig = function (N) {
  var z = N[a[4]](a[0]),
    v = [
      553434680,
      z,
      function () {
        for (var R = 64, C = []; ++R - C[a[5]] - 32; )
          switch (R) {
            case 46:
              R = 95;
            default:
              C[a[12]](String[a[58]](R));
            case 94:
            case 95:
            case 96:
              break;
            case 123:
              R -= 76;
            case 92:
            case 93:
              continue;
            case 58:
              R = 44;
            case 91:
          }
        return C;
      },
      -86550824,
      function (R, C) {
        C[a[5]] != 0 &&
          ((R = ((R % C[a[5]]) + C[a[5]]) % C[a[5]]),
          C[a[52]](0, 1, C[a[52]](R, 1, C[0])[0]));
      },
      function (R, C) {
        C = ((C % R[a[5]]) + R[a[5]]) % R[a[5]];
        R[a[52]](C, 1);
      },
      1286463451,
      function (R) {
        throw R;
      },
      2033214752,
      290695866,
      a[68],
      -1808872492,
      null,
      function (R, C) {
        for (R = ((R % C[a[5]]) + C[a[5]]) % C[a[5]]; R--; )
          C[a[7]](C[a[36]]());
      },
      -1250922502,
      -1118022819,
      -1441102102,
      -44263828,
      null,
      -1131715895,
      function (R, C, Z, Y, Q, L) {
        return C(Y, Q, L);
      },
      -1404493373,
      -1876445253,
      219642011,
      -2013627408,
      z,
      995500825,
      null,
      -670919744,
      -1527377197,
      function (R, C, Z, Y, Q, L, K, l) {
        return C(Z, Y, Q, L, K, l);
      },
      1006900700,
      -423195522,
      -355036773,
      1035465920,
      -10931555,
      721853984,
      -1226226993,
      -1967288630,
      function (R, C) {
        for (R = ((R % C[a[5]]) + C[a[5]]) % C[a[5]]; R--; )
          C[a[7]](C[a[36]]());
      },
      function (R, C, Z) {
        var Y = C[a[5]];
        R[a[6]](function (Q, L, K) {
          this[a[12]](
            (K[L] = C[(C[a[47]](Q) - C[a[47]](this[L]) + L + Y--) % C[a[5]]])
          );
        }, Z[a[4]](a[0]));
      },
      -1072479313,
      -1556223022,
      553434680,
      -974325978,
      function (R, C, Z, Y, Q) {
        return C(Z, Y, Q);
      },
      a[66],
      -1017121531,
      361445090,
      534569215,
      538184355,
      1095496794,
      -593273695,
      function () {
        for (var R = 64, C = []; ++R - C[a[5]] - 32; ) {
          switch (R) {
            case 58:
              R -= 14;
            case 91:
            case 92:
            case 93:
              continue;
            case 123:
              R = 47;
            case 94:
            case 95:
            case 96:
              continue;
            case 46:
              R = 95;
          }
          C[a[12]](String[a[58]](R));
        }
        return C;
      },
      function () {
        for (var R = 64, C = []; ++R - C[a[5]] - 32; ) {
          switch (R) {
            case 91:
              R = 44;
              continue;
            case 123:
              R = 65;
              break;
            case 65:
              R -= 18;
              continue;
            case 58:
              R = 96;
              continue;
            case 46:
              R = 95;
          }
          C[a[12]](String[a[58]](R));
        }
        return C;
      },
      -1494153208,
      function (R) {
        for (var C = R[a[5]]; C; ) R[a[12]](R[a[52]](--C, 1)[0]);
      },
      1035041282,
      function (R) {
        R[a[31]]();
      },
      896584355,
      1062925572,
      -639165622,
      function (R, C) {
        C = ((C % R[a[5]]) + R[a[5]]) % R[a[5]];
        R[a[52]](-C)
          [a[31]]()
          [a[6]](function (Z) {
            R[a[7]](Z);
          });
      },
      143137757,
      272752538,
      1049350451,
      1041331296,
      806370855,
      1676014141,
      76453738,
      z,
      function (R, C) {
        R[a[52]](R[a[5]], 0, C);
      },
      function () {
        for (var R = 64, C = []; ++R - C[a[5]] - 32; )
          switch (R) {
            case 58:
              R = 96;
              continue;
            case 91:
              R = 44;
              break;
            case 65:
              R = 47;
              continue;
            case 46:
              R = 153;
            case 123:
              R -= 58;
            default:
              C[a[12]](String[a[58]](R));
          }
        return C;
      },
      -725188324,
      -781199110,
      -1865474703,
      -725188324,
      function (R, C) {
        if (C[a[5]] != 0) {
          R = ((R % C[a[5]]) + C[a[5]]) % C[a[5]];
          var Z = C[0];
          C[0] = C[R];
          C[R] = Z;
        }
      },
    ];
  v[12] = v;
  v[18] = v;
  v[27] = v;
  // if (typeof gCb === a[41]) return N; short-circuit
  try {
    try {
      v[47] <= 7 &&
        (v[24] != 5 || ((0, v[new Date(a[9]) / 1e3])(v[1], v[68]), 0)) &&
        (0, v[5])(v[1], v[49]),
        (v[47] === -3 || (((0, v[62])(v[1], v[64]), v[56])(v[70]), 0)) &&
          ((0, v[new Date(a[71]) / 1e3])(v[70], (0, v[2])(), v[46]), v[13])(
            v[23],
            v[25]
          ),
        v[49] != 10 &&
          (((0, v[40])(v[70], (0, v[72])(), v[46]), v[45])(
            (0, v[13])(v[29], v[70]),
            v[5],
            v[1],
            v[21]
          ),
          v[4])(v[73], v[12]),
        ((0, v[7])(v[25]), v[5])(v[27], v[60]);
    } catch (R) {
      v[66] < 8 ? (0, v[5])(v[27], v[61]) : (0, v[5])(v[25], v[38]),
        v[26] > -8 &&
          ((((0, v[4])(v[28], v[1]), v[13])(v[59], v[27]),
          v[new Date(a[75]) / 1e3])(v[14], v[44]),
          (0, v[35])(
            (0, v[35])((0, v[68])(v[8], v[31]), v[6], v[33], v[25]),
            v[0],
            v[25],
            v[64]
          )),
        v[24] <= -6 &&
          (v[68] > new Date(a[89]) / (new Date(a[24]) / 1e3)
            ? ((((0, v[9])(v[21], v[38]), (0, v[48])(v[20], v[34]), v[67])(
                v[34]
              ),
              (0, v[54])(
                (0, v[22])(v[new Date(a[79]) / 1e3], v[new Date(a[45]) / 1e3]),
                v[6],
                v[36],
                v[29]
              ),
              v[6])(v[65], v[20]),
              v[1])(v[46], v[29])
            : (0, v[22])(
                (((0, v[7])(v[73], v[17]), v[42])(v[73], (0, v[55])(), v[48]),
                v[60])(v[new Date(a[85]) / 1e3]),
                v[6],
                (0, v[47])(
                  (0, v[47])(
                    (0, v[58])(v[29]),
                    v[42],
                    v[3],
                    (0, v[55])(),
                    v[48]
                  ),
                  v[74],
                  v[29],
                  v[44]
                ),
                v[35],
                v[14]
              )),
        v[40] == -6 ? (0, v[6])(v[54], v[20]) : (0, v[58])(v[73]);
    } finally {
      v[53] > 10 &&
        ((v[69] < -8 &&
          ((0, v[47])((0, v[7])(v[73], v[21]), v[41], v[67], v[61]), 1)) ||
          (0, v[47])((0, v[7])(v[61], v[52]), v[74], v[73], v[18])),
        (v[33] === -10 &&
          ((0, v[32])(
            (0, v[47])(
              ((0, v[7])(v[73], v[53]), v[7])(v[61], v[45]),
              v[42],
              v[61],
              (0, v[56])(),
              v[48]
            ),
            v[22],
            (0, v[47])((0, v[58])(v[20]), v[1], v[38], v[3]),
            v[7],
            (0, v[7])(v[61], v[72]),
            v[3],
            v[33]
          ),
          a[63])) ||
          (((0, v[47])(
            (0, v[22])(
              (0, v[7])(v[73], v[69]),
              v[7],
              (0, v[1])(v[10], v[29]),
              v[61],
              v[39]
            ),
            v[15],
            v[24],
            v[29]
          ),
          (0, v[50])(v[46], v[49]),
          v[3])(v[57], v[73]),
          v[54])(v[57]),
        v[9] > 5
          ? (0, v[75])((0, v[56])(v[10]), v[3], v[78], v[15])
          : (0, v[75])((0, v[54])(v[78]), v[11], v[30], v[10]),
        v[72] != 6 &&
          (v[46] !== -2 ? (0, v[49])(v[19], v[42]) : (0, v[54])(v[37], v[77]));
    }
    try {
      v[23] <= -10 &&
        (v[15] !== 2
          ? (0, v[1])(
              (0, v[29])(v[62]),
              v[8],
              ((0, v[23])(v[27], v[22]), v[29])(v[14], v[10]),
              v[29],
              (0, v[29])(v[new Date(a[37]) / 1e3], v[1]),
              v[72],
              v[16]
            )
          : (0, v[77])(
              ((0, v[30])(
                (0, v[67])(v[new Date(a[77]) / 1e3], (0, v[54])(), v[61]),
                v[51],
                v[10]
              ),
              v[29])(v[52], v[10]),
              v[30],
              (0, v[67])(v[36], (0, v[54])(), v[61]),
              v[23],
              v[16],
              v[4]
            ));
    } catch (R) {
      (0, v[67])(v[27], (0, v[34])(), v[61]);
    }
  } catch (R) {
    return a[14] + N;
  }
  return z[a[13]](a[0]);
};

var bs = {
  xG: function (N, z) {
    var v = N[0];
    N[0] = N[z % N[a[5]]];
    N[z % N[a[5]]] = v;
  },
  Gw: function (N, z) {
    N[a[52]](0, z);
  },
  Qc: function (N) {
    N[a[31]]();
  },
};

decrypt_sig = function (N) {
  N = N[a[4]](a[0]);
  bs[a[33]](N, 68);
  bs[a[23]](N, 2);
  bs[a[33]](N, 34);
  bs[a[33]](N, 63);
  bs[a[33]](N, 53);
  bs[a[23]](N, 1);
  return N[a[13]](a[0]);
};