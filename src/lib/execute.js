// ============ TIO EXECUTION ============
// Runs C++ via tio.run (free, no key). Request is a raw-deflate string list;
// response is gzip-compressed and split by a 16-byte separator token.

const TIO_URL = "https://tio.run/cgi-bin/run/api/";

export async function executeCode(sourceCode, stdin) {
  const enc = new TextEncoder();
  const codeBytes = enc.encode(sourceCode);
  const inputBytes = enc.encode(stdin);

  const head = enc.encode(`Vlang\x001\x00cpp-gcc\x00F.code.tio\x00${codeBytes.length}\x00`);
  const mid = enc.encode(`\x00F.input.tio\x00${inputBytes.length}\x00`);
  const tail = enc.encode("\x00R");

  const payload = new Uint8Array(
    head.length + codeBytes.length + mid.length + inputBytes.length + tail.length
  );
  let off = 0;
  payload.set(head, off);
  off += head.length;
  payload.set(codeBytes, off);
  off += codeBytes.length;
  payload.set(mid, off);
  off += mid.length;
  payload.set(inputBytes, off);
  off += inputBytes.length;
  payload.set(tail, off);

  const compressed = new Uint8Array(
    await new Response(
      new Blob([payload]).stream().pipeThrough(new CompressionStream("deflate-raw"))
    ).arrayBuffer()
  );

  const res = await fetch(TIO_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: compressed,
  });
  if (!res.ok) throw new Error(`server responded ${res.status}`);

  const bytes = new Uint8Array(await res.arrayBuffer());
  const sep = bytes.slice(0, 16);
  const decode = (a) => new TextDecoder().decode(a);

  const first = findBytes(bytes, sep, 0);
  if (first < 0) throw new Error("unexpected response from execution API");
  const second = findBytes(bytes, sep, first + 16);
  const third = findBytes(bytes, sep, second + 16);

  const stdout = decode(bytes.slice(first + 16, second < 0 ? bytes.length : second)).trim();
  const tailStats = decode(bytes.slice(second + 16, third < 0 ? bytes.length : third));

  const exitMatch = tailStats.match(/Exit code: (-?\d+)/);
  const exitCode = exitMatch ? Number(exitMatch[1]) : 0;

  const statsIdx = tailStats.indexOf("\nReal time:");
  const preStats = (statsIdx >= 0 ? tailStats.slice(0, statsIdx) : tailStats).trim();
  const isCompileError = preStats.includes(".code.tio.cpp");

  return {
    compile: isCompileError ? { code: exitCode || 1, output: preStats } : { code: 0, output: "" },
    run: { stdout, stderr: isCompileError ? "" : preStats },
  };
}

function findBytes(haystack, needle, from) {
  for (let i = from; i + needle.length <= haystack.length; i++) {
    let ok = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        ok = false;
        break;
      }
    }
    if (ok) return i;
  }
  return -1;
}
