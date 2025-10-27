(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [345],
  {
    389: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => n });
      let n = {
        src: '/_next/static/media/Axolotl-Boring.a0290d56.svg',
        height: 507,
        width: 503,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    3347: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 5896));
    },
    5030: (e, t, r) => {
      'use strict';
      r.d(t, { L: () => l });
      var n = r(7362),
        a = r(6490);
      let s = 'undefined' != typeof document ? n.useLayoutEffect : n.useEffect,
        i = (e) => e && !Array.isArray(e) && 'object' == typeof e,
        o = [],
        c = {},
        d = a.Ay,
        l = (e, t = o) => {
          let r = c;
          (i(e)
            ? ((r = e),
              (e = null),
              (t = 'dependencies' in r ? r.dependencies : o))
            : i(t) && (t = 'dependencies' in (r = t) ? r.dependencies : o),
            e &&
              'function' != typeof e &&
              console.warn(
                'First parameter must be a function or config object'
              ));
          let { scope: a, revertOnUpdate: l } = r,
            u = (0, n.useRef)(!1),
            h = (0, n.useRef)(d.context(() => {}, a)),
            p = (0, n.useRef)((e) => h.current.add(null, e)),
            m = t && t.length && !l;
          return (
            m && s(() => ((u.current = !0), () => h.current.revert()), o),
            s(() => {
              if ((e && h.current.add(e, a), !m || !u.current))
                return () => h.current.revert();
            }, t),
            { context: h.current, contextSafe: p.current }
          );
        };
      ((l.register = (e) => {
        d = e;
      }),
        (l.headless = !0));
    },
    5896: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { default: () => o }));
      var n = r(122),
        a = r(2811),
        s = r(6686),
        i = r(389);
      function o() {
        return (0, n.jsx)('div', {
          className: 'bg-secondary-500',
          children: (0, n.jsxs)('div', {
            className:
              'h-full w-screen bg-[url(/img/Background-Main.jpg)] bg-cover bg-no-repeat py-5 lg:py-10',
            children: [
              (0, n.jsx)(s.A, {}),
              (0, n.jsx)('div', {
                className:
                  'relative mx-4 mt-[150px] md:mt-[180px] lg:mx-28 lg:mt-[200px]',
                children: (0, n.jsx)(a.default, {
                  src: i.A,
                  alt: 'not found',
                  style: { margin: 'auto' },
                }),
              }),
            ],
          }),
        });
      }
    },
    6686: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => o });
      var n = r(122),
        a = r(5030),
        s = r(6490),
        i = r(7362);
      s.os.registerPlugin(a.L);
      let o = () => {
        let e = (0, i.useRef)(null);
        return (
          (0, a.L)(
            () => {
              let e = s.os.utils.toArray('.pixel'),
                t = (e) => {
                  s.os.to(e, {
                    duration: 2 + 5 * Math.random(),
                    x: () =>
                      Math.random() * window.innerWidth - window.innerWidth / 2,
                    y: () =>
                      Math.random() * window.innerHeight -
                      window.innerHeight / 2,
                    ease: 'power1.inOut',
                    onComplete: () => t(e),
                  });
                };
              e.forEach((e) => t(e));
            },
            { scope: e }
          ),
          (0, n.jsx)('div', {
            ref: e,
            className:
              'md:h-[50px]lg:h-[100px] absolute inset-0 m-auto h-[5px] w-[10px] lg:w-[100px]',
            children: [...Array(30)].map((e, t) => {
              let r = 10 + 30 * Math.random(),
                a = 0.1 + 0.7 * Math.random();
              return (0, n.jsx)(
                'div',
                {
                  className: 'pixel absolute',
                  style: {
                    width: ''.concat(r, 'px'),
                    height: ''.concat(r, 'px'),
                    top: ''.concat(100 * Math.random(), '%'),
                    left: ''.concat(100 * Math.random(), '%'),
                    backgroundColor: 'rgba(197, 102, 177, '.concat(a, ')'),
                  },
                },
                t
              );
            }),
          })
        );
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [340, 544, 668, 119, 245, 358], () => t(3347)), (_N_E = e.O()));
  },
]);
