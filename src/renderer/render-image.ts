import type { ReactElement } from "react";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { loadFonts } from "./fonts.js";

export interface RenderImageOptions {
  component: ReactElement;
  width: number;
  height: number;
  fontFamily?: string;
  debug?: boolean;
}

/** React JSX -> Satori SVG string. */
export async function renderToSvg(opts: RenderImageOptions): Promise<string> {
  const fonts = await loadFonts(opts.fontFamily ?? "Inter");
  return satori(opts.component, {
    width: opts.width,
    height: opts.height,
    fonts,
    debug: opts.debug ?? false,
  });
}

/** React JSX -> PNG buffer (Satori SVG piped through resvg). */
export async function renderToPng(opts: RenderImageOptions): Promise<Buffer> {
  const svg = await renderToSvg(opts);
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: opts.width },
    font: { loadSystemFonts: false },
  });
  return Buffer.from(resvg.render().asPng());
}
