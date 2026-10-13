# Verification scripts

Real-browser checks used throughout the project. They are not part of the
site's build — run them locally against a dev server or the deployment.

```bash
# one-time setup (Playwright is intentionally not a project dependency)
npm i --no-save playwright
npx playwright install chromium

npm run dev   # in another terminal, or set BASE to the deployment

node scripts/verify/full-check.js    # all 8 routes × 390/768/1440px:
                                     # overflow, console errors, broken images,
                                     # design-system demos, mobile panel,
                                     # hub links, external source-link liveness
node scripts/verify/panel-check.js   # /landmarks deep interactions: filters
                                     # (radio semantics + arrow keys), dialog
                                     # focus trap/restoration, inert background,
                                     # read/undo + progress, refresh reset,
                                     # prev/next incl. scroll-to-top + heading
                                     # focus, reduced motion

# run either against production instead:
BASE=https://design-build-ship-assignment-2-sigma.vercel.app node scripts/verify/full-check.js
```

`commons-search.js` is the sourcing tool used to find the mood boards'
archival references on Wikimedia Commons with their license metadata
(see ../../ATTRIBUTIONS.md):

```bash
node scripts/verify/commons-search.js "search terms"
```

Screenshots land in `scripts/verify/shots-*/` (gitignored); curated copies
live in `docs/process/` and `docs/verification/`.
