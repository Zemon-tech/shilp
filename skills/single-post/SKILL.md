---
name: single-post
description: Create a single static feed post (1080x1350 default) with Satori JSX. Use for any one-image post when no specialised skill (news, quote, statistic, announcement, editorial) fits.
---

# Single Post Skill

Create **one** self-contained feed image. Read `skills/satori-social/SKILL.md` first — all base constraints apply.

## When to use

- The user asks for "a post", "a graphic", "a social image" without a specialised format.
- None of `news-post`, `quote-post`, `statistic-post`, `announcement-post`, `editorial-post` fits better. Prefer the specialised skill when one does.

## Composition (pick ONE skeleton)

**A — Type-led (default):** kicker → huge headline → thin divider → 1–2 line context → footer (brand + handle).
**B — Visual-led:** kicker → headline → hero image block (≥ 40% of canvas height) → caption row.
**C — Split:** left color panel with headline; right panel with image/supporting copy.

Never mix skeletons. One canvas, one idea, one focal point.

## Layout rules

- Canvas 1080×1350 default. Margins ≥ 64px. Vertical rhythm: kicker / headline / support / footer pinned with `marginTop: "auto"`.
- Max 3 type sizes on the canvas (e.g. 76 / 32 / 22).
- Footer always: brand mark left, handle or CTA right, 2px divider above it.

## Typography rules

- Headline: 64–84px, weight 800, `lineHeight` 1.02–1.1, ≤ 12 words.
- Context: 26–30px, weight 400, `lineHeight` 1.45, muted color, ≤ 30 words.
- Kicker: 20–22px, weight 700, `letterSpacing` 2–3, uppercase, accent or muted.

## Image rules

- Hero image (if any) has explicit `width`+`height`, `borderRadius` 16–28, `objectFit: "cover"`.
- Text never sits on busy imagery without a dark overlay (`linear-gradient` with ≥ 60% black at the text edge).
- No image? Use a gradient field + oversized type. Never ship an empty grey box.

## Spacing / color

- `theme.spacing`: xs 8, sm 16, md 24, lg 40, xl 64. Gaps between blocks ≥ 24.
- Max 3 colors + neutrals. Body text contrast ≥ 4.5:1 against background.

## Good vs bad

- ✅ "ONE headline at 76px, one muted sentence, footer pinned to the bottom."
- ❌ "Four paragraphs at 24px, five colors, logo + headline + photo + chart competing."

## Complete example

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#0A0A0A", padding: 72 }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16 }}>
        <div style={{ background: "#7C3AED", color: "#fff", fontSize: 20, fontWeight: 700, letterSpacing: 2, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 999 }}>GUIDE</div>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: 2, color: "#A1A1AA" }}>5 MIN READ</div>
      </div>
      <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, color: "#FFFFFF", marginTop: 32 }}>
        Design posts people actually stop for
      </div>
      <div style={{ fontSize: 29, fontWeight: 400, lineHeight: 1.45, color: "#A1A1AA", marginTop: 28 }}>
        Hierarchy first, decoration last. One idea per canvas, always.
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ width: "100%", height: 2, background: "#27272A" }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>STUDIO</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: "#A1A1AA" }}>@studio · Save this »</div>
        </div>
      </div>
    </div>
  );
}
```

Validate with `npm run validate <file>`, render with `npm run render <file>`.
