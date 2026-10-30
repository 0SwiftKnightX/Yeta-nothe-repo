import test from "node:test";
import assert from "node:assert/strict";
import { accuracyPercent, stepProjectile, segmentHitsSphere } from "./physics.js";

test("accuracy: empty score, hits, misses and invalid shot count", () => {
  assert.equal(accuracyPercent(0, 0), 0);
  assert.equal(accuracyPercent(1, 2), 50);
  assert.equal(accuracyPercent(3, 3), 100);
  assert.equal(accuracyPercent(0, 4), 0);
  assert.equal(accuracyPercent(2, -1), 0);
});
test("projectile: gravity changes vertical velocity and position", () => {
  const result = stepProjectile([0, 2, 0], [0, 0, -10], 0.1, -10);
  assert.deepEqual(result.velocity, [0, -1, -10]);
  assert.ok(Math.abs(result.position[1] - 1.9) < 1e-9);
  assert.equal(result.position[2], -1);
  assert.throws(() => stepProjectile([0, 0, 0], [0, 0, 0], -1), RangeError);
});
test("swept segment: direct hit, near miss and stationary impact", () => {
  assert.equal(segmentHitsSphere([0, 0, 0], [0, 0, -10], [0, 0, -5], 0.5), true);
  assert.equal(segmentHitsSphere([2, 0, 0], [2, 0, -10], [0, 0, -5], 0.5), false);
  assert.equal(segmentHitsSphere([0, 0, 0], [0, 0, 0], [0, 0, 0], 0.5), true);
});
