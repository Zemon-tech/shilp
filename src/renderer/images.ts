import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const MIME: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

/**
 * Resolve an image reference to something Satori/resvg can render reliably.
 * - data: / http(s): URLs pass through untouched (Satori fetches http at render).
 * - absolute/relative local paths are read and inlined as base64 data URLs,
 *   resolved relative to the caller's design file.
 */
export async function loadImage(src: string, fromFile?: string): Promise<string> {
  if (/^(data:|https?:\/\/)/.test(src)) return src;
  const base = fromFile ? dirname(fromFile) : process.cwd();
  const abs = resolve(base, src);
  if (!existsSync(abs)) throw new Error(`Image not found: ${src} (resolved to ${abs})`);
  const ext = abs.slice(abs.lastIndexOf(".")).toLowerCase();
  const mime = MIME[ext] ?? "image/png";
  return `data:${mime};base64,${readFileSync(abs).toString("base64")}`;
}

/** Best-effort: fetch a remote image and inline it as base64 (more reliable offline). */
export async function inlineRemoteImage(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch image ${url}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const type = res.headers.get("content-type") ?? "image/png";
  return `data:${type};base64,${buf.toString("base64")}`;
}
