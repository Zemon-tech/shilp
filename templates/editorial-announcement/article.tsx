import React from "react";
import { fileURLToPath } from "node:url";
import { loadImage } from "../../src/renderer/images.js";

// Template: editorial article / press announcement (skeleton A). Copy to output/ and edit.
// Photos MUST be local files inlined below — never hotlink production images.
export const width = 1080;
export const height = 1350;

const ink = "#050505";
const muted = "#666666";
const border = "#DCDCDC";
const sans = "Inter";
const serif = "DM Serif Display";

// NOTE: after copying this file to output/, point this at your photo:
//   await loadImage("../public/assets/your-photo.jpg", fileURLToPath(import.meta.url))
const demoSrc = await loadImage("../../public/assets/demo-team.jpg", fileURLToPath(import.meta.url));

export default function Post() {
  return (
    <div
      style={{
        width: 1080,
        height: 1350,
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        paddingLeft: 105,
        paddingRight: 105,
        paddingTop: 56,
        paddingBottom: 56,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center", fontFamily: sans, fontSize: 40, fontWeight: 800, color: ink, textAlign: "center" }}>
          The Publication Post
        </div>
        <div style={{ width: "100%", height: 1, background: border, marginTop: 24 }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 48,
            marginTop: 18,
            marginBottom: 18,
          }}
        >
          <div style={{ fontFamily: sans, fontSize: 18, fontWeight: 500, color: ink }}>Home</div>
          <div style={{ fontFamily: sans, fontSize: 18, fontWeight: 500, color: ink }}>About</div>
        </div>
        <div style={{ width: "100%", height: 1, background: border }} />
      </div>
      <div
        style={{
          fontFamily: serif,
          fontSize: 76,
          fontWeight: 400,
          lineHeight: 1.0,
          color: ink,
          marginTop: 40,
          textWrap: "balance",
        }}
      >
        How your team shipped something remarkable
      </div>
      <div
        style={{ fontFamily: sans, fontSize: 23, fontWeight: 400, lineHeight: 1.3, color: ink, marginTop: 24 }}
      >
        One or two sentences of context that explain the headline. Keep it to three lines maximum.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 4,
          marginTop: 16,
        }}
      >
        <div style={{ fontFamily: sans, fontSize: 18, color: muted }}>Jun 24, 2026</div>
        <div style={{ fontFamily: sans, fontSize: 18, color: muted }}>4 min read</div>
      </div>
      <img
        src={demoSrc}
        width={870}
        height={510}
        style={{ width: 870, height: 510, borderRadius: 8, objectFit: "cover", marginTop: 24, filter: "grayscale(1) contrast(1.08)" }}
      />
      <div style={{ fontFamily: sans, fontSize: 30, fontWeight: 400, color: ink, marginTop: 28 }}>
        Read full article from link in bio.
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ width: "100%", height: 1, background: border }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ fontFamily: sans, fontSize: 34, fontWeight: 800, color: ink }}>{"[Brand]"}</div>
          <div style={{ fontFamily: sans, fontSize: 20, color: muted }}>metadata</div>
        </div>
      </div>
    </div>
  );
}
