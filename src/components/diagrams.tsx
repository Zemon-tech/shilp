import type { ReactNode } from "react";
import { newsCarouselTheme as t } from "../themes/editorial.js";

/**
 * Gray editorial figure — the visual canvas of a news-carousel slide.
 * Spans exactly the text column (the slide layout insets it like all text),
 * with a uniform minimum height so every slide's figure holds the same
 * presence. Generous internal padding; diagrams never touch edges.
 */
export function Figure({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        minHeight: 400,
        background: t.colors.card,
        borderRadius: t.radius.card,
        padding: 40,
      }}
    >
      {children}
    </div>
  );
}

/** Internal figure heading. */
export function FigureTitle({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: t.fonts.sans,
        fontSize: t.typography.figureTitle.fontSize,
        fontWeight: t.typography.figureTitle.fontWeight,
        color: t.colors.foreground,
      }}
    >
      {children}
    </div>
  );
}

/** White labeled node with thin border. */
export function FNode({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFFFFF",
        border: `1px solid ${t.colors.cardBorder}`,
        borderRadius: t.radius.node,
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 14,
        paddingBottom: 14,
        fontFamily: t.fonts.sans,
        fontSize: 21,
        fontWeight: 700,
        color: t.colors.foreground,
      }}
    >
      {children}
    </div>
  );
}

/** Inverted (black) node for the focal element. */
export function FNodeDark({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: t.colors.foreground,
        borderRadius: t.radius.node,
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 14,
        paddingBottom: 14,
        fontFamily: t.fonts.sans,
        fontSize: 21,
        fontWeight: 700,
        color: "#FFFFFF",
      }}
    >
      {children}
    </div>
  );
}

/** Horizontal connector line. */
export function HLine({ width = 44 }: { width?: number }) {
  return <div style={{ width, height: 2, background: t.colors.foreground }} />;
}

/** Vertical connector line. */
export function VLine({ height = 28 }: { height?: number }) {
  return <div style={{ width: 2, height, background: t.colors.foreground }} />;
}

/** Chevron arrow (border-based; arrow glyphs are tofu in latin subsets). */
export function ChevronR({ size = 14 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderTop: `3px solid ${t.colors.foreground}`,
        borderRight: `3px solid ${t.colors.foreground}`,
        transform: "rotate(45deg)",
      }}
    />
  );
}

/** Down chevron for vertical flows. */
export function ChevronD({ size = 14 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRight: `3px solid ${t.colors.foreground}`,
        borderBottom: `3px solid ${t.colors.foreground}`,
        transform: "rotate(45deg)",
      }}
    />
  );
}

/** Small labeled dot, e.g. person/user markers. */
export function FDot({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          border: `2px solid ${t.colors.foreground}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: t.fonts.sans,
          fontSize: 20,
          fontWeight: 800,
          color: t.colors.foreground,
        }}
      >
        {label}
      </div>
    </div>
  );
}
