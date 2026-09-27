import type { ReactNode } from "react";
import { theme } from "../themes/default.js";

/** Small pill label, e.g. source / category / kicker. */
export function Badge({
  children,
  background = theme.colors.accent,
  color = "#FFFFFF",
}: {
  children?: ReactNode;
  background?: string;
  color?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background,
        color,
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 2,
        textTransform: "uppercase",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: theme.radius.pill,
      }}
    >
      {children}
    </div>
  );
}
