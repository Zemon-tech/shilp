import type { CSSProperties, ReactNode } from "react";

interface RowProps {
  children?: ReactNode;
  gap?: number;
  style?: CSSProperties;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
}

/** Horizontal flex row. */
export function Row({ children, gap = 16, style, align = "center", justify }: RowProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap,
        alignItems: align,
        ...(justify ? { justifyContent: justify } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
