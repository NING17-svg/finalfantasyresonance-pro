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