import assert from "node:assert/strict";
import test from "node:test";
import { getProjectBySlug, PORTFOLIO } from "../lib/data.ts";

test("every selected project has a distinct shareable route", () => {
  const slugs = PORTFOLIO.projects.map((project) => project.slug);
  assert.equal(new Set(slugs).size, 4);
  assert.ok(slugs.every((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)));
  assert.equal(getProjectBySlug("stratahq")?.name, "StrataHQ");
  assert.equal(getProjectBySlug("tx-proof")?.name, "TxProof");
  assert.equal(getProjectBySlug("missing"), undefined);
});

test("source-only backend project does not gain a fictional live demo", () => {
  assert.equal(getProjectBySlug("ecommerce-search-backend")?.live, null);
});
