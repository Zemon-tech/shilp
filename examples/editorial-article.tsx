import React from "react";
import { fileURLToPath } from "node:url";
import { loadImage } from "../src/renderer/images.js";

/**
 * Editorial article announcement (editorial-announcement skill, skeleton A).
 * Demo photo is vendored in public/assets and inlined as base64 at load, so
 * this renders offline. Production posts: swap in the client's own photo.
 */
export const width = 1080;
export const height = 1350;

const heroSrc = await loadImage(
  "../public/assets/demo-team.jpg",
  fileURLToPath(import.meta.url),
);

const ink = "#050505";
const muted = "#666666";
const border = "#DCDCDC";
const sans = "Inter";
const serif = "DM Serif Display";

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
        paddingTop: 52,
        paddingBottom: 52,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ display: "flex", justifyContent: "center", fontFamily: sans, fontSize: 40, fontWeight: 800, color: ink, textAlign: "center" }}
        >
          The Entrepreneur Post
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
          fontSize: 72,
          fontWeight: 400,
          lineHeight: 1.02,
          color: ink,
          marginTop: 36,
          textWrap: "balance",
        }}
      >
        How Northwind Shipped 12 AI Products in Under Six Months
      </div>
      <div
        style={{
          fontFamily: sans,
          fontSize: 23,
          fontWeight: 400,
          lineHeight: 1.32,
          color: ink,
          marginTop: 22,
        }}
      >
        From a small studio office, the team built AI systems for logistics, healthcare, and
        public-sector pilots. The company is less than a year old.
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, marginTop: 14 }}>
        <div style={{ fontFamily: sans, fontSize: 18, color: muted }}>Jun 24, 2026</div>
        <div style={{ fontFamily: sans, fontSize: 18, color: muted }}>4 min read</div>
      </div>
      <img
        src={heroSrc}
        width={870}
        height={500}
        style={{
          width: 870,
          height: 500,
          borderRadius: 8,
          objectFit: "cover",
          marginTop: 22,
          filter: "grayscale(1) contrast(1.08)",
        }}
      />
      <div style={{ fontFamily: sans, fontSize: 30, fontWeight: 400, color: ink, marginTop: 26 }}>
        Read full article from link in bio.
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ width: "100%", height: 1, background: border }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ fontFamily: sans, fontSize: 36, fontWeight: 800, color: ink }}>
            {"[Northwind]"}
          </div>
          <div style={{ fontFamily: sans, fontSize: 20, color: muted }}>ESSAY · JUNE 2026</div>
        </div>
      </div>
    </div>
  );
}
