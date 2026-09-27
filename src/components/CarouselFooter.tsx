import { newsCarouselTheme as t } from "../themes/editorial.js";

/**
 * Locked slide footer: thin rule, bracket brand left, pagination right.
 * Identical on every slide — never restyle per slide.
 */
export function CarouselFooter({
  brand,
  current,
  total,
}: {
  brand: string;
  current: number;
  total: number;
}) {
  const num = `${String(current).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ width: "100%", height: 1, background: t.colors.border }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: t.fonts.sans,
            fontSize: t.typography.footerBrand.fontSize,
            fontWeight: t.typography.footerBrand.fontWeight,
          }}
        >
          <div style={{ color: t.colors.faint }}>{"["}</div>
          <div style={{ color: t.colors.foreground }}>{brand}</div>
          <div style={{ color: t.colors.faint }}>{"]"}</div>
        </div>
        <div
          style={{
            fontFamily: t.fonts.mono,
            fontSize: t.typography.pagination.fontSize,
            color: t.colors.faint,
          }}
        >
          {num}
        </div>
      </div>
    </div>
  );
}
