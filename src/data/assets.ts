import type { AssetManifest } from "@/types/assets";

export const assetManifest = {
  keyart: {
    id: "keyart",
    src: "/images/ffresonance-keyart-wide-1920x706.jpg",
    alt: "FINAL FANTASY RESONANCE key art with platform icons and a winged character silhouette against clouds.",
    width: 1920,
    height: 706,
    usage: "Home hero visual identity for the FINAL FANTASY RESONANCE guide hub.",
    pageIds: ["home"],
  },
  combatTimeline: {
    id: "combatTimeline",
    src: "/images/ffresonance-screenshot-02.jpg",
    alt: "In-game combat screenshot showing the turn-based timeline with party characters facing a large monster.",
    width: 1920,
    height: 1080,
    usage: "Combat basics guide illustration for the stagger timeline and Extra Phase mechanic.",
    pageIds: ["combat-basics", "bosses"],
  },
  cloudPortrait: {
    id: "cloudPortrait",
    src: "/images/ffresonance-screenshot-04-celebration.jpg",
    alt: "Close-up portrait of Cloud from FINAL FANTASY RESONANCE during a lightning effect cutscene.",
    width: 3840,
    height: 2160,
    usage: "Featured guide lead visual for the Visions roster, anchoring the Legacy Hero theme.",
    pageIds: ["visions"],
  },
  worldMap: {
    id: "worldMap",
    src: "/images/ffresonance-screenshot-05-tokyo.jpg",
    alt: "World map view of an island chain in the overworld with a flying red airship in the sky.",
    width: 3840,
    height: 2160,
    usage: "Walkthrough supporting visual for chapter routing and overworld navigation.",
    pageIds: ["walkthrough", "demo-walkthrough"],
  },
  visionBattle: {
    id: "visionBattle",
    src: "/images/ffresonance-screenshot-06-vis.jpg",
    alt: "Forest battle scene with translucent Vision crystal characters summoned behind the party.",
    width: 3840,
    height: 2160,
    usage: "Espers and crystal questions supporting visual for Vision Crystals and Esper summons.",
    pageIds: ["espers", "crystal-questions"],
  },
} satisfies AssetManifest;