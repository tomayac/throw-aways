(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  4916,
  (e) => {
    e.v({
      button: 'hero-module-scss-module__aUm6PG__button',
      content: 'hero-module-scss-module__aUm6PG__content',
      description: 'hero-module-scss-module__aUm6PG__description',
      hero: 'hero-module-scss-module__aUm6PG__hero',
      inner: 'hero-module-scss-module__aUm6PG__inner',
      polaroid: 'hero-module-scss-module__aUm6PG__polaroid',
      polaroids: 'hero-module-scss-module__aUm6PG__polaroids',
      sticker: 'hero-module-scss-module__aUm6PG__sticker',
      title: 'hero-module-scss-module__aUm6PG__title',
      word: 'hero-module-scss-module__aUm6PG__word',
      wordMask: 'hero-module-scss-module__aUm6PG__wordMask',
    });
  },
  91036,
  (e) => {
    'use strict';
    let t, i;
    e.s(['default', () => X], 91036);
    var a = e.i(30718),
      s = e.i(11477),
      o = e.i(50352),
      n = e.i(19044),
      l = e.i(22446),
      r = e.i(92902),
      m = e.i(10262);
    function u(e, t) {
      let i,
        a = () => {
          let { currentTime: a } = t,
            s = (null === a ? 0 : a.value) / 100;
          (i !== s && e(s), (i = s));
        };
      return (m.frame.preUpdate(a, !0), () => (0, m.cancelFrame)(a));
    }
    var c = e.i(58421),
      d = e.i(4542),
      h = e.i(61132);
    let p = new WeakMap(),
      g = (e, t, i) => (a, s) =>
        s && s[0]
          ? s[0][e + 'Size']
          : (0, d.isSVGElement)(a) && 'getBBox' in a
            ? a.getBBox()[t]
            : a[i],
      w = g('inline', 'width', 'offsetWidth'),
      y = g('block', 'height', 'offsetHeight');
    function f(e) {
      var t;
      let { target: i, borderBoxSize: a } = e;
      null == (t = p.get(i)) ||
        t.forEach((e) => {
          e(i, {
            get width() {
              return w(i, a);
            },
            get height() {
              return y(i, a);
            },
          });
        });
    }
    function b(e) {
      e.forEach(f);
    }
    let _ = new Set();
    var k = e.i(43297),
      v = e.i(59701);
    let N = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      }),
      j = {
        x: { length: 'Width', position: 'Left' },
        y: { length: 'Height', position: 'Top' },
      };
    function x(e, t, i, a) {
      let s = i[t],
        { length: o, position: n } = j[t],
        l = s.current,
        r = i.time;
      ((s.current = e['scroll'.concat(n)]),
        (s.scrollLength = e['scroll'.concat(o)] - e['client'.concat(o)]),
        (s.offset.length = 0),
        (s.offset[0] = 0),
        (s.offset[1] = s.scrollLength),
        (s.progress = (0, k.progress)(0, s.scrollLength, s.current)));
      let m = a - r;
      s.velocity = m > 50 ? 0 : (0, v.velocityPerSecond)(s.current - l, m);
    }
    e.i(72733);
    var M = e.i(58639),
      W = e.i(18920),
      S = e.i(9258),
      q = e.i(21667);
    let T = { start: 0, center: 0.5, end: 1 };
    function I(e, t) {
      let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        a = 0;
      if ((e in T && (e = T[e]), 'string' == typeof e)) {
        let t = parseFloat(e);
        e.endsWith('px')
          ? (a = t)
          : e.endsWith('%')
            ? (e = t / 100)
            : e.endsWith('vw')
              ? (a = (t / 100) * document.documentElement.clientWidth)
              : e.endsWith('vh')
                ? (a = (t / 100) * document.documentElement.clientHeight)
                : (e = t);
      }
      return ('number' == typeof e && (a = t * e), i + a);
    }
    let L = [0, 0],
      P = {
        All: [
          [0, 0],
          [1, 1],
        ],
      },
      O = { x: 0, y: 0 },
      A = new WeakMap(),
      E = new WeakMap(),
      D = new WeakMap(),
      C = (e) => (e === document.scrollingElement ? window : e);
    function z(e) {
      let { container: a = document.scrollingElement, ...s } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (!a) return r.noop;
      let o = D.get(a);
      o || ((o = new Set()), D.set(a, o));
      let n = (function (e, t, i) {
        let a =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return {
          measure: (t) => {
            (!(function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : e,
                i = arguments.length > 2 ? arguments[2] : void 0;
              if (((i.x.targetOffset = 0), (i.y.targetOffset = 0), t !== e)) {
                let a = t;
                for (; a && a !== e; )
                  ((i.x.targetOffset += a.offsetLeft),
                    (i.y.targetOffset += a.offsetTop),
                    (a = a.offsetParent));
              }
              ((i.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
                (i.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
                (i.x.containerLength = e.clientWidth),
                (i.y.containerLength = e.clientHeight));
            })(e, a.target, i),
              x(e, 'x', i, t),
              x(e, 'y', i, t),
              (i.time = t),
              (a.offset || a.target) &&
                (function (e, t, i) {
                  let { offset: a = P.All } = i,
                    { target: s = e, axis: o = 'y' } = i,
                    n = 'y' === o ? 'height' : 'width',
                    l =
                      s !== e
                        ? (function (e, t) {
                            let i = { x: 0, y: 0 },
                              a = e;
                            for (; a && a !== t; )
                              if ((0, q.isHTMLElement)(a))
                                ((i.x += a.offsetLeft),
                                  (i.y += a.offsetTop),
                                  (a = a.offsetParent));
                              else if ('svg' === a.tagName) {
                                let e = a.getBoundingClientRect(),
                                  t = (a =
                                    a.parentElement).getBoundingClientRect();
                                ((i.x += e.left - t.left),
                                  (i.y += e.top - t.top));
                              } else if (a instanceof SVGGraphicsElement) {
                                let { x: e, y: t } = a.getBBox();
                                ((i.x += e), (i.y += t));
                                let s = null,
                                  o = a.parentNode;
                                for (; !s; )
                                  ('svg' === o.tagName && (s = o),
                                    (o = a.parentNode));
                                a = s;
                              } else break;
                            return i;
                          })(s, e)
                        : O,
                    r =
                      s === e
                        ? { width: e.scrollWidth, height: e.scrollHeight }
                        : 'getBBox' in s && 'svg' !== s.tagName
                          ? s.getBBox()
                          : { width: s.clientWidth, height: s.clientHeight },
                    m = { width: e.clientWidth, height: e.clientHeight };
                  t[o].offset.length = 0;
                  let u = !t[o].interpolate,
                    c = a.length;
                  for (let e = 0; e < c; e++) {
                    let i = (function (e, t, i, a) {
                      let s = Array.isArray(e) ? e : L,
                        o = 0;
                      return (
                        'number' == typeof e
                          ? (s = [e, e])
                          : 'string' == typeof e &&
                            (s = (e = e.trim()).includes(' ')
                              ? e.split(' ')
                              : [e, T[e] ? e : '0']),
                        (o = I(s[0], i, a)) - I(s[1], t)
                      );
                    })(a[e], m[n], r[n], l[o]);
                    (u || i === t[o].interpolatorOffsets[e] || (u = !0),
                      (t[o].offset[e] = i));
                  }
                  (u &&
                    ((t[o].interpolate = (0, M.interpolate)(
                      t[o].offset,
                      (0, W.defaultOffset)(a),
                      { clamp: !1 }
                    )),
                    (t[o].interpolatorOffsets = [...t[o].offset])),
                    (t[o].progress = (0, S.clamp)(
                      0,
                      1,
                      t[o].interpolate(t[o].current)
                    )));
                })(e, i, a));
          },
          notify: () => t(i),
        };
      })(a, e, { time: 0, x: N(), y: N() }, s);
      if ((o.add(n), !A.has(a))) {
        let e = () => {
            for (let e of o) e.measure(m.frameData.timestamp);
            m.frame.preUpdate(s);
          },
          s = () => {
            for (let e of o) e.notify();
          },
          n = () => m.frame.read(e);
        A.set(a, n);
        let l = C(a);
        (window.addEventListener('resize', n, { passive: !0 }),
          a !== document.documentElement &&
            E.set(
              a,
              'function' == typeof a
                ? (_.add(a),
                  i ||
                    ((i = () => {
                      let e = {
                        get width() {
                          return window.innerWidth;
                        },
                        get height() {
                          return window.innerHeight;
                        },
                      };
                      _.forEach((t) => t(e));
                    }),
                    window.addEventListener('resize', i)),
                  () => {
                    (_.delete(a),
                      _.size ||
                        'function' != typeof i ||
                        (window.removeEventListener('resize', i),
                        (i = void 0)));
                  })
                : (function (e, i) {
                    t ||
                      ('undefined' != typeof ResizeObserver &&
                        (t = new ResizeObserver(b)));
                    let a = (0, h.resolveElements)(e);
                    return (
                      a.forEach((e) => {
                        let a = p.get(e);
                        (a || ((a = new Set()), p.set(e, a)),
                          a.add(i),
                          null == t || t.observe(e));
                      }),
                      () => {
                        a.forEach((e) => {
                          let a = p.get(e);
                          (null == a || a.delete(i),
                            (null == a ? void 0 : a.size) ||
                              null == t ||
                              t.unobserve(e));
                        });
                      }
                    );
                  })(a, n)
            ),
          l.addEventListener('scroll', n, { passive: !0 }),
          n());
      }
      let l = A.get(a);
      return (
        m.frame.read(l, !1, !0),
        () => {
          (0, m.cancelFrame)(l);
          let e = D.get(a);
          if (!e || (e.delete(n), e.size)) return;
          let t = A.get(a);
          if ((A.delete(a), t)) {
            var i;
            (C(a).removeEventListener('scroll', t),
              null == (i = E.get(a)) || i(),
              window.removeEventListener('resize', t));
          }
        }
      );
    }
    let G = new Map();
    function F(e) {
      var t, i, a, s;
      let { source: o, container: n, ...l } = e,
        { axis: r } = l;
      o && (n = o);
      let m = null != (t = G.get(n)) ? t : new Map();
      G.set(n, m);
      let u = null != (i = l.target) ? i : 'self',
        d = null != (a = m.get(u)) ? a : {},
        h = r + (null != (s = l.offset) ? s : []).join(',');
      return (
        d[h] ||
          (d[h] =
            !l.target && (0, c.supportsScrollTimeline)()
              ? new ScrollTimeline({ source: n, axis: r })
              : (function (e) {
                  let t = { value: 0 },
                    i = z((i) => {
                      t.value = 100 * i[e.axis].progress;
                    }, e);
                  return { currentTime: t, cancel: i };
                })({ container: n, ...l })),
        d[h]
      );
    }
    var B = e.i(48783),
      Y = e.i(12432);
    let H = () => ({
        scrollX: (0, o.motionValue)(0),
        scrollY: (0, o.motionValue)(0),
        scrollXProgress: (0, o.motionValue)(0),
        scrollYProgress: (0, o.motionValue)(0),
      }),
      Q = (e) => !!e && !e.current;
    var U = e.i(40388),
      V = e.i(19774),
      J = e.i(4916);
    let R = (0, s.motion)(U.default),
      K = [
        { text: 'Meet', delay: 0.8 },
        { text: 'the', delay: 1.02 },
        { text: 'awesome', delay: 1.28 },
        { text: 'Devfest', delay: 1.42 },
        { text: 'Team', delay: 1.59 },
      ];
    function X() {
      let e = (0, l.useRef)(null),
        [t, i] = (0, l.useState)(!1),
        { scrollYProgress: o } = (function () {
          let {
              container: e,
              target: t,
              ...i
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            a = (0, B.useConstant)(H),
            s = (0, l.useRef)(null),
            o = (0, l.useRef)(!1),
            m = (0, l.useCallback)(
              () => (
                (s.current = (function (e) {
                  var t, i;
                  let {
                    axis: a = 'y',
                    container: s = document.scrollingElement,
                    ...o
                  } = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                  if (!s) return r.noop;
                  let n = { axis: a, container: s, ...o };
                  return 'function' == typeof e
                    ? ((t = e),
                      (i = n),
                      2 === t.length
                        ? z((e) => {
                            t(e[i.axis].progress, e);
                          }, i)
                        : u(t, F(i)))
                    : (function (e, t) {
                        let i = F(t);
                        return e.attachTimeline({
                          timeline: t.target ? void 0 : i,
                          observe: (e) => (
                            e.pause(),
                            u((t) => {
                              e.time = e.iterationDuration * t;
                            }, i)
                          ),
                        });
                      })(e, n);
                })(
                  (e, t) => {
                    let { x: i, y: s } = t;
                    (a.scrollX.set(i.current),
                      a.scrollXProgress.set(i.progress),
                      a.scrollY.set(s.current),
                      a.scrollYProgress.set(s.progress));
                  },
                  {
                    ...i,
                    container: (null == e ? void 0 : e.current) || void 0,
                    target: (null == t ? void 0 : t.current) || void 0,
                  }
                )),
                () => {
                  var e;
                  null == (e = s.current) || e.call(s);
                }
              ),
              [e, t, JSON.stringify(i.offset)]
            );
          return (
            (0, Y.useIsomorphicLayoutEffect)(() => {
              if (((o.current = !1), !(Q(e) || Q(t)))) return m();
              o.current = !0;
            }, [m]),
            (0, l.useEffect)(
              () =>
                o.current
                  ? ((0, n.invariant)(
                      !Q(e),
                      'Container ref is defined but not hydrated',
                      'use-scroll-ref'
                    ),
                    (0, n.invariant)(
                      !Q(t),
                      'Target ref is defined but not hydrated',
                      'use-scroll-ref'
                    ),
                    m())
                  : void 0,
              [m]
            ),
            a
          );
        })({ target: e, offset: ['start start', 'end start'] });
      return (
        (0, l.useEffect)(() => {
          if (t) return;
          let e = o.on('change', (e) => {
            e >= 0.1 && i(!0);
          });
          return () => e();
        }, [o, t]),
        (0, a.jsxs)('div', {
          ref: e,
          className: J.default.hero,
          children: [
            (0, a.jsx)(s.motion.h1, {
              initial: 'hidden',
              whileInView: 'visible',
              className: J.default.title,
              viewport: { once: !0, amount: 0.3 },
              children: K.map((e, t) =>
                (0, a.jsx)(
                  'span',
                  {
                    className: J.default.wordMask,
                    children: (0, a.jsx)(s.motion.span, {
                      className: J.default.word,
                      variants: { visible: { y: '0%' }, hidden: { y: '100%' } },
                      transition: {
                        duration: 1,
                        delay: e.delay,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                      children: e.text,
                    }),
                  },
                  t
                )
              ),
            }),
            (0, a.jsxs)('div', {
              className: J.default.content,
              children: [
                (0, a.jsx)(R, {
                  width: 119,
                  height: 147,
                  className: J.default.sticker,
                  src: '/stickers/designers-make-it-pretty-and-usable.svg',
                  alt: "'Designers Make It Pretty And Usable' written underneath a smiley face",
                  viewport: { once: !0, amount: 1 },
                  initial: { rotate: -56.54, scale: 0, opacity: 0 },
                  whileInView: { rotate: -11.54, scale: 1, opacity: 1 },
                  transition: {
                    delay: 1.9,
                    duration: 0.69,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }),
                (0, a.jsxs)('div', {
                  className: J.default.inner,
                  children: [
                    (0, a.jsx)(s.motion.p, {
                      initial: { opacity: 0 },
                      whileInView: { opacity: 1 },
                      viewport: { once: !0, amount: 0.5 },
                      transition: {
                        delay: 1.73,
                        duration: 0.6,
                        ease: 'linear',
                      },
                      className: J.default.description,
                      children:
                        "Meet the incredible superstars behind this year's edition of DevFest Lagos!",
                    }),
                    (0, a.jsx)(s.motion.div, {
                      initial: { y: 16, opacity: 0 },
                      whileInView: { y: 0, opacity: 1 },
                      viewport: { once: !0, amount: 0.5 },
                      transition: {
                        delay: 1.82,
                        duration: 0.6,
                        ease: [0.22, 0.61, 0.36, 1],
                      },
                      children: (0, a.jsx)(V.Button, {
                        variant: 'tertiary',
                        className: J.default.button,
                        onClick: () => {
                          let e = document.getElementById('team-members');
                          e &&
                            e.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            });
                        },
                        children: 'See All',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(s.motion.div, {
              initial: { y: '80%' },
              animate: t ? { y: '10%' } : { y: '80%' },
              transition: { delay: 0, duration: 1, ease: [0.25, 0.1, 0.25, 1] },
              className: J.default.polaroids,
              children: [
                (0, a.jsx)(R, {
                  initial: { scale: 0.8, opacity: 0, rotate: 15 },
                  animate: t
                    ? { scale: 1, opacity: 1, rotate: -10 }
                    : { scale: 0.8, opacity: 0, rotate: 15 },
                  transition: {
                    scale: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
                    opacity: {
                      delay: 0,
                      duration: 1,
                      ease: [0.33, 1, 0.68, 1],
                    },
                    rotate: {
                      delay: 0.37,
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                  src: '/team/polaroid-1.png',
                  className: J.default.polaroid,
                  alt: 'Polaroid 1',
                  width: 320,
                  height: 427,
                }),
                (0, a.jsx)(R, {
                  initial: { scale: 0.8, opacity: 0, rotate: 5 },
                  animate: t
                    ? { scale: 1, opacity: 1, rotate: 0 }
                    : { scale: 0.8, opacity: 0, rotate: 5 },
                  transition: {
                    scale: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
                    opacity: {
                      delay: 0,
                      duration: 1,
                      ease: [0.33, 1, 0.68, 1],
                    },
                    rotate: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
                  },
                  src: '/team/polaroid-2.png',
                  className: J.default.polaroid,
                  alt: 'Polaroid 2',
                  width: 320,
                  height: 427,
                }),
                (0, a.jsx)(R, {
                  initial: { scale: 0.8, opacity: 0, rotate: -14.01 },
                  animate: t
                    ? { scale: 1, opacity: 1, rotate: 10 }
                    : { scale: 0.8, opacity: 0, rotate: -14.01 },
                  transition: {
                    scale: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
                    opacity: {
                      delay: 0,
                      duration: 1,
                      ease: [0.33, 1, 0.68, 1],
                    },
                    rotate: {
                      delay: 0.44,
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                  src: '/team/polaroid-3.png',
                  className: J.default.polaroid,
                  alt: 'Polaroid 3',
                  width: 320,
                  height: 427,
                }),
              ],
            }),
          ],
        })
      );
    }
  },
  35960,
  (e) => {
    e.v({
      active: 'members-module-scss-module__dSTtrW__active',
      answer: 'members-module-scss-module__dSTtrW__answer',
      break: 'members-module-scss-module__dSTtrW__break',
      button: 'members-module-scss-module__dSTtrW__button',
      close: 'members-module-scss-module__dSTtrW__close',
      content: 'members-module-scss-module__dSTtrW__content',
      dropdown: 'members-module-scss-module__dSTtrW__dropdown',
      fadeIn: 'members-module-scss-module__dSTtrW__fadeIn',
      filters: 'members-module-scss-module__dSTtrW__filters',
      firstName: 'members-module-scss-module__dSTtrW__firstName',
      icon: 'members-module-scss-module__dSTtrW__icon',
      inner: 'members-module-scss-module__dSTtrW__inner',
      label: 'members-module-scss-module__dSTtrW__label',
      lastName: 'members-module-scss-module__dSTtrW__lastName',
      listeningTo: 'members-module-scss-module__dSTtrW__listeningTo',
      members: 'members-module-scss-module__dSTtrW__members',
      modal: 'members-module-scss-module__dSTtrW__modal',
      music: 'members-module-scss-module__dSTtrW__music',
      name: 'members-module-scss-module__dSTtrW__name',
      option: 'members-module-scss-module__dSTtrW__option',
      overlay: 'members-module-scss-module__dSTtrW__overlay',
      pill: 'members-module-scss-module__dSTtrW__pill',
      pills: 'members-module-scss-module__dSTtrW__pills',
      question: 'members-module-scss-module__dSTtrW__question',
      role: 'members-module-scss-module__dSTtrW__role',
      social: 'members-module-scss-module__dSTtrW__social',
      socialLink: 'members-module-scss-module__dSTtrW__socialLink',
      song: 'members-module-scss-module__dSTtrW__song',
      sticker: 'members-module-scss-module__dSTtrW__sticker',
      sticker1: 'members-module-scss-module__dSTtrW__sticker1',
      sticker2: 'members-module-scss-module__dSTtrW__sticker2',
      title: 'members-module-scss-module__dSTtrW__title',
      toggle: 'members-module-scss-module__dSTtrW__toggle',
    });
  },
  69308,
  (e) => {
    e.v({
      active: 'members-carousel-module-scss-module__LBJwPq__active',
      emblaContainer:
        'members-carousel-module-scss-module__LBJwPq__emblaContainer',
      emblaSlide: 'members-carousel-module-scss-module__LBJwPq__emblaSlide',
      emblaViewport:
        'members-carousel-module-scss-module__LBJwPq__emblaViewport',
      image: 'members-carousel-module-scss-module__LBJwPq__image',
      info: 'members-carousel-module-scss-module__LBJwPq__info',
      largeItem: 'members-carousel-module-scss-module__LBJwPq__largeItem',
      other: 'members-carousel-module-scss-module__LBJwPq__other',
    });
  },
  14620,
  (e) => {
    e.v({
      content: 'members-list-module-scss-module__jelQPq__content',
      firstName: 'members-list-module-scss-module__jelQPq__firstName',
      image: 'members-list-module-scss-module__jelQPq__image',
      info: 'members-list-module-scss-module__jelQPq__info',
      inner: 'members-list-module-scss-module__jelQPq__inner',
      item: 'members-list-module-scss-module__jelQPq__item',
      list: 'members-list-module-scss-module__jelQPq__list',
      social: 'members-list-module-scss-module__jelQPq__social',
    });
  },
  33999,
  (e) => {
    'use strict';
    e.s(['default', () => y], 33999);
    var t = e.i(30718),
      i = e.i(76422),
      a = e.i(40388),
      s = e.i(22446);
    let o = [
      {
        firstName: 'Isreal',
        lastName: 'Aluko',
        role: 'Engineering',
        image: 'https://i.ibb.co/tMN1yjs7/20250629-133702.jpg',
        music: {
          artist: 'Dai Verse',
          song: 'Salt',
          link: 'https://music.youtube.com/watch?v=dZxe2T7-3QQ&si=SbzBznfKp3AoD4Np',
        },
        question:
          "What's something people are usually surprised to learn about you?",
        answer:
          'People are usually surprised to learn that I started out studying Geophysics, not Computer Science. My path into tech came from curiosity — automating small tasks, breaking things, and learning to fix them again. That background taught me to think analytically and find patterns, which I now apply daily as a software engineer.',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/eazyisreal' },
          { type: 'twitter', url: 'https://x.com/eazyisreal_dev' },
          { type: 'instagram', url: 'https://www.instagram.com/theeazyisreal' },
        ],
      },
      {
        firstName: 'Daniel',
        lastName: 'Umoren',
        role: 'QA',
        image: 'https://i.ibb.co/FqjrHVvr/IMG-2267.jpg',
        music: {
          artist: 'Ahmed Spins ft. Idd Aziz',
          song: 'Sawa',
          link: 'https://music.youtube.com/watch?v=dzLu7elxnJI&si=WHLadbSstAt_028v',
        },
        question: "What's a quote you live by?",
        answer: 'You can just do things!',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/daniel-umoren',
          },
          { type: 'twitter', url: 'https://x.com/the_umoren_' },
          { type: 'instagram', url: 'https://www.instagram.com/the_umoren_' },
        ],
      },
      {
        firstName: 'Aliyyah',
        lastName: 'Kalejaye',
        role: 'Marketing',
        image: 'https://i.ibb.co/sdLJJJW8/Headshot2.jpg',
        music: {
          artist: 'Adekunle Gold',
          song: 'Many People',
          link: 'https://youtu.be/IjtDozgr7mo?si=G5bG50sWywdE155o',
        },
        question: "What's a quote you live by?",
        answer: '"My Enemy Na Sapa" - Rema',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/aliyyah-kalejaye',
          },
          { type: 'twitter', url: 'https://twitter.com/AliyyahKalejaye' },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/aliyyah_kalejaye',
          },
        ],
      },
      {
        firstName: 'Florence',
        lastName: 'Ogunbore',
        role: 'Product',
        image: 'https://i.ibb.co/3ypPbZ4R/DSC-5605.jpg',
        music: {
          artist: 'Tevin Campbell',
          song: 'Can We Talk',
          link: 'https://music.youtube.com/watch?v=jRS9JPt5sdU&si=BjcOOSxojVcFSeEB',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer: 'Working out tbh or just sleeping 🫠',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/florence-ogunbore',
          },
          { type: 'twitter', url: 'https://x.com/the_florencee' },
          { type: 'instagram', url: 'https://www.instagram.com/the_florencee' },
        ],
      },
      {
        firstName: 'Moyomade',
        lastName: 'Adegbite',
        role: 'Engineering',
        image: 'https://i.ibb.co/nqjSvPxR/IMG-1705-3.png',
        music: {
          artist: 'Dave',
          song: 'Heart Attack',
          link: 'https://music.youtube.com/watch?v=2uQM-n_y-Hs&si=NSvcDQPqMxI0tsfG',
        },
        question: "What's a quote you live by?",
        answer: 'If you can think it, you can do it.',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/moyomade-adegbite',
          },
          { type: 'twitter', url: 'https://x.com/moyomadee7' },
        ],
      },
      {
        firstName: 'Treasure',
        lastName: 'Ajefu',
        role: 'Content',
        image:
          'https://i.ibb.co/MDtXTW4m/2875fa98-896e-4e97-a4f5-3f0e016eabc2.jpg',
        music: {
          artist: 'Hugh Jackman & The Greatest Showman Ensemble',
          song: 'From Now On',
          link: 'https://music.youtube.com/watch?v=25MqD0hHo14&si=uYByL156sHl4YqWS',
        },
        question: "What's a quote you live by?",
        answer:
          '"whatever happens, happens". anything that is going to happen will happen, and if no amount of anxiety or unrest will change the outcome then i try not to worry about it.',
        socialMedia: [
          { type: 'linkedin', url: 'https://linkedin.com/in/treasure-ajefu' },
          { type: 'twitter', url: 'https://twitter.com/cybergenie_' },
          { type: 'instagram', url: 'https://www.instagram.com/cybergenie_' },
        ],
      },
      {
        firstName: 'Sebastine',
        lastName: 'Odeh',
        role: 'Engineering',
        image: 'https://i.ibb.co/Dh77MM3/Headshot.webp',
        music: {
          artist: 'Don Toliver ft. Doja Cat',
          song: 'Lose My Mind',
          link: 'https://music.youtube.com/watch?v=whbczRUgYQw&si=PhJEsIOtqPGvH8C8',
        },
        question:
          "What's something people are usually surprised to learn about you?",
        answer: 'Being the first of four children',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/sebastine-odeh-1081a318b',
          },
          { type: 'twitter', url: 'https://x.com/H3ndrick_' },
        ],
      },
      {
        firstName: 'Faisal',
        lastName: 'Adams Omokugbo',
        role: 'Content',
        image: 'https://i.ibb.co/LDFVys81/ME-0.jpg',
        music: {
          artist: 'Asa',
          song: 'Jailer',
          link: 'https://music.youtube.com/watch?v=7uk8X3_23xY&si=DduYfTY7GZrt3FVt',
        },
        question: "What's a quote you live by?",
        answer:
          "When I get anxious opening my laptop to code or start a new project, I read this quote aloud: The idea of an Imposter syndrome is great, it means you are doing something worthwile. Use it to motivate yourself. It's normal to fail, Fail several times till you get it. You will get it eventually and finally, You become what you believe.",
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/faisal-adams-omokugbo/',
          },
          { type: 'twitter', url: 'https://twitter.com/code_crushed' },
          { type: 'instagram', url: 'https://www.instagram.com/code_crushed' },
        ],
      },
      {
        firstName: 'Durosinlohun',
        lastName: 'Uthman Olalekan',
        role: 'Engineering',
        image: 'https://i.ibb.co/Txx0fdvB/20251024-181217.jpg',
        music: {
          artist: 'MOLIY, Silent Addy, Skillibeng & Shenseea',
          song: 'Shake It To The Max (FLY) [Remix]',
          link: 'https://music.youtube.com/watch?v=EVwh5pJj5KY&si=bXXfXxDn76IEcVXP',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer: 'When i need a mental reset i go out to play squash',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/uthmanduro' },
          { type: 'twitter', url: 'https://x.com/lekan_duro' },
        ],
      },
      {
        firstName: 'Efe',
        lastName: 'Akhigbe',
        role: 'Design',
        image: 'https://i.ibb.co/v67m83LY/Efe-s-Headshot.png',
        music: {
          artist: 'Hillsong Worship',
          song: 'Who You Say I Am (Live)',
          link: 'https://music.youtube.com/watch?v=0bAIVYkDTWM&si=cx8q5GM6L4sG5vyH',
        },
        question: "What's a quote you live by?",
        answer:
          'A quote I live by is "I can do all things through Christ who strengthens me." — Philippians 4:13. It constantly reminds me that with faith and determination, nothing is impossible.',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/efeakhigbe' },
          { type: 'twitter', url: 'https://twitter.com/efe_akhigbe' },
          { type: 'instagram', url: 'https://www.instagram.com/efe_akhigbe' },
        ],
      },
      {
        firstName: 'Emmanuel',
        lastName: 'Olubiyi',
        role: 'Engineering',
        image: 'https://i.ibb.co/1GwHk64k/emmanuel-photo-1.jpg',
        music: {
          artist: 'Jenn Johnson, CeCe Winans & Bethel Music',
          song: 'Holy Forever (Live)',
          link: 'https://music.youtube.com/watch?v=VhdAZ2aQtBk&si=cJuVkDlAL5tbYBuL',
        },
        question: "What's a quote you live by?",
        answer: 'Surviving is winning, keep going, it will make sense one day',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/emmanuel-olubiyi/',
          },
          { type: 'twitter', url: 'https://x.com/lord_emmo' },
          { type: 'instagram', url: 'https://www.instagram.com/lord_emmo_/' },
        ],
      },
      {
        firstName: 'Faith',
        lastName: 'Onasanya',
        role: 'Design',
        image: 'https://i.ibb.co/svYRRXsJ/IMG-3197.jpg',
        music: {
          artist: 'Dell Mac',
          song: 'Trend',
          link: 'https://music.youtube.com/watch?v=6F_0p1T2Lgc&si=XbKf_4PBVrzBAqOg',
        },
        question: "What's a quote you live by?",
        answer:
          '"Do the best you can until you know better. Then when you know better , do better "- Maya Angelou',
        socialMedia: [
          { type: 'linkedin', url: 'https://ng.linkedin.com/in/faithonasanya' },
          { type: 'twitter', url: 'https://twitter.com/FaithOnasanyaa' },
          { type: 'instagram', url: 'https://www.instagram.com/_i.am.faith' },
        ],
      },
      {
        firstName: 'Khadijah',
        lastName: 'Abdulkabir',
        role: 'Design',
        image:
          'https://storage.googleapis.com/devfestlagos2025/Ruby/Approved%20Speaker%20photos%20/Placeholder%20image.png',
        music: {
          artist: 'Maher Zain',
          song: 'Good Day',
          link: 'https://music.youtube.com/watch?v=-0BDGSeAn1w&si=j0qxsgKV1-oW7QZw',
        },
        question: "What's a quote you live by?",
        answer:
          'Wa ma tawfiqi illa billah translates to "And verily my success is only by Allah"',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/khadijah-abdulkabir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          },
          { type: 'twitter', url: 'https://twitter.com/TheUI_Niqabi' },
        ],
      },
      {
        firstName: 'Rebecca',
        lastName: 'Adegbesan',
        role: 'Design',
        image: 'https://i.ibb.co/wNg10QvK/IMG-7825.png',
        music: {
          artist: "David Archuleta & One Voice Children's Choir",
          song: 'Glorious',
          link: 'https://youtu.be/nomxXk6Q1rk?si=xuZgpmN2QmoQHMBk',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer: 'Shawama and Exotic',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/rebecca-adegbesan-99a8a7185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          },
          { type: 'twitter', url: 'https://twitter.com/Rhebhek' },
          { type: 'instagram', url: 'https://www.instagram.com/Beyccaa' },
        ],
      },
      {
        firstName: 'TemiTope',
        lastName: 'Aiyegbusi',
        role: 'Design',
        image: 'https://i.ibb.co/9mPRYpqm/FC-11.png',
        music: {
          artist: 'Sunmisola Agbebi',
          song: 'The Feast',
          link: 'https://www.youtube.com/watch?v=z_gtrZ63sIw&list=RDz_gtrZ63sIw&start_radio=1',
        },
        question: "What's a quote you live by?",
        answer: 'Do Hard things, that is where growth lies',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/ttaiyegbusi/' },
          { type: 'twitter', url: 'https://x.com/aiyegbusitope' },
        ],
      },
      {
        firstName: 'Motunrayo',
        lastName: 'Sanni',
        role: 'QA',
        image: 'https://i.ibb.co/v6RK53PP/Snapchat-1785487276.jpg',
        music: {
          artist: 'Adekunle Gold',
          song: 'Oba',
          link: 'https://music.youtube.com/watch?v=r0Nv_e9E-e0&si=EQfgf2X3PKNigDb-',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer: 'Sleeping / Reading a book (fiction)',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/motunrayo-sanni',
          },
          { type: 'twitter', url: 'https://twitter.com/dearmotun' },
          { type: 'instagram', url: 'https://www.instagram.com/dearmotun' },
        ],
      },
      {
        firstName: 'Ijeoma',
        lastName: 'Odiaka',
        role: 'Design',
        image: 'https://i.ibb.co/39tkDx09/IMG-0456.jpg',
        music: {
          artist: 'half·alive',
          song: 'creature',
          link: 'https://music.youtube.com/watch?v=nHNPT_QPQ_U&si=7__MUe69vY_No1c9',
        },
        question: 'Tell us about your DevFest Lagos 2025 experience',
        answer:
          'It was an interesting experience working with the Devfest team.',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/ijeoma-odiaka?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/aijay_26?igsh=MTlsb2YxdjM2MG9yNQ%3D%3D&utm_source=qr',
          },
        ],
      },
      {
        firstName: 'Malik',
        lastName: 'Temitope Usamot',
        role: 'Content',
        image: 'https://i.ibb.co/JFkFF57D/IMG-8525.jpg',
        music: {
          artist: 'Adekunle Gold',
          song: 'Many People',
          link: 'https://music.youtube.com/watch?v=JUyaw8zrsBg&si=hLllP_kB4Mkphb6Y',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer: 'Binge Watch a Movie Series or Go cycling',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/thebnusamot' },
          { type: 'twitter', url: 'https://x.com/journalwmalik' },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/journalwithmalik',
          },
        ],
      },
      {
        firstName: 'Tolulope',
        lastName: 'Johnson',
        role: 'Design',
        image: 'https://i.ibb.co/dJM0m8T6/Tolu-new-new.jpg',
        music: {
          artist: 'Mrs. D.A. Fasoyin',
          song: 'Odun Nlo Sopin',
          link: 'https://music.youtube.com/watch?v=LvL-zoIJJ3Q',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer: 'When I need a mental reset I take a very long walk',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/tolulopejohnson/',
          },
          { type: 'twitter', url: 'https://x.com/_techegbon' },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/dejolasgraphics/',
          },
        ],
      },
      {
        firstName: 'Timilehin',
        lastName: 'Omolana',
        role: 'Engineering',
        image:
          'https://i.ibb.co/1J2xBNdk/AP1-Gcz-MX8-Pg-Mnake-Via6-Deqr-Jc-ZYHS8-O1znk-BCVe1uen-2-Lk6-Kwc0a-Gq-Me-OVb-WHmqp-XN-ZMYq-WKT1f-W5s.jpg',
        music: {
          artist: 'Dunsin Oyekan',
          song: 'Spirit (Live)',
          link: 'https://music.youtube.com/watch?v=7IfYUm1j_cI&si=4edm4nsQi0UtHKMN',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer:
          "I've got an instant vibe-shifter built right into my desk. My piano lives in a drawer, powered up 24/7. The second I need a mental reset, I just pull it out and tickle the ivories 'til my brain's back online! :)",
        socialMedia: [
          { type: 'linkedin', url: 'https://linkedin.com/in/timmyomolana' },
        ],
      },
      {
        firstName: 'Favour',
        lastName: 'Attah',
        role: 'Content',
        image: 'https://i.ibb.co/v6MbstC7/IMG-0908-Original.jpg',
        music: {
          artist: 'Rema',
          song: 'FUN',
          link: 'https://music.youtube.com/watch?v=qOlQn8bFtbU&si=_Joxf8uRQCCIEMn0',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer: 'Sleeping 😂',
        socialMedia: [{ type: 'twitter', url: 'https://x.com/chide_attah' }],
      },
      {
        firstName: 'Gabriel',
        lastName: 'Shoyombo',
        role: 'Engineering',
        image:
          'https://i.ibb.co/yF0jDZgL/Whats-App-Image-2025-06-17-at-8-03-55-PM.jpg',
        music: {
          artist: 'Nathaniel Bassey',
          song: 'Yahweh Sabaoth',
          link: 'https://music.youtube.com/watch?v=AxZfngXkVq4&si=F8-EKcgBnPhIuvVU',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer: 'Movies or sleep',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/gabriel-shoyombo-0666511bb',
          },
          { type: 'twitter', url: 'https://twitter.com/theDocWhoCodes' },
          { type: 'instagram', url: 'https://www.instagram.com/realdrprime' },
        ],
      },
      {
        firstName: 'Samuel',
        lastName: 'Abada',
        role: 'Engineering',
        image: 'https://i.ibb.co/zWTYDhyv/IMG-7779-Original-gde-badge.png',
        music: {
          artist: 'Rema',
          song: 'FUN',
          link: 'https://music.youtube.com/watch?v=YE6jg1_RSec&si=Ev_CsC947rUCKwoF',
        },
        question: "What's a quote you live by?",
        answer:
          'if you gaze long into an abyss, the abyss also gazes into you. Be careful not to blink',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/abada-samuel/',
          },
          { type: 'twitter', url: 'https://twitter.com/mastersam_' },
          { type: 'instagram', url: 'https://www.instagram.com/codefarmer_' },
        ],
      },
      {
        firstName: 'Okunoye',
        lastName: 'David',
        role: 'Engineering',
        image: 'https://i.ibb.co/RGGN4V7k/drex.jpg',
        music: {
          artist: 'Jason Walker',
          song: 'Echo',
          link: 'https://music.youtube.com/watch?v=1rMFPDMiMVg&list=PLzgUv3CnsSzU4-SanCOzdY4xjUubVd-uv',
        },
        question:
          "What's something people are usually surprised to learn about you?",
        answer: "I'm an instrumentalist",
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/david-okunoye-777b691a8/',
          },
          { type: 'twitter', url: 'https://twitter.com/drexjs' },
        ],
      },
      {
        firstName: 'Oyeyemi',
        lastName: 'Ifeoluwa',
        role: 'Engineering',
        image: 'https://i.ibb.co/Dg5KxX8z/ife.jpg',
        music: {
          artist: 'Ludovico Einaudi, Daniel Hope & I Virtuosi Italiani',
          song: 'Experience',
          link: 'https://music.youtube.com/watch?v=2MHsDNV9lgY',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer:
          'When I need a mental reset, I get a bottle of wine, cake and a book.',
        socialMedia: [
          { type: 'twitter', url: 'https://twitter.com/yourfavoriteife' },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/ifeoluwa.oyeyemi',
          },
        ],
      },
      {
        firstName: 'Oye',
        lastName: 'Sobowale',
        role: 'Design',
        image: 'https://i.ibb.co/pBCNt2x1/20251031-231651-2-1.jpg',
        music: {
          artist: 'Men I Trust',
          song: 'Serenade of Water',
          link: 'https://music.youtube.com/watch?v=zLdT_0YfPLk&si=MZnJgzC23lFsqaVV',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer: 'Reading',
        socialMedia: [{ type: 'twitter', url: 'https://x.com/oyeuniverse' }],
      },
      {
        firstName: 'Chukwuemeka',
        lastName: 'Chukwurah',
        role: 'Organizing',
        image: 'https://i.ibb.co/SDQdQxzt/IMG-0760.jpg',
        music: {
          artist: 'Savy Henry',
          song: 'LOML',
          link: 'https://music.youtube.com/watch?v=J2ZxdqNYROY&si=-lBY-ol55nVVNcKH',
        },
        question:
          "What's something people are usually surprised to learn about you?",
        answer: 'I don’t like milk, and I’m not allergic to it',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://linkedin.com/in/chukwuemekachukwurah',
          },
          { type: 'twitter', url: 'https://twitter.com/chukwurah__' },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/I.am.chukwuemeka',
          },
        ],
      },
      {
        firstName: 'Williams',
        lastName: 'Eni',
        role: 'Design',
        image: 'https://i.ibb.co/gFgP9hTH/william-img.png',
        music: {
          artist: 'DJ Lag, Sir Trill & Sykes',
          song: 'Woza',
          link: 'https://music.youtube.com/watch?v=1sl7-yLNm_E&si=VcwvwCiUM684G75X',
        },
        question: "What's a quote you live by?",
        answer: '"There are cathedrals everywhere for those with eyes to see"',
        socialMedia: [
          { type: 'linkedin', url: 'https://linkedin.com/in/williamseni' },
          { type: 'twitter', url: 'https://twitter.com/itxbo' },
          { type: 'instagram', url: 'https://instagram.com/itxbo__' },
        ],
      },
      {
        firstName: 'Happiness',
        lastName: 'Omale',
        role: 'Content',
        image: 'https://i.ibb.co/YTjFdfTK/IMG-20240130-WA0063.jpg',
        music: {
          artist: 'Dunsin Oyekan & David Dam',
          song: 'Nagode',
          link: 'https://youtu.be/LJA_g-_xlCs?si=ZwSC5SUdo7nk_5tK',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer:
          'A comfort activity I do when I need a mental reset is to sleep first, then watch a movie, talk to a mentor or anyone close, basically just talking about everything and hopefully getting a solution after talking.',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/happiness-omale?utm_source=share_via&utm_content=profile&utm_medium=member_android',
          },
          {
            type: 'twitter',
            url: 'https://x.com/Coding_Happinex?t=GXvWtU0oQbe5vrVW1WZ63g&s=09',
          },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/omale_happiness_ojone?igsh=MXRtd3ZtbzhqejhwaQ==',
          },
        ],
      },
      {
        firstName: 'Temitope',
        lastName: 'Asama',
        role: 'Engineering',
        image: 'https://i.ibb.co/tpm6XzjF/IMG-1198.webp',
        music: {
          artist: 'RAYE',
          song: 'Worth It',
          link: 'https://music.youtube.com/watch?v=Y4_l-9Uxvhg&si=mmm59TdpFnQ4FU8Y',
        },
        question: 'Tell us about your DevFest Lagos 2025 experience',
        answer:
          'It has become a ritual now—gathering annually for the holy activity of building something crazy within a crazy timeline with crazy people who build crazy stuff. It’s magic and the people make it what it is. I love them all. I love it all.',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/temitopeasama',
          },
        ],
      },
      {
        firstName: 'Isaac',
        lastName: 'Bello',
        role: 'Engineering',
        image: 'https://i.ibb.co/CKX82bs1/IMG-3060.jpg',
        music: {
          artist: 'ROSALÍA',
          song: 'Divinize',
          link: 'https://music.youtube.com/watch?v=OxDmGz60hws&si=e6ykkn4AthtT2E81',
        },
        question: "What's a quote you live by?",
        answer: 'What man is a man who does not make the world better?',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/isaac-bello/' },
          { type: 'twitter', url: 'https://x.com/iscaa_82' },
          { type: 'instagram', url: 'https://www.instagram.com/isaac._be' },
        ],
      },
      {
        firstName: 'Oluwanifemi',
        lastName: 'Adeyemi',
        role: 'Engineering',
        image: 'https://i.ibb.co/xqb9TktP/IMG-8319.jpg',
        music: {
          artist: 'Daniel Caesar ft. Bon Iver',
          song: 'Sins Of The Father',
          link: 'https://music.youtube.com/watch?v=ZVeQQHEkcAk&si=A2qfEd3dWsbhFAb5',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer:
          'Hanging out with my girlfriend, cooking and watching a running show ',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/oluwanifemi-adeyemi-600758174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          },
          { type: 'twitter', url: 'https://x.com/n1femi' },
          { type: 'instagram', url: 'https://www.instagram.com/nifemi.style' },
        ],
      },
      {
        firstName: 'Oluwatobiju',
        lastName: 'Judah',
        role: 'Engineering',
        image:
          'https://i.ibb.co/9m569vWJ/PXL-20250603-125954356-LS-exported-572-1762722779350-2.webp',
        music: {
          artist: 'Searows',
          song: 'End Of The World',
          link: 'https://music.youtube.com/watch?v=RWHc_Pwb-5M&si=SRUrHKjcKrPC90Xp',
        },
        question: 'What’s your comfort activity when you need a mental reset?',
        answer:
          'Beach House music. Destroying my body at the gym. Cleaning, arranging & organising.',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/oluwatobiju-judah-omotosho/',
          },
          { type: 'twitter', url: 'https://x.com/tobijudah' },
          { type: 'instagram', url: 'https://www.instagram.com/tobijudah' },
        ],
      },
      {
        firstName: 'Maryann',
        lastName: 'Onuoha',
        role: 'Organizing',
        image: 'https://i.ibb.co/bj8N8sPx/IMG-9272.jpg',
        music: {
          artist: 'Taylor Swift ft. Sabrina Carpenter',
          song: 'The Life of a Showgirl',
          link: 'https://music.youtube.com/watch?v=WXAoY9PpFEo&si=LUKiZkLWD1YLdoEf',
        },
        question: "What's a quote you live by?",
        answer: 'Life is a spoon, and I’m a fork.',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/maryann-onuoha-555210198',
          },
          { type: 'twitter', url: 'https://x.com/OhHiMaryann' },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/maryanneonuoha/',
          },
        ],
      },
      {
        firstName: 'Oluwaseyi',
        lastName: 'Francis Ayodele',
        role: 'Organizing',
        image: 'https://i.ibb.co/tTGVJj2w/Seyi-Profile-Photo.webp',
        music: {
          artist: 'Adekunle Gold',
          song: 'Many People',
          link: 'https://music.youtube.com/watch?v=JUyaw8zrsBg',
        },
        question: "What's your comfort activity when you need a mental reset?",
        answer: 'Swimming & Sleep',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/oluwaseyiayodele/',
          },
          { type: 'twitter', url: 'https://x.com/fransunisoft' },
          { type: 'instagram', url: 'https://www.instagram.com/fransunisoft' },
        ],
      },
      {
        firstName: 'Oluwaseyi',
        lastName: 'Ajadi',
        role: 'Organizing',
        image: 'https://i.ibb.co/9345VR5B/lascotstudios-292.jpg',
        music: {
          artist: 'Hillsong Young & Free, Aodhán King',
          song: 'Highs & Lows',
          link: 'https://music.youtube.com/watch?v=71AwhGQMb1Q&si=eCisLIS5B504avU3',
        },
        question: "What's a quote you live by?",
        answer:
          'What will be, will ( Que sera sera ). Wherever you are now, Is where you are meant to be. Trust God.',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/seyiQSE' },
          { type: 'twitter', url: 'https://x.com/OluwaseyiAjadi4' },
          { type: 'instagram', url: 'https://www.instagram.com/script_pz' },
        ],
      },
      {
        firstName: 'Mileke',
        lastName: 'Kolawole',
        role: 'Organizing',
        image:
          'https://lh3.googleusercontent.com/pw/AP1GczMa1qufXNgMohGjgiB_DIQ35VrT_K4bHELTn8de5dyIlEE3C84KErr74mGr3nHxW5ygJVfFRQLymy5FQ5P9RQ0TOF4QEUNW4lLdfiDO22YIafnchP2DM-ojpwmIWdvHcNXd3_YrjiL62kaskX7fLigpHA=w1478-h1914-s-no-gm?authuser=0',
        music: {
          artist: 'J4v1nny',
          song: 'War In Ba Sing Se',
          link: 'https://music.youtube.com/watch?v=GfKmLnQhqBU&si=Y62rO66Z_BzWWw0e',
        },
        question: "What's a quote you live by?",
        answer: "'Ise kekere, owo n'la'",
        socialMedia: [
          { type: 'linkedin', url: 'https://linkedin.com/in/mileke-kolawole' },
          { type: 'twitter', url: 'https://x.com/milekekolawole' },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/milekekolawole',
          },
        ],
      },
      {
        firstName: 'Precious',
        lastName: 'Omonzejele',
        role: 'Organizing',
        image: 'https://i.ibb.co/cXCCBFnK/IMG-6006.jpg',
        music: {
          artist: 'NW Auto',
          song: 'F82 BMW M4 Stock Exhaust Sound',
          link: 'https://youtu.be/-zcRt1ZmcJ4?si=UbccrzbXo5GNmggr',
        },
        question: "What's a quote you live by?",
        answer:
          'You can just do things. You may suffer oo, but yeah, you can just do things. 🫵🏼',
        socialMedia: [
          { type: 'linkedin', url: 'https://linkedin.com/in/preciousomonze' },
          { type: 'twitter', url: 'https://x.com/Preciousomonze' },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/Preciousomonze',
          },
        ],
      },
      {
        firstName: 'Olushola',
        lastName: 'Oladeji',
        role: 'Organizing',
        image:
          'https://i.ibb.co/ksM1v9sy/Whats-App-Image-2025-07-15-at-2-48-21-PM.jpg',
        music: {
          artist: 'Eugy Official',
          song: 'Winners Side',
          link: 'https://music.youtube.com/watch?v=68ov_OfIK4g&si=hCl0D_owSZLsYJ1x',
        },
        question: "What's a quote you live by?",
        answer:
          'The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man - George Bernard Shaw',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/sholadeji/' },
          { type: 'twitter', url: 'https://x.com/sholadeji' },
          { type: 'instagram', url: 'https://www.instagram.com/shola_deji' },
        ],
      },
      {
        firstName: 'Funke',
        lastName: 'Olasupo',
        role: 'Organizing',
        image: 'https://i.ibb.co/27gPLJw3/IMG-6620.jpg',
        music: {
          artist: 'Paul Cleverlee & Gerald Bishung',
          song: 'Anchor of My Strength',
          link: 'https://music.youtube.com/watch?v=ROwigWQvXOs',
        },
        question: "What's a quote you live by?",
        answer: 'A quote I live by is : “ There is nothing small about Funke”.',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/olasupofunke' },
          { type: 'twitter', url: 'https://twitter.com/OlasupoFunke' },
          { type: 'instagram', url: 'https://instagram.com/roxie_dev' },
        ],
      },
      {
        firstName: 'Gbolahan',
        lastName: 'Alli',
        role: 'Organizing',
        image: 'https://i.ibb.co/67ZS3D7V/Room-2-Day-10729.jpg',
        question: "What's a quote you live by?",
        answer: 'You can do great things from small spaces.',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/gbolarhan/' },
          { type: 'twitter', url: 'http://twitter.com/alligbolahan' },
          { type: 'instagram', url: 'http://instagram.com/gbolarhan' },
        ],
      },
      {
        firstName: 'Davis',
        lastName: 'Omokaro',
        role: 'Organizing',
        image: 'https://i.ibb.co/TDwRkTpZ/1664964294995.jpg',
        music: {
          artist: 'NF',
          song: 'The Search',
          link: 'https://www.youtube.com/watch?v=fnlJw9H0xAM',
        },
        question: "What's a quote you live by?",
        answer:
          'Life is a movie, pick your own role, climb your own ladder or you dig your own hole',
        socialMedia: [
          { type: 'linkedin', url: '' },
          { type: 'twitter', url: 'https://twitter.com/Dave_scr1pt' },
          { type: 'instagram', url: '' },
        ],
      },
      {
        firstName: 'Femi',
        lastName: 'Taiwo',
        role: 'Organizing',
        image: 'https://i.ibb.co/Z1MXfkrh/me-sqr-1.jpg',
        music: {
          artist: 'Sunmisola Agbebi',
          song: 'Aileyipada',
          link: 'https://music.youtube.com/watch?v=fw1gvQHu1QQ&si=7K3LAxosF-VaQRzR',
        },
        question: 'What’s your comfort activity when you need a mental reset?',
        answer: 'Lots of Sleep',
        socialMedia: [
          { type: 'linkedin', url: 'https://www.linkedin.com/in/femi-taiwo' },
          { type: 'twitter', url: 'https://twitter.com/dftaiwo' },
          { type: 'instagram', url: 'https://instagram.com/dftaiwo' },
        ],
      },
      {
        firstName: 'Funmilayo',
        lastName: 'Kanmodi',
        role: 'Organizing',
        image: 'https://i.ibb.co/ccvkXL87/instbook.jpg',
        music: {
          artist: 'Tml Vibez',
          song: 'Alhamdulillah',
          link: 'https://music.youtube.com/watch?v=0vjJ5ZtgNUU&si=Y0i5qK3Q2ONDfipF',
        },
        question: 'What’s your comfort activity when you need a mental reset?',
        answer: 'I play games ',
        socialMedia: [
          { type: 'linkedin', url: '' },
          { type: 'twitter', url: 'https://twitter.com/FFooomey' },
          { type: 'instagram', url: 'https://instagram.com/fooomey' },
        ],
      },
      {
        firstName: 'Olamide',
        lastName: 'Kehinde',
        role: 'Organizing',
        image:
          'https://storage.googleapis.com/devfestlagos2025/Ruby/Approved%20Speaker%20photos%20/Placeholder%20image.png',
        question: "What's a quote you live by?",
        answer: "If ever you're in doubt, always do the KIND thing.",
      },
      {
        firstName: 'Biyi-Ayetoso',
        lastName: 'Tomisin',
        role: 'Content',
        image: 'https://i.ibb.co/F4RmfJY8/Headshot.jpg',
        music: {
          artist: 'EmmaOMG',
          song: 'E Ti Tobi to Jesu',
          link: 'https://music.youtube.com/watch?v=kKPO4R29G5M&si=19FnLN0Q7KuUTFxo',
        },
        question: "What's a quote you live by?",
        answer:
          'I’m building a life that reflects my ambition, not my fears and every day, I choose to create, grow, and show up louder than yesterday.',
        socialMedia: [
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/oluwatomisin-biyi-ayetoso-b83980372',
          },
          { type: 'twitter', url: 'https://x.com/_tomisin_01' },
          { type: 'instagram', url: 'https://www.instagram.com/_tomi.sin_' },
        ],
      },
      {
        firstName: 'Sodiq',
        lastName: 'Akinjobi',
        role: 'Product',
        image: 'https://i.ibb.co/39x3q7WF/DSC-7589.jpg',
        music: {
          artist: 'Pelumi Deborah',
          song: 'Gbogbonise',
          link: 'https://music.youtube.com/watch?v=yxsYNF498F0',
        },
        question: "What's a quote you live by?",
        answer: 'You can just do things.',
        socialMedia: [
          { type: 'linkedin', url: 'https://linkedin.com/in/geektutor' },
          { type: 'twitter', url: 'https://x.com/geektutor' },
          { type: 'instagram', url: 'https://www.instagram.com/geektutor' },
        ],
      },
    ];
    var n = e.i(35960),
      l = e.i(48004),
      r = e.i(7635),
      m = e.i(11477),
      u = e.i(33933),
      c = e.i(45800),
      d = e.i(69308);
    let h = (e) => {
      let { members: i } = e,
        o = 950 >= (0, c.useWindowWidth)(),
        [h, p] = (0, s.useState)(0),
        [g, w] = (0, r.default)(
          {
            axis: 'y',
            loop: !0,
            align: (e) => (o ? 0.225 * e : 0.375 * e),
            duration: 25,
            watchDrag: !o,
          },
          [(0, l.default)({ delay: 5e3, stopOnInteraction: !1 })]
        ),
        y = (0, s.useCallback)(() => {
          w && p(w.selectedScrollSnap());
        }, [w]);
      return (
        (0, s.useEffect)(() => {
          if (w)
            return (
              y(),
              w.on('select', y),
              w.on('reInit', y),
              () => {
                (w.off('select', y), w.off('reInit', y));
              }
            );
        }, [w, y]),
        (0, s.useEffect)(() => {
          w &&
            w.reInit({
              axis: 'y',
              loop: !0,
              align: (e) => (o ? 0.225 * e : 0.375 * e),
              duration: 25,
              watchDrag: !o,
            });
        }, [o, w]),
        (0, t.jsx)('div', {
          className: d.default.emblaViewport,
          ref: g,
          children: (0, t.jsx)('ul', {
            className: d.default.emblaContainer,
            children: i.map((e, i) => {
              var s;
              let o = i === h;
              return (0, t.jsx)(
                m.motion.li,
                {
                  className: d.default.emblaSlide,
                  initial: { opacity: 0.1 },
                  animate: { opacity: o ? 1 : 0.1 },
                  transition: { duration: 0.8, ease: o ? 'easeIn' : 'easeOut' },
                  children: (0, t.jsxs)('div', {
                    className: d.default.largeItem,
                    children: [
                      (0, t.jsxs)('div', {
                        className: d.default.info,
                        children: [
                          (0, t.jsx)('p', {
                            className: n.default.firstName,
                            children: e.firstName,
                          }),
                          (0, t.jsx)('p', {
                            className: n.default.lastName,
                            children: e.lastName,
                          }),
                          (0, t.jsxs)('p', {
                            className: n.default.role,
                            children: ['did ', e.role],
                          }),
                          e.socialMedia &&
                            (0, t.jsx)('div', {
                              className: n.default.social,
                              children: e.socialMedia.map((e) =>
                                (0, t.jsx)(
                                  'a',
                                  {
                                    target: '_blank',
                                    href: e.url,
                                    rel: 'noopener noreferrer',
                                    className: n.default.socialLink,
                                    children: (0, t.jsx)(u.SocialIcon, {
                                      name: e.type.toLowerCase(),
                                      size: 50,
                                    }),
                                  },
                                  e.type
                                )
                              ),
                            }),
                        ],
                      }),
                      (0, t.jsx)(a.default, {
                        width: 320,
                        height: 427,
                        src: e.image,
                        alt: e.firstName,
                        className: ''
                          .concat(d.default.image, ' ')
                          .concat(o ? d.default.active : ''),
                      }),
                      (0, t.jsxs)('div', {
                        className: d.default.other,
                        children: [
                          (0, t.jsx)('p', {
                            className: n.default.question,
                            children: e.question,
                          }),
                          (0, t.jsxs)('p', {
                            className: n.default.answer,
                            children: ["'", e.answer, "'"],
                          }),
                          (null == (s = e.music) ? void 0 : s.link) &&
                            (0, t.jsxs)('a', {
                              href: e.music.link,
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              className: n.default.music,
                              children: [
                                (0, t.jsx)(a.default, {
                                  width: 20,
                                  height: 20,
                                  src: '/yt-music.svg',
                                  alt: 'YouTube Music',
                                  className: n.default.youtubeMusic,
                                }),
                                (0, t.jsx)('p', {
                                  className: n.default.listeningTo,
                                  children: 'Listening to ',
                                }),
                                (0, t.jsxs)('p', {
                                  className: n.default.song,
                                  children: [
                                    e.music.song,
                                    ' - ',
                                    e.music.artist,
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                },
                ''.concat(e.firstName, '-').concat(e.lastName, '-').concat(i)
              );
            }),
          }),
        })
      );
    };
    var p = e.i(14620);
    let g = (e) => {
        let { members: s } = e;
        return (0, t.jsx)('ul', {
          className: p.default.list,
          children: s.map((e, s) => {
            var o;
            return (0, t.jsxs)(
              'li',
              {
                className: p.default.item,
                children: [
                  (0, t.jsxs)('div', {
                    className: p.default.info,
                    children: [
                      (0, t.jsx)(a.default, {
                        width: 100,
                        height: 133,
                        src: e.image,
                        alt: e.firstName,
                        className: p.default.image,
                      }),
                      (0, t.jsxs)('div', {
                        className: p.default.inner,
                        children: [
                          (0, t.jsx)('p', {
                            className: (0, i.default)(
                              n.default.firstName,
                              p.default.firstName
                            ),
                            children: e.firstName,
                          }),
                          (0, t.jsx)('p', {
                            className: n.default.lastName,
                            children: e.lastName,
                          }),
                          (0, t.jsxs)('p', {
                            className: n.default.role,
                            children: ['did ', e.role],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    className: p.default.content,
                    children: [
                      (0, t.jsx)('p', {
                        className: n.default.question,
                        children: e.question,
                      }),
                      (0, t.jsxs)('p', {
                        className: n.default.answer,
                        children: ["'", e.answer, "'"],
                      }),
                      (null == (o = e.music) ? void 0 : o.link) &&
                        (0, t.jsxs)('a', {
                          href: e.music.link,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className: n.default.music,
                          children: [
                            (0, t.jsx)(a.default, {
                              width: 16,
                              height: 16,
                              src: '/yt-music.svg',
                              alt: 'YouTube Music',
                              className: n.default.youtubeMusic,
                            }),
                            (0, t.jsx)('p', {
                              className: n.default.listeningTo,
                              children: 'Listening to',
                            }),
                            (0, t.jsxs)('p', {
                              className: n.default.song,
                              children: [e.music.song, ' - ', e.music.artist],
                            }),
                          ],
                        }),
                    ],
                  }),
                  e.socialMedia &&
                    (0, t.jsx)('div', {
                      className: (0, i.default)(
                        n.default.social,
                        p.default.social
                      ),
                      children: e.socialMedia.map((e) =>
                        (0, t.jsx)(
                          'a',
                          {
                            target: '_blank',
                            href: e.url,
                            rel: 'noopener noreferrer',
                            className: n.default.socialLink,
                            children: (0, t.jsx)(u.SocialIcon, {
                              name: e.type.toLowerCase(),
                              size: 50,
                            }),
                          },
                          e.type
                        )
                      ),
                    }),
                ],
              },
              ''.concat(e.firstName, '-').concat(e.lastName, '-').concat(s)
            );
          }),
        });
      },
      w = [
        'All',
        'Organizing',
        'Design',
        'Engineering',
        'Product',
        'Marketing',
        'QA',
        'Content',
      ],
      y = () => {
        let [e, l] = (0, s.useState)('carousel'),
          [r, m] = (0, s.useState)('All'),
          [u, c] = (0, s.useState)(!1),
          d = (0, s.useMemo)(
            () =>
              'All' === r
                ? o
                : o.filter((e) => e.role.toLowerCase() === r.toLowerCase()),
            [r]
          ),
          [p, y] = (0, s.useState)(d);
        return (
          (0, s.useEffect)(() => {
            y(
              ((e) => {
                let t = [...e];
                for (let e = t.length - 1; e > 0; e--) {
                  let i = Math.floor(Math.random() * (e + 1));
                  [t[e], t[i]] = [t[i], t[e]];
                }
                return t;
              })(d)
            );
          }, [d]),
          (0, t.jsxs)('section', {
            id: 'team-members',
            className: n.default.members,
            children: [
              (0, t.jsxs)('div', {
                className: n.default.content,
                children: [
                  (0, t.jsxs)('h2', {
                    className: n.default.title,
                    children: [
                      'The ',
                      (0, t.jsx)('br', { className: n.default.break }),
                      ' Team',
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    className: n.default.inner,
                    children: [
                      (0, t.jsx)('button', {
                        onClick: () => c(!0),
                        className: n.default.dropdown,
                        children: r,
                      }),
                      (0, t.jsxs)('div', {
                        className: n.default.toggle,
                        children: [
                          (0, t.jsx)('button', {
                            'aria-label': 'Carousel view',
                            onClick: () => l('carousel'),
                            className: (0, i.default)(
                              n.default.button,
                              'carousel' === e && n.default.active
                            ),
                            children: (0, t.jsx)(a.default, {
                              alt: '',
                              width: 16,
                              height: 16,
                              src: '/carousel.svg',
                              className: n.default.icon,
                            }),
                          }),
                          (0, t.jsx)('button', {
                            'aria-label': 'List view',
                            onClick: () => l('list'),
                            className: (0, i.default)(
                              n.default.button,
                              'list' === e && n.default.active
                            ),
                            children: (0, t.jsx)(a.default, {
                              alt: '',
                              width: 16,
                              height: 11,
                              src: '/list.svg',
                              className: n.default.icon,
                            }),
                          }),
                          (0, t.jsx)('span', {
                            className: n.default.label,
                            children: 'Layout',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              'list' === e &&
                (0, t.jsx)('div', {
                  className: n.default.filters,
                  children: (0, t.jsx)('div', {
                    className: n.default.pills,
                    children: w.map((e) =>
                      (0, t.jsx)(
                        'button',
                        {
                          className: ''
                            .concat(n.default.pill, ' ')
                            .concat(r === e ? n.default.active : ''),
                          onClick: () => m(e),
                          children: e,
                        },
                        e
                      )
                    ),
                  }),
                }),
              'carousel' === e
                ? (0, t.jsx)(h, { members: p })
                : (0, t.jsx)(g, { members: p }),
              (0, t.jsx)(a.default, {
                src: '/stickers/al:ml-prompt-like-a-pro.svg',
                alt: 'AI/ML Prompt Like a Pro',
                width: 171,
                height: 159,
                className: n.default.sticker1,
              }),
              (0, t.jsx)(a.default, {
                src: '/stickers/built-for-the-web.svg',
                alt: 'Built for the Web',
                width: 104,
                height: 172,
                className: n.default.sticker2,
              }),
              u &&
                (0, t.jsx)('div', {
                  className: n.default.overlay,
                  onClick: () => c(!1),
                  children: (0, t.jsxs)('div', {
                    className: n.default.modal,
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      (0, t.jsx)('button', {
                        className: n.default.close,
                        onClick: () => c(!1),
                        children: 'CLOSE',
                      }),
                      w.map((e) =>
                        (0, t.jsx)(
                          'button',
                          {
                            className: (0, i.default)(
                              n.default.option,
                              r === e && n.default.active
                            ),
                            onClick: () => {
                              (m(e), c(!1));
                            },
                            children: e,
                          },
                          e
                        )
                      ),
                    ],
                  }),
                }),
            ],
          })
        );
      };
  },
]);
