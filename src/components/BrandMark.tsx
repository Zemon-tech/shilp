import { announcementTheme } from "../themes/editorial.js";

/**
 * Typographic brand mark: [Name]. The brackets are the logo —
 * never replace with a graphic unless the brand ships one.
 */
export function BrandMark({
  name,
  prefix = "[",
  suffix = "]",
  size = 44,
  color,
}: {
  name: string;
  prefix?: string;
  suffix?: string;
  size?: number;
  color?: string;
}) {
  const t = announcementTheme;
  return (
    <div
      style={{
        fontFamily: t.fonts.sans,
        fontSize: size,
        fontWeight: 800,
        color: color ?? t.colors.foreground,
      }}
    >
      {`${prefix}${name}${suffix}`}
    </div>
  );
}
