import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "FINAL FANTASY RESONANCE Guide",
  brandMark: "FFR",
  gameName: "FINAL FANTASY RESONANCE",
  domain: "finalfantasyresonance.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://finalfantasyresonance.pro").replace(/\/$/, ""),
  description:
    "Unofficial FINAL FANTASY RESONANCE guide covering the stagger combat timeline, 26 Visions, 9 Espers, the Colosseum, and the Chapter 1 demo.",
  tagline:
    "FINAL FANTASY RESONANCE player guide: stagger combat, 26 Visions, 9 Espers, and the Chapter 1 demo walkthrough.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "Guide index",
        homeDetails: "About this guide and recent updates",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
  ],
  author: "FINAL FANTASY RESONANCE Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "FINAL FANTASY RESONANCE on Steam",
      href: "https://store.steampowered.com/app/4025750/FINAL_FANTASY_RESONANCE/",
      description: "Official Steam store page for FINAL FANTASY RESONANCE.",
    },
  ],
  disclaimer:
    "Unofficial fan guide for FINAL FANTASY RESONANCE. Game facts and screenshots are used to help players find answers; no affiliation with Square Enix or LANCARSE Ltd.",
};