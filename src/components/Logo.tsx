/** Wordmark-style logo fallback (text). Swap for an <img> when a logo file exists. */
export function Logo({ name, color = "#FFFFFF", size = 26 }: { name: string; color?: string; size?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, background: color }} />
      <div style={{ fontSize: size, fontWeight: 800, letterSpacing: 1, color }}>{name}</div>
    </div>
  );
}
