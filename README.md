# Building Measurements Services — Sitio web corporativo (proyecto)

Firma canadiense multidisciplinaria de **Architecture · Engineering · Design · Advisory**
para la industria de la construcción. Base en Ontario, entrega internacional.
Mensaje núcleo: **Canadian Expertise. Global Delivery.**

> ✅ **Nombre REGISTRADO oficialmente:** `BUILDING MEASUREMENTS SERVICES`
> (Ontario · Business Names Act · BIN 1000715630 · vigente 20 nov 2023 → 19 nov 2028).
> El logo definitivo sigue **pendiente** (hoy hay un monograma provisional en `favicon.svg` y header).

---

## 1. Datos oficiales (CONFIRMADOS — no inventar ni alterar)

- **Razón social (registrante):** `1000301452 ONTARIO INC.` (sociedad numerada de Ontario).
- **Nombre comercial:** `BUILDING MEASUREMENTS SERVICES` — **REGISTRADO** (Ontario, Business Names Act).
  - **BIN (nombre comercial):** 1000715630 · Vigente 20 nov 2023 → **expira 19 nov 2028** (renovar antes).
  - Nota: registrar el nombre comercial NO es marca registrada; la protección de marca (CIPO) es aparte y opcional.
- **N.° de sociedad (OCN):** 1000301452 · Constituida: 01 septiembre 2022 (Business Corporations Act, Ontario).
- **Teléfono:** +1 (437) 829-3211
- **Dirección operativa (pública):** 1155 Barmac Drive, North York, ON M9L 1X4
- **Domicilio registrado en los estatutos:** 896 Glencairn Ave, North York, ON M6B2A7
  ⚠️ *Difiere de la dirección operativa. Confirmar cuál se publica antes de producción.*
- **Director / incorporador:** Jesus Manuel Gonzalez Gomez
  ⚠️ *Dato privado de los documentos. NO publicar domicilios personales.*
- **Correo corporativo:** PENDIENTE (depende del dominio).
- **Dominio:** PENDIENTE. Se comprará en **Hostinger** con **Titan** (correo). Es lo ÚLTIMO del proyecto.
- **Idioma del sitio:** **INGLÉS** (`lang="en"`, mercado canadiense). Toggle EN/FR previsto (placeholder).

---

## 2. Reglas duras

- **NADA EMBEBIDO.** CSS y JS siempre en archivos externos. Prohibido `<style>` o `<script>` con lógica dentro del HTML (salvo el SVG del logo, que es marcado, no estilo).
- **NUNCA inventar:** cifras, años de experiencia, número de proyectos, clientes, certificaciones, premios. Si no está confirmado → placeholder explícito.
- **PRIVACIDAD:** nunca publicar domicilios ni datos personales de directores.
- **Entregar archivos COMPLETOS**, listos para reemplazar en el repo. Nunca diffs ni fragmentos.
- **Trabajar de a un archivo por vez**, esperando confirmación antes de seguir.
- **Ser conciso.** Sin preámbulos ni resúmenes largos.
- **CACHÉ — CRÍTICO:** los CSS/JS se enlazan con `?v=N`. Si tocas un CSS o el JS y **no subes el número**, el navegador sirve la versión vieja. Subir siempre la versión.
- **Header y footer** son bloques compartidos: idénticos en todas las páginas. Si se editan, replicar en todas (con script, no a mano) y marcar `aria-current="page"` en el nav activo.

---

## 3. Estructura del repo

```
ardevon-web/
├─ index.html                 ← Home (Fase 1 lista)
├─ README.md
├─ favicon.svg
├─ css/
│  ├─ tokens.css              ← variables: color, tipografía, espaciado
│  ├─ style.css               ← reset, base, botones, utilidades, animaciones
│  ├─ layout.css              ← contenedor, secciones, encabezados de sección
│  ├─ header.css              ← topbar, header/nav, footer (bloques compartidos)
│  └─ components.css          ← hero, servicios, proceso, sectores, proyectos, global, contacto
├─ js/
│  └─ main.js                 ← reveal on-scroll, menú móvil
└─ images/                    ← (pendiente: fotos reales de proyectos/obra)
```

Orden de carga del CSS (importa por la cascada): `tokens → style → layout → header → components`.

---

## 4. Sistema de diseño

- **Paleta (seria, corporativa):**
  - `--ink #0A1622` (base near-black navy) · `--navy #0F2135` (paneles) · `--navy-hi #16304A` (hover)
  - `--steel #8A97A8` (texto gris acero) · `--steel-dim #5B6A7C`
  - `--white #EEF2F6`
  - `--accent #3E7BD1` (**azul blueprint**, uso mínimo: CTA, subrayado nav, líneas técnicas)
  - Sin naranja. El acento se usa con moderación.
- **Tipografía:** `Archivo` (display) · `IBM Plex Sans` (cuerpo) · `IBM Plex Mono` (readouts/eyebrows técnicos).
- **Escala contenida.** Nada de titulares gigantes fuera del hero.
- **ADN visual:** rejilla tipo plano (`.grid-bg`), numeración y coordenadas en mono, líneas finas. Coherente con el concept board de la marca.
- **Componentes** (`components.css`): `hero`, `hstats`, `svc` (tarjetas de servicio), `flow/step` (proceso), `sector`, `proj` (proyectos), `markets`, `form`.
- **Grillas de tarjetas:** preferir número par de elementos.

---

## 5. Limitaciones del entorno (avisar, no fingir)

- **GitHub bloquea el acceso automatizado:** no se puede leer el repo; pedir archivos por chat. El sitio en vivo (`github.io`) sí se lee con fetch.
- **Sin red en bash:** no se instalan paquetes.
- **Sin rasterizador de SVG:** no se previsualiza un SVG renderizado; avisar al entregar SVGs.
- **Preview de un solo archivo:** al ser modular, `index.html` NO se ve con estilos si se abre suelto sin sus CSS al lado. Se ve bien servido (GitHub Pages) o con la carpeta completa.

---

## 6. Estado y pendientes

**Hecho (Fase 1):** Home modular — estructura, contenido base en inglés, paleta, componentes, animaciones, responsive, datos reales (dirección + teléfono).

**Pendiente:**
- Confirmar **dirección pública** (1155 Barmac vs 896 Glencairn).
- **Logo/branding real** (hoy monograma provisional en `favicon.svg` y header).
- **Fotos reales** de proyectos/obra (hoy placeholders `[PROJECT IMAGE]`).
- Páginas internas: About, Services (detalle x6), Sectors, Projects, Global, Insights, Careers, Contact.
- SEO base (title/meta/OG), `sitemap.xml`, `robots.txt`, `favicon` final, `og:image`.
- Formularios: conectar a backend real (Formspree/Web3Forms) cuando haya correo.
- **Último de todo:** dominio en Hostinger + correos con Titan.

---

## 7. Plan por fases

1. **Fase 1 — Home** (estructura + dirección visual). ← *actual*
2. **Fase 2 — Ajuste fino** del Home (paleta/tipografía/contenido) según feedback.
3. **Fase 3 — Páginas internas** (About, Services, Sectors, Projects, Global, Careers, Contact).
4. **Fase 4 — SEO + assets** (favicon, sitemap, robots, OG, imágenes reales).
5. **Fase 5 — Montaje** en GitHub Pages.
6. **Fase 6 — Dominio (Hostinger) + correo (Titan).**
