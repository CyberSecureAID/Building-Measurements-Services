<div align="center">

# Building Measurements Services

### Corporate website — Architecture · Engineering · Design · Advisory

**Canadian Expertise · Global Delivery**

[![Live](https://img.shields.io/badge/live-bmservices.blog-3E7BD1?style=flat-square)](https://bmservices.blog)
![Stack](https://img.shields.io/badge/stack-HTML%20·%20CSS%20·%20Vanilla%20JS-0F2135?style=flat-square)
![Build](https://img.shields.io/badge/build-none%20(zero%20dependencies)-16304A?style=flat-square)
![Hosting](https://img.shields.io/badge/hosting-GitHub%20Pages-06101A?style=flat-square)

</div>

---

## Overview

Corporate website for **Building Measurements Services**, a Canadian multidisciplinary firm delivering **architecture, engineering, design and advisory** for large-scale, complex projects across Canada and international markets.

The site is a **fast, dependency-free static site** engineered for reliability, easy maintenance and a premium visual finish. There is **no framework, no build step and no third-party runtime** — just clean HTML, a modular CSS system and a single, well-documented JavaScript engine.

- **Live:** https://bmservices.blog
- **Hosting:** GitHub Pages + custom domain (`bmservices.blog`)
- **Email:** Titan mailbox — `buildingm@bmservices.blog`
- **Lead capture:** contact form wired to Web3Forms

---

## Highlights

| | |
|---|---|
| **Zero dependencies** | No React/Vue, no jQuery, no build tools. Loads instantly and will still work years from now. |
| **Single-source content engine** | Header, footer, navigation and all company data are generated from **one `CONFIG` object** in `js/main.js`. Change the phone, email, address or menu once — it updates across every page. |
| **Design-token CSS system** | Colours, typography, spacing and radii live in `tokens.css`; components are modular and reusable. |
| **Mobile-first & responsive** | Purpose-built mobile layouts (not just scaled desktop). Verified across breakpoints. |
| **Optimised media** | Photography served as **WebP** (26–53 KB each) and the logo/favicon as vector/WebP. |
| **SEO-ready** | Per-page meta, semantic markup, `sitemap.xml` and `robots.txt`. |
| **Accessible** | Semantic HTML5, `aria-current`, visible focus states, and honours `prefers-reduced-motion`. |
| **Clean URLs** | `/about/`, `/services/`, `/projects/` … via folder-based routing. |

---

## Tech stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom-property design tokens, Grid & Flexbox, clamped fluid typography
- **Vanilla JavaScript (ES5-safe)** — one self-contained engine, no dependencies
- **Google Fonts** — Archivo (display) + IBM Plex Sans (body)
- **Web3Forms** — serverless form handling / lead capture
- **GitHub Pages** — static hosting with a custom domain

---

## Architecture & engineering decisions

The site's structure is intentionally **DRY (Don't Repeat Yourself)**. Rather than duplicating the header, footer and company details across nine HTML pages, they are generated at runtime from a single source of truth.

### 1. The content engine (`js/main.js`)

Every page includes two lines:

```html
<script>window.SITE = { base: "../", page: "about" };</script>
<script src="../js/main.js"></script>
```

On load, the engine:

1. **Injects the header** (logo, navigation, active-page state, CTA, mobile menu) and **footer**, built from a single `CONFIG` object.
2. **Binds company data** to any element marked `data-c="company.email"` (phone, email, address …).
3. **Applies global text rules** (`CONFIG.textFixes`) across all pages from one place.
4. **Handles the contact form** submission via Web3Forms.
5. Adds progressive enhancements: reveal-on-scroll, animated statistics, and the mobile menu.

> **Why this matters:** editing the phone number, email, address, tagline, legal line or the navigation is a **one-file change** that instantly propagates to all pages — no find-and-replace across the repo.

### 2. Modular CSS

```
tokens.css      Design tokens: colour palette, fonts, spacing, radii
style.css       Base elements, buttons, typography
layout.css      Layout primitives (wrap, grid, spacing)
header.css      Header, navigation, footer
components.css  Sections & components (hero, cards, forms, bands …)
```

Loaded in a deliberate cascade order and cache-busted with a version query string.

### 3. Clean URLs

Each page is an `index.html` inside its own folder, so URLs are clean (`/services/`) without server rewrites — ideal for GitHub Pages.

---

## Project structure

```
.
├── index.html              # Home
├── about/index.html        # About — who we are, approach, leadership
├── services/index.html     # Services — 5 disciplines + sub-services
├── sectors/index.html      # Sectors — 12 sectors served
├── projects/index.html     # Our work — visual showcase by discipline
├── global/index.html       # Global capabilities & markets
├── contact/index.html      # Contact — details + Web3Forms form
├── careers/index.html      # Careers
├── insights/index.html     # Insights
│
├── css/
│   ├── tokens.css
│   ├── style.css
│   ├── layout.css
│   ├── header.css
│   └── components.css
│
├── js/
│   └── main.js             # The engine: header/footer, CONFIG, form, UX
│
├── images/
│   ├── logo.webp           # Brand mark
│   ├── proj-1…6.webp       # Work photography (WebP, optimised)
│   ├── home/about/…jpg     # Section backgrounds
│   └── README.md           # Image naming & replacement guide
│
├── favicon.webp
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## Pages

| Page | Purpose |
|------|---------|
| **Home** | Hero, key figures, services overview, delivery workflow, sectors, featured work, global reach. |
| **About** | Positioning, differentiators, leadership. |
| **Services** | Architecture & Design · Engineering · Digital Engineering & BIM · Preconstruction & Advisory · Project & Design Management, each with sub-services. |
| **Sectors** | 12 sectors — commercial, residential, industrial, institutional, healthcare, infrastructure and more. |
| **Projects** | A visual showcase of the work, organised by discipline. |
| **Global** | Canadian standards delivered internationally; markets served. |
| **Contact** | Office, phone, email + a working enquiry form. |
| **Careers / Insights** | Talent and thought-leadership sections. |

---

## Design system

| Token | Value |
|-------|-------|
| Ink (page) | `#0A1622` |
| Navy | `#0F2135` |
| Accent (blueprint blue) | `#3E7BD1` |
| Steel | `#8A97A8` |
| Off-white | `#EEF2F6` |
| Display font | Archivo |
| Body font | IBM Plex Sans |
| Radius | `12px` / `8px` |

Signature details: a faint blueprint-grid background, section-specific photography with legible overlays, CSS-crafted band backgrounds (gradient + subtle glow + grid — never stretched raster), rounded cards with restrained depth, and a subtle texture reserved for small cards only.

---

## Content management (edit once)

All company-wide content lives in the `CONFIG` block at the top of **`js/main.js`**:

```js
company: {
  name:        "Building Measurements Services",
  phoneShow:   "+1 (437) 829-3211",
  email:       "buildingm@bmservices.blog",
  website:     "bmservices.blog",
  address1:    "1155 Barmac Drive",
  address2:    "North York, ON  M9L 1X4",
  registered:  "Ontario, Canada",
  legal:       "BIN 1000715630 · Incorporated in Ontario, 2022",
  ...
}
```

- **Change a detail everywhere:** edit it here.
- **Rename / reorder the menu:** edit the `nav` array.
- **Swap a word site-wide:** add a pair to `textFixes`, e.g. `["old","new"]`.
- **Replace imagery:** drop a file into `images/` using the same filename (see `images/README.md`).

---

## Contact form (Web3Forms)

The enquiry form posts to **Web3Forms** — a serverless endpoint that delivers submissions straight to the corporate inbox, no backend required.

**Setup (one time):**

1. Create a free access key at [web3forms.com](https://web3forms.com) using `buildingm@bmservices.blog`.
2. Paste it into `js/main.js`:

```js
web3formsKey: "your-access-key-here",
```

Submissions then arrive at the Titan mailbox. The form validates, shows a success state, and never leaves the page.

---

## SEO

- Unique `<title>` and meta description per page
- Semantic headings and landmark elements
- `sitemap.xml` (all 9 pages) and `robots.txt`, both pointing to `https://bmservices.blog`
- WebP favicon

---

## Performance & accessibility

- **No JavaScript frameworks** and **no external CSS libraries** — minimal payload.
- Photography optimised to WebP (typically **< 55 KB**).
- Fonts preconnected.
- `aria-current` on active navigation; visible `:focus-visible` states.
- Motion respects `prefers-reduced-motion`.

---

## Deployment

Hosted on **GitHub Pages**.

1. Push to the default branch.
2. **Settings → Pages →** deploy from the branch root.
3. **Custom domain:** `bmservices.blog` (configured via `CNAME` + DNS).
4. HTTPS enforced by GitHub Pages.

> After any update, hard-refresh (`Ctrl/Cmd + Shift + R`) to bypass the browser cache.

---

## Local development

No tooling required. Clone the repo and open `index.html`, or serve locally:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

---

## Credits

- **Client:** Building Measurements Services — *1000301452 Ontario Inc.*
- **Design & development:** custom-built, hand-coded (no template).
- **Email:** Titan · **Forms:** Web3Forms · **Hosting:** GitHub Pages.

---

<div align="center">
<sub>© 2026 Building Measurements Services. Ontario, Canada. All rights reserved.</sub>
</div>
