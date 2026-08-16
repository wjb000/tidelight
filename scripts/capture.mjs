import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const out = new URL("../.captures/", import.meta.url);
await mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("pageerror", (e) => console.error("PAGEERROR", e.message));
page.on("console", (m) => {
  if (["error", "warning"].includes(m.type())) console.log(m.type(), m.text());
});
await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(2500);
await page.screenshot({ path: new URL("boot.png", out).pathname, fullPage: true });
await page.fill("#name-input", "critic");
await page.click("#enter");
await page.waitForTimeout(3500);
await page.screenshot({ path: new URL("world.png", out).pathname });
await page.keyboard.down("KeyW");
await page.waitForTimeout(400);
await page.screenshot({ path: new URL("walk.png", out).pathname });
await page.keyboard.up("KeyW");
await browser.close();
console.log("wrote .captures/boot.png world.png walk.png");
