import React from "react";

// Template: single post. Copy to output/ and edit.
export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#0A0A0A", padding: 72 }}>
      <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 3, color: "#A1A1AA" }}>KICKER</div>
      <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, color: "#FFFFFF", marginTop: 24 }}>
        Your headline here
      </div>
      <div style={{ fontSize: 29, lineHeight: 1.45, color: "#A1A1AA", marginTop: 24 }}>
        One supporting sentence. Delete me or replace me.
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ width: "100%", height: 2, background: "#27272A" }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>BRAND</div>
          <div style={{ fontSize: 22, color: "#A1A1AA" }}>@handle</div>
        </div>
      </div>
    </div>
  );
}
