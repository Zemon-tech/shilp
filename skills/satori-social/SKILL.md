---
name: satori-social
description: Base skill for generating static social graphics with Satori JSX. Read this FIRST before any other satori-social skill. Covers the input contract, Satori constraints, flexbox layout, and platform dimensions.
---

# Satori Social — Base Skill

You are generating **static social media graphics** using **Satori** (JSX → SVG → PNG). Your output is a single `.tsx` file. A standalone renderer executes it — you do not render anything yourself.

## Input contract (mandatory)

Every post file MUST follow this shape:

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      {/* your design */}
    </div>
  );
}
```

Every carousel file MUST follow this shape:

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

function Slide1() { /* ... */ }
function Slide2() { /* ... */ }

export const slides = [Slide1, Slide2];
```

- The renderer loads the **default export** (post) or the **`slides` array** (carousel).
- `width` / `height` are numbers (device pixels). If omitted, the renderer uses 1080×1350.
- Optional: `export const fontFamily = "Inter";`
- Do NOT export anything else the renderer must understand. Keep it simple.

## Platform dimensions

| Preset | Size | Use |
|---|---|---|
| `instagramPortrait` | 1080×1350 (4:5) | Default for feed posts and carousels |
| `linkedinPortrait` | 1080×1350 (4:5) | LinkedIn feed |
| `square` | 1080×1080 (1:1) | Grid-safe fallback |
| `landscape` | 1200×630 | Link previews, X/Twitter |
| `story` | 1080×1920 (9:16) | Stories, reels covers |

Default to 1080×1350 unless the user asks otherwise.

## Satori hard constraints (never violate)

Satori is NOT a browser. It implements a subset of HTML/CSS with Yoga flexbox layout.

**NEVER use:**
- CSS files, `<style>` tags, `<link>`, `<script>`
- CSS Grid (`display: grid`) — use flexbox
- `position: fixed`; no `z-index` (paint order = document order; later elements paint on top)
- Animations, transitions, JS-driven layout
- DOM APIs (`document`, `window`), React hooks (`useState`, `useEffect`), `dangerouslySetInnerHTML`
- `calc()`, `currentColor` (except `color` property), CSS variables in complex expressions

**ALWAYS:**
- Inline `style={{ ... }}` objects on every element
- `display: "flex"` with explicit `flexDirection` (`"row"` is the default — set `"column"` deliberately)
- Explicit `width`/`height` on the root and on every `<img>` (both attributes AND style)
- Deterministic, static layout — the file must render identically on every run
- **Single-string text:** a `<div>` without `display: flex` may have exactly ONE *string* child — any *element* child (even one) requires `display: flex` on the parent. `Hello {name} years` is THREE children (string + expression + string) and FAILS. Interpolate first: `{`Hello ${name} years`}`. For multiline display type, stack one `<div>` per line inside a column flex parent — never `{"\n"}` inside a plain text div.
- **Centering text:** `textAlign: "center"` alone does NOT center a stretched div — the text is an anonymous flex item. Center with `display: "flex", justifyContent: "center"` on the text div itself, or `alignItems: "center"` on its column-flex parent.

## Supported styling (safe list)

Flexbox (`flexDirection`, `flexWrap`, `alignItems`, `justifyContent`, `gap`, `flexGrow`/`flexShrink`), `margin`/`padding`, `width`/`height`/`min/max`, borders + `borderRadius` (incl. `%`), backgrounds (`backgroundColor`, `linear-gradient`/`radial-gradient`, `url`), `color`, `fontSize`/`fontWeight`/`fontStyle`, `lineHeight`, `letterSpacing`, `textAlign` (`left|center|right|justify`), `textTransform`, `textDecoration` (underline/line-through), `textShadow`, `opacity`, `overflow: hidden|visible`, `objectFit`, `boxShadow`, `transform` (translate/rotate/scale/skew), `position: relative|absolute` (absolute needs explicit offsets).

## Typography

- One font family per design (default `"Inter"` — the renderer loads it from `public/fonts/`). Declare weights explicitly (`400` body, `700` headings, `800` display).
- `lineHeight` as a number (1.0–1.5). Never rely on font defaults.
- Minimum sizes at 1080 wide: body ≥ 26px, captions ≥ 20px. Anything smaller is unreadable on phones — the validator will warn.
- Prefer `textTransform: "uppercase"` + `letterSpacing` for kickers/labels instead of a second font.
- **Glyph safety:** bundled fonts are latin subsets. Safe: `» › > • + × — – … " © · % @ #`. NEVER use in rendered text: `→ ▲ ✦ ✓ ✕ ★ ♥` and other arrows/geometric/dingbat glyphs — they render as tofu boxes. When in doubt, use ASCII.

## Images

- `<img>` REQUIRES `width` and `height` attributes plus matching style.
- Prefer local files inlined as base64 (`loadImage()` in `src/renderer/images.ts`) or `data:` URLs. Remote `https://` URLs work but can fail offline — avoid them in deliverables.
- Never hotlink images you don't control. If no image is available, build the visual from gradients, shapes, and oversized type instead of a grey placeholder box.

## Layout rules that always apply

1. Root is exactly `width × height`. No scrolling, no overflow — everything must fit.
2. Page margin: ≥ 64px on 1080-wide canvases. Never let text touch the edge.
3. One focal point per canvas. If everything is big, nothing is big.
4. Limit copy: headline ≤ 12 words, body ≤ 30 words per slide.
5. Document order = paint order. Put overlays AFTER the content they cover.
6. Pills/badges inside a column flex parent stretch full-width (default `alignItems: stretch`). Wrap them in a `Row` or set `alignSelf: "flex-start"`.
7. In row flex layouts, prefer explicit child widths + `boxSizing: "border-box"` over `flexGrow` + padding — padding can push flex children past the canvas edge with no error.

## Available components (`src/components/`)

Thin wrappers over Satori-safe JSX — you may also write plain JSX. `Box`, `Stack` (vertical), `Row` (horizontal), `Center`, `Text` (theme variants: `display|headline|title|body|caption|label`), `Badge` (pill kicker), `Divider`, `Avatar`, `Stat`, `Quote`, `Image` (explicit dims), `Logo`.

Design tokens live in `src/themes/default.ts` (`theme.colors`, `theme.spacing`, `theme.typography`) and sizes in `src/themes/presets.ts`.

## Bad example (do NOT do this)

```tsx
// ❌ grid, style tag, no dims, tiny text, hooks, overflow risk
export default function Post() {
  const [x] = useState(0);
  return <div className="card"><style>{`.card{display:grid}`}</style><p style={{ fontSize: 12 }}>wall of text…</p></div>;
}
```

## Good example (do this)

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#0A0A0A", padding: 72 }}>
      <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3, color: "#A1A1AA" }}>TECH DAILY</div>
      <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, color: "#FFFFFF", marginTop: 24 }}>
        Headline goes here
      </div>
      <div style={{ marginTop: "auto", fontSize: 24, color: "#A1A1AA" }}>Source · Date</div>
    </div>
  );
}
```

## Workflow

1. Read the task-specific skill (e.g. `news-post`, `carousel`) IN ADDITION to this file.
2. Write the `.tsx` file (usually into `output/`).
3. Ask the user to run `npm run validate <file>` then `npm run render <file>`. Do not claim it renders until the renderer confirms it.
