import React from "react";

/** Teaching carousel (educational-carousel skill): hook, problem, framework, takeaway, CTA. */
export const width = 1080;
export const height = 1350;

const ITEMS: Array<[string, string]> = [
  ["CURIOSITY", "open a gap, not the answer"],
  ["CLARITY", "one reader, one promise"],
  ["CONTRAST", "old way vs better way"],
];

function Frame({ num, total, children }: { num: string; total: string; children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: 1080,
        height: 1350,
        display: "flex",
        flexDirection: "column",
        background: "#0E1410",
        padding: 72,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>GROWTHLAB</div>
        <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: 2, color: "#8A938B" }}>
          {`${num} / ${total} · SWIPE »`}
        </div>
      </div>
      {children}
    </div>
  );
}

function Slide1() {
  return (
    <Frame num="01" total="05">
      <div style={{ display: "flex", flexDirection: "row", marginTop: 110 }}>
        <div
          style={{
            background: "#22C55E",
            color: "#06210F",
            fontSize: 21,
            fontWeight: 800,
            letterSpacing: 2,
            paddingLeft: 22,
            paddingRight: 22,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 999,
          }}
        >
          WRITING GUIDE
        </div>
      </div>
      <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.06, color: "#fff", marginTop: 28 }}>
        Hooks that earn the swipe
      </div>
      <div style={{ fontSize: 30, color: "#A7B3A8", marginTop: 24 }}>A 5-slide mini-lesson »</div>
    </Frame>
  );
}

function Slide2() {
  return (
    <Frame num="02" total="05">
      <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2, color: "#F87171", marginTop: 100 }}>
        THE PROBLEM
      </div>
      <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.14, color: "#fff", marginTop: 20 }}>
        Clever openers get skipped. Clear ones get saved.
      </div>
    </Frame>
  );
}

function Slide3() {
  return (
    <Frame num="03" total="05">
      <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2, color: "#22C55E", marginTop: 100 }}>
        THE 3C TEST
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 26 }}>
        {ITEMS.map(([t, d]) => (
          <div
            key={t}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#16211A",
              borderRadius: 20,
              padding: 32,
              gap: 8,
            }}
          >
            <div style={{ fontSize: 34, fontWeight: 800, color: "#fff" }}>{t}</div>
            <div style={{ fontSize: 28, color: "#A7B3A8" }}>{d}</div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Slide4() {
  return (
    <Frame num="04" total="05">
      <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2, color: "#22C55E", marginTop: 100 }}>
        EXAMPLE
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          background: "#16211A",
          borderRadius: 20,
          padding: 36,
          marginTop: 26,
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 2, color: "#F87171" }}>
          × BEFORE
        </div>
        <div style={{ fontSize: 32, color: "#A7B3A8" }}>Some thoughts on writing better…</div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 2, color: "#22C55E", marginTop: 12 }}>
          » AFTER
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: "#fff" }}>
          3 hook tests I run before posting
        </div>
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
        background: "#22C55E",
        padding: 72,
      }}
    >
      <div
        style={{
          fontSize: 70,
          fontWeight: 800,
          lineHeight: 1.1,
          color: "#06210F",
          textAlign: "center",
        }}
      >
        Save this 3C test for your next post
      </div>
      <div style={{ fontSize: 27, fontWeight: 600, color: "#06210F", marginTop: 26 }}>
        @growthlab · New lessons weekly
      </div>
    </div>
  );
}

export const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];
