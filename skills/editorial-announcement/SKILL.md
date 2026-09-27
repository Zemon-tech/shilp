---
name: editorial-announcement
description: Create a restrained light-editorial announcement (masthead/hiring/personal layouts, serif headline, mono metadata, bracket brand mark) with Satori JSX. Use for launches, hiring, funding, events, and founder posts in the magazine × startup style. Read satori-social first.
---

# Editorial Announcement Skill

Create an **editorial-minimalist announcement** — independent magazine × premium startup × technical documentation. Read `skills/satori-social/SKILL.md` first; all base constraints apply. This skill ADDS a light design language on top: it does not replace the base rules.

## When to use

- The user wants an announcement in a restrained, editorial, light-mode style (or references this system).
- Announcement types covered: product launch, product update, hiring, funding, partnership, event, founder announcement, team announcement, milestone, availability/travel, new feature, open source release, award/recognition, news/press, job opening, call for applications, community announcement.
- For hype-forward dark poster launches, prefer `announcement-post`. For journalistic dark news cards, prefer `news-post`.

## Design language (non-negotiable)

Editorial minimalism + technical startup aesthetic + high information hierarchy + generous whitespace. Excitement comes from **typography, scale, alignment, whitespace, thin rules, small metadata labels** — never from decoration.

**NEVER use:** gradients, drop shadows, glassmorphism, decorative blobs/illustrations, random emojis, unnecessary icons, excessive colors/rounded cards/borders, huge graphic logos, dense text, arbitrary font combos, Canva-like templates. Background is `#FFFFFF`, ink is `#050505`. One accent at most — usually none.

## Design tokens (`src/themes/editorial.ts`)

```ts
announcementTheme.colors  // background #FFFFFF, foreground #050505, muted #666666, border #DCDCDC, subtle #F5F5F5
announcementTheme.fonts   // sans "Inter", serif "DM Serif Display", mono "IBM Plex Mono"
announcementTheme.spacing // pageX 105, section 40, large 56, small 16
announcementTheme.typography // eyebrow 19, display 82 (serif), title 58 (sans), body 23, meta 18, caption 19
announcementTheme.radius  // image 8, pill 999
```

Three fonts, three jobs — never swap them: **serif** = article headlines only; **sans** = announcement type, titles, body, CTA, brand; **mono** = tags, labels, metadata, technical annotations only. Meta floor is 18px at 1080 wide (reference print uses ~15px at 1222w; we scale up for phone legibility — never go below 18px).

## Canvas and grid

- 1080×1350 (4:5). Resolution-independent: express layout in tokens, not magic numbers.
- `PAGE_PADDING_X = 105` → ~870px content column. NOTHING touches the canvas edge: headline, image, footer all live inside the gutter.
- Everything aligns to one shared left edge. One vertical grid for headline, description, image, CTA, footer.

## Layout skeletons (pick ONE per post)

**A — Article / press:** Masthead (publication + rules + nav) → breadcrumb → serif display headline → sans description → right-aligned meta → 16:9 hero image → calm CTA → rule + brand footer.
**B — Hiring / launch:** `[Brand]` mark → huge sans ANNOUNCEMENT TYPE (`We're hiring`, 84–110px/800) → specific title (`Head of Marketing & Content`, ~54px/700) → mono `Tag` pills → spaced bullets (gap 16–22, lineHeight 1.35–1.45, max 6) → rule + two-column application footer (mono `//` labels + bold destinations).
**C — Personal / availability:** location eyebrow → bold statement headline → hero image → mono credential pills → description → bold CTA (`Comment / send me a DM.`) → rule + `[Brand]` left / date-range right.

## Typography rules

- **Serif display (A):** `DM Serif Display`, 72–90px (82 default), lineHeight 0.94–1.02, weight 400, left-aligned. Tight leading is what makes it feel like a magazine.
- **Announcement type (B/C):** sans 800, larger than the specific title below it (`We're hiring` > role name). Generalize: `We're launching` → product; `We raised` → amount; `Now available` → artifact.
- **Description:** sans 21–25px, weight 400, lineHeight 1.2–1.45, 2–4 lines max. Headline = attention, description = context.
- **Balanced wrapping:** set `textWrap: "balance"` on headline/description divs so Satori avoids orphan words; keep semantic phrases together by pre-splitting long headlines into stacked line-divs when balance alone fails. Never ship 5+ ragged headline lines — shorten the copy first.
- **Bullets:** `•` marker + 16–22px gaps; first bullet may carry a bold lead (`At 360 Labs,` + regular rest — single-string interpolation, see base skill).

## Header, brand, footer

- **Masthead (A only):** centered publication name (~40px/800) → 1px rule → centered nav (~18px) → 1px rule. Component: `Masthead`.
- **BrandMark:** `[Name]` — brackets ARE the logo (technical/developer signal). Props: `name`, `prefix`, `suffix`. Component: `BrandMark`. Never supersize it; footer mark ~40px, header mark ~48px.
- **Footer:** 1px rule → `[Brand]` left + metadata right (date range, handle, or caption pointer). Understated — it never competes with content.

## Metadata and tags

- Meta is subtle, often right-aligned: small mono or sans, muted (`Jun 24, 2026`, `4 min read`). Pass it structurally (`meta: { date, readTime }`), never as decoration.
- `Tag` pills: white bg, `1px solid #DCDCDC`, radius 999, mono ~19px muted, padding 22×13. One row, wrap with gap 16. For people/pill rows (name, role, company) use the same Tag.
- Application footers use mono `//` labels (`// apply here at`) above bold sans destinations.

## Image rules

- Hero: ~870px wide (full content column), ~16:9 (`870×510`), `borderRadius` 8, `objectFit: "cover"` + explicit `objectPosition`, explicit width/height attributes.
- **Treatment pipeline (mandatory for photos):** crop → `filter: "grayscale(1) contrast(1.08)"` → photographic, on-brand monochrome. Never drop a color photo into this system. No frames, no shadows.
- Production images must be local files inlined via `loadImage()` (`src/renderer/images.ts`) — never hotlink. Remote `https://` URLs render but are a demo shortcut only. A demo photo lives at `public/assets/demo-team.jpg` for drafts.

## CTA rules

Calm editorial language, never aggressive: `Read full article from link in bio.` / `Comment / send me a DM.` / `Apply at careers.example.com`. Sans 24–32px, weight 400–500 (bold only for DM-style closers). One CTA, 1–2 lines.

## Content → design mapping

First normalize the brief into this shape, then pick skeleton A/B/C. Never ask the user for pixel positions.

```json
{
  "type": "hiring",
  "announcement": "We're hiring",
  "title": "Head of Marketing & Content",
  "description": "At 360 Labs, you'll own content end to end.",
  "tags": ["Remote / On-site · India", "Full-time / Contract"],
  "bullets": ["Develop content strategy…", "Track performance…"],
  "meta": { "applyUrl": "careers.example.com", "email": "careers@example.com" },
  "cta": "Read the caption",
  "brand": { "name": "360Labs", "prefix": "[", "suffix": "]" }
}
```

## Content density management (hard caps)

If content overflows, cut copy — never shrink type into unreadability: headline 4–5 lines max, description 3–4 lines, bullets 5–6 max, CTA 1–2 lines. Move overflow into metadata, drop redundant bullets, shorten the CTA. Only then reduce font size.

## Good vs bad

- ✅ "White canvas, 105px gutters, `[Brand]`, 96px `We're hiring`, 54px role, two mono tags, 6 airy bullets, rule, `// apply here at` + bold URL."
- ❌ "Gradient hero, 5 colors, emoji CTA, logo banner, 14px body copy, photo with drop shadow."

## Complete example (hiring — skeleton B)

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

const ink = "#050505";
const muted = "#666666";
const border = "#DCDCDC";
const sans = "Inter";
const mono = "IBM Plex Mono";

function Tag({ children }: { children?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", alignSelf: "flex-start", background: "#fff", border: `1px solid ${border}`, borderRadius: 999, paddingLeft: 22, paddingRight: 22, paddingTop: 13, paddingBottom: 13, fontFamily: mono, fontSize: 19, color: muted }}>
      {children}
    </div>
  );
}

const bullets = [
  "Develop content strategy, formats, campaigns, and schedules.",
  "Track content performance and improve content quality.",
  "Script and conceptualise content across short-form and long-form.",
  "Handle cinematography, camera, lighting, and sound.",
  "Build founder-led, product, behind-the-scenes, and brand content.",
];

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#fff", paddingLeft: 105, paddingRight: 105, paddingTop: 72, paddingBottom: 64 }}>
      <div style={{ fontFamily: sans, fontSize: 48, fontWeight: 800, color: ink }}>{"[Northwind]"}</div>
      <div style={{ fontFamily: sans, fontSize: 96, fontWeight: 800, lineHeight: 1.0, color: ink, marginTop: 72, textWrap: "balance" }}>{"We're hiring"}</div>
      <div style={{ fontFamily: sans, fontSize: 54, fontWeight: 700, lineHeight: 1.12, color: ink, marginTop: 28, textWrap: "balance" }}>Head of Marketing and Content</div>
      <div style={{ display: "flex", flexDirection: "row", gap: 16, marginTop: 32 }}>
        <Tag>Remote / On-site · India</Tag>
        <Tag>Full-time / Contract</Tag>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 48 }}>
        {bullets.map((b) => (
          <div key={b} style={{ display: "flex", flexDirection: "row", gap: 16 }}>
            <div style={{ fontFamily: sans, fontSize: 26, fontWeight: 700, color: ink }}>•</div>
            <div style={{ fontFamily: sans, fontSize: 26, fontWeight: 400, lineHeight: 1.4, color: ink }}>{b}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ width: "100%", height: 1, background: border }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontFamily: mono, fontSize: 18, color: muted }}>{"// apply here at"}</div>
            <div style={{ fontFamily: sans, fontSize: 30, fontWeight: 700, color: ink }}>careers.northwind.ai</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
            <div style={{ fontFamily: mono, fontSize: 18, color: muted }}>{"// full job description"}</div>
            <div style={{ fontFamily: sans, fontSize: 30, fontWeight: 700, color: ink }}>Read the caption</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

Validate with `npm run validate <file>`, render with `npm run render <file>`. Production photos: inline local files via `loadImage()`; see `templates/editorial-announcement/` starters.
