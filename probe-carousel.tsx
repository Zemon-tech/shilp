import React from "react";
export const width = 1080;
export const height = 1350;

// Probe A: nested inline bold inside a wrapping paragraph.
// Probe B: card wider than text via negative margins.
export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#ffffff", paddingLeft: 78, paddingRight: 78, paddingTop: 60 }}>
      <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: 14, paddingRight: 14, fontSize: 24, lineHeight: 1.45, color: "#111" }}>
        According to recent reports, smartphones can now run models with <span style={{ fontWeight: 700 }}>up to 90% lower latency</span> than cloud calls, challenging the <span style={{ fontWeight: 700 }}>bigger is better</span> assumption across the industry.
      </div>
      <div style={{ marginLeft: -14, marginRight: -14, marginTop: 30, background: "#F5F5F5", borderRadius: 16, padding: 32, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 12 }}>
        <div style={{ background: "#fff", border: "1px solid #E2E2E2", borderRadius: 10, paddingLeft: 18, paddingRight: 18, paddingTop: 12, paddingBottom: 12, fontSize: 20, fontWeight: 700 }}>User</div>
        <div style={{ width: 40, height: 2, background: "#050505" }} />
        <div style={{ background: "#050505", color: "#fff", borderRadius: 10, paddingLeft: 18, paddingRight: 18, paddingTop: 12, paddingBottom: 12, fontSize: 20, fontWeight: 700 }}>Device</div>
      </div>
      <div style={{ paddingLeft: 14, paddingRight: 14, fontSize: 20, color: "#666", marginTop: 20 }}>Probe footer line.</div>
    </div>
  );
}
