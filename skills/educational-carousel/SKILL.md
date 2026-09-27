---
name: educational-carousel
description: Create a teaching carousel (hook, problem, concept, example, framework, takeaway, CTA) with Satori JSX. Use for explainers, how-tos, and frameworks.
---

# Educational Carousel Skill

Create a **teaching carousel** — the reader should learn something concrete. Read `skills/satori-social/SKILL.md` AND `skills/carousel/SKILL.md` first.

## When to use

- Explainers, how-tos, frameworks, "X lessons", myth-busting, step-by-step guides.

## Pedagogical arc (adapt to the idea)

```
1. HOOK      — outcome or curiosity gap ("Write hooks in 10 minutes")
2. PROBLEM   — the painful status quo (agitate briefly, then move on)
3. CONCEPT   — the core idea in one sentence + one diagram-ish visual
4. EXAMPLE   — concrete before/after or worked mini-example
5. FRAMEWORK — steps, checklist, or acronym they can reuse (3–5 items max)
6. TAKEAWAY  — the one line to remember (repeatable without the slides)
7. CTA       — save/share + follow (exactly one action)
```

5–7 slides typical. Never pad to fill the arc — merge or cut steps that carry no weight.

## Teaching rules

- **One idea per slide.** If a slide needs "and also…", split it or cut the "also".
- **No walls of text:** ≤ 40 words/slide; framework slides may use 3–5 terse bullets (≤ 8 words each).
- **Show, don't tell:** prefer before/after blocks, then/now contrasts, numbered steps over paragraphs.
- **Name things:** give the framework a memorable name ("The 3C Hook Test") — named ideas get saved.
- **Takeaway slide** restates the core idea standalone — it's the slide that gets screenshotted.

## Slide-type toolkit (compose from these)

| Type | Shape |
|---|---|
| `cover` | Hook + visual + swipe hint |
| `problem` | Pain statement + muted "sound familiar?" |
| `concept` | One-sentence idea + simple visual (3 boxes, arrow) |
| `example` | Before/after or mini case with labels |
| `step` | Big numeral + instruction + micro-example |
| `framework` | Named checklist, 3–5 terse items |
| `takeaway` | Single memorable line, oversized |
| `cta` | Save/share + follow, accent background |

## Continuity (from carousel skill, mandatory)

Same canvas, margins, footer (`NN / TT` + brand), one accent motif, progress signal on every slide.

## Good vs bad

- ✅ "Hook → relatable problem → one-sentence concept → before/after example → 4-step 'STACK' framework → takeaway → save CTA."
- ❌ "Slide 3 is a 120-word essay; framework has 9 steps; every slide ends with 'link in bio'."

## Complete example (4-slide miniature)

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

function Frame({ num, total, children }: any) {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#0E1410", padding: 72 }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>GROWTHLAB</div>
        <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#8A938B" }}>{`${num} / ${total} · SWIPE »`}</div>
      </div>
      {children}
    </div>
  );
}

function Slide1() {
  return (
    <Frame num="01" total="04">
      <div style={{ display: "flex", flexDirection: "row", marginTop: 120 }}>
        <div style={{ background: "#22C55E", color: "#06210F", fontSize: 21, fontWeight: 800, letterSpacing: 2, paddingLeft: 22, paddingRight: 22, paddingTop: 10, paddingBottom: 10, borderRadius: 999 }}>WRITING GUIDE</div>
      </div>
      <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.06, color: "#fff", marginTop: 28 }}>Hooks that earn the swipe</div>
      <div style={{ fontSize: 30, color: "#A7B3A8", marginTop: 24 }}>A 4-slide mini-lesson »</div>
    </Frame>
  );
}
function Slide2() {
  return (
    <Frame num="02" total="04">
      <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2, color: "#F87171", marginTop: 110 }}>THE PROBLEM</div>
      <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.14, color: "#fff", marginTop: 20 }}>Clever openers get skipped. Clear ones get saved.</div>
    </Frame>
  );
}
function Slide3() {
  return (
    <Frame num="03" total="04">
      <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2, color: "#22C55E", marginTop: 110 }}>THE 3C TEST</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 26 }}>
        {[["CURIOSITY", "open a gap, not the answer"], ["CLARITY", "one reader, one promise"], ["CONTRAST", "old way vs better way"]].map(([t, d]) => (
          <div key={t} style={{ display: "flex", flexDirection: "column", background: "#16211A", borderRadius: 20, padding: 32, gap: 8 }}>
            <div style={{ fontSize: 34, fontWeight: 800, color: "#fff" }}>{t}</div>
            <div style={{ fontSize: 28, color: "#A7B3A8" }}>{d}</div>
          </div>
        ))}
      </div>
    </Frame>
  );
}
function Slide4() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#22C55E", padding: 72 }}>
      <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.1, color: "#06210F", textAlign: "center" }}>Save this 3C test for your next post</div>
      <div style={{ fontSize: 27, fontWeight: 600, color: "#06210F", marginTop: 26 }}>@growthlab · New lessons weekly</div>
    </div>
  );
}

export const slides = [Slide1, Slide2, Slide3, Slide4];
```

Render with `npm run render <file> --output output/lesson` → `01.png…04.png`. Validate with `npm run validate <file>`.
