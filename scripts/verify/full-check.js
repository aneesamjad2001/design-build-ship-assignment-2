const { chromium } = require("playwright");
const fs = require("fs");
const BASE = process.env.BASE || "http://localhost:3000";
const TAG = process.env.TAG || "local";
const ROUTES = [
  "/",
  "/mood-boards/calm",
  "/mood-boards/arcade",
  "/mood-boards/editorial",
  "/design-systems/calm",
  "/design-systems/arcade",
  "/design-systems/editorial",
  "/landmarks",
];
const SHOTS = `${__dirname}/shots-${TAG}`;
fs.mkdirSync(SHOTS, { recursive: true });
const problems = [];

(async () => {
  const browser = await chromium.launch();

  // ---- route sweep at three widths ----
  for (const [w, h, vp] of [[390, 844, "mobile"], [768, 1024, "tablet"], [1440, 900, "desktop"]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h } });
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push(String(e)));
    for (const r of ROUTES) {
      await page.goto(BASE + r, { waitUntil: "networkidle" });
      const ov = await page.evaluate(() => {
        const d = document.documentElement;
        return d.scrollWidth > d.clientWidth + 1 ? d.scrollWidth - d.clientWidth : 0;
      });
      if (ov) problems.push(`${vp} ${r}: horizontal overflow ${ov}px`);
      const brokenImgs = await page.evaluate(() =>
        [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src)
      );
      if (brokenImgs.length) problems.push(`${vp} ${r}: broken images ${brokenImgs.join(", ")}`);
      if (vp !== "tablet") {
        const name = (r === "/" ? "hub" : r.slice(1).replace(/\//g, "-")) + "-" + vp;
        await page.screenshot({ path: `${SHOTS}/${name}.png`, fullPage: true });
      }
    }
    if (errors.length) problems.push(`${vp} console errors: ${[...new Set(errors)].join(" | ")}`);
    await ctx.close();
  }

  // ---- design-system interactive demos, all three systems ----
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    for (const s of ["calm", "arcade", "editorial"]) {
      await page.goto(`${BASE}/design-systems/${s}`, { waitUntil: "networkidle" });
      // switch toggles
      const sw = page.getByRole("switch");
      const before = await sw.getAttribute("aria-checked");
      await sw.click();
      if ((await sw.getAttribute("aria-checked")) === before) problems.push(`${s}: switch did not toggle`);
      // tabs: click + arrow key
      await page.getByRole("tab", { name: "Eras" }).click();
      if ((await page.getByRole("tabpanel").textContent()) !== "Five eras, from the pioneers on.")
        problems.push(`${s}: tab click did not switch panel`);
      await page.keyboard.press("ArrowRight");
      if (!(await page.getByRole("tabpanel").textContent()).includes("field guide"))
        problems.push(`${s}: tab arrow key did not advance`);
      // modal demo: open, mark read, escape, focus restored
      await page.getByRole("button", { name: "Open panel demo" }).click();
      const d = page.locator("dialog[open]");
      await d.waitFor();
      await d.getByRole("button", { name: "Mark as read" }).click();
      if (!(await d.getByRole("button", { name: /Read · undo/ }).isVisible()))
        problems.push(`${s}: modal mark-as-read did not toggle`);
      await page.keyboard.press("Escape");
      await page.waitForTimeout(120);
      if (await page.locator("dialog[open]").count()) problems.push(`${s}: Escape did not close demo`);
      const foc = await page.evaluate(() => document.activeElement?.textContent || "");
      if (!foc.includes("Open panel demo")) problems.push(`${s}: focus not restored to demo opener`);
    }
    await page.close();
  }

  // ---- mobile panel: sticky close stays reachable while panel scrolls ----
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(BASE + "/landmarks", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: /The Transformer/ }).click();
    const d = page.locator("dialog[open]");
    await d.waitFor();
    await d.locator(".panel-body").evaluate((el) => (el.scrollTop = el.scrollHeight));
    const close = page.getByRole("button", { name: "Close story" });
    if (!(await close.isVisible())) problems.push("mobile: close button lost after panel scroll");
    const box = await close.boundingBox();
    if (!box || box.height < 40 || box.width < 40) problems.push("mobile: close touch target under 40px");
    await close.click();
    if (await page.locator("dialog[open]").count()) problems.push("mobile: close button did not close");
    await page.close();
  }

  // ---- hub internal links all navigate ----
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    const hrefs = await page.evaluate(() =>
      [...document.querySelectorAll("a[href^='/']")].map((a) => a.getAttribute("href"))
    );
    const missing = ROUTES.filter((r) => r !== "/" && !hrefs.includes(r));
    if (missing.length) problems.push("hub missing links to: " + missing.join(", "));
    await page.close();
  }

  // ---- external source links are alive ----
  {
    const data = fs.readFileSync(process.env.DATA_TS || require("path").join(__dirname, "../../app/landmarks/data.ts"), "utf8");
    const urls = [...new Set([...data.matchAll(/url: "(https:[^"]+)"/g)].map((m) => m[1]))];
    const ctx = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
    });
    for (const u of urls) {
      try {
        const res = await ctx.request.get(u, { timeout: 20000, maxRedirects: 8 });
        const st = res.status();
        if (st >= 400 && st !== 403) problems.push(`source link ${st}: ${u}`);
        else if (st === 403) console.log(`  (403 — bot-blocked, verify by hand: ${u})`);
      } catch (e) {
        problems.push(`source link failed: ${u} (${String(e).slice(0, 60)})`);
      }
    }
    console.log(`  checked ${urls.length} external source links`);
    await ctx.close();
  }

  await browser.close();
  console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "ALL FULL CHECKS PASSED");
})();
