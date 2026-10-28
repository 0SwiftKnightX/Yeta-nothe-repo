import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { chromium } from "playwright";

const url = "http://127.0.0.1:4173/";
const server = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", "4173", "--strictPort"], {
  stdio: ["ignore", "pipe", "pipe"],
});
let serverOutput = "";
server.stderr.on("data", (b) => { serverOutput += b.toString(); });
server.stdout.on("data", (b) => { serverOutput += b.toString(); });
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let browser;
try {
  let ready = false;
  for (let i = 0; i < 40; i += 1) {
    if (server.exitCode !== null) throw new Error("Preview server exited: " + serverOutput);
    try {
      const result = await fetch(url);
      if (result.ok) { ready = true; break; }
    } catch { /* preview still starting */ }
    await delay(250);
  }
  assert.ok(ready, "Vite preview did not become available: " + serverOutput);

  browser = await chromium.launch({
    channel: "chrome",
    headless: true,
    args: ["--enable-unsafe-swiftshader", "--use-gl=angle", "--use-angle=swiftshader", "--disable-dev-shm-usage"],
  });
  const page = await browser.newPage({ viewport: { width: 1100, height: 720 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.querySelector("canvas") !== null, { timeout: 20000 });
  assert.equal(await page.locator("#shots").innerText(), "0");
  assert.equal(await page.locator("#hits").innerText(), "0");
  assert.equal(await page.locator("#accuracy").innerText(), "0%");
  assert.notEqual(await page.locator("#xrStatus").innerText(), "Detecting WebXR availability…", "WebXR support status must settle");

  await page.locator("canvas").click({ position: { x: 600, y: 360 } });
  assert.equal(await page.locator("#shots").innerText(), "1", "Desktop pointer action must fire exactly once");
  assert.equal(await page.locator("#hits").innerText(), "0", "No immediate hit before projectile update");
  await page.waitForTimeout(750);
  await page.screenshot({ path: "tests/desktop-smoke.png", fullPage: true });
  await page.locator("#reset").click();
  assert.equal(await page.locator("#shots").innerText(), "0");
  assert.equal(await page.locator("#hits").innerText(), "0");
  assert.equal(await page.locator("#accuracy").innerText(), "0%");
  assert.deepEqual(errors, [], "Browser JavaScript must have no uncaught page errors");
  console.log("DESKTOP SMOKE PASSED: 3D canvas, XR support message, pointer shot, score reset, no uncaught page errors.");
  console.log("NOT VERIFIED: WebXR session, tracked controllers, haptics or Quest 3S performance.");
} finally {
  if (browser) await browser.close();
  server.kill();
}
