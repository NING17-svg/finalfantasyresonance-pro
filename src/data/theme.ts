import type { ThemeConfig } from "@/types/theme";

// FINAL FANTASY RESONANCE brand-tuned values: warm light page, royal blue accents
// pulled from the key-art diamond, and copper-gold highlights for confirmed lore.
export const theme: ThemeConfig = {
  mode: "light",
  navigation: "header",
  tokens: {
    pageBg: "#f6f4ef",
    surface1: "#ffffff",
    surface2: "#efe8dd",
    surface3: "#e3d8c1",
    surfaceInverse: "#0d1530",
    textPrimary: "#161a2c",
    textMuted: "#5d6175",
    textInverse: "#ffffff",
    textOnAccentPrimary: "#ffffff",
    textLink: "#1f3b8a",
    focusRing: "#c49a35",
    line: "#d6c9ad",
    lineStrong: "#8a7c5e",
    accentPrimary: "#1f3b8a",
    accentSecondary: "#c49a35",
    accentBright: "#e7b04a",
    statusConfirmed: "#1f3b8a",
    statusCaution: "#a96a17",
    statusUnknown: "#5d6175",
  },
  typography: {
    headingFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
    bodyFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
    headingWeight: 800,
  },
  shape: { radius: "8px", borderWidth: "1px", shadow: "0 18px 50px rgba(13, 21, 48, 0.08)", hoverLift: "-2px" },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center" },
  variants: { home: "guide-portal", hub: "grouped-list", content: "reading-right-rail", workspace: "full-width" },
  decoration: { motif: "lines", intensity: "low" },
};