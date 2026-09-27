---
name: statistic-post
description: Create a number-dominant stat graphic (big number, supporting line, source) with Satori JSX. Use for research findings, survey results, growth metrics.
---

# Statistic Post Skill

Create a **number-dominant stat graphic**. Read `skills/satori-social/SKILL.md` first.

## When to use

- A single number carries the post: survey results, benchmarks, growth metrics, "did you know".

## Composition (mandatory hierarchy)

```
BIG NUMBER        ← 40%+ of canvas height

Supporting explanation (≤ 15 words)

SOURCE: …
```

1. **Number first:** 170–260px, weight 800, accent or white. Include the unit in the number (`42%`, `$3.1B`, `10×`) — never strand the `%` in body copy.
2. **Explanation:** 32–40px, ≤ 15 words, directly under the number. Answers "of what / says who".
3. **Source line:** 20–22px uppercase muted, pinned to footer with divider. A stat without a source is a rumor.
4. Optional context chip (e.g. "+12 PTS VS 2024") as a small accent pill above the number.

## Layout rules

- The number occupies the optical center. Everything else is subordinate and quiet.
- One stat per canvas. Two numbers = two posts (or a carousel).
- Never decorate the number with shadows/gradients that hurt legibility — flat accent color wins.

## Typography rules

- Tabular-feel sizing: number `lineHeight` 1.0 exactly.
- Explanation sentence-case, never smaller than 30px.
- Source always uppercase + `letterSpacing` 2.

## Good vs bad

- ✅ "`42%` at 220px, 'of developers now use AI coding tools' at 36px, 'SOURCE: STACK SURVEY 2026' footer."
- ❌ "Three stats at 60px, paragraph of methodology, pie chart clipart."

## Complete example

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#0A0A0A", padding: 72 }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ background: "#132B1F", color: "#22C55E", fontSize: 21, fontWeight: 800, letterSpacing: 2, paddingLeft: 22, paddingRight: 22, paddingTop: 10, paddingBottom: 10, borderRadius: 999 }}> +12 PTS VS 2024</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 130 }}>
        <div style={{ fontSize: 240, fontWeight: 800, lineHeight: 1, color: "#22C55E" }}>42%</div>
        <div style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.35, color: "#FFFFFF", marginTop: 28 }}>
          of developers now use AI coding tools daily
        </div>
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ width: "100%", height: 2, background: "#27272A" }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>SOURCE: DEV SURVEY 2026</div>
          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>@STUDIO</div>
        </div>
      </div>
    </div>
  );
}
```

Validate with `npm run validate <file>`, render with `npm run render <file>`.
