import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "guide-portal", supplementary: "collapsed" },
  h1: "FINAL FANTASY RESONANCE — Player Guide",
  seoTitle: "FINAL FANTASY RESONANCE Guide: Combat, Visions, Endgame",
  metaDescription:
    "FINAL FANTASY RESONANCE guide covers the stagger timeline, 26 Visions, 9 Espers, the Colosseum, and endgame. Includes the demo walkthrough and characters.",
  summary:
    "Unofficial FINAL FANTASY RESONANCE guide: stagger combat, 26 Visions, 9 Espers, the Colosseum, and the Chapter 1 demo walkthrough.",
  hero: {
    eyebrow: "Unofficial player guide",
    subtitle:
      "Stagger combat timeline, 26 Visions, 9 Espers, the Colosseum, and the Chapter 1 demo — all in one place.",
    ctas: [
      { label: "Open the player guide", href: "/guides/combat-basics" },
      { label: "Browse the full walkthrough", href: "/guides/walkthrough" },
    ],
    assetId: "keyart",
  },
  quickAnswer:
    "FINAL FANTASY RESONANCE is the first HD-2D entry in the series, a turn-based JRPG where stagger timing, Vision Crystals, and Fina's Esper summons drive every boss fight. This site walks you through the Chapter 1 demo, the Visions and Espers roster, the optional hunts like Gilgamesh and Shemhazai, and the post-story Colosseum order.",
  keyFacts: [
    { label: "Release timing", value: "October 22, 2026 (console) / October 23, 2026 (Steam)" },
    { label: "Platforms", value: "Switch, Switch 2, PS5, Xbox Series X|S, Steam" },
    { label: "Active party", value: "4 of 8 named characters" },
    { label: "Visions", value: "26 (16 Legacy Heroes + 10 FFBE / story)" },
    { label: "Espers", value: "9 total — 2 directly confirmed" },
  ],
  modules: [
    {
      id: "find-an-answer",
      type: "guide-index",
      heading: "Find an answer",
      columns: 1,
      groups: [
        {
          title: "Combat and party",
          description: "Start with the stagger timeline and the active roster before you hit any boss.",
          items: [
            { label: "Combat basics — stagger & timeline", href: "/guides/combat-basics", description: "Sweeping Stagger, Extra Phase, no auto-battle." },
            { label: "Characters and party size", href: "/guides/characters", description: "The 8-character roster and 4-slot active party." },
          ],
        },
        {
          title: "Visions and Espers",
          description: "Crystal questions, Vision Crystals, and Fina's 9-Esper summon list.",
          items: [
            { label: "Visions — locations and upgrade", href: "/guides/visions", description: "26 Vision roster, per-character pairing matrix, Sanctums of Light, XP costs." },
            { label: "Crystal questions and answers", href: "/guides/crystal-questions", description: "What the Sanctum of Light crystal asks." },
            { label: "Espers list and how to summon", href: "/guides/espers", description: "Fina's summon mechanic and the 9-Esper trophy path." },
            { label: "Esper's Dwelling walkthrough", href: "/guides/esper-dwelling-walkthrough", description: "How to run a trial and clear the Antlion desert Esper." },
          ],
        },
        {
          title: "Bosses and endgame",
          description: "Story chapter fights, optional hunts, and the post-story trophy order.",
          items: [
            { label: "Bosses overview", href: "/guides/bosses", description: "Story chapter bosses, optional hunts, and the demo secret boss." },
            { label: "Gilgamesh fight plan", href: "/guides/gilgamesh-fight", description: "Two-phase walkthrough with Vision setup and what not to do." },
            { label: "Demo secret boss Shemhazai", href: "/guides/demo-secret-boss", description: "Trigger setup, lineup, and the Sweeping Stagger plan." },
            { label: "Colosseum and endgame", href: "/guides/colosseum-endgame", description: "Bracket tiers, post-story order, and the Ultima Weapon trophy." },
          ],
        },
        {
          title: "Walkthrough",
          description: "The full game and the Chapter 1 demo.",
          items: [
            { label: "Full walkthrough and choices", href: "/guides/walkthrough", description: "Chapter flow, active party, and choices that gate next content." },
            { label: "Demo walkthrough", href: "/guides/demo-walkthrough", description: "3-5 hour demo checklist, full how-long-to-beat table, in-demo Visions, and the secret boss trigger." },
          ],
        },
      ],
    },
  ],
  faqIds: ["what-is-this-site", "is-official", "release-date-known", "platforms-known", "guide-depth"],
  relatedPageIds: [],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-19",
};