import React from "react";

/** Quote graphic (quote-post skill). */
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
        background: "#101014",
        padding: 84,
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3, color: "#A1A1AA" }}>
        FOUNDER NOTES
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 110 }}>
        <div style={{ fontSize: 110, fontWeight: 800, lineHeight: 1, color: "#7C3AED" }}>"</div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.28,
            color: "#FFFFFF",
            marginTop: -24,
          }}
        >
          We stopped selling software and started selling the outcome. Everything changed.
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 24, marginTop: 48 }}>
          <div
            style={{
              width: 112,
              height: 112,
              borderRadius: 56,
              background: "#7C3AED",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            MK
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#FFFFFF" }}>— Maya Krishnan</div>
            <div style={{ fontSize: 25, fontWeight: 500, color: "#A1A1AA" }}>Founder, Ledgerline</div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>LEDGERLINE</div>
        <div style={{ fontSize: 22, color: "#A1A1AA" }}>@ledgerline</div>
      </div>
    </div>
  );
}
