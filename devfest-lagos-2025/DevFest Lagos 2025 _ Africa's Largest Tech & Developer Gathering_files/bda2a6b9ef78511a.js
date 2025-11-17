(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  61595,
  (e) => {
    e.v({
      button: 'faqs-module-scss-module__9KZmgW__button',
      container: 'faqs-module-scss-module__9KZmgW__container',
      content: 'faqs-module-scss-module__9KZmgW__content',
      description: 'faqs-module-scss-module__9KZmgW__description',
      faqs: 'faqs-module-scss-module__9KZmgW__faqs',
      inner: 'faqs-module-scss-module__9KZmgW__inner',
      list: 'faqs-module-scss-module__9KZmgW__list',
      sticker: 'faqs-module-scss-module__9KZmgW__sticker',
      title: 'faqs-module-scss-module__9KZmgW__title',
    });
  },
  81367,
  (e) => {
    'use strict';
    e.s(['default', () => p]);
    var t = e.i(30718),
      s = e.i(11477),
      a = e.i(40388),
      i = e.i(19774),
      l = e.i(75514),
      r = e.i(42122),
      o = e.i(61595);
    let n = (0, s.motion)(a.default),
      A = r.FAQ_DATA.general.slice(0, 4),
      d = { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
      u = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
        },
      },
      c = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: 'linear' } },
      },
      h = {
        hidden: {},
        visible: { transition: { delayChildren: 0.2, staggerChildren: 0.2 } },
      },
      g = {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.2, ease: 'easeOut' },
        },
      },
      m = {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 1, duration: 0.2, ease: 'easeOut' },
        },
      },
      p = () =>
        (0, t.jsx)(s.motion.div, {
          initial: 'hidden',
          whileInView: 'visible',
          className: o.default.faqs,
          variants: d,
          viewport: { once: !0, amount: 0.35 },
          children: (0, t.jsx)('div', {
            className: o.default.container,
            children: (0, t.jsxs)('div', {
              className: o.default.content,
              children: [
                (0, t.jsx)(n, {
                  className: o.default.sticker,
                  variants: u,
                  width: 298,
                  height: 227,
                  src: '/stickers/more-community-less-ego-dwg-group-picture.svg',
                  alt: "'More Community, Less Ego' written above a group photo of DevFest Digital Working Group (2024)",
                }),
                (0, t.jsxs)('div', {
                  className: o.default.inner,
                  children: [
                    (0, t.jsx)(s.motion.h2, {
                      variants: c,
                      className: o.default.title,
                      children: 'Get your questions answered',
                    }),
                    (0, t.jsx)(s.motion.p, {
                      variants: c,
                      className: o.default.description,
                      children:
                        'From registration to what to expect on the day, our FAQs have all the info you need.',
                    }),
                    (0, t.jsx)(s.motion.ul, {
                      variants: h,
                      className: o.default.list,
                      children: A.map((e, s) => {
                        let { id: a, question: i, answer: r } = e;
                        return (0, t.jsx)(
                          l.default,
                          { idx: s, question: i, answer: r, variants: g },
                          a
                        );
                      }),
                    }),
                    (0, t.jsx)(s.motion.div, {
                      variants: m,
                      children: (0, t.jsx)(i.Button, {
                        type: 'link',
                        href: '/faqs',
                        className: o.default.button,
                        children: 'I have more questions',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
  },
  71670,
  (e) => {
    e.v({
      arrow: 'hero-module-scss-module__OZ0BPq__arrow',
      buyButton: 'hero-module-scss-module__OZ0BPq__buyButton',
      callToAction: 'hero-module-scss-module__OZ0BPq__callToAction',
      callToActionInner: 'hero-module-scss-module__OZ0BPq__callToActionInner',
      dLogo: 'hero-module-scss-module__OZ0BPq__dLogo',
      dateAndLocation: 'hero-module-scss-module__OZ0BPq__dateAndLocation',
      devfestText: 'hero-module-scss-module__OZ0BPq__devfestText',
      hero: 'hero-module-scss-module__OZ0BPq__hero',
      heroImage: 'hero-module-scss-module__OZ0BPq__heroImage',
      heroImageMobile: 'hero-module-scss-module__OZ0BPq__heroImageMobile',
      lagosRow: 'hero-module-scss-module__OZ0BPq__lagosRow',
      mobileArrow: 'hero-module-scss-module__OZ0BPq__mobileArrow',
      yearText: 'hero-module-scss-module__OZ0BPq__yearText',
    });
  },
  17188,
  (e) => {
    'use strict';
    e.s(['HomepageHero', () => c], 17188);
    var t = e.i(30718),
      s = e.i(11477),
      a = e.i(40388);
    let i = {
        src: e.i(82952).default,
        width: 156,
        height: 176,
        blurWidth: 7,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/AAAAAAAAAAAAAAAAAA4GBRxQGxZ6TRoWdwoEBBYAAAAAAAEBAQQlDQs/ky4lvt9BM/vZPzP5RxgUbwADBQcQHyY9doZCUuXdQzj/6kM1/809MPA6FBFeABgrSnE+et73Rn3h/3VglP+gPD7kPBURXwQCAgkAGCtKcD574PdChfT/QoPw/ztouuQVJT9gAgMECgADBQcQGi9RdThuyOVChPL/QoX0/zx21/EUJD1fAAAAAAABAQEEDRYmPi1VmL1Af+j6Pnzi+BgqSW4AAAAAAAAAAAAAAAAABQgOGxovUXgZLk91BAYKFXoLQ3pW3FutAAAAAElFTkSuQmCC',
      },
      l = {
        src: e.i(63184).default,
        width: 156,
        height: 176,
        blurWidth: 7,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6ElEQVR42k2Py4tBcRzFf4/7nXQlzYxhZq7JZmZpcL1yi2Jhw5XHX8CSLDySspQFe0USRYg/Qf4TS48FGxt1bX5cNk6d1fl0OgdxGjAZJUtVNfAvAnqWwfNTFPsxRRzGL79Z70or6AMYY+4evlq/0vZ25OSapZhrmmLWVnj74bOUKVA9IpTwbzdAbIS27kmSqZCjJ58NTnMecRTzIRtk5nXdrtS2MWkoM0cnen5Xw+A/ZNYdclIWiB3GlDVrpo3Z/lkiaq3sgcJ+QJTjCF+6OVj+CZwfY/QYpNUQY8IHlaQEFR1Pvp+fXAFmLz1ZEBjnlwAAAABJRU5ErkJggg==',
      },
      r = {
        src: e.i(71319).default,
        width: 119,
        height: 34,
        blurWidth: 0,
        blurHeight: 0,
      },
      o = {
        src: e.i(82473).default,
        width: 22,
        height: 14,
        blurWidth: 0,
        blurHeight: 0,
      },
      n = {
        src: e.i(16436).default,
        width: 1336,
        height: 593,
        blurWidth: 8,
        blurHeight: 4,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/AAAAAAAAAAAAAAAAAAAAAAATExY8R0RM8kdGTf9EP0X+AB8bG1EfHBtSHxwaUh0eGFIrKCZ8VVJO91VTRv9YVUv/AF9WVvlhVlX6YVdS+mNdWPpeVVD4UEpD5EhEQN9LQ0HfAGJZVv5wY2D/aFxX/2FVUv9UTEnmGRYVQgwLCyUODAwkJTspvcqsYqcAAAAASUVORK5CYII=',
      },
      A = {
        src: e.i(56595).default,
        width: 396,
        height: 296,
        blurWidth: 8,
        blurHeight: 6,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAw0lEQVR42g3LTQsBQQAG4PkxWERuysXHwYVEa8fsLLPf2bXWV4q2HJQc5eCiXP1FpVbz2vvzkFK5HJeKhaRaqyRKLp9UFCXpdtrP0PW/thV8SBj5qdCp3C5n0p305H5lyNf9JB+3C86XK8hu4WIzd+CNB4h4D4edj/VxCD9qYWaPQKbDAUxKIaiGwJzA5QyOwxEvDQSMgnicYyEEhKrCVPsIDYbQsWDqTNqMpsSi2mc9zTTXsMqmx3V4Bv01G/W3UsjFf/j1XYy0owfyAAAAAElFTkSuQmCC',
      };
    var d = e.i(19774),
      u = e.i(71670);
    function c() {
      return (0, t.jsxs)('section', {
        children: [
          (0, t.jsxs)('div', {
            className: u.default.hero,
            children: [
              (0, t.jsxs)('div', {
                className: u.default.devfestText,
                children: [
                  (0, t.jsx)(s.motion.span, {
                    initial: { opacity: 0, filter: 'blur(20px)', x: -65 },
                    animate: { opacity: 1, filter: 'blur(0px)', x: 0 },
                    transition: { duration: 0.9, delay: 0.55, ease: 'easeOut' },
                    children: 'Devfest',
                  }),
                  (0, t.jsxs)('div', {
                    className: u.default.lagosRow,
                    children: [
                      (0, t.jsxs)('div', {
                        className: u.default.dLogo,
                        children: [
                          (0, t.jsx)(s.motion.div, {
                            initial: {
                              x: -32,
                              opacity: 0,
                              filter: 'blur(20px)',
                            },
                            animate: { x: 0, opacity: 1, filter: 'blur(0)' },
                            transition: {
                              duration: 0.3,
                              delay: 0.2,
                              ease: [0.5, 0, 0.5, 1],
                            },
                            children: (0, t.jsx)(a.default, {
                              src: i,
                              alt: 'DevFest Logo Left Side',
                            }),
                          }),
                          (0, t.jsx)(s.motion.div, {
                            initial: {
                              x: -128,
                              opacity: 0,
                              filter: 'blur(20px)',
                            },
                            animate: { x: 0, opacity: 1, filter: 'blur(0)' },
                            transition: {
                              duration: 0.3,
                              ease: [0.5, 0, 0.5, 1],
                            },
                            children: (0, t.jsx)(a.default, {
                              src: l,
                              alt: 'DevFest Logo Right Side',
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)(s.motion.span, {
                        initial: { opacity: 0, filter: 'blur(20px)', x: -65 },
                        animate: { opacity: 1, filter: 'blur(0px)', x: 0 },
                        transition: {
                          duration: 0.9,
                          delay: 0.55,
                          ease: 'easeOut',
                        },
                        children: 'Lagos',
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)('h1', {
                className: u.default.yearText,
                children: '2025'
                  .split('')
                  .map((e, a) =>
                    (0, t.jsx)(
                      s.motion.span,
                      {
                        initial: { y: '-100%' },
                        animate: { y: 0 },
                        transition: {
                          delay: 1.26 + 0.052 * a,
                          duration: 1.042,
                          ease: [0, 0, 0.3, 1],
                        },
                        children: e,
                      },
                      e
                    )
                  ),
              }),
              (0, t.jsx)(s.motion.div, {
                initial: { opacity: 0, scale: 1.03 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 1.5, duration: 0.8, ease: [0, 0, 0, 1] },
                children: (0, t.jsx)(a.default, {
                  src: n,
                  className: u.default.heroImage,
                  alt: 'Clipped illustration',
                  style: { width: '100%' },
                }),
              }),
              (0, t.jsx)(a.default, {
                src: A,
                className: u.default.heroImageMobile,
                alt: 'Clipped illustration',
                style: { width: '100%' },
              }),
            ],
          }),
          (0, t.jsx)(s.motion.div, {
            className: u.default.callToAction,
            children: (0, t.jsxs)(s.motion.div, {
              initial: { y: -30, opacity: 0 },
              whileInView: {
                y: 0,
                opacity: 1,
                transition: { ease: [0, 0, 0, 1], duration: 1 },
              },
              viewport: { once: !0, margin: '-100px' },
              className: u.default.callToActionInner,
              children: [
                (0, t.jsx)(d.Button, {
                  type: 'link',
                  target: '_blank',
                  href: 'https://tickets.devfestlagos.com/buy',
                  className: u.default.buyButton,
                  children: 'BUY TICKETS',
                }),
                (0, t.jsxs)('div', {
                  className: u.default.dateAndLocation,
                  children: [
                    (0, t.jsx)('span', { children: '18-22 November, 2025' }),
                    (0, t.jsx)(a.default, {
                      src: r,
                      alt: '',
                      className: u.default.arrow,
                    }),
                    (0, t.jsx)(a.default, {
                      src: o,
                      alt: '',
                      className: u.default.mobileArrow,
                    }),
                    (0, t.jsx)('span', {
                      children: 'National Theatre, Iganmu',
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
  },
  87759,
  (e) => {
    'use strict';
    e.s(['ScheduleWrapper', () => a]);
    var t = e.i(30718),
      s = e.i(43025);
    function a(e) {
      let { scheduleData: a } = e;
      return 0 === a.length
        ? (0, t.jsx)('div', {
            style: { textAlign: 'center', padding: '2rem' },
            children: (0, t.jsx)('p', {
              children: 'Schedule details coming soon...',
            }),
          })
        : (0, t.jsx)(s.ScheduleDayGroup, { hideDescription: !0, days: a });
    }
  },
  90378,
  (e) => {
    e.v({
      buyButton: 'secure-ticket-module-scss-module__5DGnNG__buyButton',
      description: 'secure-ticket-module-scss-module__5DGnNG__description',
      header: 'secure-ticket-module-scss-module__5DGnNG__header',
      heading: 'secure-ticket-module-scss-module__5DGnNG__heading',
      icon: 'secure-ticket-module-scss-module__5DGnNG__icon',
      line: 'secure-ticket-module-scss-module__5DGnNG__line',
      logo: 'secure-ticket-module-scss-module__5DGnNG__logo',
      perk: 'secure-ticket-module-scss-module__5DGnNG__perk',
      perks: 'secure-ticket-module-scss-module__5DGnNG__perks',
      pro: 'secure-ticket-module-scss-module__5DGnNG__pro',
      secureTicket: 'secure-ticket-module-scss-module__5DGnNG__secureTicket',
      standard: 'secure-ticket-module-scss-module__5DGnNG__standard',
      ticket: 'secure-ticket-module-scss-module__5DGnNG__ticket',
      ticketDescription:
        'secure-ticket-module-scss-module__5DGnNG__ticketDescription',
      tickets: 'secure-ticket-module-scss-module__5DGnNG__tickets',
    });
  },
  57086,
  (e) => {
    'use strict';
    e.s(['SecureTicket', () => h], 57086);
    var t = e.i(30718),
      s = e.i(11477),
      a = e.i(40388);
    let i = {
        src: e.i(16859).default,
        width: 466,
        height: 248,
        blurWidth: 8,
        blurHeight: 4,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/AKenptLRz9T7vMG1+8HCwfzBwcH9xsbG/cTCwv6goJ/MAKOiovS2trj/UE9M/3Z3dv+6urr/j4+P/2FWVv+Xk5LsAJmZmPS+u7r/Zl5e/3Z2dv+vr6//mJiY/1dXV/+TkpLtAJaVk87S0c/5zczK+MLBv/fIx8X2xMTB9sTEwfWSkY/CuutbrXU7/g8AAAAASUVORK5CYII=',
      },
      l = {
        src: e.i(97158).default,
        width: 466,
        height: 248,
        blurWidth: 8,
        blurHeight: 4,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhklEQVR42h3DwQ6CIBgAYN7/BdJlpzwgHZxjDg5BMSkUDzmXrKzeIjuE9Lc6fAhjfO67we8O3Fe6mpVSwRgTjlp/sixzaJ2mr7ppgWww5HkOlFIoigL2ZQlbzp8oiuPJWguEEGCMgRACpJR/QsoJLZaJG65juNwfwY23uT11XtfNzztKVv0X5YplGm4bnd8AAAAASUVORK5CYII=',
      },
      r = {
        src: e.i(92216).default,
        width: 137,
        height: 75,
        blurWidth: 0,
        blurHeight: 0,
      },
      o = {
        src: e.i(62007).default,
        width: 31,
        height: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    var n = e.i(19774),
      A = e.i(90378);
    let d = (0, s.motion)(a.default),
      u = [
        'Access to all talks and sessions',
        'Available throughout the five days',
        'Access to sponsor booths',
        'Entry to the networking area',
      ],
      c = [
        'Exclusive access to sponsor booths & product demos',
        'Access to masterclasses and technical workshops',
        'Invitation to the Executive Roundtable',
        'Special swags and merch',
      ];
    function h() {
      return (0, t.jsxs)('div', {
        className: A.default.secureTicket,
        children: [
          (0, t.jsxs)('h1', {
            className: A.default.heading,
            children: [
              (0, t.jsx)(d, {
                src: r,
                alt: 'Techies Assemble',
                className: A.default.icon,
                initial: { scale: 0.5, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                transition: {
                  ease: 'circInOut',
                  duration: 0.8,
                  type: 'spring',
                  mass: 0.5,
                },
              }),
              (0, t.jsx)(s.motion.p, {
                initial: { y: 64, opacity: 0 },
                whileInView: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: [0, 0, 0, 1] },
                },
                viewport: { once: !0 },
                children: 'SECURE YOUR TICKETS TODAY',
              }),
            ],
          }),
          (0, t.jsx)(s.motion.p, {
            initial: { y: 64, opacity: 0 },
            whileInView: {
              y: 0,
              opacity: 1,
              transition: { delay: 0.1, duration: 0.5, ease: [0, 0, 0, 1] },
            },
            viewport: { once: !0 },
            className: A.default.description,
            children:
              'Word on the street is that the last edition was a banger — and you bet we’re making this year’s DevFest even bigger and better. Select the ticket that works best for you:',
          }),
          (0, t.jsxs)('div', {
            className: A.default.tickets,
            children: [
              (0, t.jsxs)(s.motion.div, {
                className: ''
                  .concat(A.default.ticket, ' ')
                  .concat(A.default.standard),
                initial: { opacity: 0, y: 75 },
                whileInView: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.2, ease: [0, 0, 0, 1] },
                },
                viewport: { once: !0 },
                children: [
                  (0, t.jsx)(a.default, {
                    className: A.default.logo,
                    src: l,
                    alt: 'Standard Ticket',
                  }),
                  (0, t.jsx)('span', { className: A.default.line }),
                  (0, t.jsx)('h3', {
                    className: A.default.header,
                    children: 'Standard Ticket (₦7,000 PER day)',
                  }),
                  (0, t.jsx)('p', {
                    className: A.default.ticketDescription,
                    children:
                      "Open to everyone — whether you're just starting out or deep in the industry",
                  }),
                  (0, t.jsx)('ul', {
                    className: A.default.perks,
                    children: u.map((e) =>
                      (0, t.jsxs)(
                        'li',
                        {
                          className: A.default.perk,
                          children: [
                            (0, t.jsx)(a.default, {
                              src: o,
                              alt: '',
                              className: A.default.arrow,
                            }),
                            e,
                          ],
                        },
                        e
                      )
                    ),
                  }),
                  (0, t.jsx)(n.Button, {
                    className: A.default.buyButton,
                    href: 'https://tickets.devfestlagos.com/buy',
                    target: '_blank',
                    type: 'link',
                    children: 'BUY TICKETS',
                  }),
                ],
              }),
              (0, t.jsxs)(s.motion.div, {
                className: ''
                  .concat(A.default.ticket, ' ')
                  .concat(A.default.pro),
                initial: { opacity: 0, y: 75 },
                whileInView: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.2, ease: [0, 0, 0, 1] },
                },
                viewport: { once: !0 },
                children: [
                  (0, t.jsx)(a.default, {
                    src: i,
                    alt: 'Pro Ticket',
                    className: A.default.logo,
                  }),
                  (0, t.jsx)('span', { className: A.default.line }),
                  (0, t.jsx)('h3', {
                    className: A.default.header,
                    children: 'Pro Ticket (₦70,000 FOR THURSDAY)',
                  }),
                  (0, t.jsx)('p', {
                    className: A.default.ticketDescription,
                    children:
                      'For those who want more access and a more focused, premium experience — all in one day',
                  }),
                  (0, t.jsx)('ul', {
                    className: A.default.perks,
                    children: c.map((e) =>
                      (0, t.jsxs)(
                        'li',
                        {
                          className: A.default.perk,
                          children: [
                            (0, t.jsx)(a.default, {
                              src: o,
                              alt: '',
                              className: A.default.arrow,
                            }),
                            e,
                          ],
                        },
                        e
                      )
                    ),
                  }),
                  (0, t.jsx)(n.Button, {
                    className: A.default.buyButton,
                    href: 'https://tickets.devfestlagos.com/buy#pro',
                    target: '_blank',
                    type: 'link',
                    children: 'BUY TICKETS',
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
  },
  59010,
  (e) => {
    e.v({
      carousel: 'speakers-module-scss-module__9Wsa6W__carousel',
      content: 'speakers-module-scss-module__9Wsa6W__content',
      controlButtons: 'speakers-module-scss-module__9Wsa6W__controlButtons',
      description: 'speakers-module-scss-module__9Wsa6W__description',
      emblaSlide: 'speakers-module-scss-module__9Wsa6W__emblaSlide',
      emblaViewport: 'speakers-module-scss-module__9Wsa6W__emblaViewport',
      header: 'speakers-module-scss-module__9Wsa6W__header',
      learnListenIcon: 'speakers-module-scss-module__9Wsa6W__learnListenIcon',
      speakerLaptop: 'speakers-module-scss-module__9Wsa6W__speakerLaptop',
      speakers: 'speakers-module-scss-module__9Wsa6W__speakers',
      title: 'speakers-module-scss-module__9Wsa6W__title',
    });
  },
  64964,
  (e) => {
    'use strict';
    e.s(['SpeakersWrapper', () => w], 64964);
    var t = e.i(30718),
      s = e.i(22446);
    function a(e, t) {
      let a = (0, s.useRef)(!1);
      (0, s.useEffect)(() => {
        var s;
        if (!e.current) return;
        let i = new IntersectionObserver(
          (e) => {
            var s, l;
            let [r] = e;
            r.isIntersecting
              ? (null == t || null == (s = t.onEnter) || s.call(t, r),
                (null == t ? void 0 : t.once) &&
                  ((a.current = !0), i.disconnect()))
              : null == t || null == (l = t.onExit) || l.call(t, r);
          },
          {
            threshold: null != (s = null == t ? void 0 : t.threshold) ? s : 0.1,
            root: null == t ? void 0 : t.root,
            rootMargin: null == t ? void 0 : t.rootMargin,
          }
        );
        return (i.observe(e.current), () => i.disconnect());
      }, [e, t]);
    }
    var i = e.i(48004),
      l = e.i(7635),
      r = e.i(11477),
      o = e.i(40388);
    let n = {
      src: e.i(19791).default,
      width: 127,
      height: 92,
      blurWidth: 8,
      blurHeight: 6,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/ABUVFRd9fX2yoJ+f3KGfnuSkp6XqsbKx8Xt7e6wKCgoIABkZGRysrK3WzrvE/8+bl/+Iu5P/ttW9/5KTk70NDQ0MABUVFRehoqXRjaTW/5aixv+8s2r/rMKX/5iZmMMQEBAPABYWFhWVlZXOwMTJ/6auu/+5sZ//vbu3/4yMjM4YGBgYAEFBQUWDg4Pqbm5u/2xsbP9ubm7/c3Nz/4iIh/VjY2NyAJGRkKS0tLPytbW17KqqquWpqanerKyr1qenp86SkpGnl3RtYC7UOqUAAAAASUVORK5CYII=',
    };
    var A = e.i(93862),
      d = e.i(59010);
    let u = (0, r.motion)(o.default);
    function c(e) {
      let { speakers: a, carouselRef: o, carouselInView: c } = e,
        [h, g] = (0, l.default)(
          { loop: !0, align: 'start', slidesToScroll: 1 },
          [(0, i.default)({ delay: 3e3, stopOnInteraction: !0 })]
        );
      return (
        (0, s.useImperativeHandle)(o, () => ({
          scrollPrev: () => (null == g ? void 0 : g.scrollPrev()),
          scrollNext: () => (null == g ? void 0 : g.scrollNext()),
        })),
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)('div', {
              className: d.default.emblaViewport,
              ref: h,
              children: (0, t.jsx)('div', {
                className: d.default.carousel,
                children: a.map((e, s) =>
                  (0, t.jsx)(
                    r.motion.div,
                    {
                      className: d.default.emblaSlide,
                      initial: 'hidden',
                      animate: c ? 'visible' : 'hidden',
                      variants: {
                        hidden: { filter: 'blur(20px)', x: 160, opacity: 0 },
                        visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
                      },
                      transition: {
                        delay: 0.4 + 0.1 * s,
                        duration: 0.8,
                        ease: [0, 0, 0, 1],
                      },
                      children: (0, t.jsx)(A.Speaker, { ...e }),
                    },
                    ''.concat(e.name, '-').concat(s)
                  )
                ),
              }),
            }),
            (0, t.jsx)(u, {
              src: n,
              alt: 'Speakers Laptop',
              className: d.default.speakerLaptop,
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.5, delay: 0.8 },
            }),
          ],
        })
      );
    }
    var h = e.i(61848);
    let g = {
        src: e.i(83699).default,
        width: 44,
        height: 28,
        blurWidth: 0,
        blurHeight: 0,
      },
      m = {
        src: e.i(95931).default,
        width: 44,
        height: 28,
        blurWidth: 0,
        blurHeight: 0,
      },
      p = {
        src: e.i(21854).default,
        width: 212,
        height: 99,
        blurWidth: 0,
        blurHeight: 0,
      };
    var f = e.i(19774);
    function b(e) {
      let { speakerCount: i, onScrollLeft: l, onScrollRight: n } = e,
        A = (0, s.useRef)(null),
        [u, c] = (0, s.useState)(!1);
      return (
        a(A, {
          once: !0,
          onEnter: () => {
            c(!0);
          },
        }),
        (0, t.jsxs)(r.motion.div, {
          ref: A,
          className: d.default.header,
          initial: 'hidden',
          animate: u ? 'visible' : 'hidden',
          variants: {
            hidden: { y: 75, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          },
          transition: { duration: 0.4, ease: [0, 0, 0, 1] },
          children: [
            (0, t.jsxs)('div', {
              className: d.default.content,
              children: [
                (0, t.jsx)(o.default, {
                  src: p,
                  alt: 'Learn Listen Repeat',
                  className: d.default.learnListenIcon,
                }),
                (0, t.jsxs)('div', {
                  children: [
                    (0, t.jsxs)('h2', {
                      className: d.default.title,
                      children: [
                        i,
                        (0, t.jsx)('sup', { children: '+' }),
                        ' speakers',
                      ],
                    }),
                    (0, t.jsx)('p', {
                      className: d.default.description,
                      children:
                        "Meet the speakers for this year's edition. From industry pros to rising voices, they're bringing real stories, hard-earned lessons, and bold ideas to spark your next big move.",
                    }),
                  ],
                }),
                (0, t.jsx)(h.default, {
                  href: '/speakers',
                  children: (0, t.jsx)(f.Button, {
                    children: 'SEE FULL LINEUP',
                  }),
                }),
              ],
            }),
            (0, t.jsxs)('div', {
              className: d.default.controlButtons,
              children: [
                (0, t.jsx)('button', {
                  type: 'button',
                  onClick: l,
                  children: (0, t.jsx)(o.default, {
                    src: g,
                    alt: 'Scroll left',
                  }),
                }),
                (0, t.jsx)('button', {
                  type: 'button',
                  onClick: n,
                  children: (0, t.jsx)(o.default, {
                    src: m,
                    alt: 'Scroll right',
                  }),
                }),
              ],
            }),
          ],
        })
      );
    }
    function w(e) {
      let { speakers: i } = e,
        l = (0, s.useRef)(null),
        [r, o] = (0, s.useState)(!1),
        n = (0, s.useRef)(null);
      return (
        a(n, {
          once: !0,
          onEnter: () => {
            o(!0);
          },
        }),
        (0, t.jsxs)('div', {
          ref: n,
          children: [
            (0, t.jsx)(b, {
              speakerCount: i.length,
              onScrollLeft: () => {
                var e;
                null == (e = l.current) || e.scrollPrev();
              },
              onScrollRight: () => {
                var e;
                null == (e = l.current) || e.scrollNext();
              },
            }),
            (0, t.jsx)(c, { speakers: i, carouselRef: l, carouselInView: r }),
          ],
        })
      );
    }
  },
  98559,
  (e) => {
    e.v({
      gdgBag: 'sponsor-module-scss-module__Eswtba__gdgBag',
      logo: 'sponsor-module-scss-module__Eswtba__logo',
      logos: 'sponsor-module-scss-module__Eswtba__logos',
      logosContainer: 'sponsor-module-scss-module__Eswtba__logosContainer',
      slide: 'sponsor-module-scss-module__Eswtba__slide',
      sponsor: 'sponsor-module-scss-module__Eswtba__sponsor',
      sponsoredBy: 'sponsor-module-scss-module__Eswtba__sponsoredBy',
    });
  },
  43191,
  (e) => {
    'use strict';
    e.s(['Sponsor', () => g], 43191);
    var t = e.i(30718),
      s = e.i(11477),
      a = e.i(40388);
    let i = {
        src: e.i(26742).default,
        width: 110,
        height: 76,
        blurWidth: 8,
        blurHeight: 6,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAs0lEQVR42k2OTQuCQBiE9913t4zISldUkjoEFUokdpEKolOX7ANPSdClUCQ8RFehH9CPTiOigbnMDMNDyFcWSKMt0x8LNDMBtSH5FxLADVPjiFuvKYrIReNKi+w36FPJOTA1MUAarJh5d7GTtaFuf0pOgCdc5DumxDZtLGdopD7rPsfYyymhnFQJNH2sr+co712UAw0k10Pt5KAIdaiY5UlQeFK4BPMLHi9kreONi/TClfMbPMsUjQOJv1UAAAAASUVORK5CYII=',
      },
      l = {
        src: e.i(13094).default,
        width: 258,
        height: 72,
        blurWidth: 8,
        blurHeight: 2,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/ABsbG0gQEBBIDAwMSw0NDVYHBwc5CAgIMAgICEsICAhJAB4eHlYUFBRiEBAQhA0NDYAKCgp0Dg4Odg4ODoEODg6D+WcIizReZikAAAAASUVORK5CYII=',
      },
      r = {
        src: e.i(45759).default,
        width: 100,
        height: 42,
        blurWidth: 0,
        blurHeight: 0,
      },
      o = {
        src: e.i(31127).default,
        width: 258,
        height: 54,
        blurWidth: 8,
        blurHeight: 2,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AIQ2GoJSJBFNTCAQSGAoE1x2MBdzbCsUamMoE2JlKhRiAIM2GoFTJBNNSR8PRlwnEllhKBNdYCgSX1MhD1JjKRRfF5APzMCfSd4AAAAASUVORK5CYII=',
      },
      n = {
        src: e.i(33426).default,
        width: 258,
        height: 72,
        blurWidth: 8,
        blurHeight: 2,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANElEQVR42h3HQQoAEBQG4f8dyEJKLKSQ7G3c/ySmt/hqRpIeDjoCFhqyt5ldbKagYiIiYXyC6QQBCOD3RwAAAABJRU5ErkJggg==',
      },
      A = {
        src: e.i(36089).default,
        width: 66,
        height: 81,
        blurWidth: 0,
        blurHeight: 0,
      },
      d = {
        src: e.i(69906).default,
        width: 52,
        height: 52,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAUCAQJQHw89zz8wuv1GP/T9R0X42kFGyl0dIUoEAQICAFAyBj/kcR/X8lgw6bw3Lau0MzOj2EJKzmohJlsEAQECAM+bCr3ynxHsajYOVQ0FBAgKBwoLJhAWIQkHDA0CBQkIAPzLCfbEmgi4EAwBCgQMFxEfVqSYI2K7tyNiu7cjYru0APjMBfa8ngW3DgwACgUOGhEjYrqeKHLYwS2C9e4whv75ALakA72wvgPrNFIGVQMLBggEDxcNCDRHQB6D1d8ndtvOADY+AT9orw3WOLYs6RGLPasIgEuhCZmE2hCTuucOPWRaAAIEAAIXPQs9HJo3uRG6WvUNuWX5CZ1qzwVIRloBBggHP7FaiVrgIc4AAAAASUVORK5CYII=',
      },
      u = {
        src: e.i(6703).default,
        width: 27,
        height: 28,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAk0lEQVR42oWPsQqCUBiF/xuoQeCFbkFDBpENQUFwXyDJpaAHqbWGNidXXV18MRdfxfuNiuBw4HC+A//5xZ8ptfa9QInIe7dJEZ4MJtE8CMvT/nMNF0cHXwhPBhNXUonRtr7EeXU+fBE+WWoLk7vRj9ToZxZH//ZmG4Qng00XBid+qHdi64YUIyPJYOK52mrkTTJYB/RBMFHGgHv3AAAAAElFTkSuQmCC',
      };
    var c = e.i(98559);
    let h = [d, l, n, i, o, r];
    function g() {
      return (0, t.jsxs)(s.motion.section, {
        className: c.default.sponsor,
        initial: { opacity: 0 },
        whileInView: {
          opacity: 1,
          transition: { ease: [0, 0, 0, 1], duration: 1 },
        },
        viewport: { once: !0, margin: '-100px' },
        children: [
          (0, t.jsxs)('div', {
            className: c.default.sponsoredBy,
            children: [
              'OUR 2025 ',
              (0, t.jsx)('br', {}),
              ' PARTNERS',
              (0, t.jsx)(a.default, {
                src: A,
                alt: 'GDG Bag',
                className: c.default.gdgBag,
              }),
            ],
          }),
          (0, t.jsx)('div', {
            className: c.default.logosContainer,
            children: (0, t.jsx)('div', {
              className: c.default.logos,
              children: h
                .concat(h)
                .concat(h)
                .concat(h)
                .map((e, s) =>
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(a.default, {
                        src: e,
                        alt: 'sponsor-'.concat(s),
                        className: c.default.logo,
                      }),
                      (0, t.jsx)(a.default, {
                        src: u,
                        alt: 'split-'.concat(s),
                      }),
                    ],
                  })
                ),
            }),
          }),
        ],
      });
    }
  },
  76757,
  (e) => {
    e.v({
      buttons: 'throwback-module-scss-module__pFbhsW__buttons',
      container: 'throwback-module-scss-module__pFbhsW__container',
      content: 'throwback-module-scss-module__pFbhsW__content',
      description: 'throwback-module-scss-module__pFbhsW__description',
      lane: 'throwback-module-scss-module__pFbhsW__lane',
      memory: 'throwback-module-scss-module__pFbhsW__memory',
      photo: 'throwback-module-scss-module__pFbhsW__photo',
      road: 'throwback-module-scss-module__pFbhsW__road',
      throwback: 'throwback-module-scss-module__pFbhsW__throwback',
      title: 'throwback-module-scss-module__pFbhsW__title',
      tweet: 'throwback-module-scss-module__pFbhsW__tweet',
    });
  },
  26342,
  (e) => {
    'use strict';
    e.s(['default', () => J], 26342);
    var t = e.i(30718),
      s = e.i(11477),
      a = e.i(48783),
      i = e.i(22446);
    class l {
      get finished() {
        return Promise.all(this.animations.map((e) => e.finished));
      }
      getAll(e) {
        return this.animations[0][e];
      }
      setAll(e, t) {
        for (let s = 0; s < this.animations.length; s++)
          this.animations[s][e] = t;
      }
      attachTimeline(e) {
        let t = this.animations.map((t) => t.attachTimeline(e));
        return () => {
          t.forEach((e, t) => {
            (e && e(), this.animations[t].stop());
          });
        };
      }
      get time() {
        return this.getAll('time');
      }
      set time(e) {
        this.setAll('time', e);
      }
      get speed() {
        return this.getAll('speed');
      }
      set speed(e) {
        this.setAll('speed', e);
      }
      get state() {
        return this.getAll('state');
      }
      get startTime() {
        return this.getAll('startTime');
      }
      get duration() {
        return r(this.animations, 'duration');
      }
      get iterationDuration() {
        return r(this.animations, 'iterationDuration');
      }
      runAll(e) {
        this.animations.forEach((t) => t[e]());
      }
      play() {
        this.runAll('play');
      }
      pause() {
        this.runAll('pause');
      }
      cancel() {
        this.runAll('cancel');
      }
      complete() {
        this.runAll('complete');
      }
      constructor(e) {
        ((this.stop = () => this.runAll('stop')),
          (this.animations = e.filter(Boolean)));
      }
    }
    function r(e, t) {
      let s = 0;
      for (let a = 0; a < e.length; a++) {
        let i = e[a][t];
        null !== i && i > s && (s = i);
      }
      return s;
    }
    class o extends l {
      then(e, t) {
        return this.finished.finally(e).then(() => {});
      }
    }
    var n = e.i(20318),
      A = e.i(11404),
      d = e.i(98883),
      u = e.i(18920),
      c = e.i(85969),
      h = e.i(94472),
      g = e.i(98549),
      m = e.i(43297),
      p = e.i(25166),
      f = e.i(19044),
      b = e.i(29590);
    function w(e, t) {
      return (0, b.isEasingArray)(e)
        ? e[
            ((e, t, s) => {
              let a = t - e;
              return ((((s - e) % a) + a) % a) + e;
            })(0, e.length, t)
          ]
        : e;
    }
    var _ = e.i(61132);
    function v(e) {
      return 'object' == typeof e && !Array.isArray(e);
    }
    function y(e, t, s, a) {
      return 'string' == typeof e && v(t)
        ? (0, _.resolveElements)(e, s, a)
        : e instanceof NodeList
          ? Array.from(e)
          : Array.isArray(e)
            ? e
            : [e];
    }
    function k(e, t, s, a) {
      var i;
      return 'number' == typeof t
        ? t
        : t.startsWith('-') || t.startsWith('+')
          ? Math.max(0, e + parseFloat(t))
          : '<' === t
            ? s
            : t.startsWith('<')
              ? Math.max(0, s + parseFloat(t.slice(1)))
              : null != (i = a.get(t))
                ? i
                : e;
    }
    var x = e.i(88244);
    function E(e, t) {
      return e.at !== t.at
        ? e.at - t.at
        : null === e.value
          ? 1
          : null === t.value
            ? -1
            : 0;
    }
    function B(e, t) {
      return (t.has(e) || t.set(e, {}), t.get(e));
    }
    function R(e, t) {
      return (t[e] || (t[e] = []), t[e]);
    }
    let U = (e) => 'number' == typeof e,
      N = (e) => e.every(U);
    var I = e.i(77203),
      j = e.i(24943),
      D = e.i(4542),
      C = e.i(60545),
      S = e.i(38266),
      T = e.i(55898),
      W = e.i(74421);
    class V extends W.VisualElement {
      readValueFromInstance(e, t) {
        if (t in e) {
          let s = e[t];
          if ('string' == typeof s || 'number' == typeof s) return s;
        }
      }
      getBaseTargetFromProps() {}
      removeValueFromRenderState(e, t) {
        delete t.output[e];
      }
      measureInstanceViewportBox() {
        return (0, T.createBox)();
      }
      build(e, t) {
        Object.assign(e.output, t);
      }
      renderInstance(e, t) {
        let { output: s } = t;
        Object.assign(e, s);
      }
      sortInstanceNodePosition() {
        return 0;
      }
      constructor() {
        (super(...arguments), (this.type = 'object'));
      }
    }
    var Q = e.i(9749);
    function G(e) {
      let t = {
          presenceContext: null,
          props: {},
          visualState: {
            renderState: {
              transform: {},
              transformOrigin: {},
              style: {},
              vars: {},
              attrs: {},
            },
            latestValues: {},
          },
        },
        s =
          (0, D.isSVGElement)(e) && !(0, C.isSVGSVGElement)(e)
            ? new Q.SVGVisualElement(t)
            : new S.HTMLVisualElement(t);
      (s.mount(e), I.visualElementStore.set(e, s));
    }
    function Y(e) {
      let t = new V({
        presenceContext: null,
        props: {},
        visualState: { renderState: { output: {} }, latestValues: {} },
      });
      (t.mount(e), I.visualElementStore.set(e, t));
    }
    var L = e.i(9959);
    function O(e, t, s, a) {
      let i = [];
      if (
        (0, d.isMotionValue)(e) ||
        'number' == typeof e ||
        ('string' == typeof e && !v(t))
      )
        i.push(
          (0, L.animateSingleValue)(
            e,
            (v(t) && t.default) || t,
            (s && s.default) || s
          )
        );
      else {
        let l = y(e, t, a),
          r = l.length;
        (0, f.invariant)(
          !!r,
          'No valid elements provided.',
          'no-valid-elements'
        );
        for (let e = 0; e < r; e++) {
          let a = l[e];
          (0, f.invariant)(
            null !== a,
            "You're trying to perform an animation on null. Ensure that selectors are correctly finding elements and refs are correctly hydrated.",
            'animate-null'
          );
          let o = a instanceof Element ? G : Y;
          I.visualElementStore.has(a) || o(a);
          let n = I.visualElementStore.get(a),
            A = { ...s };
          ('delay' in A &&
            'function' == typeof A.delay &&
            (A.delay = A.delay(e, r)),
            i.push(...(0, j.animateTarget)(n, { ...t, transition: A }, {})));
        }
      }
      return i;
    }
    function F(e) {
      return function (t, s, a) {
        let i,
          l = [];
        if (Array.isArray(t) && t.some(Array.isArray))
          l = (function (e, t, s) {
            let a = [];
            return (
              (function (e) {
                let { defaultTransition: t = {}, ...s } =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  a = arguments.length > 2 ? arguments[2] : void 0,
                  i = arguments.length > 3 ? arguments[3] : void 0,
                  l = t.duration || 0.3,
                  r = new Map(),
                  o = new Map(),
                  A = {},
                  b = new Map(),
                  _ = 0,
                  v = 0,
                  U = 0;
                for (let s = 0; s < e.length; s++) {
                  let r = e[s];
                  if ('string' == typeof r) {
                    b.set(r, v);
                    continue;
                  }
                  if (!Array.isArray(r)) {
                    b.set(r.name, k(v, r.at, _, b));
                    continue;
                  }
                  let [m, E, D = {}] = r;
                  void 0 !== D.at && (v = k(v, D.at, _, b));
                  let C = 0,
                    S = function (e, s, a) {
                      var r;
                      let o =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 0,
                        A =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : 0,
                        d = Array.isArray((r = e)) ? r : [r],
                        {
                          delay: m = 0,
                          times: b = (0, u.defaultOffset)(d),
                          type: _ = 'keyframes',
                          repeat: y,
                          repeatType: k,
                          repeatDelay: E = 0,
                          ...B
                        } = s,
                        { ease: R = t.ease || 'easeOut', duration: I } = s,
                        j = 'function' == typeof m ? m(o, A) : m,
                        D = d.length,
                        S = (0, c.isGenerator)(_)
                          ? _
                          : null == i
                            ? void 0
                            : i[_ || 'keyframes'];
                      if (D <= 2 && S) {
                        let e = 100;
                        2 === D && N(d) && (e = Math.abs(d[1] - d[0]));
                        let t = { ...B };
                        void 0 !== I &&
                          (t.duration = (0, p.secondsToMilliseconds)(I));
                        let s = (0, h.createGeneratorEasing)(t, e, S);
                        ((R = s.ease), (I = s.duration));
                      }
                      null != I || (I = l);
                      let T = v + j;
                      1 === b.length && 0 === b[0] && (b[1] = 1);
                      let W = b.length - d.length;
                      if (
                        (W > 0 && (0, g.fillOffset)(b, W),
                        1 === d.length && d.unshift(null),
                        y)
                      ) {
                        (0, f.invariant)(
                          y < 20,
                          'Repeat count too high, must be less than 20',
                          'repeat-count-high'
                        );
                        I *= y + 1;
                        let e = [...d],
                          t = [...b],
                          s = [...(R = Array.isArray(R) ? [...R] : [R])];
                        for (let a = 0; a < y; a++) {
                          d.push(...e);
                          for (let i = 0; i < e.length; i++)
                            (b.push(t[i] + (a + 1)),
                              R.push(0 === i ? 'linear' : w(s, i - 1)));
                        }
                        for (let e = 0; e < b.length; e++)
                          b[e] = b[e] / (y + 1);
                      }
                      let V = T + I;
                      (!(function (e, t, s, a, i, l) {
                        for (let t = 0; t < e.length; t++) {
                          let s = e[t];
                          s.at > i &&
                            s.at < l &&
                            ((0, n.removeItem)(e, s), t--);
                        }
                        for (let r = 0; r < t.length; r++)
                          e.push({
                            value: t[r],
                            at: (0, x.mixNumber)(i, l, a[r]),
                            easing: w(s, r),
                          });
                      })(a, d, R, b, T, V),
                        (C = Math.max(j + I, C)),
                        (U = Math.max(V, U)));
                    };
                  if ((0, d.isMotionValue)(m)) S(E, D, R('default', B(m, o)));
                  else {
                    let e = y(m, E, a, A),
                      t = e.length;
                    for (let s = 0; s < t; s++) {
                      let a = B(e[s], o);
                      for (let e in E) {
                        var I, j;
                        S(
                          E[e],
                          ((I = D),
                          (j = e),
                          I && I[j] ? { ...I, ...I[j] } : { ...I }),
                          R(e, a),
                          s,
                          t
                        );
                      }
                    }
                  }
                  ((_ = v), (v += C));
                }
                return (
                  o.forEach((e, a) => {
                    for (let i in e) {
                      let l = e[i];
                      l.sort(E);
                      let o = [],
                        n = [],
                        A = [];
                      for (let e = 0; e < l.length; e++) {
                        let { at: t, value: s, easing: a } = l[e];
                        (o.push(s),
                          n.push((0, m.progress)(0, U, t)),
                          A.push(a || 'easeOut'));
                      }
                      (0 !== n[0] &&
                        (n.unshift(0), o.unshift(o[0]), A.unshift('easeInOut')),
                        1 !== n[n.length - 1] && (n.push(1), o.push(null)),
                        r.has(a) ||
                          r.set(a, { keyframes: {}, transition: {} }));
                      let d = r.get(a);
                      ((d.keyframes[i] = o),
                        (d.transition[i] = {
                          ...t,
                          duration: U,
                          ease: A,
                          times: n,
                          ...s,
                        }));
                    }
                  }),
                  r
                );
              })(e, t, s, { spring: A.spring }).forEach((e, t) => {
                let { keyframes: s, transition: i } = e;
                a.push(...O(t, s, i));
              }),
              a
            );
          })(t, s, e);
        else {
          let { onComplete: r, ...o } = a || {};
          ('function' == typeof r && (i = r), (l = O(t, s, o, e)));
        }
        let r = new o(l);
        return (
          i && r.finished.then(i),
          e &&
            (e.animations.push(r),
            r.finished.then(() => {
              (0, n.removeItem)(e.animations, r);
            })),
          r
        );
      };
    }
    F();
    var K = e.i(40388),
      P = e.i(19774),
      H = e.i(76757);
    let M = (0, s.motion)(K.default),
      q = [
        {
          width: 765,
          height: 379,
          type: 'tweet',
          src: '/images/@dev_leoo-tweet.png',
          alt: "@dev_leoo's tweet on DevFest Lagos 2024 saying: 'No tech event in the country beats #DevFestLagos!Good job team @gdglagos #DevFestLagos2024'",
        },
        {
          width: 488,
          height: 488,
          type: 'photo',
          src: '/images/devfest-2024-dancing.png',
          alt: 'Some attendees of DevFest Lagos 2024 dancing during the after-party',
        },
        {
          width: 750,
          height: 413,
          type: 'tweet',
          src: '/images/@Motushbae-tweet.png',
          alt: "@Motushbae's tweet on DevFest Lagos 2024 saying: 'Last Saturday, I had an incredible time at #DevFestLagos leading a codelab on OAuth 2.0. I walked participants through the concepts and hands-on implementation, it was rewarding to see so much interaction and learning. Thanks to everyone who came through—y’all made it engaging.'",
        },
        {
          width: 517,
          height: 589,
          type: 'photo',
          src: '/images/devfest-2024-trio.png',
          alt: 'Three attendees of DevFest Lagos 2024 at the DevFest photo booth',
        },
        {
          width: 750,
          height: 380,
          type: 'tweet',
          src: '/images/@adesay0-tweet.png',
          alt: "@adesay0's tweet on DevFest Lagos 2024 saying: 'My very first devfest. My &ldquo;devfirst&rdquo;. I had so much fun and met new people. I must be there next year *if I never japa sha*'",
        },
        {
          width: 450,
          height: 510,
          type: 'photo',
          src: '/images/devfest-2024-speaker.png',
          alt: "John Ohio speaking at DevFest Lagos 2024 on 'Design Thinking for Problem-Solving: Beyond UX Design'",
        },
        {
          width: 750,
          height: 446,
          type: 'tweet',
          src: '/images/@mutiatadebimpe-tweet.png',
          alt: "@mutiatadebimpe's tweet on DevFest Lagos 2024 saying: 'I had an incredible time at #DevFest2024! I met amazing people, gained valuable insights and had a blast! Huge thanks to the team for putting together such an amazing event!@gdglagos #DevFestLagos #Networking #Techcommunity #GrowthJourney'",
        },
      ],
      z = (e) => {
        let { memory: s, idx: l, isPaused: r } = e,
          o = (0, i.useRef)(null),
          [n, A] = (function () {
            var e;
            let t = (0, a.useConstant)(() => ({
                current: null,
                animations: [],
              })),
              s = (0, a.useConstant)(() => F(t));
            return (
              (e = () => {
                (t.animations.forEach((e) => e.stop()),
                  (t.animations.length = 0));
              }),
              (0, i.useEffect)(() => () => e(), []),
              [t, s]
            );
          })(),
          d = (0, i.useRef)(r);
        return (
          (0, i.useEffect)(() => {
            o.current = A(
              n.current,
              { y: '100vh', scale: 1.4, opacity: [0, 1, 1] },
              {
                ease: 'linear',
                delay: 3.5 * l,
                duration: 5,
                repeat: 1 / 0,
                repeatDelay: (q.length - 1) * 3.5,
                opacity: {
                  ease: 'linear',
                  times: [0, 0.2, 1],
                  delay: 3.5 * l,
                  duration: 5,
                  repeat: 1 / 0,
                  repeatDelay: (q.length - 1) * 3.5,
                },
              }
            );
          }, [n, A, l]),
          (0, i.useEffect)(() => {
            d.current = r;
          }, [r]),
          (0, i.useEffect)(() => {
            let e = () => {
              'visible' === document.visibilityState &&
                o.current &&
                (o.current.play(), d.current || (o.current.speed = 1));
            };
            return (
              document.addEventListener('visibilitychange', e),
              () => document.removeEventListener('visibilitychange', e)
            );
          }, []),
          (0, i.useEffect)(() => {
            o.current &&
              (r
                ? A(
                    o.current,
                    { speed: 0.1 },
                    { duration: 0.6, ease: 'easeIn' }
                  )
                : A(
                    o.current,
                    { speed: 1 },
                    { duration: 0.7, ease: 'easeOut' }
                  ));
          }, [r, A]),
          (0, t.jsx)(M, {
            ref: n,
            src: s.src,
            alt: s.alt,
            width: s.width,
            height: s.height,
            className: H.default[s.type],
            initial: { opacity: 0, scale: 1, x: '-50%', y: '-150%' },
          })
        );
      },
      J = () => {
        let e = (function () {
            let [e, t] = (0, i.useState)(!1);
            return (
              (0, i.useEffect)(() => {
                let s = () => {
                    e ||
                      (t(!0),
                      window.addEventListener('mousemove', a, { once: !0 }));
                  },
                  a = () => {
                    e &&
                      (t(!1),
                      window.addEventListener('touchstart', s, { once: !0 }));
                  };
                return (
                  window.addEventListener('touchstart', s, { once: !0 }),
                  window.addEventListener('mousemove', a, { once: !0 }),
                  () => {
                    (window.removeEventListener('touchstart', s),
                      window.removeEventListener('mousemove', a));
                  }
                );
              }, [e]),
              e
            );
          })(),
          [s, a] = (0, i.useState)(!1),
          l = (0, i.useMemo)(
            () =>
              e
                ? { onClick: () => a(!s) }
                : { onMouseEnter: () => a(!0), onMouseLeave: () => a(!1) },
            [e, s]
          );
        return (0, t.jsx)('div', {
          className: H.default.throwback,
          children: (0, t.jsxs)('div', {
            className: H.default.container,
            children: [
              (0, t.jsxs)('div', {
                className: H.default.content,
                children: [
                  (0, t.jsx)('h2', {
                    className: H.default.title,
                    children: "Let's take you down memory lane",
                  }),
                  (0, t.jsx)('p', {
                    className: H.default.description,
                    children:
                      'DevFest Lagos 2024 was unforgettable. A time was thoroughly had and no be by cho cho cho, we have receipts.',
                  }),
                  (0, t.jsxs)('div', {
                    className: H.default.buttons,
                    children: [
                      (0, t.jsx)(P.Button, {
                        type: 'link',
                        className: H.default.button,
                        href: 'https://youtu.be/4HeUaiZLZ34?si=_-n9psHWDKjv36wL',
                        children: 'Watch 2024 Recap',
                      }),
                      (0, t.jsx)(P.Button, {
                        type: 'link',
                        variant: 'secondary',
                        className: H.default.button,
                        href: 'https://photos.app.goo.gl/LyuJgDDFsefN2r5i6',
                        children: 'View 2024 Photos',
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)('div', {
                className: H.default.road,
                ...l,
                children: [
                  (0, t.jsx)(K.default, {
                    alt: 'road',
                    width: 250,
                    height: 914,
                    src: '/lane.svg',
                    className: H.default.lane,
                  }),
                  q.map((e, a) =>
                    (0, t.jsx)(z, { idx: a, memory: e, isPaused: s }, e.src)
                  ),
                ],
              }),
            ],
          }),
        });
      };
  },
  15279,
  (e) => {
    e.v({
      baseImage: 'tracks-module-scss-module__jItYzq__baseImage',
      cloudTrack: 'tracks-module-scss-module__jItYzq__cloudTrack',
      designTrack: 'tracks-module-scss-module__jItYzq__designTrack',
      docsTrack: 'tracks-module-scss-module__jItYzq__docsTrack',
      letter: 'tracks-module-scss-module__jItYzq__letter',
      prodTrack: 'tracks-module-scss-module__jItYzq__prodTrack',
      productTrack: 'tracks-module-scss-module__jItYzq__productTrack',
      promptTrack: 'tracks-module-scss-module__jItYzq__promptTrack',
      subText: 'tracks-module-scss-module__jItYzq__subText',
      text: 'tracks-module-scss-module__jItYzq__text',
      textWrapper: 'tracks-module-scss-module__jItYzq__textWrapper',
      tracks: 'tracks-module-scss-module__jItYzq__tracks',
      webTrack: 'tracks-module-scss-module__jItYzq__webTrack',
    });
  },
  5615,
  (e) => {
    'use strict';
    e.s(['Tracks', () => y], 5615);
    var t = e.i(30718),
      s = e.i(11477),
      a = e.i(40388),
      i = e.i(22446);
    let l = {
        src: e.i(76135).default,
        width: 377,
        height: 277,
        blurWidth: 8,
        blurHeight: 6,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AAAAAAAjKSMfUGtTalF/WYpZn2i/R2VMYhUYFQwDAwMAABgdGBRhj2iid76F+1m2cf5YtnH/Vq5s7k2KWqcoMCkgAFaKX5hBq1z4jMic/7vWwv++2MX/icSZ/0KoXPQ7UD5PAFB9WIZBqVvzbryD/7zXw/+41MD/cLmE/z+qW/tEZUlvABkcGQ1NgVeXSa1i92a0efZgtHX7TZ5f20d+UqIuOC8uAAEBAQAjKSMaPlhCWzxTP1dBYkZwMDsxNBUWFQkICAgBUBRRVG9FeZkAAAAASUVORK5CYII=',
      },
      r = {
        src: e.i(9634).default,
        width: 336,
        height: 237,
        blurWidth: 8,
        blurHeight: 6,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAyklEQVR42jWLTQvBcACH//PyDRy8HDgSuRI+gXKRfAal3JRP4EB5CcnBQWnCarvMZCN/WaMtpRVSnEQpJTOXFdpqh+fy+z0PAAiC+ALeYK6ebRUGeZy5Uo8SXiRdbqfHZDaZgc1pdTWo6pSX2a/wYX8qa2mhYFv0kEwnMqA5qc1XL6ioBydBDV1swxYHMLF35OWlVnNvqKEL5Im4AH/IH+lvujt9VFEDeKelGlmmgcFoMCZS8TSxH55RoSPObuNnfVRhwtFQzGK3OP7HrX1X78NBngAAAABJRU5ErkJggg==',
      },
      o = {
        src: e.i(70788).default,
        width: 325,
        height: 368,
        blurWidth: 7,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/AAQEAwE+My8tkmNZg5VkWodKPTk0CgoKAgAAAAAAPDIuLMtrXsvrWEn961dI/sxjVtVGOTU0BQUFAACPYVeA61VG/exSRP/tXk7/6kw+/oxXTowPDw8DAJdjWYrrUkT+7WVV/+1kVP/rUkP/sl9TvB4dHA8AblFKXeheT/nuZ1j/7mlZ/+1lVf/MX1HbNi8tJQBFODQ03WJT6e1iU//tYFH/7FlK/95gUe9RQTxGACMgHhfFfnDH2IR05r5zZcqcWk+kcU1FdDcxLyQADw4OBFFMRzxBPTk1KCclGBYWFggNDQ0CCAgIABjiWsXPlHRQAAAAAElFTkSuQmCC',
      },
      n = {
        src: e.i(13606).default,
        width: 293,
        height: 337,
        blurWidth: 7,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAw0lEQVR42k2MTQqCUBSFb0/8KUwJ8i8xRE2iFDLNKCqqYSsIgnANzWveqHGj1tEkaAkNCxpWg1pE74FGFw4Xznf4APApDM0muqJt7Ko5k0rlPIUoyMDBq7nPcRy+J93wPozaK1M3GJRDkOiy9khBlks/aHl8gYe1bZhpGX2mvRH5xDJXJQUWmqSmyh8k461rWhAJvHAdhMG/luQYNj1QWJo9x76flS9sueExhj6wCKF9w3FPHc/f1S1nWZHVWCyKOsdwX308O7EswPRdAAAAAElFTkSuQmCC',
      },
      A = {
        src: e.i(86901).default,
        width: 361,
        height: 361,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAEBAQAfHBwVdWhobJqJiauTg4OfXVRUTBMSEggBAQEAACEeHhaKe3ujY1hY+FBHR/9TSkr/dmlp629jY24QEBAFAHZpaXFZUFD4HR0d/0E8PP8vLCz/IB4e/31ubt9DPT0yAJiHh7UuKir/MjIy/z08PP85OTn/KCgo/1dNTfllWlpjAJKCgqc3MzP/Nzc3/0BAQP8+Pj7/LS0t/2JXV/ZdU1NbAGFYWFR1aGjuMzIy/zw8PP85OTn/QD09/4l5ecwzMDAkABQTEwlvY2NxgnNz4WVbW/ltY2P2hnZ2y0tDQ0cODQ0DAAEBAQASEREGRT8/M2RZWWJdU1NaMy8vIw4ODgMBAQEAoo9bGimbAbcAAAAASUVORK5CYII=',
      },
      d = {
        src: e.i(41766).default,
        width: 322,
        height: 322,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqElEQVR42nVPwQqCQBR8dtc+Q1NXlt2K6iNFEPELgiiWxV8QVNago57rYFBfUKf2ScEidBiYYYb3ZsCyLKC+b+/j2L2WJbtpHJLEZUFgowdIlBDhq+v4u+9HID9LSVZR5ACmTdMMiSzzYKhrZhi7L0b9UIrDvWn4JLD96WfbcjimqffvhczzBSwJcbDQtOSlKMiG0jngFB6GzklfGqqKYScst9YLZtr8AIGDjn0cty/dAAAAAElFTkSuQmCC',
      },
      u = {
        src: e.i(31128).default,
        width: 326,
        height: 177,
        blurWidth: 8,
        blurHeight: 4,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/AL2OjrLaiYnX3IaG19yBgdfbgIDXzYKCxlNDQ0MFBQUCANaUlNP8hoX//ISD//x+ff/9cHD//H9//9iAgNZOQkJAANKZlNPvk4T/7paG/++ThP/7amf//Gho/cJ1dcRAODgzAJt5eZKxd3aysHh2srF4d7KydHOyom9voTszMzAGBgYBPklJyrDKl3sAAAAASUVORK5CYII=',
      },
      c = {
        src: e.i(39537).default,
        width: 298,
        height: 149,
        blurWidth: 8,
        blurHeight: 4,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAASklEQVR42n3NOw4AEBAEUM3WzkHJAfwSFaVwLYmr6iSsRKEQxSt2Z5IhsxSP3G3kbJuUnAIAOU+NLIrI7LunpKoQ7C7sILwK34kFtQI3J8LAyXkAAAAASUVORK5CYII=',
      },
      h = {
        src: e.i(61874).default,
        width: 526,
        height: 441,
        blurWidth: 8,
        blurHeight: 7,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR42gHnABj/AAICAgEMDAwHHR0cGi8vLTtBQD1oTUxIoFhXU4QNDQ0FAE9OS21BQD2tODc00zIxL+wsKyn7KSon/15cV8cbGxoTAF1bV7A7PTj/R11M/2GGav9innX/jL+Y/87Kv+M0MzEsAHl3cXzV3sv9a8SJ/1/Bgf9+y5P/xePD/+nk2PVUUk9RAFRST07q5tr14urP/97Rgf/pyWP/9OW7/+7p3ft1c255ADExLyrW0sfh6uPR9tS7g+S3pHvGkYt9nmdlYW04NzUuABUVFA1ta2ZqWFZTWTY1MzAdHBsUDAwMBQYGBgECAgIAvG9l45SMvGoAAAAASUVORK5CYII=',
      },
      g = {
        src: e.i(51242).default,
        width: 482,
        height: 397,
        blurWidth: 8,
        blurHeight: 7,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAVUlEQVR42n3POw7AIAwDUKMOLF0q+oMJ7n9JHOQhAonhDZgEEgAIdFCkkxL9VJThoY+yQs8altC7rOB1QaPqznY3qnavjH/mMGuuG5q0aPKkhqjNQgcN6wSbWvf8oQAAAABJRU5ErkJggg==',
      },
      m = {
        src: e.i(46860).default,
        width: 417,
        height: 425,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAAAAAAAAAAAAQEBAAgIBwQPDw4IBQUEAQAAAAAAAAAAAAEBAQAjJCQbWF5oX3eGnZuAk6+yV11kWQ0NDQUAAAAAABISEgt6jaunXJTw+maZ7v+WrdD/kqrR50tOU0gGBgYBACAfHhdzlczRUo/1/1qU9f9mm/H/WJLx/3SRwMgsLC0fAB0dHBaGocvPcqT3/3Ok9/9xo/f/U5D1/2qW3etBQkQ8ABAQEAl7i6Wkb6Dy/Wie9v95qff/bZ/y/Gx9lqAeHh4RAAICAgAsLS4gY25+fXSQvcZwmdzpd4ysuS4vMCQFBQUAAAAAAAABAQEACQkJAiMjIxY9P0A3JygoHAgICAEAAAAA/2NbapzmE08AAAAASUVORK5CYII=',
      },
      p = {
        src: e.i(18881).default,
        width: 416,
        height: 425,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzElEQVR42lVOvQ7BUBS+vbdXq1FEVdtLKkySSsvQgaFTLZZOQtjYxIS5jGazpYlX4AUkXkA8A+IltNWKfjnfOSfn5zsHgD9QkPaNhX4GEmBzFVxuT7Kasy+2xseSpDkZCqLvFM3wyBh6ou0+SG/7DmmtbkqhbnGhEpMluLu4ylGzGpGY05PE8DINAteZX+IBNSKx1nfCKzoLUIqD+uAg2pvX74TtPkmjvxMQ5mD4Rzqv4pq1zJuzsxRsGiNPDOUToCiAOYHm5SbrRxSXP9leMe2XVku0AAAAAElFTkSuQmCC',
      },
      f = {
        src: e.i(89663).default,
        width: 245,
        height: 369,
        blurWidth: 5,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR42gGoAFf/ABUWFi8mKCijJikpwSEiI20MDAwMACYpKbAlJSX+KScn/ykqKvAeHyBUACQmJ8koKCb/OTY0/yUlJP4eHyB+ACsvLb9hc1//cYZt/1BdTv8eICGLACksK7R4j3X/h6GC/2JzX/8fISGYACYpKaZxhm7/fJR5/19wXf8gIyOkACEjI2g2PjjxOUE5/zQ7NfcgIiJ7AA0NDQweHyBeHyEinR4gIG8TExMUUyY1qM2cdcgAAAAASUVORK5CYII=',
      },
      b = {
        src: e.i(99893).default,
        width: 225,
        height: 342,
        blurWidth: 5,
        blurHeight: 8,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAXElEQVR42k2OSwqAMAxEA4VmU9OvaNWt3v+I+haVLpLAy8wwoqqWcz5qrZeZbc45FUBr7Z8QwiqllHOGMcZ9KHk83JRSl28NeHMRAftsJ04IniFOoQJVqATw3i8v1+gLs81sn00AAAAASUVORK5CYII=',
      };
    var w = e.i(15279);
    let _ = (0, s.motion)(a.default);
    function v(e) {
      let {
          className: s,
          outlineImage: l,
          outlineAlt: r,
          baseImage: o,
          baseAlt: n,
        } = e,
        [A, d] = (0, i.useState)(!1);
      return (0, t.jsxs)('button', {
        type: 'button',
        className: s,
        onClick: () => d(!0),
        children: [
          (0, t.jsx)(a.default, { src: l, alt: r }),
          (0, t.jsx)(_, {
            src: o,
            alt: n,
            className: w.default.baseImage,
            variants: {
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1.3 },
            },
            initial: 'hidden',
            animate: A ? 'visible' : 'hidden',
            transition: {
              stiffness: 800,
              damping: 15,
              mass: 1,
              visualDuration: 0.15,
              type: 'spring',
            },
          }),
        ],
      });
    }
    function y() {
      return (0, t.jsx)('section', {
        className: w.default.tracks,
        children: (0, t.jsxs)('div', {
          className: w.default.textWrapper,
          children: [
            (0, t.jsxs)('h2', {
              className: w.default.text,
              children: [
                "Whatever you’re into, there's a track at"
                  .split(' ')
                  .map((e, a) =>
                    (0, t.jsxs)(
                      s.motion.span,
                      {
                        initial: {
                          translateY: '50%',
                          opacity: 0,
                          filter: 'blurRadius(10px)',
                        },
                        whileInView: {
                          translateY: 0,
                          opacity: 1,
                          filter: 'blurRadius(0px)',
                        },
                        viewport: { once: !0 },
                        transition: {
                          duration: 0.4,
                          delay: 0.05 * a,
                          ease: [0, 0, 0, 1],
                        },
                        className: w.default.letter,
                        children: [e, ' '],
                      },
                      e
                    )
                  ),
                (0, t.jsx)('span', {
                  className: w.default.subText,
                  children: 'DevFest Lagos made just for you.'
                    .split(' ')
                    .map((e, a) =>
                      (0, t.jsxs)(
                        s.motion.span,
                        {
                          initial: {
                            translateY: '50%',
                            opacity: 0,
                            filter: 'blurRadius(10px)',
                          },
                          whileInView: {
                            translateY: 0,
                            opacity: 1,
                            filter: 'blurRadius(0px)',
                          },
                          viewport: { once: !0 },
                          transition: {
                            duration: 0.4,
                            delay: 0.35 + 0.05 * a,
                            ease: [0, 0, 0, 1],
                          },
                          className: w.default.letter,
                          children: [e, ' '],
                        },
                        e
                      )
                    ),
                }),
              ],
            }),
            (0, t.jsx)(v, {
              className: w.default.webTrack,
              outlineImage: b,
              outlineAlt: 'Web Track Outline',
              baseImage: f,
              baseAlt: 'Web Track',
            }),
            (0, t.jsx)(v, {
              className: w.default.promptTrack,
              outlineImage: p,
              outlineAlt: 'Prompts Track Outline',
              baseImage: m,
              baseAlt: 'Prompts Track',
            }),
            (0, t.jsx)(v, {
              className: w.default.productTrack,
              outlineImage: g,
              outlineAlt: 'Product Track Outline',
              baseImage: h,
              baseAlt: 'Product Track',
            }),
            (0, t.jsx)(v, {
              className: w.default.prodTrack,
              outlineImage: c,
              outlineAlt: 'Production Track Outline',
              baseImage: u,
              baseAlt: 'Production Track',
            }),
            (0, t.jsx)(v, {
              className: w.default.docsTrack,
              outlineImage: d,
              outlineAlt: 'Documentation Track Outline',
              baseImage: A,
              baseAlt: 'Documentation Track',
            }),
            (0, t.jsx)(v, {
              className: w.default.designTrack,
              outlineImage: n,
              outlineAlt: 'Design Track Outline',
              baseImage: o,
              baseAlt: 'Design Track',
            }),
            (0, t.jsx)(v, {
              className: w.default.cloudTrack,
              outlineImage: r,
              outlineAlt: 'Cloud Track Outline',
              baseImage: l,
              baseAlt: 'Cloud Track',
            }),
          ],
        }),
      });
    }
  },
]);
