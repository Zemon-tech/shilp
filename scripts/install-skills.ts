#!/usr/bin/env tsx
/**
 * CLI: npm run install-skills [-- --agent opencode|claude|cursor|antigravity] [--target <path>]
 * Copies skills/* (content untouched) into the coding agent's skills directory.
 */
import { cpSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const here = dirname(fileURLToPath(import.meta.url));
const SKILLS_SRC = join(here, "..", "skills");

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

const AGENT_DIRS: Record<string, string[]> = {
  // Claude Code: ~/.claude/skills (+ project .claude/skills); `npx skills add` registry style
  claude: [join(homedir(), ".claude", "skills")],
  // OpenCode: ~/.config/opencode/skills (also supports ~/.config/opencode/skill/)
  opencode: [join(homedir(), ".config", "opencode", "skills")],
  // Cursor: ~/.cursor/skills (project .cursor/skills)
  cursor: [join(homedir(), ".cursor", "skills")],
  // Antigravity: ~/.antigravity/skills (+ legacy ~/.gemini/skills)
  antigravity: [join(homedir(), ".antigravity", "skills")],
};

async function main() {
  const agent = (arg("--agent") ?? "").toLowerCase();
  const target = arg("--target");
  const list = process.argv.includes("--list");

  if (list || process.argv.includes("--help") || process.argv.includes("-h")) {
    console.log(`Usage:
  npm run install-skills -- --agent opencode|claude|cursor|antigravity
  npm run install-skills -- --target /path/to/skills
  npm run install-skills -- --list   (show detected agent paths)

Manual install (always works):
  cp -r skills/* <your-agent-skills-dir>/`);
    if (list) {
      for (const [name, dirs] of Object.entries(AGENT_DIRS))
        console.log(`  ${name}: ${dirs.join(", ")}`);
    }
    return;
  }

  let dests: string[] = [];
  if (target) dests = [resolve(process.cwd(), target)];
  else if (agent && AGENT_DIRS[agent]) dests = AGENT_DIRS[agent];
  else {
    console.error(
      `Specify --agent (${Object.keys(AGENT_DIRS).join("|")}) or --target <path>.\nExample: npm run install-skills -- --agent opencode`,
    );
    process.exit(1);
  }

  if (!existsSync(SKILLS_SRC)) throw new Error(`skills/ directory not found at ${SKILLS_SRC}`);
  const skills = readdirSync(SKILLS_SRC, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
  if (skills.length === 0) throw new Error("no skills found in skills/");

  for (const dest of dests) {
    mkdirSync(dest, { recursive: true });
    for (const skill of skills) {
      const from = join(SKILLS_SRC, skill);
      const to = join(dest, skill);
      cpSync(from, to, { recursive: true });
      console.log(`Installed ${skill} -> ${to}`);
    }
  }
  console.log(`Done. ${skills.length} skill(s) installed to ${dests.join(", ")} (content unmodified).`);
}

main().catch((err) => {
  console.error(`install-skills failed: ${(err as Error).message}`);
  process.exit(1);
});
