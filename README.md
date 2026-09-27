# Satori Social Skills

An open-source, agent-portable toolkit for generating high-quality **static social media images** with [Satori](https://github.com/vercel/satori).

Inspired by [HeyGen HyperFrames](https://github.com/heygen-com/hyperframes) (skills + renderer separation) and [social-carousel-generator](https://github.com/idrsdev/social-carousel-generator) (design-system-driven carousels) — reduced to the smallest thing that works for **static** graphics.

```
                ┌───────────────────┐
                │   AI Coding Agent │
                └─────────┬─────────┘
                          │ reads Skills
                          ▼
                ┌───────────────────┐
                │    Satori JSX     │
                │      Code         │
                └─────────┬─────────┘
                          │ renders
                          ▼
                ┌───────────────────┐
                │  Simple Renderer  │
                └─────────┬─────────┘
                          ▼
                      PNG / SVG
```

**Skills are the intelligence. Satori code is the design. The renderer is the execution layer.** The three are fully independent.

This project is NOT an agent, SaaS, publisher, or dashboard. It is: **SKILLS + COMPONENTS + SATORI RENDERER + CLI + EXAMPLES.**

## What is this?

| Layer | Location | Role |
|---|---|---|
| Design intelligence | `skills/*/SKILL.md` | Teaches any coding agent (OpenCode, Claude Code, Cursor, Antigravity…) to write Satori JSX |
| Design implementation | `output/*.tsx` (agent-written) | Plain Satori-compatible React components |
| Rendering runtime | `src/renderer/` + `scripts/` | JSX → Satori SVG → resvg PNG |
| Bridge | `examples/`, `templates/` | Working designs agents can copy |

## Installation

```bash
git clone <this-repo> satori-social-skills
cd satori-social-skills
npm install
```

Fonts: place `.ttf`/`.otf`/`.woff` files in `public/fonts/` (Inter + DM Serif Display + IBM Plex Mono ship pre-downloaded; the renderer auto-downloads them on first run if the folder is empty). Satori matches each element's `fontFamily` against these files — see `src/renderer/fonts.ts` (`FAMILY_ALIASES`) when vendoring a new family. Unset `fontFamily` defaults to Inter.

## Install skills

```bash
npm run install-skills -- --agent opencode
npm run install-skills -- --agent claude
npm run install-skills -- --agent cursor
npm run install-skills -- --agent antigravity
npm run install-skills -- --target /path/to/skills   # any other agent
npm run install-skills -- --list                      # show destination paths
```

Manual install (always works):

```bash
cp -r skills/* <your-agent-skills-dir>/
```

Skills are portable Markdown — they never depend on this renderer, a database, API, or LLM provider.

### Using with OpenCode / Claude Code / Cursor / Antigravity

1. Install skills with the command above.
2. Prompt your agent, e.g.: `Use the news-post skill. Create a 1080x1350 LinkedIn post about "OpenAI releases a new coding model." Use the editorial visual style.`
3. The agent writes `output/openai-news.tsx`. Render it (next section).

## Creating a post / carousel

Ask the coding agent. It reads the relevant skill and writes Satori JSX following the input contract:

```tsx
import React from "react";
export const width = 1080;
export const height = 1350;
export default function Post() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      {/* … */}
    </div>
  );
}
```

Carousels export `export const slides = [Slide1, Slide2, …]` (or default-export an array).

## Rendering

```bash
npm run render output/openai-news.tsx                    # → output/openai-news.png
npm run render output/openai-news.tsx --output out/n.png
npm run render output/openai-carousel.tsx                # → output/openai-carousel/01.png …
npm run render post.tsx --format svg                     # SVG output
npm run render post.tsx --type carousel                  # explicit type
npm run render post.tsx --width 1080 --height 1080       # size override
npm run render carousel.tsx --output out/c --zip         # + bundled .zip
npm run validate file.tsx                                # static + trial-render checks
```

## Skills

| Skill | Use when |
|---|---|
| `satori-social` | Always read first — Satori constraints, contracts, dimensions |
| `single-post` | Generic one-image post |
| `news-post` | News cards with source + hero image |
| `quote-post` | Testimonials, statements |
| `statistic-post` | One dominant number |
| `announcement-post` | Hype-forward dark launch posters |
| `editorial-announcement` | Restrained light editorial announcements (masthead/hiring/personal, serif + mono, bracket brand mark) |
| `editorial-post` | Magazine-grade dark editorial layouts |
| `carousel` | Storytelling slide sequences |
| `editorial-news-carousel` | White tech-news explainer carousels (mono eyebrow, claim headline, diagram figure, locked footer) |
| `educational-carousel` | Teaching carousels with frameworks |
| `brand-system` | Applying a `brand.json` consistently |

## Creating custom skills / templates

A new skill is just `skills/<name>/SKILL.md` (plus optional examples/templates) — no renderer changes needed. Future ideas: `reddit-post`, `twitter-post`, `linkedin-post`, `product-launch`, `funding-announcement`, `event-poster`, `infographic`, `comparison`, `timeline`, `framework`, `meme`. Copy the frontmatter + section structure of an existing skill.

## Satori limitations (summary)

Flexbox only (no grid), inline styles only, explicit dimensions (root + every image), `position: fixed` / `z-index` / hooks / `<style>` unsupported, TTF/OTF/WOFF fonts only (no WOFF2), remote images pass through (prefer local/base64). Full list: `skills/satori-social/SKILL.md`.

## Architecture

```
skills/            portable agent instructions (the intelligence)
src/
  renderer/        render.ts (loader + renderImage API), render-image.ts
                   (Satori→SVG→PNG), render-carousel.ts, fonts.ts, images.ts
  components/      Box Stack Row Center Text Badge Divider Avatar Stat Quote Image Logo
  themes/          default.ts (tokens), presets.ts (platform sizes)
scripts/           render.ts (CLI), validate.ts, install-skills.ts
templates/         starter files agents can copy
examples/          8 working designs (all render-tested)
public/fonts/      font files (Inter auto-downloaded if empty)
```

## Brand assets

- `public/assets/brand-example.json` — minimal brand-config starter for the `brand-system` skill.
- `public/assets/ras-by-keilhq.json` — full brand pack example (Rise & Shine by KeilHQ): core details, 7-color palette + 5 category worlds, Satoshi/Instrument Serif typography (renderer uses Inter + Instrument Serif), logo files/variants/rules, layout and usage guidelines. Point agents at it with: *"Use public/assets/ras-by-keilhq.json for all colors, fonts, and logo."*
- `public/RAS-by-keilhq/` — transparent PNG logo pack: full lockups for light/dark backgrounds (`ras-by-keilhq-light-mode.png`, `ras-by-keilhq-dark-mode.png`, 500×250) and standalone Rising-A symbols (`ras-by-keilhq-logo-light.png`, `ras-by-keilhq-logo-dark.png`, 160px). Inline via `loadImage()` with explicit dimensions, picking the variant that matches the background.

## License

MIT — see [LICENSE](LICENSE).
