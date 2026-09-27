import type { CSSProperties } from "react";

/**
 * Fixed-size image with explicit dimensions (Satori requirement).
 * Prefer local/base64 src — see src/renderer/images.ts loadImage().
 */
export function Image({
  src,
  width,
  height,
  borderRadius = 0,
  objectFit = "cover",
  style,
}: {
  src: string;
  width: number;
  height: number;
  borderRadius?: number;
  objectFit?: "cover" | "contain";
  style?: CSSProperties;
}) {
  return (
    <img src={src} width={width} height={height} style={{ width, height, borderRadius, objectFit, ...style }} />
  );
}
