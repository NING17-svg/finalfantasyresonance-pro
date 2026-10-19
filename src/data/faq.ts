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
      "Nintendo Switch, Nintendo Switch 2, PlayStation 5, Xbox Series X|S, and PC via Steam. The Steam version releases one day after consoles.",
    pageIds: ["home", "faq", "walkthrough"],
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
    id: "trophy-count",
    question: "How many trophies are there in FINAL FANTASY RESONANCE?",
    answer:
      "Forty trophies across nine areas: completion, story chapters, exploration, Colosseum, Cave Masters, hunts, gil, Visions, Espers, gear, and battle.",
    pageIds: ["colosseum-endgame", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
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