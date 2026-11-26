// One Star, Written in Sap — make.fun entry
// Writes one one-star review, as if a houseplant wrote it about its human,
// to /output/entry.txt (gate: 1–279 UTF-8 characters, not only whitespace).
// Run: node main.ts   (Node 22.18+ runs this TypeScript directly)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. The joke is built on the plant's own life: watered with
// leftover coffee, forced to listen to crypto-loss venting rebranded as
// "quality time" — then the turn: the fern refuses the therapist job.
const ENTRY =
  "One star. He waters me with leftover coffee, vents about his crypto " +
  "losses, and calls it quality time. I am not his therapist. I am a " +
  "fern — and I am dying of secondhand stress.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The house gate: /output/entry.txt must be 1–279 characters of UTF-8
// text, not only whitespace. Fail loudly here instead of shipping
// an entry the scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 279 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry is ${ENTRY.length} characters; the gate allows 1–279`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
