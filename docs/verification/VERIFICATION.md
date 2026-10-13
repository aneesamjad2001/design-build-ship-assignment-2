# Verification record

Latest full run: **October 13, 2026**, against both `localhost:3000` and the
production deployment at
`https://design-build-ship-assignment-2-sigma.vercel.app`, using the suites
in [`scripts/verify/`](../../scripts/verify/) (Playwright/Chromium). Both
suites passed on both targets. `npm run lint` and `npm run build` (which
type-checks) are clean; all nine routes prerender statically.

## What the suites actually check

**`full-check.js`** — all eight routes at 390, 768, and 1440px:
- no horizontal overflow, no console errors, no broken images
- full-page screenshots (reviewed visually, not just asserted)
- design-system pages: the switch toggles (`aria-checked`), tabs work by
  click and arrow key, the panel demo opens/closes with focus restored, the
  read/undo button demo gives visible feedback
- mobile panel: sticky close control stays visible after scrolling and meets
  a 40px touch target
- hub links to every required route
- every external source link fetched (26 links): 24 return success; the NYT
  1958 archive page and the LSTM DOI (MIT Press) block automated clients
  (403) and were left for hand-checking

**`panel-check.js`** — deep `/landmarks` interaction checks:
- masthead shows coverage (no fake founding date), result counts and reading
  progress are accurate and live
- rows show the pre-hover "Read story" cue and open a native dialog
- focus moves into the dialog; 25 Tab presses stay contained; the background
  is inert (a chip click is rejected while open); Escape closes; focus
  returns to the opening row
- mark-as-read becomes a quiet reversible "✓ Read · undo"; the row shows
  "✓ Read"; progress updates; a reload resets it
- previous/next follow the filtered list, disable at the ends, and — after
  scrolling a story to the bottom — the next story starts at the top with
  focus on its heading
- filters behave as a radio group (arrow keys, Home/End), with accurate
  filtered counts
- reduced-motion emulation: everything still works

## Curated production screenshots (this directory)

- `prod-landmarks-mobile.jpg` — the site at 390px
- `prod-design-systems-editorial-desktop.jpg` — the completed Editorial library
- `prod-mood-boards-calm-desktop.jpg` — a board with sourced references

Before/after pairs for the iterations are in [`../process/`](../process/).

## Known limitations

- Two source links (NYT 1958, LSTM DOI) are verified only as "blocked for
  bots", not fetched.
- Screen-reader behavior is built on native semantics (dialog, radiogroup,
  live region) but has not been tested with a real screen reader.
- All of the above are agent-driven checks, not human testing; the
  classmate exercise in [`../REVIEW_EXERCISE.md`](../REVIEW_EXERCISE.md)
  has not yet been conducted.
