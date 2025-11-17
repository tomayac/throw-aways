(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  60227,
  (e, t, r) => {
    'use strict';
    function n(e) {
      let {
          widthInt: t,
          heightInt: r,
          blurWidth: n,
          blurHeight: o,
          blurDataURL: i,
          objectFit: u,
        } = e,
        l = n ? 40 * n : t,
        a = o ? 40 * o : r,
        s = l && a ? "viewBox='0 0 " + l + ' ' + a + "'" : '';
      return (
        "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
        s +
        "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
        (s
          ? 'none'
          : 'contain' === u
            ? 'xMidYMid'
            : 'cover' === u
              ? 'xMidYMid slice'
              : 'none') +
        "' style='filter: url(%23b);' href='" +
        i +
        "'/%3E%3C/svg%3E"
      );
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'getImageBlurSvg', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  45785,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        VALID_LOADERS: function () {
          return n;
        },
        imageConfigDefault: function () {
          return o;
        },
      }));
    let n = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
      o = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        loaderFile: '',
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 60,
        formats: ['image/webp'],
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: 'attachment',
        localPatterns: void 0,
        remotePatterns: [],
        qualities: void 0,
        unoptimized: !1,
      };
  },
  11421,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'getImgProps', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      e.r(97660));
    let n = e.r(60227),
      o = e.r(45785),
      i = ['-moz-initial', 'fill', 'none', 'scale-down', void 0];
    function u(e) {
      return void 0 !== e.default;
    }
    function l(e) {
      return void 0 === e
        ? e
        : 'number' == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : 'string' == typeof e && /^[0-9]+$/.test(e)
            ? parseInt(e, 10)
            : NaN;
    }
    function a(e, t) {
      var r, a;
      let s,
        c,
        f,
        {
          src: d,
          sizes: p,
          unoptimized: m = !1,
          priority: g = !1,
          loading: h,
          className: y,
          quality: b,
          width: _,
          height: v,
          fill: P = !1,
          style: j,
          overrideSrc: O,
          onLoad: w,
          onLoadingComplete: S,
          placeholder: E = 'empty',
          blurDataURL: x,
          fetchPriority: C,
          decoding: R = 'async',
          layout: M,
          objectFit: I,
          objectPosition: A,
          lazyBoundary: T,
          lazyRoot: N,
          ...z
        } = e,
        { imgConf: D, showAltText: k, blurComplete: L, defaultLoader: U } = t,
        F = D || o.imageConfigDefault;
      if ('allSizes' in F) s = F;
      else {
        let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
          t = F.deviceSizes.sort((e, t) => e - t),
          n = null == (r = F.qualities) ? void 0 : r.sort((e, t) => e - t);
        s = { ...F, allSizes: e, deviceSizes: t, qualities: n };
      }
      if (void 0 === U)
        throw Object.defineProperty(
          Error(
            'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E163', enumerable: !1, configurable: !0 }
        );
      let B = z.loader || U;
      (delete z.loader, delete z.srcSet);
      let G = '__next_img_default' in B;
      if (G) {
        if ('custom' === s.loader)
          throw Object.defineProperty(
            Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E252', enumerable: !1, configurable: !0 }
          );
      } else {
        let e = B;
        B = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (M) {
        'fill' === M && (P = !0);
        let e = {
          intrinsic: { maxWidth: '100%', height: 'auto' },
          responsive: { width: '100%', height: 'auto' },
        }[M];
        e && (j = { ...j, ...e });
        let t = { responsive: '100vw', fill: '100vw' }[M];
        t && !p && (p = t);
      }
      let q = '',
        K = l(_),
        W = l(v);
      if ((a = d) && 'object' == typeof a && (u(a) || void 0 !== a.src)) {
        let e = u(d) ? d.default : d;
        if (!e.src)
          throw Object.defineProperty(
            Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                JSON.stringify(e)
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E460', enumerable: !1, configurable: !0 }
          );
        if (!e.height || !e.width)
          throw Object.defineProperty(
            Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                JSON.stringify(e)
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E48', enumerable: !1, configurable: !0 }
          );
        if (
          ((c = e.blurWidth),
          (f = e.blurHeight),
          (x = x || e.blurDataURL),
          (q = e.src),
          !P)
        )
          if (K || W) {
            if (K && !W) {
              let t = K / e.width;
              W = Math.round(e.height * t);
            } else if (!K && W) {
              let t = W / e.height;
              K = Math.round(e.width * t);
            }
          } else ((K = e.width), (W = e.height));
      }
      let V = !g && ('lazy' === h || void 0 === h);
      ((!(d = 'string' == typeof d ? d : q) ||
        d.startsWith('data:') ||
        d.startsWith('blob:')) &&
        ((m = !0), (V = !1)),
        s.unoptimized && (m = !0),
        G &&
          !s.dangerouslyAllowSVG &&
          d.split('?', 1)[0].endsWith('.svg') &&
          (m = !0));
      let X = l(b),
        H = Object.assign(
          P
            ? {
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: I,
                objectPosition: A,
              }
            : {},
          k ? {} : { color: 'transparent' },
          j
        ),
        J =
          L || 'empty' === E
            ? null
            : 'blur' === E
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: K,
                  heightInt: W,
                  blurWidth: c,
                  blurHeight: f,
                  blurDataURL: x || '',
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + E + '")',
        Q = i.includes(H.objectFit)
          ? 'fill' === H.objectFit
            ? '100% 100%'
            : 'cover'
          : H.objectFit,
        $ = J
          ? {
              backgroundSize: Q,
              backgroundPosition: H.objectPosition || '50% 50%',
              backgroundRepeat: 'no-repeat',
              backgroundImage: J,
            }
          : {},
        Y = (function (e) {
          let {
            config: t,
            src: r,
            unoptimized: n,
            width: o,
            quality: i,
            sizes: u,
            loader: l,
          } = e;
          if (n) return { src: r, srcSet: void 0, sizes: void 0 };
          let { widths: a, kind: s } = (function (e, t, r) {
              let { deviceSizes: n, allSizes: o } = e;
              if (r) {
                let e = /(^|\s)(1?\d?\d)vw/g,
                  t = [];
                for (let n; (n = e.exec(r)); ) t.push(parseInt(n[2]));
                if (t.length) {
                  let e = 0.01 * Math.min(...t);
                  return { widths: o.filter((t) => t >= n[0] * e), kind: 'w' };
                }
                return { widths: o, kind: 'w' };
              }
              return 'number' != typeof t
                ? { widths: n, kind: 'w' }
                : {
                    widths: [
                      ...new Set(
                        [t, 2 * t].map(
                          (e) => o.find((t) => t >= e) || o[o.length - 1]
                        )
                      ),
                    ],
                    kind: 'x',
                  };
            })(t, o, u),
            c = a.length - 1;
          return {
            sizes: u || 'w' !== s ? u : '100vw',
            srcSet: a
              .map(
                (e, n) =>
                  l({ config: t, src: r, quality: i, width: e }) +
                  ' ' +
                  ('w' === s ? e : n + 1) +
                  s
              )
              .join(', '),
            src: l({ config: t, src: r, quality: i, width: a[c] }),
          };
        })({
          config: s,
          src: d,
          unoptimized: m,
          width: K,
          quality: X,
          sizes: p,
          loader: B,
        });
      return {
        props: {
          ...z,
          loading: V ? 'lazy' : h,
          fetchPriority: C,
          width: K,
          height: W,
          decoding: R,
          className: y,
          style: { ...H, ...$ },
          sizes: Y.sizes,
          srcSet: Y.srcSet,
          src: O || Y.src,
        },
        meta: { unoptimized: m, priority: g, placeholder: E, fill: P },
      };
    }
  },
  61035,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(22446),
      o = 'undefined' == typeof window,
      i = o ? () => {} : n.useLayoutEffect,
      u = o ? () => {} : n.useEffect;
    function l(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function l() {
        if (t && t.mountedInstances) {
          let o = n.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(o, e));
        }
      }
      if (o) {
        var a;
        (null == t || null == (a = t.mountedInstances) || a.add(e.children),
          l());
      }
      return (
        i(() => {
          var r;
          return (
            null == t || null == (r = t.mountedInstances) || r.add(e.children),
            () => {
              var r;
              null == t ||
                null == (r = t.mountedInstances) ||
                r.delete(e.children);
            }
          );
        }),
        i(
          () => (
            t && (t._pendingUpdate = l),
            () => {
              t && (t._pendingUpdate = l);
            }
          )
        ),
        u(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  88546,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'AmpStateContext', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = e.r(84033)._(e.r(22446)).default.createContext({});
  },
  33168,
  (e, t, r) => {
    'use strict';
    function n(e) {
      let {
        ampFirst: t = !1,
        hybrid: r = !1,
        hasQuery: n = !1,
      } = void 0 === e ? {} : e;
      return t || (r && n);
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'isInAmpMode', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  13703,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        default: function () {
          return g;
        },
        defaultHead: function () {
          return f;
        },
      }));
    let n = e.r(84033),
      o = e.r(30248),
      i = e.r(30718),
      u = o._(e.r(22446)),
      l = n._(e.r(61035)),
      a = e.r(88546),
      s = e.r(5453),
      c = e.r(33168);
    function f(e) {
      void 0 === e && (e = !1);
      let t = [(0, i.jsx)('meta', { charSet: 'utf-8' }, 'charset')];
      return (
        e ||
          t.push(
            (0, i.jsx)(
              'meta',
              { name: 'viewport', content: 'width=device-width' },
              'viewport'
            )
          ),
        t
      );
    }
    function d(e, t) {
      return 'string' == typeof t || 'number' == typeof t
        ? e
        : t.type === u.default.Fragment
          ? e.concat(
              u.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  'string' == typeof t || 'number' == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
    }
    e.r(97660);
    let p = ['name', 'httpEquiv', 'charSet', 'itemProp'];
    function m(e, t) {
      let { inAmpMode: r } = t;
      return e
        .reduce(d, [])
        .reverse()
        .concat(f(r).reverse())
        .filter(
          (function () {
            let e = new Set(),
              t = new Set(),
              r = new Set(),
              n = {};
            return (o) => {
              let i = !0,
                u = !1;
              if (o.key && 'number' != typeof o.key && o.key.indexOf('$') > 0) {
                u = !0;
                let t = o.key.slice(o.key.indexOf('$') + 1);
                e.has(t) ? (i = !1) : e.add(t);
              }
              switch (o.type) {
                case 'title':
                case 'base':
                  t.has(o.type) ? (i = !1) : t.add(o.type);
                  break;
                case 'meta':
                  for (let e = 0, t = p.length; e < t; e++) {
                    let t = p[e];
                    if (o.props.hasOwnProperty(t))
                      if ('charSet' === t) r.has(t) ? (i = !1) : r.add(t);
                      else {
                        let e = o.props[t],
                          r = n[t] || new Set();
                        ('name' !== t || !u) && r.has(e)
                          ? (i = !1)
                          : (r.add(e), (n[t] = r));
                      }
                  }
              }
              return i;
            };
          })()
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return u.default.cloneElement(e, { key: r });
        });
    }
    let g = function (e) {
      let { children: t } = e,
        r = (0, u.useContext)(a.AmpStateContext),
        n = (0, u.useContext)(s.HeadManagerContext);
      return (0, i.jsx)(l.default, {
        reduceComponentsToState: m,
        headManager: n,
        inAmpMode: (0, c.isInAmpMode)(r),
        children: t,
      });
    };
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  46024,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'ImageConfigContext', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(84033)._(e.r(22446)),
      o = e.r(45785),
      i = n.default.createContext(o.imageConfigDefault);
  },
  92512,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'RouterContext', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = e.r(84033)._(e.r(22446)).default.createContext(null);
  },
  93263,
  (e, t, r) => {
    'use strict';
    function n(e) {
      var t;
      let { config: r, src: n, width: o, quality: i } = e,
        u =
          i ||
          (null == (t = r.qualities)
            ? void 0
            : t.reduce((e, t) =>
                Math.abs(t - 75) < Math.abs(e - 75) ? t : e
              )) ||
          75;
      return (
        r.path +
        '?url=' +
        encodeURIComponent(n) +
        '&w=' +
        o +
        '&q=' +
        u +
        (n.startsWith('/_next/static/media/'), '')
      );
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (n.__next_img_default = !0));
    let o = n;
  },
  19018,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useMergedRef', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(22446);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else (e && (r.current = i(e, n)), t && (o.current = i(t, n)));
        },
        [e, t]
      );
    }
    function i(e, t) {
      if ('function' != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return 'function' == typeof r ? r : () => e(null);
      }
    }
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  81329,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'Image', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }));
    let n = e.r(84033),
      o = e.r(30248),
      i = e.r(30718),
      u = o._(e.r(22446)),
      l = n._(e.r(54803)),
      a = n._(e.r(13703)),
      s = e.r(11421),
      c = e.r(45785),
      f = e.r(46024);
    e.r(97660);
    let d = e.r(92512),
      p = n._(e.r(93263)),
      m = e.r(19018),
      g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function h(e, t, r, n, o, i, u) {
      let l = null == e ? void 0 : e.src;
      e &&
        e['data-loaded-src'] !== l &&
        ((e['data-loaded-src'] = l),
        ('decode' in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (('empty' !== t && o(!0), null == r ? void 0 : r.current)) {
                let t = new Event('load');
                Object.defineProperty(t, 'target', { writable: !1, value: e });
                let n = !1,
                  o = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => o,
                  persist: () => {},
                  preventDefault: () => {
                    ((n = !0), t.preventDefault());
                  },
                  stopPropagation: () => {
                    ((o = !0), t.stopPropagation());
                  },
                });
              }
              (null == n ? void 0 : n.current) && n.current(e);
            }
          }));
    }
    function y(e) {
      return u.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    'undefined' == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, u.forwardRef)((e, t) => {
      let {
          src: r,
          srcSet: n,
          sizes: o,
          height: l,
          width: a,
          decoding: s,
          className: c,
          style: f,
          fetchPriority: d,
          placeholder: p,
          loading: g,
          unoptimized: b,
          fill: _,
          onLoadRef: v,
          onLoadingCompleteRef: P,
          setBlurComplete: j,
          setShowAltText: O,
          sizesInput: w,
          onLoad: S,
          onError: E,
          ...x
        } = e,
        C = (0, u.useCallback)(
          (e) => {
            e && (E && (e.src = e.src), e.complete && h(e, p, v, P, j, b, w));
          },
          [r, p, v, P, j, E, b, w]
        ),
        R = (0, m.useMergedRef)(t, C);
      return (0, i.jsx)('img', {
        ...x,
        ...y(d),
        loading: g,
        width: a,
        height: l,
        decoding: s,
        'data-nimg': _ ? 'fill' : '1',
        className: c,
        style: f,
        sizes: o,
        srcSet: n,
        src: r,
        ref: R,
        onLoad: (e) => {
          h(e.currentTarget, p, v, P, j, b, w);
        },
        onError: (e) => {
          (O(!0), 'empty' !== p && j(!0), E && E(e));
        },
      });
    });
    function _(e) {
      let { isAppRouter: t, imgAttributes: r } = e,
        n = {
          as: 'image',
          imageSrcSet: r.srcSet,
          imageSizes: r.sizes,
          crossOrigin: r.crossOrigin,
          referrerPolicy: r.referrerPolicy,
          ...y(r.fetchPriority),
        };
      return t && l.default.preload
        ? (l.default.preload(r.src, n), null)
        : (0, i.jsx)(a.default, {
            children: (0, i.jsx)(
              'link',
              { rel: 'preload', href: r.srcSet ? void 0 : r.src, ...n },
              '__nimg-' + r.src + r.srcSet + r.sizes
            ),
          });
    }
    let v = (0, u.forwardRef)((e, t) => {
      let r = (0, u.useContext)(d.RouterContext),
        n = (0, u.useContext)(f.ImageConfigContext),
        o = (0, u.useMemo)(() => {
          var e;
          let t = g || n || c.imageConfigDefault,
            r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
            o = t.deviceSizes.sort((e, t) => e - t),
            i = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
          return { ...t, allSizes: r, deviceSizes: o, qualities: i };
        }, [n]),
        { onLoad: l, onLoadingComplete: a } = e,
        m = (0, u.useRef)(l);
      (0, u.useEffect)(() => {
        m.current = l;
      }, [l]);
      let h = (0, u.useRef)(a);
      (0, u.useEffect)(() => {
        h.current = a;
      }, [a]);
      let [y, v] = (0, u.useState)(!1),
        [P, j] = (0, u.useState)(!1),
        { props: O, meta: w } = (0, s.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: o,
          blurComplete: y,
          showAltText: P,
        });
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(b, {
            ...O,
            unoptimized: w.unoptimized,
            placeholder: w.placeholder,
            fill: w.fill,
            onLoadRef: m,
            onLoadingCompleteRef: h,
            setBlurComplete: v,
            setShowAltText: j,
            sizesInput: e.sizes,
            ref: t,
          }),
          w.priority
            ? (0, i.jsx)(_, { isAppRouter: !r, imgAttributes: O })
            : null,
        ],
      });
    });
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  92929,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        default: function () {
          return a;
        },
        getImageProps: function () {
          return l;
        },
      }));
    let n = e.r(84033),
      o = e.r(11421),
      i = e.r(81329),
      u = n._(e.r(93263));
    function l(e) {
      let { props: t } = (0, o.getImgProps)(e, {
        defaultLoader: u.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let a = i.Image;
  },
  40388,
  (e, t, r) => {
    t.exports = e.r(92929);
  },
  34716,
  (e, t, r) => {
    'use strict';
    function n(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
            ? e.push(n)
            : (t[r] = [e, n]);
      }
      return t;
    }
    function o(e) {
      return 'string' == typeof e
        ? e
        : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e
          ? ''
          : String(e);
    }
    function i(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, o(e));
        else t.set(r, o(n));
      return t;
    }
    function u(e) {
      for (
        var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        r[n - 1] = arguments[n];
      for (let t of r) {
        for (let r of t.keys()) e.delete(r);
        for (let [r, n] of t.entries()) e.append(r, n);
      }
      return e;
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        assign: function () {
          return u;
        },
        searchParamsToUrlQuery: function () {
          return n;
        },
        urlQueryToSearchParams: function () {
          return i;
        },
      }));
  },
  7509,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        formatUrl: function () {
          return i;
        },
        formatWithValidation: function () {
          return l;
        },
        urlObjectKeys: function () {
          return u;
        },
      }));
    let n = e.r(30248)._(e.r(34716)),
      o = /https?|ftp|gopher|file/;
    function i(e) {
      let { auth: t, hostname: r } = e,
        i = e.protocol || '',
        u = e.pathname || '',
        l = e.hash || '',
        a = e.query || '',
        s = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
        e.host
          ? (s = t + e.host)
          : r &&
            ((s = t + (~r.indexOf(':') ? '[' + r + ']' : r)),
            e.port && (s += ':' + e.port)),
        a && 'object' == typeof a && (a = String(n.urlQueryToSearchParams(a))));
      let c = e.search || (a && '?' + a) || '';
      return (
        i && !i.endsWith(':') && (i += ':'),
        e.slashes || ((!i || o.test(i)) && !1 !== s)
          ? ((s = '//' + (s || '')), u && '/' !== u[0] && (u = '/' + u))
          : s || (s = ''),
        l && '#' !== l[0] && (l = '#' + l),
        c && '?' !== c[0] && (c = '?' + c),
        '' +
          i +
          s +
          (u = u.replace(/[?#]/g, encodeURIComponent)) +
          (c = c.replace('#', '%23')) +
          l
      );
    }
    let u = [
      'auth',
      'hash',
      'host',
      'hostname',
      'href',
      'path',
      'pathname',
      'port',
      'protocol',
      'query',
      'search',
      'slashes',
    ];
    function l(e) {
      return i(e);
    }
  },
  27907,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        DecodeError: function () {
          return g;
        },
        MiddlewareNotFoundError: function () {
          return _;
        },
        MissingStaticPage: function () {
          return b;
        },
        NormalizeError: function () {
          return h;
        },
        PageNotFoundError: function () {
          return y;
        },
        SP: function () {
          return p;
        },
        ST: function () {
          return m;
        },
        WEB_VITALS: function () {
          return n;
        },
        execOnce: function () {
          return o;
        },
        getDisplayName: function () {
          return s;
        },
        getLocationOrigin: function () {
          return l;
        },
        getURL: function () {
          return a;
        },
        isAbsoluteUrl: function () {
          return u;
        },
        isResSent: function () {
          return c;
        },
        loadGetInitialProps: function () {
          return d;
        },
        normalizeRepeatedSlashes: function () {
          return f;
        },
        stringifyError: function () {
          return v;
        },
      }));
    let n = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function o(e) {
      let t,
        r = !1;
      return function () {
        for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
          o[i] = arguments[i];
        return (r || ((r = !0), (t = e(...o))), t);
      };
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      u = (e) => i.test(e);
    function l() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return e + '//' + t + (r ? ':' + r : '');
    }
    function a() {
      let { href: e } = window.location,
        t = l();
      return e.substring(t.length);
    }
    function s(e) {
      return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
    }
    function c(e) {
      return e.finished || e.headersSent;
    }
    function f(e) {
      let t = e.split('?');
      return (
        t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
        (t[1] ? '?' + t.slice(1).join('?') : '')
      );
    }
    async function d(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await d(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && c(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            '"' +
              s(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E394', enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let p = 'undefined' != typeof performance,
      m =
        p &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e]
        );
    class g extends Error {}
    class h extends Error {}
    class y extends Error {
      constructor(e) {
        (super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = 'Cannot find module for page: ' + e));
      }
    }
    class b extends Error {
      constructor(e, t) {
        (super(),
          (this.message =
            'Failed to load static file for page: ' + e + ' ' + t));
      }
    }
    class _ extends Error {
      constructor() {
        (super(),
          (this.code = 'ENOENT'),
          (this.message = 'Cannot find the middleware module'));
      }
    }
    function v(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  47218,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'isLocalURL', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(27907),
      o = e.r(13165);
    function i(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  29298,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'errorOnce', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  61848,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        default: function () {
          return h;
        },
        useLinkStatus: function () {
          return b;
        },
      }));
    let n = e.r(30248),
      o = e.r(30718),
      i = n._(e.r(22446)),
      u = e.r(7509),
      l = e.r(43097),
      a = e.r(19018),
      s = e.r(27907),
      c = e.r(16802);
    e.r(97660);
    let f = e.r(36086),
      d = e.r(47218),
      p = e.r(65793);
    e.r(29298);
    let m = e.r(21828);
    function g(e) {
      return 'string' == typeof e ? e : (0, u.formatUrl)(e);
    }
    function h(e) {
      var t;
      let r,
        n,
        u,
        [h, b] = (0, i.useOptimistic)(f.IDLE_LINK_STATUS),
        _ = (0, i.useRef)(null),
        {
          href: v,
          as: P,
          children: j,
          prefetch: O = null,
          passHref: w,
          replace: S,
          shallow: E,
          scroll: x,
          onClick: C,
          onMouseEnter: R,
          onTouchStart: M,
          legacyBehavior: I = !1,
          onNavigate: A,
          ref: T,
          unstable_dynamicOnHover: N,
          ...z
        } = e;
      ((r = j),
        I &&
          ('string' == typeof r || 'number' == typeof r) &&
          (r = (0, o.jsx)('a', { children: r })));
      let D = i.default.useContext(l.AppRouterContext),
        k = !1 !== O,
        L =
          !1 !== O
            ? null === (t = O) || 'auto' === t
              ? m.FetchStrategy.PPR
              : m.FetchStrategy.Full
            : m.FetchStrategy.PPR,
        { href: U, as: F } = i.default.useMemo(() => {
          let e = g(v);
          return { href: e, as: P ? g(P) : e };
        }, [v, P]);
      I && (n = i.default.Children.only(r));
      let B = I ? n && 'object' == typeof n && n.ref : T,
        G = i.default.useCallback(
          (e) => (
            null !== D &&
              (_.current = (0, f.mountLinkInstance)(e, U, D, L, k, b)),
            () => {
              (_.current &&
                ((0, f.unmountLinkForCurrentNavigation)(_.current),
                (_.current = null)),
                (0, f.unmountPrefetchableInstance)(e));
            }
          ),
          [k, U, D, L, b]
        ),
        q = {
          ref: (0, a.useMergedRef)(G, B),
          onClick(e) {
            (I || 'function' != typeof C || C(e),
              I &&
                n.props &&
                'function' == typeof n.props.onClick &&
                n.props.onClick(e),
              D &&
                (e.defaultPrevented ||
                  (function (e, t, r, n, o, u, l) {
                    let { nodeName: a } = e.currentTarget;
                    if (
                      !(
                        ('A' === a.toUpperCase() &&
                          (function (e) {
                            let t = e.currentTarget.getAttribute('target');
                            return (
                              (t && '_self' !== t) ||
                              e.metaKey ||
                              e.ctrlKey ||
                              e.shiftKey ||
                              e.altKey ||
                              (e.nativeEvent && 2 === e.nativeEvent.which)
                            );
                          })(e)) ||
                        e.currentTarget.hasAttribute('download')
                      )
                    ) {
                      if (!(0, d.isLocalURL)(t)) {
                        o && (e.preventDefault(), location.replace(t));
                        return;
                      }
                      if ((e.preventDefault(), l)) {
                        let e = !1;
                        if (
                          (l({
                            preventDefault: () => {
                              e = !0;
                            },
                          }),
                          e)
                        )
                          return;
                      }
                      i.default.startTransition(() => {
                        (0, p.dispatchNavigateAction)(
                          r || t,
                          o ? 'replace' : 'push',
                          null == u || u,
                          n.current
                        );
                      });
                    }
                  })(e, U, F, _, S, x, A)));
          },
          onMouseEnter(e) {
            (I || 'function' != typeof R || R(e),
              I &&
                n.props &&
                'function' == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              D && k && (0, f.onNavigationIntent)(e.currentTarget, !0 === N));
          },
          onTouchStart: function (e) {
            (I || 'function' != typeof M || M(e),
              I &&
                n.props &&
                'function' == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              D && k && (0, f.onNavigationIntent)(e.currentTarget, !0 === N));
          },
        };
      return (
        (0, s.isAbsoluteUrl)(F)
          ? (q.href = F)
          : (I && !w && ('a' !== n.type || 'href' in n.props)) ||
            (q.href = (0, c.addBasePath)(F)),
        (u = I
          ? i.default.cloneElement(n, q)
          : (0, o.jsx)('a', { ...z, ...q, children: r })),
        (0, o.jsx)(y.Provider, { value: h, children: u })
      );
    }
    let y = (0, i.createContext)(f.IDLE_LINK_STATUS),
      b = () => (0, i.useContext)(y);
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  9306,
  (e) => {
    e.v({
      button: 'button-module-scss-module__F8D9Gq__button',
      primary: 'button-module-scss-module__F8D9Gq__primary',
      secondary: 'button-module-scss-module__F8D9Gq__secondary',
      small: 'button-module-scss-module__F8D9Gq__small',
      tertiary: 'button-module-scss-module__F8D9Gq__tertiary',
    });
  },
  19774,
  (e) => {
    'use strict';
    e.s(['Button', () => i]);
    var t = e.i(30718),
      r = e.i(76422),
      n = e.i(61848),
      o = e.i(9306);
    function i(e) {
      let { children: i, variant: u = 'primary' } = e,
        l = (0, r.default)(
          o.default.button,
          e.className,
          o.default[u],
          'sm' === e.size && o.default.small
        );
      switch (e.type) {
        case 'link':
          return (0, t.jsx)(n.default, { ...e, className: l, children: i });
        case 'a':
          return (0, t.jsx)('a', { ...e, className: l, children: i });
        default:
          return (0, t.jsx)('button', { ...e, className: l, children: i });
      }
    }
  },
]);
