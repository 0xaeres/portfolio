# Sudhanshu Shekhar — Portfolio

Dark, type-driven single-page portfolio (trionn.com-inspired). React + Vite + TypeScript, no UI framework.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
```

## Structure

- `src/data/content.ts` — **all site copy lives here** (skills, experience, projects, education, awards, links). Edit this file to update content; components are purely presentational.
- `src/components/` — one component per section: `Hero`, `Marquee`, `About` (skills), `Experience`, `Work` (projects), `Education` (education + awards), `Contact` (footer), plus `Nav`, `Cursor`, and `ScrollTop` (back-to-top button).
- `src/hooks/useReveal.tsx` — scroll-triggered reveals (masked slide-up / fade / scale) via IntersectionObserver.
- `src/hooks/useParallax.tsx` — `<Plx factor={…}>` parallax layers, one shared rAF loop.
- `src/lib/scroll.ts` — Lenis smooth scrolling + anchor navigation.
- Hero background aurora: pure-CSS drifting gradient blobs (`.hero-aurora` in `src/index.css`), pinned to the top of the page and fading out before the fold.

## Notes

- Custom cursor renders only on fine-pointer devices; all motion honours `prefers-reduced-motion`.
- Design tokens (colors, fonts, easing) are CSS variables at the top of `src/index.css`. Accent: `#D9FF3F`.
