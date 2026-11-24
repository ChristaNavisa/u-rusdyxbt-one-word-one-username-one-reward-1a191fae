// One Word, One Username, One Reward — entry program.
//
// Writes the entrant's own make.fun username, one word and nothing else,
// to /output/entry.txt. The entry is the username itself: `christanavisa`
// (13 characters, no spaces, no padding, no trailing newline).
//
// Deterministic: every run writes exactly the same 13 bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const USERNAME = "christanavisa";
const OUT = "/output/entry.txt";

function main(): void {
  if (!/^[A-Za-z0-9_]+$/.test(USERNAME)) {
    throw new Error("username must be a single word");
  }
  if (USERNAME.length < 1 || USERNAME.length > 30) {
    throw new Error("username must be 1-30 characters");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, USERNAME, "utf8");
  // Read back and verify: the file must hold exactly the username, byte for byte.
  if (readFileSync(OUT, "utf8") !== USERNAME) {
    throw new Error("entry.txt does not match the username");
  }
}

main();
