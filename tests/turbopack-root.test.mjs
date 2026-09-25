import assert from "node:assert/strict";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

test("Turbopack root stays at the checkout when Next changes its working directory", async () => {
  const original = process.cwd();
  const expected = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
  try {
    process.chdir(fileURLToPath(new URL("../app", import.meta.url)));
    const { default: config } = await import("../next.config.ts");
    assert.equal(config.turbopack.root, expected);
  } finally {
    process.chdir(original);
  }
});
