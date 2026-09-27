import React from "react";

// Template: carousel. Copy to output/ and edit. Add/remove slides freely.
export const width = 1080;
export const height = 1350;

function Frame({ num, total, children }: any) {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", background: "#0A0A0A", padding: 72 }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>BRAND</div>
        <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>{`${num} / ${total} · »`}</div>
      </div>
      {children}
    </div>
  );
}

function Slide1() {
  return (
    <Frame num="01" total="03">
      <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.06, color: "#fff", marginTop: 180 }}>Hook slide</div>
    </Frame>
  );
}

function Slide2() {
  return (
    <Frame num="02" total="03">
      <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, color: "#fff", marginTop: 160 }}>Value slide</div>
    </Frame>
  );
}

function Slide3() {
  return (
    <div style={{ width: 1080, height: 1350, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#7C3AED", padding: 72 }}>
      <div style={{ fontSize: 68, fontWeight: 800, color: "#fff", textAlign: "center" }}>CTA slide</div>
    </div>
  );
}

export const slides = [Slide1, Slide2, Slide3];
