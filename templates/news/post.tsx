import React from "react";

// Template: news card. Copy to output/ and edit.
export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#0B0B0E", padding: 68 }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16 }}>
        <div style={{ background: "#E11D48", color: "#fff", fontSize: 20, fontWeight: 800, letterSpacing: 2, paddingLeft: 22, paddingRight: 22, paddingTop: 10, paddingBottom: 10, borderRadius: 999 }}>SOURCE</div>
        <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>CATEGORY</div>
      </div>
      <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.06, color: "#fff", marginTop: 30 }}>
        Headline goes here
      </div>
      <div style={{ width: 944, height: 430, borderRadius: 24, marginTop: 36, background: "linear-gradient(135deg,#334155,#0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontSize: 120, fontWeight: 800, color: "rgba(255,255,255,0.9)" }}>•</div>
      </div>
      <div style={{ fontSize: 29, lineHeight: 1.45, color: "#C4C4CC", marginTop: 34 }}>Why it matters, in one sentence.</div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ width: "100%", height: 2, background: "#27272A" }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>SOURCE: NAME</div>
          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>DATE</div>
        </div>
      </div>
    </div>
  );
}
