/**
 * Default design tokens.
 * Coding agents are taught (via skills/brand-system) to consume these
 * tokens — or swap them for a user-supplied brand config.
 */
export const theme = {
  colors: {
    background: "#0A0A0A",
    surface: "#131316",
    foreground: "#FFFFFF",
    muted: "#A1A1AA",
    accent: "#7C3AED",
    accentSoft: "#2E1065",
    border: "#27272A",
    success: "#22C55E",
    warning: "#F59E0B",
  },
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 40,
    xl: 64,
    xxl: 96,
  },
  radius: {
    sm: 8,
    md: 16,
    lg: 28,
    pill: 999,
  },
  typography: {
    display: { fontSize: 76, fontWeight: 800, lineHeight: 1.02 },
    headline: { fontSize: 56, fontWeight: 700, lineHeight: 1.08 },
    title: { fontSize: 40, fontWeight: 700, lineHeight: 1.15 },
    body: { fontSize: 28, fontWeight: 400, lineHeight: 1.45 },
    caption: { fontSize: 22, fontWeight: 500, lineHeight: 1.4 },
    label: { fontSize: 20, fontWeight: 700, lineHeight: 1.2 },
  },
  fonts: {
    sans: "Inter",
    display: "Inter",
  },
} as const;

export type Theme = typeof theme;
