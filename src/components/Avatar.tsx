/** Circular avatar. Pass an inlined data-URL src for reliability. */
export function Avatar({ src, size = 120 }: { src: string; size?: number }) {
  return (
    <img
      src={src}
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: size / 2, objectFit: "cover" }}
    />
  );
}
