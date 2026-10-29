import * as THREE from "three";
import { VRButton } from "three/addons/webxr/VRButton.js";
import { accuracyPercent, clamp } from "./physics.js";

import { updateArrows } from "./projectiles.js";
import { bindBowInput, bindSessionLifecycle, bowShot, pulseHaptic } from "./interaction.js";

/**
 * Experimental browser WebXR vertical slice.
 * Desktop click is a debug fallback, NOT proof of Quest controller behavior.
 */
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111e2c);
const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.05, 80);
camera.position.set(0, 1.65, 1.3);
camera.lookAt(0, 1.55, -4.5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);
document.body.appendChild(VRButton.createButton(renderer, { optionalFeatures: ["local-floor", "bounded-floor"] }));

scene.add(new THREE.HemisphereLight(0xdceaff, 0x263328, 2.2));
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ color: 0x1b3c39, roughness: 1 })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const grid = new THREE.GridHelper(20, 20, 0x536970, 0x34504c);
grid.position.y = 0.004;
scene.add(grid);

const targetRadius = 0.42;
const target = new THREE.Mesh(
  new THREE.SphereGeometry(targetRadius, 24, 16),
  new THREE.MeshStandardMaterial({ color: 0xff9f42, emissive: 0x331507 })
);
scene.add(target);
const targetRing = new THREE.Mesh(
  new THREE.TorusGeometry(targetRadius + 0.09, 0.025, 8, 40),
  new THREE.MeshBasicMaterial({ color: 0xffdca0 })
);
scene.add(targetRing);

const dom = {
  shots: document.getElementById("shots"),
  hits: document.getElementById("hits"),
  accuracy: document.getElementById("accuracy"),
  status: document.getElementById("status"),
  xrStatus: document.getElementById("xrStatus"),
};
let shots = 0;
let hits = 0;

const boardCanvas = document.createElement("canvas");
boardCanvas.width = 768;
boardCanvas.height = 240;
const boardContext = boardCanvas.getContext("2d");
const boardTexture = new THREE.CanvasTexture(boardCanvas);
const board = new THREE.Mesh(
  new THREE.PlaneGeometry(2.65, 0.82),
  new THREE.MeshBasicMaterial({ map: boardTexture, transparent: true, side: THREE.DoubleSide })
);
board.position.set(0, 2.6, -4.55);
scene.add(board);

let statusMessage = "Ready";
function setStatus(message) {
  statusMessage = message;
  dom.status.textContent = message;
  redrawBoard();
}
function redrawBoard() {
  boardContext.clearRect(0, 0, 768, 240);
  boardContext.fillStyle = "rgba(9, 22, 33, 0.94)";
  boardContext.fillRect(0, 0, 768, 240);
  boardContext.fillStyle = "#ffffff";
  boardContext.font = "bold 51px system-ui";
  boardContext.fillText("Hits " + hits + " / Shots " + shots, 24, 68);
  boardContext.font = "37px system-ui";
  boardContext.fillStyle = "#b9e7fd";
  boardContext.fillText("Accuracy " + accuracyPercent(hits, shots).toFixed(0) + "%", 24, 125);
  boardContext.font = "28px system-ui";
  boardContext.fillStyle = "#f8dc99";
  boardContext.fillText(statusMessage.slice(0, 45), 24, 166);
  boardContext.fillText("VR: left squeeze resets score and arrows", 24, 214);
  boardTexture.needsUpdate = true;
}
function updateScore() {
  dom.shots.textContent = String(shots);
  dom.hits.textContent = String(hits);
  dom.accuracy.textContent = accuracyPercent(hits, shots).toFixed(0) + "%";
  redrawBoard();
}
updateScore();
function resetScore() {
  input.cancel();
  drawLine.visible = false;
  for (let i = arrows.length - 1; i >= 0; i -= 1) disposeArrow(i);
  shots = 0;
  hits = 0;
  updateScore();
  setStatus("Score reset");
}
document.getElementById("reset").addEventListener("click", resetScore);

// Three.js controller index does not guarantee handedness: read connected input source.
const controllers = [renderer.xr.getController(0), renderer.xr.getController(1)];
const bowCurve = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -0.35, 0),
    new THREE.Vector3(-0.16, 0, 0),
    new THREE.Vector3(0, 0.35, 0),
  ]),
  new THREE.LineBasicMaterial({ color: 0xc99050 })
);
const pairs = controllers.map((ray, index) => {
  const grip = renderer.xr.getControllerGrip(index);
  grip.add(new THREE.Mesh(
    new THREE.SphereGeometry(0.035, 10, 8),
    new THREE.MeshBasicMaterial({ color: 0x91dfff })
  ));
  scene.add(ray, grip);
  return { ray, grip, source: null };
});
const input = bindBowInput(pairs, {
  release: shootTrackedBow,
  reset: resetScore,
  changed() {
    bowCurve.removeFromParent();
    if (input.hands.left) input.hands.left.grip.add(bowCurve);
    setStatus("Controller availability changed");
  },
});

const drawLineGeometry = new THREE.BufferGeometry();
drawLineGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6), 3));
const drawLine = new THREE.Line(
  drawLineGeometry, new THREE.LineBasicMaterial({ color: 0xe3ddc5 })
);
drawLine.visible = false;
scene.add(drawLine);

const arrowGeometry = new THREE.CylinderGeometry(0.006, 0.013, 0.55, 6);
const arrowMaterial = new THREE.MeshStandardMaterial({ color: 0xc5deff });
const arrowTipGeometry = new THREE.ConeGeometry(0.035, 0.11, 8);
const arrowTipMaterial = new THREE.MeshStandardMaterial({ color: 0xffe1a3 });
const up = new THREE.Vector3(0, 1, 0);
const arrows = [];
function spawnArrow(start, direction, speed) {
  const group = new THREE.Group();
  const shaft = new THREE.Mesh(arrowGeometry, arrowMaterial);
  const tip = new THREE.Mesh(arrowTipGeometry, arrowTipMaterial);
  tip.position.y = 0.325;
  group.add(shaft, tip);
  group.position.copy(start);
  group.quaternion.setFromUnitVectors(up, direction.clone().normalize());
  scene.add(group);
  arrows.push({
    mesh: group, position: start.clone(), velocity: direction.clone().normalize().multiplyScalar(speed),
    age: 0,
  });
  shots += 1;
  updateScore();
  setStatus("Arrow released");
}
function shootTrackedBow(left, right) {
  const bowPosition = left.getWorldPosition(new THREE.Vector3());
  const drawPosition = right.getWorldPosition(new THREE.Vector3());
  const shot = bowShot(bowPosition.toArray(), drawPosition.toArray());
  if (!shot) { setStatus("Draw farther to launch"); return; }
  const forward = new THREE.Vector3().fromArray(shot.direction);
  spawnArrow(bowPosition.clone().addScaledVector(forward, 0.15), forward, shot.speed);
}
function drawBowString() {
  if (!input.drawing) {
    drawLine.visible = false;
    return;
  }
  const bowPosition = new THREE.Vector3();
  const drawPosition = new THREE.Vector3();
  input.hands.left.grip.getWorldPosition(bowPosition);
  input.hands.right.grip.getWorldPosition(drawPosition);
  const attribute = drawLineGeometry.getAttribute("position");
  attribute.setXYZ(0, bowPosition.x, bowPosition.y, bowPosition.z);
  attribute.setXYZ(1, drawPosition.x, drawPosition.y, drawPosition.z);
  attribute.needsUpdate = true;
  drawLine.visible = true;
}

renderer.domElement.addEventListener("pointerdown", (event) => {
  if (renderer.xr.isPresenting || event.button !== 0) return;
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  spawnArrow(camera.position.clone().addScaledVector(direction, 0.35), direction, 14);
});

function disposeArrow(index) {
  const arrow = arrows[index];
  scene.remove(arrow.mesh);
  arrows.splice(index, 1);
}

if (navigator.xr?.isSessionSupported) {
  navigator.xr.isSessionSupported("immersive-vr").then((supported) => {
    dom.xrStatus.textContent = supported
      ? "Immersive VR reported available; physical input not yet verified."
      : "Immersive VR unavailable in this browser/context.";
  }).catch(() => {
    dom.xrStatus.textContent = "WebXR permission/support check failed.";
  });
} else {
  dom.xrStatus.textContent = "WebXR API unavailable: desktop debug mode only.";
}
bindSessionLifecycle(renderer.xr, input, {
  reset: resetScore,
  active() {
    document.getElementById("reticle").hidden = true;
    lastTime = null;
    setStatus("XR active: left squeeze resets");
  },
  ended() {
    document.getElementById("reticle").hidden = false;
    lastTime = null;
    setStatus("XR session ended");
  },
});
addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let lastTime = null;
let simulationTime = 0;
target.position.set(0, 1.55, -4.5);
renderer.setAnimationLoop((now) => {
  // Clamp elapsed time after suspend/resume to avoid tunneling/giant simulation steps.
  const dt = lastTime === null ? 0 : clamp((now - lastTime) / 1000, 0, 0.05);
  lastTime = now;
  input.update();
  const previousTarget = target.position.clone();
  simulationTime += dt;
  const elapsed = simulationTime;
  target.position.set(Math.sin(elapsed * 0.85) * 1.12, 1.55 + Math.sin(elapsed * 0.47) * 0.2, -4.5);
  targetRing.position.copy(target.position);
  targetRing.lookAt(renderer.xr.isPresenting ? renderer.xr.getCamera().position : camera.position);
  drawBowString();
  updateArrows(arrows, dt, previousTarget, target.position, targetRadius, {
    remove: disposeArrow,
    hit() {
      hits += 1;
      updateScore();
      setStatus("Hit! +1");
      void pulseHaptic(input.hands.right?.source?.gamepad);
    },
    miss() { setStatus("Missed"); },
  });
  renderer.render(scene, camera);
});
