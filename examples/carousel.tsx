import React from "react";

/** Storytelling carousel (carousel skill): hook, context, insight, takeaway, CTA. */
export const width = 1080;
export const height = 1350;

function Frame({ num, children }: { num: string; children?: React.ReactNode }) {
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>STUDIO</div>
        <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#A1A1AA" }}>
          {`${num} / 05 · » SWIPE`}
        </div>
      </div>
      {children}
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "row", gap: 10 }}>
        {["01", "02", "03", "04", "05"].map((n) => (
          <div
            key={n}
            style={{
              width: 60,
              height: 6,
              borderRadius: 3,
              background: n <= num ? "#7C3AED" : "#27272A",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <Frame num="01">
      <div style={{ display: "flex", flexDirection: "column", marginTop: 170 }}>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: "#fff" }}>Nobody reads your</div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: "#fff" }}>second slide</div>
      </div>
      <div style={{ fontSize: 30, color: "#A1A1AA", marginTop: 28 }}>Unless the first one earns it. »</div>
    </Frame>
  );
}

function Slide2() {
  return (
    <Frame num="02">
      <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: 2, color: "#7C3AED", marginTop: 130 }}>
        CONTEXT
      </div>
      <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.14, color: "#fff", marginTop: 20 }}>
        82% of viewers never swipe past slide one.
      </div>
      <div style={{ fontSize: 29, lineHeight: 1.45, color: "#A1A1AA", marginTop: 26 }}>
        The cover isn't a title page. It's a promise the rest must keep.
      </div>
    </Frame>
  );
}

function Slide3() {
  return (
    <Frame num="03">
      <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: 2, color: "#7C3AED", marginTop: 130 }}>
        THE RULE
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, color: "#fff" }}>One slide,</div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, color: "#fff" }}>one idea.</div>
      </div>
      <div style={{ fontSize: 29, lineHeight: 1.45, color: "#A1A1AA", marginTop: 26 }}>
        If a slide needs "and also…" — split it or cut the "also".
      </div>
    </Frame>
  );
}

function Slide4() {
  return (
    <Frame num="04">
      <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: 2, color: "#7C3AED", marginTop: 130 }}>
        TAKEAWAY
      </div>
      <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.14, color: "#fff", marginTop: 20 }}>
        Momentum beats completeness.
      </div>
      <div style={{ fontSize: 29, lineHeight: 1.45, color: "#A1A1AA", marginTop: 26 }}>
        End each slide mid-thought. Curiosity is the only swipe mechanic.
      </div>
    </Frame>
  );
}

function Slide5() {
  return (
    <div
      style={{
        width: 1080,
        height: 1350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#7C3AED",
        padding: 72,
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
      >
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, color: "#fff", textAlign: "center" }}>
          Save this for your
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, color: "#fff", textAlign: "center" }}>
          next carousel
        </div>
      </div>
      <div style={{ fontSize: 27, fontWeight: 600, color: "rgba(255,255,255,0.85)", marginTop: 26 }}>
        @studio · Follow for more
      </div>
    </div>
  );
}

export const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];
