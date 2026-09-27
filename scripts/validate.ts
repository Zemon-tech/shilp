#!/usr/bin/env tsx
/** CLI: npm run validate <file.tsx> — lightweight static + render checks. */
import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { loadDesignFile } from "../src/renderer/render.js";
import { FONTS_DIR } from "../src/renderer/fonts.js";
import { readdirSync } from "node:fs";

async function main() {
  const file = process.argv[2];
  if (!file || file === "--help" || file === "-h") {
    console.log("Usage: npm run validate <file.tsx>");
    process.exit(file ? 1 : 0);
  }
  const errors: string[] = [];
  const warnings: string[] = [];
  const abs = resolve(process.cwd(), file);

  if (!existsSync(abs)) {
    console.error(`FAIL ${file}: file does not exist`);
    process.exit(1);
  }
  if (statSync(abs).size === 0) errors.push("file is empty");

  try {
    const design = await loadDesignFile(file);
    if (!Number.isFinite(design.width) || design.width <= 0 || design.width > 5000)
      errors.push(`invalid width export: ${design.width}`);
    if (!Number.isFinite(design.height) || design.height <= 0 || design.height > 5000)
      errors.push(`invalid height export: ${design.height}`);
    if (design.kind === "carousel" && design.nodes.length < 2)
      warnings.push("carousel has fewer than 2 slides");
    if (design.kind === "carousel" && design.nodes.length > 12)
      warnings.push("carousel has more than 12 slides (may lose readers)");

    // Missing fonts check
    let fontFiles: string[] = [];
    try {
      fontFiles = readdirSync(FONTS_DIR).filter((f) => /\.(ttf|otf|woff)$/i.test(f));
    } catch {
      fontFiles = [];
    }
    if (fontFiles.length === 0) warnings.push(`no fonts in public/fonts — renderer will try to download Inter`);

    // Trial render: catches Satori layout errors, bad styles, missing images.
    const { renderToSvg } = await import("../src/renderer/render-image.js");
    for (let i = 0; i < design.nodes.length; i++) {
      try {
        const svg = await renderToSvg({
          component: design.nodes[i],
          width: design.width,
          height: design.height,
          fontFamily: design.fontFamily,
        });
        if (svg.length < 1000) warnings.push(`slide ${i + 1}: SVG suspiciously small (${svg.length} bytes)`);
      } catch (err) {
        errors.push(`slide ${i + 1} failed to render: ${(err as Error).message}`);
      }
    }

    // Basic overflow heuristic: absolute-positioned children escaping canvas
    // can't be detected statically — flag risky patterns in source instead.
    const { readFileSync } = await import("node:fs");
    const src = readFileSync(abs, "utf8");
    if (/position\s*:\s*["']?fixed/.test(src)) errors.push("uses position:fixed (unsupported by Satori)");
    if (/display\s*:\s*["']?grid/.test(src)) errors.push("uses CSS grid (unsupported by Satori — use flexbox)");
    if (/<style|dangerouslySetInnerHTML|useState|useEffect/.test(src))
      errors.push("uses unsupported React/browser APIs (<style>, DOM hooks, dangerouslySetInnerHTML)");
  } catch (err) {
    errors.push(`failed to load design: ${(err as Error).message}`);
  }

  for (const w of warnings) console.log(`WARN ${file}: ${w}`);
  if (errors.length > 0) {
    for (const e of errors) console.error(`FAIL ${file}: ${e}`);
    process.exit(1);
  }
  console.log(`OK ${file}: valid (${warnings.length} warning${warnings.length === 1 ? "" : "s"})`);
}

main().catch((err) => {
  console.error(`Validate failed: ${(err as Error).message}`);
  process.exit(1);
});
