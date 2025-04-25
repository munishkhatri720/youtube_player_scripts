// taken from :-> https://www.youtube.com/s/player/6450230e/player_ias.vflset/nl_NL/base.js
var signatureTimestamp = "signatureTimestamp:20199";

var Y = [
  "clone",
  "length",
  "set",
  "join",
  "/videoplayback",
  "slice",
  "G",
  "v_",
  "rW",
  "&",
  "X",
  "push",
  "scheme",
  "/api/manifest",
  "split",
  "url",
  "splice",
  "catch",
  "path",
  "",
  "1",
  "1969-12-31T15:46:11.000-08:15",
  "local",
  "indexOf",
  "cmo=pf",
  "match",
  "mn",
  "get",
  "toString",
  "reverse",
  "startsWith",
  "---",
  "S",
  "fromCharCode",
  "Rw78JYeWAh8550BmOL-_w8_",
  "?",
  "www.youtube.com",
  "://",
  "2gz7hT",
  "signatureCipher",
  "cmo",
  "null",
  ",",
  "=",
  "fq",
  "s",
  "cmo=",
  "1969-12-31T12:15:05.000-11:45",
  "%3D",
  "assign",
  "w4",
  "}'[{",
  "unshift",
  "cmo=td",
  "Y",
  "forEach",
  "/initplayback",
  "a1.googlevideo.com",
  "prototype",
  "n",
  "redirector.googlevideo.com",
  "1970-01-01T05:00:16.000+05:00",
  "file",
  "replace",
  "/",
  "1970-01-01T04:16:22.000+04:15",
  "playerfallback",
  "1969-12-31T20:31:18.000-03:30",
  "rr",
  "\\.a1\\.googlevideo\\.com$",
  "5",
  "fallback_count",
  "sp",
  "1969-12-31T15:03:11.000-09:00",
  "zN",
  "}']]",
  "rr?[1-9].*\\.c\\.youtube\\.com$",
  "undefined",
  "Untrusted URL",
  "\\.googlevideo\\.com$",
  "fvip",
  "//",
  "pop",
  "/file/index.m3u8",
  ":",
  "youtube.player.web_20250420_21_RC00",
  "index.m3u8",
  ",,';]\u00e2",
  "1969-12-31T15:31:11.000-08:30",
  "r",
];

var q3 = {
  rW: function (r, V) {
    var I = r[0];
    r[0] = r[V % r[Y[1]]];
    r[V % r[Y[1]]] = I;
  },
  Y6: function (r) {
    r[Y[29]]();
  },
  t0: function (r, V) {
    r[Y[16]](0, V);
  },
};

decrypt_sig = function (r) {
  r = r[Y[14]](Y[19]);
  q3[Y[8]](r, 30);
  q3[Y[8]](r, 65);
  q3[Y[8]](r, 2);
  return r[Y[3]](Y[19]);
};

decrypt_nsig = function (r) {
  var V = r[Y[14]](Y[19]),
    I = [
      1267048413,
      1397766003,
      null,
      495261862,
      -745606196,
      -429882724,
      function (d, a) {
        d[Y[16]](d[Y[1]], 0, a);
      },
      function (d, a) {
        a = ((a % d[Y[1]]) + d[Y[1]]) % d[Y[1]];
        d[Y[16]](a, 1);
      },
      1177304337,
      function (d) {
        for (var a = d[Y[1]]; a; ) d[Y[11]](d[Y[16]](--a, 1)[0]);
      },
      function (d, a, f, e, n, D) {
        return a(e, n, D);
      },
      -620449740,
      null,
      function () {
        for (var d = [], a = 64; ++a - d[Y[1]] - 32; )
          switch (a) {
            case 58:
              a = 96;
              continue;
            case 91:
              a = 44;
              break;
            case 65:
              a = 47;
              continue;
            case 46:
              a = 153;
            case 123:
              a -= 58;
            default:
              a[Y[11]](String[Y[33]](d));
          }
        return d;
      },
      -1187178829,
      -1522398594,
      -188432964,
      Y[17],
      function (d, a, f, e, n, D, x, E, N) {
        return f(e, n, D, x, E, N);
      },
      -1882441905,
      449628521,
      -547432353,
      function (d, a) {
        d[Y[1]] != 0 &&
          ((a = ((a % d[Y[1]]) + d[Y[1]]) % d[Y[1]]),
          d[Y[16]](0, 1, d[Y[16]](a, 1, d[0])[0]));
      },
      -1905327801,
      1781100345,
      function () {
        for (var d = 64, a = []; ++d - a[Y[1]] - 32; ) {
          switch (d) {
            case 91:
              d = 44;
              continue;
            case 123:
              d = 65;
              break;
            case 65:
              d -= 18;
              continue;
            case 58:
              d = 96;
              continue;
            case 46:
              d = 95;
          }
          a[Y[11]](String[Y[33]](d));
        }
        return a;
      },
      927084819,
      591801942,
      -1518248908,
      function (d, a) {
        for (a = ((a % d[Y[1]]) + d[Y[1]]) % d[Y[1]]; a--; )
          d[Y[52]](d[Y[82]]());
      },
      23515517,
      V,
      null,
      1267877004,
      -1427554258,
      -2055985030,
      -838827690,
      function (d) {
        for (var a = d[Y[1]]; a; ) d[Y[11]](d[Y[16]](--a, 1)[0]);
      },
      1507052277,
      Y[87],
      -1304804842,
      -254325567,
      1922131804,
      function () {
        for (var d = 64, a = []; ++d - a[Y[1]] - 32; )
          switch (d) {
            case 58:
              d = 96;
              continue;
            case 91:
              d = 44;
              break;
            case 65:
              d = 47;
              continue;
            case 46:
              d = 153;
            case 123:
              d -= 58;
            default:
              a[Y[11]](String[Y[33]](d));
          }
        return a;
      },
      1408767479,
      -254325567,
      1277025082,
      539683933,
      1722876838,
      Y[51],
      function (d, a, f, e, n) {
        return a(f, e, n);
      },
      V,
      1558808105,
      function (d) {
        d[Y[29]]();
      },
      function (d, a, f) {
        var e = f[Y[1]];
        d[Y[55]](function (n, D, x) {
          this[Y[11]](
            (x[D] = f[(f[Y[23]](n) - f[Y[23]](this[D]) + D + e--) % f[Y[1]]])
          );
        }, a[Y[14]](Y[19]));
      },
      1107280771,
      function () {
        for (var d = 64, a = []; ++d - a[Y[1]] - 32; ) {
          switch (d) {
            case 58:
              d -= 14;
            case 91:
            case 92:
            case 93:
              continue;
            case 123:
              d = 47;
            case 94:
            case 95:
            case 96:
              continue;
            case 46:
              d = 95;
          }
          a[Y[11]](String[Y[33]](d));
        }
        return a;
      },
      -482395033,
      591801942,
      2109669297,
      -1239876007,
      V,
      -573935268,
      function (d, a) {
        if (a[Y[1]] != 0) {
          d = ((d % a[Y[1]]) + a[Y[1]]) % a[Y[1]];
          var f = a[0];
          a[0] = a[d];
          a[d] = f;
        }
      },
      -787830633,
      -595693483,
      Y[38],
      -224711242,
      664893466,
      Y[75],
      function (d, a) {
        d = ((d % a[Y[1]]) + a[Y[1]]) % a[Y[1]];
        a[Y[16]](-d)
          [Y[29]]()
          [Y[55]](function (f) {
            a[Y[52]](f);
          });
      },
      1000411668,
      function () {
        for (var d = 64, a = []; ++d - a[Y[1]] - 32; )
          switch (d) {
            case 46:
              d = 95;
            default:
              a[Y[11]](String[Y[33]](d));
            case 94:
            case 95:
            case 96:
              break;
            case 123:
              d -= 76;
            case 92:
            case 93:
              continue;
            case 58:
              d = 44;
            case 91:
          }
        return a;
      },
      -2132466095,
      1072810648,
      765493843,
      -342446484,
      2045514513,
      -745606196,
      -1503512295,
      501343723,
      -808675590,
      -1008781111,
      -2037309471,
    ];
  I[2] = I;
  I[12] = I;
  I[32] = I;
  // if (typeof LSU === Y[77]) return r; LSU is undefined in the global variable array.
  try {
    try {
      I[65] != -9 &&
        ((I[46] != -5 &&
          ((0, I[50])(
            ((0, I[29])(I[12], I[81]), I[40])(I[77], I[1]),
            I[60],
            I[56],
            I[30]
          ),
          Y[41])) ||
          (0, I[20])(
            (0, I[20])((0, I[61])(I[1], I[68]), I[61], I[21], I[53]),
            I[40],
            I[52],
            I[56]
          )),
        I[50] != 3 &&
          (I[55] === -4
            ? (((0, I[76])(I[2], I[70]), I[40])(I[78], I[56]), I[61])(
                I[1],
                I[22]
              )
            : (0, I[20])(
                ((0, I[83])(I[2], I[80]), I[59])(I[69], I[20]),
                I[59],
                I[51],
                I[75]
              )),
        I[54] >= 0 &&
          ((I[61] != -5 &&
            ((((0, I[71])((0, I[26])(I[53], I[42]), I[6], I[23], I[82]),
            (0, I[85])(I[82], I[15]),
            ((0, I[75])(I[82], I[37], (0, I[77])()), I[74])(I[82]),
            I[27])(I[72], I[47]),
            I[84])(I[69], I[53]),
            Y[70])) ||
            ((((0, I[27])(I[0], I[40]), I[49])(I[0], I[55]), I[30])(
              (0, I[49])(I[82], I[4]) ^ (0, I[58])(I[72]),
              I[58],
              (0, I[75])(I[72], I[37], (0, I[45])()),
              I[22]
            ),
            I[75])(I[82], I[2], (0, I[77])())),
        I[1] <= -8 &&
          (0, I[30])(
            (0, I[49])(I[22], I[78]),
            I[35],
            (0, I[25])(I[33]),
            I[46],
            I[(32 % (new Date(Y[65]) / 1e3)) + 512 - 540]
          ),
        I[54] <= -3 &&
          (((0, I[22])((0, I[66])(I[69]), I[50], I[80], I[26]), I[6])(
            I[48],
            I[47]
          ),
          (0, I[63])(
            (0, I[63])((0, I[49])(I[48], I[78]), I[49], I[48], I[38]),
            I[49],
            I[81],
            I[7]
          ),
          I[50])(I[75], I[52]),
        (I[72] >= 0 || ((0, I[32])(I[16], I[66]), 0)) &&
          (0, I[22])(I[25], I[60], (0, I[20])()),
        I[1] !== 8 &&
          (I[41] < 2
            ? (0, I[5])(I[72], I[65])
            : (0, I[42])(I[219 - (1296 % (new Date(Y[73]) / 1e3))], I[58])),
        I[20] !== -8 &&
          (0, I[84])(
            ((0, I[63])(I[41], I[83]), I[new Date(Y[21]) / 1e3])(I[6], I[37]),
            I[new Date(Y[88]) / 1e3],
            I[49],
            I[37]
          );
    } catch (d) {
      (0, I[42])(I[83], I[30]),
        (0, I[84])((0, I[80])(I[69], I[67], (0, I[78])()), I[53], I[83], I[4]),
        (0, I[27])(I[new Date(Y[61]) / 1e3], I[57]),
        (0, I[81])(I[16]),
        (0, I[39])(
          (0, I[80])(I[83], I[67], (0, I[5])()),
          I[81],
          (0, I[42])(I[83], I[74]),
          I[69]
        );
    }
    try {
      (I[51] <= 8 &&
        ((0, I[31])(
          ((0, I[63])(I[56], I[16]),
          (0, I[18])(I[17], I[78]),
          (0, I[new Date(Y[67]) / 1e3])(I[41], I[27])),
          (0, I[11])(
            ((0, I[76])(I[21], I[60]),
            (0, I[48])(I[74], I[22]),
            (0, I[62])(I[51], I[49], (0, I[6])())),
            I[45],
            I[57],
            I[51]
          ),
          I[66],
          (((0, I[22])(I[55]), I[24])(I[65], I[0]), I[75])(I[51], I[61]),
          I[63],
          I[55]
        ) ||
          new Date(Y[47]) / 1e3)) ||
        (0, I[21])(
          ((((0, I[45])(I[20], I[65]), I[63])(I[55]),
          (0, I[66])((0, I[53])(I[30], I[84]), I[53], I[27], I[84]),
          I[62])(I[65], I[14], (0, I[43])()),
          I[21])(
            ((0, I[62])(I[51], I[49], (0, I[60])()), I[75])(I[19], I[16]),
            I[24],
            (0, I[24])(I[55], I[3]),
            I[29],
            I[77]
          ),
          I[24],
          (0, I[45])(I[80], I[55]),
          I[29],
          I[85]
        ),
        (((0, I[62])(I[65], I[14], I[18]), I[63])(I[65]), I[62])(
          I[65],
          I[49],
          (0, I[60])()
        );
    } catch (d) {}
  } catch (d) {
    return Y[34] + r;
  }
  return V[Y[3]](Y[19]);
};
