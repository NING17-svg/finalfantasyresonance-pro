# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-19 — FINAL FANTASY RESONANCE first launch (guide-v4)

- Task: First-launch site for FINAL FANTASY RESONANCE (Steam AppID 4025750), targeting US English search intent.
- Files: Page Builder completed `page-builder/site/` with the V4 reading & page-assembly composition; launch Builder wired production URL, fixed AdSense trio, `wrangler.jsonc` site identity and `.env.local` for `https://finalfantasyresonance.pro`.
- URLs: `/`, `/contact`, `/about`, `/faq`, `/privacy-policy`, `/terms`, `/guides/combat-basics`, `/guides/bosses`, `/guides/gilgamesh-fight`, `/guides/visions`, `/guides/crystal-questions`, `/guides/espers`, `/guides/esper-dwelling-walkthrough`, `/guides/colosseum-endgame`, `/guides/demo-walkthrough`, `/guides/demo-secret-boss`, `/guides/walkthrough`, `/guides/characters`.
- SEO/GEO: canonical / sitemap / hreflang / Open Graph all point to `https://finalfantasyresonance.pro`; robots advertises `/sitemap.xml`.
- Ad baseline: V4 horizontal inventory reserved in `ad-placement-manifest.json` and `src/data/ads.ts`; all unit codes empty (no Adsterra requests).
- Deployment contract preserved: `next.config.ts` uses `output: "export"`, `wrangler.jsonc` serves `./out` with no `main` Worker script, Static Assets `404-page` and `drop-trailing-slash` keep the slashless route contract.
- Verification: central `validate_guide_v4_stage.py page-builder` returns `pass` with 13 pages and 1 display image; `npm run verify` completes typecheck/lint/build successfully.
- Follow-up: deploy to the assigned shared Worker pool, attach GA4 / GSC / Bing, then hand off to `adsterra-integrator` for real codes.

### 2026-10-19 — Adsterra codes wired into ads.ts

- Task: Adsterra Integrator populated the 14 V4 page keys in `src/data/ads.ts` with real codes for Banner 728x90/468x60/320x50/300x250, Native Banner and Smartlink units; Popunder/Social Bar remain excluded because the page manifest does not select them.
- Placements: 6 platform placements (31811602 NativeBanner, 31811603 Smartlink, 31811604 728x90, 31811605 468x60, 31811606 320x50, 31811607 300x250) shared by 14 page keys via `ad-placement-manifest.json` slots.
- Verification: `npm run verify` re-run after rewrite; typecheck/lint/build green. No CF build or live checks performed (out of scope for this role).

### 2026-10-20 — how-long-to-beat panel + FAQ row

- Task: `2026-10-20-finalfantasyresonance-pro-how-long-to-beat` added a how-long-to-beat data-table on `/guides/demo-walkthrough` (demo 3-9h, main story 20-40h, completionist 60-80h) and a new FAQ row on `/faq` with the platform save-transfer caveat.
- Files: `src/data/pages/guide-pages.ts`, `src/data/pages/site-pages.ts`, `src/data/faq.ts`, `src/data/pages/home.ts`, `CONTENT_INDEX.md`.

### 2026-10-20 — per-character Vision pairing matrix

- Task: `2026-10-20-finalfantasyresonance-pro-vision-per-character-recommendations` added a per-character pairing matrix, a four-slot elemental coverage overlay, and a Mastery Rank / Magicite Awakening progression module to `/guides/visions`, plus a `Recommended Vision` column on the `/guides/characters` roster table.
- Files: `src/data/pages/guide-pages.ts`, `src/data/pages/home.ts`, `CONTENT_INDEX.md`.