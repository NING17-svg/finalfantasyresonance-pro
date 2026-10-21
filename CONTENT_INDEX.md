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
| `/` | `src/data/pages/home.ts` | Landing | FINAL FANTASY RESONANCE guide | Find a player-entry for the game | Open the player guide / Browse the full walkthrough | Hub | First module exposes Combat / Visions / Bosses / Walkthrough / Buying-and-collectibles entries; key-facts strip covers release, platforms, Standard edition price, PC/Steam Deck status, party size, Esper count. |
| `/guides/combat-basics` | `src/data/pages/guide-pages.ts` | Guide (process) | FINAL FANTASY RESONANCE stagger / combat system / turn-based combat / auto-battle | Understand the stagger timeline and Extra Phase | Open the player guide / Bosses | Answer hub | 5-step turn checklist, difficulty/speed fact-panel, no auto-battle quick answer. |
| `/guides/bosses` | `src/data/pages/guide-pages.ts` | Guide (hub) | FINAL FANTASY RESONANCE bosses / secret boss | See story chapter bosses, optional hunts, demo secret boss | Gilgamesh-fight / Walkthrough | Hub | Story chapter bosses + optional hunts + demo secret; Chapter 1 optional-hunt stat table (level / HP / elemental counter), dungeon danger-level readout, Sephiroth section stating the unlock is unpublished; numbered "How to pick where to start" steps. |
| `/guides/gilgamesh-fight` | `src/data/pages/guide-pages.ts` | Guide (process) | FINAL FANTASY RESONANCE Gilgamesh fight / weakness / can you beat Gilgamesh | Beat Gilgamesh with recommended party + 6-step plan | Visions | Detail | Level 11 / 6,000 HP / no listed weakness stat table, the scripted flee and Genji Gloves reward, a callout separating the Chapter 1 encounter from the longer fight, recommended party as steps, what-to-avoid comparison, 6-step Sweeping Stagger plan. |
| `/guides/visions` | `src/data/pages/guide-pages.ts` | Guide (hub) | FINAL FANTASY RESONANCE Visions / list of Visions / tier list / locations / Visions upgrade | 26-Vision roster + locations + upgrades + per-character pairing matrix | Crystal-questions / Combat-basics | Hub | Legacy Heroes + FFBE roster, tier list table, per-character pairing matrix, four-slot elemental coverage overlay, upgrade XP table, confirmed locations, Mastery Rank, Magicite Awakening stages. |
| `/guides/crystal-questions` | `src/data/pages/guide-pages.ts` | Guide (answer) | FINAL FANTASY RESONANCE Visions questions and answers / crystal questions / crystal answers | Answer the Sanctum of Light crystals | Visions / Walkthrough | Answer | 5-step answering process, confirmed early-game prompts table, Resonance art unlocks. |
| `/guides/espers` | `src/data/pages/guide-pages.ts` | Guide (hub) | FINAL FANTASY RESONANCE Espers / Espers list | 9-Espers roster + Esper trial system + Esper's Dwelling link | Esper-dwelling-walkthrough / Combat-basics | Hub | Roster table, trophy progress, Esper's Dwelling link. |
| `/guides/esper-dwelling-walkthrough` | `src/data/pages/guide-pages.ts` | Guide (process) | FINAL FANTASY Espar's Dwelling / walkthrough / desert Esper / Antlion fight / Antlion weakness | Walk through Esper's Dwelling + sealed Esper trials | Espers / Walkthrough | Detail | 6-step general run, Antlion section showing both sourced weakness lines (Water/Light at level 20, 20,000 HP vs the earlier Lightning note) instead of hiding the conflict, Antlion 3-phase table, sealed Esper trials. |
| `/guides/colosseum-endgame` | `src/data/pages/guide-pages.ts` | Guide (answer) | FINAL FANTASY RESONANCE Colosseum / strategy guide / trophy guide / platinum / Ultima Weapon | Run the Colosseum, plan the post-story order, and complete the 40 trophies | Walkthrough / Tablet-shards | Answer | Colosseum structure table, rewards, post-story order, Cave Master + shard-ladder link, trophy fact-panel (40 = 29/7/4/1 with 17 hidden), all-40-trophy table, single-playthrough verdict, do-before-the-final-chapter checklist. |
| `/guides/demo-walkthrough` | `src/data/pages/guide-pages.ts` | Guide (process) | FINAL FANTASY RESONANCE demo walkthrough / demo guide / demo tips / demo length / demo level cap / demo Visions / demo secrets / demo bosses / Visions in demo / Esper's Dwelling demo / how long to beat / demo bonus items / demo tablet shards | Finish the demo + reach the secret boss trigger | Demo-secret-boss / Walkthrough | Process | 7-step checklist including the Mitra postbox bonus claim and the Chapter 1 Tablet Shard sweep, how-long-to-beat panel (demo 3-9h, main story 20-40h, completionist 60-80h), 6-boss table, in-demo Visions, Esper dwelling and 12-shard copy. |
| `/guides/demo-secret-boss` | `src/data/pages/guide-pages.ts` | Guide (process) | FINAL FANTASY RESONANCE demo secret bosses | Unlock + beat the demo's secret boss | Walkthrough | Detail | Trigger steps, recommended lineup, Sweeping Stagger plan. |
| `/guides/walkthrough` | `src/data/pages/guide-pages.ts` | Guide (hub) | FINAL FANTASY RESONANCE walkthrough / guide / tips / tips and tricks / choices guide | Full walkthrough + chapter choices | Characters / Combat-basics | Hub | Chapter flow, tips, choices that matter, and a collectibles module covering the 26 Sanctum Visions plus the 99-shard Tablet Shard set. |
| `/guides/characters` | `src/data/pages/guide-pages.ts` | Guide (hub) | FINAL FANTASY RESONANCE characters / party / playable characters / all characters / all party members / party members / party size / characters list / recommended Vision | 8-character roster + 4-slot active party + recommended Vision per character | Combat-basics / Walkthrough / Visions | Hub | Full roster table (now with Recommended Vision column), kits, party size + roles; references /guides/visions pairing matrix. |
| `/guides/editions-and-bonuses` | `src/data/pages/guide-pages.ts` | Guide (answer) | FINAL FANTASY RESONANCE editions / pre-order bonus / Deluxe edition / Collector's Edition / bonus deadline | Pick an edition and claim every bonus before its cutoff | Demo-walkthrough / PC-and-steam-deck | Answer | US/UK/EU/JPY price table for Standard, Digital Deluxe and Collector's, Deluxe pack contents, Collector goods and region SKU caveats, Switch vs Switch 2 save rules, two-clock bonus schedule (November 5 console / November 6 Steam), 4-step Mitra postbox claim, and what to skip. |
| `/guides/pc-and-steam-deck` | `src/data/pages/guide-pages.ts` | Guide (process) | FINAL FANTASY RESONANCE Steam Deck / PC settings / system requirements / black screen / controller not working | Get a stable frame rate and working controls on PC or handheld before buying | Editions-and-bonuses / Combat-basics | Detail | Steam Deck Verified status, per-panel measured frame rates, the 720p/High + Shadows Medium + 60 Hz OLED fix, the 45 FPS Ultra battery alternative, measured handheld comparison, the full nine-option graphics menu with no upscaler, minimum/recommended specs, and seven launch-day fixes. |
| `/guides/tablet-shards` | `src/data/pages/guide-pages.ts` | Guide (hub) | FINAL FANTASY RESONANCE Tablet Shards / Oblivion Palace / all 99 shard locations / shard trade | Collect every demo and full-game shard to unlock Oblivion Palace chests | Colosseum-endgame / Walkthrough | Hub | Oblivion Palace location and Enigmatic Princess trade, the cumulative counting rule, the full 25-chest threshold-to-reward ladder (3 to 99), Legendary Arms callout, the 12 mapped Chapter 1 shard spots, and a per-region full-game route table. |
| `/about` | `src/data/pages/about.ts` | Utility | about FINAL FANTASY RESONANCE Guide | Trust and editorial policy | Contact | Trust | Site purpose, contact info. |
| `/contact` | `src/data/pages/contact.ts` | Utility | contact FINAL FANTASY RESONANCE Guide | Corrections and source updates | About | Trust | `support@finalfantasyresonance.pro`. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | FINAL FANTASY RESONANCE FAQ | Short answers | Editions-and-bonuses / Contact | Answer hub | FAQ schema enabled; rows now cover edition choice, the November 5-6 bonus deadline, PC requirements + Steam Deck Verified, Tablet Shard count, how-long-to-beat, and the 40-trophy 29/7/4/1 breakdown with 17 hidden. |
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
- Buying and platform: `/guides/editions-and-bonuses`, `/guides/pc-and-steam-deck`
- Collectibles and trophies: `/guides/tablet-shards`, `/guides/colosseum-endgame`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/faq`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage links to Combat / Visions / Bosses / Walkthrough entry guides and provides a single grouped directory for every published guide.
- Combat basics next-step goes to Bosses; Bosses next-step goes to Gilgamesh-fight; Gilgamesh next-step goes to Visions.
- Visions next-step goes to Crystal-questions; Crystal-questions re-links to Visions for level-up info on the same answer page. Characters next-step additionally cross-references the per-character Vision pairing matrix on /guides/visions.
- Espers next-step goes to Esper's Dwelling walkthrough; Dwelling walkthrough re-links to Espers for the roster.
- Colosseum endgame next-step goes to Walkthrough; Demo walkthrough next-step goes to Demo secret boss; Demo secret boss next-step goes to Walkthrough.
- Walkthrough next-step goes to Characters; Characters next-step goes to Combat-basics.
- Home carries a Buying, platforms and collectibles group linking all three new pages; Editions-and-bonuses cross-links Demo-walkthrough and PC-and-steam-deck, PC-and-steam-deck cross-links Combat-basics, Tablet-shards cross-links Colosseum-endgame and Demo-walkthrough.
- FAQ links Editions-and-bonuses and PC-and-steam-deck as its buying entry points; Demo-walkthrough, Walkthrough and Colosseum-endgame link the new pages from their own answer copy.

## Ad inventory and placements follow `AD_LAYOUT.md`

- Page-top (728x90 → 468x60 desktop / 320x50 mobile)
- Home: home-after-entry Native Banner, home-topic-break 728x90 → 468x60 desktop / 300x250 mobile
- Guide: guide-native mobile Native Banner, guide-section-break 728x90 → 468x60 desktop / 320x50 mobile, guide-before-faq 468x60 desktop / 320x50 mobile
- All pages: footer-sponsored Smartlink
- Codes in `src/data/ads.ts` are reserved as empty strings; only `adsterra-integrator` writes real codes after launch through the existing browser automation.

## Open Questions

- No open questions at launch.