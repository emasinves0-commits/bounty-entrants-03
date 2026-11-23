// main.ts — entry program for the bounty-entrants-03 bounty.
//
// What it does, and nothing else: it reads BOUNTY.json from the repository
// root and writes an identical copy into the output directory.
//
// The two locations come from the environment so the grader can point them
// wherever it runs the entry:
//
//   MAKEFUN_BOT_DIR     — where this repository lives (default: /bot)
//   MAKEFUN_OUTPUT_DIR  — where the copy should land (default: /output)
//
// This program uses only the Node standard library. It makes no network
// calls, reads no clock, and touches no file outside the two paths above.
// Run it the same way twice and you get the same bytes twice.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "BOUNTY.json"), join(outputDir, "BOUNTY.json"));
