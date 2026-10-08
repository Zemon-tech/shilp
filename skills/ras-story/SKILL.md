---
name: ras-story
description: Create a Rise & Shine (RAS) by KeilHQ photo-led editorial story post with a full-bleed hero image, overlaid masthead & category marker, serif headline, deck with inline highlighted accent, 3-metric spec strip, pull quote with accent bar, and locked brand footer in Satori JSX. Read satori-social first. Reference: output/ras-anthropic-frontier-academy.tsx.
---

# Rise & Shine (RAS) Editorial Story Skill

Create a **photo-led editorial story post** for **Rise & Shine (RAS) by KeilHQ** — the daily signal for people building what's next. Read `skills/satori-social/SKILL.md` first; all base Satori constraints apply.

Reference implementations:
- `output/ras-anthropic-frontier-academy.tsx`
- `output/ras-claude-india-inference.tsx`
- `output/ras-supabase-turso.tsx`
- Template: `templates/ras-story/post.tsx`

---

## When to use

- Story breakdowns, funding rounds, strategic AI announcements, tech ecosystem moves, and company milestones in the signature Rise & Shine photo-led format.
- Content where a strong visual photograph/render anchors the top half, followed by an editorial breakdown on Daybreak Paper with metrics and quotes.

---

## Brand DNA & Visual Philosophy

```text
Ink. Paper. Daybreak.
Midnight Ink (#151615)     → Intelligence · Depth · Seriousness
Daybreak Paper (#F4F0E6)   → Editorial credibility · Calm · Clarity
Daybreak Vermilion (#F25C3D) → The signature RAS sunrise signal (breaking/urgent)
```

**Never use:** Generic SaaS blue/purple gradients, glassmorphism, random emojis, Canva cards-in-cards, or floating shadows. High information hierarchy and restrained typography carry the weight.

---

## Canvas & Layout Blueprint (1080 × 1350)

```text
┌────────────────────────────────────────────────────────┐
│  [Dark Logo] RISE & SHINE            BY KEILHQ (mono)  │  ← Top Scrim (h: 200)
│                                                        │
│                    FULL-BLEED HERO                     │
│                  1080 × 620 Cover Photo                │
│                                                        │
│  (● NEW) AI · ENTERPRISE · JOBS                        │  ← Overlaid Marker
├────────────────────────────────────────────────────────┤  ← Bottom Scrim (h: 160)
│  08 OCT 2026 · TOPIC KICKER (mono)                     │
│                                                        │
│  Serif Headline in Instrument Serif (74–78px)          │
│                                                        │
│  Sans deck context with [highlighted accent phrase]    │
│                                                        │
│  [ $100M ]   │   [ 10,000 ]   │   [ 2027 ]             │  ← 3-Column Spec Strip
│  committed   │   engineers    │   target               │
│                                                        │
│  ┃ Pull quote in Instrument Serif (34px)               │  ← Accent bar
│    ENTITIES · MONO · ATTRIBUTION                       │
│                                                        │
│  ────────────────────────────────────────────────────  │  ← 1px Rule
│  [Light Logo] Rise & Shine                   SOURCE    │  ← Locked Footer
└────────────────────────────────────────────────────────┘
```

---

## Brand Tokens (`public/assets/ras-by-keilhq.json`)

```ts
// Base Canvas Tokens
const ink = "#151615";          // Midnight Ink (headlines, primary text)
const paper = "#F4F0E6";        // Daybreak Paper (body background)
const rule = "#D6CFBF";         // Soft Hairline Divider
const vermilion = "#F25C3D";    // Daybreak Vermilion (marker badge only)
const inkMuted = "rgba(21,22,21,0.60)"; // Subtext, dateline, labels

// Category World Accents (pick ONE based on story domain):
// - AI & Research:          Signal Teal   #2F7C74 (default)
// - Funding & Acquisitions:  Harvest Gold #E2A72E
// - Future & Experimental:  Fresh Lime    #C7E84A
// - Breaking News:          Vermilion     #F25C3D
const accent = "#2F7C74";       // Used for hot specs & deck highlighted phrase
const quoteAccent = "#C7E84A";  // Fresh Lime vertical bar for pull quote

// Typography Hierarchy
const sans = "Inter";           // Deck, specs, masthead title, footer brand
const serif = "Instrument Serif"; // Headline (74px) and pull quote (34px)
const mono = "IBM Plex Mono";   // Datelines, markers, tags, credits
```

---

## Layout Components Breakdown

### 1. Full-Bleed Hero (Height: 620px)
- **Image:** 1080×620, `objectFit: "cover"`, `objectPosition: "center 40%"`.
- **Top Scrim:** `linear-gradient(180deg, rgba(5,5,6,0.72) 0%, rgba(5,5,6,0) 100%)`, height 200.
- **Bottom Scrim:** `linear-gradient(180deg, rgba(244,240,230,0) 0%, #F4F0E6 100%)`, height 160.
- **Masthead:**
  - Placed at `top: 50`, `left/right: 72`.
  - Left: `ras-by-keilhq-logo-dark.png` (40×40) + `RISE & SHINE` (sans 24px, 800, paper).
  - Right: `BY KEILHQ` (mono 15px, letterSpacing 3, semi-transparent paper).
- **Category Marker:**
  - Placed at `bottom: 42`, `left: 72`.
  - Badge: Vermilion background, pill 999, 8px white circle dot, `NEW` or `UPDATE` in mono 14px / letterSpacing 3.
  - Path: `mono 14px, letterSpacing 3, color: paper` (e.g. `AI · ENTERPRISE · JOBS` or `AI · INFRASTRUCTURE`).

### 2. Editorial Body on Daybreak Paper
- Padding: `paddingLeft: 72`, `paddingRight: 72`, `paddingTop: 8`, `paddingBottom: 56`.
- **Dateline & Kicker:** `mono 15px, letterSpacing 3, color: inkMuted` (`08 OCT 2026 · TOPIC`).
- **Serif Headline:** `Instrument Serif`, 74–78px, weight 400, tight line-height `0.98`, `textWrap: "balance"`, color `ink`. Max 2–3 lines.
- **Context Deck:**
  - Sans 22px, weight 400, lineHeight 1.4, `ink`.
  - Inline scanning highlight: `<span style={{ fontWeight: 700, color: accent }}>{"key insight phrase"}</span>`.
  - Use `display: "flex", flexWrap: "wrap", columnGap: 7` on wrapper paragraphs to prevent fused word boundaries.
- **Spec Strip:**
  - 3 columns side by side separated by `width: 1, background: rule`.
  - Value: Sans 42px, weight 800, tight tracking (`letterSpacing: -1.5`), colored `accent` if `hot`, or `ink`.
  - Optional unit: Sans 16px, weight 700, `inkMuted`.
  - Label: Sans 16px, lineHeight 1.3, `inkMuted`. Max 2 lines.
- **Pull Quote:**
  - 4px vertical accent bar (`background: quoteAccent`, `borderRadius: 2`).
  - Quote text: `Instrument Serif`, 34px, lineHeight 1.14, `ink`, `textWrap: "balance"`.
  - Source/entities attribution: `mono 14px, letterSpacing 2, inkMuted` (e.g. `ACCENTURE · MCKINSEY · BAIN`).
- **Locked Footer:**
  - Separated by `width: "100%", height: 1, background: rule`.
  - Left: `ras-by-keilhq-logo-light.png` (50×39 contain) + `Rise & Shine` (sans 20px, weight 800, `ink`).
  - Right: Entity/Source in `mono 15px, letterSpacing 2, inkMuted` (e.g. `ANTHROPIC`, `SUPABASE`).

---

## Content & Copywriting Guidelines

1. **Headline:** Write a sharp editorial thesis, not a boring press release title:
   - ✅ *"Anthropic isn't just building AI. It's building the people who deploy it."*
   - ❌ *"Anthropic Announces $100M Claude Frontier Academy Program"*
2. **Deck:** 2 short lines providing the tension and human consequence. Exactly 1 phrase bolded in the category accent.
3. **Spec Strip:** 3 punchy numbers. Make 1 or 2 "hot" (`hot={true}`).
4. **Pull Quote:** The central editorial takeaway or quote that summarizes the builder shift.

---

## Workflow for Agents

1. When asked to create this kind of post, start from `templates/ras-story/post.tsx`.
2. Write the output to `output/<slug>.tsx`.
3. Load the local hero image with `loadImage("../public/<image-name>.png", fileURLToPath(import.meta.url))`.
4. Validate with `npm run validate output/<slug>.tsx`.
5. Render with `npm run render output/<slug>.tsx`.
