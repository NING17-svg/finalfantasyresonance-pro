import type { PageContent } from "@/types/content";

export const guidePages: PageContent[] = [
  {
    id: "combat-basics",
    translationKey: "combat-basics",
    locale: "en-US",
    routeKind: "fixed",
    slug: "combat-basics",
    url: "/guides/combat-basics",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Stagger: Turn-Based Combat Guide",
    seoTitle: "Final Fantasy Resonance Stagger: Turn-Based Combat Guide",
    metaDescription:
      "Learn the FINAL FANTASY RESONANCE stagger and turn-based combat: timeline, Sweeping Stagger Extra Phase, and why the battle system does not include auto-battle.",
    summary:
      "How to read the stagger timeline, sweep every enemy in one turn to open the Extra Phase, and why there is no auto-battle.",
    hero: {
      eyebrow: "Combat basics",
      subtitle:
        "The stagger timeline and Sweeping Stagger Extra Phase underwrite every boss fight in FINAL FANTASY RESONANCE.",
      ctas: [
        { label: "See named bosses", href: "/guides/bosses" },
        { label: "Characters and party", href: "/guides/characters" },
      ],
      assetId: "combatTimeline",
    },
    quickAnswer:
      "Combat is turn-based on a left-to-right timeline with a hidden Stagger Gauge. Hit the active elemental weakness to drain the gauge, then Sweeping Stagger every enemy in the same turn to open the Extra Phase and pick the matching Resonance finisher from the SELECT RESONANCE wheel. There is no auto-battle — every turn is a strategy decision.",
    quickAnswerContext:
      "Preview the gauge fill rate, bonus damage and remaining HP on the enemy before you commit a move. Random encounters warn you by tinting the minimap red so you can route around them.",
    keyFacts: [
      { label: "Battle type", value: "Turn-based with left-to-right timeline" },
      { label: "Auto-battle", value: "Not present — manual every turn" },
      { label: "Difficulties", value: "Casual / Normal / Expert" },
      { label: "Speed control", value: "1x, 1.5x, 2x" },
    ],
    modules: [
      {
        id: "reading-the-stagger-timeline",
        type: "prose",
        heading: "Reading the stagger timeline",
        body:
          "Before you commit a move, the game previews three things on the enemy: the Stagger Gauge fill rate, the bonus damage the stagger will deal, and the enemy's remaining HP. Hitting the enemy's elemental weakness drains the gauge fastest. Random encounters warn you by tinting the battle sensor red on the minimap, so you can choose to engage or route around.",
      },
      {
        id: "sweeping-stagger-and-the-extra-phase",
        type: "prose",
        heading: "Sweeping Stagger and the Extra Phase",
        body:
          "When a gauge empties the enemy is staggered: it loses its turn and takes the previewed bonus damage, and the character who lands the stagger gets one extra action at the end of the round. Stagger every enemy in the same turn and you trigger a Sweeping Stagger, which opens the Extra Phase (BONUS PHASE in English). In that phase the whole party takes one extra action, then a Vision's Resonance finisher plays from a diamond-shaped wheel — pick the finisher whose element matches what is still standing.\n\nThe stagger rule and the spend pattern get tested hardest in the named optional hunts. See the [bosses overview](/guides/bosses) for which fights apply this loop the most aggressively.",
      },
      {
        id: "turn-order-difficulty-and-speed",
        type: "fact-panel",
        heading: "Turn order, difficulty, and speed",
        facts: [
          { label: "Difficulty options", value: "Casual, Normal, Expert", href: "/guides/combat-basics" },
          { label: "Expert effect", value: "Requires a real Sweeping Stagger plan" },
          { label: "Casual ceiling", value: "Casual can still hit a Normal stagger window" },
          { label: "Speed control", value: "1x baseline, 1.5x and 2x after the timeline feels routine" },
        ],
      },
      {
        id: "auto-battle-is-not-in-this-battle-system",
        type: "prose",
        heading: "Auto-battle is not in this battle system",
        body:
          "There is no auto-battle. The producer has confirmed this is deliberate: every turn is a strategy decision, so the AI does not press Attack for you. Pick actions manually each round, especially when a boss is in phase two.",
      },
      {
        id: "quick-turn-checklist",
        type: "steps",
        heading: "Quick turn checklist",
        items: [
          { title: "Preview the enemy", body: "Read the Stagger Gauge and HP before committing a move.", doneCondition: "Both numbers are visible on the enemy panel." },
          { title: "Hit the elemental weakness", body: "Drains the gauge fastest and previews the bonus stagger damage.", doneCondition: "Gauge reduction lands ahead of a non-element attack." },
          { title: "Aim for a Sweeping Stagger", body: "Stagger every enemy in the same turn to open the Extra Phase.", doneCondition: "All remaining enemies are staggered in turn 1." },
          { title: "Pick the Resonance finisher", body: "Match the SELECT RESONANCE wheel element to the remaining weakness.", doneCondition: "Selected finisher element matches the highlighted bar." },
          { title: "Save Limit Bursts for phase two", body: "Do not spend Limit Bursts on trash before a boss phases up.", doneCondition: "Limit Burst meter is intact entering the phase-two preview." },
        ],
      },
    ],
    faqIds: ["auto-battle"],
    relatedPageIds: ["bosses", "characters", "gilgamesh-fight"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-10-19",
  },
  {
    id: "bosses",
    translationKey: "bosses",
    locale: "en-US",
    routeKind: "fixed",
    slug: "bosses",
    url: "/guides/bosses",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Bosses: Gilgamesh and More Guide",
    seoTitle: "Final Fantasy Resonance Bosses: Gilgamesh and More Guide",
    metaDescription:
      "FINAL FANTASY RESONANCE bosses fall into story chapters, named optional hunts like Gilgamesh and Sephiroth, and the demo's secret boss. Includes unlock paths.",
    summary:
      "Which bosses are in the game, where they fit in the chapters, and how the named optional hunts and demo secret boss unlock.",
    hero: {
      eyebrow: "Bosses overview",
      subtitle:
        "Story chapter bosses teach the stagger timeline; optional hunts carry the trophy list; the demo secret boss is a Chapter 1 side path.",
      ctas: [
        { label: "Gilgamesh fight plan", href: "/guides/gilgamesh-fight" },
        { label: "Demo secret boss Shemhazai", href: "/guides/demo-secret-boss" },
      ],
    },
    quickAnswer:
      "Bosses in FINAL FANTASY RESONANCE split into three groups: story chapter bosses you cannot avoid, named optional hunts unlocked after the main story, and the demo's secret encounter. Gilgamesh and Sephiroth are the named optional hunts; Shemhazai is the demo's secret 6th boss.",
    quickAnswerContext:
      "Story chapter bosses teach the Sweeping Stagger mechanic. Optional hunts are where the trophy progress lives. The demo secret boss only shows up after a specific in-demo trigger.",
    keyFacts: [
      { label: "Story bosses", value: "Required, every chapter closer" },
      { label: "Named hunts", value: "Gilgamesh, Sephiroth / Ultima Weapon" },
      { label: "Demo secret", value: "Shemhazai, 6th boss after trigger" },
      { label: "Total demo bosses", value: "6 once Shemhazai is unlocked" },
    ],
    modules: [
      {
        id: "story-chapter-bosses",
        type: "prose",
        heading: "Story chapter bosses",
        body:
          "Every main chapter closes with a Stagger Gauge fight that requires a Sweeping Stagger plan. Examples from the community guide are the Chapter 1 Earth Shrine finale, the Grandshelt Castle encounter in Chapter 2, and the Machinopolis ambush in Chapter 3. None of these are missable; the chapter progression already requires beating them.",
      },
      {
        id: "optional-hunts",
        type: "prose",
        heading: "Optional hunts",
        body:
          "Gilgamesh is a named optional hunt unlocked after the main story and is not a chapter boss. He does not appear in the Chapter 1 demo. The Sephiroth and Ultima Weapon fights are higher-chapter superboss hunts tied to trophy progress; they need a fully built party because each adds tier-defining immunities or stagger mechanics. See the [Gilgamesh fight plan](/guides/gilgamesh-fight) for the two-phase walkthrough and Vision roster.",
      },
      {
        id: "demo-secret-boss",
        type: "prose",
        heading: "Demo secret boss",
        body:
          "The demo's only optional secret boss is Shemhazai, a hidden fight that triggers after specific in-demo requirements are met. The demo contains 6 total bosses once Shemhazai is unlocked; without the trigger you only see 5. See the [demo secret boss walkthrough](/guides/demo-secret-boss) for the trigger steps.",
      },
      {
        id: "how-to-pick-where-to-start",
        type: "steps",
        heading: "How to pick where to start",
        items: [
          { title: "Still in Chapter 1 or playing the demo", body: "Open the [demo walkthrough](/guides/demo-walkthrough) first.", doneCondition: "Demo run reaches the first Sanctum of Light." },
          { title: "After the credits", body: "Clear the [Colosseum](/guides/colosseum-endgame) and run Esper trials first, then enter the Chamber of Arms.", doneCondition: "Colosseum is at the Champion tier or higher." },
          { title: "Save the superboss for last", body: "Sephiroth and the Ultima Weapon require a well-built party; do them last.", doneCondition: "Vision roster is at Founder tier before engaging Sephiroth." },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: ["combat-basics", "gilgamesh-fight", "demo-secret-boss", "colosseum-endgame"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-19",
  },
  {
    id: "gilgamesh-fight",
    translationKey: "gilgamesh-fight",
    locale: "en-US",
    routeKind: "fixed",
    slug: "gilgamesh-fight",
    url: "/guides/gilgamesh-fight",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Gilgamesh Fight: Two-Phase Plan",
    seoTitle: "Final Fantasy Resonance Gilgamesh Fight: Two-Phase Plan",
    metaDescription:
      "FINAL FANTASY RESONANCE Gilgamesh is a named optional hunt with a weapon-swap pattern. You can beat him using elemental weakness and a tuned Vision roster.",
    summary:
      "Beat the Gilgamesh optional hunt by hitting the active weakness, sweeping every enemy in one turn, and tuning your Vision roster for both phases.",
    hero: {
      eyebrow: "Gilgamesh fight plan",
      subtitle:
        "Gilgamesh swaps weapons and weaknesses between phases — preview the Stagger Gauge every round and keep a Defender plus healer in the lineup.",
      ctas: [
        { label: "Visions roster", href: "/guides/visions" },
        { label: "Colosseum and endgame", href: "/guides/colosseum-endgame" },
      ],
    },
    quickAnswer:
      "Yes, you can beat Gilgamesh. He runs at least two phases on the timeline with a weapon-swap pattern that changes which elemental bar is active. Run a four-character lineup that covers stagger paint, physical close, defence and healing, sweep every enemy in one turn to open the Extra Phase, and pick the matching Resonance finisher from the SELECT RESONANCE wheel.",
    keyFacts: [
      { label: "Phases", value: "Two or more on the timeline" },
      { label: "Weakness", value: "Elemental weakness changes with the weapon swap" },
      { label: "Recommended party", value: "Stagger painter, physical closer, Defender, healer" },
      { label: "Trophy link", value: "Trophy #40 My Name Is Ultima…" },
    ],
    modules: [
      {
        id: "what-the-fight-looks-like",
        type: "prose",
        heading: "What the fight looks like",
        body:
          "Gilgamesh swaps weapons between phases. Each weapon changes which elemental bar is highlighted, which means you must keep an eye on the Stagger Gauge and weakness window at the start of every round. Hitting the active weakness drains the gauge fastest and unlocks the bonus damage previewed before you commit the move.",
      },
      {
        id: "recommended-party-and-vision-setup",
        type: "prose",
        heading: "Recommended party and Vision setup",
        body:
          "Use a four-character lineup that covers stagger paint, physical close, defence, and healing.\n\nThe goal is to Sweeping Stagger every enemy in one turn so the Extra Phase opens; once it does, pick the Vision's Resonance finisher on the SELECT RESONANCE wheel whose element matches the remaining weakness. The full Vision roster and upgrade XP table live on the [Visions locations and upgrade](/guides/visions) page.",
      },
      {
        id: "recommended-party-and-vision-setup-steps",
        type: "steps",
        heading: "Recommended party — step checklist",
        items: [
          { title: "Stagger painter", body: "Tronn or Terra — apply the highlighted elemental weakness on the bar.", doneCondition: "Selected Vision's element matches the active weakness bar." },
          { title: "Physical closer", body: "Cloud or Clive — capitalise on the Sweeping Stagger with Physical Damage scaling.", doneCondition: "Stun proc lands on the crit window." },
          { title: "Defender", body: "Warrior of Light or Charlotte — Provoke on hit keeps the party stable.", doneCondition: "Provoke stacks are refreshed before phase-two." },
          { title: "Healer", body: "Y'shtola or Rhea — keep the four-slot party alive through phase two.", doneCondition: "Healing Power scaling gear is equipped before the fight." },
        ],
      },
      {
        id: "step-by-step-plan",
        type: "steps",
        heading: "Step-by-step plan",
        items: [
          { title: "Open phase one on the active weakness", body: "Use the stagger painter's elemental weakness spell on the highlighted bar.", doneCondition: "Stagger Gauge starts dropping ahead of turn 2." },
          { title: "Hold the Limit Burst for the stagger break", body: "If the gauge is close to breaking, save the physical closer's Limit Burst for the stagger break rather than spending it on the lead-in.", doneCondition: "Limit Burst meter is full at the gauge break." },
          { title: "Sweep to open the Extra Phase", body: "Sweep every enemy in the same turn and pick the closest matching Resonance finisher from the SELECT RESONANCE wheel.", doneCondition: "Extra Phase triggers within the first turn." },
          { title: "Re-paint in phase two", body: "Read the new weapon bar immediately and re-paint with the matching Vision before the healer burns a turn.", doneCondition: "Healer turn stays available for Raise or Arise." },
          { title: "Save Raise for the drop", body: "In phase two, keep the healer's Raise or Arise for the moment a party member is dropped; do not spend heals on chip damage.", doneCondition: "Raise is reserved for the first KO." },
          { title: "Repeat and finish", body: "Repeat the Sweeping Stagger / Resonance loop until Gilgamesh is staggered twice in one round, then finish.", doneCondition: "Boss HP hits zero after the second double stagger." },
        ],
      },
      {
        id: "what-to-avoid",
        type: "comparison",
        heading: "What to avoid",
        options: [
          { name: "Four copies of Cloud", summary: "No element spread — the weakness swap punishes this lineup.", bestFor: "Light chapter trash only.", badge: "Avoid" },
          { name: "Limit Bursts on trash", summary: "Spending Limit Bursts before phase two leaves you with no burst to close the fight.", bestFor: "Trash mobs only.", badge: "Avoid" },
          { name: "Ignoring the previewed gauge", summary: "The Stagger Gauge preview tells you whether the round will stagger or save — skipping it costs a turn.", bestFor: "Repeatable mistakes.", badge: "Avoid" },
        ],
      },
      {
        id: "after-gilgamesh",
        type: "prose",
        heading: "After Gilgamesh",
        body:
          "When the fight is over, move on to trophy #40 My Name Is Ultima... if you have not yet beaten the Ultima Weapon superboss; both are tracked on the [Colosseum and endgame](/guides/colosseum-endgame) path.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["bosses", "visions", "colosseum-endgame"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-19",
  },
  {
    id: "visions",
    translationKey: "visions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "visions",
    url: "/guides/visions",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Visions: Locations and Upgrade",
    seoTitle: "Final Fantasy Resonance Visions: Locations, List and Upgrade",
    metaDescription:
      "FINAL FANTASY RESONANCE has 26 Visions split into 16 Legacy Heroes and 10 FFBE characters. Covers the list, tier priorities, locations, and upgrade XP costs.",
    summary:
      "26 Visions split into 16 Legacy Heroes and 10 FFBE / story-side Visions, plus tier priorities, Sanctum locations and the XP ladder.",
    hero: {
      eyebrow: "Visions roster",
      subtitle:
        "Every Vision in the 26-roster, the community-recommended tier list, and the XP costs to push each Vision to level 30.",
      ctas: [
        { label: "Crystal questions and answers", href: "/guides/crystal-questions" },
        { label: "Espers list", href: "/guides/espers" },
      ],
      assetId: "cloudPortrait",
    },
    quickAnswer:
      "FINAL FANTASY RESONANCE has 26 Visions split into 16 Legacy Heroes covering the mainline Final Fantasy series and 10 FFBE / story-side characters. Each Vision levels from 1 to 30 with a stepped XP cost, awakens through three Magicite stages, and grants a Resonance finisher used in the Extra Phase's SELECT RESONANCE wheel.",
    keyFacts: [
      { label: "Total visions", value: "26" },
      { label: "Legacy Heroes", value: "16, one per mainline Final Fantasy" },
      { label: "FFBE / story Visions", value: "10" },
      { label: "Level cap", value: "30, stepped XP costs at 5 / 10 / 15 / 20 / 25 / 30" },
    ],
    modules: [
      {
        id: "full-list-of-visions-26-total",
        type: "prose",
        heading: "Full list of Visions (26 total)",
        body:
          "Visions are crystallised essences of classic Final Fantasy heroes and FFBE story characters, obtained from Sanctums of Light scattered across the world of Paladia. Each character equips exactly one Vision at a time and gains its Primary Passive plus any unlocked Secondaries. The full roster has 26 Visions.",
      },
      {
        id: "16-legacy-heroes-one-for-each-mainline-final-fantasy",
        type: "prose",
        heading: "16 Legacy Heroes — one for each mainline Final Fantasy",
        body:
          "- FFI — Warrior of Light\n- FFII — Firion\n- FFIII — Onion Knight\n- FFIV — Cecil\n- FFV — Bartz\n- FFVI — Terra\n- FFVII — Cloud\n- FFVIII — Squall\n- FFIX — Zidane\n- FFX — Tidus\n- FFXI — Shantotto\n- FFXII — Vaan\n- FFXIII — Lightning\n- FFXIV — Y'shtola\n- FFXV — Noctis\n- FFXVI — Clive",
      },
      {
        id: "10-ffbe-story-visions",
        type: "prose",
        heading: "10 FFBE / story-side Visions",
        body:
          "Charlotte, Rhea, Tronn, Amelia, Camille, Wilhelm, Aileen, Victoria, Ayaka, and one unrevealed Vision.",
      },
      {
        id: "tier-list-priorities",
        type: "data-table",
        heading: "Tier list priorities",
        columns: [
          { key: "priority", label: "Priority" },
          { key: "vision", label: "Vision" },
          { key: "why", label: "Why it ranks here" },
        ],
        rows: [
          { priority: "Founder", vision: "Tronn, Terra", why: "Magic damage scaling + MP regen — best stagger painters" },
          { priority: "Founder", vision: "Y'shtola, Rhea", why: "Healing Power scaling keeps the four-slot party alive" },
          { priority: "High", vision: "Cloud, Clive", why: "Physical Damage scaling + Stun on crit — finishers after Sweeping Stagger" },
          { priority: "High", vision: "Warrior of Light, Charlotte", why: "Defense scaling + Provoke on hit — Defender-role tanks" },
          { priority: "Mid", vision: "Cecil, Firion, Lightning, Bartz", why: "Element coverage for sweep stagger across chapters" },
          { priority: "Mid", vision: "Shantotto, Vaan, Onion Knight", why: "Niche element / role coverage" },
          { priority: "Flex", vision: "Tidus, Zidane, Squall, Noctis", why: "Strong but require specific builds" },
        ],
      },
      {
        id: "confirmed-locations-sanctums-of-light",
        type: "prose",
        heading: "Confirmed locations (Sanctums of Light)",
        body:
          "Only a handful of Sanctum locations have been published so far. Most Sanctums will be revealed with the October 22, 2026 full launch.\n\n- Warrior of Light — north of Village Kol.\n- Cloud — west of Village Kol, or north of Siren's Tower.\n- Terra — southwest of Town of Felicitas.\n- Tronn and Rhea — inside the Cave at Rain's house in Town of Mitra.",
      },
      {
        id: "visions-upgrade-xp-costs-and-caps",
        type: "data-table",
        heading: "Visions upgrade — XP costs and caps",
        columns: [
          { key: "level", label: "Level reached" },
          { key: "cost", label: "XP cost to next level" },
        ],
        rows: [
          { level: "1 → 5", cost: "100" },
          { level: "5 → 10", cost: "250" },
          { level: "10 → 15", cost: "500" },
          { level: "15 → 20", cost: "1,000" },
          { level: "20 → 25", cost: "2,000" },
          { level: "25 → 30", cost: "4,000" },
        ],
      },
      {
        id: "vision-sources",
        type: "prose",
        heading: "Vision sources",
        body:
          "Vision Shards drop from random enemies; Crystallise Crystals come from elite monsters and shrines. The Resonance Boost consumable increases Vision XP by 50% for 30 minutes and is worth burning during a 25→30 push.",
      },
      {
        id: "mastery-rank-and-awakening",
        type: "prose",
        heading: "Mastery Rank and awakening",
        body:
          "Vision Mastery Points (MRP) raise a Vision's Mastery Rank (MR), unlocking abilities and bonus AP. Magicite in three sizes awakens each Vision in three stages. Cloud's Physical Damage scales from +8% to +20% with a 15% Stun on crit secondary at Lv 15; Y'shtola's Healing Power scales from +10% to +25% with Water damage +15% at Lv 12; Warrior of Light's Defense scales from +5% to +15% with Provoke on hit at Lv 18; Terra's Magic Damage scales from +8% to +20% with MP regen +2/turn at Lv 15.\n\nSave up to five custom loadouts per character so you can swap roles without re-equipping Passives.",
      },
      {
        id: "crystal-questions-at-each-sanctum",
        type: "prose",
        heading: "Crystal questions at each Sanctum",
        body:
          "At every Sanctum of Light the crystal asks a near-light question; answering yes reveals the Vision Cryst. The exact prompts are covered in the [crystal questions and answers](/guides/crystal-questions) page.",
      },
    ],
    faqIds: ["vision-count"],
    relatedPageIds: ["crystal-questions", "espers", "characters"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-10-19",
  },
  {
    id: "crystal-questions",
    translationKey: "crystal-questions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "crystal-questions",
    url: "/guides/crystal-questions",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Crystal Questions and Answers List",
    seoTitle: "Final Fantasy Resonance Crystal Questions and Answers List",
    metaDescription:
      "FINAL FANTASY RESONANCE crystal questions appear at every Sanctum of Light. The crystal asks a near-light question; answering yes reveals the Vision Cryst.",
    summary:
      "What the Sanctum of Light crystal asks, what answering yes reveals, and which Resonance art each early-game Vision unlocks.",
    hero: {
      eyebrow: "Crystal questions",
      subtitle:
        "Each Sanctum of Light asks a near-light question; answering yes reveals the Vision Cryst and unlocks that Vision's Resonance art.",
      ctas: [
        { label: "Visions locations and upgrade", href: "/guides/visions" },
        { label: "Espers list", href: "/guides/espers" },
      ],
      assetId: "visionBattle",
    },
    quickAnswer:
      "Every Sanctum of Light asks the player a near-light question; answering yes reveals the Vision Cryst and unlocks that Vision's Resonance art for the SELECT RESONANCE wheel. There is no penalty for hesitation — you may step away and return; only the yes answer triggers the reveal.",
    keyFacts: [
      { label: "Trigger", value: "Answer yes inside the Sanctum of Light inner ring" },
      { label: "Reward", value: "Vision Cryst + Resonance art" },
      { label: "Trophy #32", value: "Visions Assemble — 10 Visions collected" },
      { label: "Trophy #33", value: "Will Crystallized — all 26 Visions" },
    ],
    modules: [
      {
        id: "what-the-crystal-asks",
        type: "prose",
        heading: "What the crystal asks",
        body:
          "Each Sanctum of Light has the same prompt family with wording tied to the Vision held inside. The prompt asks you to confirm you accept the Vision's burden. There is no penalty for hesitation — you may step away and return; only the yes answer triggers the reveal.\n\nThe full Sanctum map for the 26 Visions lives on the [Visions locations and upgrade](/guides/visions) page — pick the Sanctum before answering, so the new Vision Cryst slots into the right character role.",
      },
      {
        id: "how-to-answer-the-crystal-question",
        type: "steps",
        heading: "How to answer the crystal question",
        items: [
          { title: "Walk into the inner ring", body: "Approach the crystal inside the Sanctum of Light.", doneCondition: "Crystal interaction prompt appears." },
          { title: "Read the prompt", body: "The prompt names the Vision being offered; read it in full before answering.", doneCondition: "Vision name is visible on the prompt." },
          { title: "Pick yes", body: "Answer yes to add the Vision Cryst to your inventory.", doneCondition: "Vision Cryst enters the inventory list." },
          { title: "Equip the new Vision Cryst", body: "Match element or role to the upcoming fight — Tronn or Terra for stagger paint, Y'shtola or Rhea for heals, Cloud or Clive for physical close.", doneCondition: "Equipped Vision matches the active weakness bar." },
          { title: "Confirm the Resonance art", body: "The Resonance art becomes available on the diamond SELECT RESONANCE wheel during the Extra Phase.", doneCondition: "Resonance art shows in the wheel during the next fight." },
        ],
      },
      {
        id: "confirmed-early-game-prompts",
        type: "data-table",
        heading: "Confirmed early-game prompts",
        columns: [
          { key: "sanctum", label: "Sanctum of Light" },
          { key: "prompt", label: "Prompt asks" },
          { key: "answer", label: "We do" },
          { key: "resonance", label: "Resonance art unlocked" },
        ],
        rows: [
          { sanctum: "First Sanctum on the Earth Shrine → Mitra road", prompt: "Accept a hero from another era", answer: "yes", resonance: "Crystal Braver (Warrior of Light) or Ascension (Cloud)" },
          { sanctum: "Cave at Rain's house, Town of Mitra", prompt: "Accept a magic-wielding Vision", answer: "yes", resonance: "Tronn's stagger spell, Rhea's heal finisher" },
          { sanctum: "North of Village Kol", prompt: "Accept the Warrior of Light's burden", answer: "yes", resonance: "Crystal Braver" },
          { sanctum: "West of Village Kol / north of Siren's Tower", prompt: "Accept Cloud's burden", answer: "yes", resonance: "Ascension" },
          { sanctum: "Southwest of Town of Felicitas", prompt: "Accept Terra's burden", answer: "yes", resonance: "Magi damage Resonance" },
        ],
      },
      {
        id: "prompts-after-october-22",
        type: "prose",
        heading: "Prompts after October 22",
        body:
          "Most other Sanctum locations and full prompt wording will be revealed with the October 22, 2026 launch. Trophy #32 Visions Assemble unlocks at 10 Visions collected and #33 Will Crystallized at all 26.",
      },
      {
        id: "what-changes-when-you-answer",
        type: "prose",
        heading: "What changes when you answer",
        body:
          "After you answer yes, the Legacy Hero's techniques and magic become available to the equipped character, and the Resonance art of that Vision becomes selectable in the Extra Phase. The Vision Cryst still needs to be equipped on a character in the active party — owning it is not enough.\n\nIf you want the full Sanctum map for the remaining 23 Visions, see the [Visions locations and upgrade](/guides/visions) page.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["visions", "espers"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-19",
  },
  {
    id: "espers",
    translationKey: "espers",
    locale: "en-US",
    routeKind: "fixed",
    slug: "espers",
    url: "/guides/espers",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Espers: List and How to Summon",
    seoTitle: "Final Fantasy Resonance Espers List and How Fina Summons",
    metaDescription:
      "FINAL FANTASY RESONANCE has 9 Espers including Siren and Ramuh. Espers are summoned by Fina and fight alongside the party before unleashing their finisher.",
    summary:
      "How Fina summons Espers in battle, the 9-Esper trophy list, and the link to the Esper's Dwelling walkthrough.",
    hero: {
      eyebrow: "Espers roster",
      subtitle:
        "Fina is the only summoner in the active party. Each Esper fights alongside the party for a set number of turns before unleashing its finisher.",
      ctas: [
        { label: "Esper's Dwelling walkthrough", href: "/guides/esper-dwelling-walkthrough" },
        { label: "Visions locations", href: "/guides/visions" },
      ],
      assetId: "visionBattle",
    },
    quickAnswer:
      "Espers are summoned monsters that Fina calls onto the battlefield. A summoned Esper fights alongside the party for a set number of turns performing its own attacks, then unleashes its signature skill and leaves. Nine Espers exist in total, in line with trophy #36 The Sovereigns of the Planet.",
    keyFacts: [
      { label: "Summoner", value: "Fina must be in the active party" },
      { label: "Total Espers", value: "9 — Siren and Ramuh directly confirmed" },
      { label: "Simultaneous summons", value: "Only one at a time" },
      { label: "Trophy #35", value: "Esper's Covenant — 3 Espers helped" },
    ],
    modules: [
      {
        id: "how-the-esper-system-works",
        type: "prose",
        heading: "How the Esper system works",
        body:
          "- Fina must be in the active four-member party to issue a summon.\n- Only one Esper can be summoned at a time.\n- The summoned Esper performs its own attacks during its turns, not the party's.\n- When the Esper's turn counter expires, it unleashes its finisher and exits the battle.\n\nThis makes Fina a slot you cannot drop for most boss fights — losing the summon slot costs you a finisher, a heal, or a stagger paint depending on the matchup.",
      },
      {
        id: "confirmed-espers-2-directly-confirmed-9-total",
        type: "data-table",
        heading: "Confirmed Espers (2 directly confirmed, 9 total)",
        columns: [
          { key: "esper", label: "Esper" },
          { key: "role", label: "Role" },
          { key: "status", label: "Source status" },
          { key: "finisher", label: "Finisher" },
        ],
        rows: [
          { esper: "Siren", role: "Light / Healing support", status: "Confirmed — Siren's Tower optional dungeon in Chapter 1", finisher: "Lunatic Voice" },
          { esper: "Ramuh", role: "Lightning / Damage dealer", status: "Confirmed — hidden in an optional corner of the world map", finisher: "Judgment Thunder" },
        ],
      },
      {
        id: "community-roster",
        type: "prose",
        heading: "Community roster",
        body:
          "Community guides also list Ifrit, Shiva, Titan, Carbuncle, Leviathan, Odin and Bahamut, with finishers Hellfire, Diamond Dust, Earthen Fury, ruby / emerald / sapphire auras, Tidal Wave, Zantetsuken and Megaflare respectively. Only Siren and Ramuh are directly confirmed by official reveals in this collector pass.",
      },
      {
        id: "trophy-progress-for-espers",
        type: "prose",
        heading: "Trophy progress for Espers",
        body:
          "- Trophy #35 Esper's Covenant — gain help from 3 Espers.\n- Trophy #36 The Sovereigns of the Planet — gain help from all 9 Espers.\n\nRun the [Esper's Dwelling walkthrough](/guides/esper-dwelling-walkthrough) to clear these one at a time.",
      },
      {
        id: "espers-dwelling-and-sealed-esper-trials",
        type: "prose",
        heading: "Esper's Dwelling and Sealed Esper trials",
        body:
          "Each Esper has an associated Esper's Dwelling optional dungeon with a hidden entrance, environmental puzzles, mid-dungeon mini-bosses and the Esper itself as the boss fight. The Sealed Esper trials behave the same way but require prerequisite side content or the area's other objectives before the seal drops. The Antlion counts as a desert Esper trial and unlocks Fina's first summon spell.\n\nRun the [Esper's Dwelling walkthrough](/guides/esper-dwelling-walkthrough) to clear these one at a time.\n\nPlan the four-member lineup around Fina, a Defender-role tank (Warrior of Light or Charlotte), a healer (Y'shtola or Rhea), and one elemental attacker that matches the Esper's weakness.",
      },
    ],
    faqIds: ["esper-count"],
    relatedPageIds: ["esper-dwelling-walkthrough", "visions", "characters"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-10-19",
  },
  {
    id: "esper-dwelling-walkthrough",
    translationKey: "esper-dwelling-walkthrough",
    locale: "en-US",
    routeKind: "fixed",
    slug: "esper-dwelling-walkthrough",
    url: "/guides/esper-dwelling-walkthrough",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Espers Dwelling Walkthrough Guide",
    seoTitle: "Final Fantasy Resonance Espers Dwelling Walkthrough Guide",
    metaDescription:
      "FINAL FANTASY RESONANCE Esper's Dwelling walkthrough covers how to find the dungeon, fight the Esper, and clear the Antlion desert and sealed Esper trials.",
    summary:
      "Step-by-step Esper's Dwelling run: hidden entrance, environmental puzzles, the Esper boss, the Antlion desert trial, and the Sealed Esper pattern.",
    hero: {
      eyebrow: "Esper's Dwelling walkthrough",
      subtitle:
        "Each Esper has its own Esper's Dwelling dungeon. Pick up the rumor quest, find the hidden entrance, clear the puzzles, then beat the Esper.",
      ctas: [
        { label: "Espers list", href: "/guides/espers" },
        { label: "Combat basics", href: "/guides/combat-basics" },
      ],
    },
    quickAnswer:
      "Every Esper in FINAL FANTASY RESONANCE has a matching Esper's Dwelling optional dungeon. Accept the rumor quest from a town board, follow the marker, find the hidden entrance one tile off the marker, clear the environmental puzzle gauntlet, then beat the Esper boss with a Sweeping Stagger plan. Sealed Esper trials follow the same shape but require prerequisite side content first.",
    keyFacts: [
      { label: "Dungeon shape", value: "Rumor quest → hidden entrance → puzzle gauntlet → Esper boss" },
      { label: "Antlion", value: "Desert Esper trial — Lightning weakness" },
      { label: "Sealed Esper", value: "Requires prerequisite side content first" },
      { label: "Trophy link", value: "Trophy #36 The Sovereigns of the Planet" },
    ],
    modules: [
      {
        id: "step-by-step-espers-dwelling-walkthrough",
        type: "steps",
        heading: "Step-by-step Esper's Dwelling walkthrough",
        items: [
          { title: "Pick up the rumor quest", body: "Take the Esper you want next from any town board. The board posts a world-map marker for the dwelling's entrance.", doneCondition: "World-map marker is visible." },
          { title: "Plan the four-member party", body: "Fina must be in the active lineup to issue the summon once the Esper is beaten. Pair her with a Defender tank (Warrior of Light or Charlotte), a healer (Y'shtola or Rhea), and one element-aligned attacker.", doneCondition: "Fina is in the active four." },
          { title: "Find the hidden entrance", body: "The marker is on the map; the actual entrance is one tile off the marker. Look for a shaded wall or a destructible rock; the prompt to enter appears once you walk into the trigger.", doneCondition: "Enter-dungeon prompt fires." },
          { title: "Clear the environmental puzzle gauntlet", body: "Expect moving tile puzzles, light-beam routing, and one mini-boss mid-dungeon.", doneCondition: "Mini-boss is down." },
          { title: "Beat the Esper boss", body: "Use the elemental weakness to drive the Stagger Gauge, then Sweeping Stagger every enemy in the round to open the Extra Phase and pick the matching finisher from the SELECT RESONANCE wheel.", doneCondition: "Esper leaves the battle." },
          { title: "Spend the rewards before leaving", body: "The dungeon rewards include the Vision Cryst for the Esper's element and an MRP boost — level your Vision before leaving the area.", doneCondition: "Vision Cryst is equipped." },
        ],
      },
      {
        id: "antlion-finas-first-summon-trial",
        type: "prose",
        heading: "Antlion — Fina's first summon trial",
        body:
          "The Antlion is the desert Esper trial that grants Fina her first summon spell. It is fought in the desert and is weak to Lightning; it is also vulnerable to Paralysis, Confusion and Disease.\n\nBring an AoE tank, a healer and a Lightning attacker such as Lightning (FFXIII Vision) or Raiden. Fina must be in the active party so the post-fight Esper contract completes. After the Antlion, run the rest of the Esper roster using the [Espers list and how to summon](/guides/espers) page as your checklist.",
      },
      {
        id: "antlion-phases",
        type: "data-table",
        heading: "Antlion phases",
        columns: [
          { key: "phase", label: "Phase" },
          { key: "what", label: "What happens" },
          { key: "todo", label: "What to do" },
        ],
        rows: [
          { phase: "Larval form", what: "Low-HP form, fast attacks", todo: "Sweep with Lightning damage; use Paralysis when available" },
          { phase: "Mid-battle", what: "Antlion resists physicals harder", todo: "Cast disease and confusion, let the timer tick" },
          { phase: "Adult form", what: "Transforms after a few turns; every hit deals fixed 9,999 damage", todo: "AoE tank takes the brunt; healer spams heals; Lightning attacker resumes the stagger paint" },
        ],
      },
      {
        id: "sealed-esper-trials",
        type: "prose",
        heading: "Sealed Esper trials",
        body:
          "Sealed Espers behave like hidden Esper trials: complete the prerequisite side content or the area's other objectives, then the seal drops and the Esper boss unlocks in the same pattern. They are part of trophy #36 The Sovereigns of the Planet — gain help from all 9 Espers — so check the [Espers roster](/guides/espers) page for which Espers remain.",
      },
    ],
    faqIds: ["esper-count"],
    relatedPageIds: ["espers", "visions", "characters"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-10-19",
  },
  {
    id: "colosseum-endgame",
    translationKey: "colosseum-endgame",
    locale: "en-US",
    routeKind: "fixed",
    slug: "colosseum-endgame",
    url: "/guides/colosseum-endgame",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Colosseum: Trophy and Strategy Guide",
    seoTitle: "Final Fantasy Resonance Colosseum: Trophy and Strategy Guide",
    metaDescription:
      "FINAL FANTASY RESONANCE Colosseum is a four-tier AI bracket in Grandshelt. Includes the trophy strategy, post-story order, and the Ultima Weapon trophy path.",
    summary:
      "Colosseum tiers, rewards, the recommended post-story order, and the 40-trophy spread across nine categories.",
    hero: {
      eyebrow: "Colosseum and endgame",
      subtitle:
        "Run the Colosseum for gear, then Esper trials, the Chamber of Arms, and save Sephiroth for last.",
      ctas: [
        { label: "Full walkthrough and choices", href: "/guides/walkthrough" },
        { label: "Bosses overview", href: "/guides/bosses" },
      ],
    },
    quickAnswer:
      "The Colosseum is a single-player AI bracket arena in Grandshelt that becomes available after leaving Town of Mitra in Chapter 1. It has Bronze, Silver, Gold and Champion tiers. The recommended post-story order is Colosseum for gear, then Esper trials for summons, then the Chamber of Arms for legendary weapons, then Sephiroth as the last hunt.",
    keyFacts: [
      { label: "Tiers", value: "Bronze / Silver / Gold / Champion" },
      { label: "Champion trophy", value: "Champion tier intentionally has no trophy" },
      { label: "Total trophies", value: "40 across nine categories" },
      { label: "Ultima Weapon", value: "Trophy #40 My Name Is Ultima…" },
    ],
    modules: [
      {
        id: "colosseum-structure",
        type: "data-table",
        heading: "Colosseum structure",
        columns: [
          { key: "tier", label: "Tier" },
          { key: "difficulty", label: "Difficulty" },
          { key: "unlock", label: "Unlock condition" },
        ],
        rows: [
          { tier: "Bronze", difficulty: "Casual-tier fights", unlock: "Available after leaving Town of Mitra in Chapter 1" },
          { tier: "Silver", difficulty: "Normal-tier fights", unlock: "Beat the Bronze gatekeeper NPC" },
          { tier: "Gold", difficulty: "Expert-tier fights", unlock: "Beat the Silver gatekeeper NPC" },
          { tier: "Champion", difficulty: "Hardest bracket, no trophy", unlock: "Beat the Gold gatekeeper NPC; Champion-tier intentionally has no trophy" },
        ],
      },
      {
        id: "rewards-from-the-colosseum",
        type: "prose",
        heading: "Rewards from the Colosseum",
        body:
          "Rewards fall into three buckets:\n\n- Exclusive weapons and armor not sold in shops — some pieces are Colosseum-only with special passive effects.\n- Gil scaled to bracket difficulty.\n- Trophies for clearing each bracket.\n\nThe Colosseum has its own dedicated shop with a proof-of-victory currency earned from clearing matches, on top of the gil-based shop elsewhere.",
      },
      {
        id: "post-story-order",
        type: "prose",
        heading: "Post-story order",
        body:
          "The recommended sequence once the credits roll is:\n\n1. Clear the Colosseum to gear the party and unlock its exclusive weapons.\n2. Run the Esper trials to round out Fina's summon roster (start with the Antlion for the first spell).\n3. Enter the Chamber of Arms for the legendary weapons.\n4. Save the Sephiroth optional hunt for last because it requires a well-built party.\n\nNeed the chapter path that unlocks the Colosseum in the first place? See the [full walkthrough and choices](/guides/walkthrough).",
      },
      {
        id: "post-story-order-steps",
        type: "steps",
        heading: "Post-story order — step checklist",
        items: [
          { title: "Clear the Colosseum", body: "Gear the party and grab the Colosseum-only exclusive weapons and armor.", doneCondition: "Champion tier cleared." },
          { title: "Run the Esper trials", body: "Round out Fina's summon roster — start with the Antlion for the first spell.", doneCondition: "Fina's first summon is unlocked." },
          { title: "Enter the Chamber of Arms", body: "Run the legendary weapons path after the Esper trials.", doneCondition: "Chamber of Arms is cleared." },
          { title: "Save Sephiroth for last", body: "The Sephiroth optional hunt needs a well-built party; do it last.", doneCondition: "Sephiroth is staggered." },
        ],
      },
      {
        id: "cross-content-strategy-tips",
        type: "prose",
        heading: "Cross-content strategy tips",
        body:
          "These tips apply across the Colosseum and other endgame fights:\n\n- Always preview the enemy's Stagger Gauge and weakness before attacking.\n- Sweep every enemy in one turn to open the Extra Phase and pick one Resonance finisher from the SELECT RESONANCE wheel.\n- Keep a healer (Y'shtola or Rhea), a stagger painter (Tronn or Terra) and a physical closer (Cloud or Clive) in the four-slot lineup.\n- Run battles at 2x speed on Expert difficulty once comfortable.\n- Overkill in the bonus phase gives bonus gil, and last-staggered kill gives bonus MRP.",
      },
      {
        id: "trophy-guide-summary",
        type: "prose",
        heading: "Trophy guide summary",
        body:
          "40 trophies live in nine areas:\n\n- Completion: 3\n- Story Chapters: 9\n- Exploration: 3\n- Colosseum: 3\n- Cave Masters: 3\n- Hunts: 3\n- Gil: 1\n- Visions: 5\n- Espers: 2\n- Gear: 5\n- Battle: 2\n\nNotable trophies include:\n\n- #37 Keep Them on Their Toes — stagger enemies 1,000 times.\n- #38 Resonance Rapid Fire — use Resonances 400 times.\n- #33 Will Crystallized — obtain all 26 Visions.\n- #36 The Sovereigns of the Planet — gain help from all 9 Espers.\n- #40 My Name Is Ultima... — defeat the Ultima Weapon superboss; this is the trophy that ties the Ultima Weapon hunt to the post-game. See the [Gilgamesh and hunt guide](/guides/bosses) for the wider hunt context.\n- #24 / #29 Struck Gold / Priceless Experience — first King Gil Snapper and first Metal Gigantuar kills.",
      },
    ],
    faqIds: ["trophy-count"],
    relatedPageIds: ["walkthrough", "bosses", "characters"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-10-19",
  },
  {
    id: "demo-walkthrough",
    translationKey: "demo-walkthrough",
    locale: "en-US",
    routeKind: "fixed",
    slug: "demo-walkthrough",
    url: "/guides/demo-walkthrough",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Demo Walkthrough: Length and Tips",
    seoTitle: "Final Fantasy Resonance Demo Walkthrough: Length and Tips",
    metaDescription:
      "FINAL FANTASY RESONANCE demo walkthrough covers the Chapter 1 opening: 3-5 hour length, 6 bosses, Espers dwelling demo, in-demo Visions, and the secret boss.",
    summary:
      "3-5 hour demo checklist from the Chapter 1 opening to credits, with the Siren Esper trial and the secret boss trigger called out.",
    hero: {
      eyebrow: "Demo walkthrough",
      subtitle:
        "Chapter 1 opening, three difficulty options, in-demo Visions at the first Sanctum, and the Siren Esper trial at the top of Siren's Tower.",
      ctas: [
        { label: "Demo secret boss Shemhazai", href: "/guides/demo-secret-boss" },
        { label: "Walkthrough and choices", href: "/guides/walkthrough" },
      ],
      assetId: "worldMap",
    },
    quickAnswer:
      "The demo covers the Chapter 1 opening, runs 3 to 5 hours on a normal run, and includes 6 bosses once Shemhazai is unlocked (5 without the trigger). Hard Mode unlocks by clearing the demo's main story on any difficulty, and the demo save transfers to the full game on launch day.",
    keyFacts: [
      { label: "Length", value: "3-5 hours" },
      { label: "Difficulty", value: "Casual, Normal, Expert" },
      { label: "Boss count", value: "5 normally, 6 with Shemhazai" },
      { label: "Save transfer", value: "Transfers to the full game on launch day" },
    ],
    modules: [
      {
        id: "demo-length-and-level-cap",
        type: "prose",
        heading: "Demo length and level cap",
        body:
          "The demo does not publish a specific level cap beyond the Chapter 1 progression range. Three difficulty options are available — Casual, Normal, Expert. Casual is forgiving; Normal and Expert require real Sweeping Stagger plans on every boss.",
      },
      {
        id: "demo-bosses",
        type: "data-table",
        heading: "Demo bosses",
        columns: [
          { key: "boss", label: "Boss" },
          { key: "where", label: "Where" },
          { key: "notes", label: "Notes" },
        ],
        rows: [
          { boss: "Earth Shrine finale", where: "Mandatory chapter closer", notes: "Teaches the Sweeping Stagger mechanic" },
          { boss: "Town of Mitra ambush", where: "Story-driven", notes: "First multi-enemy fight" },
          { boss: "Grandshelt Castle encounter", where: "Chapter 2 lead-in", notes: "New weakness bar introduced" },
          { boss: "Siren's Tower mid-boss", where: "Esper trial demo entrance", notes: "Pattern preview for full Siren fight" },
          { boss: "Siren", where: "Top of Siren's Tower optional dungeon", notes: "Confirmed Esper fight — beats grant Siren's help" },
          { boss: "Shemhazai", where: "Hidden, post-trigger", notes: "See [demo secret boss walkthrough](/guides/demo-secret-boss)" },
        ],
      },
      {
        id: "in-demo-visions-and-espers",
        type: "prose",
        heading: "In-demo Visions and Espers",
        body:
          "The first Sanctum of Light on the road between the Earth Shrine and Town of Mitra grants the first legacy Vision. Cloud and Warrior of Light are the common early rewards. Most Sanctum locations for the remaining 23 Visions were not available in the demo.\n\nThe Esper's Dwelling demo content covers only the Siren fight at the top of the Siren's Tower optional dungeon in Chapter 1. Ramuh and the other Esper dwellings unlock in the full game.",
      },
      {
        id: "step-by-step-demo-checklist",
        type: "steps",
        heading: "Step-by-step demo checklist",
        items: [
          { title: "Check the postbox", body: "Right after the opening, check the postbox outside the inn in Town of Mitra for pre-order / Deluxe / Collector bonuses.", doneCondition: "Bonus items are in the inventory." },
          { title: "First Sanctum of Light", body: "Stop at the first Sanctum on the Earth Shrine → Mitra road to pick up your first legacy Vision (Cloud or Warrior of Light).", doneCondition: "Vision Cryst is equipped before Town of Mitra." },
          { title: "Equip Vision Crystals before leaving Town of Mitra", body: "The bonus carries into the first dungeon.", doneCondition: "All four active characters are equipped." },
          { title: "High-bond dialogue choices", body: "Pick the high-bond dialogue choices during Chapter 1 cutscenes to see the Vision Crystal gifting quest trigger before the credits.", doneCondition: "Bond scenes are unlocked." },
          { title: "Siren fight after the first dungeon", body: "Run the Siren's Tower Siren fight after the first dungeon — the fastest way to pick up an Esper in the demo.", doneCondition: "Fina has summoned Siren." },
          { title: "Run trash at 2x", body: "Run trash fights at 2x speed to save real time.", doneCondition: "2x speed is selected for the trash pull." },
        ],
      },
      {
        id: "demo-secret-boss-trigger",
        type: "prose",
        heading: "Demo secret boss trigger",
        body:
          "The demo's only optional secret boss is Shemhazai. The trigger requires meeting specific in-demo conditions; the community recommends finishing the main Chapter 1 story first and exploring the overworld before pursuing it. The full trigger walkthrough lives on the [demo secret boss page](/guides/demo-secret-boss).",
      },
    ],
    faqIds: ["demo-length"],
    relatedPageIds: ["demo-secret-boss", "walkthrough", "visions"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-10-19",
  },
  {
    id: "demo-secret-boss",
    translationKey: "demo-secret-boss",
    locale: "en-US",
    routeKind: "fixed",
    slug: "demo-secret-boss",
    url: "/guides/demo-secret-boss",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Demo Secret Boss: Shemhazai Guide",
    seoTitle: "Final Fantasy Resonance Demo Secret Boss: Shemhazai Guide",
    metaDescription:
      "FINAL FANTASY RESONANCE demo secret boss Shemhazai is the optional 6th boss. Covers the trigger setup, party lineup, and Sweeping Stagger plan to beat it.",
    summary:
      "Trigger setup, recommended lineup, and the Sweeping Stagger plan that beats the hidden Shemhazai encounter.",
    hero: {
      eyebrow: "Demo secret boss",
      subtitle:
        "Shemhazai is the demo's optional 6th boss. Finish Chapter 1 first, clear an optional dungeon, then return to the overworld marker.",
      ctas: [
        { label: "Full game walkthrough", href: "/guides/walkthrough" },
        { label: "Gilgamesh fight plan", href: "/guides/gilgamesh-fight" },
      ],
    },
    quickAnswer:
      "Shemhazai is the demo's optional secret boss. It only appears after specific in-demo conditions are met and becomes the 6th boss of the demo. Beat it with the same Sweeping Stagger line-up as the Gilgamesh hunt: a stagger painter, a physical closer, a Defender and a healer.",
    keyFacts: [
      { label: "Total demo bosses with Shemhazai", value: "6" },
      { label: "Total demo bosses without", value: "5" },
      { label: "Recommended line-up", value: "Stagger painter + physical closer + Defender + healer" },
      { label: "Hard Mode unlock", value: "Cleared by beating the main story on any difficulty" },
    ],
    modules: [
      {
        id: "how-to-unlock-shemhazai",
        type: "steps",
        heading: "How to unlock Shemhazai",
        items: [
          { title: "Finish the main Chapter 1 story", body: "Beat the main Chapter 1 story on any difficulty first.", doneCondition: "Credits roll once." },
          { title: "Return to the overworld", body: "After the credits, return to the overworld and clear at least one optional dungeon (the Siren's Tower Siren fight is the most accessible).", doneCondition: "One optional dungeon is cleared." },
          { title: "Pick up the first Sanctum Vision Crystals", body: "Pick up every Vision Crystal from the first Sanctum of Light on the Earth Shrine → Mitra path so the equipment slots are usable in the trigger phase.", doneCondition: "Equipment slots are filled." },
          { title: "Return to the overworld marker", body: "Return to the overworld marker that appears after step 2; Shemhazai's encounter triggers at the marked tile.", doneCondition: "Encounter prompt fires." },
        ],
      },
      {
        id: "the-trigger-is-silent",
        type: "prose",
        heading: "The trigger is silent",
        body:
          "The trigger is silent during normal play — there is no popup or quest log entry that says \"Shemhazai is now available\". If you walked past it the first time, the marker stays in your file.",
      },
      {
        id: "sweeping-stagger-plan-for-shemhazai",
        type: "prose",
        heading: "Sweeping Stagger plan for Shemhazai",
        body:
          "Shemhazai is a timeline-based multi-phase fight with a stagger check at the end of each phase. The recommended lineup mirrors the [Gilgamesh plan](/guides/gilgamesh-fight):\n\n1. Stagger painter — Tronn or Terra.\n2. Physical closer — Cloud or Clive.\n3. Defender — Warrior of Light or Charlotte.\n4. Healer — Y'shtola or Rhea.\n\nStep-by-step:\n\n1. Preview the shimmer's Stagger Gauge and active elemental weakness before committing any action in phase one.\n2. Open phase one with the stagger painter's elemental weakness on the highlighted bar.\n3. Sweeping Stagger the adds so the Extra Phase opens; pick the closest matching Resonance finisher from the SELECT RESONANCE wheel.\n4. Save Limit Bursts for the second phase transition rather than spending them on phase one.\n5. In phase two, re-paint the new weakness immediately so the healer is not forced to spend a turn on Raise or Arise.\n6. Repeat the Sweeping Stagger / Resonance loop until Shemhazai is staggered twice in one round, then finish.",
      },
      {
        id: "after-shemhazai",
        type: "prose",
        heading: "After Shemhazai",
        body:
          "Once Shemhazai is cleared, the only thing left in the demo is finishing optional dungeon content and the Esper trial Siren fight. Move on to the [full game walkthrough](/guides/walkthrough) when the game launches; Hard Mode will already be unlocked by clearing the main story on any difficulty.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["demo-walkthrough", "walkthrough", "gilgamesh-fight"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-19",
  },
  {
    id: "walkthrough",
    translationKey: "walkthrough",
    locale: "en-US",
    routeKind: "fixed",
    slug: "walkthrough",
    url: "/guides/walkthrough",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Walkthrough: Tips and Choices Guide",
    seoTitle: "Final Fantasy Resonance Walkthrough: Tips and Choices Guide",
    metaDescription:
      "FINAL FANTASY RESONANCE walkthrough runs 30-40 hours main, 60-80 completionist. Covers chapter flow, party size, and the choices that gate next content.",
    summary:
      "Chapter-by-chapter storyline, 4-slot active party, choices that gate Vision Crystals and bond scenes, and the recommended post-story order.",
    hero: {
      eyebrow: "Full walkthrough",
      subtitle:
        "Six chapters over 30-40 hours, with the post-story order picking up after the credits.",
      ctas: [
        { label: "Characters and party size", href: "/guides/characters" },
        { label: "Colosseum and endgame", href: "/guides/colosseum-endgame" },
      ],
      assetId: "worldMap",
    },
    quickAnswer:
      "The main playthrough runs 30-40 hours; completionists should plan for 60-80 hours. The active party is 4 controllable characters drawn from 8 named characters, with Fina required for Esper summons. The recommended post-story order is Colosseum for gear, Esper trials, the Chamber of Arms, and Sephiroth as the last hunt.",
    keyFacts: [
      { label: "Length", value: "30-40 hours main, 60-80 completionist" },
      { label: "Active party", value: "4 of 8 named characters" },
      { label: "Chapters", value: "Prologue + Chapters 1-6" },
      { label: "Post-story order", value: "Colosseum → Esper trials → Chamber of Arms → Sephiroth" },
    ],
    modules: [
      {
        id: "chapter-flow",
        type: "prose",
        heading: "Chapter flow",
        body:
          "- **Prologue** — Grandshelt Castle. Rain and Lasswell are dispatched to a weakened Earth Shrine.\n- **Chapter 1** — Earth Shrine and Grandshelt region (also the demo segment). Fina joins shortly after the opening. The first Vision assignment happens at the first Sanctum of Light on the Earth Shrine → Mitra path.\n- **Chapter 2** — Grandshelt Territories open. The Gilgamesh optional hunt, the Colosseum and the Chamber of Arms become available.\n- **Chapter 3** — Dilmagia (Machinopolis). Lid joins the active roster.\n- **Chapter 4** — Olderion (Aquapolis), a water-heavy chapter that asks the player to add ice or lightning stagger coverage.\n- **Chapter 5** — Zoldaad, a fire empire zone where Jake's rebel storyline starts and the Amelia and Wilhelm Visions appear.\n- **Chapter 6** — Mysidia (Magiapolis), where the Ice Crystal is recovered, Sakura joins, and the Ayaka and Victoria Visions are unlocked.",
      },
      {
        id: "tips-and-tricks-that-work-throughout",
        type: "prose",
        heading: "Tips and tricks that work throughout",
        body:
          "- Do not grind past the suggested chapter levels — stagger timing matters more than raw stats.\n- Swap the active Vision after every new Sanctum and against any boss with a new elemental weakness.\n- Preview the enemy's Stagger Gauge and damage before committing a turn so the Sweeping Stagger opportunity is not wasted.\n- Keep a Defender-role tank and a healer in the four slots whenever the boss is on Expert difficulty.\n- Save Limit Bursts for the second phase of boss fights rather than spending them on trash.\n- Run trash fights at 2x speed to save real time.\n- Preview the enemy's weakness bar in the first turn of any chapter; do not waste an action on a non-element attack if the highlighted bar is Fire.",
      },
      {
        id: "choices-that-matter",
        type: "prose",
        heading: "Choices that matter",
        body:
          "- The first Sanctum of Light between the Earth Shrine and Mitra decides which Legacy Vision comes first. Cloud and Warrior of Light are the common early rewards.\n- Dialogue branch points in Chapter 1 affect bond scenes with Rain, Lasswell and Fina and gate early Vision Crystal gifting quests.\n- Checking the postbox outside the Mitra inn early picks up bonus gear from pre-order / Deluxe / Collector editions.\n- After the credits, the recommended order is Colosseum for gear → Esper trials for summons → Chamber of Arms for legendary weapons → optional hunts like Gilgamesh, with Sephiroth saved for last because it requires a well-built party.",
      },
      {
        id: "characters-and-party-size",
        type: "prose",
        heading: "Characters and party size",
        body:
          "The active party is 4 controllable characters at any time, drawn from the 8 named playable characters — Rain, Lasswell, Fina, Lid, Nichol, Archwitch Fina, Jake, Sakura. Equipping the four strongest Vision Crystals to those four feels like up to 8 fighters because each Resonance art plays out in the Extra Phase. See the [characters list and party size](/guides/characters) page for the full roster and stats.",
      },
    ],
    faqIds: ["release-date-known", "platforms-known"],
    relatedPageIds: ["characters", "combat-basics", "colosseum-endgame"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-10-19",
  },
  {
    id: "characters",
    translationKey: "characters",
    locale: "en-US",
    routeKind: "fixed",
    slug: "characters",
    url: "/guides/characters",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Final Fantasy Resonance Characters: All 8 Playable Roster",
    seoTitle: "Final Fantasy Resonance Characters: All 8 Playable Roster",
    metaDescription:
      "FINAL FANTASY RESONANCE has 8 playable characters across 6 roles — Commando, Medic, Sentinel, Breaker, Synergist, Saboteur. Active party is 4 with Lv1 stats.",
    summary:
      "8 named playable characters across the FFV-style Job system of 6 roles. Active party is 4. Fina is the only summoner; Lasswell is the only Spellblade.",
    hero: {
      eyebrow: "Characters and party",
      subtitle:
        "Eight named characters. The active party is four; Fina must be in the lineup if you want Espers.",
      ctas: [
        { label: "Combat basics", href: "/guides/combat-basics" },
        { label: "Espers list", href: "/guides/espers" },
      ],
    },
    quickAnswer:
      "FINAL FANTASY RESONANCE ships with 8 named playable characters. Up to 4 are controllable in the active party at a time, with the other 4 available by rotation. The party is built around the FFV-style Job system of six roles — Commando, Medic, Sentinel, Breaker, Synergist, Saboteur. Fina is the only character who can summon Espers; Lasswell is the only Spellblade.",
    keyFacts: [
      { label: "Roster size", value: "8 named characters" },
      { label: "Active party", value: "4 characters at a time" },
      { label: "Roles", value: "Commando, Medic, Sentinel, Breaker, Synergist, Saboteur" },
      { label: "Unique traits", value: "Fina summons Espers; Lasswell is the Spellblade" },
    ],
    modules: [
      {
        id: "full-characters-list-with-lv1-stats",
        type: "data-table",
        heading: "Full characters list with Lv1 stats",
        columns: [
          { key: "name", label: "Name" },
          { key: "role", label: "Role" },
          { key: "weapon", label: "Weapon / Armour" },
          { key: "hp", label: "Lv1 HP" },
          { key: "mp", label: "MP" },
          { key: "str", label: "STR" },
          { key: "sta", label: "STA" },
          { key: "mag", label: "MAG" },
          { key: "spi", label: "SPI" },
          { key: "spd", label: "SPD" },
        ],
        rows: [
          { name: "Rain", role: "Sentinel", weapon: "Greatsword / Heavy-Light", hp: "200", mp: "35", str: "35", sta: "25", mag: "16", spi: "28", spd: "7" },
          { name: "Lasswell", role: "Breaker", weapon: "Katana / Heavy-Light", hp: "170", mp: "40", str: "28", sta: "25", mag: "20", spi: "28", spd: "11" },
          { name: "Fina", role: "Medic", weapon: "Bow / Robe-Light", hp: "160", mp: "65", str: "25", sta: "25", mag: "15", spi: "35", spd: "8" },
          { name: "Lid", role: "Commando", weapon: "Hammer / Light-Heavy", hp: "180", mp: "35", str: "27", sta: "22", mag: "17", spi: "16", spd: "6" },
          { name: "Nichol", role: "Synergist", weapon: "Brujoire / Robe-Light", hp: "170", mp: "55", str: "20", sta: "15", mag: "30", spi: "25", spd: "10" },
          { name: "Archwitch Fina", role: "Saboteur", weapon: "Whip / Robe-Light", hp: "200", mp: "70", str: "25", sta: "18", mag: "32", spi: "15", spd: "8" },
          { name: "Jake", role: "Commando", weapon: "Gun / Light-Heavy", hp: "190", mp: "36", str: "30", sta: "16", mag: "18", spi: "22", spd: "7" },
          { name: "Sakura", role: "Commando", weapon: "Rod / Robe-Light", hp: "150", mp: "75", str: "18", sta: "15", mag: "40", spi: "25", spd: "5" },
        ],
      },
      {
        id: "unique-traits",
        type: "prose",
        heading: "Unique traits",
        body:
          "Lasswell is the only character with the Spellblade trait. Fina is the only character who can summon Espers.",
      },
      {
        id: "element-and-role-kit-per-character",
        type: "prose",
        heading: "Element and role kit per character",
        body:
          "- **Rain (Fire, Sentinel)** — Infinity Drive, Fire, Flame Sword, Fira, Crimson Onslaught, Firaga, Banishing Raid.\n- **Lasswell (Ice, Breaker)** — Blizzard, Dawn Frost, Ice Splitter, Blizzara, Transient Rite, Blizzaga, Absolving Hailstorm.\n- **Fina (Light + Healing)** — Holy Ray, Shining Arrow, Luminant Cannon (Light); Cure, Esuna, Cura, Curaga, Raise, Arise, Reraise (Healing).\n- **Lid (Earth)** — Mechabo Kick, Stone, Stonera, Stonega. Mechabo learns new moves from monster materials.\n- **Nichol (Water, Synergist)** — Water, Watera, Aquatic Pulse, Waterga, Aqua Blast, God of Water's Blessing. Formations buff the party.\n- **Archwitch Fina (Dark)** — Chaotic Convergence, Dark Pain, Queenly Whip, Dystopia, Abyss Graviton, Shadow Unending, Meteor, Ultima.\n- **Jake (Wind)** — T.R.N.D., Aero, Gale Strike, Aerora, Aeroga, Demolisher Rush. Jake has a Luck level that raises his critical-hit chance and gates some skills.\n- **Sakura (Multi-element)** — Thunder, Stygian Scythe, Thundara, Luminant Glim, Thundaga, Tonitus, Sakura's Ultima, Blighted Gloom, Flare, Meteor.",
      },
      {
        id: "side-characters-and-antagonists",
        type: "prose",
        heading: "Side characters and antagonists",
        body:
          "Side characters and antagonists include the Sworn Six of Paladia and the Veritas of the Dark. These appear in substories; they are not in the active roster.",
      },
      {
        id: "trophy-progress-for-the-roster",
        type: "prose",
        heading: "Trophy progress for the roster",
        body:
          "- Trophy #2 Those Who Defy Fate — unlocks when all 8 party members are unlocked.\n- Trophy #3 Conscience Renewed — requires clearing each character's substory.",
      },
      {
        id: "party-size-and-roles",
        type: "prose",
        heading: "Party size and roles",
        body:
          "The active party size is 4. Equip the four strongest Vision Crystals to those four; with one finisher per slot the Extra Phase can play up to 4 Resonances in one round. The recommended baseline of roles is one Sentinel, one Breaker or Commando, one Medic, and one Synergist or Saboteur depending on the boss. The full Sweeping Stagger loop lives on the [combat basics](/guides/combat-basics) page.",
      },
    ],
    faqIds: ["party-size"],
    relatedPageIds: ["combat-basics", "espers", "walkthrough"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-10-19",
  },
];