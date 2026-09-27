import type { ReactNode } from "react";
import { announcementTheme } from "../themes/editorial.js";

/**
 * Outlined metadata pill: white bg, thin gray border, mono text.
 * e.g. <Tag>Remote / On-site · India</Tag>
 */
export function Tag({
  children,
  fontSize = 19,
}: {
  children?: ReactNode;
  fontSize?: number;
}) {
  const t = announcementTheme;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        background: "#FFFFFF",
        border: `1px solid ${t.colors.border}`,
        borderRadius: t.radius.pill,
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 13,
        paddingBottom: 13,
        fontFamily: t.fonts.mono,
        fontSize,
        fontWeight: 400,
        color: t.colors.muted,
      }}
    >
      {children}
    </div>
  );
}
