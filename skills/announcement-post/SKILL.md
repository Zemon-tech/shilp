---
name: announcement-post
description: Create a launch/announcement graphic (eyebrow, name reveal, payoff, date/CTA) with Satori JSX. Use for product launches, features, events, company news.
---

# Announcement Post Skill

Create a **launch / announcement graphic**. Read `skills/satori-social/SKILL.md` first.

## When to use

- Product launches, feature releases, events, company milestones. Hype-forward framing (vs `news-post`'s journalistic framing).

## Composition

```
EYEBROW (launch pill / "NEW" / "INTRODUCING")

Product or event NAME (largest type on canvas)

One-line payoff (what it is + who it's for)

Hero visual or date/CTA block

Date · availability · CTA footer
```

1. **Eyebrow:** accent pill ("INTRODUCING", "V2.0", "LIVE NOW") — sets the celebratory register.
2. **Name reveal:** 72–96px / 800. The name must be readable in a 2-second scroll.
3. **Payoff:** one line, ≤ 15 words: what it is + who it's for. No feature lists.
4. **Hero:** product panel, date block, or abstract gradient. Never a literal party-popper stock photo.
5. **Footer:** availability ("Available today"), date, and ONE CTA ("Get early access →").

## Layout rules

- Centered layouts are allowed here (rare exception) — launches read as posters.
- Build a clear top-to-bottom crescendo: eyebrow → name → payoff → visual → CTA.
- CTA appears exactly once. Two CTAs halve clicks.

## Typography / color rules

- Name in white on deep brand color, or brand color on light. Maximum contrast — this is a reveal.
- Brand accent may saturate the canvas (gradient field) — the one place maximalism is welcome. Keep body copy neutral so the name pops.

## Good vs bad

- ✅ "'INTRODUCING' pill → 'Flowdesk 2.0' at 88px → 'Support inbox that triages itself' → date + one CTA."
- ❌ "Six feature bullets at 24px, three CTAs, 'excited to announce' throat-clearing as the headline."

## Complete example

```tsx
import React from "react";

export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", alignItems: "center", background: "linear-gradient(180deg,#1E1B4B,#6D28D9 60%,#A855F7)", padding: 72 }}>
      <div style={{ background: "#FFFFFF", color: "#6D28D9", fontSize: 21, fontWeight: 800, letterSpacing: 3, paddingLeft: 26, paddingRight: 26, paddingTop: 12, paddingBottom: 12, borderRadius: 999 }}>INTRODUCING</div>
      <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.02, color: "#fff", textAlign: "center", marginTop: 36 }}>Flowdesk 2.0</div>
      <div style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.4, color: "rgba(255,255,255,0.88)", textAlign: "center", marginTop: 20 }}>
        The support inbox that triages itself
      </div>
      <div style={{ width: 936, height: 380, borderRadius: 28, background: "rgba(255,255,255,0.14)", border: "2px solid rgba(255,255,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 48 }}>
        <div style={{ fontSize: 40, fontWeight: 700, color: "#fff" }}>• Auto-triage · Replies · Insights</div>
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ background: "#0A0A0A", color: "#fff", fontSize: 28, fontWeight: 800, paddingLeft: 48, paddingRight: 48, paddingTop: 20, paddingBottom: 20, borderRadius: 999 }}>Get early access »</div>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: 2, color: "rgba(255,255,255,0.8)" }}>AVAILABLE TODAY · FLOWDESK.COM</div>
      </div>
    </div>
  );
}
```

Validate with `npm run validate <file>`, render with `npm run render <file>`.
