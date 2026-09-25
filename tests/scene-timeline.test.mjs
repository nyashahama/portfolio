import assert from "node:assert/strict";
import test from "node:test";
import { scrollFraction, sceneFrame } from "../lib/scene-timeline.mjs";

test("scroll progress stays bounded during overscroll and incomplete layouts", () => {
  assert.equal(scrollFraction(-100, 2000), 0);
  assert.equal(scrollFraction(500, 2000), 0.25);
  assert.equal(scrollFraction(4000, 2000), 1);
  assert.equal(scrollFraction(100, 0), 0);
});

test("camera travels through the sculpture as it opens", () => {
  const arrival = sceneFrame(0);
  const inside = sceneFrame(0.35);
  const exhibit = sceneFrame(0.72);

  assert.equal(arrival.unfold, 0);
  assert.ok(inside.unfold > 0 && inside.unfold < 1);
  assert.equal(exhibit.unfold, 1);
  assert.notDeepEqual(arrival.camera, inside.camera);
  assert.notDeepEqual(inside.camera, exhibit.camera);
});

test("mobile and reduced-motion framing stay deterministic", () => {
  const desktop = sceneFrame(0.25);
  const mobile = sceneFrame(0.25, { narrow: true });
  assert.notDeepEqual(desktop.camera, mobile.camera);
  assert.deepEqual(
    sceneFrame(0.75, { reduced: true, narrow: true }),
    sceneFrame(0, { reduced: true, narrow: true }),
  );
});
