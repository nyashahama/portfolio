const STOPS = [
  { at: 0, position: [0.2, 1.1, 10.5], target: [0.9, 0.4, 0], unfold: 0 },
  { at: 0.2, position: [2.1, 1.2, 7.8], target: [0.8, 0.4, 0], unfold: 0.7 },
  { at: 0.42, position: [-2.8, 1.9, 6.3], target: [0.4, 0.1, 0], unfold: 1 },
  { at: 0.7, position: [2.9, 2.2, 8.2], target: [0.2, 0.2, 0], unfold: 1 },
  { at: 0.84, position: [2.1, 2.5, 9.2], target: [0.2, 0.2, 0], unfold: 1 },
  { at: 1, position: [0, 3.2, 12], target: [0, 0.2, 0], unfold: 0.35 },
];

const clamp01 = (value) => Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
const interpolate = (start, end, amount) => start + (end - start) * amount;

export function scrollFraction(scrollTop, maxScroll) {
  if (!Number.isFinite(maxScroll) || maxScroll <= 0) return 0;
  return clamp01(scrollTop / maxScroll);
}

export function sceneFrame(progress, { narrow = false, reduced = false } = {}) {
  const at = reduced ? 0 : clamp01(progress);
  const nextIndex = Math.max(1, STOPS.findIndex((stop) => stop.at >= at));
  const left = STOPS[nextIndex - 1];
  const right = STOPS[nextIndex];
  const span = right.at - left.at;
  const amount = span ? clamp01((at - left.at) / span) : 0;
  const position = left.position.map((value, index) =>
    interpolate(value, right.position[index], amount),
  );
  const target = left.target.map((value, index) =>
    interpolate(value, right.target[index], amount),
  );

  if (narrow) {
    position[0] *= 0.45;
    position[2] += 4.6;
    target[0] *= 0.45;
  }

  return {
    camera: { position, target },
    unfold: interpolate(left.unfold, right.unfold, amount),
  };
}
