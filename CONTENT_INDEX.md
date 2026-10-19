# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Site Snapshot

- Game: FINAL FANTASY RESONANCE (Steam AppID 4025750)
- Domain: `finalfantasyresonance.pro`
- Language: en-US (single locale)
- Region: us
- Pipeline: guide-v4 (V4 reading & page-assembly template)
- Layout theme: royal blue `#1f3b8a` / warm gold `#c49a35` on parchment `#f6f4ef` surface, 8px radius, lines decoration

## Page Inventory

The rows below are the primary-locale baseline. Final routes are produced from `src/data/pages/*.ts` via `npm run routes:manifest`; see `route-manifest.json` for the machine-readable list.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | FINAL FANTASY RESONANCE guide | Find a player-entry for the game | Open the player guide / Browse the full walkthrough | Hub | First module exposes Combat / Visions / Bosses / Walkthrough entries; key-facts strip covers release, platforms, party size, Esper count. |
| `/guides/combat-basics` | `src/data/pages/combat-basics.ts` | Guide (process) | FINAL FANTASY RESONANCE stagger / combat system / turn-based combat / auto-battle | Understand the stagger timeline and Extra Phase | Open the player guide / Bosses | Answer hub | 5-step turn checklist, difficulty/speed fact-panel, no auto-battle quick answer. |
| `/guides/bosses` | `src/data/pages/bosses.ts` | Guide (hub) | FINAL FANTASY RESONANCE bosses / secret boss | See story chapter bosses, optional hunts, demo secret boss | Gilgamesh-fight / Walkthrough | Hub | Story chapter bosses + optional hunts + demo secret; numbered "How to pick where to start" steps. |
| `/guides/gilgamesh-fight` | `src/data/pages/gilgamesh-fight.ts` | Guide (process) | FINAL FANTASY RESONANCE Gilgamesh fight / weakness / can you beat Gilgamesh | Beat Gilgamesh with recommended party + 6-step plan | Visions | Detail | Recommended party as steps; what-to-avoid comparison; 6-step Sweeping Stagger plan. |
| `/guides/visions` | `src/data/pages/visions.ts` | Guide (hub) | FINAL FANTASY RESONANCE Visions / list of Visions / tier list / locations / Visions upgrade | 26-Vision roster + locations + upgrades + per-character pairing matrix | Crystal-questions / Combat-basics | Hub | Legacy Heroes + FFBE roster, tier list table, per-character pairing matrix, four-slot elemental coverage overlay, upgrade XP table, confirmed locations, Mastery Rank, Magicite Awakening stages. |
| `/guides/crystal-questions` | `src/data/pages/crystal-questions.ts` | Guide (answer) | FINAL FANTASY RESONANCE Visions questions and answers / crystal questions / crystal answers | Answer the Sanctum of Light crystals | Visions / Walkthrough | Answer | 5-step answering process, confirmed early-game prompts table, Resonance art unlocks. |
| `/guides/espers` | `src/data/pages/espers.ts` | Guide (hub) | FINAL FANTASY RESONANCE Espers / Espers list | 9-Espers roster + Esper trial system + Esper's Dwelling link | Esper-dwelling-walkthrough / Combat-basics | Hub | Roster table, trophy progress, Esper's Dwelling link. |
| `/guides/esper-dwelling-walkthrough` | `src/data/pages/esper-dwelling-walkthrough.ts` | Guide (process) | FINAL FANTASY Espar's Dwelling / walkthrough / desert Esper / Antlion fight | Walk through Esper's Dwelling + sealed Esper trials | Espers / Walkthrough | Detail | 6-step general run, Antlion 3-phase table, sealed Esper trials. |
| `/guides/colosseum-endgame` | `src/data/pages/colosseum-endgame.ts` | Guide (answer) | FINAL FANTASY RESONANCE Colosseum / strategy guide / trophy guide / Ultima Weapon | Run the Colosseum and post-story order | Walkthrough | Answer | Colosseum structure table, rewards, post-story order, trophy summary. |
| `/guides/demo-walkthrough` | `src/data/pages/demo-walkthrough.ts` | Guide (process) | FINAL FANTASY RESONANCE demo walkthrough / demo guide / demo tips / demo length / demo level cap / demo Visions / demo secrets / demo bosses / Visions in demo / Esper's Dwelling demo / how long to beat | Finish the demo + reach the secret boss trigger | Demo-secret-boss / Walkthrough | Process | 6-step checklist, how-long-to-beat panel (demo 3-9h, main story 20-40h, completionist 60-80h), 6-boss table, in-demo Visions and Esper dwelling copy. |
| `/guides/demo-secret-boss` | `src/data/pages/demo-secret-boss.ts` | Guide (process) | FINAL FANTASY RESONANCE demo secret bosses | Unlock + beat the demo's secret boss | Walkthrough | Detail | Trigger steps, recommended lineup, Sweeping Stagger plan. |
| `/guides/walkthrough` | `src/data/pages/walkthrough.ts` | Guide (hub) | FINAL FANTASY RESONANCE walkthrough / guide / tips / tips and tricks / choices guide | Full walkthrough + chapter choices | Characters / Combat-basics | Hub | Chapter flow, tips, choices that matter. |
| `/guides/characters` | `src/data/pages/characters.ts` | Guide (hub) | FINAL FANTASY RESONANCE characters / party / playable characters / all characters / all party members / party members / party size / characters list / recommended Vision | 8-character roster + 4-slot active party + recommended Vision per character | Combat-basics / Walkthrough / Visions | Hub | Full roster table (now with Recommended Vision column), kits, party size + roles; references /guides/visions pairing matrix. |
| `/about` | `src/data/pages/about.ts` | Utility | about FINAL FANTASY RESONANCE Guide | Trust and editorial policy | Contact | Trust | Site purpose, contact info. |
| `/contact` | `src/data/pages/contact.ts` | Utility | contact FINAL FANTASY RESONANCE Guide | Corrections and source updates | About | Trust | `support@finalfantasyresonance.pro`. |
| `/faq` | `src/data/pages/faq.ts` | Guide | FINAL FANTASY RESONANCE FAQ | Short answers | Release Info / Contact | Answer hub | FAQ schema enabled; now includes how-long-to-beat row (main story 20-40h, completionist 60-80h). |
| `/privacy-policy` | `src/data/pages/privacy-policy.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/terms.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | State applicable site use terms without repeating a global disclaimer. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths. Only `en-US` is configured for this launch.

## Content Clusters

- Combat and core loop: `/guides/combat-basics`, `/guides/gilgamesh-fight`, `/guides/bosses`
- Visions and Espers: `/guides/visions`, `/guides/crystal-questions`, `/guides/espers`, `/guides/esper-dwelling-walkthrough`
- Walkthrough and endgame: `/guides/walkthrough`, `/guides/colosseum-endgame`, `/guides/demo-walkthrough`, `/guides/demo-secret-boss`
- Roster: `/guides/characters`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/faq`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage links to Combat / Visions / Bosses / Walkthrough entry guides and provides a single grouped directory for every published guide.
- Combat basics next-step goes to Bosses; Bosses next-step goes to Gilgamesh-fight; Gilgamesh next-step goes to Visions.
- Visions next-step goes to Crystal-questions; Crystal-questions re-links to Visions for level-up info on the same answer page. Characters next-step additionally cross-references the per-character Vision pairing matrix on /guides/visions.
- Espers next-step goes to Esper's Dwelling walkthrough; Dwelling walkthrough re-links to Espers for the roster.
- Colosseum endgame next-step goes to Walkthrough; Demo walkthrough next-step goes to Demo secret boss; Demo secret boss next-step goes to Walkthrough.
- Walkthrough next-step goes to Characters; Characters next-step goes to Combat-basics.

## Ad inventory and placements follow `AD_LAYOUT.md`

- Page-top (728x90 → 468x60 desktop / 320x50 mobile)
- Home: home-after-entry Native Banner, home-topic-break 728x90 → 468x60 desktop / 300x250 mobile
- Guide: guide-native mobile Native Banner, guide-section-break 728x90 → 468x60 desktop / 320x50 mobile, guide-before-faq 468x60 desktop / 320x50 mobile
- All pages: footer-sponsored Smartlink
- Codes in `src/data/ads.ts` are reserved as empty strings; only `adsterra-integrator` writes real codes after launch through the existing browser automation.

## Open Questions

- No open questions at launch.