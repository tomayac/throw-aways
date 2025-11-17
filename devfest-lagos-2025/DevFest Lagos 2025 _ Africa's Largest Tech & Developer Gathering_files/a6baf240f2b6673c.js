(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  39952,
  (e) => {
    e.v({
      bioContent: 'speaker-module-scss-module__rY-ePG__bioContent',
      description: 'speaker-module-scss-module__rY-ePG__description',
      image: 'speaker-module-scss-module__rY-ePG__image',
      imageWrapper: 'speaker-module-scss-module__rY-ePG__imageWrapper',
      info: 'speaker-module-scss-module__rY-ePG__info',
      name: 'speaker-module-scss-module__rY-ePG__name',
      reduceHeightOnMobile:
        'speaker-module-scss-module__rY-ePG__reduceHeightOnMobile',
      socialMediaLink: 'speaker-module-scss-module__rY-ePG__socialMediaLink',
      socialMediaLinks: 'speaker-module-scss-module__rY-ePG__socialMediaLinks',
      speaker: 'speaker-module-scss-module__rY-ePG__speaker',
      tagline: 'speaker-module-scss-module__rY-ePG__tagline',
    });
  },
  93862,
  (e) => {
    'use strict';
    e.s(['Speaker', () => rD], 93862);
    var t,
      r,
      n,
      i,
      s,
      a = e.i(30718);
    e.s(
      [
        'BailSignal',
        () => tq,
        'Controller',
        () => t8,
        'FrameValue',
        () => tW,
        'Interpolation',
        () => rb,
        'Spring',
        () => rg,
        'SpringContext',
        () => rr,
        'SpringRef',
        () => rn,
        'SpringValue',
        () => tH,
        'Trail',
        () => rv,
        'Transition',
        () => ry,
        'config',
        () => tA,
        'inferTo',
        () => ty,
        'interpolate',
        () => rP,
        'to',
        () => rk,
        'update',
        () => rA,
        'useChain',
        () => tP,
        'useInView',
        () => rm,
        'useResize',
        () => rh,
        'useScroll',
        () => rc,
        'useSpring',
        () => rs,
        'useSpringRef',
        () => ro,
        'useSpringValue',
        () => rl,
        'useSprings',
        () => ri,
        'useTrail',
        () => ru,
        'useTransition',
        () => rf,
      ],
      84954
    );
    var o = k(),
      l = (e) => b(e, o),
      u = k();
    l.write = (e) => b(e, u);
    var f = k();
    l.onStart = (e) => b(e, f);
    var d = k();
    l.onFrame = (e) => b(e, d);
    var c = k();
    l.onFinish = (e) => b(e, c);
    var h = [];
    l.setTimeout = (e, t) => {
      let r = l.now() + t,
        n = () => {
          let e = h.findIndex((e) => e.cancel == n);
          (~e && h.splice(e, 1), (v -= !!~e));
        },
        i = { time: r, handler: e, cancel: n };
      return (h.splice(p(r), 0, i), (v += 1), x(), i);
    };
    var p = (e) => ~(~h.findIndex((t) => t.time > e) || ~h.length);
    ((l.cancel = (e) => {
      (f.delete(e), d.delete(e), c.delete(e), o.delete(e), u.delete(e));
    }),
      (l.sync = (e) => {
        ((y = !0), l.batchedUpdates(e), (y = !1));
      }),
      (l.throttle = (e) => {
        let t;
        function r() {
          try {
            e(...t);
          } finally {
            t = null;
          }
        }
        function n() {
          for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
            n[i] = arguments[i];
          ((t = n), l.onStart(r));
        }
        return (
          (n.handler = e),
          (n.cancel = () => {
            (f.delete(r), (t = null));
          }),
          n
        );
      }));
    var m =
      'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((l.use = (e) => (m = e)),
      (l.now =
        'undefined' != typeof performance ? () => performance.now() : Date.now),
      (l.batchedUpdates = (e) => e()),
      (l.catch = console.error),
      (l.frameLoop = 'always'),
      (l.advance = () => {
        'demand' !== l.frameLoop
          ? console.warn(
              'Cannot call the manual advancement of rafz whilst frameLoop is not set as demand'
            )
          : w();
      }));
    var g = -1,
      v = 0,
      y = !1;
    function b(e, t) {
      y ? (t.delete(e), e(0)) : (t.add(e), x());
    }
    function x() {
      g < 0 && ((g = 0), 'demand' !== l.frameLoop && m(_));
    }
    function _() {
      ~g && (m(_), l.batchedUpdates(w));
    }
    function w() {
      let e = g,
        t = p((g = l.now()));
      if ((t && (P(h.splice(0, t), (e) => e.handler()), (v -= t)), !v))
        return void (g = -1);
      (f.flush(),
        o.flush(e ? Math.min(64, g - e) : 16.667),
        d.flush(),
        u.flush(),
        c.flush());
    }
    function k() {
      let e = new Set(),
        t = e;
      return {
        add(r) {
          ((v += +!(t != e || e.has(r))), e.add(r));
        },
        delete: (r) => ((v -= t == e && e.has(r) ? 1 : 0), e.delete(r)),
        flush(r) {
          t.size &&
            ((e = new Set()),
            (v -= t.size),
            P(t, (t) => t(r) && e.add(t)),
            (v += e.size),
            (t = e));
        },
      };
    }
    function P(e, t) {
      e.forEach((e) => {
        try {
          t(e);
        } catch (e) {
          l.catch(e);
        }
      });
    }
    var A = e.i(22446),
      S = Object.defineProperty,
      C = {};
    function R() {}
    ((e, t) => {
      for (var r in t) S(e, r, { get: t[r], enumerable: !0 });
    })(C, {
      assign: () => N,
      colors: () => T,
      createStringInterpolator: () => t,
      skipAnimation: () => q,
      to: () => r,
      willAdvance: () => L,
    });
    var E = {
      arr: Array.isArray,
      obj: (e) => !!e && 'Object' === e.constructor.name,
      fun: (e) => 'function' == typeof e,
      str: (e) => 'string' == typeof e,
      num: (e) => 'number' == typeof e,
      und: (e) => void 0 === e,
    };
    function I(e, t) {
      if (E.arr(e)) {
        if (!E.arr(t) || e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      return e === t;
    }
    var j = (e, t) => e.forEach(t);
    function M(e, t, r) {
      if (E.arr(e)) {
        for (let n = 0; n < e.length; n++) t.call(r, e[n], ''.concat(n));
        return;
      }
      for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n);
    }
    var O = (e) => (E.und(e) ? [] : E.arr(e) ? e : [e]);
    function V(e, t) {
      if (e.size) {
        let r = Array.from(e);
        (e.clear(), j(r, t));
      }
    }
    var z = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return V(e, (e) => e(...r));
      },
      F = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
      T = null,
      q = !1,
      L = R,
      N = (e) => {
        (e.to && (r = e.to),
          e.now && (l.now = e.now),
          void 0 !== e.colors && (T = e.colors),
          null != e.skipAnimation && (q = e.skipAnimation),
          e.createStringInterpolator && (t = e.createStringInterpolator),
          e.requestAnimationFrame && l.use(e.requestAnimationFrame),
          e.batchedUpdates && (l.batchedUpdates = e.batchedUpdates),
          e.willAdvance && (L = e.willAdvance),
          e.frameLoop && (l.frameLoop = e.frameLoop));
      },
      W = new Set(),
      U = [],
      G = [],
      Q = 0,
      Y = {
        get idle() {
          return !W.size && !U.length;
        },
        start(e) {
          Q > e.priority ? (W.add(e), l.onStart(D)) : (B(e), l(X));
        },
        advance: X,
        sort(e) {
          if (Q) l.onFrame(() => Y.sort(e));
          else {
            let t = U.indexOf(e);
            ~t && (U.splice(t, 1), H(e));
          }
        },
        clear() {
          ((U = []), W.clear());
        },
      };
    function D() {
      (W.forEach(B), W.clear(), l(X));
    }
    function B(e) {
      U.includes(e) || H(e);
    }
    function H(e) {
      U.splice(
        (function (e, t) {
          let r = e.findIndex(t);
          return r < 0 ? e.length : r;
        })(U, (t) => t.priority > e.priority),
        0,
        e
      );
    }
    function X(e) {
      let t = G;
      for (let r = 0; r < U.length; r++) {
        let n = U[r];
        ((Q = n.priority),
          !n.idle && (L(n), n.advance(e), n.idle || t.push(n)));
      }
      return ((Q = 0), ((G = U).length = 0), (U = t).length > 0);
    }
    var $ = '[-+]?\\d*\\.?\\d+',
      Z = $ + '%';
    function K() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return '\\(\\s*(' + t.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var J = RegExp('rgb' + K($, $, $)),
      ee = RegExp('rgba' + K($, $, $, $)),
      et = RegExp('hsl' + K($, Z, Z)),
      er = RegExp('hsla' + K($, Z, Z, $)),
      en = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      ei =
        /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      es = /^#([0-9a-fA-F]{6})$/,
      ea = /^#([0-9a-fA-F]{8})$/;
    function eo(e, t, r) {
      return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
        ? e + (t - e) * 6 * r
        : r < 0.5
          ? t
          : r < 2 / 3
            ? e + (t - e) * (2 / 3 - r) * 6
            : e;
    }
    function el(e, t, r) {
      let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
        i = 2 * r - n,
        s = eo(i, n, e + 1 / 3);
      return (
        (Math.round(255 * s) << 24) |
        (Math.round(255 * eo(i, n, e)) << 16) |
        (Math.round(255 * eo(i, n, e - 1 / 3)) << 8)
      );
    }
    function eu(e) {
      let t = parseInt(e, 10);
      return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function ef(e) {
      return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function ed(e) {
      let t = parseFloat(e);
      return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function ec(e) {
      let t = parseFloat(e);
      return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function eh(e) {
      let t,
        r =
          'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 0xffffffff
              ? e
              : null
            : (t = es.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : T && void 0 !== T[e]
                ? T[e]
                : (t = J.exec(e))
                  ? ((eu(t[1]) << 24) |
                      (eu(t[2]) << 16) |
                      (eu(t[3]) << 8) |
                      255) >>>
                    0
                  : (t = ee.exec(e))
                    ? ((eu(t[1]) << 24) |
                        (eu(t[2]) << 16) |
                        (eu(t[3]) << 8) |
                        ed(t[4])) >>>
                      0
                    : (t = en.exec(e))
                      ? parseInt(
                          t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff',
                          16
                        ) >>> 0
                      : (t = ea.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = ei.exec(e))
                          ? parseInt(
                              t[1] +
                                t[1] +
                                t[2] +
                                t[2] +
                                t[3] +
                                t[3] +
                                t[4] +
                                t[4],
                              16
                            ) >>> 0
                          : (t = et.exec(e))
                            ? (255 | el(ef(t[1]), ec(t[2]), ec(t[3]))) >>> 0
                            : (t = er.exec(e))
                              ? (el(ef(t[1]), ec(t[2]), ec(t[3])) |
                                  ed(t[4])) >>>
                                0
                              : null;
      if (null === r) return e;
      let n = (0xff000000 & (r = r || 0)) >>> 24,
        i = (0xff0000 & r) >>> 16,
        s = (65280 & r) >>> 8,
        a = (255 & r) / 255;
      return 'rgba('
        .concat(n, ', ')
        .concat(i, ', ')
        .concat(s, ', ')
        .concat(a, ')');
    }
    var ep = (e, r, n) => {
        if (E.fun(e)) return e;
        if (E.arr(e)) return ep({ range: e, output: r, extrapolate: n });
        if (E.str(e.output[0])) return t(e);
        let i = e.output,
          s = e.range || [0, 1],
          a = e.extrapolateLeft || e.extrapolate || 'extend',
          o = e.extrapolateRight || e.extrapolate || 'extend',
          l = e.easing || ((e) => e);
        return (t) => {
          let r = (function (e, t) {
            for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
            return r - 1;
          })(t, s);
          return (function (e, t, r, n, i, s, a, o, l) {
            let u = l ? l(e) : e;
            if (u < t)
              if ('identity' === a) return u;
              else 'clamp' === a && (u = t);
            if (u > r)
              if ('identity' === o) return u;
              else 'clamp' === o && (u = r);
            return n === i
              ? n
              : t === r
                ? e <= t
                  ? n
                  : i
                : (t === -1 / 0
                    ? (u = -u)
                    : r === 1 / 0
                      ? (u -= t)
                      : (u = (u - t) / (r - t)),
                  (u = s(u)),
                  n === -1 / 0
                    ? (u = -u)
                    : i === 1 / 0
                      ? (u += n)
                      : (u = u * (i - n) + n),
                  u);
          })(t, s[r], s[r + 1], i[r], i[r + 1], l, a, o, e.map);
        };
      },
      em = Symbol.for('FluidValue.get'),
      eg = Symbol.for('FluidValue.observers'),
      ev = (e) => !!(e && e[em]),
      ey = (e) => (e && e[em] ? e[em]() : e),
      eb = (e) => e[eg] || null;
    function ex(e, t) {
      let r = e[eg];
      r &&
        r.forEach((e) => {
          e.eventObserved ? e.eventObserved(t) : e(t);
        });
    }
    var e_ = class {
        constructor(e) {
          if (!e && !(e = this.get)) throw Error('Unknown getter');
          ew(this, e);
        }
      },
      ew = (e, t) => eA(e, em, t);
    function ek(e, t) {
      if (e[em]) {
        let r = e[eg];
        (r || eA(e, eg, (r = new Set())),
          !r.has(t) &&
            (r.add(t), e.observerAdded && e.observerAdded(r.size, t)));
      }
      return t;
    }
    function eP(e, t) {
      let r = e[eg];
      if (r && r.has(t)) {
        let n = r.size - 1;
        (n ? r.delete(t) : (e[eg] = null),
          e.observerRemoved && e.observerRemoved(n, t));
      }
    }
    var eA = (e, t, r) =>
        Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0,
        }),
      eS = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      eC =
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
      eR = RegExp('('.concat(eS.source, ')(%|[a-z]+)'), 'i'),
      eE = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
      eI = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
      ej = (e) => {
        let [t, r] = eM(e);
        if (!t || F()) return e;
        let n = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(t);
        if (n) return n.trim();
        if (r && r.startsWith('--')) {
          let e = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(r);
          if (e) return e;
        } else if (r && eI.test(r)) return ej(r);
        else if (r) return r;
        return e;
      },
      eM = (e) => {
        let t = eI.exec(e);
        if (!t) return [,];
        let [, r, n] = t;
        return [r, n];
      },
      eO = (e, t, r, n, i) =>
        'rgba('
          .concat(Math.round(t), ', ')
          .concat(Math.round(r), ', ')
          .concat(Math.round(n), ', ')
          .concat(i, ')'),
      eV = (e) => {
        n ||
          (n = T
            ? RegExp('('.concat(Object.keys(T).join('|'), ')(?!\\w)'), 'g')
            : /^\b$/);
        let t = e.output.map((e) =>
            ey(e).replace(eI, ej).replace(eC, eh).replace(n, eh)
          ),
          r = t.map((e) => e.match(eS).map(Number)),
          i = r[0]
            .map((e, t) =>
              r.map((e) => {
                if (!(t in e))
                  throw Error('The arity of each "output" value must be equal');
                return e[t];
              })
            )
            .map((t) => ep({ ...e, output: t }));
        return (e) => {
          var r;
          let n =
              !eR.test(t[0]) &&
              (null == (r = t.find((e) => eR.test(e)))
                ? void 0
                : r.replace(eS, '')),
            s = 0;
          return t[0]
            .replace(eS, () => ''.concat(i[s++](e)).concat(n || ''))
            .replace(eE, eO);
        };
      },
      ez = 'react-spring: ',
      eF = (e) => {
        let t = !1;
        if ('function' != typeof e)
          throw TypeError(''.concat(ez, 'once requires a function parameter'));
        return function () {
          for (var r = arguments.length, n = Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          t || (e(...n), (t = !0));
        };
      },
      eT = eF(console.warn);
    function eq() {
      eT(
        ''.concat(
          ez,
          'The "interpolate" function is deprecated in v9 (use "to" instead)'
        )
      );
    }
    var eL = eF(console.warn);
    function eN(e) {
      return (
        E.str(e) &&
        ('#' == e[0] || /\d/.test(e) || (!F() && eI.test(e)) || e in (T || {}))
      );
    }
    var eW = new WeakMap(),
      eU = (e) =>
        e.forEach((e) => {
          var t;
          let { target: r, contentRect: n } = e;
          return null == (t = eW.get(r)) ? void 0 : t.forEach((e) => e(n));
        }),
      eG = new Set(),
      eQ = function (e) {
        let t,
          { container: r = document.documentElement } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (r === document.documentElement)
          return (
            eG.add(e),
            s ||
              (s = (() => {
                let e = () => {
                  eG.forEach((e) =>
                    e({ width: window.innerWidth, height: window.innerHeight })
                  );
                };
                return (
                  window.addEventListener('resize', e),
                  () => {
                    window.removeEventListener('resize', e);
                  }
                );
              })()),
            () => {
              (eG.delete(e), !eG.size && s && (s(), (s = void 0)));
            }
          );
        return (
          i ||
            'undefined' == typeof ResizeObserver ||
            (i = new ResizeObserver(eU)),
          (t = eW.get(r)) || ((t = new Set()), eW.set(r, t)),
          t.add(e),
          i && i.observe(r),
          () => {
            let t = eW.get(r);
            t && (t.delete(e), !t.size && i && i.unobserve(r));
          }
        );
      },
      eY = {
        x: { length: 'Width', position: 'Left' },
        y: { length: 'Height', position: 'Top' },
      },
      eD = class {
        constructor(e, t) {
          ((this.createAxis = () => ({
            current: 0,
            progress: 0,
            scrollLength: 0,
          })),
            (this.updateAxis = (e) => {
              let t = this.info[e],
                { length: r, position: n } = eY[e];
              ((t.current = this.container['scroll'.concat(n)]),
                (t.scrollLength =
                  this.container['scroll'.concat(r)] -
                  this.container['client'.concat(r)]),
                (t.progress = ((e, t, r) =>
                  t - e == 0 ? 1 : (r - e) / (t - e))(
                  0,
                  t.scrollLength,
                  t.current
                )));
            }),
            (this.update = () => {
              (this.updateAxis('x'), this.updateAxis('y'));
            }),
            (this.sendEvent = () => {
              this.callback(this.info);
            }),
            (this.advance = () => {
              (this.update(), this.sendEvent());
            }),
            (this.callback = e),
            (this.container = t),
            (this.info = {
              time: 0,
              x: this.createAxis(),
              y: this.createAxis(),
            }));
        }
      },
      eB = new WeakMap(),
      eH = new WeakMap(),
      eX = new WeakMap(),
      e$ = (e) => (e === document.documentElement ? window : e),
      eZ = function (e) {
        let { container: t = document.documentElement } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = eX.get(t);
        r || ((r = new Set()), eX.set(t, r));
        let n = new eD(e, t);
        if ((r.add(n), !eB.has(t))) {
          let e = () => (null == r || r.forEach((e) => e.advance()), !0);
          eB.set(t, e);
          let n = e$(t);
          (window.addEventListener('resize', e, { passive: !0 }),
            t !== document.documentElement &&
              eH.set(t, eQ(e, { container: t })),
            n.addEventListener('scroll', e, { passive: !0 }));
        }
        let i = eB.get(t);
        return (
          l(i),
          () => {
            l.cancel(i);
            let e = eX.get(t);
            if (!e || (e.delete(n), e.size)) return;
            let r = eB.get(t);
            if ((eB.delete(t), r)) {
              var s;
              (e$(t).removeEventListener('scroll', r),
                window.removeEventListener('resize', r),
                null == (s = eH.get(t)) || s());
            }
          }
        );
      },
      eK = F() ? A.useEffect : A.useLayoutEffect;
    function eJ() {
      let e = (0, A.useState)()[1],
        t = (() => {
          let e = (0, A.useRef)(!1);
          return (
            eK(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              []
            ),
            e
          );
        })();
      return () => {
        t.current && e(Math.random());
      };
    }
    var e0 = (e) => (0, A.useEffect)(e, e1),
      e1 = [];
    function e2(e) {
      let t = (0, A.useRef)(void 0);
      return (
        (0, A.useEffect)(() => {
          t.current = e;
        }),
        t.current
      );
    }
    var e5 = Symbol.for('Animated:node'),
      e8 = (e) => e && e[e5],
      e3 = (e, t) =>
        Object.defineProperty(e, e5, {
          value: t,
          writable: !0,
          configurable: !0,
        }),
      e9 = (e) => e && e[e5] && e[e5].getPayload(),
      e4 = class {
        getPayload() {
          return this.payload || [];
        }
        constructor() {
          e3(this, this);
        }
      },
      e6 = class e extends e4 {
        static create(t) {
          return new e(t);
        }
        getPayload() {
          return [this];
        }
        getValue() {
          return this._value;
        }
        setValue(e, t) {
          return (
            E.num(e) &&
              ((this.lastPosition = e),
              t &&
                ((e = Math.round(e / t) * t),
                this.done && (this.lastPosition = e))),
            this._value !== e && ((this._value = e), !0)
          );
        }
        reset() {
          let { done: e } = this;
          ((this.done = !1),
            E.num(this._value) &&
              ((this.elapsedTime = 0),
              (this.durationProgress = 0),
              (this.lastPosition = this._value),
              e && (this.lastVelocity = null),
              (this.v0 = null)));
        }
        constructor(e) {
          (super(),
            (this._value = e),
            (this.done = !0),
            (this.durationProgress = 0),
            E.num(this._value) && (this.lastPosition = this._value));
        }
      },
      e7 = class e extends e6 {
        static create(t) {
          return new e(t);
        }
        getValue() {
          let e = this._string;
          return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
          if (E.str(e)) {
            if (e == this._string) return !1;
            ((this._string = e), (this._value = 1));
          } else {
            if (!super.setValue(e)) return !1;
            this._string = null;
          }
          return !0;
        }
        reset(e) {
          (e && (this._toString = ep({ output: [this.getValue(), e] })),
            (this._value = 0),
            super.reset());
        }
        constructor(e) {
          (super(0),
            (this._string = null),
            (this._toString = ep({ output: [e, e] })));
        }
      },
      te = { dependencies: null },
      tt = class extends e4 {
        getValue(e) {
          let t = {};
          return (
            M(this.source, (r, n) => {
              r && r[e5] === r
                ? (t[n] = r.getValue(e))
                : ev(r)
                  ? (t[n] = ey(r))
                  : e || (t[n] = r);
            }),
            t
          );
        }
        setValue(e) {
          ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
          this.payload && j(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
          if (e) {
            let t = new Set();
            return (M(e, this._addToPayload, t), Array.from(t));
          }
        }
        _addToPayload(e) {
          te.dependencies && ev(e) && te.dependencies.add(e);
          let t = e9(e);
          t && j(t, (e) => this.add(e));
        }
        constructor(e) {
          (super(), (this.source = e), this.setValue(e));
        }
      },
      tr = class e extends tt {
        static create(t) {
          return new e(t);
        }
        getValue() {
          return this.source.map((e) => e.getValue());
        }
        setValue(e) {
          let t = this.getPayload();
          return e.length == t.length
            ? t.map((t, r) => t.setValue(e[r])).some(Boolean)
            : (super.setValue(e.map(tn)), !0);
        }
        constructor(e) {
          super(e);
        }
      };
    function tn(e) {
      return (eN(e) ? e7 : e6).create(e);
    }
    function ti(e) {
      let t = e8(e);
      return t ? t.constructor : E.arr(e) ? tr : eN(e) ? e7 : e6;
    }
    var ts = (e, t) => {
        let r = !E.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return (0, A.forwardRef)((n, i) => {
          let s = (0, A.useRef)(null),
            a =
              r &&
              (0, A.useCallback)(
                (e) => {
                  s.current = (function (e, t) {
                    return (e && (E.fun(e) ? e(t) : (e.current = t)), t);
                  })(i, e);
                },
                [i]
              ),
            [o, u] = (function (e, t) {
              let r = new Set();
              return (
                (te.dependencies = r),
                e.style &&
                  (e = { ...e, style: t.createAnimatedStyle(e.style) }),
                (e = new tt(e)),
                (te.dependencies = null),
                [e, r]
              );
            })(n, t),
            f = eJ(),
            d = () => {
              let e = s.current;
              (!r || e) &&
                !1 === (!!e && t.applyAnimatedValues(e, o.getValue(!0))) &&
                f();
            },
            c = new ta(d, u),
            h = (0, A.useRef)(void 0);
          (eK(
            () => (
              (h.current = c),
              j(u, (e) => ek(e, c)),
              () => {
                h.current &&
                  (j(h.current.deps, (e) => eP(e, h.current)),
                  l.cancel(h.current.update));
              }
            )
          ),
            (0, A.useEffect)(d, []),
            e0(() => () => {
              let e = h.current;
              j(e.deps, (t) => eP(t, e));
            }));
          let p = t.getComponentProps(o.getValue());
          return A.createElement(e, { ...p, ref: a });
        });
      },
      ta = class {
        eventObserved(e) {
          'change' == e.type && l.write(this.update);
        }
        constructor(e, t) {
          ((this.update = e), (this.deps = t));
        }
      },
      to = Symbol.for('AnimatedComponent'),
      tl = (e) =>
        E.str(e)
          ? e
          : e && E.str(e.displayName)
            ? e.displayName
            : (E.fun(e) && e.name) || null;
    e.s(['Any', () => tu], 57757);
    var tu = class {};
    function tf(e) {
      for (
        var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        r[n - 1] = arguments[n];
      return E.fun(e) ? e(...r) : e;
    }
    var td = (e, t) =>
        !0 === e || !!(t && e && (E.fun(e) ? e(t) : O(e).includes(t))),
      tc = (e, t) => (E.obj(e) ? t && e[t] : e),
      th = (e, t) =>
        !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
      tp = (e) => e,
      tm = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tp,
          r = tg;
        e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
        let n = {};
        for (let i of r) {
          let r = t(e[i], i);
          E.und(r) || (n[i] = r);
        }
        return n;
      },
      tg = [
        'config',
        'onProps',
        'onStart',
        'onChange',
        'onPause',
        'onResume',
        'onRest',
      ],
      tv = {
        config: 1,
        from: 1,
        to: 1,
        ref: 1,
        loop: 1,
        reset: 1,
        pause: 1,
        cancel: 1,
        reverse: 1,
        immediate: 1,
        default: 1,
        delay: 1,
        onProps: 1,
        onStart: 1,
        onChange: 1,
        onPause: 1,
        onResume: 1,
        onRest: 1,
        onResolve: 1,
        items: 1,
        trail: 1,
        sort: 1,
        expires: 1,
        initial: 1,
        enter: 1,
        update: 1,
        leave: 1,
        children: 1,
        onDestroyed: 1,
        keys: 1,
        callId: 1,
        parentId: 1,
      };
    function ty(e) {
      let t = (function (e) {
        let t = {},
          r = 0;
        if (
          (M(e, (e, n) => {
            !tv[n] && ((t[n] = e), r++);
          }),
          r)
        )
          return t;
      })(e);
      if (t) {
        let r = { to: t };
        return (M(e, (e, n) => n in t || (r[n] = e)), r);
      }
      return { ...e };
    }
    function tb(e) {
      return (
        (e = ey(e)),
        E.arr(e)
          ? e.map(tb)
          : eN(e)
            ? C.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e
      );
    }
    function tx(e) {
      for (let t in e) return !0;
      return !1;
    }
    function t_(e) {
      return E.fun(e) || (E.arr(e) && E.obj(e[0]));
    }
    function tw(e, t) {
      var r;
      (null == (r = e.ref) || r.delete(e), null == t || t.delete(e));
    }
    function tk(e, t) {
      if (t && e.ref !== t) {
        var r;
        (null == (r = e.ref) || r.delete(e), t.add(e), (e.ref = t));
      }
    }
    function tP(e, t) {
      let r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
      eK(() => {
        if (t) {
          let n = 0;
          j(e, (e, i) => {
            let s = e.current;
            if (s.length) {
              let a = r * t[i];
              (isNaN(a) ? (a = n) : (n = a),
                j(s, (e) => {
                  j(e.queue, (e) => {
                    let t = e.delay;
                    e.delay = (e) => a + tf(t || 0, e);
                  });
                }),
                e.start());
            }
          });
        } else {
          let t = Promise.resolve();
          j(e, (e) => {
            let r = e.current;
            if (r.length) {
              let n = r.map((e) => {
                let t = e.queue;
                return ((e.queue = []), t);
              });
              t = t.then(
                () => (
                  j(r, (e, t) => j(n[t] || [], (t) => e.queue.push(t))),
                  Promise.all(e.start())
                )
              );
            }
          });
        }
      });
    }
    var tA = {
        default: { tension: 170, friction: 26 },
        gentle: { tension: 120, friction: 14 },
        wobbly: { tension: 180, friction: 12 },
        stiff: { tension: 210, friction: 20 },
        slow: { tension: 280, friction: 60 },
        molasses: { tension: 280, friction: 120 },
      },
      tS = { ...tA.default, mass: 1, damping: 1, easing: (e) => e, clamp: !1 },
      tC = class {
        constructor() {
          ((this.velocity = 0), Object.assign(this, tS));
        }
      };
    function tR(e, t) {
      if (E.und(t.decay)) {
        let r = !E.und(t.tension) || !E.und(t.friction);
        ((!r && E.und(t.frequency) && E.und(t.damping) && E.und(t.mass)) ||
          ((e.duration = void 0), (e.decay = void 0)),
          r && (e.frequency = void 0));
      } else e.duration = void 0;
    }
    var tE = [],
      tI = class {
        constructor() {
          ((this.changed = !1),
            (this.values = tE),
            (this.toValues = null),
            (this.fromValues = tE),
            (this.config = new tC()),
            (this.immediate = !1));
        }
      };
    function tj(e, t) {
      let { key: r, props: n, defaultProps: i, state: s, actions: a } = t;
      return new Promise((t, o) => {
        var u;
        let f,
          d,
          c = td(null != (u = n.cancel) ? u : null == i ? void 0 : i.cancel, r);
        if (c) m();
        else {
          E.und(n.pause) || (s.paused = td(n.pause, r));
          let e = null == i ? void 0 : i.pause;
          (!0 !== e && (e = s.paused || td(e, r)),
            (f = tf(n.delay || 0, r)),
            e ? (s.resumeQueue.add(p), a.pause()) : (a.resume(), p()));
        }
        function h() {
          (s.resumeQueue.add(p),
            s.timeouts.delete(d),
            d.cancel(),
            (f = d.time - l.now()));
        }
        function p() {
          f > 0 && !C.skipAnimation
            ? ((s.delayed = !0),
              (d = l.setTimeout(m, f)),
              s.pauseQueue.add(h),
              s.timeouts.add(d))
            : m();
        }
        function m() {
          (s.delayed && (s.delayed = !1),
            s.pauseQueue.delete(h),
            s.timeouts.delete(d),
            e <= (s.cancelId || 0) && (c = !0));
          try {
            a.start({ ...n, callId: e, cancel: c }, t);
          } catch (e) {
            o(e);
          }
        }
      });
    }
    var tM = (e, t) =>
        1 == t.length
          ? t[0]
          : t.some((e) => e.cancelled)
            ? tz(e.get())
            : t.every((e) => e.noop)
              ? tO(e.get())
              : tV(
                  e.get(),
                  t.every((e) => e.finished)
                ),
      tO = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
      tV = function (e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return { value: e, finished: t, cancelled: r };
      },
      tz = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function tF(e, t, r, n) {
      let { callId: i, parentId: s, onRest: a } = t,
        { asyncTo: o, promise: u } = r;
      return s || e !== o || t.reset
        ? (r.promise = (async () => {
            let f, d, c;
            ((r.asyncId = i), (r.asyncTo = e));
            let h = tm(t, (e, t) => ('onRest' === t ? void 0 : e)),
              p = new Promise((e, t) => ((f = e), (d = t))),
              m = (e) => {
                let t =
                  (i <= (r.cancelId || 0) && tz(n)) ||
                  (i !== r.asyncId && tV(n, !1));
                if (t) throw ((e.result = t), d(e), e);
              },
              g = (e, t) => {
                let s = new tq(),
                  a = new tL();
                return (async () => {
                  if (C.skipAnimation)
                    throw (tT(r), (a.result = tV(n, !1)), d(a), a);
                  m(s);
                  let o = E.obj(e) ? { ...e } : { ...t, to: e };
                  ((o.parentId = i),
                    M(h, (e, t) => {
                      E.und(o[t]) && (o[t] = e);
                    }));
                  let l = await n.start(o);
                  return (
                    m(s),
                    r.paused &&
                      (await new Promise((e) => {
                        r.resumeQueue.add(e);
                      })),
                    l
                  );
                })();
              };
            if (C.skipAnimation) return (tT(r), tV(n, !1));
            try {
              let t;
              ((t = E.arr(e)
                ? (async (e) => {
                    for (let t of e) await g(t);
                  })(e)
                : Promise.resolve(e(g, n.stop.bind(n)))),
                await Promise.all([t.then(f), p]),
                (c = tV(n.get(), !0, !1)));
            } catch (e) {
              if (e instanceof tq) c = e.result;
              else if (e instanceof tL) c = e.result;
              else throw e;
            } finally {
              i == r.asyncId &&
                ((r.asyncId = s),
                (r.asyncTo = s ? o : void 0),
                (r.promise = s ? u : void 0));
            }
            return (
              E.fun(a) &&
                l.batchedUpdates(() => {
                  a(c, n, n.item);
                }),
              c
            );
          })())
        : u;
    }
    function tT(e, t) {
      (V(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
    }
    var tq = class extends Error {
        constructor() {
          super(
            'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.'
          );
        }
      },
      tL = class extends Error {
        constructor() {
          super('SkipAnimationSignal');
        }
      },
      tN = 1,
      tW = class extends e_ {
        get priority() {
          return this._priority;
        }
        set priority(e) {
          this._priority != e &&
            ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
          let e = e8(this);
          return e && e.getValue();
        }
        to() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return C.to(this, t);
        }
        interpolate() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return (eq(), C.to(this, t));
        }
        toJSON() {
          return this.get();
        }
        observerAdded(e) {
          1 == e && this._attach();
        }
        observerRemoved(e) {
          0 == e && this._detach();
        }
        _attach() {}
        _detach() {}
        _onChange(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          ex(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
          (this.idle || Y.sort(this),
            ex(this, { type: 'priority', parent: this, priority: e }));
        }
        constructor() {
          (super(...arguments), (this.id = tN++), (this._priority = 0));
        }
      },
      tU = Symbol.for('SpringPhase'),
      tG = (e) => (1 & e[tU]) > 0,
      tQ = (e) => (2 & e[tU]) > 0,
      tY = (e) => (4 & e[tU]) > 0,
      tD = (e, t) => (t ? (e[tU] |= 3) : (e[tU] &= -3)),
      tB = (e, t) => (t ? (e[tU] |= 4) : (e[tU] &= -5)),
      tH = class extends tW {
        get idle() {
          return !(tQ(this) || this._state.asyncTo) || tY(this);
        }
        get goal() {
          return ey(this.animation.to);
        }
        get velocity() {
          let e = e8(this);
          return e instanceof e6
            ? e.lastVelocity || 0
            : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
          return tG(this);
        }
        get isAnimating() {
          return tQ(this);
        }
        get isPaused() {
          return tY(this);
        }
        get isDelayed() {
          return this._state.delayed;
        }
        advance(e) {
          let t = !0,
            r = !1,
            n = this.animation,
            { toValues: i } = n,
            { config: s } = n,
            a = e9(n.to);
          (!a && ev(n.to) && (i = O(ey(n.to))),
            n.values.forEach((o, l) => {
              if (o.done) return;
              let u = o.constructor == e7 ? 1 : a ? a[l].lastPosition : i[l],
                f = n.immediate,
                d = u;
              if (!f) {
                let t;
                if (((d = o.lastPosition), s.tension <= 0)) {
                  o.done = !0;
                  return;
                }
                let r = (o.elapsedTime += e),
                  i = n.fromValues[l],
                  a =
                    null != o.v0
                      ? o.v0
                      : (o.v0 = E.arr(s.velocity) ? s.velocity[l] : s.velocity),
                  c =
                    s.precision ||
                    (i == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - i)));
                if (E.und(s.duration))
                  if (s.decay) {
                    let e = !0 === s.decay ? 0.998 : s.decay,
                      n = Math.exp(-(1 - e) * r);
                    ((d = i + (a / (1 - e)) * (1 - n)),
                      (f = Math.abs(o.lastPosition - d) <= c),
                      (t = a * n));
                  } else {
                    t = null == o.lastVelocity ? a : o.lastVelocity;
                    let r = s.restVelocity || c / 10,
                      n = s.clamp ? 0 : s.bounce,
                      l = !E.und(n),
                      h = i == u ? o.v0 > 0 : i < u,
                      p = Math.ceil(e / 1);
                    for (
                      let e = 0;
                      e < p &&
                      !(!(Math.abs(t) > r) && (f = Math.abs(u - d) <= c));
                      ++e
                    ) {
                      l && (d == u || d > u == h) && ((t = -t * n), (d = u));
                      let e =
                        (-(1e-6 * s.tension) * (d - u) +
                          -(0.001 * s.friction) * t) /
                        s.mass;
                      ((t += +e), (d += +t));
                    }
                  }
                else {
                  let n = 1;
                  (s.duration > 0 &&
                    (this._memoizedDuration !== s.duration &&
                      ((this._memoizedDuration = s.duration),
                      o.durationProgress > 0 &&
                        ((o.elapsedTime = s.duration * o.durationProgress),
                        (r = o.elapsedTime += e))),
                    (o.durationProgress = n =
                      (n = (s.progress || 0) + r / this._memoizedDuration) > 1
                        ? 1
                        : n < 0
                          ? 0
                          : n)),
                    (t =
                      ((d = i + s.easing(n) * (u - i)) - o.lastPosition) / e),
                    (f = 1 == n));
                }
                ((o.lastVelocity = t),
                  Number.isNaN(d) &&
                    (console.warn('Got NaN while animating:', this), (f = !0)));
              }
              (a && !a[l].done && (f = !1),
                f ? (o.done = !0) : (t = !1),
                o.setValue(d, s.round) && (r = !0));
            }));
          let o = e8(this),
            l = o.getValue();
          if (t) {
            let e = ey(n.to);
            ((l !== e || r) && !s.decay
              ? (o.setValue(e), this._onChange(e))
              : r && s.decay && this._onChange(l),
              this._stop());
          } else r && this._onChange(l);
        }
        set(e) {
          return (
            l.batchedUpdates(() => {
              (this._stop(), this._focus(e), this._set(e));
            }),
            this
          );
        }
        pause() {
          this._update({ pause: !0 });
        }
        resume() {
          this._update({ pause: !1 });
        }
        finish() {
          if (tQ(this)) {
            let { to: e, config: t } = this.animation;
            l.batchedUpdates(() => {
              (this._onStart(), t.decay || this._set(e, !1), this._stop());
            });
          }
          return this;
        }
        update(e) {
          return ((this.queue || (this.queue = [])).push(e), this);
        }
        start(e, t) {
          let r;
          return (
            E.und(e)
              ? ((r = this.queue || []), (this.queue = []))
              : (r = [E.obj(e) ? e : { ...t, to: e }]),
            Promise.all(r.map((e) => this._update(e))).then((e) => tM(this, e))
          );
        }
        stop(e) {
          let { to: t } = this.animation;
          return (
            this._focus(this.get()),
            tT(this._state, e && this._lastCallId),
            l.batchedUpdates(() => this._stop(t, e)),
            this
          );
        }
        reset() {
          this._update({ reset: !0 });
        }
        eventObserved(e) {
          'change' == e.type
            ? this._start()
            : 'priority' == e.type && (this.priority = e.priority + 1);
        }
        _prepareNode(e) {
          let t = this.key || '',
            { to: r, from: n } = e;
          ((null == (r = E.obj(r) ? r[t] : r) || t_(r)) && (r = void 0),
            null == (n = E.obj(n) ? n[t] : n) && (n = void 0));
          let i = { to: r, from: n };
          return (
            !tG(this) &&
              (e.reverse && ([r, n] = [n, r]),
              (n = ey(n)),
              E.und(n) ? e8(this) || this._set(r) : this._set(n)),
            i
          );
        }
        _update(e, t) {
          let { ...r } = e,
            { key: n, defaultProps: i } = this;
          (r.default &&
            Object.assign(
              i,
              tm(r, (e, t) => (/^on/.test(t) ? tc(e, n) : e))
            ),
            t0(this, r, 'onProps'),
            t1(this, 'onProps', r, this));
          let s = this._prepareNode(r);
          if (Object.isFrozen(this))
            throw Error(
              'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?'
            );
          let a = this._state;
          return tj(++this._lastCallId, {
            key: n,
            props: r,
            defaultProps: i,
            state: a,
            actions: {
              pause: () => {
                tY(this) ||
                  (tB(this, !0),
                  z(a.pauseQueue),
                  t1(
                    this,
                    'onPause',
                    tV(this, tX(this, this.animation.to)),
                    this
                  ));
              },
              resume: () => {
                tY(this) &&
                  (tB(this, !1),
                  tQ(this) && this._resume(),
                  z(a.resumeQueue),
                  t1(
                    this,
                    'onResume',
                    tV(this, tX(this, this.animation.to)),
                    this
                  ));
              },
              start: this._merge.bind(this, s),
            },
          }).then((e) => {
            if (r.loop && e.finished && !(t && e.noop)) {
              let e = t$(r);
              if (e) return this._update(e, !0);
            }
            return e;
          });
        }
        _merge(e, t, r) {
          if (t.cancel) return (this.stop(!0), r(tz(this)));
          let n = !E.und(e.to),
            i = !E.und(e.from);
          if (n || i)
            if (!(t.callId > this._lastToId)) return r(tz(this));
            else this._lastToId = t.callId;
          let { key: s, defaultProps: a, animation: o } = this,
            { to: u, from: f } = o,
            { to: d = u, from: c = f } = e;
          (i && !n && (!t.default || E.und(d)) && (d = c),
            t.reverse && ([d, c] = [c, d]));
          let h = !I(c, f);
          (h && (o.from = c), (c = ey(c)));
          let p = !I(d, u);
          p && this._focus(d);
          let m = t_(t.to),
            { config: g } = o,
            { decay: v, velocity: y } = g;
          ((n || i) && (g.velocity = 0),
            t.config &&
              !m &&
              (function (e, t, r) {
                for (let n in (r &&
                  (tR((r = { ...r }), t), (t = { ...r, ...t })),
                tR(e, t),
                Object.assign(e, t),
                tS))
                  null == e[n] && (e[n] = tS[n]);
                let { frequency: n, damping: i } = e,
                  { mass: s } = e;
                E.und(n) ||
                  (n < 0.01 && (n = 0.01),
                  i < 0 && (i = 0),
                  (e.tension = Math.pow((2 * Math.PI) / n, 2) * s),
                  (e.friction = (4 * Math.PI * i * s) / n));
              })(
                g,
                tf(t.config, s),
                t.config !== a.config ? tf(a.config, s) : void 0
              ));
          let b = e8(this);
          if (!b || E.und(d)) return r(tV(this, !0));
          let x = E.und(t.reset)
              ? i && !t.default
              : !E.und(c) && td(t.reset, s),
            _ = x ? c : this.get(),
            w = tb(d),
            k = E.num(w) || E.arr(w) || eN(w),
            P = !m && (!k || td(a.immediate || t.immediate, s));
          if (p) {
            let e = ti(d);
            if (e !== b.constructor)
              if (P) b = this._set(w);
              else
                throw Error(
                  'Cannot animate between '
                    .concat(b.constructor.name, ' and ')
                    .concat(e.name, ', as the "to" prop suggests')
                );
          }
          let A = b.constructor,
            S = ev(d),
            C = !1;
          if (!S) {
            let e = x || (!tG(this) && h);
            ((p || e) && (S = !(C = I(tb(_), w))),
              ((I(o.immediate, P) || P) && I(g.decay, v) && I(g.velocity, y)) ||
                (S = !0));
          }
          if (
            (C && tQ(this) && (o.changed && !x ? (S = !0) : S || this._stop(u)),
            !m &&
              ((S || ev(u)) &&
                ((o.values = b.getPayload()),
                (o.toValues = ev(d) ? null : A == e7 ? [1] : O(w))),
              o.immediate != P && ((o.immediate = P), P || x || this._set(u)),
              S))
          ) {
            let { onRest: e } = o;
            j(tJ, (e) => t0(this, t, e));
            let n = tV(this, tX(this, u));
            (z(this._pendingCalls, n),
              this._pendingCalls.add(r),
              o.changed &&
                l.batchedUpdates(() => {
                  if (((o.changed = !x), null == e || e(n, this), x))
                    tf(a.onRest, n);
                  else {
                    var t;
                    null == (t = o.onStart) || t.call(o, n, this);
                  }
                }));
          }
          (x && this._set(_),
            m
              ? r(tF(t.to, t, this._state, this))
              : S
                ? this._start()
                : tQ(this) && !p
                  ? this._pendingCalls.add(r)
                  : r(tO(_)));
        }
        _focus(e) {
          let t = this.animation;
          e !== t.to &&
            (eb(this) && this._detach(),
            (t.to = e),
            eb(this) && this._attach());
        }
        _attach() {
          let e = 0,
            { to: t } = this.animation;
          (ev(t) && (ek(t, this), t instanceof tW && (e = t.priority + 1)),
            (this.priority = e));
        }
        _detach() {
          let { to: e } = this.animation;
          ev(e) && eP(e, this);
        }
        _set(e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            r = ey(e);
          if (!E.und(r)) {
            let e = e8(this);
            if (!e || !I(r, e.getValue())) {
              let n = ti(r);
              (e && e.constructor == n ? e.setValue(r) : e3(this, n.create(r)),
                e &&
                  l.batchedUpdates(() => {
                    this._onChange(r, t);
                  }));
            }
          }
          return e8(this);
        }
        _onStart() {
          let e = this.animation;
          e.changed ||
            ((e.changed = !0),
            t1(this, 'onStart', tV(this, tX(this, e.to)), this));
        }
        _onChange(e, t) {
          (t || (this._onStart(), tf(this.animation.onChange, e, this)),
            tf(this.defaultProps.onChange, e, this),
            super._onChange(e, t));
        }
        _start() {
          let e = this.animation;
          (e8(this).reset(ey(e.to)),
            e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
            !tQ(this) && (tD(this, !0), tY(this) || this._resume()));
        }
        _resume() {
          C.skipAnimation ? this.finish() : Y.start(this);
        }
        _stop(e, t) {
          if (tQ(this)) {
            tD(this, !1);
            let r = this.animation;
            (j(r.values, (e) => {
              e.done = !0;
            }),
              r.toValues && (r.onChange = r.onPause = r.onResume = void 0),
              ex(this, { type: 'idle', parent: this }));
            let n = t
              ? tz(this.get())
              : tV(this.get(), tX(this, null != e ? e : r.to));
            (z(this._pendingCalls, n),
              r.changed && ((r.changed = !1), t1(this, 'onRest', n, this)));
          }
        }
        constructor(e, t) {
          if (
            (super(),
            (this.animation = new tI()),
            (this.defaultProps = {}),
            (this._state = {
              paused: !1,
              delayed: !1,
              pauseQueue: new Set(),
              resumeQueue: new Set(),
              timeouts: new Set(),
            }),
            (this._pendingCalls = new Set()),
            (this._lastCallId = 0),
            (this._lastToId = 0),
            (this._memoizedDuration = 0),
            !E.und(e) || !E.und(t))
          ) {
            let r = E.obj(e) ? { ...e } : { ...t, from: e };
            (E.und(r.default) && (r.default = !0), this.start(r));
          }
        }
      };
    function tX(e, t) {
      let r = tb(t);
      return I(tb(e.get()), r);
    }
    function t$(e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : e.loop,
        r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.to,
        n = tf(t);
      if (n) {
        let i = !0 !== n && ty(n),
          s = (i || e).reverse,
          a = !i || i.reset;
        return tZ({
          ...e,
          loop: t,
          default: !1,
          pause: void 0,
          to: !s || t_(r) ? r : void 0,
          from: a ? e.from : void 0,
          reset: a,
          ...i,
        });
      }
    }
    function tZ(e) {
      let { to: t, from: r } = (e = ty(e)),
        n = new Set();
      return (
        E.obj(t) && tK(t, n),
        E.obj(r) && tK(r, n),
        (e.keys = n.size ? Array.from(n) : null),
        e
      );
    }
    function tK(e, t) {
      M(e, (e, r) => null != e && t.add(r));
    }
    var tJ = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function t0(e, t, r) {
      e.animation[r] = t[r] !== th(t, r) ? tc(t[r], e.key) : void 0;
    }
    function t1(e, t) {
      for (
        var r,
          n,
          i,
          s,
          a = arguments.length,
          o = Array(a > 2 ? a - 2 : 0),
          l = 2;
        l < a;
        l++
      )
        o[l - 2] = arguments[l];
      (null == (r = (n = e.animation)[t]) || r.call(n, ...o),
        null == (i = (s = e.defaultProps)[t]) || i.call(s, ...o));
    }
    var t2 = ['onStart', 'onChange', 'onRest'],
      t5 = 1,
      t8 = class {
        get idle() {
          return (
            !this._state.asyncTo &&
            Object.values(this.springs).every(
              (e) => e.idle && !e.isDelayed && !e.isPaused
            )
          );
        }
        get item() {
          return this._item;
        }
        set item(e) {
          this._item = e;
        }
        get() {
          let e = {};
          return (this.each((t, r) => (e[r] = t.get())), e);
        }
        set(e) {
          for (let t in e) {
            let r = e[t];
            E.und(r) || this.springs[t].set(r);
          }
        }
        update(e) {
          return (e && this.queue.push(tZ(e)), this);
        }
        start(e) {
          let { queue: t } = this;
          return (e ? (t = O(e).map(tZ)) : (this.queue = []), this._flush)
            ? this._flush(this, t)
            : (rt(this, t), t3(this, t));
        }
        stop(e, t) {
          if ((!!e !== e && (t = e), t)) {
            let r = this.springs;
            j(O(t), (t) => r[t].stop(!!e));
          } else
            (tT(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
          return this;
        }
        pause(e) {
          if (E.und(e)) this.start({ pause: !0 });
          else {
            let t = this.springs;
            j(O(e), (e) => t[e].pause());
          }
          return this;
        }
        resume(e) {
          if (E.und(e)) this.start({ pause: !1 });
          else {
            let t = this.springs;
            j(O(e), (e) => t[e].resume());
          }
          return this;
        }
        each(e) {
          M(this.springs, e);
        }
        _onFrame() {
          let { onStart: e, onChange: t, onRest: r } = this._events,
            n = this._active.size > 0,
            i = this._changed.size > 0;
          ((n && !this._started) || (i && !this._started)) &&
            ((this._started = !0),
            V(e, (e) => {
              let [t, r] = e;
              ((r.value = this.get()), t(r, this, this._item));
            }));
          let s = !n && this._started,
            a = i || (s && r.size) ? this.get() : null;
          (i &&
            t.size &&
            V(t, (e) => {
              let [t, r] = e;
              ((r.value = a), t(r, this, this._item));
            }),
            s &&
              ((this._started = !1),
              V(r, (e) => {
                let [t, r] = e;
                ((r.value = a), t(r, this, this._item));
              })));
        }
        eventObserved(e) {
          if ('change' == e.type)
            (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
          else {
            if ('idle' != e.type) return;
            this._active.delete(e.parent);
          }
          l.onFrame(this._onFrame);
        }
        constructor(e, t) {
          ((this.id = t5++),
            (this.springs = {}),
            (this.queue = []),
            (this._lastAsyncId = 0),
            (this._active = new Set()),
            (this._changed = new Set()),
            (this._started = !1),
            (this._state = {
              paused: !1,
              pauseQueue: new Set(),
              resumeQueue: new Set(),
              timeouts: new Set(),
            }),
            (this._events = {
              onStart: new Map(),
              onChange: new Map(),
              onRest: new Map(),
            }),
            (this._onFrame = this._onFrame.bind(this)),
            t && (this._flush = t),
            e && this.start({ default: !0, ...e }));
        }
      };
    function t3(e, t) {
      return Promise.all(t.map((t) => t9(e, t))).then((t) => tM(e, t));
    }
    async function t9(e, t, r) {
      let { keys: n, to: i, from: s, loop: a, onRest: o, onResolve: u } = t,
        f = E.obj(t.default) && t.default;
      (a && (t.loop = !1),
        !1 === i && (t.to = null),
        !1 === s && (t.from = null));
      let d = E.arr(i) || E.fun(i) ? i : void 0;
      d
        ? ((t.to = void 0), (t.onRest = void 0), f && (f.onRest = void 0))
        : j(t2, (r) => {
            let n = t[r];
            if (E.fun(n)) {
              let i = e._events[r];
              ((t[r] = (e) => {
                let { finished: t, cancelled: r } = e,
                  s = i.get(n);
                s
                  ? (t || (s.finished = !1), r && (s.cancelled = !0))
                  : i.set(n, {
                      value: null,
                      finished: t || !1,
                      cancelled: r || !1,
                    });
              }),
                f && (f[r] = t[r]));
            }
          });
      let c = e._state;
      !c.paused === t.pause
        ? ((c.paused = t.pause), z(t.pause ? c.pauseQueue : c.resumeQueue))
        : c.paused && (t.pause = !0);
      let h = (n || Object.keys(e.springs)).map((r) => e.springs[r].start(t)),
        p = !0 === t.cancel || !0 === th(t, 'cancel');
      ((d || (p && c.asyncId)) &&
        h.push(
          tj(++e._lastAsyncId, {
            props: t,
            state: c,
            actions: {
              pause: R,
              resume: R,
              start(t, r) {
                p
                  ? (tT(c, e._lastAsyncId), r(tz(e)))
                  : ((t.onRest = o), r(tF(d, t, c, e)));
              },
            },
          })
        ),
        c.paused &&
          (await new Promise((e) => {
            c.resumeQueue.add(e);
          })));
      let m = tM(e, await Promise.all(h));
      if (a && m.finished && !(r && m.noop)) {
        let r = t$(t, a, i);
        if (r) return (rt(e, [r]), t9(e, r, !0));
      }
      return (u && l.batchedUpdates(() => u(m, e, e.item)), m);
    }
    function t4(e, t) {
      let r = { ...e.springs };
      return (
        t &&
          j(O(t), (e) => {
            (E.und(e.keys) && (e = tZ(e)),
              E.obj(e.to) || (e = { ...e, to: void 0 }),
              re(r, e, (e) => t7(e)));
          }),
        t6(e, r),
        r
      );
    }
    function t6(e, t) {
      M(t, (t, r) => {
        e.springs[r] || ((e.springs[r] = t), ek(t, e));
      });
    }
    function t7(e, t) {
      let r = new tH();
      return ((r.key = e), t && ek(r, t), r);
    }
    function re(e, t, r) {
      t.keys &&
        j(t.keys, (n) => {
          (e[n] || (e[n] = r(n)))._prepareNode(t);
        });
    }
    function rt(e, t) {
      j(t, (t) => {
        re(e.springs, t, (t) => t7(t, e));
      });
    }
    var rr = A.createContext({ pause: !1, immediate: !1 }),
      rn = () => {
        let e = [],
          t = function (t) {
            eL(
              ''.concat(
                ez,
                'Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions'
              )
            );
            let n = [];
            return (
              j(e, (e, i) => {
                if (E.und(t)) n.push(e.start());
                else {
                  let s = r(t, e, i);
                  s && n.push(e.start(s));
                }
              }),
              n
            );
          };
        ((t.current = e),
          (t.add = function (t) {
            e.includes(t) || e.push(t);
          }),
          (t.delete = function (t) {
            let r = e.indexOf(t);
            ~r && e.splice(r, 1);
          }),
          (t.pause = function () {
            return (j(e, (e) => e.pause(...arguments)), this);
          }),
          (t.resume = function () {
            return (j(e, (e) => e.resume(...arguments)), this);
          }),
          (t.set = function (t) {
            j(e, (e, r) => {
              let n = E.fun(t) ? t(r, e) : t;
              n && e.set(n);
            });
          }),
          (t.start = function (t) {
            let r = [];
            return (
              j(e, (e, n) => {
                if (E.und(t)) r.push(e.start());
                else {
                  let i = this._getProps(t, e, n);
                  i && r.push(e.start(i));
                }
              }),
              r
            );
          }),
          (t.stop = function () {
            return (j(e, (e) => e.stop(...arguments)), this);
          }),
          (t.update = function (t) {
            return (j(e, (e, r) => e.update(this._getProps(t, e, r))), this);
          }));
        let r = function (e, t, r) {
          return E.fun(e) ? e(r, t) : e;
        };
        return ((t._getProps = r), t);
      };
    function ri(e, t, r) {
      let n = E.fun(t) && t;
      n && !r && (r = []);
      let i = (0, A.useMemo)(
          () => (n || 3 == arguments.length ? rn() : void 0),
          []
        ),
        s = (0, A.useRef)(0),
        a = eJ(),
        o = (0, A.useMemo)(
          () => ({
            ctrls: [],
            queue: [],
            flush(e, t) {
              let r = t4(e, t);
              return !(s.current > 0) ||
                o.queue.length ||
                Object.keys(r).some((t) => !e.springs[t])
                ? new Promise((n) => {
                    (t6(e, r),
                      o.queue.push(() => {
                        n(t3(e, t));
                      }),
                      a());
                  })
                : t3(e, t);
            },
          }),
          []
        ),
        l = (0, A.useRef)([...o.ctrls]),
        u = (0, A.useRef)([]),
        f = e2(e) || 0;
      function d(e, r) {
        for (let i = e; i < r; i++) {
          let e = l.current[i] || (l.current[i] = new t8(null, o.flush)),
            r = n ? n(i, e) : t[i];
          r &&
            (u.current[i] = (function (e) {
              let t = tZ(e);
              return (E.und(t.default) && (t.default = tm(t)), t);
            })(r));
        }
      }
      ((0, A.useMemo)(() => {
        (j(l.current.slice(e, f), (e) => {
          (tw(e, i), e.stop(!0));
        }),
          (l.current.length = e),
          d(f, e));
      }, [e]),
        (0, A.useMemo)(() => {
          d(0, Math.min(f, e));
        }, r));
      let c = l.current.map((e, t) => t4(e, u.current[t])),
        h = (0, A.useContext)(rr),
        p = e2(h),
        m = h !== p && tx(h);
      (eK(() => {
        (s.current++, (o.ctrls = l.current));
        let { queue: e } = o;
        (e.length && ((o.queue = []), j(e, (e) => e())),
          j(l.current, (e, t) => {
            (null == i || i.add(e), m && e.start({ default: h }));
            let r = u.current[t];
            r && (tk(e, r.ref), e.ref ? e.queue.push(r) : e.start(r));
          }));
      }),
        e0(() => () => {
          j(o.ctrls, (e) => e.stop(!0));
        }));
      let g = c.map((e) => ({ ...e }));
      return i ? [g, i] : g;
    }
    function rs(e, t) {
      let r = E.fun(e),
        [[n], i] = ri(1, r ? e : [e], r ? t || [] : t);
      return r || 2 == arguments.length ? [n, i] : n;
    }
    var ra = () => rn(),
      ro = () => (0, A.useState)(ra)[0],
      rl = (e, t) => {
        let r = (function (e) {
          let t = (0, A.useRef)(null);
          return (null === t.current && (t.current = e()), t.current);
        })(() => new tH(e, t));
        return (
          e0(() => () => {
            r.stop();
          }),
          r
        );
      };
    function ru(e, t, r) {
      let n,
        i = E.fun(t) && t;
      i && !r && (r = []);
      let s = !0,
        a = ri(
          e,
          (e, r) => {
            let a = i ? i(e, r) : t;
            return ((n = a.ref), (s = s && a.reverse), a);
          },
          r || [{}]
        );
      if (
        (eK(() => {
          j(a[1].current, (e, t) => {
            let r = a[1].current[t + (s ? 1 : -1)];
            if ((tk(e, n), e.ref)) {
              r && e.update({ to: r.springs });
              return;
            }
            r ? e.start({ to: r.springs }) : e.start();
          });
        }, r),
        i || 3 == arguments.length)
      ) {
        let e = null != n ? n : a[1];
        return (
          (e._getProps = (t, r, n) => {
            let i = E.fun(t) ? t(n, r) : t;
            if (i) {
              let t = e.current[n + (i.reverse ? 1 : -1)];
              return (t && (i.to = t.springs), i);
            }
          }),
          a
        );
      }
      return a[0];
    }
    function rf(e, t, r) {
      let n = E.fun(t) && t,
        {
          reset: i,
          sort: s,
          trail: a = 0,
          expires: o = !0,
          exitBeforeEnter: l = !1,
          onDestroyed: u,
          ref: f,
          config: d,
        } = n ? n() : t,
        c = (0, A.useMemo)(
          () => (n || 3 == arguments.length ? rn() : void 0),
          []
        ),
        h = O(e),
        p = [],
        m = (0, A.useRef)(null),
        g = i ? null : m.current;
      (eK(() => {
        m.current = p;
      }),
        e0(
          () => (
            j(p, (e) => {
              (null == c || c.add(e.ctrl), (e.ctrl.ref = c));
            }),
            () => {
              j(m.current, (e) => {
                (e.expired && clearTimeout(e.expirationId),
                  tw(e.ctrl, c),
                  e.ctrl.stop(!0));
              });
            }
          )
        ));
      let v = (function (e, t, r) {
          let { key: n, keys: i = n } = t;
          if (null === i) {
            let t = new Set();
            return e.map((e) => {
              let n =
                r &&
                r.find((r) => r.item === e && 'leave' !== r.phase && !t.has(r));
              return n ? (t.add(n), n.key) : rd++;
            });
          }
          return E.und(i) ? e : E.fun(i) ? e.map(i) : O(i);
        })(h, n ? n() : t, g),
        y = (i && m.current) || [];
      eK(() =>
        j(y, (e) => {
          let { ctrl: t, item: r, key: n } = e;
          (tw(t, c), tf(u, r, n));
        })
      );
      let b = [];
      if (
        (g &&
          j(g, (e, t) => {
            e.expired
              ? (clearTimeout(e.expirationId), y.push(e))
              : ~(t = b[t] = v.indexOf(e.key)) && (p[t] = e);
          }),
        j(h, (e, t) => {
          p[t] ||
            ((p[t] = { key: v[t], item: e, phase: 'mount', ctrl: new t8() }),
            (p[t].ctrl.item = e));
        }),
        b.length)
      ) {
        let e = -1,
          { leave: r } = n ? n() : t;
        j(b, (t, n) => {
          let i = g[n];
          ~t
            ? ((e = p.indexOf(i)), (p[e] = { ...i, item: h[t] }))
            : r && p.splice(++e, 0, i);
        });
      }
      E.fun(s) && p.sort((e, t) => s(e.item, t.item));
      let x = -a,
        _ = eJ(),
        w = tm(t),
        k = new Map(),
        P = (0, A.useRef)(new Map()),
        S = (0, A.useRef)(!1);
      j(p, (e, r) => {
        let i,
          s,
          u = e.key,
          c = e.phase,
          h = n ? n() : t,
          p = tf(h.delay || 0, u);
        if ('mount' == c) ((i = h.enter), (s = 'enter'));
        else {
          let e = 0 > v.indexOf(u);
          if ('leave' != c)
            if (e) ((i = h.leave), (s = 'leave'));
            else {
              if (!(i = h.update)) return;
              s = 'update';
            }
          else {
            if (e) return;
            ((i = h.enter), (s = 'enter'));
          }
        }
        if (
          ((i = tf(i, e.item, r)), !(i = E.obj(i) ? ty(i) : { to: i }).config)
        ) {
          let t = d || w.config;
          i.config = tf(t, e.item, r, s);
        }
        x += a;
        let y = {
          ...w,
          delay: p + x,
          ref: f,
          immediate: h.immediate,
          reset: !1,
          ...i,
        };
        if ('enter' == s && E.und(y.from)) {
          let i = n ? n() : t;
          y.from = tf(E.und(i.initial) || g ? i.from : i.initial, e.item, r);
        }
        let { onResolve: b } = y;
        y.onResolve = (e) => {
          tf(b, e);
          let t = m.current,
            r = t.find((e) => e.key === u);
          if (r && (!e.cancelled || 'update' == r.phase) && r.ctrl.idle) {
            let e = t.every((e) => e.ctrl.idle);
            if ('leave' == r.phase) {
              let t = tf(o, r.item);
              if (!1 !== t) {
                let n = !0 === t ? 0 : t;
                if (((r.expired = !0), !e && n > 0)) {
                  n <= 0x7fffffff && (r.expirationId = setTimeout(_, n));
                  return;
                }
              }
            }
            e &&
              t.some((e) => e.expired) &&
              (P.current.delete(r), l && (S.current = !0), _());
          }
        };
        let A = t4(e.ctrl, y);
        'leave' === s && l
          ? P.current.set(e, { phase: s, springs: A, payload: y })
          : k.set(e, { phase: s, springs: A, payload: y });
      });
      let C = (0, A.useContext)(rr),
        R = e2(C),
        I = C !== R && tx(C);
      (eK(() => {
        I &&
          j(p, (e) => {
            e.ctrl.start({ default: C });
          });
      }, [C]),
        j(k, (e, t) => {
          if (P.current.size) {
            let e = p.findIndex((e) => e.key === t.key);
            p.splice(e, 1);
          }
        }),
        eK(
          () => {
            j(P.current.size ? P.current : k, (e, t) => {
              let { phase: r, payload: n } = e,
                { ctrl: i } = t;
              ((t.phase = r),
                null == c || c.add(i),
                I && 'enter' == r && i.start({ default: C }),
                n &&
                  (tk(i, n.ref),
                  (i.ref || c) && !S.current
                    ? i.update(n)
                    : (i.start(n), S.current && (S.current = !1))));
            });
          },
          i ? void 0 : r
        ));
      let M = (e) =>
        A.createElement(
          A.Fragment,
          null,
          p.map((t, r) => {
            var n;
            let { springs: i } = k.get(t) || t.ctrl,
              s = e({ ...i }, t.item, t, r),
              a = E.str(t.key) || E.num(t.key) ? t.key : t.ctrl.id,
              o = A.version < '19.0.0',
              l = null != (n = null == s ? void 0 : s.props) ? n : {},
              u = o ? (null == s ? void 0 : s.ref) : null == l ? void 0 : l.ref;
            return s && s.type
              ? A.createElement(s.type, { ...l, key: a, ref: u })
              : s;
          })
        );
      return c ? [M, c] : M;
    }
    var rd = 1,
      rc = function () {
        let { container: e, ...t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          [r, n] = rs(
            () => ({
              scrollX: 0,
              scrollY: 0,
              scrollXProgress: 0,
              scrollYProgress: 0,
              ...t,
            }),
            []
          );
        return (
          eK(() => {
            let t = eZ(
              (e) => {
                let { x: t, y: r } = e;
                n.start({
                  scrollX: t.current,
                  scrollXProgress: t.progress,
                  scrollY: r.current,
                  scrollYProgress: r.progress,
                });
              },
              { container: (null == e ? void 0 : e.current) || void 0 }
            );
            return () => {
              (j(Object.values(r), (e) => e.stop()), t());
            };
          }, []),
          r
        );
      },
      rh = (e) => {
        let { container: t, ...r } = e,
          [n, i] = rs(() => ({ width: 0, height: 0, ...r }), []);
        return (
          eK(() => {
            let e = eQ(
              (e) => {
                let { width: t, height: s } = e;
                i.start({
                  width: t,
                  height: s,
                  immediate:
                    0 === n.width.get() ||
                    0 === n.height.get() ||
                    !0 === r.immediate,
                });
              },
              { container: (null == t ? void 0 : t.current) || void 0 }
            );
            return () => {
              (j(Object.values(n), (e) => e.stop()), e());
            };
          }, []),
          n
        );
      },
      rp = { any: 0, all: 1 };
    function rm(e, t) {
      let [r, n] = (0, A.useState)(!1),
        i = (0, A.useRef)(void 0),
        s = E.fun(e) && e,
        { to: a = {}, from: o = {}, ...l } = s ? s() : {},
        u = s ? t : e,
        [f, d] = rs(() => ({ from: o, ...l }), []);
      return (eK(() => {
        let e = i.current,
          { root: t, once: s, amount: l = 'any', ...f } = null != u ? u : {};
        if (!e || (s && r) || 'undefined' == typeof IntersectionObserver)
          return;
        let c = new WeakMap(),
          h = new IntersectionObserver(
            (e) => {
              e.forEach((e) => {
                let t = c.get(e.target);
                if (!!t !== e.isIntersecting)
                  if (e.isIntersecting) {
                    let t =
                      (a && d.start(a),
                      n(!0),
                      s
                        ? void 0
                        : () => {
                            (o && d.start(o), n(!1));
                          });
                    E.fun(t) ? c.set(e.target, t) : h.unobserve(e.target);
                  } else t && (t(), c.delete(e.target));
              });
            },
            {
              root: (t && t.current) || void 0,
              threshold: 'number' == typeof l || Array.isArray(l) ? l : rp[l],
              ...f,
            }
          );
        return (h.observe(e), () => h.unobserve(e));
      }, [u]),
      s)
        ? [i, f]
        : [i, r];
    }
    function rg(e) {
      let { children: t, ...r } = e;
      return t(rs(r));
    }
    function rv(e) {
      let { items: t, children: r, ...n } = e,
        i = ru(t.length, n);
      return t.map((e, t) => {
        let n = r(e, t);
        return E.fun(n) ? n(i[t]) : n;
      });
    }
    function ry(e) {
      let { items: t, children: r, ...n } = e;
      return rf(t, n)(r);
    }
    var rb = class extends tW {
      advance(e) {
        let t = this._get();
        (I(t, this.get()) ||
          (e8(this).setValue(t), this._onChange(t, this.idle)),
          !this.idle && r_(this._active) && rw(this));
      }
      _get() {
        let e = E.arr(this.source) ? this.source.map(ey) : O(ey(this.source));
        return this.calc(...e);
      }
      _start() {
        this.idle &&
          !r_(this._active) &&
          ((this.idle = !1),
          j(e9(this), (e) => {
            e.done = !1;
          }),
          C.skipAnimation
            ? (l.batchedUpdates(() => this.advance()), rw(this))
            : Y.start(this));
      }
      _attach() {
        let e = 1;
        (j(O(this.source), (t) => {
          (ev(t) && ek(t, this),
            t instanceof tW &&
              (t.idle || this._active.add(t),
              (e = Math.max(e, t.priority + 1))));
        }),
          (this.priority = e),
          this._start());
      }
      _detach() {
        (j(O(this.source), (e) => {
          ev(e) && eP(e, this);
        }),
          this._active.clear(),
          rw(this));
      }
      eventObserved(e) {
        'change' == e.type
          ? e.idle
            ? this.advance()
            : (this._active.add(e.parent), this._start())
          : 'idle' == e.type
            ? this._active.delete(e.parent)
            : 'priority' == e.type &&
              (this.priority = O(this.source).reduce(
                (e, t) => Math.max(e, (t instanceof tW ? t.priority : 0) + 1),
                0
              ));
      }
      constructor(e, t) {
        (super(),
          (this.source = e),
          (this.idle = !0),
          (this._active = new Set()),
          (this.calc = ep(...t)));
        let r = this._get();
        e3(this, ti(r).create(r));
      }
    };
    function rx(e) {
      return !1 !== e.idle;
    }
    function r_(e) {
      return !e.size || Array.from(e).every(rx);
    }
    function rw(e) {
      e.idle ||
        ((e.idle = !0),
        j(e9(e), (e) => {
          e.done = !0;
        }),
        ex(e, { type: 'idle', parent: e }));
    }
    var rk = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return new rb(e, r);
      },
      rP = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (eq(), new rb(e, r));
      };
    C.assign({ createStringInterpolator: eV, to: (e, t) => new rb(e, t) });
    var rA = Y.advance,
      rS = e.i(54803),
      rC = /^--/,
      rR = {},
      rE = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      rI = ['Webkit', 'Ms', 'Moz', 'O'];
    rE = Object.keys(rE).reduce(
      (e, t) => (
        rI.forEach(
          (r) =>
            (e[
              ((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)
            ] = e[t])
        ),
        e
      ),
      rE
    );
    var rj = /^(matrix|translate|scale|rotate|skew)/,
      rM = /^(translate)/,
      rO = /^(rotate|skew)/,
      rV = (e, t) => (E.num(e) && 0 !== e ? e + t : e),
      rz = (e, t) =>
        E.arr(e)
          ? e.every((e) => rz(e, t))
          : E.num(e)
            ? e === t
            : parseFloat(e) === t,
      rF = class extends tt {
        constructor({ x: e, y: t, z: r, ...n }) {
          let i = [],
            s = [];
          ((e || t || r) &&
            (i.push([e || 0, t || 0, r || 0]),
            s.push((e) => [
              'translate3d('.concat(e.map((e) => rV(e, 'px')).join(','), ')'),
              rz(e, 0),
            ])),
            M(n, (e, t) => {
              if ('transform' === t)
                (i.push([e || '']), s.push((e) => [e, '' === e]));
              else if (rj.test(t)) {
                if ((delete n[t], E.und(e))) return;
                let r = rM.test(t) ? 'px' : rO.test(t) ? 'deg' : '';
                (i.push(O(e)),
                  s.push(
                    'rotate3d' === t
                      ? (e) => {
                          let [t, n, i, s] = e;
                          return [
                            'rotate3d('
                              .concat(t, ',')
                              .concat(n, ',')
                              .concat(i, ',')
                              .concat(rV(s, r), ')'),
                            rz(s, 0),
                          ];
                        }
                      : (e) => [
                          ''
                            .concat(t, '(')
                            .concat(e.map((e) => rV(e, r)).join(','), ')'),
                          rz(e, +!!t.startsWith('scale')),
                        ]
                  ));
              }
            }),
            i.length && (n.transform = new rT(i, s)),
            super(n));
        }
      },
      rT = class extends e_ {
        get() {
          return this._value || (this._value = this._get());
        }
        _get() {
          let e = '',
            t = !0;
          return (
            j(this.inputs, (r, n) => {
              let i = ey(r[0]),
                [s, a] = this.transforms[n](E.arr(i) ? i : r.map(ey));
              ((e += ' ' + s), (t = t && a));
            }),
            t ? 'none' : e
          );
        }
        observerAdded(e) {
          1 == e && j(this.inputs, (e) => j(e, (e) => ev(e) && ek(e, this)));
        }
        observerRemoved(e) {
          0 == e && j(this.inputs, (e) => j(e, (e) => ev(e) && eP(e, this)));
        }
        eventObserved(e) {
          ('change' == e.type && (this._value = null), ex(this, e));
        }
        constructor(e, t) {
          (super(),
            (this.inputs = e),
            (this.transforms = t),
            (this._value = null));
        }
      };
    C.assign({
      batchedUpdates: rS.unstable_batchedUpdates,
      createStringInterpolator: eV,
      colors: {
        transparent: 0,
        aliceblue: 0xf0f8ffff,
        antiquewhite: 0xfaebd7ff,
        aqua: 0xffffff,
        aquamarine: 0x7fffd4ff,
        azure: 0xf0ffffff,
        beige: 0xf5f5dcff,
        bisque: 0xffe4c4ff,
        black: 255,
        blanchedalmond: 0xffebcdff,
        blue: 65535,
        blueviolet: 0x8a2be2ff,
        brown: 0xa52a2aff,
        burlywood: 0xdeb887ff,
        burntsienna: 0xea7e5dff,
        cadetblue: 0x5f9ea0ff,
        chartreuse: 0x7fff00ff,
        chocolate: 0xd2691eff,
        coral: 0xff7f50ff,
        cornflowerblue: 0x6495edff,
        cornsilk: 0xfff8dcff,
        crimson: 0xdc143cff,
        cyan: 0xffffff,
        darkblue: 35839,
        darkcyan: 9145343,
        darkgoldenrod: 0xb8860bff,
        darkgray: 0xa9a9a9ff,
        darkgreen: 6553855,
        darkgrey: 0xa9a9a9ff,
        darkkhaki: 0xbdb76bff,
        darkmagenta: 0x8b008bff,
        darkolivegreen: 0x556b2fff,
        darkorange: 0xff8c00ff,
        darkorchid: 0x9932ccff,
        darkred: 0x8b0000ff,
        darksalmon: 0xe9967aff,
        darkseagreen: 0x8fbc8fff,
        darkslateblue: 0x483d8bff,
        darkslategray: 0x2f4f4fff,
        darkslategrey: 0x2f4f4fff,
        darkturquoise: 0xced1ff,
        darkviolet: 0x9400d3ff,
        deeppink: 0xff1493ff,
        deepskyblue: 0xbfffff,
        dimgray: 0x696969ff,
        dimgrey: 0x696969ff,
        dodgerblue: 0x1e90ffff,
        firebrick: 0xb22222ff,
        floralwhite: 0xfffaf0ff,
        forestgreen: 0x228b22ff,
        fuchsia: 0xff00ffff,
        gainsboro: 0xdcdcdcff,
        ghostwhite: 0xf8f8ffff,
        gold: 0xffd700ff,
        goldenrod: 0xdaa520ff,
        gray: 0x808080ff,
        green: 8388863,
        greenyellow: 0xadff2fff,
        grey: 0x808080ff,
        honeydew: 0xf0fff0ff,
        hotpink: 0xff69b4ff,
        indianred: 0xcd5c5cff,
        indigo: 0x4b0082ff,
        ivory: 0xfffff0ff,
        khaki: 0xf0e68cff,
        lavender: 0xe6e6faff,
        lavenderblush: 0xfff0f5ff,
        lawngreen: 0x7cfc00ff,
        lemonchiffon: 0xfffacdff,
        lightblue: 0xadd8e6ff,
        lightcoral: 0xf08080ff,
        lightcyan: 0xe0ffffff,
        lightgoldenrodyellow: 0xfafad2ff,
        lightgray: 0xd3d3d3ff,
        lightgreen: 0x90ee90ff,
        lightgrey: 0xd3d3d3ff,
        lightpink: 0xffb6c1ff,
        lightsalmon: 0xffa07aff,
        lightseagreen: 0x20b2aaff,
        lightskyblue: 0x87cefaff,
        lightslategray: 0x778899ff,
        lightslategrey: 0x778899ff,
        lightsteelblue: 0xb0c4deff,
        lightyellow: 0xffffe0ff,
        lime: 0xff00ff,
        limegreen: 0x32cd32ff,
        linen: 0xfaf0e6ff,
        magenta: 0xff00ffff,
        maroon: 0x800000ff,
        mediumaquamarine: 0x66cdaaff,
        mediumblue: 52735,
        mediumorchid: 0xba55d3ff,
        mediumpurple: 0x9370dbff,
        mediumseagreen: 0x3cb371ff,
        mediumslateblue: 0x7b68eeff,
        mediumspringgreen: 0xfa9aff,
        mediumturquoise: 0x48d1ccff,
        mediumvioletred: 0xc71585ff,
        midnightblue: 0x191970ff,
        mintcream: 0xf5fffaff,
        mistyrose: 0xffe4e1ff,
        moccasin: 0xffe4b5ff,
        navajowhite: 0xffdeadff,
        navy: 33023,
        oldlace: 0xfdf5e6ff,
        olive: 0x808000ff,
        olivedrab: 0x6b8e23ff,
        orange: 0xffa500ff,
        orangered: 0xff4500ff,
        orchid: 0xda70d6ff,
        palegoldenrod: 0xeee8aaff,
        palegreen: 0x98fb98ff,
        paleturquoise: 0xafeeeeff,
        palevioletred: 0xdb7093ff,
        papayawhip: 0xffefd5ff,
        peachpuff: 0xffdab9ff,
        peru: 0xcd853fff,
        pink: 0xffc0cbff,
        plum: 0xdda0ddff,
        powderblue: 0xb0e0e6ff,
        purple: 0x800080ff,
        rebeccapurple: 0x663399ff,
        red: 0xff0000ff,
        rosybrown: 0xbc8f8fff,
        royalblue: 0x4169e1ff,
        saddlebrown: 0x8b4513ff,
        salmon: 0xfa8072ff,
        sandybrown: 0xf4a460ff,
        seagreen: 0x2e8b57ff,
        seashell: 0xfff5eeff,
        sienna: 0xa0522dff,
        silver: 0xc0c0c0ff,
        skyblue: 0x87ceebff,
        slateblue: 0x6a5acdff,
        slategray: 0x708090ff,
        slategrey: 0x708090ff,
        snow: 0xfffafaff,
        springgreen: 0xff7fff,
        steelblue: 0x4682b4ff,
        tan: 0xd2b48cff,
        teal: 8421631,
        thistle: 0xd8bfd8ff,
        tomato: 0xff6347ff,
        turquoise: 0x40e0d0ff,
        violet: 0xee82eeff,
        wheat: 0xf5deb3ff,
        white: 0xffffffff,
        whitesmoke: 0xf5f5f5ff,
        yellow: 0xffff00ff,
        yellowgreen: 0x9acd32ff,
      },
    });
    var rq = (function (e) {
      let {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = (e) => new tt(e),
          getComponentProps: n = (e) => e,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = {
          applyAnimatedValues: t,
          createAnimatedStyle: r,
          getComponentProps: n,
        },
        s = (e) => {
          let t = tl(e) || 'Anonymous';
          return (
            ((e = E.str(e)
              ? s[e] || (s[e] = ts(e, i))
              : e[to] || (e[to] = ts(e, i))).displayName = 'Animated('.concat(
              t,
              ')'
            )),
            e
          );
        };
      return (
        M(e, (t, r) => {
          (E.arr(e) && (r = tl(t)), (s[r] = s(t)));
        }),
        { animated: s }
      );
    })(
      [
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
      ],
      {
        applyAnimatedValues: function (e, t) {
          if (!e.nodeType || !e.setAttribute) return !1;
          let r =
              'filter' === e.nodeName ||
              (e.parentNode && 'filter' === e.parentNode.nodeName),
            {
              className: n,
              style: i,
              children: s,
              scrollTop: a,
              scrollLeft: o,
              viewBox: l,
              ...u
            } = t,
            f = Object.values(u),
            d = Object.keys(u).map((t) =>
              r || e.hasAttribute(t)
                ? t
                : rR[t] ||
                  (rR[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase()))
            );
          for (let t in (void 0 !== s && (e.textContent = s), i))
            if (i.hasOwnProperty(t)) {
              var c;
              let r =
                null == (c = i[t]) || 'boolean' == typeof c || '' === c
                  ? ''
                  : 'number' != typeof c ||
                      0 === c ||
                      rC.test(t) ||
                      (rE.hasOwnProperty(t) && rE[t])
                    ? ('' + c).trim()
                    : c + 'px';
              rC.test(t) ? e.style.setProperty(t, r) : (e.style[t] = r);
            }
          (d.forEach((t, r) => {
            e.setAttribute(t, f[r]);
          }),
            void 0 !== n && (e.className = n),
            void 0 !== a && (e.scrollTop = a),
            void 0 !== o && (e.scrollLeft = o),
            void 0 !== l && e.setAttribute('viewBox', l));
        },
        createAnimatedStyle: (e) => new rF(e),
        getComponentProps: (e) => {
          let { scrollTop: t, scrollLeft: r, ...n } = e;
          return n;
        },
      }
    ).animated;
    (e.i(84954), e.i(57757));
    var rL = e.i(76422),
      rN = e.i(45800),
      rW = e.i(33933),
      rU = e.i(39952);
    let rG = [
        ['#CCF6C5', '#34A853'],
        ['#FFE7A5', '#F6B51E'],
        ['#C3ECF6', '#4285F4'],
        ['#F8D8D8', '#EA4335'],
      ],
      rQ = { tension: 400, friction: 20, mass: 0.3 },
      rY = { tension: 500, friction: 25, mass: 0.4 };
    function rD(e) {
      let {
          image: t,
          name: r,
          tagline: n,
          bio: i,
          socialMedia: s,
          className: o,
          reduceHeightOnMobile: l,
        } = e,
        [[u, f]] = (0, A.useState)(
          rG[
            ((e) => {
              let t = 0;
              for (let r = 0; r < e.length; r++)
                ((t = (t << 5) - t + e.charCodeAt(r)), (t &= t));
              return Math.abs(t);
            })(r) % rG.length
          ]
        ),
        d = (0, A.useRef)(null),
        c = (0, A.useRef)('image'),
        h = (0, rN.useWindowWidth)(),
        p = (0, A.useRef)(window.innerWidth < 440);
      (0, A.useEffect)(() => {
        let e = window.innerWidth;
        e > 0 && (p.current = e < 440);
      }, [h]);
      let m = (0, A.useMemo)(() => {
          let e = window.innerWidth,
            t = e > 0 && e < 440 && l;
          return {
            imageWrapper: { open: t ? 186 : 308 },
            info: { open: t ? 242 : 404, minimized: t ? 64 : 104 },
          };
        }, [h, l]),
        [g, v] = rs(() => ({
          from: {
            height: m.imageWrapper.open,
            backgroundColor: u,
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
          },
          config: rQ,
        })),
        [y, b] = rs(() => ({ from: { opacity: 1 } })),
        [x, _] = rs(() => ({ from: { height: m.info.minimized }, config: rY })),
        [w, k] = rs(() => ({ from: { opacity: 0 } }));
      return (
        (0, A.useEffect)(() => {
          var e, t;
          (null == (e = d.current) ||
            e.addEventListener('mouseenter', () => {
              'image' !== c.current ||
                p.current ||
                (v.start({ height: 300, backgroundColor: f }),
                _.start({ height: 112 }));
            }),
            null == (t = d.current) ||
              t.addEventListener('mouseleave', () => {
                'image' !== c.current ||
                  p.current ||
                  (v.start({ height: 308, backgroundColor: u }),
                  _.start({ height: 104 }));
              }));
        }, [v, _, u]),
        (0, a.jsxs)('article', {
          className: (0, rL.default)(rU.default.speaker, o, {
            [rU.default.reduceHeightOnMobile]: l,
          }),
          ref: d,
          onClick: () => {
            'image' === c.current
              ? ((c.current = 'bio'),
                v.update({ config: rQ }),
                _.update({ config: rQ }),
                v.start({
                  height: 8,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  backgroundColor: f,
                }),
                _.start({ height: m.info.open }),
                b.start({ opacity: 0 }),
                k.start({ opacity: 1 }))
              : ((c.current = 'image'),
                v.start({ height: m.imageWrapper.open }),
                _.start({ height: m.info.minimized }),
                b.start({ opacity: 1 }),
                k.start({ opacity: 0 }),
                v.update({ config: rY }),
                _.update({ config: rY }));
          },
          children: [
            (0, a.jsx)(rq.div, {
              className: rU.default.imageWrapper,
              style: { ...g },
              children: (0, a.jsx)(rq.div, {
                style: y,
                className: rU.default.image,
                children: (0, a.jsx)('img', { width: '100%', src: t, alt: r }),
              }),
            }),
            (0, a.jsxs)(rq.div, {
              className: rU.default.info,
              style: x,
              children: [
                (0, a.jsx)('h2', { className: rU.default.name, children: r }),
                (0, a.jsx)('p', { className: rU.default.tagline, children: n }),
                (0, a.jsxs)(rq.div, {
                  style: w,
                  className: rU.default.bioContent,
                  children: [
                    (0, a.jsx)('p', {
                      className: rU.default.description,
                      children: i,
                    }),
                    (0, a.jsx)('div', {
                      className: rU.default.socialMediaLinks,
                      children:
                        null == s
                          ? void 0
                          : s.map((e) =>
                              (0, a.jsx)(
                                'a',
                                {
                                  href: e.url,
                                  'aria-label': e.type,
                                  className: rU.default.socialMediaLink,
                                  target: '_blank',
                                  children: (0, a.jsx)(rW.SocialIcon, {
                                    name: e.type,
                                    size: 24,
                                  }),
                                },
                                e.type
                              )
                            ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
  },
]);
