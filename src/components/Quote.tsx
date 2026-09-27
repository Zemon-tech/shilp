import { theme } from "../themes/default.js";

/** Pull-quote block: large quote + attribution. */
export function Quote({
  quote,
  person,
  role,
  accent = theme.colors.accent,
}: {
  quote: string;
  person: string;
  role?: string;
  accent?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, color: accent }}>“</div>
      <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.25, color: theme.colors.foreground }}>{quote}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 30, fontWeight: 700, color: theme.colors.foreground }}>— {person}</div>
        {role ? <div style={{ fontSize: 24, fontWeight: 500, color: theme.colors.muted }}>{role}</div> : null}
      </div>
    </div>
  );
}
