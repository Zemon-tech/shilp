/**
 * Editorial announcement theme — light, restrained, magazine × startup.
 * Used by the editorial-announcement skill. Values are tuned for 1080×1350;
 * metadata floors are raised ~3px over the print reference for phone legibility.
 */
export const announcementTheme = {
  colors: {
    background: "#FFFFFF",
    foreground: "#050505",
    muted: "#666666",
    border: "#DCDCDC",
    subtle: "#F5F5F5",
  },
  fonts: {
    sans: "Inter",
    serif: "DM Serif Display",
    mono: "IBM Plex Mono",
  },
  spacing: {
    /** Shared editorial gutter: everything aligns inside it, nothing touches canvas edge. */
    pageX: 105,
    section: 40,
    large: 56,
    small: 16,
  },
  typography: {
    eyebrow: 19,
    /** Serif article headline. */
    display: 82,
    /** Sans announcement-type line ("We're hiring"). */
    title: 58,
    body: 23,
    meta: 18,
    caption: 19,
  },
  radius: {
    image: 8,
    pill: 999,
  },
} as const;

export type AnnouncementTheme = typeof announcementTheme;

/**
 * Editorial news-carousel tokens — white page, mono eyebrow, heavy sans
 * headline, gray figure card, bracket footer. Tuned for 1080×1350.
 * The figure card sits ~28px wider than the text column (TEXT_INSET).
 */
export const newsCarouselTheme = {
  colors: {
    background: "#FFFFFF",
    foreground: "#050505",
    muted: "#666666",
    faint: "#9A9A9A",
    card: "#F5F5F5",
    border: "#E5E5E5",
    cardBorder: "#E2E2E2",
  },
  fonts: {
    sans: "Inter",
    mono: "IBM Plex Mono",
  },
  spacing: {
    /** Outer gutter; content width = 1080 − 2×pageX. */
    pageX: 78,
    /** Shared text+figure inset inside the gutter — every element aligns to it. */
    textInset: 14,
    eyebrowGap: 36,
    headlineGap: 28,
    figureGap: 36,
    bodyGap: 28,
  },
  typography: {
    eyebrow: { fontSize: 18, fontWeight: 400, letterSpacing: 5 },
    headline: { fontSize: 70, fontWeight: 800, lineHeight: 1.0 },
    figureTitle: { fontSize: 24, fontWeight: 800 },
    body: { fontSize: 24, fontWeight: 400, lineHeight: 1.45 },
    footerBrand: { fontSize: 24, fontWeight: 800 },
    pagination: { fontSize: 20, fontWeight: 400 },
  },
  radius: {
    card: 16,
    node: 10,
  },
} as const;

export type NewsCarouselTheme = typeof newsCarouselTheme;
