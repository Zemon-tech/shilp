import React from "react";

/** Basic type-led post (single-post skill). */
export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div
      style={{
        width: 1080,
        height: 1350,
        display: "flex",
        flexDirection: "column",
        background: "#0A0A0A",
        padding: 72,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16 }}>
        <div
          style={{
            background: "#7C3AED",
            color: "#fff",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 2,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 999,
          }}
        >
          GUIDE
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: 2, color: "#A1A1AA" }}>5 MIN READ</div>
      </div>
      <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, color: "#FFFFFF", marginTop: 32 }}>
        Design posts people actually stop for
      </div>
      <div style={{ fontSize: 29, fontWeight: 400, lineHeight: 1.45, color: "#A1A1AA", marginTop: 28 }}>
        Hierarchy first, decoration last. One idea per canvas, always.
      </div>
      <div
        style={{
          marginTop: 48,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          background: "#131316",
          border: "2px solid #27272A",
          borderRadius: 24,
          padding: 36,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            background: "#7C3AED",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            fontWeight: 800,
            color: "#fff",
          }}
        >
          1
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#fff" }}>One focal point</div>
          <div style={{ fontSize: 26, color: "#A1A1AA" }}>If everything is big, nothing is big.</div>
        </div>
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ width: "100%", height: 2, background: "#27272A" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>STUDIO</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: "#A1A1AA" }}>@studio · Save this »</div>
        </div>
      </div>
    </div>
  );
}
