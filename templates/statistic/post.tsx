import React from "react";

// Template: statistic. Copy to output/ and edit.
export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#0A0A0A", padding: 72 }}>
      <div style={{ fontSize: 240, fontWeight: 800, lineHeight: 1, color: "#22C55E", marginTop: 130 }}>42%</div>
      <div style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.35, color: "#fff", marginTop: 28 }}>
        Supporting explanation here
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ width: "100%", height: 2, background: "#27272A" }} />
        <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>SOURCE: NAME</div>
      </div>
    </div>
  );
}
