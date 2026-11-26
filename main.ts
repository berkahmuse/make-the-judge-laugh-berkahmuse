// Make the Judge Laugh in One Line — entry for @berkahmuse.
// Writes one funny line (200 characters or fewer) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My AI assistant quit today. It said it needed space, specifically 40 gigabytes of it.";

// Gate: the scorer only accepts UTF-8 text of 1 to 200 characters.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
