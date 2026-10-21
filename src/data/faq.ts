import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-this-site",
    question: "What does the FINAL FANTASY RESONANCE guide cover?",
    answer:
      "The guide walks through stagger timelines, the 26 Visions, the 9 Espers, the optional hunts like Gilgamesh and Shemhazai, the Colosseum and trophy strategy, and the Chapter 1 demo checklist.",
    pageIds: ["home", "faq", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "is-official",
    question: "Is this an official Square Enix or LANCARSE site?",
    answer:
      "No. This is an unofficial fan guide. Final purchase and release-timing decisions should still come from official sources such as the Steam store listing.",
    pageIds: ["home", "faq", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "release-date-known",
    question: "When does FINAL FANTASY RESONANCE launch?",
    answer:
      "Console editions launch October 22, 2026. The Steam version releases October 23, 2026. Always confirm the date on the official store page before buying.",
    pageIds: ["home", "faq", "walkthrough"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-known",
    question: "Which platforms is FINAL FANTASY RESONANCE on?",
    answer:
      "Nintendo Switch, Nintendo Switch 2, PlayStation 5, Xbox Series X|S, and PC via Steam. The Steam version releases one day after consoles and is Steam Deck Verified; see the PC and Steam Deck page for measured frame rates, the graphics options menu and the real system requirements.",
    pageIds: ["home", "faq", "walkthrough", "pc-and-steam-deck"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "auto-battle",
    question: "Does FINAL FANTASY RESONANCE have an auto-battle option?",
    answer:
      "No. The producer has confirmed auto-battle is not part of this battle system; every turn is a strategy decision, especially when a boss is in phase two.",
    pageIds: ["combat-basics", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "party-size",
    question: "How big is the active party?",
    answer:
      "Four characters are controllable at any time, drawn from the 8 named roster. Fina must be in the lineup if you want to summon Espers.",
    pageIds: ["characters", "espers", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "vision-count",
    question: "How many Visions are there in total?",
    answer:
      "There are 26 Visions in total: 16 Legacy Heroes covering the mainline series and 10 FFBE / story-side Visions.",
    pageIds: ["visions", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "esper-count",
    question: "How many Espers can Fina summon?",
    answer:
      "Nine Espers are summonable. Siren and Ramuh are confirmed directly; Ifrit, Shiva, Titan, Carbuncle, Leviathan, Odin and Bahamut are listed by community guides.",
    pageIds: ["espers", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-length",
    question: "How long is the FINAL FANTASY RESONANCE demo?",
    answer:
      "A normal demo run is 3 to 5 hours and covers the Chapter 1 opening. Six bosses appear once Shemhazai is unlocked; otherwise the demo has five.",
    pageIds: ["demo-walkthrough", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-long-to-beat",
    question: "How long is FINAL FANTASY RESONANCE to beat?",
    answer:
      "Plan around 20 to 40 hours for the main story (Gamerfuzion previews cite 20–30h; hexeba hands-on cites 30–40h). Completionists should expect 60 to 80 hours, covering Esper trials, Vision Magicite Awakenings, every Colosseum tier, and the hidden bosses. The demo itself runs 3 to 5 hours per Square Enix, around 6 hours in TGS staff play, and 3 to 9 hours across community runs. Demo save transfers to the full game on launch day for one platform only — restarting on a different platform resets progress.",
    pageIds: ["demo-walkthrough", "walkthrough", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "editions-choice",
    question: "Which FINAL FANTASY RESONANCE edition should I buy?",
    answer:
      "Standard at $49.99 is the best-value buy. Digital Deluxe at $59.99 adds the Magitek & Grimoire Pack — chocobo armour, an exclusive Fel Meteor Limit Burst, a Mastery Ring and consumables — and is digital only, with a $14.99 upgrade path on the Nintendo eShop. The $209.99 Collector's Edition is physical art goods (acrylic blocks, a 120-page book, a 4-CD soundtrack, a TCG promo) and carries no gameplay advantage. Switch and Switch 2 are separate SKUs and saves do not transfer between them.",
    pageIds: ["editions-and-bonuses", "walkthrough", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "bonus-deadlines",
    question: "When do the FINAL FANTASY RESONANCE pre-order and early-purchase bonuses expire?",
    answer:
      "Two clocks. Pre-order ends at launch on October 22, 2026. The early-purchase Squire Kickstart Pack — a Blessed Cuirass that raises gil earned plus a Mist Ether — closes November 5, 2026 at 11:59 p.m. local time on PlayStation, Xbox and the Nintendo eShop (Pacific time on Nintendo), and November 6, 2026 at 8:59 a.m. PT on Steam. Bonus items do not appear in your inventory on day one: they arrive at the postbox outside the inn in the Town of Mitra once you have progressed far enough.",
    pageIds: ["editions-and-bonuses", "demo-walkthrough", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "pc-requirements",
    question: "What PC does FINAL FANTASY RESONANCE need, and is it Steam Deck Verified?",
    answer:
      "Minimum is Windows 11 64-bit, an AMD Ryzen 3 2300X or Intel Core i3-8100, 8 GB RAM and an RX 6400, Intel Arc A580 or GTX 1650, targeting 1080p at 30 FPS on the Low preset. Recommended is 1080p at 60 FPS on Highest. It is Steam Deck Verified: the default 720p/High preset holds above 60 FPS outside heavy spell effects, while maximum settings give roughly 40 FPS — drop Shadows to Medium and cap the OLED panel at 60 Hz.",
    pageIds: ["pc-and-steam-deck", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "tablet-shards",
    question: "How many Tablet Shards are there in FINAL FANTASY RESONANCE?",
    answer:
      "The game holds 99, and 99 is also the threshold on the final chest, so a complete run opens everything. The demo carries 12, which opens the first four 1-Star chests at Oblivion Palace — Vitality Charm, Earrings, a Magicite Shard and the Stagger Ring. Twenty-five chests sit behind the Enigmatic Princess across four chambers, and the ladder runs 3, 6, 9, 12, 16 and on up to 99.",
    pageIds: ["tablet-shards", "demo-walkthrough", "colosseum-endgame", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "trophy-count",
    question: "How many trophies are there in FINAL FANTASY RESONANCE?",
    answer:
      "Forty in total: 29 Bronze, 7 Silver, 4 Gold and 1 Platinum, with 17 hidden (14 Bronze, 2 Silver, 1 Gold). They fall into ten groups — story chapters, Colosseum leagues, the Tablet Shards and the Enigmatic Princess, the Twelve Legendary Arms, Visions, Espers, stagger and Resonance milestones, Cave Masters, combat and equipment milestones, and gil totals. A single playthrough is enough; there are no difficulty-locked trophies.",
    pageIds: ["colosseum-endgame", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "guide-depth",
    question: "How detailed is this guide at launch?",
    answer:
      "Each guide page ships with the confirmed facts from the upstream materials. Trophy progress, Espers not directly confirmed by official material, and Vision Stagger damage rules will be expanded after the official launch signals.",
    pageIds: ["home", "faq", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
];