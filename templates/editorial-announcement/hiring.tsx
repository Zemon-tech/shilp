import React from "react";

// Template: editorial hiring announcement (skeleton B). Copy to output/ and edit.
// Content map: { type, announcement, title, tags[], bullets[], meta{}, cta, brand{} }
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
      <div style={{ fontFamily: sans, fontSize: 48, fontWeight: 800, color: ink }}>{"[Brand]"}</div>
      <div
        style={{
          fontFamily: sans,
          fontSize: 96,
          fontWeight: 800,
          lineHeight: 1.0,
          color: ink,
          marginTop: 72,
          textWrap: "balance",
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
        Role title goes here
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 16, marginTop: 32 }}>
        <Tag>Location · Mode</Tag>
        <Tag>Employment type</Tag>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 48 }}>
        {["Responsibility one.", "Responsibility two.", "Responsibility three."].map((b) => (
          <div key={b} style={{ display: "flex", flexDirection: "row", gap: 16 }}>
            <div style={{ fontFamily: sans, fontSize: 26, fontWeight: 700, color: ink }}>•</div>
            <div style={{ fontFamily: sans, fontSize: 26, fontWeight: 400, lineHeight: 1.4, color: ink }}>
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
              careers.example.com
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
            <div style={{ fontFamily: mono, fontSize: 18, color: muted }}>{"// details"}</div>
            <div style={{ fontFamily: sans, fontSize: 30, fontWeight: 700, color: ink }}>
              Read the caption
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
