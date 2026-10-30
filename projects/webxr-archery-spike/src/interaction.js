import { clamp } from './physics.js';

// Both synchronous browser exceptions and asynchronous failures are optional feedback.
export async function pulseHaptic(gamepad) {
  try {
    const actuator = gamepad?.hapticActuators?.[0] ?? gamepad?.vibrationActuator;
    if (typeof actuator?.pulse === 'function') return (await actuator.pulse(0.45, 35)) !== false;
    if (typeof actuator?.playEffect === 'function') {
      return (await actuator.playEffect('dual-rumble', {
        duration: 35, strongMagnitude: 0.45, weakMagnitude: 0.2,
      })) !== false;
    }
  } catch { /* Visible hit feedback remains authoritative. */ }
  return false;
}

export function bowShot(bow, draw) {
  const direction = bow.map((v, i) => v - draw[i]);
  const distance = Math.hypot(...direction);
  if (!Number.isFinite(distance) || distance < 0.09) return null;
  return { direction: direction.map(v => v / distance), speed: 6 + clamp(distance, 0.09, 0.8) * 17 };
}

// Ray groups deliver events; grip groups supply held-object poses. No index/hand assumption.
export function bindBowInput(pairs, { release, reset, changed = () => {} }) {
  const hands = { left: null, right: null };
  let drawing = false;
  const valid = () => ['left', 'right'].every(hand => hands[hand]?.grip.visible);
  const cancel = () => { drawing = false; };
  const clear = () => { cancel(); hands.left = null; hands.right = null; changed(); };
  for (const pair of pairs) {
    pair.ray.addEventListener('connected', event => {
      cancel();
      for (const hand of ['left', 'right']) if (hands[hand] === pair) hands[hand] = null;
      const hand = event.data?.handedness;
      if (hand === 'left' || hand === 'right') {
        pair.source = event.data;
        hands[hand] = pair;
      }
      changed();
    });
    pair.ray.addEventListener('disconnected', () => {
      cancel();
      pair.source = null;
      for (const hand of ['left', 'right']) if (hands[hand] === pair) hands[hand] = null;
      changed();
    });
    pair.ray.addEventListener('selectstart', () => {
      if (hands.right === pair) drawing = valid();
    });
    pair.ray.addEventListener('selectend', () => {
      if (hands.right !== pair || !drawing) return;
      cancel();
      if (valid()) release(hands.left.grip, hands.right.grip);
    });
    pair.ray.addEventListener('squeezestart', () => {
      if (hands.left !== pair || !pair.grip.visible) return;
      cancel();
      reset();
    });
  }
  return { hands, cancel, clear, get drawing() { return drawing; },
    update() { if (!valid()) cancel(); } };
}

export function bindSessionLifecycle(xr, input, { reset, active, ended }) {
  let session;
  const visibilityChanged = () => { if (session?.visibilityState !== 'visible') input.cancel(); };
  xr.addEventListener('sessionstart', () => {
    session = xr.getSession();
    session?.addEventListener('visibilitychange', visibilityChanged);
    reset();
    active();
  });
  xr.addEventListener('sessionend', () => {
    session?.removeEventListener('visibilitychange', visibilityChanged);
    session = null;
    reset();
    input.clear();
    ended();
  });
}
