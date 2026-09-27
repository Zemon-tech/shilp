import React from "react";

/** Magazine-grade editorial (editorial-post skill). */
export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "row", background: "#F4F1EA" }}>
      <div
        style={{
          width: 120,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 64,
          paddingBottom: 64,
          borderRight: "2px solid #141310",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: 4, color: "#141310" }}>N°04</div>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 4, color: "#141310" }}>ESSAY</div>
      </div>
      <div style={{ width: 960, boxSizing: "border-box", display: "flex", flexDirection: "column", padding: 64 }}>
        <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 3, color: "#8A8578" }}>
          THE CRAFT — OCTOBER 2026
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 28 }}>
          <div style={{ fontSize: 118, fontWeight: 800, lineHeight: 0.98, color: "#141310" }}>Slow</div>
          <div style={{ fontSize: 118, fontWeight: 800, lineHeight: 0.98, color: "#141310" }}>design</div>
          <div style={{ fontSize: 118, fontWeight: 800, lineHeight: 0.98, color: "#141310" }}>wins.</div>
        </div>
        <div style={{ width: 200, height: 6, background: "#C2410C", marginTop: 36 }} />
        <div style={{ fontSize: 30, fontWeight: 400, lineHeight: 1.5, color: "#3F3B33", marginTop: 32 }}>
          Attention is scarce. Restraint is the last unfair advantage in the feed.
        </div>
        <div
          style={{
            marginTop: "auto",
            borderTop: "2px solid #141310",
            paddingTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 2, color: "#141310" }}>
            ATELIER · J. MOREAU
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 2, color: "#8A8578" }}>4 MIN</div>
        </div>
      </div>
    </div>
  );
}
