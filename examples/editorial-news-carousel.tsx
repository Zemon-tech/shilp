import React from "react";
import {
  CarouselFooter,
  ChevronD,
  ChevronR,
  Figure,
  FigureTitle,
  FNode,
  FNodeDark,
  HLine,
  VLine,
} from "../src/index.js";

/**
 * Editorial news carousel (editorial-news-carousel skill):
 * hook → why now → proof → benefits → future.
 */
export const width = 1080;
export const height = 1350;

const ink = "#050505";
const faint = "#9A9A9A";
const sans = "Inter";
const mono = "IBM Plex Mono";
const brand = "360Labs";

function Slide({
  num,
  eyebrow,
  title,
  children,
}: {
  num: number;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
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
        <div style={{ fontFamily: mono, fontSize: 18, letterSpacing: 5, color: faint }}>{eyebrow}</div>
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
      {children}
      <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
        <CarouselFooter brand={brand} current={num} total={5} />
      </div>
    </div>
  );
}

function Body({ children }: { children?: React.ReactNode }) {
  return (
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
      {children}
    </div>
  );
}

function Slide1() {
  return (
    <Slide num={1} eyebrow="AI NEWS" title="On-device AI is ready to challenge cloud dominance">
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14, paddingRight: 14, marginTop: 28 }}>
        <Figure>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 14 }}>
            <FNode>User</FNode>
            <HLine />
            <FNodeDark>Device</FNodeDark>
            <ChevronR />
            <FNode>Cloud API</FNode>
          </div>
          <div style={{ fontFamily: mono, fontSize: 18, color: faint }}>inference moves to the edge</div>
        </Figure>
      </div>
      <Body>
        {"Flagship phones now run capable models with"}
        <span style={{ fontWeight: 700 }}>{"up to 90% lower latency"}</span>
        {"than cloud calls — no round trip, no outage risk. The old"}
        <span style={{ fontWeight: 700 }}>{"bigger is better"}</span>
        {"assumption is breaking."}
      </Body>
    </Slide>
  );
}

function Slide2() {
  return (
    <Slide num={2} eyebrow="AI NEWS" title="Why it works now">
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14, paddingRight: 14, marginTop: 28 }}>
        <Figure>
          <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                background: "#fff",
                border: "1px solid #E2E2E2",
                borderRadius: 12,
                padding: 28,
              }}
            >
              <FigureTitle>CLOUD BASED AI</FigureTitle>
              <div style={{ fontSize: 21, color: "#666" }}>Server GPUs · always online</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                background: ink,
                borderRadius: 12,
                padding: 28,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>ON-DEVICE AI</div>
              <div style={{ fontSize: 21, color: "#BBB" }}>Phone chips · offline ready</div>
            </div>
          </div>
        </Figure>
      </div>
      <Body>
        {"Two forces collided: phone chips gained dedicated AI accelerators, and demand shifted toward"}
        <span style={{ fontWeight: 700 }}>{"privacy, low latency, and offline use."}</span>
        {"Technology changed and users changed — a new category became viable."}
      </Body>
    </Slide>
  );
}

function Slide3() {
  return (
    <Slide num={3} eyebrow="AI NEWS" title="460M parameters, no internet needed">
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14, paddingRight: 14, marginTop: 28 }}>
        <Figure>
          <FNode>Agent request</FNode>
          <ChevronD />
          <FNode>Tokens</FNode>
          <ChevronD />
          <FNodeDark>460M model</FNodeDark>
          <ChevronD />
          <FNode>On-device answer</FNode>
        </Figure>
      </div>
      <Body>
        {"A 460M-parameter vision model runs entirely on a phone, answering visual questions with"}
        <span style={{ fontWeight: 700 }}>{"no internet connection."}</span>
        {"Proof that small, focused models can do real work locally."}
      </Body>
    </Slide>
  );
}

const benefits: Array<[string, string]> = [
  ["Cost", "no per-query cloud bill"],
  ["Reliability", "works offline, every time"],
  ["Privacy", "data never leaves device"],
  ["Personalization", "adapts to its owner"],
];

function Slide4() {
  return (
    <Slide num={4} eyebrow="AI NEWS" title="Four advantages of local AI">
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14, paddingRight: 14, marginTop: 28 }}>
        <Figure>
          <div style={{ display: "flex", flexDirection: "row", gap: 18 }}>
            {benefits.slice(0, 2).map(([name, desc]) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  background: "#fff",
                  border: "1px solid #E2E2E2",
                  borderRadius: 12,
                  padding: 24,
                  width: 400,
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 800, color: ink }}>{name}</div>
                <div style={{ fontSize: 21, color: "#666" }}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 18 }}>
            {benefits.slice(2).map(([name, desc]) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  background: "#fff",
                  border: "1px solid #E2E2E2",
                  borderRadius: 12,
                  padding: 24,
                  width: 400,
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 800, color: ink }}>{name}</div>
                <div style={{ fontSize: 21, color: "#666" }}>{desc}</div>
              </div>
            ))}
          </div>
        </Figure>
      </div>
      <Body>
        {"Local AI translates into outcomes people feel:"}
        <span style={{ fontWeight: 700 }}>{"lower cost, offline reliability,"}</span>
        {"private data, and systems that adapt to their owner."}
      </Body>
    </Slide>
  );
}

function Slide5() {
  return (
    <Slide num={5} eyebrow="AI NEWS" title="Where this goes next">
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14, paddingRight: 14, marginTop: 28 }}>
        <Figure>
          <FigureTitle>Vision language models</FigureTitle>
          <div style={{ fontSize: 22, color: "#666" }}>{"see, reason, and act — on device"}</div>
          <VLine height={24} />
          <div style={{ display: "flex", flexDirection: "row", gap: 14 }}>
            <FNode>Glasses</FNode>
            <FNode>Cars</FNode>
            <FNodeDark>Phones</FNodeDark>
          </div>
        </Figure>
      </div>
      <Body>
        {"Multimodal models are shrinking onto everyday hardware. The question is no longer"}
        <span style={{ fontWeight: 700 }}>{"whether AI leaves the cloud,"}</span>
        {"but how fast every device becomes intelligent."}
      </Body>
    </Slide>
  );
}

export const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];
