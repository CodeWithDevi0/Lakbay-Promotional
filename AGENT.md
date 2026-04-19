# Lakbay Promotional Page — agent context

## Purpose

Single-page marketing site for **Lakbay** (“journey” in Tagalog): a travel-planning product positioned around dream-first itineraries, reverse budgeting (daily savings toward the trip), group accountability, and a post-trip “Memory Space.” The layout is inspired by Apple-style product pages (e.g. [MacBook Air](https://www.apple.com/macbook-air/)): poster hero, “highlights” grid, typographic feature strips, big stat moments, and generous whitespace — still a static landing page, not an app shell.

## Stack

- **HTML** — one primary document: `index.html`
- **Tailwind CSS** — [Play CDN](https://cdn.tailwindcss.com) + `js/tailwind.config.js` (theme extensions: Inter, custom keyframes/animations)
- **Vanilla JavaScript** — `js/main.js` (Intersection Observer reveals, scroll-driven navbar chrome, manifesto line opacity)
- **No build step** — no npm bundler required for day-to-day editing

## Repository layout

| Path | Role |
|------|------|
| `index.html` | Section markup, utilities, `data-reveal` hooks |
| `css/tailwind-components.css` | `@layer components { … }` — semantic classes, hero layer, reveal/navbar/ring/polaroid |
| `js/load-tailwind-components.js` | Fetches the CSS above and injects `<style type="text/tailwindcss">` so the Play CDN compiles `@apply` |
| `js/tailwind.config.js` | `tailwind.config = { … }` for the CDN |
| `js/main.js` | Navbar state (`#site-nav`, hero/memory/finale geometry), manifesto opacity, `data-reveal` / `data-reveal-scale` observers |
| `COMPONENT_CLASSES.md` | Map of component class names, brand color notes |

## Constraints agents must respect

1. **Tailwind `@apply` lives in `css/tailwind-components.css` and is loaded via `load-tailwind-components.js`.** A plain `<link rel="stylesheet" href="tailwind-components.css">` will **not** compile `@apply` with the CDN-only setup.

2. **Preview over HTTP.** `fetch()` to `css/tailwind-components.css` fails on many `file://` setups. Use Live Server, `npx serve`, etc.

3. **Preserve visual parity** unless the user explicitly asks for a redesign. Prefer extending component classes or adding utilities in markup over drive-by refactors.

4. **Navbar contract.** `main.js` toggles `navbar-glass`, `navbar-solid`, `navbar-dark` and swaps classes on `.nav-logo` and `.nav-links a`. The `.nav-cta` pill stays teal via CSS only. Keep these hooks if you change markup.

5. **Reveal contract.** Elements use `data-reveal` / `data-reveal-scale` plus `.reveal` / `.reveal-scale` (and optional `.reveal-delay-*`) from the components layer.

## Safe extension patterns

- New repeating UI patterns: add rules under `@layer components` in `css/tailwind-components.css`, document in `COMPONENT_CLASSES.md` if non-obvious.
- New scroll or reveal behavior: extend `js/main.js`; keep listeners passive where applicable.
- New Tailwind tokens (fonts, keyframes): extend `js/tailwind.config.js`.

## Out of scope (unless requested)

- Backend, auth, analytics wiring
- Framework migration (React/Vue/Svelte)
- npm/PostCSS pipeline—only introduce if the user wants to leave the CDN model
