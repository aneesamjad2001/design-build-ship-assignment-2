const { chromium } = require("playwright");
const BASE = process.env.BASE || "http://localhost:3000";
const problems = [];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(BASE + "/landmarks", { waitUntil: "networkidle" });

  // 1. masthead has no fake founding date; shows coverage
  const head = await page.locator("header").textContent();
  if (head.includes("Est. 1958")) problems.push("masthead still says Est. 1958");
  if (!head.includes("Covers 1958 — 2025")) problems.push("coverage line missing/wrong: " + head.slice(0, 80));
  if (!head.includes("0 of 17 read")) problems.push("read progress missing at start");

  // 2. rows show a pre-hover cue and open a dialog
  const row = page.getByRole("button", { name: /AlphaGo/ }).first();
  if (!(await row.textContent()).includes("Read story")) problems.push("row missing 'Read story' cue");

  // 3. open panel: focus moves inside dialog
  await row.click();
  const dialog = page.locator("dialog[open]");
  await dialog.waitFor();
  let focusInDialog = await page.evaluate(() => {
    const d = document.querySelector("dialog[open]");
    return d && d.contains(document.activeElement);
  });
  if (!focusInDialog) problems.push("focus did not move into dialog on open");

  // 4. tab wraps inside dialog (press Tab 25 times, focus must stay inside)
  for (let i = 0; i < 25; i++) await page.keyboard.press("Tab");
  focusInDialog = await page.evaluate(() => {
    const d = document.querySelector("dialog[open]");
    return d && d.contains(document.activeElement);
  });
  if (!focusInDialog) problems.push("Tab escaped the open dialog");

  // 5. background is inert: the first filter chip can't be clicked
  const chipClickable = await page
    .getByRole("radio", { name: "All" })
    .click({ timeout: 800, trial: true })
    .then(() => true)
    .catch(() => false);
  if (chipClickable) problems.push("background not inert while dialog open");

  // 6. sources render as links
  const srcLinks = await dialog.locator("a[href^='https']").count();
  if (srcLinks < 1) problems.push("no source links in panel");

  // 7. kind appears
  if (!(await dialog.textContent()).includes("System")) problems.push("kind missing in panel kicker");

  // 8. mark as read → progress updates; button becomes undo
  await dialog.getByRole("button", { name: "Mark as read" }).click();
  if (!(await dialog.getByRole("button", { name: /Read · undo/ }).isVisible()))
    problems.push("mark-as-read did not become undo");
  // 9. prev/next navigation follows list
  await dialog.getByRole("button", { name: /Next →/ }).click();
  if (!(await dialog.textContent()).includes("The Transformer"))
    problems.push("Next did not go to The Transformer");
  await dialog.getByRole("button", { name: /← Previous/ }).click();
  if (!(await dialog.textContent()).includes("AlphaGo")) problems.push("Previous did not return to AlphaGo");

  // 10. illustration present on transformer; continuous-reading behavior:
  //     scroll to bottom, press Next — new story starts at top, focus on its heading
  await dialog.locator(".panel-body").evaluate((el) => (el.scrollTop = el.scrollHeight));
  await dialog.getByRole("button", { name: /Next →/ }).click();
  await page.waitForTimeout(150);
  if ((await dialog.locator("figure svg").count()) < 1) problems.push("transformer illustration missing");
  const scrollTop = await dialog.locator(".panel-body").evaluate((el) => el.scrollTop);
  if (scrollTop > 5) problems.push("next story did not start at top (scrollTop " + scrollTop + ")");
  const focusedAfterNav = await page.evaluate(() => ({
    tag: document.activeElement?.tagName,
    text: (document.activeElement?.textContent || "").slice(0, 30),
  }));
  if (focusedAfterNav.tag !== "H2" || !focusedAfterNav.text.includes("Transformer"))
    problems.push("focus not on new story heading after Next: " + JSON.stringify(focusedAfterNav));
  await dialog.getByRole("button", { name: /← Previous/ }).click();
  await page.waitForTimeout(150);
  const focusedBack = await page.evaluate(() => (document.activeElement?.textContent || "").slice(0, 30));
  if (!focusedBack.includes("AlphaGo")) problems.push("focus not on heading after Previous: " + focusedBack);
  await dialog.getByRole("button", { name: /Next →/ }).click();
  await page.waitForTimeout(100);

  // 11. Escape closes and focus returns to the opening row
  await page.keyboard.press("Escape");
  await page.waitForTimeout(150);
  if (await page.locator("dialog[open]").count()) problems.push("Escape did not close dialog");
  const focusedText = await page.evaluate(() => document.activeElement?.textContent || "");
  if (!focusedText.includes("AlphaGo")) problems.push("focus not restored to opening row, got: " + focusedText.slice(0, 40));

  // 12. progress shows 1 of 17; row shows ✓ Read
  const head2 = await page.locator("header").textContent();
  if (!head2.includes("1 of 17 read")) problems.push("progress not updated after marking read");
  if (!(await row.textContent()).includes("✓ Read")) problems.push("row missing ✓ Read indicator");

  // 13. refresh resets progress
  await page.reload({ waitUntil: "networkidle" });
  const head3 = await page.locator("header").textContent();
  if (!head3.includes("0 of 17 read")) problems.push("progress did not reset on refresh");

  // 14. filter via keyboard arrows (radiogroup)
  await page.getByRole("radio", { name: "All" }).focus();
  await page.keyboard.press("ArrowRight");
  const checked = await page.getByRole("radio", { checked: true }).textContent();
  if (checked !== "Foundations") problems.push("arrow key did not move radio selection: " + checked);
  const count = await page.locator("main ul li").count();
  if (count !== 2) problems.push("Foundations filter should show 2 rows, got " + count);
  const stat = await page.locator("[aria-live=polite]").textContent();
  if (!stat.includes("Showing 2 of 17")) problems.push("stat line wrong when filtered: " + stat);

  // 15. prev/next respects the filtered list
  await page.getByRole("button", { name: /The Perceptron/ }).click();
  const d2 = page.locator("dialog[open]");
  await d2.waitFor();
  await d2.getByRole("button", { name: /Next →/ }).click();
  if (!(await d2.textContent()).includes("Backpropagation")) problems.push("filtered next wrong");
  const nextDisabled = await d2.getByRole("button", { name: /Next →/ }).isDisabled();
  if (!nextDisabled) problems.push("Next not disabled at end of filtered list");
  await page.keyboard.press("Escape");

  // 16. reduced motion doesn't break anything
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.getByRole("button", { name: /Backpropagation/ }).click();
  await page.locator("dialog[open]").waitFor();
  await page.keyboard.press("Escape");

  if (errors.length) problems.push("console errors: " + errors.join(" | "));
  await browser.close();
  console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "ALL PANEL CHECKS PASSED");
})();
