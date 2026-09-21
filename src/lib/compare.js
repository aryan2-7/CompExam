// ============ LENIENT OUTPUT COMPARISON ============
// String-only comparison: no numeric/epsilon tolerance ("2.54" != "2.540").
// Forgives whitespace noise that is "technically correct" but fails strict ===:
//  - CRLF vs LF line endings
//  - trailing spaces / tabs per line
//  - multiple spaces / tabs between tokens (collapsed to one space)
//  - leading/trailing blank lines and extra blank lines between content

export function normalizeOutput(s) {
  if (s == null) return "";
  return String(s)
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .filter((line) => line.length > 0)
    .join("\n")
    .trim();
}

export function outputsMatch(actual, expected) {
  return normalizeOutput(actual) === normalizeOutput(expected);
}

// ============ LENIENT STDIN NORMALIZATION ============
// `cin >> x` already treats spaces, tabs, and newlines identically, but
// student code (and our tests) shouldn't break on trivial input variations:
//  - CRLF vs LF
//  - commas used as separators ("1,2,3" -> "1 2 3")
//  - leading/trailing blank lines, missing trailing newline
// This keeps token-based programs (`cin >>`, `getline` per-token) working
// no matter how the example input was laid out.

export function normalizeStdin(s) {
  if (s == null) return "";
  let out = String(s).replace(/\r\n?/g, "\n");
  out = out.replace(/,/g, " ");
  out = out.trim();
  if (out.length === 0) return "";
  return out + "\n";
}
