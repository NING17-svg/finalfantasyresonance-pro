import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/", labels: { "en-US": "Home" } },
  {
    href: "/guides/combat-basics",
    labels: { "en-US": "Combat" },
    children: [
      { href: "/guides/combat-basics", labels: { "en-US": "Stagger & Timeline" } },
      { href: "/guides/characters", labels: { "en-US": "Characters & Party" } },
    ],
  },
  {
    href: "/guides/visions",
    labels: { "en-US": "Visions" },
    children: [
      { href: "/guides/visions", labels: { "en-US": "Vision Roster" } },
      { href: "/guides/crystal-questions", labels: { "en-US": "Crystal Questions" } },
      { href: "/guides/espers", labels: { "en-US": "Espers" } },
      { href: "/guides/esper-dwelling-walkthrough", labels: { "en-US": "Esper's Dwelling" } },
    ],
  },
  {
    href: "/guides/bosses",
    labels: { "en-US": "Bosses" },
    children: [
      { href: "/guides/bosses", labels: { "en-US": "Boss Index" } },
      { href: "/guides/gilgamesh-fight", labels: { "en-US": "Gilgamesh" } },
      { href: "/guides/demo-secret-boss", labels: { "en-US": "Shemhazai" } },
    ],
  },
  {
    href: "/guides/walkthrough",
    labels: { "en-US": "Walkthrough" },
    children: [
      { href: "/guides/walkthrough", labels: { "en-US": "Full Walkthrough" } },
      { href: "/guides/demo-walkthrough", labels: { "en-US": "Demo Walkthrough" } },
      { href: "/guides/colosseum-endgame", labels: { "en-US": "Colosseum & Endgame" } },
    ],
  },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}