(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  92379,
  (e) => {
    e.v('/_next/static/media/devfest-logo.497c84b3.svg');
  },
  26746,
  (e) => {
    e.v({
      answer: 'faq-item-module-scss-module__-nblGa__answer',
      detail: 'faq-item-module-scss-module__-nblGa__detail',
      faq: 'faq-item-module-scss-module__-nblGa__faq',
      polygon: 'faq-item-module-scss-module__-nblGa__polygon',
      polygonCover: 'faq-item-module-scss-module__-nblGa__polygonCover',
      question: 'faq-item-module-scss-module__-nblGa__question',
      summary: 'faq-item-module-scss-module__-nblGa__summary',
      toggle: 'faq-item-module-scss-module__-nblGa__toggle',
    });
  },
  46876,
  (e) => {
    e.v({
      orbit: 'orbit-module-scss-module__EsObcq__orbit',
      svg: 'orbit-module-scss-module__EsObcq__svg',
    });
  },
  63751,
  (e) => {
    'use strict';
    e.s(['OUTER_RING_RATIO', () => c, 'default', () => m], 63751);
    var t = e.i(30718),
      s = e.i(76422),
      i = e.i(22446),
      a = e.i(61132);
    let n = { some: 0, all: 1 },
      o = {
        src: e.i(92379).default,
        width: 159,
        height: 88,
        blurWidth: 0,
        blurHeight: 0,
      },
      r = i.default.memo(function (e) {
        let {
            size: s,
            onClick: a,
            fillImage: n,
            isExpanded: o,
            strokeWidth: r,
          } = e,
          l = (0, i.useId)(),
          d = 0.35 * s,
          [u, m] = (0, i.useState)(!1),
          h = o ? s * c : d + 0.06 * s,
          g = u ? (o ? 0.98 : 1.1) : 1,
          f = (u && !o) || o ? h : d;
        return (0, t.jsxs)('g', {
          onMouseEnter: () => m(!0),
          onMouseLeave: () => m(!1),
          onClick: a,
          'aria-label': 'Interactive circle',
          transform: 'scale('.concat(g, ')'),
          style: { cursor: 'pointer' },
          children: [
            (0, t.jsx)('defs', {
              children: (0, t.jsx)('clipPath', {
                id: l,
                children: (0, t.jsx)('circle', {
                  cx: 0,
                  cy: 0,
                  r: f,
                  style: {
                    transition: o
                      ? 'none'
                      : 'r 100ms cubic-bezier(0, 0, 0.58, 1)',
                  },
                }),
              }),
            }),
            (0, t.jsx)('circle', {
              cx: 0,
              cy: 0,
              r: h,
              fill: 'none',
              stroke: '#D4AF74',
              strokeWidth: r,
            }),
            (0, t.jsx)('g', {
              clipPath: 'url(#'.concat(l, ')'),
              children: (0, t.jsx)('image', {
                href: n,
                x: -f,
                y: -f,
                width: 2 * f,
                height: 2 * f,
                preserveAspectRatio: 'xMidYMid slice',
                style: {
                  transition: o
                    ? 'none'
                    : 'all 100ms cubic-bezier(0, 0, 0.58, 1)',
                },
              }),
            }),
            (0, t.jsx)('circle', {
              cx: 0,
              cy: 0,
              r: f,
              fill: 'none',
              stroke: '#D4AF74',
              strokeWidth: r,
              style: {
                transition: o ? 'none' : 'r 100ms cubic-bezier(0, 0, 0.58, 1)',
              },
            }),
          ],
        });
      });
    var l = e.i(46876);
    function d(e) {
      return (e * Math.PI) / 180;
    }
    let c = 0.47,
      u = [
        {
          id: 0,
          angleOffset: d(79),
          radius: 280,
          image: '/images/devfest-2024-digital-working-group.jpg',
        },
        {
          id: 1,
          angleOffset: d(151),
          radius: 190,
          image: '/images/devfest-2024-volunteers.jpg',
        },
        {
          id: 2,
          angleOffset: d(19),
          radius: 190,
          image: '/images/devfest-2024-audience.jpg',
        },
        {
          id: 3,
          angleOffset: d(230),
          radius: 280,
          image: '/images/devfest-2024-stage.jpg',
        },
        {
          id: 4,
          angleOffset: d(305),
          radius: 280,
          image: '/images/devfest-2024-attendees.jpg',
        },
      ];
    function m(e) {
      let { className: d } = e,
        [m, h] = (0, i.useState)(0),
        [g, f] = (0, i.useState)(!0),
        p = (0, i.useRef)(null),
        v = (function (e) {
          let {
              root: t,
              margin: s,
              amount: o,
              once: r = !1,
              initial: l = !1,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            [d, c] = (0, i.useState)(l);
          return (
            (0, i.useEffect)(() => {
              if (!e.current || (r && d)) return;
              let i = {
                root: (t && t.current) || void 0,
                margin: s,
                amount: o,
              };
              return (function (e, t) {
                let {
                    root: s,
                    margin: i,
                    amount: o = 'some',
                  } = arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                  r = (0, a.resolveElements)(e),
                  l = new WeakMap(),
                  d = new IntersectionObserver(
                    (e) => {
                      e.forEach((e) => {
                        let s = l.get(e.target);
                        if (!!s !== e.isIntersecting)
                          if (e.isIntersecting) {
                            let s = t(e.target, e);
                            'function' == typeof s
                              ? l.set(e.target, s)
                              : d.unobserve(e.target);
                          } else
                            'function' == typeof s &&
                              (s(e), l.delete(e.target));
                      });
                    },
                    {
                      root: s,
                      rootMargin: i,
                      threshold: 'number' == typeof o ? o : n[o],
                    }
                  );
                return (r.forEach((e) => d.observe(e)), () => d.disconnect());
              })(e.current, () => (c(!0), r ? void 0 : () => c(!1)), i);
            }, [t, e, s, r, o]),
            d
          );
        })(p, { margin: '0px' }),
        [y, b] = (0, i.useState)(!1),
        [w, _] = (0, i.useState)(null),
        [x, k] = (0, i.useState)(() =>
          u.map((e) => {
            let t = e.angleOffset;
            return {
              x: 300 + e.radius * Math.cos(t),
              y: 300 + e.radius * Math.sin(t),
              size: 100,
            };
          })
        ),
        q = 270 / c;
      return (
        (0, i.useEffect)(() => {
          let e = setTimeout(() => b(!0), 150);
          return () => clearTimeout(e);
        }, []),
        (0, i.useEffect)(() => {
          let e = () => f('visible' === document.visibilityState);
          return (
            document.addEventListener('visibilitychange', e),
            () => document.removeEventListener('visibilitychange', e)
          );
        }, []),
        (0, i.useEffect)(() => {
          let e,
            t = performance.now(),
            s = (i) => {
              let a = (i - t) / 16.67;
              ((t = i),
                v && g && h((e) => (e + 0.0025 * a) % (2 * Math.PI)),
                (e = requestAnimationFrame(s)));
            };
          return (
            (e = requestAnimationFrame(s)),
            () => cancelAnimationFrame(e)
          );
        }, [v, g]),
        (0, i.useEffect)(() => {
          k((e) => {
            let t = [...e];
            return (
              u.forEach((e, s) => {
                if (w === e.id) t[s] = { x: 300, y: 300, size: q };
                else {
                  let i = m + e.angleOffset,
                    a = 300 + e.radius * Math.cos(i),
                    n = 300 + e.radius * Math.sin(i);
                  t[s] = { x: a, y: n, size: 100 };
                }
              }),
              t
            );
          });
        }, [m, w, q]),
        (0, t.jsx)('div', {
          ref: p,
          className: (0, s.default)(l.default.orbit, d),
          children: (0, t.jsxs)('svg', {
            width: '100%',
            height: '100%',
            className: l.default.svg,
            preserveAspectRatio: 'xMidYMid meet',
            viewBox: '0 0 '.concat(600, ' ').concat(600),
            children: [
              [100, 190, 280].map((e) =>
                (0, t.jsx)(
                  'circle',
                  {
                    cx: 300,
                    cy: 300,
                    r: e,
                    fill: 'none',
                    stroke: '#D4AF74',
                    strokeWidth: '3',
                  },
                  e
                )
              ),
              (0, t.jsx)('image', {
                href: o.src,
                x: 244,
                y: 269,
                width: 112,
                height: 62,
              }),
              u.map((e, s) => {
                let i = x[s],
                  a = w === e.id,
                  n = null === w || a,
                  o = i.size / 100;
                return (0, t.jsx)(
                  'g',
                  {
                    style: {
                      opacity: n && y ? 1 : 0,
                      transition: 'opacity '
                        .concat(135, 'ms ')
                        .concat(n ? 'ease-out' : 'ease-in'),
                      pointerEvents: n && y ? 'auto' : 'none',
                    },
                    children: (0, t.jsx)('g', {
                      transform: 'translate('
                        .concat(i.x, ', ')
                        .concat(i.y, ')'),
                      style: {
                        transition: a
                          ? 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
                          : 'none',
                      },
                      children: (0, t.jsx)('g', {
                        transform: 'scale('.concat(o, ')'),
                        style: {
                          transition: a
                            ? 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
                            : 'none',
                        },
                        children: (0, t.jsx)(r, {
                          size: 100,
                          fillImage: e.image,
                          isExpanded: a,
                          strokeWidth: a ? 2 : 2.5 / o,
                          onClick: () => {
                            let t;
                            return ((t = e.id), _((e) => (e === t ? null : t)));
                          },
                        }),
                      }),
                    }),
                  },
                  e.id
                );
              }),
            ],
          }),
        })
      );
    }
  },
  75514,
  42122,
  (e) => {
    'use strict';
    e.s(['default', () => a], 75514);
    var t = e.i(30718),
      s = e.i(11477),
      i = e.i(26746);
    let a = (e) => {
      let { idx: a, question: n, answer: o, variants: r } = e;
      return (0, t.jsxs)(s.motion.li, {
        variants: r,
        className: i.default.faq,
        children: [
          (0, t.jsxs)('details', {
            className: i.default.detail,
            name: 'faqs',
            id: 'faq-'.concat(a),
            children: [
              (0, t.jsxs)('summary', {
                className: i.default.summary,
                children: [
                  (0, t.jsxs)('span', {
                    className: i.default.question,
                    children: [a + 1, '. ', n],
                  }),
                  (0, t.jsx)('div', {
                    className: i.default.toggle,
                    children: (0, t.jsxs)('svg', {
                      width: '24',
                      height: '24',
                      viewBox: '0 0 24 24',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                      role: 'img',
                      'aria-label': 'Toggle FAQ',
                      children: [
                        (0, t.jsx)('path', {
                          d: 'M13 6V18.6H11.2V6H13Z',
                          fill: '#171717',
                        }),
                        (0, t.jsx)('path', {
                          d: 'M6 11H18.6V12.8H6V11Z',
                          fill: '#171717',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsx)('p', { className: i.default.answer, children: o }),
            ],
          }),
          (0, t.jsx)('svg', {
            width: '44',
            height: '33',
            fill: 'none',
            viewBox: '0 0 44 33',
            className: i.default.polygon,
            xmlns: 'http://www.w3.org/2000/svg',
            'aria-hidden': 'true',
            children: (0, t.jsx)('path', {
              fill: 'currentColor',
              d: 'M25.2295 30.4008C23.6316 32.5873 20.3684 32.5873 18.7705 30.4009L1.53343 6.81497C-0.398024 4.17213 1.4895 0.454788 4.7629 0.454788H39.2371C42.5105 0.454788 44.398 4.17212 42.4666 6.81497L25.2295 30.4008Z',
            }),
          }),
          (0, t.jsx)('div', { className: i.default.polygonCover }),
        ],
      });
    };
    e.s(['FAQ_DATA', () => o, 'TABS', () => n, 'TAB_LABELS', () => r], 42122);
    let n = ['general', 'tickets'],
      o = {
        general: [
          {
            id: 1,
            question: 'What is Devfest?',
            answer:
              'DevFest is an annual developer conference organized by Google Developers Groups (GDGs) across the world. The event brings together tech-enthusiasts, developers, and industry experts to share knowledge, experience, and innovation.',
          },
          {
            id: 2,
            question: 'What is Devfest Lagos 2025?',
            answer:
              'DevFest Lagos 2025 is a five-day tech festival where tech enthusiasts, from beginners to experts, and everyone in between in one place.',
          },
          {
            id: 3,
            question: 'When & where will DevFest Lagos 2025 take place?',
            answer:
              "DevFest Lagos 2025 will be held between 18th to 22nd of November 2025, with each day's session kickstarting by 9:00 AM prompt at the National Theatre, Iganmu, Lagos.",
          },
          {
            id: 4,
            question: 'What should I expect at Devfest Lagos 2025?',
            answer:
              'DevFest Lagos 2025 is obviously going to be bigger and better! This time, the focus goes beyond learning from industry experts, or  connecting with like-minded professionals, or gaining insights into the latest trends and innovations in technology, but also enjoying an unforgettable experience with lots of fun, relaxation, and  memories to last a lifetime.',
          },
          {
            id: 5,
            question: 'How can I register for DevFest Lagos 2025?',
            answer:
              'To attend DevFest Lagos 2025, you must register through the official event registration platform at tickets.devfestlagos.com. You can select the day you want to attend based on the interest of those days.',
          },
          {
            id: 6,
            question: "What if I register and can't attend any more?",
            answer:
              'Tickets are non-refundable for DevFest Lagos 2025  and not transferable. Each ticket is tied to a specific attendee and cannot be transferred to another person.',
          },
          {
            id: 7,
            question: 'Is there a code of conduct for attendees?',
            answer:
              'Yes, there is a community conduct guideline that all attendees are expected to follow. We are committed to creating a safe and inclusive environment for all participants. Please review and adhere to our conduct guidelines to ensure a respectful and enjoyable experience for everyone. Community Guidelines - https://developers.google.com/community-guidelines',
          },
          {
            id: 8,
            question:
              'How can I get updates and announcements about DevFest Lagos 2025?',
            answer:
              'Stay tuned for updates and announcements by following our official social media channels and checking the event website. You can also subscribe to our newsletter to receive the latest information about speakers, sessions, and event details.',
          },
          {
            id: 10,
            question:
              'Can I volunteer to help make DevFest Lagos 2025 a success?',
            answer:
              'Yes, we welcome volunteers who are passionate about contributing to the success of DevFest Lagos 2025. To join our volunteer team, please follow us on our social media channels for updates and information on how to get involved.',
          },
          {
            id: 11,
            question:
              "I'm a non-technical person, can I still attend DevFest Lagos 2025?",
            answer:
              'Yes you can. We have sessions which also cover the writing, product design and management aspect of tech.',
          },
          {
            id: 12,
            question:
              'Can I still submit a proposal for a session or workshop (Call for Papers)?',
            answer:
              "No you can't. Call for papers for DevFest Lagos 2025 is officially closed.",
          },
        ],
        tickets: [
          {
            id: 1,
            question: 'Can I buy tickets for the event through this platform?',
            answer:
              'Yes! This platform allows you to securely purchase tickets for the five-day event.',
          },
          {
            id: 2,
            question: 'Is lunch or swag included in my ticket?',
            answer:
              'No — meals and merchandise are not included by default. However, some vendor stalls and sponsors may offer giveaways during the event.',
          },
          {
            id: 3,
            question: 'What if I register and can’t attend any more?',
            answer:
              'Tickets are non-refundable for DevFest Lagos 2025  and not transferable. Each ticket is tied to a specific attendee and cannot be transferred to another person.',
          },
          {
            id: 4,
            question: 'How do I pay for my ticket?',
            answer:
              'We have a number of payment options for your convenience - card payment, bank transfer, USSD',
          },
          {
            id: 5,
            question: 'Can I buy tickets for other people?',
            answer:
              'Absolutely!  You can purchase tickets for others, but keep in mind they will need to register for the event separately to claim their tickets.',
          },
          {
            id: 6,
            question:
              'What information do I need to provide when buying tickets for others?',
            answer:
              'You will need to provide the email address for each person you are purchasing tickets for.',
          },
          {
            id: 7,
            question:
              'Will the people I buy tickets for receive a confirmation email?',
            answer:
              'Yes, they will  receive a confirmation email with the tickets attached.  They will receive an email prompting them to register for the event, and upon successful registration, they will be able to claim their tickets.',
          },
          {
            id: 8,
            question:
              'I want to purchase tickets for more than 10 people. What should I do?',
            answer:
              'For bulk ticket purchases (more than 10), please email us at team@gdglagos.com and we’ll help process your order.',
          },
          {
            id: 9,
            question: 'What does a ticket grant me access to?',
            answer:
              'All ticket categories provide full access to all talks, workshops, sponsor booths, and product showcases on the days they cover.',
          },
          {
            id: 10,
            question:
              'I purchased a ticket for a day or more, but now I want to attend other days. Can I upgrade my ticket?',
            answer:
              'Yes, you can upgrade your ticket by purchasing additional days to add to your current ticket. This way, you’ll be able to attend on more days.',
          },
          {
            id: 11,
            question: 'How do I upgrade my ticket?',
            answer:
              'Simply log in to your DevFest Lagos dashboard and navigate to the ticket details section. Then, follow the on-screen instructions to complete the upgrade process.',
          },
          {
            id: 12,
            question: 'Will I receive a new ticket ID after upgrading?',
            answer:
              'No, your ticket ID remains the same after upgrading your ticket.',
          },
          {
            id: 13,
            question:
              'I purchased a ticket for someone else. How do they claim their ticket?',
            answer:
              'The person you purchased a ticket for will receive an email prompting them to register for the event.  After successful registration, they will receive a confirmation email and they will be able to access the platform.',
          },
          {
            id: 14,
            question:
              "I haven't received an email to claim my ticket. What should I do?",
            answer:
              "First, check your spam folder.  If you still can't find the email, contact DevFest Lagos directly for assistance. team@gdglagos.com",
          },
          {
            id: 15,
            question: 'Can I claim my ticket before registering for the event?',
            answer:
              'Unfortunately, no. Tickets can only be claimed after successful event registration.',
          },
        ],
      },
      r = { general: 'General', tickets: 'Tickets' };
  },
  19674,
  (e) => {
    e.v({
      button: 'gdg-module-scss-module__gWXqqG__button',
      container: 'gdg-module-scss-module__gWXqqG__container',
      content: 'gdg-module-scss-module__gWXqqG__content',
      description: 'gdg-module-scss-module__gWXqqG__description',
      gdg: 'gdg-module-scss-module__gWXqqG__gdg',
      orbit: 'gdg-module-scss-module__gWXqqG__orbit',
      title: 'gdg-module-scss-module__gWXqqG__title',
    });
  },
  69746,
  (e) => {
    e.v({
      container: 'page-module-scss-module__gRJOEq__container',
      description: 'page-module-scss-module__gRJOEq__description',
      faqs: 'page-module-scss-module__gRJOEq__faqs',
      list: 'page-module-scss-module__gRJOEq__list',
      sticker: 'page-module-scss-module__gRJOEq__sticker',
      tabs: 'page-module-scss-module__gRJOEq__tabs',
      title: 'page-module-scss-module__gRJOEq__title',
    });
  },
  28019,
  (e) => {
    'use strict';
    e.s(['default', () => b], 28019);
    var t = e.i(30718),
      s = e.i(11477),
      i = e.i(40388),
      a = e.i(22446),
      n = e.i(19774),
      o = e.i(75514),
      r = e.i(63751),
      l = e.i(19674);
    let d = () =>
      (0, t.jsx)('div', {
        className: l.default.gdg,
        children: (0, t.jsxs)('div', {
          className: l.default.container,
          children: [
            (0, t.jsxs)('div', {
              className: l.default.content,
              children: [
                (0, t.jsx)('h2', {
                  className: l.default.title,
                  children: 'What is GDG Lagos up to?',
                }),
                (0, t.jsx)('p', {
                  className: l.default.description,
                  children:
                    'Stay updated on all our activities, events, webinars. Be the first to know what the GDG Lagos community is up to.',
                }),
                (0, t.jsx)(n.Button, {
                  type: 'link',
                  className: l.default.button,
                  href: 'https://gdg.community.dev/gdg-lagos/',
                  target: '_blank',
                  children: 'Join the community',
                }),
              ],
            }),
            (0, t.jsx)(r.default, { className: l.default.orbit }),
          ],
        }),
      });
    var c = e.i(42122),
      u = e.i(69746);
    let m = (0, s.motion)(i.default),
      h = { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
      g = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
        },
      },
      f = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: 'linear' } },
      },
      p = {
        hidden: {},
        visible: { transition: { delayChildren: 0.2, staggerChildren: 0.2 } },
      },
      v = {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.2, ease: 'easeOut' },
        },
      },
      y = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: 0.1, duration: 0.3, ease: 'linear' },
        },
      };
    function b() {
      let [e, i] = (0, a.useState)('general'),
        r = c.FAQ_DATA[e];
      return (0, t.jsx)(s.motion.div, {
        initial: 'hidden',
        animate: 'visible',
        variants: h,
        children: (0, t.jsxs)('div', {
          className: u.default.faqs,
          children: [
            (0, t.jsxs)('div', {
              className: u.default.container,
              children: [
                (0, t.jsxs)(s.motion.h2, {
                  variants: f,
                  className: u.default.title,
                  children: [
                    (0, t.jsx)(m, {
                      width: 200,
                      height: 161,
                      className: u.default.sticker,
                      src: '/stickers/more-community.png',
                      alt: "'More Community, Less Ego' written above a group photo of DevFest Digital Working Group (2024)",
                      priority: !0,
                      variants: g,
                    }),
                    (0, t.jsx)('span', {
                      children: 'Get your questions answered',
                    }),
                  ],
                }),
                (0, t.jsx)(s.motion.p, {
                  variants: f,
                  className: u.default.description,
                  children:
                    'From registration to what to expect on the day, our FAQs have all the info you need.',
                }),
                (0, t.jsx)(s.motion.div, {
                  variants: y,
                  className: u.default.tabs,
                  children: c.TABS.map((s) =>
                    (0, t.jsx)(
                      n.Button,
                      {
                        type: 'button',
                        onClick: () => i(s),
                        variant: s === e ? 'primary' : 'tertiary',
                        children: c.TAB_LABELS[s],
                      },
                      s
                    )
                  ),
                }),
                (0, t.jsx)(
                  s.motion.ul,
                  {
                    initial: 'hidden',
                    animate: 'visible',
                    variants: p,
                    className: u.default.list,
                    children: r.map((e, s) => {
                      let { id: i, question: a, answer: n } = e;
                      return (0, t.jsx)(
                        o.default,
                        { idx: s, question: a, answer: n, variants: v },
                        i
                      );
                    }),
                  },
                  e
                ),
              ],
            }),
            (0, t.jsx)(d, {}),
          ],
        }),
      });
    }
  },
]);
