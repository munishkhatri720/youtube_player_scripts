// taken from :-> https://www.youtube.com/s/player/fded239a/player_ias.vflset/en_GB/base.js
var signatureTimestamp = "signatureTimestamp:20206";

var f =
  "push;length;//;a1.googlevideo.com;path;qi;1969-12-31T15:45:09.000-08:15;;\u22de\"()];Untrusted URL;r;startsWith;split;url;get;D;1;clone;cmo=pf;1969-12-31T13:30:53.000-10:30;playerfallback;join;://;reverse;set;indexOf;prototype;toString;undefined;/videoplayback;yz;V;,;j;n;cmo;/initplayback;unshift;case;scheme;T;fvip;&;slice;YS;forEach;cL;splice;=;fromCharCode;local;F$;:;Et;1970-01-01T04:15:03.000+04:15;signatureCipher;rr?[1-9].*\\.c\\.youtube\\.com$;cHyFos;1970-01-01T11:50:52.000+11:30;/;\\.a1\\.googlevideo\\.com$;/file/index.m3u8;replace;www.youtube.com;youtube.player.web_20250427_21_RC00;pow;s4;%3D;mn;pop;s;match;rr;sp;redirector.googlevideo.com;1969-12-31T15:45:12.000-08:15;assign;null;1970-01-01T06:30:26.000+06:30;1vecAAwfok87p0BkeL-_w8_;cmo=;---;file;fallback_count;index.m3u8;[,,',;1970-01-01T02:15:22.000+02:15;NaN;\\.googlevideo\\.com$;/api/manifest;cmo=td;?".split(
    ";"
  );

decrypt_nsig = function (E) {
  var b = E[f[12]](f[7]),
    Z = [
      583646177,
      991611265,
      f[57],
      null,
      -1595787941,
      205678061,
      305565522,
      f[85],
      -2041248847,
      function (A, K) {
        for (K = ((K % A[f[1]]) + A[f[1]]) % A[f[1]]; K--; )
          A[f[37]](A[f[69]]());
      },
      1818257099,
      function (A, K, k, X, Q) {
        return K(k, X, Q);
      },
      function (A, K) {
        A[f[47]](A[f[1]], 0, K);
      },
      132272803,
      null,
      b,
      -475927818,
      -548400454,
      265954044,
      21472701,
      -841358751,
      482159706,
      258224998,
      -1766901176,
      function (A, K, k, X, Q, l, V) {
        return A(Q, l, V);
      },
      1056756470,
      1356013856,
      -493396601,
      -1656111983,
      -986860828,
      function (A) {
        for (var K = A[f[1]]; K; ) A[f[0]](A[f[47]](--K, 1)[0]);
      },
      -1492837252,
      1425523223,
      476222643,
      -1521459065,
      -1602897149,
      null,
      b,
      -826865090,
      -1428139858,
      function (A, K) {
        if (K[f[1]] != 0) {
          A = ((A % K[f[1]]) + K[f[1]]) % K[f[1]];
          var k = K[0];
          K[0] = K[A];
          K[A] = k;
        }
      },
      function (A, K) {
        A[f[0]](K);
      },
      -778622943,
      -1135629093,
      f[38],
      function (A, K) {
        K[f[1]] != 0 &&
          ((A = ((A % K[f[1]]) + K[f[1]]) % K[f[1]]),
          K[f[47]](0, 1, K[f[47]](A, 1, K[0])[0]));
      },
      -1537793530,
      function (A) {
        A[f[23]]();
      },
      183779743,
      function () {
        for (var A = 64, K = []; ++A - K[f[1]] - 32; ) {
          switch (A) {
            case 91:
              A = 44;
              continue;
            case 123:
              A = 65;
              break;
            case 65:
              A -= 18;
              continue;
            case 58:
              A = 96;
              continue;
            case 46:
              A = 95;
          }
          K[f[0]](String[f[49]](A));
        }
        return K;
      },
      -742354817,
      function () {
        for (var A = 64, K = []; ++A - K[f[1]] - 32; ) {
          switch (A) {
            case 58:
              A -= 14;
            case 91:
            case 92:
            case 93:
              continue;
            case 123:
              A = 47;
            case 94:
            case 95:
            case 96:
              continue;
            case 46:
              A = 95;
          }
          K[f[0]](String[f[49]](A));
        }
        return K;
      },
      -1028570981,
      1567253569,
      1266602130,
      922001641,
      1676303979,
      927574704,
      -1435857041,
      313578791,
      -1224748469,
      -1521459065,
      function (A, K, k, X, Q, l) {
        return K(X, Q, l);
      },
      346797179,
      function (A, K, k, X, Q, l, V, w, p, W, L) {
        return A(k, X, Q, l, V, w, p, W, L);
      },
      -17816059,
      function (A, K) {
        A = ((A % K[f[1]]) + K[f[1]]) % K[f[1]];
        K[f[47]](-A)
          [f[23]]()
          [f[45]](function (k) {
            K[f[37]](k);
          });
      },
      function (A, K, k, X, Q, l, V, w, p, W, L) {
        return A(k, X, Q, l, V, w, p, W, L);
      },
      function (A, K) {
        A = ((A % K[f[1]]) + K[f[1]]) % K[f[1]];
        K[f[47]](A, 1);
      },
      -2084495215,
      -1293911539,
      -2041464875,
      1358523837,
      1266602130,
      function () {
        for (var A = 64, K = []; ++A - K[f[1]] - 32; )
          switch (A) {
            case 46:
              A = 95;
            default:
              K[f[0]](String[f[49]](A));
            case 94:
            case 95:
            case 96:
              break;
            case 123:
              A -= 76;
            case 92:
            case 93:
              continue;
            case 58:
              A = 44;
            case 91:
          }
        return K;
      },
      -366862714,
      f[8],
      1102173353,
      -535762818,
      -2007291378,
      1201406723,
      function (A, K, k, X, Q, l, V, w) {
        return K(k, X, Q, l, V, w);
      },
      -266862200,
      -1323113804,
      1441262013,
      1617807990,
      function (A, K, k) {
        var X = k[f[1]];
        K[f[45]](function (Q, l, V) {
          this[f[0]](
            (V[l] = k[(k[f[25]](Q) - k[f[25]](this[l]) + l + X--) % k[f[1]]])
          );
        }, A[f[12]](f[7]));
      },
      function () {
        for (var A = 64, K = []; ++A - K[f[1]] - 32; )
          switch (A) {
            case 58:
              A = 96;
              continue;
            case 91:
              A = 44;
              break;
            case 65:
              A = 47;
              continue;
            case 46:
              A = 153;
            case 123:
              A -= 58;
            default:
              K[f[0]](String[f[49]](A));
          }
        return K;
      },
      b,
      1119622926,
      -2065337349,
      function (A, K, k, X, Q, l, V) {
        return A(Q, l, V);
      },
      /\/([[]()\\\\),{",,\(/,
      -1210697607,
      -866254494,
    ];
  Z[3] = Z;
  Z[14] = Z;
  Z[36] = Z;
  //if (typeof z_$ === f[28]) return E; short-circuit
  try {
    try {
      (Z[17] < 2 && (((0, Z[45])(Z[57], Z[37]), Z[9])(Z[37], Z[55]), f[87])) ||
        (0, Z[11])(
          (0, Z[86])(
            Z[(481 % Math[f[65]](7, new Date(f[54]) / 1e3)) + -94],
            Z[37],
            (0, Z[87])()
          ),
          Z[47],
          Z[14]
        ),
        Z[18] >= 6 &&
          (Z[71] === -5 ||
            ((((((0, Z[66])(Z[82], Z[37]), Z[9])(Z[88], Z[33]), Z[9])(
              Z[3],
              Z[83]
            ),
            (0, Z[37])((0, Z[71])(Z[47], Z[62]), Z[35], Z[62], Z[48]),
            Z[44])(Z[51]),
            ((0, Z[23])(Z[50], Z[22]), Z[79])(
              (0, Z[62])(Z[94], Z[31]),
              Z[62],
              (0, Z[64])(Z[54]),
              Z[63],
              Z[54]
            ),
            Z[83])(Z[45], Z[54]),
            0)) &&
          ((((0, Z[8])(Z[61], Z[10], (0, Z[9])()), Z[8])(
            Z[61],
            Z[32],
            (0, Z[68])()
          ),
          Z[57])(Z[49], Z[20]),
          (((0, Z[47])(Z[54]), Z[83])(Z[12], Z[54]), Z[85])(Z[42], Z[31]),
          Z[83])(Z[89], Z[31]) *
            (0, Z[13])(
              Z[62],
              (0, Z[8])(Z[61], Z[10], (0, Z[66])()),
              (0, Z[85])(Z[76], Z[54]),
              (0, Z[85])(Z[6], Z[20]),
              Z[56],
              Z[54]
            ),
        Z[18] > -10 &&
          ((Z[72] == -10 &&
            (((0, Z[28])(
              (0, Z[79])(
                (0, Z[47])(Z[10]),
                Z[62],
                (0, Z[8])(Z[19], Z[32], (0, Z[91])()),
                Z[16],
                Z[31]
              ),
              Z[new Date(f[78]) / 1e3],
              Z[31],
              Z[43]
            ),
            (0, Z[85])(Z[46], Z[20]),
            Z[85])(Z[37], Z[54]),
            f[77])) ||
            (0, Z[81])(
              Z[41],
              ((0, Z[83])(Z[52], Z[32]), Z[83])(
                Z[1311 - new Date(f[58]) / 1e3],
                Z[54]
              ),
              Z[83],
              (0, Z[8])(Z[61], Z[10], (0, Z[9])()),
              (0, Z[57])(Z[48], Z[31]),
              (0, Z[58])(Z[31], Z[50]),
              Z[35],
              Z[32]
            )),
        (Z[73] === 6 &&
          (((0, Z[8])(Z[19], Z[32], (0, Z[9])()), Z[85])(Z[73], Z[10]), 1)) ||
          (0, Z[62])(Z[23], Z[32]) > (0, Z[83])(Z[36], Z[54]),
        (Z[7] <= 9 ||
          ((0, Z[28])((0, Z[26])(Z[31], Z[30]), Z[33], Z[85], Z[2]), 0)) &&
          (0, Z[95])(
            (0, Z[75])(Z[86], Z[77], (0, Z[37])()),
            Z[56],
            Z[41],
            Z[2]
          ),
        Z[94] !== -10 &&
          (Z[60] < 9 ||
            ((0, Z[50])(
              (0, Z[70])(
                ((0, Z[28])(Z[74], Z[25]), (0, Z[54])(Z[53], Z[2]), Z[38])(
                  Z[74],
                  Z[82]
                ),
                Z[4],
                ((0, Z[59])(Z[new Date(f[19]) / 1e3], Z[82]), Z[80])(
                  Z[91],
                  Z[8],
                  (0, Z[81])()
                ),
                Z[33],
                Z[36],
                Z[82]
              ),
              Z[6],
              (((((0, Z[4])((0, Z[34])(Z[7], Z[37]), Z[2], Z[92], Z[87]),
              (0, Z[69])(Z[12], Z[65]),
              (0, Z[69])(Z[new Date(f[86]) / 1e3], Z[31]),
              (0, Z[40])((0, Z[0])(Z[43], Z[92]), Z[40], Z[64], Z[31]),
              Z[61])(Z[47], Z[new Date(f[6]) / 1e3]),
              Z[84])(Z[85], Z[75]),
              Z[69])(Z[75]),
              (0, Z[16])(Z[43], Z[95])),
              Z[21],
              Z[52]
            ),
            0)) &&
          (((((0, Z[46])((0, Z[42])(Z[83], Z[21]), Z[88], Z[47], Z[43]), Z[17])(
            Z[58],
            Z[96]
          ),
          (((0, Z[10])(Z[43]), Z[42])(Z[54], Z[20]), Z[42])(Z[79], Z[48]),
          (0, Z[42])(Z[19], Z[48]),
          (0, Z[67])(Z[51], Z[20], (0, Z[8])()),
          Z[46])((0, Z[27])(Z[21]), Z[42], Z[9], Z[21]),
          (0, Z[67])(Z[51], Z[20], (0, Z[8])()),
          Z[72])(
            (0, Z[92])(
              (0, Z[67])(Z[56], Z[96], (0, Z[8])()),
              Z[42],
              (0, Z[17])(Z[53], Z[55]),
              Z[65],
              Z[48]
            ),
            Z[46],
            (0, Z[new Date(f[75]) / 1e3])(Z[40], Z[21]),
            Z[42],
            Z[7],
            Z[21]
          ),
          Z[88])(Z[84], Z[55]);
    } catch (A) {
      (0, Z[10])(Z[48]),
        (0, Z[12])(Z[41], Z[43]),
        ((((0, Z[88])(Z[30], Z[55]), Z[42])(Z[34], Z[20]), Z[86])(Z[55], Z[3]),
        Z[42])(Z[23], Z[20]);
    }
  } catch (A) {
    return f[79] + E;
  }
  return b[f[21]](f[7]);
};

var jQ = {
  yz: function (E) {
    E[f[23]]();
  },
  qi: function (E, b) {
    E[f[47]](0, b);
  },
  YS: function (E, b) {
    var Z = E[0];
    E[0] = E[b % E[f[1]]];
    E[b % E[f[1]]] = Z;
  },
};

decrypt_sig = function (E) {
  E = E[f[12]](f[7]);
  jQ[f[5]](E, 1);
  jQ[f[30]](E, 44);
  jQ[f[44]](E, 8);
  jQ[f[5]](E, 2);
  jQ[f[44]](E, 45);
  jQ[f[44]](E, 34);
  jQ[f[5]](E, 1);
  return E[f[21]](f[7]);
};


