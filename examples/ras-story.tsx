import React from "react";
import { fileURLToPath } from "node:url";
import { loadImage } from "../src/renderer/images.js";

/**
 * Rise & Shine (RAS) by KeilHQ — Example Story Post
 * Reference: output/ras-anthropic-frontier-academy.tsx
 * Brand pack: public/assets/ras-by-keilhq.json
 */
export const width = 1080;
export const height = 1350;

// RAS brand tokens
const ink = "#151615";
const paper = "#F4F0E6";
const rule = "#D6CFBF";
const vermilion = "#F25C3D";
const teal = "#2F7C74";
const lime = "#C7E84A";
const inkMuted = "rgba(21,22,21,0.60)";
const sans = "Inter";
const serif = "Instrument Serif";
const mono = "IBM Plex Mono";

const here = fileURLToPath(import.meta.url);
const heroSrc = await loadImage("../public/anthropic-academy.png", here);
const footerLogo = await loadImage("../public/RAS-by-keilhq/ras-by-keilhq-logo-light.png", here);
const logoDark = await loadImage("../public/RAS-by-keilhq/ras-by-keilhq-logo-dark.png", here);

function Spec({ n, u, l, hot = false }: { n: string; u?: string; l: string; hot?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, flexGrow: 1, flexBasis: 0 }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: 6 }}>
        <div style={{ fontFamily: sans, fontSize: 42, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.0, color: hot ? teal : ink }}>
          {n}
        </div>
        {u ? <div style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: inkMuted }}>{u}</div> : null}
      </div>
      <div style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.3, color: inkMuted }}>{l}</div>
    </div>
  );
}

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: paper }}>
      {/* ── Full-Bleed Hero ── */}
      <div style={{ display: "flex", width: 1080, height: 620, position: "relative" }}>
        <img src={heroSrc} width={1080} height={620} style={{ width: 1080, height: 620, objectFit: "cover", objectPosition: "center 40%" }} />

        {/* top scrim */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 1080, height: 200, display: "flex", background: "linear-gradient(180deg, rgba(5,5,6,0.72) 0%, rgba(5,5,6,0) 100%)" }} />
        {/* bottom scrim */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: 1080, height: 160, display: "flex", background: "linear-gradient(180deg, rgba(244,240,230,0) 0%, #F4F0E6 100%)" }} />

        {/* Masthead */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 1080, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: 72, paddingRight: 72, paddingTop: 50 }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 14 }}>
            <img src={logoDark} width={40} height={40} style={{ width: 40, height: 40, objectFit: "contain" }} />
            <div style={{ fontFamily: sans, fontSize: 24, fontWeight: 800, letterSpacing: 1, color: paper }}>RISE & SHINE</div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 3, color: "rgba(244,240,230,0.75)" }}>BY KEILHQ</div>
        </div>

        {/* Category marker */}
        <div style={{ position: "absolute", left: 72, bottom: 42, display: "flex", flexDirection: "row", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, background: vermilion, borderRadius: 999, paddingLeft: 16, paddingRight: 18, paddingTop: 7, paddingBottom: 7 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: paper }} />
            <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: 3, color: paper }}>NEW</div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: 3, color: paper }}>AI · ENTERPRISE · JOBS</div>
        </div>
      </div>

      {/* ── Body on paper ── */}
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, paddingLeft: 72, paddingRight: 72, paddingTop: 8, paddingBottom: 56 }}>
        <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 3, color: inkMuted }}>05 OCT 2026 · CLAUDE FRONTIER ACADEMY</div>

        <div style={{ fontFamily: serif, fontSize: 74, fontWeight: 400, lineHeight: 0.98, color: ink, marginTop: 14, textWrap: "balance" }}>
          Anthropic isn't just building AI. It's building the people who deploy it.
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontFamily: sans, fontSize: 22, fontWeight: 400, lineHeight: 1.4, color: ink, marginTop: 20 }}>
          <div style={{ display: "flex", flexWrap: "wrap", columnGap: 7 }}>
            {"$100M. 10,000 engineers. The real AI bottleneck isn't"}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", columnGap: 7 }}>
            {"people who can use ChatGPT — it's engineers who can take AI from"}
            <span style={{ fontWeight: 700, color: teal }}>{"prototype to production."}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: 12, alignItems: "stretch", marginTop: 32 }}>
          <Spec n="$100M" l="committed by Anthropic" hot />
          <div style={{ width: 1, background: rule }} />
          <Spec n="10,000" l="Frontier Deployed Engineers targeted" hot />
          <div style={{ width: 1, background: rule }} />
          <Spec n="2027" l="programme completion deadline" />
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: 22, marginTop: 34 }}>
          <div style={{ width: 4, background: lime, borderRadius: 2 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontFamily: serif, fontSize: 34, lineHeight: 1.14, color: ink, textWrap: "balance" }}>
              The next talent gap isn't about writing prompts. It's about moving AI from a demo into a system that actually runs.
            </div>
            <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: 2, color: inkMuted }}>
              ACCENTURE · DELOITTE · MCKINSEY · MORGAN STANLEY · BAIN
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ width: "100%", height: 1, background: rule }} />
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 14 }}>
              <img src={footerLogo} width={50} height={39} style={{ width: 50, height: 39, objectFit: "contain" }} />
              <div style={{ fontFamily: sans, fontSize: 20, fontWeight: 800, color: ink }}>Rise & Shine</div>
            </div>
            <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: inkMuted }}>ANTHROPIC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
