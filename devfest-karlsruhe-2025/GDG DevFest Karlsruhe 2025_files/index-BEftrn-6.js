import {
  ɵ as b,
  a as m,
  b as C,
  c as L,
  d as a,
  e as A,
  f as i,
  g as o,
  h as F,
  i as H,
  j as p,
  k as v,
  l as c,
  m as d,
  n as f,
  C as k,
  N as K,
  R as N,
  o as M,
  p as z,
  M as V,
  q as j,
  r as q,
  s as G,
  t as $,
  u as U,
  v as W,
  w as J,
  x as O,
  E as Q,
  y as S,
  z as I,
  A as w,
  B,
  D as T,
  S as X,
  F as E,
  G as D,
  H as x,
  I as Y,
  J as h,
  K as Z,
  L as ee,
  O as ne,
  P as te,
  Q as ae,
  T as oe,
  U as re,
  V as ie,
  W as se,
  X as ce,
  Y as le,
  Z as de,
  _ as pe,
  $ as ue,
  a0 as ve,
  a1 as me,
  a2 as ge,
  a3 as fe,
  a4 as _e,
  a5 as he,
} from './vendor-MQ-OkzzL.js';
(function () {
  const s = document.createElement('link').relList;
  if (s && s.supports && s.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) e(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === 'childList')
        for (const u of r.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && e(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : n.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    );
  }
  function e(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = l(n);
    fetch(n.href, r);
  }
})();
const _ = () => ({ exact: !0 });
function be(t, s) {
  (t & 1 &&
    (a(0, 'a', 11),
    p(1, 'img', 12),
    a(2, 'span'),
    i(3, 'Karlsruhe 2025'),
    o()()),
    t & 2 && c('routerLink', '/home'));
}
function Ce(t, s) {
  t & 1 && p(0, 'span', 13);
}
let ke = (() => {
    var t;
    class s {
      constructor() {
        ((this._transparent = !0),
          (this.sidenavOpen = new Q()),
          (this.elevationClass = !0));
      }
      get transparent() {
        return this._transparent;
      }
      set transparent(e) {
        e != null && (this._transparent = e);
      }
    }
    return (
      (t = s),
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵcmp = b({
        type: t,
        selectors: [['devfestka-nav-bar']],
        hostVars: 2,
        hostBindings: function (e, n) {
          e & 2 && m('mat-elevation-z2', n.elevationClass);
        },
        inputs: { transparent: 'transparent' },
        outputs: { sidenavOpen: 'sidenavOpen' },
        standalone: !0,
        features: [C],
        decls: 22,
        vars: 30,
        consts: [
          ['spacer', ''],
          ['rlaHome', 'routerLinkActive'],
          ['rlaSchedule', 'routerLinkActive'],
          ['rlaSpeakers', 'routerLinkActive'],
          ['rlaTeam', 'routerLinkActive'],
          ['tabPanel', ''],
          [
            'mat-tab-nav-bar',
            '',
            1,
            'navbar-header',
            3,
            'tabPanel',
            'backgroundColor',
          ],
          [
            'mat-icon-button',
            '',
            'color',
            'primary',
            1,
            'sidenav-toggle',
            3,
            'click',
          ],
          ['class', 'navbar-logo', 3, 'routerLink', 4, 'ngIf', 'ngIfElse'],
          [1, 'navbar-items'],
          [
            'mat-tab-link',
            '',
            'routerLinkActive',
            '',
            3,
            'active',
            'routerLink',
            'routerLinkActiveOptions',
          ],
          [1, 'navbar-logo', 3, 'routerLink'],
          [
            'ngSrc',
            '/assets/devfest/logo-light.webp',
            'width',
            '130',
            'height',
            '42',
            'alt',
            'devfest Karlsruhe',
          ],
          [1, 'spacer'],
        ],
        template: function (e, n) {
          if (e & 1) {
            const r = L();
            (a(0, 'nav', 6)(1, 'button', 7),
              A('click', function () {
                return (S(r), I(n.sidenavOpen.emit()));
              }),
              a(2, 'mat-icon'),
              i(3, 'menu'),
              o()(),
              F(4, be, 4, 1, 'a', 8)(5, Ce, 1, 0, 'ng-template', null, 0, H),
              a(7, 'div', 9)(8, 'a', 10, 1),
              i(10, 'Home'),
              o(),
              a(11, 'a', 10, 2),
              i(13, 'Schedule'),
              o(),
              a(14, 'a', 10, 3),
              i(16, 'Speakers'),
              o(),
              a(17, 'a', 10, 4),
              i(19, 'Team'),
              o()()(),
              p(20, 'mat-tab-nav-panel', null, 5));
          }
          if (e & 2) {
            const r = v(6),
              u = v(9),
              g = v(12),
              y = v(15),
              P = v(18),
              R = v(21);
            (m('transparent', n.transparent),
              c('tabPanel', R)(
                'backgroundColor',
                n.transparent ? 'primary' : void 0
              ),
              d(4),
              c('ngIf', !n.transparent)('ngIfElse', r),
              d(4),
              m('mdc-tab-indicator--active', u.isActive),
              c('active', u.isActive)('routerLink', '/home')(
                'routerLinkActiveOptions',
                f(26, _)
              ),
              d(3),
              m('mdc-tab-indicator--active', g.isActive),
              c('active', g.isActive)('routerLink', '/schedule')(
                'routerLinkActiveOptions',
                f(27, _)
              ),
              d(3),
              m('mdc-tab-indicator--active', y.isActive),
              c('active', y.isActive)('routerLink', '/speakers')(
                'routerLinkActiveOptions',
                f(28, _)
              ),
              d(3),
              m('mdc-tab-indicator--active', P.isActive),
              c('active', P.isActive)('routerLink', '/team')(
                'routerLinkActiveOptions',
                f(29, _)
              ));
          }
        },
        dependencies: [k, K, N, M, z, V, j, q, G, $, U, W, J, O],
        styles: [
          `.navbar-header[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 4px 16px;
  height: 56px;
  transition: background-color ease-in-out 250ms;
}
.navbar-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  flex: unset;
}
.navbar-header[_ngcontent-%COMP%]   a.navbar-logo[_ngcontent-%COMP%] {
  flex: 1 0 auto;
}
.navbar-header.transparent[_ngcontent-%COMP%] {
  background: transparent;
}
.navbar-header.transparent[_ngcontent-%COMP%]     > div {
  background: transparent;
}
.navbar-header.transparent[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  color: white;
}

.navbar-logo[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 1.3rem;
  text-decoration: none;
  color: black;
}
.navbar-logo[_ngcontent-%COMP%]:visited {
  color: black;
}
.navbar-logo[_ngcontent-%COMP%]:hover, .navbar-logo[_ngcontent-%COMP%]:focus {
  background: initial;
}

.navbar-items[_ngcontent-%COMP%] {
  display: none;
}
@media (width >= 900px) {
  .navbar-items[_ngcontent-%COMP%] {
    display: contents;
  }
}

.sidenav-toggle[_ngcontent-%COMP%] {
  display: block;
}
@media (width >= 900px) {
  .sidenav-toggle[_ngcontent-%COMP%] {
    display: none;
  }
}

.mat-mdc-button-base[_ngcontent-%COMP%]:not(:disabled) {
  text-transform: uppercase;
}

[_nghost-%COMP%] {
  display: block;
  position: fixed;
  width: 100%;
  z-index: 2;
}`,
        ],
        changeDetection: 0,
      })),
      s
    );
  })(),
  Me = (() => {
    var t;
    class s {
      constructor(e, n) {
        ((this.router = e), (this.sideNav = n), (this.subs = new X()));
      }
      ngOnInit() {
        this.subs.add(
          this.router.events
            .pipe(E((e) => e instanceof D))
            .subscribe(() => this.sideNav?.close())
        );
      }
      ngOnDestroy() {
        this.subs.unsubscribe();
      }
    }
    return (
      (t = s),
      (t.ɵfac = function (e) {
        return new (e || t)(w(B), w(T));
      }),
      (t.ɵcmp = b({
        type: t,
        selectors: [['devfestka-side-nav-content']],
        standalone: !0,
        features: [C],
        decls: 12,
        vars: 5,
        consts: [
          [3, 'routerLink'],
          [
            'ngSrc',
            '/assets/devfest/logo-karlsruhe-light.webp',
            'width',
            '256',
            'height',
            '144',
            'alt',
            'devfest Karlsruhe 2025',
            1,
            'navbar-logo',
          ],
        ],
        template: function (e, n) {
          (e & 1 &&
            (a(0, 'a', 0),
            p(1, 'img', 1),
            o(),
            p(2, 'hr'),
            a(3, 'nav')(4, 'a', 0),
            i(5, 'Home'),
            o(),
            a(6, 'a', 0),
            i(7, 'Schedule'),
            o(),
            a(8, 'a', 0),
            i(9, 'Speakers'),
            o(),
            a(10, 'a', 0),
            i(11, 'Team'),
            o()()),
            e & 2 &&
              (c('routerLink', '/home'),
              d(4),
              c('routerLink', '/home'),
              d(2),
              c('routerLink', '/schedule'),
              d(2),
              c('routerLink', '/speakers'),
              d(2),
              c('routerLink', '/team')));
        },
        dependencies: [k, N, M, O],
        styles: [
          `[_nghost-%COMP%] {
  width: 16rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.navbar-logo[_ngcontent-%COMP%] {
  width: 100%;
  text-decoration: none;
}

nav[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: auto;
  flex: 1 0 auto;
  padding: 1rem;
  font-size: 1.25rem;
}`,
        ],
        changeDetection: 0,
      })),
      s
    );
  })(),
  Oe = (() => {
    var t;
    class s {
      constructor() {
        ((this.router = x(B)),
          (this.documentRef = x(Y)),
          (this.transparentNavBar$ = this.router.events.pipe(
            E((e) => e instanceof D),
            h(() =>
              this.router.isActive('/home', {
                paths: 'exact',
                queryParams: 'exact',
                fragment: 'ignored',
                matrixParams: 'ignored',
              })
            ),
            Z((e) =>
              e
                ? ne(this.documentRef, 'scroll').pipe(
                    te(0),
                    h(() => this.documentRef.documentElement.scrollTop ?? 0),
                    h((n) => n < 5)
                  )
                : ee(!1)
            )
          )));
      }
    }
    return (
      (t = s),
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵcmp = b({
        type: t,
        selectors: [['devfestka-root']],
        standalone: !0,
        features: [C],
        decls: 36,
        vars: 4,
        consts: [
          ['sidenav', ''],
          ['mode', 'over', 'fixedInViewport', 'true'],
          [3, 'sidenavOpen', 'transparent'],
          [
            'href',
            'https://gdg.community.dev/gdg-karlsruhe/',
            'target',
            '_blank',
          ],
          [3, 'routerLink'],
          [
            'href',
            'https://www.linkedin.com/company/gdg-karlsruhe',
            'target',
            '_blank',
          ],
          [
            'ngSrc',
            '/assets/social/linkedin.svg',
            'alt',
            'LinkedIn',
            'width',
            '16',
            'height',
            '16',
            1,
            'icon',
          ],
          [
            'href',
            'https://www.meetup.com/de-DE/gdg-karlsruhe/',
            'target',
            '_blank',
          ],
          [
            'ngSrc',
            '/assets/social/meetup.svg',
            'alt',
            'Meetup',
            'width',
            '16',
            'height',
            '16',
            1,
            'icon',
          ],
          [
            'href',
            'https://developers.google.com/community-guidelines',
            'target',
            '_blank',
          ],
        ],
        template: function (e, n) {
          if (e & 1) {
            const r = L();
            (a(0, 'mat-sidenav-container')(1, 'mat-sidenav', 1, 0),
              p(3, 'devfestka-side-nav-content'),
              o(),
              a(4, 'mat-sidenav-content')(5, 'devfestka-nav-bar', 2),
              ae(6, 'async'),
              A('sidenavOpen', function () {
                S(r);
                const g = v(2);
                return I(g.open());
              }),
              o(),
              a(7, 'main'),
              p(8, 'router-outlet'),
              o(),
              a(9, 'footer')(10, 'section')(11, 'h3'),
              i(12, 'Kontakt'),
              o(),
              a(13, 'ul')(14, 'li')(15, 'a', 3),
              i(16, 'GDG Karlsruhe'),
              o()(),
              a(17, 'li')(18, 'a', 4),
              i(19, 'Impressum'),
              o()()()(),
              a(20, 'section')(21, 'h3'),
              i(22, 'Social'),
              o(),
              a(23, 'ul')(24, 'li')(25, 'a', 5),
              p(26, 'img', 6),
              i(27, 'LinkedIn '),
              o()(),
              a(28, 'li')(29, 'a', 7),
              p(30, 'img', 8),
              i(31, 'Meetup '),
              o()()()(),
              a(32, 'section')(33, 'h4')(34, 'a', 9),
              i(35, 'Code of Conduct'),
              o()()()()()());
          }
          e & 2 &&
            (d(5),
            c('transparent', oe(6, 2, n.transparentNavBar$)),
            d(13),
            c('routerLink', '/imprint'));
        },
        dependencies: [k, re, ie, ke, Me, M, se, T, ce, le, O],
        styles: [
          `main[_ngcontent-%COMP%] {
  height: calc(100% - 64px);
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  overflow: auto;
  min-height: 100%;
  justify-content: space-between;
}

footer[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
}
footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 0.2rem 0;
}`,
        ],
      })),
      s
    );
  })();
const ye = {
  providers: [
    de(_e(), fe(console.error), ge({ scrollPositionRestoration: 'enabled' })),
    pe(ue()),
    ve(),
    me(),
  ],
};
he(Oe, ye);
