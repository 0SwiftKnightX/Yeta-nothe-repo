/** Pure functions: test without WebXR, DOM, or Three.js. */
export function clamp(value, low, high) {
  return Math.max(low, Math.min(high, value));
}

/** Returns the hit percentage as a number in [0,100]; zero shots = 0%. */
export function accuracyPercent(hits, shots) {
  if (!Number.isFinite(hits) || !Number.isFinite(shots) || shots <= 0) return 0;
  return clamp((hits / shots) * 100, 0, 100);
}

/** Semi-implicit Euler step. Coordinates and velocities are in metres and seconds. */
export function stepProjectile(position, velocity, dt, gravity = -9.81) {
  if (!Number.isFinite(dt) || dt < 0) throw new RangeError("dt must be nonnegative and finite");
  const nextVelocity = [velocity[0], velocity[1] + gravity * dt, velocity[2]];
  const nextPosition = [
    position[0] + nextVelocity[0] * dt,
    position[1] + nextVelocity[1] * dt,
    position[2] + nextVelocity[2] * dt,
  ];
  return { position: nextPosition, velocity: nextVelocity };
}

/** Segment/sphere intersection catches fast projectiles between rendered frames. */
export function segmentHitsSphere(start, end, center, radius) {
  if (radius < 0) return false;
  const d = end.map((v, i) => v - start[i]);
  const f = center.map((v, i) => v - start[i]);
  const lengthSquared = d.reduce((sum, v) => sum + v * v, 0);
  const t = lengthSquared > 0
    ? clamp(d.reduce((sum, v, i) => sum + v * f[i], 0) / lengthSquared, 0, 1)
    : 0;
  const distanceSquared = d.reduce((sum, v, i) => {
    const difference = start[i] + t * v - center[i];
    return sum + difference * difference;
  }, 0);
  return distanceSquared <= radius * radius;
}

/** Exact for linear motion of both point arrow and sphere center over this step.
 * Curved target/projectile paths remain discretized by the clamped simulation step. */
export function movingSphereHit(start, end, centerStart, centerEnd, radius) {
  return segmentHitsSphere(start.map((v, i) => v - centerStart[i]),
    end.map((v, i) => v - centerEnd[i]), [0, 0, 0], radius);
}
