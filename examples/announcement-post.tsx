import React from "react";

/** Launch poster (announcement-post skill). */
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
        alignItems: "center",
        background: "linear-gradient(180deg,#1E1B4B,#6D28D9 60%,#A855F7)",
        padding: 72,
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          color: "#6D28D9",
          fontSize: 21,
          fontWeight: 800,
          letterSpacing: 3,
          paddingLeft: 26,
          paddingRight: 26,
          paddingTop: 12,
          paddingBottom: 12,
          borderRadius: 999,
        }}
      >
        INTRODUCING
      </div>
      <div
        style={{
          fontSize: 92,
          fontWeight: 800,
          lineHeight: 1.02,
          color: "#fff",
          textAlign: "center",
          marginTop: 36,
        }}
      >
        Flowdesk 2.0
      </div>
      <div
        style={{
          fontSize: 32,
          fontWeight: 500,
          lineHeight: 1.4,
          color: "rgba(255,255,255,0.88)",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        The support inbox that triages itself
      </div>
      <div
        style={{
          width: 936,
          height: 360,
          borderRadius: 28,
          background: "rgba(255,255,255,0.14)",
          border: "2px solid rgba(255,255,255,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 48,
        }}
      >
        <div style={{ fontSize: 38, fontWeight: 700, color: "#fff" }}>• Auto-triage · Replies · Insights</div>
      </div>
      <div
        style={{ marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
      >
        <div
          style={{
            background: "#0A0A0A",
            color: "#fff",
            fontSize: 28,
            fontWeight: 800,
            paddingLeft: 48,
            paddingRight: 48,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 999,
          }}
        >
          Get early access »
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: 2, color: "rgba(255,255,255,0.8)" }}>
          AVAILABLE TODAY · FLOWDESK.COM
        </div>
      </div>
    </div>
  );
}
