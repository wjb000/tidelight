import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const out = new URL("../.captures/", import.meta.url);
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });

async function join(name) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on("pageerror", (e) => console.error(name, e.message));
  await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(1200);
  await page.fill("#name-input", name);
  await page.click("#enter");
  await page.waitForTimeout(2500);
  return page;
}

const host = await join("host");
await host.screenshot({ path: new URL("host.png", out).pathname });
const guest = await join("guest");
await host.waitForTimeout(4000);
await host.screenshot({ path: new URL("host-with-guest.png", out).pathname });
await guest.screenshot({ path: new URL("guest.png", out).pathname });
const text = await host.locator("#peer-count").innerText();
console.log("peer-count", text);
await browser.close();
