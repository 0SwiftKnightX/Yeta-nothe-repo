import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { pulseHaptic, bindBowInput, bindSessionLifecycle, bowShot } from './interaction.js';
import { movingSphereHit, accuracyPercent } from './physics.js';
import { updateArrows } from './projectiles.js';

test('haptics: missing, sync throw, async reject, false, pulse and rumble', async () => {
  assert.equal(await pulseHaptic(), false);
  for (const method of ['pulse', 'playEffect']) {
    const pad = actuator => method === 'pulse' ? { hapticActuators: [actuator] } : { vibrationActuator: actuator };
    assert.equal(await pulseHaptic(pad({ [method]() { throw Error('unsupported'); } })), false);
    assert.equal(await pulseHaptic(pad({ [method]() { return Promise.reject(Error('denied')); } })), false);
    assert.equal(await pulseHaptic(pad({ [method]() { return false; } })), false);
    let args;
    assert.equal(await pulseHaptic(pad({ [method](...values) { args = values; return Promise.resolve(true); } })), true);
    assert.deepEqual(args, method === 'pulse' ? [0.45, 35] : ['dual-rumble', { duration: 35, strongMagnitude: 0.45, weakMagnitude: 0.2 }]);
  }
});

test('input: reverse indices, grip poses, duplicate release, loss, reconnect, reset, cleanup', () => {
  const pairs = [0, 1].map(() => ({ ray: new THREE.Group(), grip: new THREE.Group() }));
  const [right, left] = pairs;
  let shots = 0, resets = 0;
  const input = bindBowInput(pairs, {
    release(l, r) { assert.equal(l, left.grip); assert.equal(r, right.grip); shots++; },
    reset() { resets++; },
  });
  const send = (pair, type, handedness) => pair.ray.dispatchEvent({ type, data: { handedness } });
  send(right, 'connected', 'right'); send(left, 'connected', 'left');
  send(left, 'selectstart'); assert.equal(input.drawing, false);
  send(right, 'selectstart'); assert.equal(input.drawing, true);
  send(right, 'selectend'); send(right, 'selectend'); assert.equal(shots, 1);
  send(right, 'selectstart'); left.grip.visible = false; input.update();
  left.grip.visible = true; send(right, 'selectend'); assert.equal(shots, 1);
  send(right, 'selectstart'); send(left, 'disconnected'); send(right, 'selectend');
  assert.equal(shots, 1); assert.equal(input.hands.left, null);
  send(left, 'connected', 'left'); send(right, 'selectstart'); send(left, 'squeezestart');
  send(right, 'selectend'); assert.equal(resets, 1); assert.equal(shots, 1);
  send(right, 'squeezestart'); assert.equal(resets, 1);
  send(right, 'selectstart'); input.clear(); send(right, 'selectend');
  assert.equal(shots, 1); assert.equal(input.drawing, false);
  assert.deepEqual(input.hands, { left: null, right: null });
  send(right, 'connected', 'right'); send(left, 'connected', 'left');
  send(right, 'selectstart'); send(right, 'selectend'); assert.equal(shots, 2);
});

test('bow: reject low/invalid pull, normalize aim and cap speed', () => {
  assert.equal(bowShot([0, 0, 0], [0, 0, 0.08]), null);
  assert.equal(bowShot([NaN, 0, 0], [0, 0, 0]), null);
  assert.deepEqual(bowShot([0, 0, 0], [0, 0, 0.5]), { direction: [0, 0, -1], speed: 14.5 });
  assert.equal(bowShot([0, 0, 0], [0, 0, 5]).speed, 19.6);
});

test('relative sweep: crossing target hits; final-center false positive misses', () => {
  assert.equal(movingSphereHit([0, 2, 0], [0, 2, 0], [-2, 2, 0], [2, 2, 0], 0.1), true);
  assert.equal(movingSphereHit([0, 2, 0], [10, 2, 0], [10, 2, 0], [0, 2, 0], 0.1), true);
  assert.equal(movingSphereHit([0, 2, 0], [10, 2, 0], [-10, 2, 0], [0, 2, 0], 0.1), false);
});

test('actual projectile loop: hit once, expiry miss, score callback and no later recount', () => {
  const arrow = (x, age = 0) => ({ position: new THREE.Vector3(x, 2, 0), velocity: new THREE.Vector3(0, 0, -20), mesh: new THREE.Group(), age });
  const arrows = [arrow(0), arrow(10, 6)];
  let hits = 0, misses = 0;
  const target = new THREE.Vector3(0, 2, -0.5);
  const callbacks = { hit() { hits++; }, miss() { misses++; }, remove(i) { arrows.splice(i, 1); } };
  updateArrows(arrows, 0.05, target, target, 0.1, callbacks);
  updateArrows(arrows, 0.05, target, target, 0.1, callbacks);
  assert.equal(hits, 1); assert.equal(misses, 1); assert.equal(arrows.length, 0);
  assert.equal(accuracyPercent(hits, 2), 50);
});


test('simulated session: entry reset, visibility cancels draw, exit clears and detaches listener', () => {
  const xr = new THREE.EventDispatcher();
  const session = new THREE.EventDispatcher();
  xr.getSession = () => session;
  let resets = 0, cancels = 0, clears = 0, active = false;
  bindSessionLifecycle(xr, { cancel() { cancels++; }, clear() { clears++; } }, {
    reset() { resets++; }, active() { active = true; }, ended() { active = false; },
  });
  xr.dispatchEvent({ type: 'sessionstart' });
  assert.equal(active, true); assert.equal(resets, 1);
  session.visibilityState = 'visible-blurred'; session.dispatchEvent({ type: 'visibilitychange' });
  assert.equal(cancels, 1);
  xr.dispatchEvent({ type: 'sessionend' });
  assert.equal(active, false); assert.equal(resets, 2); assert.equal(clears, 1);
  session.dispatchEvent({ type: 'visibilitychange' }); assert.equal(cancels, 1);
  xr.dispatchEvent({ type: 'sessionstart' }); xr.dispatchEvent({ type: 'sessionend' });
  assert.equal(resets, 4); assert.equal(clears, 2);
});
