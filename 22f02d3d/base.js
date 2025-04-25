// taken from :-> https://www.youtube.com/s/player/22f02d3d/player_ias.vflset/en_US/base.js
var signatureTimestamp = "signatureTimestamp:20201";

var z =
  "local{toString{signatureCipher{prototype{splice{cmo={Y{cmo=td{T{length{%3D{replace{pop{set{reverse{{push{file{youtube.player.web_20250422_22_RC00{indexOf{1{assign{,{url{/initplayback{get{slice{path{W{So{&{\u22da;{split{unshift{1970-01-01T05:29:55.000+05:30{scheme{/videoplayback{www.youtube.com{mn{s{clone{vS{:{fallback_count{tE{match{---{/{n{join{startsWith{]\u22d1/{cmo{7qmy6t7jtx86Z0BluL-_w8_{={Fs{rr{playerfallback{pM{1970-01-01T08:30:54.000+08:30{/api/manifest{j{1969-12-31T20:29:51.000-03:30{1970-01-01T01:01:09.000+01:00{1970-01-01T10:46:16.000+10:45{//{1969-12-31T21:14:54.000-02:45{r{/file/index.m3u8{else{NaN{cmo=pf{U-MdVav{redirector.googlevideo.com{fvip{forEach{fromCharCode{Untrusted URL{rr?[1-9].*\\.c\\.youtube\\.com${sp{index.m3u8{?{GN{\\.a1\\.googlevideo\\.com${\\.googlevideo\\.com${://{undefined{a1.googlevideo.com{m5".split(
    "{"
  );

var Dw = {
  vS: function (U) {
    U[z[14]]();
  },
  tE: function (U, Y) {
    var A = U[0];
    U[0] = U[Y % U[z[9]]];
    U[Y % U[z[9]]] = A;
  },
  So: function (U, Y) {
    U[z[4]](0, Y);
  },
};

decrypt_sig = function (U) {
  U = U[z[32]](z[15]);
  Dw[z[29]](U, 1);
  Dw[z[41]](U, 46);
  Dw[z[44]](U, 30);
  Dw[z[29]](U, 3);
  Dw[z[41]](U, 45);
  Dw[z[44]](U, 59);
  Dw[z[29]](U, 1);
  Dw[z[41]](U, 8);
  Dw[z[29]](U, 1);
  return U[z[49]](z[15]);
};

decrypt_nsig = function (U) {
  var Y = U[z[32]](z[15]),
    A = [
      -246147040,
      1011131964,
      function () {
        for (var c = 64, d = []; ++c - d[z[9]] - 32; ) {
          switch (c) {
            case 58:
              c -= 14;
            case 91:
            case 92:
            case 93:
              continue;
            case 123:
              c = 47;
            case 94:
            case 95:
            case 96:
              continue;
            case 46:
              c = 95;
          }
          d[z[16]](String[z[76]](c));
        }
        return d;
      },
      -1629206006,
      function (c, d) {
        c = ((c % d[z[9]]) + d[z[9]]) % d[z[9]];
        d[z[4]](-c)
          [z[14]]()
          [z[75]](function (T) {
            d[z[33]](T);
          });
      },
      491883541,
      1683815363,
      function (c, d, T, E, L, r) {
        return d(E, L, r);
      },
      function (c) {
        c[z[14]]();
      },
      function (c, d) {
        c[z[16]](d);
      },
      1572249287,
      1570102281,
      -775459720,
      function (c, d) {
        d = ((d % c[z[9]]) + c[z[9]]) % c[z[9]];
        c[z[4]](d, 1);
      },
      587560751,
      1719314686,
      410007795,
      856955333,
      null,
      -1575692982,
      1518240600,
      -1895899741,
      65616304,
      function (c, d) {
        for (d = ((d % c[z[9]]) + c[z[9]]) % c[z[9]]; d--; )
          c[z[33]](c[z[12]]());
      },
      795347178,
      1011131964,
      Y,
      720534924,
      1476075582,
      function (c, d) {
        if (c[z[9]] != 0) {
          d = ((d % c[z[9]]) + c[z[9]]) % c[z[9]];
          var T = c[0];
          c[0] = c[d];
          c[d] = T;
        }
      },
      1122562611,
      2023021505,
      68757196,
      -1966083238,
      -1732430656,
      358303729,
      -1465332801,
      161495441,
      -1804257975,
      function (c) {
        c[z[14]]();
      },
      -1645265568,
      -2088693465,
      -567492267,
      function (c) {
        for (var d = c[z[9]]; d; ) c[z[16]](c[z[4]](--d, 1)[0]);
      },
      z[51],
      -434242746,
      -1303451554,
      -2105311403,
      z[72],
      function (c, d, T) {
        var E = c[z[9]];
        d[z[75]](function (L, r, l) {
          this[z[16]](
            (l[r] = c[(c[z[19]](L) - c[z[19]](this[r]) + r + E--) % c[z[9]]])
          );
        }, T[z[32]](z[15]));
      },
      z[69],
      -246147040,
      function (c, d, T, E, L) {
        return d(T, E, L);
      },
      null,
      -1255956991,
      function (c) {
        for (var d = c[z[9]]; d; ) c[z[16]](c[z[4]](--d, 1)[0]);
      },
      -1382434804,
      function (c, d, T, E, L, r, l) {
        return c(L, r, l);
      },
      -11425480,
      -841314341,
      -1905411023,
      -556339379,
      1386722837,
      -11425480,
      -1605379825,
      function () {
        for (var c = 64, d = []; ++c - d[z[9]] - 32; )
          switch (c) {
            case 58:
              c = 96;
              continue;
            case 91:
              c = 44;
              break;
            case 65:
              c = 47;
              continue;
            case 46:
              c = 153;
            case 123:
              c -= 58;
            default:
              d[z[16]](String[z[76]](c));
          }
        return d;
      },
      -363748377,
      function (c, d, T, E, L, r, l, P, V) {
        return T(l, P, V);
      },
      -1561471232,
      1169427607,
      Y,
      1518240600,
      1698534946,
      z[31],
      Y,
      function (c, d) {
        d[z[9]] != 0 &&
          ((c = ((c % d[z[9]]) + d[z[9]]) % d[z[9]]),
          d[z[4]](0, 1, d[z[4]](c, 1, d[0])[0]));
      },
      1264288924,
      null,
      1422110440,
      function () {
        for (var c = 64, d = []; ++c - d[z[9]] - 32; )
          switch (c) {
            case 46:
              c = 95;
            default:
              d[z[16]](String[z[76]](c));
            case 94:
            case 95:
            case 96:
              break;
            case 123:
              c -= 76;
            case 92:
            case 93:
              continue;
            case 58:
              c = 44;
            case 91:
          }
        return d;
      },
      -635646479,
      -1559756301,
      function () {
        for (var c = 64, d = []; ++c - d[z[9]] - 32; ) {
          switch (c) {
            case 91:
              c = 44;
              continue;
            case 123:
              c = 65;
              break;
            case 65:
              c -= 18;
              continue;
            case 58:
              c = 96;
              continue;
            case 46:
              c = 95;
          }
          d[z[16]](String[z[76]](c));
        }
        return d;
      },
      -1188871032,
      -452217458,
    ];
  A[18] = A;
  A[53] = A;
  A[77] = A;
  //if (typeof Sv3 === z[86]) return U; prevent returning same value for n
  try {
    try {
      A[36] < -4 &&
        ((0, A[57])(
          A[75],
          (0, A[23])(A[26], A[19]),
          (0, A[43])(A[26]),
          (0, A[9])(A[53], A[82]),
          A[16],
          A[18]
        ),
        A[75])(A[60], A[26]),
        A[15] == -6
          ? (0, A[52])(
              (0, A[13])(A[70], A[24]),
              A[49],
              (0, A[79])(),
              A[26],
              A[48]
            )
          : (0, A[4])(A[15], A[77]) >= (0, A[43])(A[11], A[34]),
        (A[71] > -9 || ((0, A[3])(A[20], A[17]), null)) &&
          (0, A[3])(A[44], A[52]),
        (A[14] > -8 || ((0, A[26])((0, A[56])(), A[47], A[25]), 0)) &&
          (0, A[6])(A[51], A[8]);
    } catch (c) {
      (0, A[29])((0, A[26])((0, A[42])(), A[51], A[25]), A[76], A[51], A[73]),
        (0, A[29])((0, A[32])(A[81]), A[76], A[47], A[64]);
    }
    try {
      A[39] != 1 && (A[19] != -3 ? (0, A[16])(A[81]) : (0, A[22])(A[4])),
        A[71] > -3 ? (0, A[85])(A[82], A[28]) : (0, A[9])(A[34], A[66]),
        A[36] > new Date(z[62]) / 1e3 &&
          ((A[73] !== new Date(z[66]) / 1e3 &&
            ((0, A[79])(A[55], A[10]), z[70])) ||
            (0, A[59])((0, A[20])(), A[34], A[58]));
    } catch (c) {
      (0, A[79])(A[34], A[52]), ((0, A[85])(A[82], A[70]), A[79])(A[4], A[17]);
    } finally {
      A[73] >= 5 &&
        ((A[6] === new Date(z[34]) / 1e3 &&
          (((0, A[56])(
            (0, A[15])(
              (0, A[33])(A[32], A[4]),
              A[9],
              (0, A[33])(A[19], A[4]),
              A[38],
              A[47]
            ),
            A[59],
            (0, A[29])(),
            A[82],
            A[58]
          ),
          A[9])(A[55], A[75]),
          (0, A[85])(A[38], A[78]),
          1)) ||
          (0, A[79])(A[82], A[76]) -
            (0, A[15])(
              (0, A[18])(A[16], A[34]),
              A[33],
              (0, A[56])(
                ((0, A[79])(A[55], A[62]), A[33])(A[65], A[82]),
                A[18],
                A[45],
                A[4]
              ),
              A[3],
              A[54]
            )),
        A[69] <= -8 &&
          (A[42] < 3 ||
            ((0, A[5])(
              (0, A[49])(A[19], A[13]),
              (0, A[32])((0, A[79])(), A[55], A[33]),
              A[52],
              (0, A[77])(A[54], A[4]),
              (0, A[83])(A[47], A[new Date(z[63]) / 1e3]),
              (0, A[37])(
                ((0, A[14])(A[48], A[36]), (0, A[14])(A[52], A[12]), A[85])(
                  A[27],
                  A[15]
                ),
                A[85],
                A[5],
                A[12]
              ),
              A[17],
              A[7]
            ),
            0)) &&
          ((((0, A[80])((0, A[50])(), A[17], A[81]),
          (((0, A[new Date(z[59]) / 1e3])(A[46], A[55]), A[39])(
            A[48],
            A[new Date(z[64]) / 1e3]
          ),
          A[30])(A[76], A[15]),
          A[30])(A[59], A[23]),
          ((0, A[80])((0, A[44])(), A[59], A[79]), A[80])(
            (0, A[50])(),
            A[55],
            A[81]
          ),
          A[80])((0, A[64])(), A[17], A[79]),
          A[35])(A[25]),
        A[28] > 0 &&
          ((((0, A[80])((0, A[41])(), A[59], A[79]), A[54])(A[82], A[52]),
          (0, A[20])(A[55], A[26]),
          (0, A[30])(A[59], A[63]),
          A[54])(A[57], A[25]),
          A[54])(A[8], A[17]),
        A[57] !== 7 &&
          ((A[84] <= -9 && ((0, A[20])(A[17], A[9]), 1)) ||
            (0, A[80])((0, A[44])(), A[17], A[79])),
        A[66] < 9 &&
          ((A[27] > -10 &&
            ((0, A[77])((0, A[74])(A[52]), A[55], A[30], A[10]), 1)) ||
            (0, A[5])((0, A[38])(), A[68], A[6]) <
              (0, A[5])((0, A[35])(), A[26], A[6])),
        A[19] < 1 &&
          (A[61] != -2
            ? (0, A[8])(
                ((0, A[65])(A[30], A[20]), A[65])(A[26], A[53]),
                A[31],
                A[34],
                A[30]
              )
            : (0, A[8])(
                (0, A[71])(A[33], A[24]) >= (0, A[42])(A[9]),
                A[65],
                A[60],
                A[14]
              ));
    }
  } catch (c) {
    return z[53] + U;
  }
  return Y[z[49]](z[15]);
};
