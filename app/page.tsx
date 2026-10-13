import Image from "next/image";
import Link from "next/link";

const moods = [
  {
    slug: "calm",
    name: "Calm",
    swatches: ["#f4f1ea", "#47684c", "#dfd9c8", "#2a2a24"],
    fontClass: "[font-family:var(--font-fraunces)]",
    chip: { bg: "#47684c", fg: "#f4f1ea", radius: "999px" },
  },
  {
    slug: "arcade",
    name: "Arcade",
    swatches: ["#0c0c12", "#c8ff00", "#ff2e88", "#16161f"],
    fontClass: "[font-family:var(--font-press-start)] text-xs",
    chip: { bg: "#c8ff00", fg: "#0c0c12", radius: "4px" },
  },
  {
    slug: "editorial",
    name: "Editorial",
    swatches: ["#faf7f1", "#121212", "#c8102e", "#ffffff"],
    fontClass: "[font-family:var(--font-playfair)] font-bold",
    chip: { bg: "#c8102e", fg: "#ffffff", radius: "0px" },
    selected: true,
  },
];

function SwatchRow({ colors }: { colors: string[] }) {
  return (
    <span className="flex gap-1">
      {colors.map((c) => (
        <span
          key={c}
          className="h-4 w-4 rounded-full border border-black/10"
          style={{ backgroundColor: c }}
        />
      ))}
    </span>
  );
}

function SectionHeading({ n, title }: { n: number; title: string }) {
  return (
    <h2 className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-[11px] font-semibold text-white">
        {n}
      </span>
      {title}
    </h2>
  );
}

const cardClass =
  "group flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3.5 transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

export default function Hub() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-14 sm:py-20">
      <header>
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-neutral-500">
          UI/UX &amp; Visual Design · MPCS 51238
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
          Landmarks of AI
        </h1>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-neutral-600">
          A short field guide to the breakthroughs behind modern AI, written
          for curious readers who don&apos;t know the jargon. Built in three
          stages: three visual explorations, three design systems, one
          finished site.
        </p>
      </header>

      <section className="mt-12">
        <SectionHeading n={1} title="Mood boards" />
        <p className="mt-2 text-sm text-neutral-500">
          28 artifacts each — color, type, texture, reference studies, and
          interface fragments, all original CSS/SVG.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {moods.map((m) => (
            <li key={m.slug}>
              <Link href={`/mood-boards/${m.slug}`} className={cardClass}>
                <span className="flex items-center gap-3">
                  <SwatchRow colors={m.swatches} />
                  <span className="text-sm font-medium text-neutral-900">
                    {m.name}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-neutral-400 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <SectionHeading n={2} title="Design systems" />
        <p className="mt-2 text-sm text-neutral-500">
          Each one built from its mood board: color roles with contrast
          ratios, type roles, 13 components, and every control state.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {moods.map((m) => (
            <li key={m.slug} className="relative">
              <Link
                href={`/design-systems/${m.slug}`}
                className={`${cardClass} ${m.selected ? "border-neutral-900" : ""}`}
              >
                <span className="flex items-center gap-3">
                  <span className={`text-base text-neutral-900 ${m.fontClass}`}>
                    Aa
                  </span>
                  <span
                    aria-hidden
                    className="inline-block px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
                    style={{
                      backgroundColor: m.chip.bg,
                      color: m.chip.fg,
                      borderRadius: m.chip.radius,
                    }}
                  >
                    Read
                  </span>
                  <span className="text-sm font-medium text-neutral-900">
                    {m.name}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-neutral-400 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              {m.selected && (
                <span className="absolute -top-2 right-3 bg-neutral-900 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                  Selected direction
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-neutral-500">
          Editorial was selected because the site is long-form historical
          reading: serif hierarchy and hairline rules carry chronology the way
          a broadsheet carries news, and rationing red to actions keeps 17
          stories calm to scan.
        </p>
      </section>

      <section className="mt-10">
        <SectionHeading n={3} title="Your site" />
        <Link
          href="/landmarks"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          Open Landmarks of AI
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-3 text-[13px] text-neutral-500">
          17 entries, 1958–2025 · filter by thread, read stories in a detail
          panel, keep an in-memory reading count.
        </p>
      </section>

      <section className="mt-12 border-t border-neutral-200 pt-8">
        <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
          From board to system to site
        </h2>
        <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-neutral-600">
          <li>
            <strong className="font-medium text-neutral-900">
              Publication rules became structure.
            </strong>{" "}
            The newspaper&apos;s hairlines and double rules on the Editorial board
            became the system&apos;s only dividers — the site has no boxes or
            shadows anywhere.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">
              The folio numeral became chronology.
            </strong>{" "}
            The board&apos;s “№ 41” specimen became the design system&apos;s display
            role, which became the big year that anchors every timeline row.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">
              One red became an accent policy.
            </strong>{" "}
            A front page spends red on one thing; in the system and site,
            crimson appears only on the primary action, the “Read story” cue,
            and the focus ring.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-neutral-200 pt-8">
        <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
          Process notes
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-[13px] leading-relaxed text-neutral-600">
          <li>
            <strong className="font-medium text-neutral-900">First browser review.</strong>{" "}
            A Playwright pass at 390px and 1440px caught swatches invisible
            against matching backgrounds and three low-contrast labels on the
            mood boards — fixed before first deployment.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Design review → accent policy.</strong>{" "}
            A review of the first deployment found crimson leaking into
            metadata while the real primary action was black. The revision
            below reserves crimson for actions and promotes “Mark as read” to
            the primary treatment.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Content audit.</strong>{" "}
            Every entry was re-verified against primary sources: ImageNet&apos;s
            2009 scale (3.2M at launch, not 14M), AlexNet&apos;s exact error
            figures, reasoning-model dates, and qualified superlatives. Every
            story now links its sources; the audit record is in SOURCES.md.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Accessibility rework.</strong>{" "}
            The detail panel became a native dialog with focus trapped inside
            and returned to the opening row on close; filters became a
            radio group with arrow-key support; motion respects
            prefers-reduced-motion.
          </li>
        </ol>
        <figure className="mt-5">
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                Before — crimson metadata, 14M claim
              </p>
              <Image
                src="/process/row-before.png"
                alt="Earlier timeline rows: category and organization labels in crimson, and ImageNet described as fourteen million images."
                width={860}
                height={388}
                className="rounded-md border border-neutral-200"
              />
            </div>
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                After — ink metadata, read cue, corrected copy
              </p>
              <Image
                src="/process/row-after.png"
                alt="Revised timeline rows: metadata in muted ink, a crimson Read story cue on each row, and ImageNet corrected to 3.2 million images at launch."
                width={860}
                height={388}
                className="rounded-md border border-neutral-200"
              />
            </div>
          </div>
          <figcaption className="mt-2 text-[12px] text-neutral-500">
            The same timeline region before and after the accent-policy and
            content revisions (actual screenshots from the browser
            verification runs).
          </figcaption>
        </figure>
        <p className="mt-4 max-w-lg text-[12px] leading-relaxed text-neutral-400">
          Division of labor, honestly: the topic, the three styles, and the
          Editorial direction were the author&apos;s decisions; the revision goals
          above came from a written design review; implementation details
          (era groupings, the right-side panel, the three illustration
          subjects) were the agent&apos;s choices under those directions, and all
          behavior was verified by agent-driven Playwright runs at 390px and
          1440px before deploying.
        </p>
      </section>

      <footer className="mt-16 border-t border-neutral-200 pt-6 text-xs text-neutral-400">
        Design, Build, Ship · Autumn 2026 · Anees Amjad
      </footer>
    </main>
  );
}
