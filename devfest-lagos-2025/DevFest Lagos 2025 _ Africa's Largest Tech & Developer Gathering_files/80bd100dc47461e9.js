(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  99966,
  (t) => {
    'use strict';
    t.s(['default', () => r]);
    var e = t.i(30718),
      s = t.i(28177),
      i = t.i(22446);
    function n() {
      let t = (0, s.useSearchParams)(),
        i = (0, s.usePathname)(),
        n = i + '?' + t.toString();
      return (
        '/claim' === i &&
          (location.href = 'https://tickets.devfestlagos.com' + n),
        (0, e.jsx)(e.Fragment, {})
      );
    }
    function r() {
      return (0, e.jsx)(i.Suspense, { children: (0, e.jsx)(n, {}) });
    }
  },
]);
