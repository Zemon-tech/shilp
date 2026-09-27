import type { CSSProperties, ReactNode } from "react";

interface BoxProps {
  children?: ReactNode;
  style?: CSSProperties;
  padding?: number;
  background?: string;
  borderRadius?: number;
  border?: string;
  width?: number | string;
  height?: number | string;
}

/** Generic block container. Thin wrapper — prefer plain divs when simpler. */
export function Box({ children, style, padding, background, borderRadius, border, width, height }: BoxProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...(padding !== undefined ? { padding } : {}),
        ...(background ? { background } : {}),
        ...(borderRadius !== undefined ? { borderRadius } : {}),
        ...(border ? { border } : {}),
        ...(width !== undefined ? { width } : {}),
        ...(height !== undefined ? { height } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
