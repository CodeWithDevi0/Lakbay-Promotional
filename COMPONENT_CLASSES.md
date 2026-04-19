# Lakbay component classes (Tailwind CDN)

Source: **`css/tailwind-components.css`** — loaded by **`js/load-tailwind-components.js`** as `type="text/tailwindcss"`. Serve over HTTP.

## Apple-inspired layout tokens

| Class | Role |
|--------|------|
| `section-bleed` | Standard horizontal + vertical section padding. |
| `apple-hero-stage`, `apple-wordmark`, `apple-hero-emotion`, `apple-hero-product`, `apple-hero-dek` | Centered poster hero (wordmark → emotional line → product headline → deck). |
| `apple-hero-actions`, `apple-btn-primary`, `apple-btn-ghost` | Primary pill (teal) + quiet text link. |
| `highlights-head`, `highlights-title`, `highlights-grid`, `highlight-tile*` | “Get the highlights” four-up cards. |
| `feature-split`, `feature-copy`, `feature-media`, `feature-media-inner` | Two-column feature block (copy + media). |
| `stat-stage`, `stat-huge`, `stat-caption` | Large typographic stat ($24) + caption. |
| `footer-fine` | Light gray legal-style footer strip. |
| `scroll-top-btn` (+ `.is-visible`) | Fixed bottom-right control; fades/slides in after ~45% viewport scroll or when within ~35% of page bottom; smooth scroll to top on click. |

## Existing Lakbay / brand classes

`section-kicker`, `heading-display`, prompt/float/canvas/account/bento/finale/navbar/reveal/ring/polaroid` — see previous maps; teal/orange accents unchanged in intent.
