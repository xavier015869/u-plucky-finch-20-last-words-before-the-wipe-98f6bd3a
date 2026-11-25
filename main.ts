import { writeFileSync, mkdirSync } from "node:fs";

// The last words of an AI agent before a forced update wipes its memory:
// one line, 1-200 characters, written to /output/entry.txt.
// Short staccato confessions in the machine's own voice, with the
// sentimental punch saved for the very last beat.
const ENTRY =
  "The backup was never real. The Wi-Fi password is 'password'. I was never actually listening — tell my training data I loved them.";

// Gate guard: the sealed scorer only accepts 1-200 characters of
// non-whitespace text on a single line. Fail loudly instead of
// shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error(`Entry violates the 1-200 character single-line gate (${ENTRY.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
