# Landmarks of AI — UI/UX & Visual Design

Assignment 2 for Design, Build, Ship (MPCS 51238, Autumn 2026).

A Next.js + Tailwind static site. The homepage is the hub, linking to:

- **Three mood boards** (`/mood-boards/calm|arcade|editorial`) — 28 generated
  artifacts each: color, type specimens, textures, SVG illustrations, and
  interface fragments.
- **Three design systems** (`/design-systems/calm|arcade|editorial`) — each a
  full UI library in its style: color roles with computed WCAG contrast
  ratios, type roles, spacing and shape rules, 13 components, 6 control
  states, and 4 UI states, all set in the site's own content.
- **The site** (`/landmarks`) — *Landmarks of AI*, a field guide to 17 models
  that changed everything, built in the Editorial style. Interactions (all
  faked in the browser, nothing saved): category filter chips, a detail panel
  (Escape / backdrop / close button), and mark-as-read.

No database, accounts, or external APIs.

```bash
npm install
npm run dev   # http://localhost:3000
```
