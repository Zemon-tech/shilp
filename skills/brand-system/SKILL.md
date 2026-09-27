---
name: brand-system
description: Apply a brand configuration (colors, fonts, logo, spacing, radius, style) consistently across Satori social graphics. Use when a brand.json exists or the user wants on-brand output.
---

# Brand System Skill

Apply a **brand configuration** consistently. Read `skills/satori-social/SKILL.md` first.

## When to use

- A `brand.json` (or brand description) exists, or the user says "on-brand", "use our colors/logo/fonts".

## Brand config shape

```json
{
  "name": "Acme",
  "colors": { "background": "#0A0A0A", "surface": "#131316", "foreground": "#FFFFFF", "muted": "#A1A1AA", "accent": "#7C3AED", "border": "#27272A" },
  "fonts": { "sans": "Inter", "display": "Inter" },
  "logo": { "type": "wordmark", "name": "ACME", "src": "public/assets/logo.png" },
  "spacing": { "margin": 72, "gap": 24 },
  "radius": { "card": 24, "pill": 999 },
  "style": { "mode": "dark", "texture": "gradient", "imagery": "duotone" }
}
```

All keys optional — fall back to `src/themes/default.ts` per-key, never fail on a missing brand file. If the user only describes the brand in prose ("dark, purple, playful"), infer this JSON first and confirm it.

## Application rules

1. **Colors:** background + surface + foreground + muted + ONE accent. Map every element to a token — no hex values invented mid-design (except white/black overlays).
2. **Fonts:** one family. If the brand font isn't in `public/fonts/`, use Inter and warn — never reference an unloaded family (Satori renders tofu boxes).
3. **Logo:** wordmark (`Logo` component) or `<img>` with explicit dims from `logo.src` (inline via `loadImage()`). Same position + size on every slide. Never restyle, recolor, or stretch it.
4. **Spacing/radius:** single margin value and card radius across the whole post/carousel. Mixed radii look off-brand instantly.
5. **Style mode:** `dark` → deep bg + light type; `light` → paper bg + ink type; `texture` (`flat|gradient|grain-suggestive`) applied uniformly. Satori can't do real grain — suggest it with layered low-opacity gradients.

## Brand-check before finishing

- [ ] Only brand tokens used (no rogue hex)?
- [ ] Logo present, identical placement/size on all slides?
- [ ] One accent, used sparingly (kickers, numerals, one CTA)?
- [ ] Contrast ≥ 4.5:1 on body copy?
- [ ] Would this be recognizable as the brand with the logo removed (color + type + spacing voice)?

## Swapping brands

A new brand = a new JSON object + (optionally) font files in `public/fonts/` + logo in `public/assets/`. No renderer or skill changes needed. Point agents at the new config:

> "Use brand.json for all colors, fonts, and logo. Fall back to defaults only for keys it omits."

## Example: branding a post

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

// Inlined from brand.json — no new dependencies.
const brand = {
  colors: { background: "#FFFDF5", surface: "#F5EFE0", foreground: "#1A1611", muted: "#8A8272", accent: "#C2410C" },
  name: "ATELIER",
};

export default function Post() {
  const c = brand.colors;
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: c.background, padding: 72 }}>
      <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: 3, color: c.foreground }}>{brand.name}</div>
      <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05, color: c.foreground, marginTop: 40 }}>
        Brand is what remains when the logo is removed
      </div>
      <div style={{ width: 160, height: 8, background: c.accent, marginTop: 36 }} />
      <div style={{ marginTop: "auto", fontSize: 22, fontWeight: 600, letterSpacing: 2, color: c.muted }}>
        {brand.name} · BRAND NOTES
      </div>
    </div>
  );
}
```

Validate with `npm run validate <file>`, render with `npm run render <file>`.
