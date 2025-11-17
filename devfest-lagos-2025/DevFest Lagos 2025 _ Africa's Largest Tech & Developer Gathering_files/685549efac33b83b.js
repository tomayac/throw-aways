(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  97660,
  (e, s, l) => {
    'use strict';
    (Object.defineProperty(l, '__esModule', { value: !0 }),
      Object.defineProperty(l, 'warnOnce', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    let t = (e) => {};
  },
  76422,
  (e) => {
    'use strict';
    e.s(['default', () => s]);
    let s = function () {
      for (var e, s, l = 0, t = '', a = arguments.length; l < a; l++)
        (e = arguments[l]) &&
          (s = (function e(s) {
            var l,
              t,
              a = '';
            if ('string' == typeof s || 'number' == typeof s) a += s;
            else if ('object' == typeof s)
              if (Array.isArray(s)) {
                var o = s.length;
                for (l = 0; l < o; l++)
                  s[l] && (t = e(s[l])) && (a && (a += ' '), (a += t));
              } else for (t in s) s[t] && (a && (a += ' '), (a += t));
            return a;
          })(e)) &&
          (t && (t += ' '), (t += s));
      return t;
    };
  },
  49339,
  (e) => {
    e.v({ icon: 'social-icon-module-scss-module__BBPGbW__icon' });
  },
  33933,
  (e) => {
    'use strict';
    e.s(['SocialIcon', () => c], 33933);
    var s = e.i(30718),
      l = e.i(76422);
    function t(e) {
      let { size: l = 50, className: t } = e;
      return (0, s.jsxs)('svg', {
        width: l,
        height: l,
        viewBox: '0 0 50 50',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        className: t,
        'aria-hidden': !0,
        focusable: 'false',
        children: [
          (0, s.jsx)('rect', {
            width: '50',
            height: '50',
            rx: '25',
            fill: 'var(--icon-bg, #1E1E1E)',
          }),
          (0, s.jsx)('path', {
            d: 'M30.5 15H27.5C26.1739 15 24.9021 15.5268 23.9645 16.4645C23.0268 17.4021 22.5 18.6739 22.5 20V23H19.5V27H22.5V35H26.5V27H29.5L30.5 23H26.5V20C26.5 19.7348 26.6054 19.4804 26.7929 19.2929C26.9804 19.1054 27.2348 19 27.5 19H30.5V15Z',
            stroke: 'currentColor',
            strokeWidth: '1.25',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        ],
      });
    }
    function a(e) {
      let { size: l = 50, className: t } = e;
      return (0, s.jsxs)('svg', {
        width: l,
        height: l,
        viewBox: '0 0 50 50',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        className: t,
        'aria-hidden': !0,
        focusable: 'false',
        children: [
          (0, s.jsx)('rect', {
            width: '50',
            height: '50',
            rx: '25',
            fill: 'var(--icon-bg, #1E1E1E)',
          }),
          (0, s.jsxs)('g', {
            clipPath: 'url(#clip0)',
            children: [
              (0, s.jsx)('path', {
                d: 'M25 16.8008C27.6719 16.8008 27.9883 16.8125 29.0391 16.8594C30.0156 16.9023 30.543 17.0664 30.8945 17.2031C31.3594 17.3828 31.6953 17.6016 32.043 17.9492C32.3945 18.3008 32.6094 18.6328 32.7891 19.0977C32.9258 19.4492 33.0898 19.9805 33.1328 20.9531C33.1797 22.0078 33.1914 22.3242 33.1914 24.9922C33.1914 27.6641 33.1797 27.9805 33.1328 29.0313C33.0898 30.0078 32.9258 30.5352 32.7891 30.8867C32.6094 31.3516 32.3906 31.6875 32.043 32.0352C31.6914 32.3867 31.3594 32.6016 30.8945 32.7813C30.543 32.918 30.0117 33.082 29.0391 33.125C27.9844 33.1719 27.668 33.1836 25 33.1836C22.3281 33.1836 22.0117 33.1719 20.9609 33.125C19.9844 33.082 19.457 32.918 19.1055 32.7813C18.6406 32.6016 18.3047 32.3828 17.957 32.0352C17.6055 31.6836 17.3906 31.3516 17.2109 30.8867C17.0742 30.5352 16.9102 30.0039 16.8672 29.0313C16.8203 27.9766 16.8086 27.6602 16.8086 24.9922C16.8086 22.3203 16.8203 22.0039 16.8672 20.9531C16.9102 19.9766 17.0742 19.4492 17.2109 19.0977C17.3906 18.6328 17.6094 18.2969 17.957 17.9492C18.3086 17.5977 18.6406 17.3828 19.1055 17.2031C19.457 17.0664 19.9883 16.9023 20.9609 16.8594C22.0117 16.8125 22.3281 16.8008 25 16.8008ZM25 15C22.2852 15 21.9453 15.0117 20.8789 15.0586C19.8164 15.1055 19.0859 15.2773 18.4531 15.5234C17.793 15.7812 17.2344 16.1211 16.6797 16.6797C16.1211 17.2344 15.7813 17.793 15.5234 18.4492C15.2773 19.0859 15.1055 19.8125 15.0586 20.875C15.0117 21.9453 15 22.2852 15 25C15 27.7148 15.0117 28.0547 15.0586 29.1211C15.1055 30.1836 15.2773 30.9141 15.5234 31.5469C15.7813 32.207 16.1211 32.7656 16.6797 33.3203C17.2344 33.875 17.793 34.2188 18.4492 34.4727C19.0859 34.7188 19.8125 34.8906 20.875 34.9375C21.9414 34.9844 22.2813 34.9961 24.9961 34.9961C27.7109 34.9961 28.0508 34.9844 29.1172 34.9375C30.1797 34.8906 30.9102 34.7188 31.543 34.4727C32.1992 34.2188 32.7578 33.875 33.3125 33.3203C33.8672 32.7656 34.2109 32.207 34.4648 31.5508C34.7109 30.9141 34.8828 30.1875 34.9297 29.125C34.9766 28.0586 34.9883 27.7188 34.9883 25.0039C34.9883 22.2891 34.9766 21.9492 34.9297 20.8828C34.8828 19.8203 34.7109 19.0898 34.4648 18.457C34.2188 17.793 33.8789 17.2344 33.3203 16.6797C32.7656 16.125 32.207 15.7813 31.5508 15.5273C30.9141 15.2812 30.1875 15.1094 29.125 15.0625C28.0547 15.0117 27.7148 15 25 15Z',
                fill: 'currentColor',
              }),
              (0, s.jsx)('path', {
                d: 'M25 19.8633C22.1641 19.8633 19.8633 22.1641 19.8633 25C19.8633 27.8359 22.1641 30.1367 25 30.1367C27.8359 30.1367 30.1367 27.8359 30.1367 25C30.1367 22.1641 27.8359 19.8633 25 19.8633ZM25 28.332C23.1602 28.332 21.668 26.8398 21.668 25C21.668 23.1602 23.1602 21.668 25 21.668C26.8398 21.668 28.332 23.1602 28.332 25C28.332 26.8398 26.8398 28.332 25 28.332Z',
                fill: 'currentColor',
              }),
              (0, s.jsx)('path', {
                d: 'M31.5391 19.6602C31.5391 20.3242 31 20.8594 30.3398 20.8594C29.6758 20.8594 29.1406 20.3203 29.1406 19.6602C29.1406 18.9961 29.6797 18.4609 30.3398 18.4609C31 18.4609 31.5391 19 31.5391 19.6602Z',
                fill: 'currentColor',
              }),
            ],
          }),
          (0, s.jsx)('defs', {
            children: (0, s.jsx)('clipPath', {
              id: 'clip0',
              children: (0, s.jsx)('rect', {
                width: '20',
                height: '20',
                fill: 'white',
                transform: 'translate(15 15)',
              }),
            }),
          }),
        ],
      });
    }
    function o(e) {
      let { size: l = 50, className: t } = e;
      return (0, s.jsxs)('svg', {
        width: l,
        height: l,
        viewBox: '0 0 50 50',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        className: t,
        'aria-hidden': !0,
        focusable: 'false',
        children: [
          (0, s.jsx)('rect', {
            width: '50',
            height: '50',
            rx: '25',
            fill: 'var(--icon-bg, #1E1E1E)',
          }),
          (0, s.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M17.6829 15C16.9714 15 16.289 15.2827 15.7858 15.7858C15.2827 16.289 15 16.9714 15 17.6829C15 18.3945 15.2827 19.0769 15.7858 19.58C16.289 20.0832 16.9714 20.3659 17.6829 20.3659C18.3945 20.3659 19.0769 20.0832 19.58 19.58C20.0832 19.0769 20.3659 18.3945 20.3659 17.6829C20.3659 16.9714 20.0832 16.289 19.58 15.7858C19.0769 15.2827 18.3945 15 17.6829 15ZM16.4634 17.6829C16.4634 17.3595 16.5919 17.0493 16.8206 16.8206C17.0493 16.5919 17.3595 16.4634 17.6829 16.4634C18.0064 16.4634 18.3165 16.5919 18.5453 16.8206C18.774 17.0493 18.9024 17.3595 18.9024 17.6829C18.9024 18.0064 18.774 18.3165 18.5453 18.5453C18.3165 18.774 18.0064 18.9024 17.6829 18.9024C17.3595 18.9024 17.0493 18.774 16.8206 18.5453C16.5919 18.3165 16.4634 18.0064 16.4634 17.6829ZM15 21.5854C15 21.3913 15.0771 21.2052 15.2143 21.068C15.3515 20.9307 15.5376 20.8537 15.7317 20.8537H19.6341C19.8282 20.8537 20.0143 20.9307 20.1515 21.068C20.2888 21.2052 20.3659 21.3913 20.3659 21.5854V34.2683C20.3659 34.4624 20.2888 34.6485 20.1515 34.7857C20.0143 34.9229 19.8282 35 19.6341 35H15.7317C15.5376 35 15.3515 34.9229 15.2143 34.7857C15.0771 34.6485 15 34.4624 15 34.2683V21.5854ZM16.4634 22.3171V33.5366H18.9024V22.3171H16.4634ZM21.8293 21.5854C21.8293 21.3913 21.9064 21.2052 22.0436 21.068C22.1808 20.9307 22.3669 20.8537 22.561 20.8537H26.4634C26.6575 20.8537 26.8436 20.9307 26.9808 21.068C27.118 21.2052 27.1951 21.3913 27.1951 21.5854V22.0088L27.6195 21.8263C28.3512 21.5136 29.1275 21.3178 29.92 21.2459C32.6273 21 35 23.1268 35 25.8585V34.2683C35 34.4624 34.9229 34.6485 34.7857 34.7857C34.6485 34.9229 34.4624 35 34.2683 35H30.3659C30.1718 35 29.9857 34.9229 29.8485 34.7857C29.7112 34.6485 29.6341 34.4624 29.6341 34.2683V27.439C29.6341 27.1156 29.5057 26.8054 29.277 26.5767C29.0483 26.348 28.7381 26.2195 28.4146 26.2195C28.0912 26.2195 27.781 26.348 27.5523 26.5767C27.3236 26.8054 27.1951 27.1156 27.1951 27.439V34.2683C27.1951 34.4624 27.118 34.6485 26.9808 34.7857C26.8436 34.9229 26.6575 35 26.4634 35H22.561C22.3669 35 22.1808 34.9229 22.0436 34.7857C21.9064 34.6485 21.8293 34.4624 21.8293 34.2683V21.5854ZM23.2927 22.3171V33.5366H25.7317V27.439C25.7317 26.7275 26.0144 26.0451 26.5175 25.5419C27.0207 25.0388 27.7031 24.7561 28.4146 24.7561C29.1262 24.7561 29.8086 25.0388 30.3118 25.5419C30.8149 26.0451 31.0976 26.7275 31.0976 27.439V33.5366H33.5366V25.8585C33.5366 24.001 31.9161 22.5337 30.0537 22.7034C29.4138 22.7616 28.7871 22.9196 28.1961 23.1717L26.7522 23.7912C26.6408 23.8391 26.5193 23.8585 26.3986 23.8477C26.2779 23.837 26.1617 23.7964 26.0605 23.7297C25.9593 23.663 25.8763 23.5721 25.8189 23.4654C25.7615 23.3586 25.7316 23.2393 25.7317 23.118V22.3171H23.2927Z',
            fill: 'currentColor',
          }),
        ],
      });
    }
    var i = e.i(49339);
    function r(e) {
      let { size: l = 50, className: t } = e;
      return (0, s.jsxs)('svg', {
        width: l,
        height: l,
        viewBox: '0 0 50 50',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        className: t,
        'aria-hidden': !0,
        focusable: 'false',
        children: [
          (0, s.jsx)('rect', {
            width: '50',
            height: '50',
            rx: '25',
            fill: 'var(--icon-bg, #1E1E1E)',
          }),
          (0, s.jsx)('path', {
            d: 'M31.1106 15H34.3691L27.2503 23.4718L35.625 35H29.0677L23.9317 28.0082L18.0551 35H14.7946L22.4089 25.9385L14.375 15H21.0988L25.7412 21.3908L31.1106 15ZM29.967 32.9692H31.7726L20.1177 16.9241H18.1802L29.967 32.9692Z',
            fill: 'currentColor',
          }),
        ],
      });
    }
    function n(e) {
      let { size: l = 50, className: t } = e;
      return (0, s.jsxs)('svg', {
        width: l,
        height: l,
        viewBox: '0 0 50 50',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        className: t,
        'aria-hidden': !0,
        focusable: 'false',
        children: [
          (0, s.jsx)('rect', {
            width: '50',
            height: '50',
            rx: '25',
            fill: 'var(--icon-bg, #1E1E1E)',
          }),
          (0, s.jsx)('path', {
            d: 'M34.8008 21C34.8008 21 34.6055 19.6211 34.0039 19.0156C33.2422 18.2188 32.3906 18.2148 32 18.168C29.2031 17.9648 25.0039 17.9648 25.0039 17.9648H24.9961C24.9961 17.9648 20.7969 17.9648 18 18.168C17.6094 18.2148 16.7578 18.2188 15.9961 19.0156C15.3945 19.6211 15.2031 21 15.2031 21C15.2031 21 15 22.6211 15 24.2383V25.7539C15 27.3711 15.1992 28.9922 15.1992 28.9922C15.1992 28.9922 15.3945 30.3711 15.9922 30.9766C16.7539 31.7734 17.7539 31.7461 18.1992 31.832C19.8008 31.9844 25 32.0313 25 32.0313C25 32.0313 29.2031 32.0234 32 31.8242C32.3906 31.7773 33.2422 31.7734 34.0039 30.9766C34.6055 30.3711 34.8008 28.9922 34.8008 28.9922C34.8008 28.9922 35 27.375 35 25.7539V24.2383C35 22.6211 34.8008 21 34.8008 21ZM22.9336 27.5937V21.9727L28.3359 24.793L22.9336 27.5937Z',
            fill: 'currentColor',
          }),
        ],
      });
    }
    function c(e) {
      let { name: c, size: d = 50, className: u } = e,
        m = String(c).toLowerCase(),
        h = (0, l.default)(i.default.icon, u);
      switch (m) {
        case 'twitter':
        case 'x':
          return (0, s.jsx)(r, { size: d, className: h });
        case 'instagram':
          return (0, s.jsx)(a, { size: d, className: h });
        case 'facebook':
        case 'github':
          return (0, s.jsx)(t, { size: d, className: h });
        case 'youtube':
          return (0, s.jsx)(n, { size: d, className: h });
        case 'linkedin':
          return (0, s.jsx)(o, { size: d, className: h });
        default:
          return null;
      }
    }
  },
  28177,
  (e, s, l) => {
    s.exports = e.r(27619);
  },
  51507,
  (e) => {
    e.v('/_next/static/media/close.c549667b.svg');
  },
  80461,
  (e) => {
    e.v('/_next/static/media/hamburger.bc05a2ab.svg');
  },
  57999,
  (e) => {
    e.v('/_next/static/media/nav-logo.5a805afd.svg');
  },
  40802,
  (e) => {
    e.v({
      container: 'footer-module-scss-module__RHsmuG__container',
      content: 'footer-module-scss-module__RHsmuG__content',
      copyright: 'footer-module-scss-module__RHsmuG__copyright',
      cta: 'footer-module-scss-module__RHsmuG__cta',
      desktopImage: 'footer-module-scss-module__RHsmuG__desktopImage',
      footer: 'footer-module-scss-module__RHsmuG__footer',
      image: 'footer-module-scss-module__RHsmuG__image',
      left: 'footer-module-scss-module__RHsmuG__left',
      link: 'footer-module-scss-module__RHsmuG__link',
      links: 'footer-module-scss-module__RHsmuG__links',
      mobileCta: 'footer-module-scss-module__RHsmuG__mobileCta',
      mobileImage: 'footer-module-scss-module__RHsmuG__mobileImage',
      nowrap: 'footer-module-scss-module__RHsmuG__nowrap',
      right: 'footer-module-scss-module__RHsmuG__right',
      socialHeading: 'footer-module-scss-module__RHsmuG__socialHeading',
      socialIcons: 'footer-module-scss-module__RHsmuG__socialIcons',
      socialLink: 'footer-module-scss-module__RHsmuG__socialLink',
      socialSection: 'footer-module-scss-module__RHsmuG__socialSection',
      sticker: 'footer-module-scss-module__RHsmuG__sticker',
      title: 'footer-module-scss-module__RHsmuG__title',
    });
  },
  77638,
  (e) => {
    'use strict';
    e.s(['Footer', () => u]);
    var s = e.i(30718),
      l = e.i(11477),
      t = e.i(40388),
      a = e.i(61848),
      o = e.i(19774),
      i = e.i(33933),
      r = e.i(40802);
    let n = (0, l.motion)(t.default),
      c = {
        topLeft: [
          { label: 'Schedule', href: '/schedule' },
          { label: 'Speakers', href: '/speakers' },
          {
            label: 'DP Generator',
            href: 'https://devfestlagos.com/dp-generator',
          },
        ],
        topRight: [
          { label: 'Login', href: 'https://tickets.devfestlagos.com/login' },
          {
            label: 'Join the Community',
            href: 'https://gdg.community.dev/gdg-lagos/',
          },
        ],
        bottomLeft: [
          { label: 'FAQs', href: '/faqs' },
          {
            label: 'Privacy Policy',
            href: 'https://policies.google.com/privacy',
          },
          {
            label: 'Community Guidelines',
            href: 'https://www.google.com/events/policy/anti-harassmentpolicy.html',
          },
        ],
      },
      d = [
        { name: 'Twitter', href: 'https://x.com/gdglagos' },
        { name: 'Instagram', href: 'https://www.instagram.com/gdglagos/' },
        {
          name: 'Facebook',
          href: 'https://web.facebook.com/people/Google-Developers-Group-Lagos/100075612535619/',
        },
        { name: 'YouTube', href: 'https://www.youtube.com/@GDGLagos' },
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/company/gdg-lagos',
        },
      ];
    function u() {
      return (0, s.jsx)('footer', {
        className: r.default.footer,
        children: (0, s.jsxs)('div', {
          className: r.default.container,
          children: [
            (0, s.jsx)(n, {
              width: 177,
              height: 177,
              className: r.default.sticker,
              src: '/stickers/world-class-energy-globe.svg',
              alt: "'World Class Energy' written above a green globe",
              initial: { scale: 0.5, opacity: 0 },
              whileInView: { scale: 1, opacity: 1 },
              viewport: { once: !0, amount: 0.5 },
              transition: { duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] },
            }),
            (0, s.jsxs)('div', {
              className: r.default.title,
              children: [
                (0, s.jsx)('span', { children: 'DevFest' }),
                (0, s.jsx)(o.Button, {
                  type: 'link',
                  href: 'https://tickets.devfestlagos.com/buy',
                  className: r.default.cta,
                  target: '_blank',
                  children: 'Buy Tickets',
                }),
                (0, s.jsx)('br', {}),
                (0, s.jsx)('span', {
                  className: r.default.nowrap,
                  children: 'Lagos 2025',
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className: r.default.content,
              children: [
                (0, s.jsxs)('div', {
                  className: r.default.left,
                  children: [
                    (0, s.jsx)('ul', {
                      className: r.default.links,
                      children: c.topLeft.map((e) =>
                        (0, s.jsx)(
                          'li',
                          {
                            className: r.default.link,
                            children: e.href.startsWith('/')
                              ? (0, s.jsx)(a.default, {
                                  href: e.href,
                                  children: e.label,
                                })
                              : (0, s.jsx)('a', {
                                  href: e.href,
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  children: e.label,
                                }),
                          },
                          e.href
                        )
                      ),
                    }),
                    (0, s.jsx)('ul', {
                      className: r.default.links,
                      children: c.topRight.map((e) =>
                        (0, s.jsx)(
                          'li',
                          {
                            className: r.default.link,
                            children: e.href.startsWith('/')
                              ? (0, s.jsx)(a.default, {
                                  href: e.href,
                                  children: e.label,
                                })
                              : (0, s.jsx)('a', {
                                  href: e.href,
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  children: e.label,
                                }),
                          },
                          e.href
                        )
                      ),
                    }),
                    (0, s.jsx)('ul', {
                      className: r.default.links,
                      children: c.bottomLeft.map((e) =>
                        (0, s.jsx)(
                          'li',
                          {
                            className: r.default.link,
                            children: e.href.startsWith('/')
                              ? (0, s.jsx)(a.default, {
                                  href: e.href,
                                  children: e.label,
                                })
                              : (0, s.jsx)('a', {
                                  href: e.href,
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  children: e.label,
                                }),
                          },
                          e.href
                        )
                      ),
                    }),
                    (0, s.jsxs)('div', {
                      className: r.default.socialSection,
                      children: [
                        (0, s.jsx)('h3', {
                          className: r.default.socialHeading,
                          children: 'Follow Us:',
                        }),
                        (0, s.jsx)('div', {
                          className: r.default.socialIcons,
                          children: d.map((e) =>
                            (0, s.jsx)(
                              'a',
                              {
                                target: '_blank',
                                href: e.href,
                                rel: 'noopener noreferrer',
                                className: r.default.socialLink,
                                'aria-label': 'Follow us on '.concat(e.name),
                                children: (0, s.jsx)(i.SocialIcon, {
                                  name: e.name.toLowerCase(),
                                  size: 50,
                                }),
                              },
                              e.name
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: r.default.right,
                  children: [
                    (0, s.jsx)(o.Button, {
                      size: 'sm',
                      type: 'link',
                      href: 'https://tickets.devfestlagos.com/buy',
                      target: '_blank',
                      className: r.default.mobileCta,
                      children: 'Buy Tickets',
                    }),
                    (0, s.jsx)(t.default, {
                      width: 2500,
                      height: 1407,
                      quality: 100,
                      src: '/footer.webp',
                      alt: 'DevFest Lagos Community',
                      className: r.default.desktopImage,
                    }),
                    (0, s.jsx)(t.default, {
                      width: 2e3,
                      height: 1126,
                      quality: 100,
                      src: './image.webp',
                      alt: 'DevFest Lagos Community',
                      className: r.default.mobileImage,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)('p', {
              className: r.default.copyright,
              children: [
                '© ',
                new Date().getFullYear(),
                ' DevFest Lagos. All Rights Reserved.',
              ],
            }),
          ],
        }),
      });
    }
  },
  9410,
  (e) => {
    e.v({
      active: 'navbar-module-scss-module__Z5wYAG__active',
      buyTicket: 'navbar-module-scss-module__Z5wYAG__buyTicket',
      faqs: 'navbar-module-scss-module__Z5wYAG__faqs',
      link: 'navbar-module-scss-module__Z5wYAG__link',
      links: 'navbar-module-scss-module__Z5wYAG__links',
      logo: 'navbar-module-scss-module__Z5wYAG__logo',
      mobileNav: 'navbar-module-scss-module__Z5wYAG__mobileNav',
      mobileNavButton: 'navbar-module-scss-module__Z5wYAG__mobileNavButton',
      mobileNavClose: 'navbar-module-scss-module__Z5wYAG__mobileNavClose',
      navbar: 'navbar-module-scss-module__Z5wYAG__navbar',
      navbarBackground: 'navbar-module-scss-module__Z5wYAG__navbarBackground',
      open: 'navbar-module-scss-module__Z5wYAG__open',
      schedule: 'navbar-module-scss-module__Z5wYAG__schedule',
      speakers: 'navbar-module-scss-module__Z5wYAG__speakers',
      team: 'navbar-module-scss-module__Z5wYAG__team',
      topRow: 'navbar-module-scss-module__Z5wYAG__topRow',
    });
  },
  53959,
  (e) => {
    'use strict';
    e.s(['Navbar', () => f], 53959);
    var s = e.i(30718),
      l = e.i(76422),
      t = e.i(11477),
      a = e.i(40388),
      o = e.i(61848),
      i = e.i(28177),
      r = e.i(22446);
    let n = {
        src: e.i(51507).default,
        width: 24,
        height: 24,
        blurWidth: 0,
        blurHeight: 0,
      },
      c = {
        src: e.i(80461).default,
        width: 24,
        height: 24,
        blurWidth: 0,
        blurHeight: 0,
      },
      d = {
        src: e.i(57999).default,
        width: 137,
        height: 18,
        blurWidth: 0,
        blurHeight: 0,
      };
    var u = e.i(19774),
      m = e.i(9410);
    let h = [
      { link: '/schedule', text: 'Schedule' },
      { link: '/speakers', text: 'Speakers' },
      { link: '/faqs', text: 'FAQs' },
      { link: '/team', text: 'Team' },
    ];
    function f() {
      let [e, f] = (0, r.useState)(!1),
        C = (0, i.usePathname)(),
        _ = '/' === C;
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)('div', {
            className: m.default.navbarBackground,
            children: (0, s.jsxs)(t.motion.nav, {
              className: m.default.navbar,
              initial: { opacity: +!_, y: 23 * !!_ },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 1, ease: [0, 0, 0, 1], delay: 0.6 },
              children: [
                (0, s.jsx)(o.default, {
                  href: '/',
                  className: m.default.logo,
                  children: (0, s.jsx)(a.default, {
                    src: d,
                    alt: 'DevFest Lagos',
                  }),
                }),
                (0, s.jsx)('ul', {
                  className: m.default.links,
                  children: h.map((e) =>
                    (0, s.jsx)(
                      'li',
                      {
                        children: (0, s.jsx)(o.default, {
                          href: e.link,
                          onClick: () => f(!1),
                          className: (0, l.default)(
                            m.default.link,
                            m.default[e.link.replace('/', '')],
                            { [m.default.active]: C === e.link }
                          ),
                          children: e.text,
                        }),
                      },
                      e.link
                    )
                  ),
                }),
                (0, s.jsx)(u.Button, {
                  href: 'https://tickets.devfestlagos.com/buy',
                  target: '_blank',
                  type: 'link',
                  size: 'sm',
                  className: m.default.buyTicket,
                  children: 'BUY TICKETS',
                }),
                (0, s.jsx)(u.Button, {
                  className: m.default.mobileNavButton,
                  onClick: () => f(!0),
                  children: (0, s.jsx)(a.default, { src: c, alt: 'Open menu' }),
                }),
              ],
            }),
          }),
          (0, s.jsxs)('aside', {
            className: (0, l.default)(m.default.mobileNav, {
              [m.default.open]: e,
            }),
            children: [
              (0, s.jsxs)('div', {
                className: m.default.topRow,
                children: [
                  (0, s.jsx)(o.default, {
                    href: '/',
                    className: m.default.logo,
                    children: (0, s.jsx)(a.default, {
                      src: d,
                      alt: 'DevFest Lagos',
                    }),
                  }),
                  (0, s.jsx)(u.Button, {
                    className: m.default.mobileNavClose,
                    onClick: () => f(!1),
                    children: (0, s.jsx)(a.default, {
                      src: n,
                      alt: 'Close menu',
                    }),
                  }),
                ],
              }),
              (0, s.jsx)('ul', {
                className: m.default.links,
                children: h.map((e) =>
                  (0, s.jsx)(
                    'li',
                    {
                      children: (0, s.jsx)(o.default, {
                        href: e.link,
                        onClick: () => f(!1),
                        className: (0, l.default)(m.default.link, {
                          [m.default.active]: C === e.link,
                        }),
                        children: e.text,
                      }),
                    },
                    e.link
                  )
                ),
              }),
              (0, s.jsx)(u.Button, {
                className: m.default.buyTicket,
                href: 'https://tickets.devfestlagos.com/buy',
                target: '_blank',
                type: 'link',
                children: 'BUY TICKETS',
              }),
            ],
          }),
        ],
      });
    }
  },
]);
