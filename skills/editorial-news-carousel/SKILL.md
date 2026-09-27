---
name: editorial-news-carousel
description: Create a white editorial tech-news carousel (mono category eyebrow, claim headline, gray diagram figure, evidence body, locked brand footer) with Satori JSX. Use for 5-slide explainer carousels with hook/why/proof/benefits/future narrative. Read satori-social first.
---

# Editorial News Carousel Skill

Create an **editorial tech-news carousel** — Editorial Tech News × Minimal Swiss Layout. Read `skills/satori-social/SKILL.md` first; all base constraints apply. This skill adds the news-carousel system: white page, one grid, one figure style, one footer, one story.

## When to use

- 4–6 slide explainer carousels that teach one technical story (AI news, research breakdowns, market shifts, product explainers).
- Default 5-slide arc below. For teaching frameworks/how-tos prefer `educational-carousel`; for single announcements prefer `editorial-announcement`.

## Design language

```text
WHITE (#FFFFFF) · BLACK (#050505) · LIGHT GRAY (#F5F5F5 cards, #E5E5E5 rules)
ONE TYPE SYSTEM (Inter + IBM Plex Mono) · ONE GRID · ONE FIGURE · ONE FOOTER
```

NEVER: gradients, colorful backgrounds, oversized logos, emojis, decorative shapes, cards-in-cards, noisy illustrations, giant CTA buttons. Restriction IS the identity.

## Canvas and master grid (1080×1350)

- `pageX = 78` → ~924px content column. Tokens in `newsCarouselTheme` (`src/themes/editorial.ts`) — never hardcode other values.
- Text column inset `textInset = 14`: eyebrow, headline, body, AND figure card all share one left and right edge. Nothing bleeds wider, nothing sits narrower — uniform margins on every element.
- Slide skeleton (identical every slide):

```text
AI NEWS eyebrow
   ↓ 36
HEADLINE (claim)
   ↓ 28
FIGURE (gray card, wider than text)
   ↓ 36
BODY (1–2 paragraphs, 2–4 lines each)
   ↓ spacer
RULE ────────────
[Brand]      01 / 05
```

## Eyebrow (category marker, not headline)

Mono, uppercase, widely tracked, faint gray: `fontFamily mono, 18px, letterSpacing 5, color #9A9A9A`. One word or two (`AI NEWS`, `MARKETS`, `RESEARCH`). Never styled as a pill, never large.

## Headlines make claims

A headline is a **claim with tension**, not a topic label: `On-device AI is ready to challenge cloud dominance`, never `Everything About On-device AI`. Formulas: contrarian (`X is challenging Y`), transition (`X is moving from A to B`), number + implication (`460M parameters, no internet needed`), question (`Why X works now`), benefit (`Four advantages of X`), future (`Where X goes next`).

Style: sans 800, ~70px, lineHeight 1.0, black, left, `textWrap: "balance"`. Numbers come from the source — never manufacture a statistic.

## Story engine (default 5-slide arc)

```text
1. HOOK — WHAT CHANGED? (claim + tension; old assumption vs new possibility)
2. WHY NOW? — MECHANISM (technology supply + market demand = viable)
3. PROOF — NUMBER/CASE (specific model, metric, or example)
4. WHY IT MATTERS — BENEFITS (translate capability into human consequences)
5. WHAT'S NEXT — IMPLICATION (forward open loop, never "Conclusion")
```

Each slide answers the question the previous slide creates. One slide = one cognitive job. Never `What is X? / More about X / Benefits / Conclusion`.

## Figures explain; they don't decorate

The reader should grasp the concept from the figure before reading the body. Build ONLY from primitives (`src/components/diagrams.tsx`): `Figure`, `FigureTitle`, `FNode` (white), `FNodeDark` (focal black), `HLine`/`VLine` connectors, `ChevronR`/`ChevronD` (never `→` — tofu), `FDot`. Content→visual mapping:

| Content | Visual |
|---|---|
| A vs B | two panels side by side |
| Process/pipeline | vertical node chain with chevrons |
| Architecture | node → node ↔ node row |
| 3–5 benefits | 2×2 node grid |
| Number/stat | giant metric + label |
| Definition/concept | editorial text panel |

Figure rules: one figure per slide, same left/right margins as the text column, uniform `minHeight` so every slide's figure holds equal presence (content centers vertically; taller diagrams grow naturally), generous internal padding (40), nothing touches card edges, black/gray/white only.

## Body copy with scanning system

- 24px/400, lineHeight 1.45, 1–2 paragraphs of 2–4 lines. Phone-readable — never infographic microtype.
- **Inline emphasis (bold scanning anchors):** Satori has no inline layout — a paragraph MUST be `display: "flex", flexWrap: "wrap"`, with bold runs as `<span style={{ fontWeight: 700 }}>`. Word spaces come from `columnGap: 7` on the paragraph (Satori trims edge whitespace, so NEVER rely on spaces inside strings at segment boundaries — `latency` + `than` fuses into `latencythan`). Max 2 bold runs per paragraph; bold facts/numbers, never whole sentences.

```tsx
<div style={{ display: "flex", flexWrap: "wrap", columnGap: 7, fontSize: 24, lineHeight: 1.45, color: "#050505" }}>
  {"Phones now run models with"}
  <span style={{ fontWeight: 700 }}>{"up to 90% lower latency"}</span>
  {"than cloud calls."}
</div>
```

## Footer (locked component)

Use `CarouselFooter` (`brand`, `current`, `total`) — thin `#E5E5E5` rule, `[Brand]` (gray brackets + black name) bottom-left, mono `01 / 05` bottom-right. Identical on every slide. The pagination tells readers there is more — never omit it.

## Continuity locks (never randomly change)

Canvas, margins, eyebrow position, fonts, footer, brand/pagination position, divider, card style/radius, body type, palette, visual language. Per slide ONLY headline, figure, and body change.

## Density caps

Headline ≤ 3 lines, body ≤ 2 paragraphs, figure ≤ 6 nodes, no slide overflow — cut copy first, shrink type last.

## Content contract (normalize the brief first)

```json
{
  "category": "AI NEWS",
  "brand": "360Labs",
  "slides": [
    { "role": "hook", "title": "...", "figure": { "type": "architecture" },
      "body": ["...", "..."], "emphasis": ["up to 90%", "bigger is better"] },
    { "role": "why_now", "title": "Why it works now", "figure": { "type": "comparison" }, "body": ["..."] },
    { "role": "proof", "title": "460M parameters, no internet needed", "figure": { "type": "process" }, "body": ["..."] },
    { "role": "benefits", "title": "Four advantages of local AI", "figure": { "type": "four_points" }, "body": ["Cost: ..."] },
    { "role": "future", "title": "Where this goes next", "figure": { "type": "text_panel" }, "body": ["..."] }
  ]
}
```

## Complete example (Slide 1 — hook)

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

const ink = "#050505";
const sans = "Inter";
const mono = "IBM Plex Mono";

function Slide1() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#fff", paddingLeft: 78, paddingRight: 78, paddingTop: 64, paddingBottom: 48 }}>
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14, paddingRight: 14 }}>
        <div style={{ fontFamily: mono, fontSize: 18, letterSpacing: 5, color: "#9A9A9A" }}>AI NEWS</div>
        <div style={{ fontFamily: sans, fontSize: 70, fontWeight: 800, lineHeight: 1.0, color: ink, marginTop: 36, textWrap: "balance" }}>
          On-device AI is ready to challenge cloud dominance
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14, paddingRight: 14, marginTop: 28 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, minHeight: 400, background: "#F5F5F5", borderRadius: 16, padding: 40 }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 14 }}>
        <div style={{ background: "#fff", border: "1px solid #E2E2E2", borderRadius: 10, paddingLeft: 22, paddingRight: 22, paddingTop: 14, paddingBottom: 14, fontSize: 21, fontWeight: 700 }}>User</div>
        <div style={{ width: 44, height: 2, background: ink }} />
        <div style={{ background: ink, color: "#fff", borderRadius: 10, paddingLeft: 22, paddingRight: 22, paddingTop: 14, paddingBottom: 14, fontSize: 21, fontWeight: 700 }}>Device</div>
        <div style={{ width: 14, height: 14, borderTop: "3px solid #050505", borderRight: "3px solid #050505", transform: "rotate(45deg)" }} />
        <div style={{ background: "#fff", border: "1px solid #E2E2E2", borderRadius: 10, paddingLeft: 22, paddingRight: 22, paddingTop: 14, paddingBottom: 14, fontSize: 21, fontWeight: 700 }}>Cloud</div>
        </div>
        </div>
      <div style={{ paddingLeft: 14, paddingRight: 14, display: "flex", flexWrap: "wrap", columnGap: 7, fontSize: 24, lineHeight: 1.45, color: ink, marginTop: 36 }}>
        {"Flagship phones now run capable models with"}
        <span style={{ fontWeight: 700 }}>{"up to 90% lower latency"}</span>
        {"than cloud calls — no round trip, no outage risk."}
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ width: "100%", height: 1, background: "#E5E5E5" }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: ink }}>{"[360Labs]"}</div>
          <div style={{ fontFamily: mono, fontSize: 20, color: "#9A9A9A" }}>01 / 05</div>
        </div>
      </div>
    </div>
  );
}
```

Repeat the skeleton for slides 2–5 (roles why_now/proof/benefits/future), export `slides = [Slide1, …]`. Render with `npm run render <file> --output output/<name>` → `01.png…05.png`. See `templates/editorial-news-carousel/carousel.tsx`.
