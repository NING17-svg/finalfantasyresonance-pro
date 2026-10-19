import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "FINAL FANTASY RESONANCE FAQ",
    seoTitle: "FINAL FANTASY RESONANCE FAQ: Common Player Questions",
    metaDescription:
      "Common FINAL FANTASY RESONANCE questions: launch timing, platforms, auto-battle, party size, Visions, Espers, demo length, and trophy count.",
    summary:
      "Common launch, platform, gameplay, and site-scope questions for the FINAL FANTASY RESONANCE guide.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Direct answers on launch timing, platforms, auto-battle, party size, Visions, Espers, the demo, and the trophy list.",
      ctas: [
        { label: "Combat basics", href: "/guides/combat-basics" },
        { label: "Walkthrough", href: "/guides/walkthrough" },
      ],
    },
    quickAnswer:
      "This FAQ answers only what the site can support with official facts or clear editorial policy. Release timing is confirmed: console editions launch October 22, 2026; the Steam version releases October 23, 2026.",
    keyFacts: [
      { label: "FAQ source", value: "Official facts or site policy" },
      { label: "Schema", value: "FAQ JSON-LD enabled" },
      { label: "Review", value: "Update when launch facts change" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "FAQ policy",
        body:
          "Answers are short, source-aware, and easy to update. Speculative claims about release timing, platform lists, gameplay systems, or technical details are avoided. Where a fact is not directly confirmed, the entry says so.",
      },
    ],
    faqIds: [
      "what-is-this-site",
      "is-official",
      "release-date-known",
      "platforms-known",
      "auto-battle",
      "party-size",
      "vision-count",
      "esper-count",
      "demo-length",
      "trophy-count",
      "guide-depth",
    ],
    relatedPageIds: ["about", "contact", "walkthrough"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-19",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About the unofficial FINAL FANTASY RESONANCE guide: scope, sourcing rules, editorial principles, and what the site does not cover.",
    summary:
      "A trust page explaining the unofficial status, sourcing rules, and guide scope of the FINAL FANTASY RESONANCE guide.",
    hero: {
      eyebrow: "About",
      subtitle:
        "What the site covers, how facts are sourced, and what readers should expect from the FINAL FANTASY RESONANCE guide.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial player guide. Final purchase and release-timing decisions should still come from official Square Enix, LANCARSE and Steam pages.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Verified facts first" },
      { label: "Scope", value: "Combat, Visions, Espers, demo, endgame" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help FINAL FANTASY RESONANCE players find clear, well-structured information about the stagger timeline, Visions, Espers, the Chapter 1 demo, optional hunts like Gilgamesh and Shemhazai, and the post-story Colosseum and trophy path — without pretending the site knows more than official sources support.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Launch facts are drawn from official websites, store pages, developer updates, publisher posts, and press materials. Uncertain areas are marked as pending instead of being filled in with guesses. Trophy progress, unconfirmed Espers, and Vision Stagger damage rules will be expanded after the October 22, 2026 official launch signals.",
      },
      {
        id: "scope",
        type: "prose",
        heading: "Scope",
        body:
          "The site covers the gameplay systems, character and Vision roster, Esper mechanics, optional hunts, the Chapter 1 demo, and the post-story Colosseum path. It does not republish licensed art, soundtrack assets, or full text dumps of copyrighted materials.",
      },
    ],
    faqIds: ["what-is-this-site", "is-official", "guide-depth"],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-19",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact the FINAL FANTASY RESONANCE guide for corrections, official source updates, and site feedback. Email support@finalfantasyresonance.pro.",
    summary:
      "A trust page for corrections, source updates, and feedback on the FINAL FANTASY RESONANCE guide.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections, official source links, and site feedback. The site does not request private account information.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Send corrections, official source links, and site feedback to support@finalfantasyresonance.pro. The site does not request private account information or game account credentials.",
    keyFacts: [
      { label: "Email", value: "support@finalfantasyresonance.pro" },
      { label: "Use", value: "Corrections, source updates, feedback" },
      { label: "Response time", value: "Best effort, not a 24/7 support line" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Email support@finalfantasyresonance.pro for corrections, official source updates, and general site feedback. There is no live chat, ticket system, or in-game support channel — this site is an unofficial guide, not a publisher support line.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "If a fact on the site is wrong, send a link to the official source (Steam store page, press release, developer post) and the page URL that needs to change. Do not send private account information, in-game account credentials, or anything that could compromise your privacy.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-19",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the FINAL FANTASY RESONANCE guide: analytics, advertising, and contact message handling.",
    summary:
      "A privacy policy for the FINAL FANTASY RESONANCE guide, covering analytics, advertising, and contact messages.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the site collects, why it is used, and how visitors can make contact.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "The FINAL FANTASY RESONANCE guide does not include accounts, comments, or payments. Analytics and advertising are optional and described below; contact messages contain only what the visitor chooses to send.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts in V1" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider (Adsterra) may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "Messages sent to support@finalfantasyresonance.pro contain only the information the visitor chooses to send. The site does not request sensitive personal information. Messages are stored only as long as needed to address the request.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes. The last review date is listed at the top of the page.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-19",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the unofficial FINAL FANTASY RESONANCE guide: scope, disclaimers, and acceptable use.",
    summary:
      "A terms page for the unofficial FINAL FANTASY RESONANCE guide.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "The FINAL FANTASY RESONANCE guide is an unofficial fan site. Guide information may change as official details are updated; final purchase, platform, and release decisions should always come from official sources.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Review", value: "Updated 2026-10-19" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with Square Enix, LANCARSE, the Final Fantasy trademark owners, or any platform holder unless explicitly stated after launch. All Final Fantasy trademarks and game content referenced are the property of their respective owners.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources such as the Steam store page, the Square Enix press site, and the LANCARSE developer page for final purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through the contact channel. The site may block visitors who violate these rules.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-19",
  },
];
