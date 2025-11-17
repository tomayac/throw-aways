(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  45800,
  (t) => {
    'use strict';
    t.s(['useWindowWidth', () => n]);
    var e = t.i(22446);
    function n() {
      let [t, n] = (0, e.useState)(0),
        r = (0, e.useMemo)(() => {
          var t;
          let e;
          return (
            (t = () => {
              n(window.innerWidth);
            }),
            function () {
              for (var n = arguments.length, r = Array(n), i = 0; i < n; i++)
                r[i] = arguments[i];
              (window.clearTimeout(e),
                (e = window.setTimeout(() => {
                  t(...r);
                }, 250)));
            }
          );
        }, []);
      return (
        (0, e.useEffect)(
          () => (
            window.addEventListener('resize', r),
            r(),
            () => window.removeEventListener('resize', r)
          ),
          [r]
        ),
        t
      );
    }
  },
  48004,
  7635,
  (t) => {
    'use strict';
    t.s(['default', () => n], 48004);
    let e = {
      active: !0,
      breakpoints: {},
      delay: 4e3,
      jump: !1,
      playOnInit: !0,
      stopOnFocusIn: !0,
      stopOnInteraction: !0,
      stopOnMouseEnter: !1,
      stopOnLastSnap: !1,
      rootNode: null,
    };
    function n() {
      let t,
        r,
        i,
        o,
        u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        c = null,
        l = 0,
        a = !1,
        s = !1,
        f = !1,
        d = !1;
      function p() {
        if (!i) {
          if (h()) {
            f = !0;
            return;
          }
          a || r.emit('autoplay:play');
          let { ownerWindow: t } = r.internalEngine();
          (t.clearTimeout(l),
            (l = t.setTimeout(x, o[r.selectedScrollSnap()])),
            (c = new Date().getTime()),
            r.emit('autoplay:timerset'),
            (a = !0));
        }
      }
      function m() {
        if (!i) {
          a && r.emit('autoplay:stop');
          let { ownerWindow: t } = r.internalEngine();
          (t.clearTimeout(l),
            (l = 0),
            (c = null),
            r.emit('autoplay:timerstopped'),
            (a = !1));
        }
      }
      function g() {
        if (h()) return ((f = a), m());
        f && p();
      }
      function h() {
        let { ownerDocument: t } = r.internalEngine();
        return 'hidden' === t.visibilityState;
      }
      function y() {
        s || m();
      }
      function v() {
        s || p();
      }
      function b() {
        ((s = !0), m());
      }
      function w() {
        ((s = !1), p());
      }
      function x() {
        let { index: e } = r.internalEngine(),
          n = e.clone().add(1).get(),
          i = r.scrollSnapList().length - 1,
          o = t.stopOnLastSnap && n === i;
        if (
          (r.canScrollNext() ? r.scrollNext(d) : r.scrollTo(0, d),
          r.emit('autoplay:select'),
          o)
        )
          return m();
        p();
      }
      return {
        name: 'autoplay',
        options: u,
        init: function (c, l) {
          r = c;
          let { mergeOptions: a, optionsAtMedia: s } = l,
            f = a(e, n.globalOptions);
          if (((t = s(a(f, u))), r.scrollSnapList().length <= 1)) return;
          ((d = t.jump),
            (i = !1),
            (o = (function (t, e) {
              let n = t.scrollSnapList();
              return 'number' == typeof e ? n.map(() => e) : e(n, t);
            })(r, t.delay)));
          let { eventStore: h, ownerDocument: x } = r.internalEngine(),
            S = !!r.internalEngine().options.watchDrag,
            O = (function (t, e) {
              let n = t.rootNode();
              return (e && e(n)) || n;
            })(r, t.rootNode);
          (h.add(x, 'visibilitychange', g),
            S && r.on('pointerDown', y),
            S && !t.stopOnInteraction && r.on('pointerUp', v),
            t.stopOnMouseEnter && h.add(O, 'mouseenter', b),
            t.stopOnMouseEnter &&
              !t.stopOnInteraction &&
              h.add(O, 'mouseleave', w),
            t.stopOnFocusIn && r.on('slideFocusStart', m),
            t.stopOnFocusIn &&
              !t.stopOnInteraction &&
              h.add(r.containerNode(), 'focusout', p),
            t.playOnInit && p());
        },
        destroy: function () {
          (r
            .off('pointerDown', y)
            .off('pointerUp', v)
            .off('slideFocusStart', m),
            m(),
            (i = !0),
            (a = !1));
        },
        play: function (t) {
          (void 0 !== t && (d = t), p());
        },
        stop: function () {
          a && m();
        },
        reset: function () {
          a && p();
        },
        isPlaying: function () {
          return a;
        },
        timeUntilNext: function () {
          return c
            ? o[r.selectedScrollSnap()] - (new Date().getTime() - c)
            : null;
        },
      };
    }
    ((n.globalOptions = void 0), t.s(['default', () => I], 7635));
    var r = t.i(22446);
    function i(t) {
      return (
        '[object Object]' === Object.prototype.toString.call(t) ||
        Array.isArray(t)
      );
    }
    function o(t, e) {
      let n = Object.keys(t),
        r = Object.keys(e);
      return (
        n.length === r.length &&
        JSON.stringify(Object.keys(t.breakpoints || {})) ===
          JSON.stringify(Object.keys(e.breakpoints || {})) &&
        n.every((n) => {
          let r = t[n],
            u = e[n];
          return 'function' == typeof r
            ? ''.concat(r) === ''.concat(u)
            : i(r) && i(u)
              ? o(r, u)
              : r === u;
        })
      );
    }
    function u(t) {
      return t
        .concat()
        .sort((t, e) => (t.name > e.name ? 1 : -1))
        .map((t) => t.options);
    }
    function c(t) {
      return 'number' == typeof t;
    }
    function l(t) {
      return 'string' == typeof t;
    }
    function a(t) {
      return 'boolean' == typeof t;
    }
    function s(t) {
      return '[object Object]' === Object.prototype.toString.call(t);
    }
    function f(t) {
      return Math.abs(t);
    }
    function d(t) {
      return Math.sign(t);
    }
    function p(t) {
      return y(t).map(Number);
    }
    function m(t) {
      return t[g(t)];
    }
    function g(t) {
      return Math.max(0, t.length - 1);
    }
    function h(t) {
      let e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return Array.from(Array(t), (t, n) => e + n);
    }
    function y(t) {
      return Object.keys(t);
    }
    function v(t, e) {
      return void 0 !== e.MouseEvent && t instanceof e.MouseEvent;
    }
    function b() {
      let t = [],
        e = {
          add: function (n, r, i) {
            let o,
              u =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : { passive: !0 };
            return (
              'addEventListener' in n
                ? (n.addEventListener(r, i, u),
                  (o = () => n.removeEventListener(r, i, u)))
                : (n.addListener(i), (o = () => n.removeListener(i))),
              t.push(o),
              e
            );
          },
          clear: function () {
            t = t.filter((t) => t());
          },
        };
      return e;
    }
    function w() {
      let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = f(t - e);
      function r(n) {
        return n < t || n > e;
      }
      return {
        length: n,
        max: e,
        min: t,
        constrain: function (n) {
          return r(n) ? (n < t ? t : e) : n;
        },
        reachedAny: r,
        reachedMax: function (t) {
          return t > e;
        },
        reachedMin: function (e) {
          return e < t;
        },
        removeOffset: function (t) {
          return n ? t - n * Math.ceil((t - e) / n) : t;
        },
      };
    }
    function x(t) {
      let e = t;
      function n(t) {
        return c(t) ? t : t.get();
      }
      return {
        get: function () {
          return e;
        },
        set: function (t) {
          e = n(t);
        },
        add: function (t) {
          e += n(t);
        },
        subtract: function (t) {
          e -= n(t);
        },
      };
    }
    function S(t, e) {
      let n =
          'x' === t.scroll
            ? function (t) {
                return 'translate3d('.concat(t, 'px,0px,0px)');
              }
            : function (t) {
                return 'translate3d(0px,'.concat(t, 'px,0px)');
              },
        r = e.style,
        i = null,
        o = !1;
      return {
        clear: function () {
          !o &&
            ((r.transform = ''),
            e.getAttribute('style') || e.removeAttribute('style'));
        },
        to: function (e) {
          if (o) return;
          let u = Math.round(100 * t.direction(e)) / 100;
          u !== i && ((r.transform = n(u)), (i = u));
        },
        toggleActive: function (t) {
          o = !t;
        },
      };
    }
    let O = {
      align: 'center',
      axis: 'x',
      container: null,
      slides: null,
      containScroll: 'trimSnaps',
      direction: 'ltr',
      slidesToScroll: 1,
      inViewThreshold: 0,
      breakpoints: {},
      dragFree: !1,
      dragThreshold: 10,
      loop: !1,
      skipSnaps: !1,
      duration: 25,
      startIndex: 0,
      active: !0,
      watchDrag: !0,
      watchResize: !0,
      watchSlides: !0,
      watchFocus: !0,
    };
    function E(t, e, n) {
      let r,
        i,
        o,
        u,
        I,
        D = t.ownerDocument,
        L = D.defaultView,
        T = (function (t) {
          function e(t, e) {
            return (function t(e, n) {
              return [e, n].reduce(
                (e, n) => (
                  y(n).forEach((r) => {
                    let i = e[r],
                      o = n[r],
                      u = s(i) && s(o);
                    e[r] = u ? t(i, o) : o;
                  }),
                  e
                ),
                {}
              );
            })(t, e || {});
          }
          return {
            mergeOptions: e,
            optionsAtMedia: function (n) {
              let r = n.breakpoints || {},
                i = y(r)
                  .filter((e) => t.matchMedia(e).matches)
                  .map((t) => r[t])
                  .reduce((t, n) => e(t, n), {});
              return e(n, i);
            },
            optionsMediaQueries: function (e) {
              return e
                .map((t) => y(t.breakpoints || {}))
                .reduce((t, e) => t.concat(e), [])
                .map(t.matchMedia);
            },
          };
        })(L),
        F =
          ((I = []),
          {
            init: function (t, e) {
              return (
                (I = e.filter((t) => {
                  let { options: e } = t;
                  return !1 !== T.optionsAtMedia(e).active;
                })).forEach((e) => e.init(t, T)),
                e.reduce((t, e) => Object.assign(t, { [e.name]: e }), {})
              );
            },
            destroy: function () {
              I = I.filter((t) => t.destroy());
            },
          }),
        M = b(),
        A = (function () {
          let t,
            e = {},
            n = {
              init: function (e) {
                t = e;
              },
              emit: function (r) {
                return ((e[r] || []).forEach((e) => e(t, r)), n);
              },
              off: function (t, r) {
                return ((e[t] = (e[t] || []).filter((t) => t !== r)), n);
              },
              on: function (t, r) {
                return ((e[t] = (e[t] || []).concat([r])), n);
              },
              clear: function () {
                e = {};
              },
            };
          return n;
        })(),
        { mergeOptions: k, optionsAtMedia: N, optionsMediaQueries: j } = T,
        { on: P, off: z, emit: H } = A,
        V = !1,
        U = k(O, E.globalOptions),
        B = k(U),
        C = [];
      function R(e, n) {
        if (V) return;
        ((B = N((U = k(U, e)))), (C = n || C));
        let { container: s, slides: O } = B;
        o = (l(s) ? t.querySelector(s) : s) || t.children[0];
        let E = l(O) ? o.querySelectorAll(O) : O;
        ((u = [].slice.call(E || o.children)),
          (r = (function e(n) {
            let r = (function (t, e, n, r, i, o, u) {
              let s,
                O,
                {
                  align: E,
                  axis: I,
                  direction: D,
                  startIndex: L,
                  loop: T,
                  duration: F,
                  dragFree: M,
                  dragThreshold: A,
                  inViewThreshold: k,
                  slidesToScroll: N,
                  skipSnaps: j,
                  containScroll: P,
                  watchResize: z,
                  watchSlides: H,
                  watchDrag: V,
                  watchFocus: U,
                } = o,
                B = {
                  measure: function (t) {
                    let {
                      offsetTop: e,
                      offsetLeft: n,
                      offsetWidth: r,
                      offsetHeight: i,
                    } = t;
                    return {
                      top: e,
                      right: n + r,
                      bottom: e + i,
                      left: n,
                      width: r,
                      height: i,
                    };
                  },
                },
                C = B.measure(e),
                R = n.map(B.measure),
                q = (function (t, e) {
                  let n = 'rtl' === e,
                    r = 'y' === t,
                    i = !r && n ? -1 : 1;
                  return {
                    scroll: r ? 'y' : 'x',
                    cross: r ? 'x' : 'y',
                    startEdge: r ? 'top' : n ? 'right' : 'left',
                    endEdge: r ? 'bottom' : n ? 'left' : 'right',
                    measureSize: function (t) {
                      let { height: e, width: n } = t;
                      return r ? e : n;
                    },
                    direction: function (t) {
                      return t * i;
                    },
                  };
                })(I, D),
                W = q.measureSize(C),
                J = {
                  measure: function (t) {
                    return (t / 100) * W;
                  },
                },
                K = (function (t, e) {
                  let n = {
                    start: function () {
                      return 0;
                    },
                    center: function (t) {
                      return (e - t) / 2;
                    },
                    end: function (t) {
                      return e - t;
                    },
                  };
                  return {
                    measure: function (r, i) {
                      return l(t) ? n[t](r) : t(e, r, i);
                    },
                  };
                })(E, W),
                X = !T && !!P,
                {
                  slideSizes: Q,
                  slideSizesWithGaps: Y,
                  startGap: G,
                  endGap: Z,
                } = (function (t, e, n, r, i, o) {
                  let { measureSize: u, startEdge: c, endEdge: l } = t,
                    a = n[0] && i,
                    s = (function () {
                      if (!a) return 0;
                      let t = n[0];
                      return f(e[c] - t[c]);
                    })(),
                    d = a
                      ? parseFloat(
                          o
                            .getComputedStyle(m(r))
                            .getPropertyValue('margin-'.concat(l))
                        )
                      : 0,
                    p = n.map(u),
                    h = n
                      .map((t, e, n) => {
                        let r = e === g(n);
                        return e
                          ? r
                            ? p[e] + d
                            : n[e + 1][c] - t[c]
                          : p[e] + s;
                      })
                      .map(f);
                  return {
                    slideSizes: p,
                    slideSizesWithGaps: h,
                    startGap: s,
                    endGap: d,
                  };
                })(q, C, R, n, T || !!P, i),
                $ = (function (t, e, n, r, i, o, u, l, a) {
                  let { startEdge: s, endEdge: d, direction: h } = t,
                    y = c(n);
                  return {
                    groupSlides: function (t) {
                      return y
                        ? p(t)
                            .filter((t) => t % n == 0)
                            .map((e) => t.slice(e, e + n))
                        : t.length
                          ? p(t)
                              .reduce((n, c, a) => {
                                let p = m(n) || 0,
                                  y = c === g(t),
                                  v = i[s] - o[p][s],
                                  b = i[s] - o[c][d],
                                  w = r || 0 !== p ? 0 : h(u),
                                  x = f(b - (!r && y ? h(l) : 0) - (v + w));
                                return (
                                  a && x > e + 2 && n.push(c),
                                  y && n.push(t.length),
                                  n
                                );
                              }, [])
                              .map((e, n, r) => {
                                let i = Math.max(r[n - 1] || 0);
                                return t.slice(i, e);
                              })
                          : [];
                    },
                  };
                })(q, W, N, T, C, R, G, Z, 0),
                { snaps: _, snapsAligned: tt } = (function (t, e, n, r, i) {
                  let { startEdge: o, endEdge: u } = t,
                    { groupSlides: c } = i,
                    l = c(r)
                      .map((t) => m(t)[u] - t[0][o])
                      .map(f)
                      .map(e.measure),
                    a = r.map((t) => n[o] - t[o]).map((t) => -f(t)),
                    s = c(a)
                      .map((t) => t[0])
                      .map((t, e) => t + l[e]);
                  return { snaps: a, snapsAligned: s };
                })(q, K, C, R, $),
                te = -m(_) + m(Y),
                { snapsContained: tn, scrollContainLimit: tr } = (function (
                  t,
                  e,
                  n,
                  r,
                  i
                ) {
                  let o = w(-e + t, 0),
                    u = n
                      .map((t, e) => {
                        let { min: r, max: i } = o,
                          u = o.constrain(t),
                          c = e === g(n);
                        return e
                          ? c ||
                            (function (t, e) {
                              return 1 >= f(t - e);
                            })(r, u)
                            ? r
                            : (function (t, e) {
                                  return 1 >= f(t - e);
                                })(i, u)
                              ? i
                              : u
                          : i;
                      })
                      .map((t) => parseFloat(t.toFixed(3))),
                    c = (function () {
                      let t = u[0],
                        e = m(u);
                      return w(u.lastIndexOf(t), u.indexOf(e) + 1);
                    })();
                  return {
                    snapsContained: (function () {
                      if (e <= t + 2) return [o.max];
                      if ('keepSnaps' === r) return u;
                      let { min: n, max: i } = c;
                      return u.slice(n, i);
                    })(),
                    scrollContainLimit: c,
                  };
                })(W, te, tt, P, 0),
                ti = X ? tn : tt,
                { limit: to } = (function (t, e, n) {
                  let r = e[0];
                  return { limit: w(n ? r - t : m(e), r) };
                })(te, ti, T),
                tu = (function t(e, n, r) {
                  let { constrain: i } = w(0, e),
                    o = e + 1,
                    u = c(n);
                  function c(t) {
                    return r ? f((o + t) % o) : i(t);
                  }
                  function l() {
                    return t(e, u, r);
                  }
                  let a = {
                    get: function () {
                      return u;
                    },
                    set: function (t) {
                      return ((u = c(t)), a);
                    },
                    add: function (t) {
                      return l().set(u + t);
                    },
                    clone: l,
                  };
                  return a;
                })(g(ti), L, T),
                tc = tu.clone(),
                tl = p(n),
                ta = (function (t, e, n, r) {
                  let i = b(),
                    o = 1e3 / 60,
                    u = null,
                    c = 0,
                    l = 0;
                  function a(t) {
                    if (!l) return;
                    u || ((u = t), n(), n());
                    let i = t - u;
                    for (u = t, c += i; c >= o; ) (n(), (c -= o));
                    (r(c / o), l && (l = e.requestAnimationFrame(a)));
                  }
                  function s() {
                    (e.cancelAnimationFrame(l), (u = null), (c = 0), (l = 0));
                  }
                  return {
                    init: function () {
                      i.add(t, 'visibilitychange', () => {
                        t.hidden && ((u = null), (c = 0));
                      });
                    },
                    destroy: function () {
                      (s(), i.clear());
                    },
                    start: function () {
                      l || (l = e.requestAnimationFrame(a));
                    },
                    stop: s,
                    update: n,
                    render: r,
                  };
                })(
                  r,
                  i,
                  () =>
                    ((t) => {
                      let {
                        dragHandler: e,
                        scrollBody: n,
                        scrollBounds: r,
                        options: { loop: i },
                      } = t;
                      (i || r.constrain(e.pointerDown()), n.seek());
                    })(tO),
                  (t) =>
                    ((t, e) => {
                      let {
                          scrollBody: n,
                          translate: r,
                          location: i,
                          offsetLocation: o,
                          previousLocation: u,
                          scrollLooper: c,
                          slideLooper: l,
                          dragHandler: a,
                          animation: s,
                          eventHandler: f,
                          scrollBounds: d,
                          options: { loop: p },
                        } = t,
                        m = n.settled(),
                        g = !d.shouldConstrain(),
                        h = p ? m : m && g,
                        y = h && !a.pointerDown();
                      y && s.stop();
                      let v = i.get() * e + u.get() * (1 - e);
                      (o.set(v),
                        p && (c.loop(n.direction()), l.loop()),
                        r.to(o.get()),
                        y && f.emit('settle'),
                        h || f.emit('scroll'));
                    })(tO, t)
                ),
                ts = ti[tu.get()],
                tf = x(ts),
                td = x(ts),
                tp = x(ts),
                tm = x(ts),
                tg = (function (t, e, n, r, i, o) {
                  let u = 0,
                    c = 0,
                    l = i,
                    a = 0.68,
                    s = t.get(),
                    p = 0;
                  function m(t) {
                    return ((l = t), h);
                  }
                  function g(t) {
                    return ((a = t), h);
                  }
                  let h = {
                    direction: function () {
                      return c;
                    },
                    duration: function () {
                      return l;
                    },
                    velocity: function () {
                      return u;
                    },
                    seek: function () {
                      let e = r.get() - t.get(),
                        i = 0;
                      return (
                        l
                          ? (n.set(t),
                            (u += e / l),
                            (u *= a),
                            (s += u),
                            t.add(u),
                            (i = s - p))
                          : ((u = 0), n.set(r), t.set(r), (i = e)),
                        (c = d(i)),
                        (p = s),
                        h
                      );
                    },
                    settled: function () {
                      return 0.001 > f(r.get() - e.get());
                    },
                    useBaseFriction: function () {
                      return g(0.68);
                    },
                    useBaseDuration: function () {
                      return m(i);
                    },
                    useFriction: g,
                    useDuration: m,
                  };
                  return h;
                })(tf, tp, td, tm, F, 0.68),
                th = (function (t, e, n, r, i) {
                  let { reachedAny: o, removeOffset: u, constrain: c } = r;
                  function l(t) {
                    return t.concat().sort((t, e) => f(t) - f(e))[0];
                  }
                  function a(e, r) {
                    let i = [e, e + n, e - n];
                    if (!t) return e;
                    if (!r) return l(i);
                    let o = i.filter((t) => d(t) === r);
                    return o.length ? l(o) : m(i) - n;
                  }
                  return {
                    byDistance: function (n, r) {
                      let l = i.get() + n,
                        { index: s, distance: d } = (function (n) {
                          let r = t ? u(n) : c(n),
                            { index: i } = e
                              .map((t, e) => ({ diff: a(t - r, 0), index: e }))
                              .sort((t, e) => f(t.diff) - f(e.diff))[0];
                          return { index: i, distance: r };
                        })(l),
                        p = !t && o(l);
                      if (!r || p) return { index: s, distance: n };
                      let m = n + a(e[s] - d, 0);
                      return { index: s, distance: m };
                    },
                    byIndex: function (t, n) {
                      let r = a(e[t] - i.get(), n);
                      return { index: t, distance: r };
                    },
                    shortcut: a,
                  };
                })(T, ti, te, to, tm),
                ty = (function (t, e, n, r, i, o, u) {
                  function c(i) {
                    let c = i.distance,
                      l = i.index !== e.get();
                    (o.add(c),
                      c &&
                        (r.duration()
                          ? t.start()
                          : (t.update(), t.render(1), t.update())),
                      l && (n.set(e.get()), e.set(i.index), u.emit('select')));
                  }
                  return {
                    distance: function (t, e) {
                      c(i.byDistance(t, e));
                    },
                    index: function (t, n) {
                      let r = e.clone().set(t);
                      c(i.byIndex(r.get(), n));
                    },
                  };
                })(ta, tu, tc, tg, th, tm, u),
                tv = (function (t) {
                  let { max: e, length: n } = t;
                  return {
                    get: function (t) {
                      return n ? -((t - e) / n) : 0;
                    },
                  };
                })(to),
                tb = b(),
                tw = (function (t, e, n, r) {
                  let i,
                    o = {},
                    u = null,
                    c = null,
                    l = !1;
                  return {
                    init: function () {
                      ((i = new IntersectionObserver(
                        (t) => {
                          l ||
                            (t.forEach((t) => {
                              o[e.indexOf(t.target)] = t;
                            }),
                            (u = null),
                            (c = null),
                            n.emit('slidesInView'));
                        },
                        { root: t.parentElement, threshold: r }
                      )),
                        e.forEach((t) => i.observe(t)));
                    },
                    destroy: function () {
                      (i && i.disconnect(), (l = !0));
                    },
                    get: function () {
                      let t =
                        !(arguments.length > 0) ||
                        void 0 === arguments[0] ||
                        arguments[0];
                      if (t && u) return u;
                      if (!t && c) return c;
                      let e = y(o).reduce((e, n) => {
                        let r = parseInt(n),
                          { isIntersecting: i } = o[r];
                        return (((t && i) || (!t && !i)) && e.push(r), e);
                      }, []);
                      return (t && (u = e), t || (c = e), e);
                    },
                  };
                })(e, n, u, k),
                { slideRegistry: tx } = (function (t, e, n, r, i, o) {
                  let { groupSlides: u } = i,
                    { min: c, max: l } = r;
                  return {
                    slideRegistry: (function () {
                      let r = u(o);
                      return 1 === n.length
                        ? [o]
                        : t && 'keepSnaps' !== e
                          ? r.slice(c, l).map((t, e, n) => {
                              let r = e === g(n);
                              return e
                                ? r
                                  ? h(g(o) - m(n)[0] + 1, m(n)[0])
                                  : t
                                : h(m(n[0]) + 1);
                            })
                          : r;
                    })(),
                  };
                })(X, P, ti, tr, $, tl),
                tS = (function (t, e, n, r, i, o, u, l) {
                  let s = { passive: !0, capture: !0 },
                    f = 0;
                  function d(t) {
                    'Tab' === t.code && (f = new Date().getTime());
                  }
                  return {
                    init: function (p) {
                      l &&
                        (o.add(document, 'keydown', d, !1),
                        e.forEach((e, d) => {
                          o.add(
                            e,
                            'focus',
                            (e) => {
                              (a(l) || l(p, e)) &&
                                (function (e) {
                                  if (new Date().getTime() - f > 10) return;
                                  (u.emit('slideFocusStart'),
                                    (t.scrollLeft = 0));
                                  let o = n.findIndex((t) => t.includes(e));
                                  c(o) &&
                                    (i.useDuration(0),
                                    r.index(o, 0),
                                    u.emit('slideFocus'));
                                })(d);
                            },
                            s
                          );
                        }));
                    },
                  };
                })(t, n, tx, ty, tg, tb, u, U),
                tO = {
                  ownerDocument: r,
                  ownerWindow: i,
                  eventHandler: u,
                  containerRect: C,
                  slideRects: R,
                  animation: ta,
                  axis: q,
                  dragHandler: (function (
                    t,
                    e,
                    n,
                    r,
                    i,
                    o,
                    u,
                    c,
                    l,
                    s,
                    p,
                    m,
                    g,
                    h,
                    y,
                    x,
                    S,
                    O,
                    E
                  ) {
                    let { cross: I, direction: D } = t,
                      L = ['INPUT', 'SELECT', 'TEXTAREA'],
                      T = { passive: !1 },
                      F = b(),
                      M = b(),
                      A = w(50, 225).constrain(h.measure(20)),
                      k = { mouse: 300, touch: 400 },
                      N = { mouse: 500, touch: 600 },
                      j = y ? 43 : 25,
                      P = !1,
                      z = 0,
                      H = 0,
                      V = !1,
                      U = !1,
                      B = !1,
                      C = !1;
                    function R(t) {
                      if (!v(t, r) && t.touches.length >= 2) return q(t);
                      let e = o.readPoint(t),
                        n = o.readPoint(t, I),
                        u = f(e - z),
                        l = f(n - H);
                      if (!U && !C && (!t.cancelable || !(U = u > l)))
                        return q(t);
                      let a = o.pointerMove(t);
                      (u > x && (B = !0),
                        s.useFriction(0.3).useDuration(0.75),
                        c.start(),
                        i.add(D(a)),
                        t.preventDefault());
                    }
                    function q(t) {
                      let e = p.byDistance(0, !1).index !== m.get(),
                        n = o.pointerUp(t) * (y ? N : k)[C ? 'mouse' : 'touch'],
                        r = (function (t, e) {
                          let n = m.add(-1 * d(t)),
                            r = p.byDistance(t, !y).distance;
                          return y || f(t) < A
                            ? r
                            : S && e
                              ? 0.5 * r
                              : p.byIndex(n.get(), 0).distance;
                        })(D(n), e),
                        i = (function (t, e) {
                          var n, r;
                          if (0 === t || 0 === e || f(t) <= f(e)) return 0;
                          let i = ((n = f(t)), (r = f(e)), f(n - r));
                          return f(i / t);
                        })(n, r);
                      ((U = !1),
                        (V = !1),
                        M.clear(),
                        s.useDuration(j - 10 * i).useFriction(0.68 + i / 50),
                        l.distance(r, !y),
                        (C = !1),
                        g.emit('pointerUp'));
                    }
                    function W(t) {
                      B && (t.stopPropagation(), t.preventDefault(), (B = !1));
                    }
                    return {
                      init: function (t) {
                        E &&
                          F.add(e, 'dragstart', (t) => t.preventDefault(), T)
                            .add(e, 'touchmove', () => void 0, T)
                            .add(e, 'touchend', () => void 0)
                            .add(e, 'touchstart', c)
                            .add(e, 'mousedown', c)
                            .add(e, 'touchcancel', q)
                            .add(e, 'contextmenu', q)
                            .add(e, 'click', W, !0);
                        function c(c) {
                          (a(E) || E(t, c)) &&
                            (function (t) {
                              let c = v(t, r);
                              if (
                                ((C = c),
                                (B = y && c && !t.buttons && P),
                                (P = f(i.get() - u.get()) >= 2),
                                !c || 0 === t.button) &&
                                !(function (t) {
                                  let e = t.nodeName || '';
                                  return L.includes(e);
                                })(t.target)
                              ) {
                                ((V = !0),
                                  o.pointerDown(t),
                                  s.useFriction(0).useDuration(0),
                                  i.set(u));
                                let r = C ? n : e;
                                (M.add(r, 'touchmove', R, T)
                                  .add(r, 'touchend', q)
                                  .add(r, 'mousemove', R, T)
                                  .add(r, 'mouseup', q),
                                  (z = o.readPoint(t)),
                                  (H = o.readPoint(t, I)),
                                  g.emit('pointerDown'));
                              }
                            })(c);
                        }
                      },
                      destroy: function () {
                        (F.clear(), M.clear());
                      },
                      pointerDown: function () {
                        return V;
                      },
                    };
                  })(
                    q,
                    t,
                    r,
                    i,
                    tm,
                    (function (t, e) {
                      let n, r;
                      function i(t) {
                        return t.timeStamp;
                      }
                      function o(n, r) {
                        let i = r || t.scroll;
                        return (v(n, e) ? n : n.touches[0])[
                          'client'.concat('x' === i ? 'X' : 'Y')
                        ];
                      }
                      return {
                        pointerDown: function (t) {
                          return ((n = t), (r = t), o(t));
                        },
                        pointerMove: function (t) {
                          let e = o(t) - o(r),
                            u = i(t) - i(n) > 170;
                          return ((r = t), u && (n = t), e);
                        },
                        pointerUp: function (t) {
                          if (!n || !r) return 0;
                          let e = o(r) - o(n),
                            u = i(t) - i(n),
                            c = i(t) - i(r) > 170,
                            l = e / u;
                          return u && !c && f(l) > 0.1 ? l : 0;
                        },
                        readPoint: o,
                      };
                    })(q, i),
                    tf,
                    ta,
                    ty,
                    tg,
                    th,
                    tu,
                    u,
                    J,
                    M,
                    A,
                    j,
                    0,
                    V
                  ),
                  eventStore: tb,
                  percentOfView: J,
                  index: tu,
                  indexPrevious: tc,
                  limit: to,
                  location: tf,
                  offsetLocation: tp,
                  previousLocation: td,
                  options: o,
                  resizeHandler: (function (t, e, n, r, i, o, u) {
                    let c,
                      l,
                      s = [t].concat(r),
                      d = [],
                      p = !1;
                    function m(t) {
                      return i.measureSize(u.measure(t));
                    }
                    return {
                      init: function (i) {
                        o &&
                          ((l = m(t)),
                          (d = r.map(m)),
                          (c = new ResizeObserver((n) => {
                            (a(o) || o(i, n)) &&
                              (function (n) {
                                for (let o of n) {
                                  if (p) return;
                                  let n = o.target === t,
                                    u = r.indexOf(o.target),
                                    c = n ? l : d[u];
                                  if (f(m(n ? t : r[u]) - c) >= 0.5) {
                                    (i.reInit(), e.emit('resize'));
                                    break;
                                  }
                                }
                              })(n);
                          })),
                          n.requestAnimationFrame(() => {
                            s.forEach((t) => c.observe(t));
                          }));
                      },
                      destroy: function () {
                        ((p = !0), c && c.disconnect());
                      },
                    };
                  })(e, u, i, n, q, z, B),
                  scrollBody: tg,
                  scrollBounds: (function (t, e, n, r, i) {
                    let o = i.measure(10),
                      u = i.measure(50),
                      c = w(0.1, 0.99),
                      l = !1;
                    function a() {
                      return (
                        !l && !!t.reachedAny(n.get()) && !!t.reachedAny(e.get())
                      );
                    }
                    return {
                      shouldConstrain: a,
                      constrain: function (i) {
                        if (!a()) return;
                        let l = t.reachedMin(e.get()) ? 'min' : 'max',
                          s = f(t[l] - e.get()),
                          d = n.get() - e.get(),
                          p = c.constrain(s / u);
                        (n.subtract(d * p),
                          !i &&
                            f(d) < o &&
                            (n.set(t.constrain(n.get())),
                            r.useDuration(25).useBaseFriction()));
                      },
                      toggleActive: function (t) {
                        l = !t;
                      },
                    };
                  })(to, tp, tm, tg, J),
                  scrollLooper: (function (t, e, n, r) {
                    let { reachedMin: i, reachedMax: o } = w(
                      e.min + 0.1,
                      e.max + 0.1
                    );
                    return {
                      loop: function (e) {
                        if (!(1 === e ? o(n.get()) : -1 === e && i(n.get())))
                          return;
                        let u = -1 * e * t;
                        r.forEach((t) => t.add(u));
                      },
                    };
                  })(te, to, tp, [tf, tp, td, tm]),
                  scrollProgress: tv,
                  scrollSnapList: ti.map(tv.get),
                  scrollSnaps: ti,
                  scrollTarget: th,
                  scrollTo: ty,
                  slideLooper: (function (t, e, n, r, i, o, u, c, l) {
                    let a = p(i),
                      s = p(i).reverse(),
                      f = g(m(s, u[0]), n, !1).concat(
                        g(m(a, e - u[0] - 1), -n, !0)
                      );
                    function d(t, e) {
                      return t.reduce((t, e) => t - i[e], e);
                    }
                    function m(t, e) {
                      return t.reduce(
                        (t, n) => (d(t, e) > 0 ? t.concat([n]) : t),
                        []
                      );
                    }
                    function g(i, u, a) {
                      let s = o.map((t, n) => ({
                        start: t - r[n] + 0.5 + u,
                        end: t + e - 0.5 + u,
                      }));
                      return i.map((e) => {
                        let r = a ? 0 : -n,
                          i = a ? n : 0,
                          o = s[e][a ? 'end' : 'start'];
                        return {
                          index: e,
                          loopPoint: o,
                          slideLocation: x(-1),
                          translate: S(t, l[e]),
                          target: () => (c.get() > o ? r : i),
                        };
                      });
                    }
                    return {
                      canLoop: function () {
                        return f.every((t) => {
                          let { index: n } = t;
                          return (
                            0.1 >=
                            d(
                              a.filter((t) => t !== n),
                              e
                            )
                          );
                        });
                      },
                      clear: function () {
                        f.forEach((t) => t.translate.clear());
                      },
                      loop: function () {
                        f.forEach((t) => {
                          let { target: e, translate: n, slideLocation: r } = t,
                            i = e();
                          i !== r.get() && (n.to(i), r.set(i));
                        });
                      },
                      loopPoints: f,
                    };
                  })(q, W, te, Q, Y, _, ti, tp, n),
                  slideFocus: tS,
                  slidesHandler:
                    ((O = !1),
                    {
                      init: function (t) {
                        H &&
                          (s = new MutationObserver((e) => {
                            !O &&
                              (a(H) || H(t, e)) &&
                              (function (e) {
                                for (let n of e)
                                  if ('childList' === n.type) {
                                    (t.reInit(), u.emit('slidesChanged'));
                                    break;
                                  }
                              })(e);
                          })).observe(e, { childList: !0 });
                      },
                      destroy: function () {
                        (s && s.disconnect(), (O = !0));
                      },
                    }),
                  slidesInView: tw,
                  slideIndexes: tl,
                  slideRegistry: tx,
                  slidesToScroll: $,
                  target: tm,
                  translate: S(q, e),
                };
              return tO;
            })(t, o, u, D, L, n, A);
            return n.loop && !r.slideLooper.canLoop()
              ? e(Object.assign({}, n, { loop: !1 }))
              : r;
          })(B)),
          j([
            U,
            ...C.map((t) => {
              let { options: e } = t;
              return e;
            }),
          ]).forEach((t) => M.add(t, 'change', q)),
          B.active &&
            (r.translate.to(r.location.get()),
            r.animation.init(),
            r.slidesInView.init(),
            r.slideFocus.init(X),
            r.eventHandler.init(X),
            r.resizeHandler.init(X),
            r.slidesHandler.init(X),
            r.options.loop && r.slideLooper.loop(),
            o.offsetParent && u.length && r.dragHandler.init(X),
            (i = F.init(X, C))));
      }
      function q(t, e) {
        let n = K();
        (W(), R(k({ startIndex: n }, t), e), A.emit('reInit'));
      }
      function W() {
        (r.dragHandler.destroy(),
          r.eventStore.clear(),
          r.translate.clear(),
          r.slideLooper.clear(),
          r.resizeHandler.destroy(),
          r.slidesHandler.destroy(),
          r.slidesInView.destroy(),
          r.animation.destroy(),
          F.destroy(),
          M.clear());
      }
      function J(t, e, n) {
        B.active &&
          !V &&
          (r.scrollBody
            .useBaseFriction()
            .useDuration(!0 === e ? 0 : B.duration),
          r.scrollTo.index(t, n || 0));
      }
      function K() {
        return r.index.get();
      }
      let X = {
        canScrollNext: function () {
          return r.index.add(1).get() !== K();
        },
        canScrollPrev: function () {
          return r.index.add(-1).get() !== K();
        },
        containerNode: function () {
          return o;
        },
        internalEngine: function () {
          return r;
        },
        destroy: function () {
          V || ((V = !0), M.clear(), W(), A.emit('destroy'), A.clear());
        },
        off: z,
        on: P,
        emit: H,
        plugins: function () {
          return i;
        },
        previousScrollSnap: function () {
          return r.indexPrevious.get();
        },
        reInit: q,
        rootNode: function () {
          return t;
        },
        scrollNext: function (t) {
          J(r.index.add(1).get(), t, -1);
        },
        scrollPrev: function (t) {
          J(r.index.add(-1).get(), t, 1);
        },
        scrollProgress: function () {
          return r.scrollProgress.get(r.offsetLocation.get());
        },
        scrollSnapList: function () {
          return r.scrollSnapList;
        },
        scrollTo: J,
        selectedScrollSnap: K,
        slideNodes: function () {
          return u;
        },
        slidesInView: function () {
          return r.slidesInView.get();
        },
        slidesNotInView: function () {
          return r.slidesInView.get(!1);
        },
      };
      return (R(e, n), setTimeout(() => A.emit('init'), 0), X);
    }
    function I() {
      let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = (0, r.useRef)(t),
        i = (0, r.useRef)(e),
        [c, l] = (0, r.useState)(),
        [a, s] = (0, r.useState)(),
        f = (0, r.useCallback)(() => {
          c && c.reInit(n.current, i.current);
        }, [c]);
      return (
        (0, r.useEffect)(() => {
          o(n.current, t) || ((n.current = t), f());
        }, [t, f]),
        (0, r.useEffect)(() => {
          !(function (t, e) {
            if (t.length !== e.length) return !1;
            let n = u(t),
              r = u(e);
            return n.every((t, e) => o(t, r[e]));
          })(i.current, e) && ((i.current = e), f());
        }, [e, f]),
        (0, r.useEffect)(() => {
          if (
            'undefined' != typeof window &&
            window.document &&
            window.document.createElement &&
            a
          ) {
            E.globalOptions = I.globalOptions;
            let t = E(a, n.current, i.current);
            return (l(t), () => t.destroy());
          }
          l(void 0);
        }, [a, l]),
        [s, c]
      );
    }
    ((E.globalOptions = void 0), (I.globalOptions = void 0));
  },
]);
