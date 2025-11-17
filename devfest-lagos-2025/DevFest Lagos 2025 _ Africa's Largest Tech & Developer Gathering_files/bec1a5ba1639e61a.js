(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  45800,
  (e) => {
    'use strict';
    e.s(['useWindowWidth', () => t]);
    var a = e.i(22446);
    function t() {
      let [e, t] = (0, a.useState)(0),
        l = (0, a.useMemo)(() => {
          var e;
          let a;
          return (
            (e = () => {
              t(window.innerWidth);
            }),
            function () {
              for (var t = arguments.length, l = Array(t), s = 0; s < t; s++)
                l[s] = arguments[s];
              (window.clearTimeout(a),
                (a = window.setTimeout(() => {
                  e(...l);
                }, 250)));
            }
          );
        }, []);
      return (
        (0, a.useEffect)(
          () => (
            window.addEventListener('resize', l),
            l(),
            () => window.removeEventListener('resize', l)
          ),
          [l]
        ),
        e
      );
    }
  },
  1248,
  (e) => {
    e.v({
      active: 'page-module-scss-module__LIj89q__active',
      speaker: 'page-module-scss-module__LIj89q__speaker',
      speakersGrid: 'page-module-scss-module__LIj89q__speakersGrid',
      speakersPage: 'page-module-scss-module__LIj89q__speakersPage',
      tag: 'page-module-scss-module__LIj89q__tag',
      tags: 'page-module-scss-module__LIj89q__tags',
      title: 'page-module-scss-module__LIj89q__title',
    });
  },
  29328,
  (e) => {
    'use strict';
    e.s(['SpeakersClient', () => r]);
    var a = e.i(30718),
      t = e.i(76422),
      l = e.i(22446),
      s = e.i(93862),
      i = e.i(1248);
    let d = [
      { day: 'TUE', label: 'TUE 18', dayNumber: 1 },
      { day: 'WED', label: 'WED 19', dayNumber: 2 },
      { day: 'THU', label: 'THU 20', dayNumber: 3 },
      { day: 'FRI', label: 'FRI 21', dayNumber: 4 },
      { day: 'SAT', label: 'SAT 22', dayNumber: 5 },
    ];
    function r(e) {
      let { speakers: r } = e,
        [u, n] = (0, l.useState)('All'),
        o =
          'All' === u
            ? r
            : r.filter((e) => {
                let a = d.find((e) => e.day === u);
                return a && e.days.includes(a.dayNumber);
              });
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsxs)('div', {
            className: i.default.tags,
            children: [
              (0, a.jsx)('button', {
                className: (0, t.default)(i.default.tag, {
                  [i.default.active]: 'All' === u,
                }),
                onClick: () => n('All'),
                type: 'button',
                children: 'All',
              }),
              d.map((e) =>
                (0, a.jsx)(
                  'button',
                  {
                    className: (0, t.default)(i.default.tag, {
                      [i.default.active]: e.day === u,
                    }),
                    onClick: () => n(e.day),
                    type: 'button',
                    children: e.label,
                  },
                  e.day
                )
              ),
            ],
          }),
          (0, a.jsx)('div', {
            className: i.default.speakersGrid,
            children: o.map((e, t) =>
              (0, a.jsx)(
                s.Speaker,
                {
                  reduceHeightOnMobile: !0,
                  className: i.default.speaker,
                  image: e.image,
                  name: e.name,
                  tagline: e.tagline,
                  bio: e.bio,
                  socialMedia: [
                    ...(e.twitter ? [{ type: 'twitter', url: e.twitter }] : []),
                    ...(e.linkedin
                      ? [{ type: 'linkedin', url: e.linkedin }]
                      : []),
                  ],
                },
                ''.concat(e.name, '-').concat(t)
              )
            ),
          }),
        ],
      });
    }
  },
]);
