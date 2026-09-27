import type { CSSProperties, ReactNode } from "react";

/** Center children on both axes. */
export function Center({ children, style }: { children?: ReactNode; style?: CSSProperties }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", ...style }}>{children}</div>
  );
}
