import { announcementTheme } from "../themes/editorial.js";

/**
 * Publication masthead: centered name, thin rules, centered nav.
 * Article-layout header only — hiring/personal layouts use BrandMark instead.
 */
export function Masthead({
  publication,
  nav = ["Home", "About"],
}: {
  publication: string;
  nav?: string[];
}) {
  const t = announcementTheme;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: t.fonts.sans,
          fontSize: 40,
          fontWeight: 800,
          color: t.colors.foreground,
          textAlign: "center",
        }}
      >
        {publication}
      </div>
      <div style={{ width: "100%", height: 1, background: t.colors.border, marginTop: 28 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {nav.map((item) => (
          <div
            key={item}
            style={{ fontFamily: t.fonts.sans, fontSize: 18, fontWeight: 500, color: t.colors.foreground }}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ width: "100%", height: 1, background: t.colors.border }} />
    </div>
  );
}
