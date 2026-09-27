---
name: carousel
description: Create a multi-slide storytelling carousel (hook, context, insight, CTA) with Satori JSX. Use for any swipeable Instagram/LinkedIn carousel.
---

# Carousel Skill

Create a **swipeable carousel** — a narrative sequence, not a stack of posters. Read `skills/satori-social/SKILL.md` first.

## When to use

- "Carousel", "swipeable post", "slides", multi-image storytelling for Instagram/LinkedIn.

## File contract (mandatory)

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

function Slide1() { return (<div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column" }}>{/* … */}</div>); }
// … more slides

export const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];
```

- Every slide is a full `width × height` root. The renderer writes `01.png`, `02.png`, …
- 4–8 slides is the sweet spot. Fewer than 3 isn't a carousel; more than 10 bleeds readers.
- Also accepted: `export default [<Slide1/>, <Slide2/>]` — prefer the `slides` form.

## Narrative arc (adapt, don't rigidly fill)

```
Slide 1 → HOOK (stop the scroll; curiosity gap, never the conclusion)
Slide 2 → CONTEXT (why this matters, who it's for)
Slide 3+ → KEY INFORMATION (one idea per slide, escalating value)
Slide N-1 → INSIGHT / TAKEAWAY (the memorable line)
Slide N → CTA (save · share · follow · link — exactly one action)
```

Never force exactly 7 slides. Let the idea dictate length; cut ruthlessly.

## Continuity rules (what makes it a carousel, not N posters)

- **Persistent system:** same background, same margin grid, same footer (slide numeral `01 / 06` + brand) on every slide.
- **Progress signal:** slide dots, a growing bar, or `01 → 06` numerals so swipers feel momentum.
- **Recurring accent:** one color/shape motif repeated per slide (number chip, side rail, corner glyph).
- **Transitions in copy:** end each slide mid-thought where natural ("But there's a catch →").

## Per-slide rules

- ONE idea per slide. ≤ 40 words per slide, headline ≤ 10 words.
- Slide 1 must work standalone (most viewers never swipe): hook + brand + visual punch.
- Final CTA slide: dark or accent background to signal closure; one action only.
- Slide numerals on every slide EXCEPT optionally slide 1.

## Good vs bad

- ✅ "Cover hook → context → 3 escalating insights → takeaway → CTA; shared footer `03/06 · @brand`; one idea per slide."
- ❌ "Six differently-styled posters, 90 words on slide 4, no numerals, CTA on every slide."

## Complete example (3-slide miniature)

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

function Frame({ num, children }: any) {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#0A0A0A", padding: 72 }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>STUDIO</div>
        <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>{`${num} / 03 · » SWIPE`}</div>
      </div>
      {children}
    </div>
  );
}

function Slide1() {
  return (
    <Frame num="01">
      <div style={{ display: "flex", flexDirection: "column", marginTop: 180 }}>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: "#fff" }}>Nobody reads your</div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: "#fff" }}>second slide</div>
      </div>
      <div style={{ fontSize: 30, color: "#A1A1AA", marginTop: 28 }}>Unless the first one earns it. »</div>
    </Frame>
  );
}
function Slide2() {
  return (
    <Frame num="02">
      <div style={{ display: "flex", flexDirection: "column", marginTop: 140 }}>
        <div style={{ fontSize: 40, fontWeight: 800, color: "#7C3AED" }}>THE RULE</div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, color: "#fff", marginTop: 20 }}>One slide,</div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, color: "#fff" }}>one idea.</div>
      </div>
    </Frame>
  );
}
function Slide3() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#7C3AED", padding: 72 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: 72, fontWeight: 800, color: "#fff", textAlign: "center" }}>Save this for your</div>
        <div style={{ fontSize: 72, fontWeight: 800, color: "#fff", textAlign: "center" }}>next carousel</div>
      </div>
      <div style={{ fontSize: 26, fontWeight: 600, color: "rgba(255,255,255,0.85)", marginTop: 24 }}>@studio · Follow for more</div>
    </div>
  );
}

export const slides = [Slide1, Slide2, Slide3];
```

Render with `npm run render <file> --output output/my-carousel` (writes `01.png`, `02.png`, …). Validate each slide with `npm run validate <file>`.
