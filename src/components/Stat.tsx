import { theme } from "../themes/default.js";

/** Oversized number + supporting explanation + source (statistic-post primitive). */
export function Stat({
  value,
  explanation,
  source,
  accent = theme.colors.accent,
}: {
  value: string;
  explanation: string;
  source?: string;
  accent?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: 180, fontWeight: 800, lineHeight: 1, color: accent }}>{value}</div>
      <div style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.35, color: theme.colors.foreground }}>{explanation}</div>
      {source ? (
        <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: 2, color: theme.colors.muted }}>{source}</div>
      ) : null}
    </div>
  );
}
