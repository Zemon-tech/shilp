import { theme } from "../themes/default.js";

/** Hairline rule. */
export function Divider({ color = theme.colors.border, width = "100%" }: { color?: string; width?: number | string }) {
  return <div style={{ width, height: 2, background: color }} />;
}
