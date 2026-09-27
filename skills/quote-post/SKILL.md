---
name: quote-post
description: Create a typographic quote graphic (large quote, person, role, avatar, brand) with Satori JSX. Use for testimonials, founder statements, excerpts.
---

# Quote Post Skill

Create a **typographic quote graphic**. Read `skills/satori-social/SKILL.md` first.

## When to use

- Testimonials, founder/investor statements, book or interview excerpts, "quote of the day".

## Composition

```
"Large quote…"

— Person Name
  Role, Company        [AVATAR]
```

1. Giant quotation mark (80–110px, accent color) as the visual anchor — never a stock photo of quotation marks.
2. Quote at 48–60px / 700, `lineHeight` 1.25, ≤ 35 words. Line-break it for rhythm, not mid-phrase.
3. Attribution: em-dash + name (28–32px / 700), role muted below (24px).
4. Avatar (optional, 110–130px circle, explicit dims) docked left of the name or bottom-right.
5. Brand mark small in the footer. The quote is the hero — brand stays quiet.

## Layout rules

- Center-left alignment reads more editorial than dead-center; reserve centered layouts for ≤ 15-word quotes.
- Quote block vertically centered; attribution directly beneath with 24–32px gap.
- Generous negative space: quote should occupy ~50% of canvas height, no more.

## Typography rules

- Never set quotes below 44px. Never all-caps a quote (kills voice).
- Keep original wording; you may trim with "…" but never rewrite meaning.
- Attribute precisely: name + role + company. "— Anonymous" only if the user insists.

## Image rules

- Avatar must be square source + `borderRadius: size/2` + `objectFit: "cover"`. If no avatar, use initials in an accent circle.
- Background: deep solid or subtle gradient. No busy photos behind serif-scale type.

## Good vs bad

- ✅ "One 24-word quote at 54px, giant accent quote-mark, name + role, quiet footer."
- ❌ "Quote at 30px over a stock photo, watermark logo, three hashtags inside the canvas."

## Complete example

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#101014", padding: 84 }}>
      <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3, color: "#A1A1AA" }}>FOUNDER NOTES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 120 }}>
        <div style={{ fontSize: 110, fontWeight: 800, lineHeight: 1, color: "#7C3AED" }}>"</div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.28, color: "#FFFFFF", marginTop: -30 }}>
          We stopped selling software and started selling the outcome. Everything changed.
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 24, marginTop: 44 }}>
          <div style={{ width: 112, height: 112, borderRadius: 56, background: "#7C3AED", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, fontWeight: 800, color: "#fff" }}>MK</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#FFFFFF" }}>— Maya Krishnan</div>
            <div style={{ fontSize: 25, fontWeight: 500, color: "#A1A1AA" }}>Founder, Ledgerline</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>LEDGERLINE</div>
        <div style={{ fontSize: 22, color: "#A1A1AA" }}>@ledgerline</div>
      </div>
    </div>
  );
}
```

Validate with `npm run validate <file>`, render with `npm run render <file>`.
