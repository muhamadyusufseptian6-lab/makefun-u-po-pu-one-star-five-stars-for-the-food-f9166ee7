// One Star, Five Stars for the Food — make.fun entry.
// Writes a single-sentence, one-star review of Earth from an alien tourist
// who still compliments the food, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib-only, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "One star: Earth's sun has no off switch, locals pay rent just to sleep, and gravity stole my luggage twice — but the 2am noodles were so good I missed my shuttle on purpose and stayed for breakfast.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const inputDir = process.env.MAKEFUN_INPUT_DIR || "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
void inputDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
