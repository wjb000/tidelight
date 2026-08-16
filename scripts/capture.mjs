import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

// Usage: node scripts/capture.mjs [url] [outdir]
const url = process.argv[2] || "http://127.0.0.1:5173/";
const outDir = process.argv[3] || new URL("../.captures/", import.meta.url).pathname;
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("pageerror", (e) => console.error("PAGEERROR", e.message));
page.on("console", (m) => {
  if (["error", "warning"].includes(m.type())) console.log(m.type(), m.text());
});
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
// Instant join: no landing page, we are already in the world.
await page.waitForTimeout(4000);
await page.screenshot({ path: `${outDir}/world.png` });

// Second player joins in another tab so avatars/chat can be seen.
const page2 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page2.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
await page2.waitForTimeout(2500);
await page2.fill("#chat-input", "hello harbor!");
await page2.press("#chat-input", "Enter");
await page2.waitForTimeout(1200);
await page.screenshot({ path: `${outDir}/two-players.png` });

// Walk forward + look around for a gameplay angle.
await page.mouse.click(720, 450);
await page.keyboard.down("KeyW");
await page.waitForTimeout(1400);
await page.keyboard.up("KeyW");
await page.mouse.move(720, 450);
await page.mouse.move(980, 420, { steps: 10 });
await page.waitForTimeout(600);
await page.screenshot({ path: `${outDir}/walk.png` });

// Turn to face a different part of the world.
await page.keyboard.down("KeyA");
await page.waitForTimeout(900);
await page.keyboard.up("KeyA");
await page.keyboard.down("KeyW");
await page.waitForTimeout(2200);
await page.keyboard.up("KeyW");
await page.waitForTimeout(500);
await page.screenshot({ path: `${outDir}/explore.png` });

await page2.close();
await browser.close();
console.log(`wrote ${outDir}/world.png two-players.png walk.png explore.png`);
