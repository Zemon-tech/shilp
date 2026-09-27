import { createElement, type ReactElement } from "react";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { renderToPng, renderToSvg } from "./render-image.js";
import { renderCarousel } from "./render-carousel.js";

export interface LoadedDesign {
  kind: "post" | "carousel";
  width: number;
  height: number;
  nodes: ReactElement[];
  fontFamily: string;
}

function toNode(value: unknown): ReactElement {
  if (value && typeof value === "object" && "type" in (value as object)) {
    return value as ReactElement;
  }
  if (typeof value === "function") return createElement(value as () => ReactElement);
  throw new Error("Slide entries must be JSX elements or components.");
}

/** Load a user/agent-authored .tsx file. Supports the input contracts from the skills. */
export async function loadDesignFile(file: string, typeHint?: "post" | "carousel"): Promise<LoadedDesign> {
  const abs = resolve(process.cwd(), file);
  const mod = await import(pathToFileURL(abs).href);

  const width = Number(mod.width ?? 1080);
  const height = Number(mod.height ?? 1350);
  const fontFamily: string = mod.fontFamily ?? mod.font ?? "Inter";

  // Carousel contract A: `export const slides = [Slide1, <Slide2/>, ...]`
  // Carousel contract B: `export default [<Slide1/>, ...]`
  const rawSlides: unknown | undefined = mod.slides ?? (Array.isArray(mod.default) ? mod.default : undefined);

  if (rawSlides !== undefined || typeHint === "carousel") {
    if (!Array.isArray(rawSlides)) {
      throw new Error(
        `Carousel file ${file} must export \`slides\` (array) or default-export an array. Got: ${typeof rawSlides}`,
      );
    }
    if (rawSlides.length === 0) throw new Error(`Carousel file ${file} exports an empty slides array.`);
    return { kind: "carousel", width, height, nodes: (rawSlides as unknown[]).map(toNode), fontFamily };
  }

  if (!mod.default) throw new Error(`Design file ${file} has no default export. Export a component as default.`);
  return { kind: "post", width, height, nodes: [toNode(mod.default)], fontFamily };
}

export interface RenderFileOptions {
  file: string;
  format?: "png" | "svg";
  type?: "post" | "carousel";
  width?: number;
  height?: number;
}

/** Render one design file to buffers: single-item for posts, N for carousels. */
export async function renderDesignFile(opts: RenderFileOptions): Promise<{ kind: string; buffers: Buffer[] }> {
  const design = await loadDesignFile(opts.file, opts.type);
  const width = opts.width ?? design.width;
  const height = opts.height ?? design.height;

  if (design.kind === "carousel") {
    const buffers = await renderCarousel({
      slides: design.nodes.map((node) => ({ node })),
      width,
      height,
      fontFamily: design.fontFamily,
      format: opts.format ?? "png",
    });
    return { kind: "carousel", buffers };
  }

  const component = design.nodes[0];
  const buffer =
    (opts.format ?? "png") === "svg"
      ? Buffer.from(await renderToSvg({ component, width, height, fontFamily: design.fontFamily }))
      : await renderToPng({ component, width, height, fontFamily: design.fontFamily });
  return { kind: "post", buffers: [buffer] };
}

/** Convenience API from the spec: renderImage({ component, width, height, output }). */
export async function renderImage(args: {
  component: ReactElement;
  width: number;
  height: number;
  output: string;
  fontFamily?: string;
}): Promise<string> {
  const { writeFileSync } = await import("node:fs");
  const { dirname } = await import("node:path");
  const { mkdirSync } = await import("node:fs");
  mkdirSync(dirname(resolve(args.output)), { recursive: true });
  const png = await renderToPng({
    component: args.component,
    width: args.width,
    height: args.height,
    fontFamily: args.fontFamily,
  });
  writeFileSync(args.output, png);
  return args.output;
}
