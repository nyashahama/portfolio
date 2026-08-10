import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const data = read("lib/data.ts");
const page = read("app/page.tsx");
const hero = read("components/sections/HeroSection.tsx");
const skills = read("components/sections/SkillsSection.tsx");
const contact = read("components/sections/ContactSection.tsx");
const navbar = read("components/Navbar.tsx");
const metadata = read("app/layout.tsx");
const readme = read("README.md");
const useInView = read("lib/useInView.ts");
const globalStyles = read("app/globals.css");
const favicon = read("app/icon.svg");

test("leads with the finalized full-stack positioning", () => {
  assert.match(
    data,
    /Full-Stack Software Engineer \| React, Next\.js, TypeScript & Go \| Product & Platform Engineering/,
  );
  assert.match(hero, /PORTFOLIO\.role/);
  assert.doesNotMatch(
    hero,
    /Backend & Platform Engineer|Go \/ Rust Builder|Typewriter/,
  );
  assert.match(metadata, /Full-Stack Software Engineer/);
});

test("orders the evidence like the CV and removes placeholder notes", () => {
  const experience = page.indexOf("<ExperienceSection");
  const openSource = page.indexOf("<OpenSourceSection");
  const projects = page.indexOf("<ProjectsSection");
  const education = page.indexOf("<EducationSection");

  assert.ok(experience >= 0, "Experience section is rendered");
  assert.ok(experience < openSource, "Experience precedes open source");
  assert.ok(openSource < projects, "Open source precedes projects");
  assert.ok(projects < education, "Projects precede education");
  assert.doesNotMatch(page, /BlogSection/);
});

test("keeps only the three evidence-backed CV projects", () => {
  const projects = data.slice(
    data.indexOf("projects:"),
    data.indexOf("skills:"),
  );

  for (const name of [
    "ClinicPulse",
    "StrataHQ",
    "E-Commerce Search Backend",
  ]) {
    assert.match(projects, new RegExp(`name: "${name}"`));
  }

  for (const removed of [
    "Healthcare Access Connector",
    "guard-rail",
    "Burnout Predictor",
    "Wedding Planning System",
  ]) {
    assert.doesNotMatch(projects, new RegExp(removed));
  }

  assert.equal((projects.match(/\n\s+name: /g) ?? []).length, 3);
});

test("uses the CV skill taxonomy without invented proficiency scores", () => {
  assert.match(
    data,
    /TypeScript, Go, Java, SQL, JavaScript, Rust, C#, C\+\+/,
  );
  for (const category of [
    "Languages",
    "Frontend & Product",
    "Backend & Data",
    "Platform & Quality",
  ]) {
    assert.match(data, new RegExp(`name: "${category}"`));
  }
  assert.doesNotMatch(data, /level: \d+/);
  assert.doesNotMatch(skills, /SkillBar|%/);
});

test("publishes the finalized CV artifact", () => {
  const pdf = readFileSync(
    new URL("../public/nyasha_hama_cv.pdf", import.meta.url),
  );
  const digest = createHash("sha256").update(pdf).digest("hex");

  assert.equal(
    digest,
    "02e66679cc53939aa2b9fbb0d2c0d87d32e6fd51080d3cf3692cc028b36224af",
  );
  assert.match(data, /resume: "\/nyasha_hama_cv\.pdf"/);
});

test("removes unsupported promises and documents the real site", () => {
  assert.doesNotMatch(
    contact,
    /respond within 24 hours|get back to you within 24 hours/i,
  );
  assert.match(readme, /Full-Stack Software Engineer/);
  assert.doesNotMatch(readme, /bootstrapped with.*create-next-app/i);
});

test("keeps below-fold content visible before hydration", () => {
  assert.match(useInView, /useState\(true\)/);
});

test("does not override Tailwind spacing utilities from the global reset", () => {
  const reset = globalStyles.match(
    /\*,\s*\*::before,\s*\*::after\s*\{(?<body>[\s\S]*?)\}/,
  );
  assert.ok(reset?.groups?.body, "global box-sizing reset exists");
  assert.doesNotMatch(reset.groups.body, /margin\s*:/);
  assert.doesNotMatch(reset.groups.body, /padding\s*:/);
});

test("does not publish the retired X profile", () => {
  assert.doesNotMatch(data, /x\.com\//);
  assert.doesNotMatch(contact, /Twitter \/ X/);
});

test("keeps the closed mobile navigation out of the keyboard focus order", () => {
  assert.match(navbar, /aria-controls="mobile-navigation"/);
  assert.match(navbar, /aria-expanded=\{menuOpen\}/);
  assert.match(navbar, /id="mobile-navigation"/);
  assert.match(navbar, /inert=\{!menuOpen\}/);
});

test("uses a compact, accessible NH monogram for the favicon", () => {
  assert.match(favicon, /<title>Nyasha Hama — NH monogram<\/title>/);
  assert.match(favicon, /data-mark="nh"/);
  assert.match(favicon, /stroke="#f4fbff"/);
  assert.match(favicon, /stroke="#00f5ff"/);
  assert.match(favicon, /stroke="#ff00aa"/);
  assert.doesNotMatch(favicon, /<text\b/);
});
