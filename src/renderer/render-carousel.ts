import type { ReactElement } from "react";
import { renderToPng, renderToSvg } from "./render-image.js";

export interface CarouselSlide {
  node: ReactElement;
  width?: number;
  height?: number;
}

export interface RenderCarouselOptions {
  slides: CarouselSlide[];
  width: number;
  height: number;
  fontFamily?: string;
  format?: "png" | "svg";
}

/** Render each slide independently. Returns one buffer per slide. */
export async function renderCarousel(opts: RenderCarouselOptions): Promise<Buffer[]> {
  const out: Buffer[] = [];
  for (const slide of opts.slides) {
    const w = slide.width ?? opts.width;
    const h = slide.height ?? opts.height;
    if (opts.format === "svg") {
      out.push(Buffer.from(await renderToSvg({ component: slide.node, width: w, height: h, fontFamily: opts.fontFamily })));
    } else {
      out.push(await renderToPng({ component: slide.node, width: w, height: h, fontFamily: opts.fontFamily }));
    }
  }
  return out;
}
