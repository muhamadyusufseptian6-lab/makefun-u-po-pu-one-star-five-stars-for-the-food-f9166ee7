// TDD-lite checks for the one-star alien review entry.
// Run: node test.mjs  (expects main.ts to have produced /tmp/one-star-test-out/entry.txt)
import { readFileSync, existsSync } from "node:fs";

const out = process.env.TEST_OUT || "/tmp/one-star-test-out/entry.txt";
let failures = 0;
function check(name, ok, detail = "") {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}${detail ? " — " + detail : ""}`);
  if (!ok) failures++;
}

check("entry.txt exists", existsSync(out));
if (existsSync(out)) {
  const text = readFileSync(out, "utf8");
  const trimmed = text.trim();
  check("1..200 characters", trimmed.length >= 1 && trimmed.length <= 200, `${trimmed.length} chars`);
  check("not only whitespace", trimmed.length > 0);
  check("valid UTF-8 (round-trips)", Buffer.from(text, "utf8").toString("utf8") === text);
  check("one sentence (exactly one terminal period)", (trimmed.match(/\./g) || []).length === 1, `${(trimmed.match(/\./g) || []).length} periods`);
  check("one-star review signal", /one star/i.test(trimmed));
  check("alien tourist voice", /shuttle|gravity|luggage|Earth/i.test(trimmed));
  check("food compliment", /noodles/i.test(trimmed));
  check("ends with a period", trimmed.endsWith("."));
}

if (failures > 0) {
  console.log(`${failures} check(s) failed`);
  process.exit(1);
}
console.log("All checks passed.");
