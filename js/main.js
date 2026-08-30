/* ============================================================
   Building Measurements Services · main.js  (motor del sitio)
   ============================================================
   1) CONFIG  -> EDITA AQUÍ los datos de la empresa (1 solo lugar).
                 Se reflejan en header, footer y página de contacto.
   2) Inserta header (con logo) + footer en TODAS las páginas.
   3) Rellena cualquier elemento con data-c="ruta" usando CONFIG.
   4) Menú móvil + reveal on-scroll.

   Cada página define antes de este script:
     <script>window.SITE = { base:"../", page:"about" };</script>
   ============================================================ */
(function () {
  'use strict';

  /* ========================================================
     ====================  CONFIG (EDITA AQUÍ)  =============
     ======================================================== */
  var CONFIG = {
    company: {
      name:        "Building Measurements Services",
      nameLine1:   "BUILDING MEASUREMENTS",
      nameLine2:   "SERVICES",
      tagline:     "Canadian Expertise · Global Delivery",
      phoneShow:   "+1 (437) 829-3211",   // como se muestra
      phoneTel:    "14378293211",         // solo dígitos, para el enlace tel:
      email:       "buildingm@bmservices.blog",   // vacío => se muestra "Available soon"
      emailFallback: "Available soon",
      website:     "bmservices.blog",      // sin https://
      address1:    "1155 Barmac Drive",
      address2:    "North York, ON  M9L 1X4",
      cityShort:   "North York, ON",
      registered:  "Ontario, Canada",
      legal:       "BIN 1000715630 · Incorporated in Ontario, 2022",                    // ej: "BIN 1000715630 · Incorporated 2022" (vacío = no se muestra)
      footerBlurb: "Canadian multidisciplinary architecture, engineering, design and advisory for the construction industry.",
      copyright:   "© 2026 Building Measurements Services. Ontario, Canada. All rights reserved."
    },
    // Formulario de contacto (Web3Forms). Pega aquí tu Access Key gratuita de web3forms.com
    // (usa el correo buildingm@bmservices.blog al generarla; los mensajes llegarán ahí).
    web3formsKey: "PEGA-AQUI-TU-ACCESS-KEY",
    // Menú principal (etiquetas y orden). id = página activa.
    nav: [
      { id:"home",     label:"Home",     path:"" },
      { id:"about",    label:"About",    path:"about/" },
      { id:"services", label:"Services", path:"services/" },
      { id:"sectors",  label:"Sectors",  path:"sectors/" },
      { id:"projects", label:"Projects", path:"projects/" },
      { id:"global",   label:"Global",   path:"global/" },
      { id:"contact",  label:"Contact",  path:"contact/" }
    ],
    // Reemplazos de texto que se aplican en TODAS las páginas (1 solo lugar).
    // Para cambiar una palabra en todo el sitio, agrégala aquí: ["antes","después"]
    textFixes: [
      ["large-scale", "large scale"],
      ["Scan-to-BIM", "Scan to BIM"],
      ["Cross-border", "Cross border"],
      ["cross-border", "cross border"],
      ["Cross-discipline", "Cross discipline"],
      ["multi-unit", "multi unit"],
      ["Mixed-Use", "Mixed Use"],
      ["Model-based", "Model based"],
      ["De-risk the project early", "Reduce risk early"],
      ["delivery — the disciplines", "delivery. The disciplines"],
      ["—", " "]
    ]
  };
  /* ==============  FIN CONFIG  ============================= */

  var C    = CONFIG.company;
  var S    = window.SITE || { base:'', page:'' };
  var base = S.base || '';
  var page = S.page || '';
  var home = base || './';
  function href(path){ return path === '' ? home : base + path; }
  function cur(id){ return page === id ? ' aria-current="page"' : ''; }

  var links = CONFIG.nav.map(function (n) {
    return '<a href="' + href(n.path) + '"' + cur(n.id) + '>' + n.label + '</a>';
  }).join('');

  var headerHTML =
    '<header><div class="wrap nav">' +
      '<a href="' + home + '" class="brand" aria-label="' + C.name + ' home">' +
        '<img class="brand-logo" src="' + base + 'images/logo.webp" alt="' + C.name + '" width="38" height="40">' +
        '<span class="brand-text">' +
          '<span class="name-1">' + C.nameLine1 + '</span>' +
          '<span class="name-2">' + C.nameLine2 + '</span>' +
        '</span>' +
      '</a>' +
      '<nav class="menu">' + links + '</nav>' +
      '<div class="nav-cta">' +
        '<a href="' + href('contact/') + '" class="btn btn-primary">Request a Proposal</a>' +
        '<button class="burger" aria-label="Open menu"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div>' +
    '<nav class="mobile-menu">' + links + '</nav></header>';

  var footerHTML =
    '<footer><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div class="foot-brand">' +
          '<div class="name">Building Measurements<br>Services</div>' +
          '<p>' + C.footerBlurb + '</p>' +
        '</div>' +
        '<div class="foot-col"><h4>Services</h4>' +
          '<a href="' + href('services/') + '">Architecture</a>' +
          '<a href="' + href('services/') + '">Engineering</a>' +
          '<a href="' + href('services/') + '">Digital &amp; BIM</a>' +
          '<a href="' + href('services/') + '">Preconstruction</a>' +
          '<a href="' + href('services/') + '">Advisory</a>' +
        '</div>' +
        '<div class="foot-col"><h4>Company</h4>' +
          '<a href="' + href('about/') + '">About</a>' +
          '<a href="' + href('about/') + '">Our Approach</a>' +
          '<a href="' + href('global/') + '">Global Delivery</a>' +
          '<a href="' + href('careers/') + '">Careers</a>' +
          '<a href="' + href('insights/') + '">Insights</a>' +
        '</div>' +
        '<div class="foot-col"><h4>Contact</h4>' +
          '<a href="tel:+' + C.phoneTel + '">' + C.phoneShow + '</a>' +
          (C.email ? '<a href="mailto:' + C.email + '">' + C.email + '</a>' : '') +
          '<a href="' + href('contact/') + '">' + C.address1 + '<br>' + C.address2 + '</a>' +
          '<a href="' + href('contact/') + '">Request a Proposal</a>' +
        '</div>' +
      '</div>' +
      '<div class="foot-bottom">' +
        '<span>' + C.copyright + (C.legal ? ' &middot; ' + C.legal : '') + '</span>' +
        '<span>' + C.tagline + '</span>' +
      '</div>' +
    '</div></footer>';

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ---- Rellenar elementos con data-c="company.xxx" desde CONFIG ---- */
  function getPath(obj, path){
    return path.split('.').reduce(function(o,k){ return (o && o[k] != null) ? o[k] : undefined; }, obj);
  }
  document.querySelectorAll('[data-c]').forEach(function(el){
    var v = getPath(CONFIG, el.getAttribute('data-c'));
    if (v === undefined) return;
    if ((v === '' || v == null) && el.hasAttribute('data-c-empty')) v = el.getAttribute('data-c-empty');
    if ((v === '' || v == null) && el.getAttribute('data-c') === 'company.email') v = C.emailFallback;
    // El correo se muestra como enlace mailto (si hay correo real)
    if (el.getAttribute('data-c') === 'company.email' && C.email) {
      el.innerHTML = '<a href="mailto:' + C.email + '" style="color:inherit;text-decoration:none">' + C.email + '</a>';
    } else {
      el.textContent = v;
    }
    if (el.tagName === 'A' && (el.getAttribute('href') || '').indexOf('tel:') === 0) {
      el.href = 'tel:+' + C.phoneTel;
    }
  });

  /* ---- Reemplazos de texto globales (CONFIG.textFixes) en toda la página ----
     Recorre solo nodos de TEXTO (nunca código, clases ni el teléfono). */
  (function applyTextFixes(){
    var fixes = CONFIG.textFixes || [];
    if (!fixes.length) return;
    var skip = { SCRIPT:1, STYLE:1, A_TEL:1 };
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var node, changed;
    var nodes = [];
    while ((node = walker.nextNode())) { nodes.push(node); }
    nodes.forEach(function(n){
      var parent = n.parentNode;
      if (!parent) return;
      var tag = parent.nodeName;
      if (tag === 'SCRIPT' || tag === 'STYLE') return;
      // no tocar enlaces de teléfono (tel:)
      if (tag === 'A' && (parent.getAttribute('href') || '').indexOf('tel:') === 0) return;
      var t = n.nodeValue, nt = t;
      for (var i = 0; i < fixes.length; i++) { nt = nt.split(fixes[i][0]).join(fixes[i][1]); }
      if (nt !== t) n.nodeValue = nt;
    });
  })();

  /* ---- Menú móvil ---- */
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

  /* ---- Formulario de contacto -> Web3Forms ---- */
  (function contactForm(){
    var form = document.querySelector('form.form');
    if (!form) return;
    var btn = form.querySelector('button[type="submit"]');
    var status = document.createElement('div');
    status.style.cssText = 'font-size:14px;margin-top:2px;min-height:18px';
    form.appendChild(status);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var key = CONFIG.web3formsKey || '';
      if (!key || key.indexOf('PEGA') === 0) {
        status.style.color = '#e6a23c';
        status.textContent = 'Form not connected yet (missing Web3Forms key).';
        return;
      }
      var data = { access_key: key, subject: 'New enquiry — Building Measurements Services', from_name: 'BMS Website' };
      new FormData(form).forEach(function (v, k) { data[k] = v; });

      var original = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      status.style.color = 'var(--steel)';
      status.textContent = '';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.success) {
          form.reset();
          status.style.color = '#7ee0a5';
          status.textContent = 'Thank you. We’ll be in touch shortly.';
        } else {
          status.style.color = '#e06666';
          status.textContent = 'Something went wrong. Please email us directly.';
        }
      })
      .catch(function () {
        status.style.color = '#e06666';
        status.textContent = 'Network error. Please email us directly.';
      })
      .finally(function () { if (btn) { btn.disabled = false; btn.textContent = original; } });
    });
  })();

  /* ---- Reveal on-scroll ---- */
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

  /* ---- Contador animado en las estadísticas (4·8·5·1) ---- */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nums = document.querySelectorAll('.hstat .n');
  if (nums.length && 'IntersectionObserver' in window && !reduce) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = parseInt(el.textContent, 10);
        co.unobserve(el);
        if (isNaN(target)) return;
        var dur = 900, t0 = performance.now();
        (function step(now) {
          var p = Math.min((now - t0) / dur, 1);
          el.textContent = Math.round(target * (p * (2 - p)));
          if (p < 1) requestAnimationFrame(step);
        })(t0);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { co.observe(el); });
  }
})();
