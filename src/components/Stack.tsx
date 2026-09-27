import type { CSSProperties, ReactNode } from "react";

interface StackProps {
  children?: ReactNode;
  gap?: number;
  style?: CSSProperties;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  padding?: number;
}

/** Vertical flex stack. */
export function Stack({ children, gap = 16, style, align, justify, padding }: StackProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
        ...(align ? { alignItems: align } : {}),
        ...(justify ? { justifyContent: justify } : {}),
        ...(padding !== undefined ? { padding } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
