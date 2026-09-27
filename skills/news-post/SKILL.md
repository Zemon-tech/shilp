---
name: news-post
description: Create a visual news card (source, huge headline, hero image, context, attribution) with Satori JSX. Use for launches, announcements framed as news, funding, research findings.
---

# News Post Skill

Create a **visual news card** — a breaking-news style graphic. Read `skills/satori-social/SKILL.md` first.

## When to use

- "News post", "announce X", "cover this launch/story", funding or research news.
- For pure product hype without journalistic framing, prefer `announcement-post`.

## Composition (mandatory order)

```
┌──────────────────────────┐
│ SOURCE / CATEGORY badge  │
│ Huge headline            │
│      HERO IMAGE          │
│ Short context (≤ 25 w)   │
│ SOURCE ───────── DATE   │
└──────────────────────────┘
```

1. **Kicker row:** source or category badge + optional "BREAKING"/live dot. Never skip attribution.
2. **Headline:** the single dominant element, 68–84px / 800. ≤ 12 words. No period at the end.
3. **Hero image:** ≥ 380px tall at 1080×1350, `borderRadius` 20–28, explicit dims. If no photo exists, a gradient/pattern panel with a giant glyph or number.
4. **Context:** one muted sentence answering *why it matters*.
5. **Attribution bar:** divider + `SOURCE` left, `DATE` right, 20–22px uppercase.

## Layout rules

- Headline occupies the top third; image the middle; context + attribution pin to the bottom.
- Never overcrowd: if the headline needs 3 lines, shorten the context. Whitespace is credibility.
- Strong margins (≥ 64px). Text never touches image edges — images sit inside the margin grid.

## Typography rules

- Headline sentence-case (not ALL CAPS) for readability at 68px+.
- Context 26–30px muted. Attribution 20–22px, `letterSpacing` 2, uppercase.
- Avoid tiny text anywhere: nothing below 20px.

## Image rules

- One large image beats three small ones. Crop with `objectFit: "cover"`.
- Overlay a bottom gradient on the image only if text sits on it (prefer text BELOW the image instead).
- Caption the image source in the attribution bar when required (e.g. "PHOTO: COMPANY").

## Good vs bad

- ✅ "OPENAI badge → 'OpenAI releases a frontier coding model' → hero panel → one context line → 'OPENAI · SEP 2026'."
- ❌ "Logo soup, 60-word paragraph at 22px, three thumbnails, no source."

## Complete example

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#0B0B0E", padding: 68 }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16 }}>
        <div style={{ background: "#E11D48", color: "#fff", fontSize: 20, fontWeight: 800, letterSpacing: 2, paddingLeft: 22, paddingRight: 22, paddingTop: 10, paddingBottom: 10, borderRadius: 999 }}>OPENAI</div>
        <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>AI · BREAKING</div>
      </div>
      <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.06, color: "#fff", marginTop: 30 }}>
        OpenAI releases a new coding model
      </div>
      <div style={{ width: 1080 - 136, height: 430, borderRadius: 24, marginTop: 36, background: "linear-gradient(135deg,#7C3AED,#DB2777 55%,#F59E0B)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontSize: 220, fontWeight: 800, color: "rgba(255,255,255,0.92)" }}>{"</>"}</div>
      </div>
      <div style={{ fontSize: 29, lineHeight: 1.45, color: "#C4C4CC", marginTop: 34 }}>
        Frontier code generation with agentic tool use — rolling out to developers this week.
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ width: "100%", height: 2, background: "#27272A" }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>SOURCE: OPENAI</div>
          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>SEP 2026</div>
        </div>
      </div>
    </div>
  );
}
```

Validate with `npm run validate <file>`, render with `npm run render <file>`.
