/* ============================================================
   Building Measurements Services · main.js
   1) Inserta topbar + header (con logo) + footer en TODAS las páginas
      -> para cambiar el header/footer, edita SOLO este archivo.
   2) Menú móvil (burger)
   3) Reveal on-scroll (IntersectionObserver)

   Cada página define antes de cargar este script:
     <script>window.SITE = { base: "../", page: "about" };</script>
     - base: "" en la raíz, "../" en subcarpetas
     - page: id de la página activa (home, about, services, ...)
   ============================================================ */
(function () {
  'use strict';

  var S    = window.SITE || { base: '', page: '' };
  var base = S.base || '';
  var page = S.page || '';
  var home = base || './';

  function cur(p) { return page === p ? ' aria-current="page"' : ''; }

  var nav = [
    ['home',     home,            'Home'],
    ['about',    base + 'about/',    'About'],
    ['services', base + 'services/', 'Services'],
    ['sectors',  base + 'sectors/',  'Sectors'],
    ['projects', base + 'projects/', 'Projects'],
    ['global',   base + 'global/',   'Global'],
    ['contact',  base + 'contact/',  'Contact']
  ];
  var links = nav.map(function (n) {
    return '<a href="' + n[1] + '"' + cur(n[0]) + '>' + n[2] + '</a>';
  }).join('');

  var headerHTML =
    '<header><div class="wrap nav">' +
      '<a href="' + home + '" class="brand" aria-label="Building Measurements Services home">' +
        '<img class="brand-logo" src="' + base + 'images/logo.webp" alt="Building Measurements Services" width="38" height="40">' +
        '<span class="brand-text">' +
          '<span class="name-1">BUILDING MEASUREMENTS</span>' +
          '<span class="name-2">SERVICES</span>' +
        '</span>' +
      '</a>' +
      '<nav class="menu">' + links + '</nav>' +
      '<div class="nav-cta">' +
        '<a href="' + base + 'contact/" class="btn btn-primary">Request a Proposal</a>' +
        '<button class="burger" aria-label="Open menu"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div>' +
    '<nav class="mobile-menu">' + links + '</nav></header>';

  var footerHTML =
    '<footer><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div class="foot-brand">' +
          '<div class="name">Building Measurements<br>Services</div>' +
          '<p>Canadian multidisciplinary architecture, engineering, design and advisory for the construction industry.</p>' +
        '</div>' +
        '<div class="foot-col"><h4>Services</h4>' +
          '<a href="' + base + 'services/">Architecture</a>' +
          '<a href="' + base + 'services/">Engineering</a>' +
          '<a href="' + base + 'services/">Digital &amp; BIM</a>' +
          '<a href="' + base + 'services/">Preconstruction</a>' +
          '<a href="' + base + 'services/">Advisory</a>' +
        '</div>' +
        '<div class="foot-col"><h4>Company</h4>' +
          '<a href="' + base + 'about/">About</a>' +
          '<a href="' + base + 'about/">Our Approach</a>' +
          '<a href="' + base + 'global/">Global Delivery</a>' +
          '<a href="' + base + 'careers/">Careers</a>' +
          '<a href="' + base + 'insights/">Insights</a>' +
        '</div>' +
        '<div class="foot-col"><h4>Contact</h4>' +
          '<a href="tel:+14378293211">+1 (437) 829-3211</a>' +
          '<a href="' + base + 'contact/">North York, ON</a>' +
          '<a href="' + base + 'contact/">Request a Proposal</a>' +
        '</div>' +
      '</div>' +
      '<div class="foot-bottom">' +
        '<span>&copy; 2026 Building Measurements Services. Ontario, Canada. All rights reserved.</span>' +
        '<span>Canadian Expertise &middot; Global Delivery</span>' +
      '</div>' +
    '</div></footer>';

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* --- Menú móvil --- */
  var burger = document.querySelector('.burger');
  var mobile = document.querySelector('.mobile-menu');
  if (burger && mobile) {
    burger.addEventListener('click', function () {
      mobile.classList.toggle('open');
      burger.classList.toggle('active');
    });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobile.classList.remove('open');
        burger.classList.remove('active');
      });
    });
  }

  /* --- Reveal on-scroll --- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
