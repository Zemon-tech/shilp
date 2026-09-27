import type { CSSProperties, ReactNode } from "react";
import { theme } from "../themes/default.js";

type Variant = "display" | "headline" | "title" | "body" | "caption" | "label";

interface TextProps {
  children?: ReactNode;
  variant?: Variant;
  color?: string;
  align?: CSSProperties["textAlign"];
  style?: CSSProperties;
}

/** Theme-aware text. Always maps to Satori-safe inline styles. */
export function Text({ children, variant = "body", color = theme.colors.foreground, align, style }: TextProps) {
  const t = theme.typography[variant];
  return (
    <div
      style={{
        fontSize: t.fontSize,
        fontWeight: t.fontWeight,
        lineHeight: t.lineHeight,
        color,
        ...(align ? { textAlign: align } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
