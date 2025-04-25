// extracted from :-> https://www.youtube.com/s/player/8102da6c/player_ias.vflset/en_US/base.js
var signatureTimestamp = "signatureTimestamp:20202";

var K =
  "1969-12-31T19:31:04.000-04:30{url{S{reverse{clone{1{split{{youtube.player.web_20250423_22_RC00{slice{Ko{unshift{startsWith{L{\\.googlevideo\\.com${path{splice{scheme{yV{toString{set{s{length{indexOf{={push{&{get{match{:{,{join{rr?[1-9].*\\.c\\.youtube\\.com${local{1969-12-31T21:15:21.000-02:45{,51];c[56]=c;{pm{?{prototype{1969-12-31T18:45:43.000-05:15{JD{rr{/api/manifest{__v4LZM5jLg6p0BleL-_w8_{www.youtube.com{cmo=td{r{n{B{forEach{1970-01-01T09:15:16.000+09:15{fromCharCode{sp{playerfallback{N{/{redirector.googlevideo.com{fallback_count{index.m3u8{mn{://{fvip{%3D{assign{1969-12-31T14:15:10.000-09:45{cmo={---{replace{/initplayback{/videoplayback{/file/index.m3u8{\\.a1\\.googlevideo\\.com${file{cmo{shift{pop{1970-01-01T11:15:43.000+11:15{1969-12-31T13:00:03.000-11:00{a1.googlevideo.com{undefined{ju{Untrusted URL{P8gjKK{signatureCipher{1970-01-01T11:15:55.000+11:15{,,,,\\,){cmo=pf{2{Y8{//".split(
    "{"
  );

decrypt_nsig = function (O) {
  var R = O[K[6]](K[7]),
    J = [
      -821978882,
      -1875871125,
      function (l, u, F, G, y, w, I, C, r, t, Z) {
        return I(r, t, Z);
      },
      K[35],
      1873633949,
      -428518524,
      -705356815,
      function (l, u, F, G, y, w, I, C, r, t, Z, V, m, E) {
        return u(F, G, y, w, I, C, r, t, Z, V, m, E);
      },
      918055670,
      243003917,
      function () {
        for (var l = 64, u = []; ++l - u[K[22]] - 32; ) {
          switch (l) {
            case 58:
              l -= 14;
            case 91:
            case 92:
            case 93:
              continue;
            case 123:
              l = 47;
            case 94:
            case 95:
            case 96:
              continue;
            case 46:
              l = 95;
          }
          u[K[25]](String[K[51]](l));
        }
        return u;
      },
      R,
      -1023427959,
      1030052953,
      function (l, u) {
        l[K[25]](u);
      },
      function () {
        for (var l = 64, u = []; ++l - u[K[22]] - 32; )
          switch (l) {
            case 46:
              l = 95;
            default:
              u[K[25]](String[K[51]](l));
            case 94:
            case 95:
            case 96:
              break;
            case 123:
              l -= 76;
            case 92:
            case 93:
              continue;
            case 58:
              l = 44;
            case 91:
          }
        return u;
      },
      -920793015,
      2080356780,
      null,
      K[82],
      820179310,
      function (l, u) {
        if (u[K[22]] != 0) {
          l = ((l % u[K[22]]) + u[K[22]]) % u[K[22]];
          var F = u[0];
          u[0] = u[l];
          u[l] = F;
        }
      },
      -30995163,
      function () {
        for (var l = 64, u = []; ++l - u[K[22]] - 32; )
          switch (l) {
            case 58:
              l = 96;
              continue;
            case 91:
              l = 44;
              break;
            case 65:
              l = 47;
              continue;
            case 46:
              l = 153;
            case 123:
              l -= 58;
            default:
              u[K[25]](String[K[51]](l));
          }
        return u;
      },
      2128290220,
      function (l, u) {
        for (u = ((u % l[K[22]]) + l[K[22]]) % l[K[22]]; u--; )
          l[K[11]](l[K[75]]());
      },
      -1228892647,
      855391341,
      -1875871125,
      /"(((,})'')()},)/,
      2072737762,
      -85570741,
      null,
      2078536093,
      -30995163,
      null,
      -1697155707,
      -1139675573,
      1720252745,
      2130000161,
      840450171,
      934814570,
      857819151,
      569763638,
      function (l, u) {
        u = ((u % l[K[22]]) + l[K[22]]) % l[K[22]];
        l[K[16]](u, 1);
      },
      -983852900,
      -1571115869,
      1831186424,
      function (l, u, F, G, y) {
        return u(F, G, y);
      },
      -1591516135,
      526347767,
      -276205141,
      -1025065365,
      1875508290,
      function (l, u) {
        u = ((u % l[K[22]]) + l[K[22]]) % l[K[22]];
        l[K[16]](-u)
          [K[3]]()
          [K[49]](function (F) {
            l[K[11]](F);
          });
      },
      -964154248,
      -301305632,
      -1219466570,
      1507840188,
      -995056518,
      K[85],
      function (l, u) {
        l[K[22]] != 0 &&
          ((u = ((u % l[K[22]]) + l[K[22]]) % l[K[22]]),
          l[K[16]](0, 1, l[K[16]](u, 1, l[0])[0]));
      },
      -1512294592,
      -995056518,
      R,
      function (l) {
        l[K[3]]();
      },
      function (l) {
        for (var u = l[K[22]]; u; ) l[K[25]](l[K[16]](--u, 1)[0]);
      },
      154905483,
      -832024894,
      R,
      225371449,
      49205883,
      -1292748784,
      -774019093,
      function (l, u, F, G, y, w) {
        return u(G, y, w);
      },
      -72652235,
      -1512294592,
      function () {
        for (var l = 64, u = []; ++l - u[K[22]] - 32; ) {
          switch (l) {
            case 91:
              l = 44;
              continue;
            case 123:
              l = 65;
              break;
            case 65:
              l -= 18;
              continue;
            case 58:
              l = 96;
              continue;
            case 46:
              l = 95;
          }
          u[K[25]](String[K[51]](l));
        }
        return u;
      },
      K[74],
      function (l, u, F) {
        var G = l[K[22]];
        F[K[49]](function (y, w, I) {
          this[K[25]](
            (I[w] = l[(l[K[23]](y) - l[K[23]](this[w]) + w + G--) % l[K[22]]])
          );
        }, u[K[6]](K[7]));
      },
    ];
  J[18] = J;
  J[32] = J;
  J[35] = J;
  // if (typeof qns === K[79]) return O; fix short circuit
  try {
    try {
      J[57] !== 5 &&
        (J[9] === -1 ||
          (((0, J[61])(J[69], J[68]), J[new Date(K[34]) / 1e3])(J[37], J[32]),
          K[7])) &&
        (0, J[48])(
          (0, J[54])(J[32], J[0]),
          J[79],
          (0, J[23])(),
          J[78],
          J[new Date(K[0]) / 1e3]
        ),
        J[53] > 3
          ? (((0, J[48])((0, J[54])(J[35], J[55]), J[58], J[27]), J[26])(
              J[23],
              J[59]
            ),
            J[21])(J[23])
          : (((0, J[66])(J[2], J[52]), J[8])((0, J[10])(), J[68], J[18]),
            J[39])((0, J[26])(J[76], J[78]), J[8], (0, J[77])(), J[68], J[23]),
        J[12] < 9 && (0, J[21])(J[23]),
        J[44] === -10
          ? (((0, J[26])(J[55], J[54]), J[22])(J[new Date(K[84]) / 1e3]), J[8])(
              (0, J[77])(),
              J[9],
              J[76]
            )
          : ((0, J[26])(J[55], J[75]), J[39])(
              (0, J[26])(J[76], J[74]),
              J[26],
              J[52],
              J[29]
            );
    } catch (l) {
      (((0, J[66])(J[14], J[18]), J[21])(J[18]), J[8])(
        (0, J[64])(),
        J[68],
        J[76]
      ),
        (0, J[new Date(K[76]) / 1e3])(J[76], J[16]);
    }
    try {
      J[42] != 1 && (((0, J[22])(J[23]), J[62])(J[52], J[17]), J[30])(J[61]),
        J[5] < new Date(K[64]) / 1e3 &&
          (J[72] >= 4 ||
            ((((((((0, J[31])((0, J[27])(J[47], J[7]), J[27], J[52], J[79]),
            J[57])(
              (0, J[57])(
                (0, J[27])(J[47], J[71]),
                J[27],
                (0, J[8])(J[52], J[32]),
                J[74],
                J[34]
              ),
              J[27],
              (0, J[8])(J[15], J[55]),
              J[15],
              J[21]
            ),
            J[62])((0, J[78])(), J[61], J[47]),
            J[62])((0, J[60])(), J[2], J[74]),
            J[27])(J[74], J[39]),
            J[62])((0, J[60])(), J[61], J[74]),
            J[27])(J[47], J[9]),
            K[7])) &&
          (0, J[29])(
            ((0, J[48])(J[47]), (0, J[4])(J[5], J[15]), J[0])(J[15], J[46]),
            J[27],
            (0, J[11])(J[36]),
            (0, J[11])(J[57]),
            (0, J[33])(J[75], J[70]),
            (0, J[6])((0, J[68])(J[65]), J[40], J[22], J[21]),
            (0, J[73])(J[65], J[27]),
            (0, J[37])(J[70], J[77]),
            J[73],
            (0, J[55])((0, J[39])(), J[35], J[43]),
            J[19],
            J[12]
          );
    } catch (l) {
      (0, J[10])(J[65], J[34]), (0, J[29])(J[new Date(K[39]) / 1e3], J[7]);
    } finally {
      J[14] !== -8 &&
        ((J[11] < 10 &&
          ((0, J[6])(
            (0, J[55])((0, J[57])(), J[35], J[65]),
            J[55],
            (0, J[44])(),
            J[35],
            J[43]
          ),
          1)) ||
          ((0, J[33])(J[13], J[65]), J[69])(J[22]));
    }
    try {
      J[50] !== 6
        ? (0, J[25])((0, J[23])(), J[24], J[37])
        : (0, J[70])(J[15], J[66]),
        J[18] <= 7 &&
          ((J[54] != 3 &&
            ((0, J[20])(
              ((0, J[74])(
                (0, J[74])((0, J[70])(J[15], J[57]), J[12], J[61]),
                J[10],
                J[43],
                J[11]
              ),
              J[29])(J[22], J[4]),
              J[3],
              (0, J[53])((0, J[80])(J[33], J[2]), J[35], J[2]),
              J[14],
              J[64]
            ),
            K[87])) ||
            ((0, J[80])(
              (0, J[4])((0, J[28])(), J[new Date(K[77]) / 1e3], J[75]),
              J[26],
              (0, J[53])((0, J[30])(J[23], J[44]), J[26], J[35], J[75]),
              J[11],
              J[16]
            ),
            ((0, J[72])(J[23]), J[22])(J[70], J[1]),
            J[26])(J[57], J[70])),
        (J[78] !== 7 ||
          ((0, J[53])(((0, J[72])(J[70]), J[71])(J[70]), J[72], J[23]),
          void 0)) &&
          (((0, J[26])(J[50], J[37]), J[22])(J[new Date(K[50]) / 1e3], J[73]),
          J[26])(J[58], J[70]);
    } catch (l) {
      (0, J[53])(
        ((0, J[49])(J[16], J[68]), (0, J[4])((0, J[20])(), J[3], J[75])),
        J[49],
        J[16],
        J[41]
      );
    }
  } catch (l) {
    return K[43] + O;
  }
  return R[K[31]](K[7]);
};

var LK = {
  JH: function (O, R) {
    var J = O[0];
    O[0] = O[R % O[K[22]]];
    O[R % O[K[22]]] = J;
  },
  yV: function (O, R) {
    O[K[16]](0, R);
  },
  JD: function (O) {
    O[K[3]]();
  },
};

decrypt_sig = function (O) {
  O = O[K[6]](K[7]);
  LK[K[40]](O, 24);
  LK[K[18]](O, 3);
  LK[K[40]](O, 40);
  LK[K[18]](O, 1);
  return O[K[31]](K[7]);
};


