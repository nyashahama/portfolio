import assert from "node:assert/strict";
import test from "node:test";
import { PORTFOLIO, getProjectBySlug } from "../lib/data.ts";

test("contact and public CV use the established current identity", () => {
  assert.equal(PORTFOLIO.email, "nyashahama5@gmail.com");
  assert.equal(PORTFOLIO.website, "https://www.nyashahama.xyz");
});

test("the systems project exposes an inspectable bounded failure story", () => {
  const project = getProjectBySlug("tx-proof");
  assert.ok(project);
  assert.equal(project.live, null);
  assert.match(project.description, /bounded/i);
  assert.match(project.caseStudy.failureCase, /idempotency|ambiguous/i);
  assert.ok(project.caseStudy.evidenceLinks.some((link) => link.href.includes("/configured_run.rs")));
});

test("product maturity remains explicit in public case studies", () => {
  for (const slug of ["clinicpulse", "stratahq"]) {
    const project = getProjectBySlug(slug);
    assert.ok(project);
    assert.match(project.caseStudy.limitations, /demo|seeded|alpha|beta/i);
  }
});
