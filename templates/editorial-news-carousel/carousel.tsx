import React from "react";
import { CarouselFooter, Figure, FNode } from "../../src/index.js";

// Template: editorial news carousel. Copy to output/ and edit.
// Story arc: hook → why now → proof → benefits → future.
// Normalize your brief into the content contract first — see
// skills/editorial-news-carousel/SKILL.md — then fill each slide.
export const width = 1080;
export const height = 1350;

const ink = "#050505";
const faint = "#9A9A9A";
const sans = "Inter";
const mono = "IBM Plex Mono";
const brand = "Brand";
const total = 5;

function Slide({ num, title, children }: { num: number; title: string; children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: 1080,
        height: 1350,
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        paddingLeft: 78,
        paddingRight: 78,
        paddingTop: 64,
        paddingBottom: 48,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14, paddingRight: 14 }}>
        <div style={{ fontFamily: mono, fontSize: 18, letterSpacing: 5, color: faint }}>CATEGORY</div>
        <div
          style={{
            fontFamily: sans,
            fontSize: 70,
            fontWeight: 800,
            lineHeight: 1.0,
            color: ink,
            marginTop: 36,
            textWrap: "balance",
          }}
        >
          {title}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14, paddingRight: 14, marginTop: 28 }}>
        <Figure>
          <FNode>TODO: diagram for this slide</FNode>
        </Figure>
      </div>
      <div
        style={{
          paddingLeft: 14,
          paddingRight: 14,
          display: "flex",
          flexWrap: "wrap",
          columnGap: 7,
          fontSize: 24,
          lineHeight: 1.45,
          color: ink,
          marginTop: 36,
        }}
      >
        {"TODO: evidence paragraph with "}
        <span style={{ fontWeight: 700 }}>{"one bold anchor"}</span>
        {" per paragraph."}
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
        <CarouselFooter brand={brand} current={num} total={total} />
      </div>
    </div>
  );
}

// Roles: 1 hook (claim) · 2 why now (mechanism) · 3 proof (number/case) ·
// 4 benefits (human consequences) · 5 future (open loop, never "Conclusion").
function Slide1() {
  return <Slide num={1} title="Claim slide: X is challenging Y" />;
}
function Slide2() {
  return <Slide num={2} title="Why it works now" />;
}
function Slide3() {
  return <Slide num={3} title="Number plus implication" />;
}
function Slide4() {
  return <Slide num={4} title="Why it matters" />;
}
function Slide5() {
  return <Slide num={5} title="Where this goes next" />;
}

export const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];
