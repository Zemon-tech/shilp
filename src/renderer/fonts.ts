import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
/** <repo>/public/fonts — works from src/ and from scripts/. */
export const FONTS_DIR = join(here, "..", "..", "public", "fonts");

// Static WOFFs (Satori supports TTF/OTF/WOFF — NOT WOFF2 or variable
// fonts). Used only as a last-resort auto-download when public/fonts is empty.
const FALLBACK_FONTS: Array<{ file: string; url: string }> = [
  {
    file: "Inter-Regular.woff",
    url: "https://unpkg.com/@fontsource/inter@5.2.5/files/inter-latin-400-normal.woff",
  },
  {
    file: "Inter-Bold.woff",
    url: "https://unpkg.com/@fontsource/inter@5.2.5/files/inter-latin-700-normal.woff",
  },
  {
    file: "Inter-ExtraBold.woff",
    url: "https://unpkg.com/@fontsource/inter@5.2.5/files/inter-latin-800-normal.woff",
  },
  {
    file: "DMSerifDisplay-Regular.woff",
    url: "https://unpkg.com/@fontsource/dm-serif-display@5.2.5/files/dm-serif-display-latin-400-normal.woff",
  },
  {
    file: "IBMPlexMono-Regular.woff",
    url: "https://unpkg.com/@fontsource/ibm-plex-mono@5.2.5/files/ibm-plex-mono-latin-400-normal.woff",
  },
];

export interface LoadedFont {
  name: string;
  data: Buffer;
  weight: 400 | 700 | 800;
  style: "normal";
}

/**
 * Map filename prefixes to Satori font-family names.
 * Convention: <Prefix>-<Weight>.<ext>, e.g. DMSerifDisplay-Regular.woff.
 * Add a line here when vendoring a new family.
 */
const FAMILY_ALIASES: Record<string, string> = {
  Inter: "Inter",
  DMSerifDisplay: "DM Serif Display",
  IBMPlexMono: "IBM Plex Mono",
  InstrumentSerif: "Instrument Serif",
};

function inferName(file: string): string {
  const base = file.replace(/\.(ttf|otf|woff)$/i, "");
  const prefix = base.split("-")[0] || "Inter";
  return FAMILY_ALIASES[prefix] ?? prefix;
}

function inferWeight(file: string): 400 | 700 | 800 {
  const lower = file.toLowerCase();
  if (lower.includes("extra") || lower.includes("black") || lower.includes("800") || lower.includes("900"))
    return 800;
  if (
    lower.includes("bold") ||
    lower.includes("700") ||
    lower.includes("semi") ||
    lower.includes("medium") ||
    lower.includes("600") ||
    lower.includes("500")
  )
    return 700;
  return 400;
}

/**
 * Load every .ttf/.otf/.woff in public/fonts, grouped by family.
 * Satori matches each element's fontFamily against these entries, so a
 * design may mix families (e.g. Inter + DM Serif Display + IBM Plex Mono).
 * `preferredFamily` is only used to warn when a design asks for a family
 * that isn't vendored — all families are always returned.
 */
export async function loadFonts(preferredFamily = "Inter"): Promise<LoadedFont[]> {
  mkdirSync(FONTS_DIR, { recursive: true });
  let files = readdirSync(FONTS_DIR).filter((f) => /\.(ttf|otf|woff)$/i.test(f));

  if (files.length === 0) {
    await ensureFallbackFonts();
    files = readdirSync(FONTS_DIR).filter((f) => /\.(ttf|otf|woff)$/i.test(f));
  }

  if (files.length === 0) {
    throw new Error(
      `No fonts found in ${FONTS_DIR}. Add a .ttf/.otf/.woff file (e.g. Inter) — see skills/satori-social/SKILL.md.`,
    );
  }

  const fonts: LoadedFont[] = files.map((file) => ({
    name: inferName(file),
    data: readFileSync(join(FONTS_DIR, file)),
    weight: inferWeight(file),
    style: "normal" as const,
  }));

  // Satori resolves an UNSPECIFIED fontFamily to the first entry. Keep Inter
  // first so legacy single-family designs keep rendering in Inter; designs
  // that set fontFamily explicitly are unaffected by order.
  fonts.sort((a, b) => {
    if (a.name === "Inter" && b.name !== "Inter") return -1;
    if (b.name === "Inter" && a.name !== "Inter") return 1;
    return a.name.localeCompare(b.name);
  });

  // Satori matches fontWeight against entries; alias each family's first file
  // to any missing weight so fontWeight 400/700/800 never misses.
  const byFamily = new Map<string, LoadedFont[]>();
  for (const f of fonts) {
    if (!byFamily.has(f.name)) byFamily.set(f.name, []);
    byFamily.get(f.name)!.push(f);
  }
  for (const [name, group] of byFamily) {
    const weights = new Set(group.map((f) => f.weight));
    const first = group[0];
    for (const w of [400, 700, 800] as const) {
      if (!weights.has(w)) fonts.push({ name, data: first.data, weight: w, style: "normal" });
    }
  }

  if (!byFamily.has(preferredFamily)) {
    console.warn(
      `Font family "${preferredFamily}" not found in public/fonts ` +
        `(${[...byFamily.keys()].join(", ")}). Add the .woff and a FAMILY_ALIASES entry in src/renderer/fonts.ts.`,
    );
  }
  return fonts;
}

async function ensureFallbackFonts(): Promise<void> {
  for (const { file, url } of FALLBACK_FONTS) {
    const dest = join(FONTS_DIR, file);
    if (existsSync(dest)) continue;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 10_000) throw new Error("download too small, likely an error page");
      writeFileSync(dest, buf);
      console.log(`Downloaded fallback font ${file}`);
    } catch (err) {
      console.warn(
        `Could not download fallback font ${file}: ${(err as Error).message}. ` +
          `Place a .ttf/.otf/.woff manually in public/fonts/.`,
      );
    }
  }
}
