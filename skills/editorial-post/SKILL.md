---
name: editorial-post
description: Create a magazine-grade editorial graphic (asymmetric grid, oversized type, cropped image, metadata) with Satori JSX. Use when the user wants sophisticated, print-inspired design.
---

# Editorial Post Skill

Create a **magazine-grade editorial graphic**. Read `skills/satori-social/SKILL.md` first.

## When to use

- "Editorial style", "magazine look", essays, opinion pieces, premium brand content. The most design-intensive skill — reach for it when polish matters more than speed.

## Composition principles

- **Asymmetric grid:** e.g. 5:7 split, overlapping type over image, off-center rules. Symmetry is the enemy — never center everything.
- **Oversized type:** one display line at 90–130px, possibly cropped by the canvas edge (keep key glyphs legible).
- **Image cropping:** full-bleed or hard-cropped panels (`overflow: hidden`), duotone/overlay treatment so type always wins.
- **Small metadata:** issue no., folio, credits at 18–22px uppercase — the quiet detail that signals "print".
- **Negative space:** ≥ 35% of the canvas rests. Density kills sophistication.

## Layout rules

- Build on a 12-column mental grid; span elements asymmetrically (headline across 8, image across 5, offset).
- Layer deliberately with document order (no z-index): image first, overlay wash, then type.
- Rules/dividers are structural: vertical hairlines separating columns, oversized numerals ("04") as graphic elements.
- Footer is a colophon line: `PUBLICATION · ISSUE 04 · AUTHOR`, not a CTA button.

## Typography rules

- Display: 90–130px / 800 with tight `lineHeight` 0.95–1.0. Mix with one small uppercase grotesque for metadata — contrast of scale, not of families.
- Italic accents: Satori supports `fontStyle: "italic"` only if the font file includes it — otherwise fake emphasis with color or size, never assume italics render.
- Hyphenation is manual: break display lines on strong words yourself.

## Image rules

- One image, treated: darken with `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.65))` overlay or duotone via accent-tinted gradient over the image block.
- Crop ruthlessly — faces and objects may bleed off-canvas through `overflow: hidden` wrappers.
- Credit the image in the colophon (`PHOTO: NAME`).

## Good vs bad

- ✅ "Full-bleed dark image, 120px headline overlapping it, vertical 'ISSUE 04' rail, one-line colophon."
- ❌ "Centered 60px title, stock photo in a rounded box, three CTAs — a single-post wearing an editorial costume."

## Complete example

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "row", background: "#F4F1EA" }}>
      <div style={{ width: 120, boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingTop: 64, paddingBottom: 64, borderRight: "2px solid #141310" }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: 4, color: "#141310" }}>N°04</div>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 4, color: "#141310" }}>ESSAY</div>
      </div>
      <div style={{ width: 960, boxSizing: "border-box", display: "flex", flexDirection: "column", padding: 64 }}>
        <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 3, color: "#8A8578" }}>THE CRAFT — OCTOBER 2026</div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 28 }}>
          <div style={{ fontSize: 118, fontWeight: 800, lineHeight: 0.98, color: "#141310" }}>Slow</div>
          <div style={{ fontSize: 118, fontWeight: 800, lineHeight: 0.98, color: "#141310" }}>design</div>
          <div style={{ fontSize: 118, fontWeight: 800, lineHeight: 0.98, color: "#141310" }}>wins.</div>
        </div>
        <div style={{ width: 200, height: 6, background: "#C2410C", marginTop: 36 }} />
        <div style={{ fontSize: 30, fontWeight: 400, lineHeight: 1.5, color: "#3F3B33", marginTop: 32 }}>
          Attention is scarce. Restraint is the last unfair advantage in the feed.
        </div>
        <div style={{ marginTop: "auto", borderTop: "2px solid #141310", paddingTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 2, color: "#141310" }}>ATELIER · J. MOREAU</div>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 2, color: "#8A8578" }}>4 MIN</div>
        </div>
      </div>
    </div>
  );
}
```

Validate with `npm run validate <file>`, render with `npm run render <file>`.
