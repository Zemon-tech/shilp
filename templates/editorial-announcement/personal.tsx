import React from "react";
import { fileURLToPath } from "node:url";
import { loadImage } from "../../src/renderer/images.js";

// Template: personal / availability announcement (skeleton C). Copy to output/ and edit.
// Photos MUST be local files inlined below — never hotlink production images.
export const width = 1080;
export const height = 1350;

const ink = "#050505";
const muted = "#666666";
const border = "#DCDCDC";
const sans = "Inter";
const mono = "IBM Plex Mono";

// NOTE: after copying this file to output/, point this at your photo:
//   await loadImage("../public/assets/your-photo.jpg", fileURLToPath(import.meta.url))
const demoSrc = await loadImage("../../public/assets/demo-team.jpg", fileURLToPath(import.meta.url));

function Tag({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        alignSelf: "flex-start",
        background: "#fff",
        border: `1px solid ${border}`,
        borderRadius: 12,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        fontFamily: mono,
        fontSize: 19,
        color: muted,
      }}
    >
      {children}
    </div>
  );
}

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
        paddingTop: 72,
        paddingBottom: 64,
      }}
    >
      <div style={{ fontFamily: sans, fontSize: 30, fontWeight: 700, color: ink }}>City, Country</div>
      <div
        style={{
          fontFamily: sans,
          fontSize: 62,
          fontWeight: 800,
          lineHeight: 1.05,
          color: ink,
          marginTop: 20,
          textWrap: "balance",
        }}
      >
        {"I'll be in the city tomorrow"}
      </div>
      <img
        src={demoSrc}
        width={870}
        height={560}
        style={{ width: 870, height: 560, borderRadius: 12, objectFit: "cover", marginTop: 32, filter: "grayscale(1) contrast(1.08)" }}
      />
      <div style={{ display: "flex", flexDirection: "row", gap: 14, marginTop: 28 }}>
        <Tag>Person Name</Tag>
        <Tag>Role</Tag>
        <Tag>Company</Tag>
      </div>
      <div style={{ fontFamily: sans, fontSize: 30, fontWeight: 400, lineHeight: 1.4, color: ink, marginTop: 32 }}>
        If you would like to meet, comment below or send a direct message.
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ width: "100%", height: 1, background: ink }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ fontFamily: sans, fontSize: 40, fontWeight: 800, color: ink }}>{"[Brand]"}</div>
          <div style={{ fontFamily: sans, fontSize: 34, fontWeight: 800, color: ink }}>10th - 12th August</div>
        </div>
      </div>
    </div>
  );
}
