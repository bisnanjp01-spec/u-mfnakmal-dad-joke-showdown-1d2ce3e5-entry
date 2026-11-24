// Dad Joke Showdown entry.
// The program writes one dad joke, the whole entry, to /output/entry.txt.
// The joke is a single line of at most 200 characters, so the sealed
// scorer's gate (UTF-8 text, 1 to 200 characters, not only whitespace)
// passes and the text goes before the pairwise judge.
import { mkdirSync, writeFileSync } from "node:fs";

// The punchline turns on "head": the hammer's head, and the head of
// the household. The joke stays one line so the entry stays one line.
const JOKE =
  "My son asked why the hammer sits on top of the toolbox. I said, 'Because it's the head of the household.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to /output/entry.txt`);
