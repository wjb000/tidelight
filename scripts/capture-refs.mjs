import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const OUT = path.resolve(".captures/refs");
fs.mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SITES = [
  { url: "https://tinyskies.vercel.app/", shots: ["tinyskies-1.png", "tinyskies-2.png"] },
  { url: "https://coastalworld.merci-michel.com/", shots: ["coastal-1.png", "coastal-2.png"] },
  { url: "https://messenger.abeto.co/", shots: ["abeto-1.png"] },
  { url: "https://www.pudgyworld.com/", shots: ["pudgy-1.png"] },
];

async function clickStartGates(page) {
  // Try common selectors and text-matching buttons a few times
  const textRe = /start|enter|play|begin|explore|continue|skip|got it|accept|ok/i;
  for (let round = 0; round < 4; round++) {
    let clicked = false;
    const selectors = [
      "button",
      "[role=button]",
      "a",
      ".start",
      ".enter",
      ".play",
      "#start",
      "#enter",
      "#play",
      "[class*=start i]",
      "[class*=enter i]",
      "[class*=play i]",
      "[class*=cta i]",
    ];
    for (const sel of selectors) {
      let els;
      try {
        els = await page.$$(sel);
      } catch {
        continue;
      }
      for (const el of els.slice(0, 30)) {
        try {
          if (!(await el.isVisible())) continue;
          const txt = ((await el.innerText().catch(() => "")) || "").trim();
          const aria = (await el.getAttribute("aria-label").catch(() => "")) || "";
          if (textRe.test(txt) || textRe.test(aria)) {
            console.log(`  clicking "${(txt || aria).slice(0, 40)}" (${sel})`);
            await el.click({ timeout: 3000, force: true }).catch(() => {});
            clicked = true;
            await sleep(2500);
          }
        } catch {}
      }
    }
    if (!clicked) break;
  }
  // Escape any dialogs, then click viewport center to satisfy click-to-start gates
  await page.keyboard.press("Escape").catch(() => {});
  await sleep(500);
  await page.mouse.click(720, 450).catch(() => {});
  await sleep(1500);
}

async function isBlank(file) {
  // crude: tiny PNG file size => likely solid color/black
  try {
    return fs.statSync(file).size < 12000;
  } catch {
    return true;
  }
}

async function captureSite(browser, site) {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  });
  const page = await ctx.newPage();
  const result = { url: site.url, files: [], error: null };
  try {
    console.log(`\n=== ${site.url}`);
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 60000 });
    console.log("  loaded DOM, waiting 20s for 3D assets...");
    await sleep(20000);
    await clickStartGates(page);
    console.log("  waiting 12s post-gate...");
    await sleep(12000);
    await clickStartGates(page); // second pass in case a new gate appeared
    await sleep(5000);

    const f1 = path.join(OUT, site.shots[0]);
    await page.screenshot({ path: f1, timeout: 30000 });
    result.files.push(f1);
    console.log(`  saved ${site.shots[0]} (${fs.statSync(f1).size} bytes)`);

    if (site.shots[1]) {
      // move: hold W, wiggle mouse, wait
      await page.mouse.click(720, 450).catch(() => {});
      await page.keyboard.down("KeyW").catch(() => {});
      await page.mouse.move(400, 400, { steps: 20 }).catch(() => {});
      await sleep(4000);
      await page.mouse.move(1000, 500, { steps: 20 }).catch(() => {});
      await sleep(4000);
      await page.keyboard.up("KeyW").catch(() => {});
      await sleep(1000);
      const f2 = path.join(OUT, site.shots[1]);
      await page.screenshot({ path: f2, timeout: 30000 });
      result.files.push(f2);
      console.log(`  saved ${site.shots[1]} (${fs.statSync(f2).size} bytes)`);
    }
  } catch (e) {
    result.error = e.message.split("\n")[0];
    console.log(`  ERROR: ${result.error}`);
    // best-effort save whatever is on screen
    for (const shot of site.shots) {
      const f = path.join(OUT, shot);
      if (!fs.existsSync(f)) {
        await page.screenshot({ path: f, timeout: 15000 }).catch(() => {});
        if (fs.existsSync(f)) result.files.push(f);
      }
    }
  } finally {
    await ctx.close().catch(() => {});
  }
  return result;
}

async function run(launchArgs, sites) {
  const browser = await chromium.launch({ headless: true, args: launchArgs });
  const results = [];
  for (const s of sites) {
    results.push(await captureSite(browser, s));
  }
  await browser.close();
  return results;
}

const swiftshaderArgs = ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"];

let results = await run([], SITES);

// Retry blank/failed ones with swiftshader
const retrySites = [];
for (const r of results) {
  const site = SITES.find((s) => s.url === r.url);
  const anyBlank = await Promise.all(site.shots.map((s) => isBlank(path.join(OUT, s))));
  if (r.error || anyBlank.some(Boolean)) retrySites.push(site);
}
if (retrySites.length) {
  console.log(`\n### Retrying with swiftshader: ${retrySites.map((s) => s.url).join(", ")}`);
  const retryResults = await run(swiftshaderArgs, retrySites);
  for (const rr of retryResults) {
    const i = results.findIndex((r) => r.url === rr.url);
    // keep retry result only if it produced non-blank files; report both
    results[i].retry = rr;
  }
}

console.log("\n=== SUMMARY ===");
for (const r of results) {
  const site = SITES.find((s) => s.url === r.url);
  for (const shot of site.shots) {
    const f = path.join(OUT, shot);
    const exists = fs.existsSync(f);
    const size = exists ? fs.statSync(f).size : 0;
    console.log(`${shot}: ${exists ? size + " bytes" : "MISSING"}${size < 12000 ? " (possibly blank)" : ""}`);
  }
  if (r.error) console.log(`  first-pass error for ${r.url}: ${r.error}`);
  if (r.retry?.error) console.log(`  retry error for ${r.url}: ${r.retry.error}`);
}
