# Landmarks of AI — UI/UX & Visual Design

Assignment 2 for Design, Build, Ship (MPCS 51238, University of Chicago,
Autumn 2026), by Anees Amjad.

**Landmarks of AI** is a short field guide to the breakthroughs behind modern
AI — machines, methods, datasets, and products from the Perceptron (1958) to
reasoning models (2024–25) — written for curious readers who don't already
know machine-learning jargon.

## Routes

| Route | What it is |
|---|---|
| `/` | The hub: links to everything, the board→system→site rationale, and honest process notes with before/after screenshots |
| `/mood-boards/calm` · `/arcade` · `/editorial` | Three visual explorations, 28 artifacts each (color with marked UI roles, type, texture, reference studies, interface fragments — all original CSS/SVG, no photographs) plus three design lessons each |
| `/design-systems/calm` · `/arcade` · `/editorial` | Three full UI libraries: color roles with computed WCAG ratios, type roles, spacing/shape, 13 components with working demos, a per-component control-state matrix, and UI-state specimens |
| `/landmarks` | The finished site, in the Editorial system |

## Selected style and rationale

**Editorial.** The site is long-form historical reading: Playfair/Source Serif
hierarchy and hairline rules carry chronology the way a broadsheet carries
news. The system's accent policy is documented on
`/design-systems/editorial` and enforced on the site: **crimson appears only
as an action signal** (the primary button, the per-row "Read story" cue, and
the focus ring); metadata, badges, and labels are ink or muted gray; selected
filters are neutral ink fills.

## Important design decisions

- **Native `<dialog>` detail panel** (`app/lib/Modal.tsx`, shared with the
  design-system demos): focus moves inside on open, Tab/Shift+Tab are
  contained, the background is inert, Escape and backdrop close it, focus
  returns to the opening row, and body scroll is locked. Previous/next inside
  the panel follow the **currently filtered** list.
- **Single-select filters as a radiogroup** with roving tabindex and arrow
  keys; the result count (`Showing n of 17`) and reading progress
  (`k of 17 read`) live in one polite live region.
- **Archival SVG figures** for the Perceptron (conceptual schematic), AlexNet
  (exact published ILSVRC-2012 error rates, directly labeled), and the
  Transformer (conceptual attention diagram) — captioned, sourced, and
  monochrome so they belong to the Editorial system.
- **Motion** is a single subtle panel slide, removed entirely under
  `prefers-reduced-motion`.

## Static, in-memory behavior

No database, accounts, external APIs, analytics, or storage of any kind.
Read/unread state and the current filter are React state only: they reset on
refresh, and the site says so in its footer. There is no localStorage,
sessionStorage, cookie, or IndexedDB usage. The only network requests are the
site's own assets; external links are ordinary citations that open the
primary source.

## Content and sources

Every entry's claims were audited against primary sources (papers, Nature,
official announcements); each detail panel links its sources, and
[`SOURCES.md`](./SOURCES.md) records the full list plus the corrections made
in the audit (ImageNet's 2009 scale, AlexNet's exact figures, reasoning-model
dates, qualified superlatives, and more). All imagery is original CSS/SVG.

## Local setup

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static production build (all routes prerender)
npm run lint
```

## Verification performed

Agent-driven Playwright runs against every route at 390px and 1440px (plus
768px on the content pages): horizontal-overflow and console-error checks,
full-page screenshots reviewed visually, and scripted interaction tests —
filter radiogroup (click + arrow keys + accurate counts), row activation,
panel focus entry/containment/restoration, inert background, Escape/backdrop
close, previous/next along the filtered list, mark-as-read with live progress
and reset-on-refresh, the design-system switch/tabs/panel demos, reduced-
motion emulation, and a liveness check of every external source link. The
same suite runs against the production deployment after deploy.

**Known limitations:** source-link liveness is checked by HTTP status, not by
reading each page; screen-reader behavior was reasoned from semantics
(native dialog, radiogroup, live regions) but not tested with a real screen
reader; and the author's own final visual/keyboard pass is the last word, not
the agent's.
