import * as THREE from "three";
import { stepProjectile, movingSphereHit } from "./physics.js";

export function updateArrows(arrows, dt, previousTarget, targetPosition, targetRadius, { hit, remove, miss }) {
  for (let i = arrows.length - 1; i >= 0; i -= 1) {
    const arrow = arrows[i];
    const previous = arrow.position.clone();
    const result = stepProjectile(arrow.position.toArray(), arrow.velocity.toArray(), dt, -6.5);
    arrow.position.fromArray(result.position);
    arrow.velocity.fromArray(result.velocity);
    arrow.age += dt;
    arrow.mesh.position.copy(arrow.position);
    arrow.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), arrow.velocity.clone().normalize());
    if (movingSphereHit(previous.toArray(), arrow.position.toArray(), previousTarget.toArray(), targetPosition.toArray(), targetRadius)) {
      remove(i);
      hit(); // No double counting even if a later frame overlaps.
    } else if (arrow.position.y < 0 || arrow.age > 6 || arrow.position.length() > 40) {
      remove(i);
      miss();
    }
  }
}
