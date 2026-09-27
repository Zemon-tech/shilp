import React from "react";

/** Editorial hiring announcement (editorial-announcement skill, skeleton B). */
export const width = 1080;
export const height = 1350;

const ink = "#050505";
const muted = "#666666";
const border = "#DCDCDC";
const sans = "Inter";
const mono = "IBM Plex Mono";

function Tag({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        alignSelf: "flex-start",
        background: "#fff",
        border: `1px solid ${border}`,
        borderRadius: 999,
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 13,
        paddingBottom: 13,
        fontFamily: mono,
        fontSize: 19,
        color: muted,
      }}
    >
      {children}
    </div>
  );
}

const bullets = [
  "At Northwind, you will own content end to end; from strategy, concepts, and scripting to filming, editing, and distribution.",
  "Develop content strategy, formats, campaigns, and schedules.",
  "Track content performance and improve content quality.",
  "Script and conceptualise content across short-form and long-form formats.",
  "Handle cinematography, camera, lighting, and sound.",
  "Build founder-led, product, behind-the-scenes, and brand content.",
];

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
      <div style={{ fontFamily: sans, fontSize: 48, fontWeight: 800, color: ink }}>{"[Northwind]"}</div>
      <div
        style={{
          fontFamily: sans,
          fontSize: 100,
          fontWeight: 800,
          lineHeight: 1.0,
          color: ink,
          marginTop: 64,
        }}
      >
        {"We're hiring"}
      </div>
      <div
        style={{
          fontFamily: sans,
          fontSize: 54,
          fontWeight: 700,
          lineHeight: 1.12,
          color: ink,
          marginTop: 28,
          textWrap: "balance",
        }}
      >
        Head of Marketing and Content
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 16, marginTop: 32 }}>
        <Tag>Remote / On-site · India</Tag>
        <Tag>Full-time / Contract</Tag>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 44 }}>
        {bullets.map((b) => (
          <div key={b} style={{ display: "flex", flexDirection: "row", gap: 16 }}>
            <div style={{ fontFamily: sans, fontSize: 25, fontWeight: 700, color: ink }}>•</div>
            <div
              style={{ fontFamily: sans, fontSize: 25, fontWeight: 400, lineHeight: 1.4, color: ink }}
            >
              {b}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ width: "100%", height: 1, background: border }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontFamily: mono, fontSize: 18, color: muted }}>{"// apply here at"}</div>
            <div style={{ fontFamily: sans, fontSize: 30, fontWeight: 700, color: ink }}>
              careers.northwind.ai
            </div>
            <div style={{ fontFamily: sans, fontSize: 26, fontWeight: 700, color: ink }}>
              Email: careers@northwind.ai
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
            <div style={{ fontFamily: mono, fontSize: 18, color: muted }}>{"// full job description"}</div>
            <div style={{ fontFamily: sans, fontSize: 30, fontWeight: 700, color: ink }}>
              Read the caption
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
