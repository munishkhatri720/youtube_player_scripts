// taken from :-> https://www.youtube.com/s/player/12b61286/player_ias.vflset/de_DE/base.js
var signatureTimestamp = "signatureTimestamp:20207";

var l =
  "/;%3D;K;splice;path;;join;/api/manifest;length;set;1;pz;startsWith;toString;local;scheme;r;prototype;indexOf;/videoplayback;1970-01-01T09:30:50.000+09:30;W;file;push;fallback_count;slice;G;n;cmo=pf;,;url;fromCharCode;&;split;unshift;youtube.player.web_20250428_21_RC00;1969-12-31T18:00:20.000-06:00;playerfallback;get;cmo=;1970-01-01T02:00:01.000+02:00;---;Ol;fvip;wW;assign;T;rr?[1-9].*\\.c\\.youtube\\.com$;\\.a1\\.googlevideo\\.com$;forEach;Ow;match;=;yu;xS;sp;signatureCipher;:;s;9GPrPA;rr;xm;://;reverse;undefined;Untrusted URL;a1.googlevideo.com;clone;cmo;//;mn;redirector.googlevideo.com;/initplayback;\\.googlevideo\\.com$;mRVMLJQoZKg750BkOL-_w8_;index.m3u8;/file/index.m3u8;?;cmo=td;www.youtube.com;pop;replace".split(
    ";"
  );

decrypt_nsig = function (W) {
  var J = W[l[33]](l[5]),
    K = [
      -1306461231,
      -1667412264,
      77751661,
      -1720112897,
      -1234861538,
      253622148,
      -1976719550,
      -1420674872,
      function (I, q, S, p, n) {
        return q(S, p, n);
      },
      -661461452,
      function () {
        for (var I = 64, q = []; ++I - q[l[8]] - 32; ) {
          switch (I) {
            case 91:
              I = 44;
              continue;
            case 123:
              I = 65;
              break;
            case 65:
              I -= 18;
              continue;
            case 58:
              I = 96;
              continue;
            case 46:
              I = 95;
          }
          q[l[23]](String[l[31]](I));
        }
        return q;
      },
      function (I, q) {
        I[l[8]] != 0 &&
          ((q = ((q % I[l[8]]) + I[l[8]]) % I[l[8]]),
          I[l[3]](0, 1, I[l[3]](q, 1, I[0])[0]));
      },
      J,
      -1620715758,
      function () {
        for (var I = 64, q = []; ++I - q[l[8]] - 32; )
          switch (I) {
            case 46:
              I = 95;
            default:
              q[l[23]](String[l[31]](I));
            case 94:
            case 95:
            case 96:
              break;
            case 123:
              I -= 76;
            case 92:
            case 93:
              continue;
            case 58:
              I = 44;
            case 91:
          }
        return q;
      },
      271186632,
      -1901716350,
      J,
      function (I, q, S, p, n, A, D, f) {
        return q(S, p, n, A, D, f);
      },
      function (I, q, S, p, n, A) {
        return q(p, n, A);
      },
      -1261452504,
      1424963071,
      l[59],
      null,
      null,
      function () {
        for (var I = 64, q = []; ++I - q[l[8]] - 32; ) {
          switch (I) {
            case 58:
              I -= 14;
            case 91:
            case 92:
            case 93:
              continue;
            case 123:
              I = 47;
            case 94:
            case 95:
            case 96:
              continue;
            case 46:
              I = 95;
          }
          q[l[23]](String[l[31]](I));
        }
        return q;
      },
      -1263394691,
      J,
      function (I, q) {
        for (q = ((q % I[l[8]]) + I[l[8]]) % I[l[8]]; q--; )
          I[l[34]](I[l[80]]());
      },
      1008037584,
      -1356391341,
      61300726,
      1513031706,
      1497832984,
      603994404,
      -1343429668,
      /;()\/[\]]/,
      function (I) {
        for (var q = I[l[8]]; q; ) I[l[23]](I[l[3]](--q, 1)[0]);
      },
      2059087423,
      function () {
        for (var I = 64, q = []; ++I - q[l[8]] - 32; )
          switch (I) {
            case 58:
              I = 96;
              continue;
            case 91:
              I = 44;
              break;
            case 65:
              I = 47;
              continue;
            case 46:
              I = 153;
            case 123:
              I -= 58;
            default:
              q[l[23]](String[l[31]](I));
          }
        return q;
      },
      162644912,
      -1464487258,
      -211960695,
      -890872755,
      651881734,
      1894104560,
      -1433821761,
      1322466352,
      -1261452504,
      -1582771625,
      -303644716,
      179566659,
      1206487301,
      function (I, q) {
        q = ((q % I[l[8]]) + I[l[8]]) % I[l[8]];
        I[l[3]](q, 1);
      },
      1428359270,
      function (I, q) {
        I = ((I % q[l[8]]) + q[l[8]]) % q[l[8]];
        q[l[3]](-I)
          [l[63]]()
          [l[49]](function (S) {
            q[l[34]](S);
          });
      },
      -1646541112,
      function (I) {
        I[l[63]]();
      },
      -1092623947,
      function (I, q) {
        I[l[3]](I[l[8]], 0, q);
      },
      function (I, q) {
        if (I[l[8]] != 0) {
          q = ((q % I[l[8]]) + I[l[8]]) % I[l[8]];
          var S = I[0];
          I[0] = I[q];
          I[q] = S;
        }
      },
      476144601,
      -2007773876,
      null,
      1809104789,
      function (I, q, S) {
        var p = S[l[8]];
        I[l[49]](function (n, A, D) {
          this[l[23]](
            (D[A] = S[(S[l[18]](n) - S[l[18]](this[A]) + A + p--) % S[l[8]]])
          );
        }, q[l[33]](l[5]));
      },
    ];
  K[23] = K;
  K[24] = K;
  K[63] = K;
  //if (typeof Ou0 === l[64]) return W; fix short-circuit
  try {
    try {
      K[52] != 6 &&
        ((K[62] == 6 &&
          ((0, K[8])((0, K[37])(K[27]), K[53], K[27], K[40]), 1)) ||
          ((0, K[57])(K[23]), K[8])(K[41])),
        K[3] != 6 && (0, K[37])(K[27]) * (0, K[60])(K[24], K[3]),
        (K[26] > 1 &&
          ((0, K[8])(
            ((0, K[65])(K[27], K[22], (0, K[0])()),
            (0, K[53])(K[63], K[44]),
            K[53])(K[24], K[26]),
            K[53],
            K[12],
            K[35]
          ),
          l[64])) ||
          (0, K[8])(
            ((0, K[8])((0, K[28])(K[27], K[42]), K[53], K[12], K[30]), K[28])(
              K[23],
              K[33]
            ),
            K[38],
            K[34],
            K[11]
          ),
        K[29] !== 0 && (0, K[26])(K[61], K[23]),
        K[29] !== 3 &&
          (0, K[63])(
            (0, K[63])(
              ((0, K[26])(K[12]), K[16])(K[64], K[27]),
              K[21],
              K[30],
              K[49]
            ),
            K[21],
            K[12],
            K[52]
          ) >=
            (0, K[60])(K[39]) >
            ((0, K[32])(
              (0, K[57])(K[27], K[36]),
              K[52],
              (0, K[23])(K[27], K[17]),
              K[58],
              K[53],
              (0, K[61])()
            ),
            K[15])(K[58], K[62]) <=
            (0, K[16])(K[12], K[64]),
        K[59] < 4 &&
          (K[35] === -9
            ? ((((0, K[56])(
                (0, K[38])(K[52]),
                K[10],
                (0, K[10])(K[58], K[53], (0, K[new Date(l[20]) / 1e3 - 14])()),
                K[24],
                K[53],
                (0, K[36])()
              ),
              K[10])(K[58], K[53], (0, K[65])()),
              K[22])(K[12], K[37]),
              K[10])(K[63], K[53], (0, K[61])())
            : (0, K[57])(
                (0, K[1])(
                  (0, K[1])(
                    (0, K[47])(K[12], K[43]) * (0, K[51])(K[37], K[12]),
                    K[46],
                    K[37],
                    K[4]
                  ),
                  K[5],
                  K[55],
                  K[37]
                ),
                K[62],
                (0, K[55])(K[52], K[38]),
                K[12],
                K[6]
              )),
        (K[3] <= 8 ||
          (((((((0, K[50])(K[9], K[49]), K[54])(K[new Date(l[36]) / 1e3]),
          K[34])(K[60]),
          (0, K[62])(K[48], K[19], (0, K[36])()),
          K[11])(K[9], K[58]),
          ((0, K[62])(K[14], K[19], (0, K[22])()), K[4])(
            (0, K[62])(K[9], K[19], (0, K[22])()),
            K[62],
            K[9],
            K[19],
            (0, K[7])()
          ),
          K[62])(K[48], K[19], (0, K[36])()),
          K[62])(K[9], K[19], (0, K[22])()),
          0)) &&
          (((0, K[8])(K[14], K[38]), K[50])(K[14], K[1]) *
            (0, K[52])(K[13], K[14])) >>
            ((((0, K[4])((0, K[11])(K[20], K[24]), K[34], K[20]), K[16])(
              K[18],
              K[1]
            ),
            (0, K[41])(K[46], K[19]),
            (0, K[9])(K[39], K[36]),
            K[14])(K[6], K[43]) ^
              (0, K[9])(K[39], K[15])),
        (K[59] <= -2 &&
          ((((0, K[37])(K[11], K[2]), K[25])(K[39], K[1], (0, K[13])()), K[53])(
            K[27]
          ),
          1)) ||
          (0, K[5])(
            (0, K[33])(K[39]),
            K[16],
            (0, K[37])(K[11], K[17]),
            K[62],
            K[39],
            K[28]
          );
    } catch (I) {
      (0, K[16])((0, K[37])(K[27], K[20]), K[37], K[39], K[47]),
        ((0, K[25])(K[11], K[new Date(l[40]) / 1e3], (0, K[65])()), K[9])(
          K[0],
          K[32]
        ),
        ((0, K[16])((0, K[35])(K[45], K[11]), K[25], K[11], K[1], (0, K[51])()),
        K[12])(K[0], K[61]),
        (0, K[33])(K[6]);
    }
  } catch (I) {
    return l[74] + W;
  }
  return J[l[6]](l[5]);
};

var YR = {
  pz: function (W, J) {
    W[l[3]](0, J);
  },
  Ow: function (W, J) {
    var K = W[0];
    W[0] = W[J % W[l[8]]];
    W[J % W[l[8]]] = K;
  },
  wW: function (W) {
    W[l[63]]();
  },
};

decrypt_sig = function (W) {
  W = W[l[33]](l[5]);
  YR[l[11]](W, 1);
  YR[l[44]](W, 67);
  YR[l[11]](W, 2);
  YR[l[50]](W, 59);
  YR[l[11]](W, 2);
  YR[l[44]](W, 29);
  YR[l[50]](W, 10);
  return W[l[6]](l[5]);
};
