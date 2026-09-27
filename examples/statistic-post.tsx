import React from "react";

/** Number-dominant stat (statistic-post skill). */
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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            background: "#132B1F",
            color: "#22C55E",
            fontSize: 21,
            fontWeight: 800,
            letterSpacing: 2,
            paddingLeft: 22,
            paddingRight: 22,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 999,
          }}
        >
          +12 PTS VS 2024
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 120 }}>
        <div style={{ fontSize: 240, fontWeight: 800, lineHeight: 1, color: "#22C55E" }}>42%</div>
        <div style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.35, color: "#FFFFFF", marginTop: 28 }}>
          of developers now use AI coding tools daily
        </div>
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ width: "100%", height: 2, background: "#27272A" }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>
            SOURCE: DEV SURVEY 2026
          </div>
          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>@STUDIO</div>
        </div>
      </div>
    </div>
  );
}
