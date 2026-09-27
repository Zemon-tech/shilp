import React from "react";

// Template: quote. Copy to output/ and edit.
export const width = 1080;
export const height = 1350;

export default function Post() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#101014", padding: 84 }}>
      <div style={{ fontSize: 110, fontWeight: 800, lineHeight: 1, color: "#7C3AED", marginTop: 100 }}>"</div>
      <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.28, color: "#fff", marginTop: -24 }}>
        Your quote goes here.
      </div>
      <div style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginTop: 44 }}>— Person Name</div>
      <div style={{ fontSize: 25, color: "#A1A1AA", marginTop: 6 }}>Role, Company</div>
      <div style={{ marginTop: "auto", fontSize: 26, fontWeight: 800, color: "#fff" }}>BRAND</div>
    </div>
  );
}
