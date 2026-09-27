#!/usr/bin/env tsx
/**
 * CLI: npm run render <file.tsx> [--output ...] [--format png|svg] [--type post|carousel]
 *      [--width N] [--height N] [--zip]
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join, resolve } from "node:path";
import { renderDesignFile } from "../src/renderer/render.js";

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}
function flag(name: string): boolean {
  return process.argv.includes(name);
}

async function main() {
  const input = process.argv[2];
  if (!input || input.startsWith("--") || input === "--help" || input === "-h") {
    console.log(`Usage:
  npm run render <file.tsx> [--output <path>] [--format png|svg] [--type post|carousel]
                 [--width N] [--height N] [--zip]

Examples:
  npm run render examples/news-post.tsx
  npm run render examples/news-post.tsx --output output/news.png
  npm run render examples/educational-carousel.tsx --output output/carousel
  npm run render post.tsx --format svg`);
    process.exit(input && !input.startsWith("--") ? 1 : 0);
  }

  const format = (arg("--format") ?? "png").toLowerCase();
  if (format !== "png" && format !== "svg") throw new Error(`--format must be png or svg, got "${format}"`);
  const typeRaw = arg("--type");
  const type = typeRaw === "post" || typeRaw === "carousel" ? typeRaw : undefined;
  const width = arg("--width") ? Number(arg("--width")) : undefined;
  const height = arg("--height") ? Number(arg("--height")) : undefined;

  const { kind, buffers } = await renderDesignFile({ file: input, format: format as "png" | "svg", type, width, height });
  const ext = format === "svg" ? "svg" : "png";

  let output = arg("--output") ?? arg("-o");
  if (!output) {
    if (kind === "carousel") {
      const base = basename(input, extname(input));
      output = join("output", base);
    } else {
      output = join("output", `${basename(input, extname(input))}.${ext}`);
    }
  }

  if (kind === "carousel") {
    const dir = output.endsWith(`.${ext}`) ? dirname(output) : output;
    mkdirSync(dir, { recursive: true });
    buffers.forEach((buf, i) => {
      const name = `${String(i + 1).padStart(2, "0")}.${ext}`;
      writeFileSync(join(dir, name), buf);
      console.log(`Wrote ${join(dir, name)}`);
    });
    if (flag("--zip")) {
      const { default: archiver } = await import("archiver");
      const { createWriteStream } = await import("node:fs");
      const zipPath = `${dir}.zip`;
      await new Promise<void>((res, rej) => {
        const out = createWriteStream(zipPath);
        const archive = archiver("zip", { zlib: { level: 9 } });
        out.on("close", () => res());
        archive.on("error", rej);
        archive.pipe(out);
        archive.directory(dir, false);
        void archive.finalize();
      });
      console.log(`Wrote ${zipPath}`);
    }
  } else {
    const dest = output.endsWith(`.${ext}`) ? output : `${output}.${ext}`;
    mkdirSync(dirname(resolve(dest)), { recursive: true });
    writeFileSync(dest, buffers[0]);
    console.log(`Wrote ${dest}`);
  }
}

main().catch((err) => {
  console.error(`Render failed: ${(err as Error).message}`);
  process.exit(1);
});
