import Image from "next/image";
import Link from "next/link";

const REPO = "https://github.com/aneesamjad2001/design-build-ship-assignment-2";

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

/* A tiny conceptual schematic used as the hub's one illustration preview. */
function MiniPerceptron() {
  const s: [number, number][] = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) s.push([10 + c * 13, 12 + r * 16]);
  return (
    <svg viewBox="0 0 150 70" className="h-full w-full" aria-hidden>
      {s.filter(([x]) => x === 36).map(([x, y]) =>
        [[82, 20], [82, 48]].map(([ax, ay]) => (
          <line key={`${y}-${ay}`} x1={x + 4} y1={y} x2={ax - 7} y2={ay} stroke="#121212" strokeWidth="0.6" opacity="0.35" />
        ))
      )}
      <line x1="89" y1="20" x2="122" y2="34" stroke="#121212" strokeWidth="1" />
      <line x1="89" y1="48" x2="122" y2="34" stroke="#121212" strokeWidth="1" />
      <rect x="2" y="4" width="44" height="56" fill="none" stroke="#57544c" strokeWidth="0.7" strokeDasharray="2.5 2.5" />
      {s.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.2" fill="none" stroke="#121212" strokeWidth="0.9" />
      ))}
      <circle cx="82" cy="20" r="6" fill="#faf7f1" stroke="#121212" strokeWidth="1" />
      <circle cx="82" cy="48" r="6" fill="#faf7f1" stroke="#121212" strokeWidth="1" />
      <circle cx="127" cy="34" r="7" fill="#121212" />
      <line x1="134" y1="34" x2="147" y2="34" stroke="#121212" strokeWidth="1" />
    </svg>
  );
}

const moodCards = [
  {
    slug: "calm",
    name: "Calm",
    img: "/refs/calm/botanical-plate.jpg",
    alt: "Botanical plate",
    swatches: ["#f4f1ea", "#47684c", "#dfd9c8", "#2a2a24"],
  },
  {
    slug: "arcade",
    name: "Arcade",
    img: "/refs/arcade/space-invaders-cabinet.jpg",
    alt: "Space Invaders cabinet",
    swatches: ["#0c0c12", "#c8ff00", "#ff2e88", "#16161f"],
  },
  {
    slug: "editorial",
    name: "Editorial",
    img: "/refs/editorial/perceptron-manual.jpg",
    alt: "Annotated Perceptron photograph",
    swatches: ["#faf7f1", "#121212", "#c8102e", "#ffffff"],
  },
];

export default function Hub() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:py-20">
      <header>
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-neutral-500">
          UI/UX &amp; Visual Design · MPCS 51238
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          Landmarks of AI
        </h1>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-neutral-600">
          A short field guide to the breakthroughs behind modern AI, written
          for curious readers who don&apos;t know the jargon — built as three
          visual explorations, three design systems, and one finished site.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <Link
            href="/landmarks"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Open Landmarks of AI
            <span aria-hidden>→</span>
          </Link>
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            GitHub repository ↗
          </a>
        </div>
      </header>

      {/* 1 — mood boards */}
      <section className="mt-14">
        <SectionHeading n={1} title="Mood boards" />
        <p className="mt-2 text-sm text-neutral-500">
          28–29 artifacts each: color, type, studies, and sourced archival
          references.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {moodCards.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/mood-boards/${m.slug}`}
                className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <span className="relative block h-28">
                  <Image
                    src={m.img}
                    alt={m.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </span>
                <span className="flex items-center justify-between px-4 py-3">
                  <span className="flex items-center gap-2.5">
                    <span className="flex gap-1">
                      {m.swatches.map((c) => (
                        <span
                          key={c}
                          className="h-3.5 w-3.5 rounded-full border border-black/10"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </span>
                    <span className="text-sm font-medium text-neutral-900">{m.name}</span>
                  </span>
                  <span aria-hidden className="text-neutral-400 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 2 — design systems: the same landmark, three ways */}
      <section className="mt-12">
        <SectionHeading n={2} title="Design systems" />
        <p className="mt-2 text-sm text-neutral-500">
          The same entry — AlphaGo, 2016 — set in each system, so the
          differences are the point. Each links to the full library.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {/* Calm */}
          <li>
            <Link
              href="/design-systems/calm"
              className="theme-calm group block h-full rounded-xl border border-neutral-200 transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <span className="flex h-full flex-col gap-1.5 rounded-xl bg-[var(--bg)] p-5 text-[var(--text)]">
                <span className="text-[10px] tracking-[0.18em] uppercase text-[var(--muted)]">
                  2016 · Games
                </span>
                <span className="text-3xl [font-family:var(--font-display)]">AlphaGo</span>
                <span className="text-[12px] leading-relaxed text-[var(--muted)]">
                  Move 37 looked like a mistake. Then it looked like the future.
                </span>
                <span className="mt-auto flex items-center gap-2 pt-3" aria-hidden>
                  <span className="rounded-full bg-[var(--accent)] px-3.5 py-1.5 text-[11px] text-[var(--accent-ink)]">
                    Mark as read
                  </span>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[11px]">
                    Games
                  </span>
                </span>
                <span className="mt-3 border-t border-[var(--border)] pt-2 text-[11px] text-[var(--muted)]">
                  Calm — soft pills, one sage accent →
                </span>
              </span>
            </Link>
          </li>
          {/* Arcade */}
          <li>
            <Link
              href="/design-systems/arcade"
              className="theme-arcade group block h-full rounded-xl border border-neutral-200 transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <span className="flex h-full flex-col gap-1.5 rounded-xl bg-[var(--bg)] p-5 text-[var(--text)] [font-family:var(--font-body)]">
                <span className="text-[8px] text-[var(--accent-2)] [font-family:var(--font-display)]">
                  2016 · GAMES
                </span>
                <span className="text-xl text-[var(--accent)] [font-family:var(--font-display)] [text-shadow:0_0_12px_rgba(200,255,0,0.4)]">
                  ALPHAGO
                </span>
                <span className="text-[12px] leading-relaxed text-[var(--muted)]">
                  Move 37 looked like a mistake. Then it looked like the future.
                </span>
                <span className="mt-auto flex items-center gap-3 pt-3" aria-hidden>
                  <span className="bg-[var(--accent)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--accent-ink)] shadow-[2px_2px_0_var(--accent-2)]">
                    Mark as read
                  </span>
                  <span className="border border-[var(--border)] px-2.5 py-1.5 text-[9px] uppercase tracking-wider text-[var(--muted)]">
                    Games
                  </span>
                </span>
                <span className="mt-3 border-t border-[var(--border)] pt-2 text-[11px] text-[var(--muted)]">
                  Arcade — neon on void, hard shadows →
                </span>
              </span>
            </Link>
          </li>
          {/* Editorial */}
          <li className="relative">
            <Link
              href="/design-systems/editorial"
              className="theme-editorial group block h-full rounded-xl border-2 border-neutral-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <span className="flex h-full flex-col gap-1.5 rounded-[10px] bg-[var(--bg)] p-5 text-[var(--text)] [font-family:var(--font-body)]">
                <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
                  2016 · Games
                </span>
                <span className="text-3xl font-bold [font-family:var(--font-display)]">AlphaGo</span>
                <span className="text-[12px] leading-relaxed text-[var(--muted)]">
                  Move 37 looked like a mistake. Then it looked like the future.
                </span>
                <span className="mt-auto flex items-center gap-2 pt-3" aria-hidden>
                  <span className="bg-[#c8102e] px-3.5 py-1.5 text-[10px] tracking-[0.12em] uppercase text-white [font-family:var(--font-geist-sans)]">
                    Mark as read
                  </span>
                  <span className="border border-[var(--text)] px-3 py-1.5 text-[10px] tracking-[0.12em] uppercase [font-family:var(--font-geist-sans)]">
                    Games
                  </span>
                </span>
                <span className="mt-3 border-t border-[var(--border)] pt-2 text-[11px] text-[var(--muted)]">
                  Editorial — ink, rules, crimson for action →
                </span>
              </span>
            </Link>
            <span className="absolute -top-2 right-3 bg-neutral-900 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
              Selected direction
            </span>
          </li>
        </ul>
        <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-neutral-500">
          Editorial was selected because the site is long-form historical
          reading: serif hierarchy and hairline rules carry chronology the way
          a broadsheet carries news, and rationing red to actions keeps
          seventeen stories calm to scan.
        </p>
      </section>

      {/* 3 — the site, previewed in its own system */}
      <section className="mt-12">
        <SectionHeading n={3} title="Your site" />
        <Link
          href="/landmarks"
          className="theme-editorial group mt-4 block rounded-xl border border-neutral-200 transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <span className="block rounded-xl bg-[var(--bg)] px-6 py-6 text-[var(--text)] [font-family:var(--font-body)] sm:px-8">
            <span className="block border-b-2 border-[var(--border)] pb-4 text-center">
              <span className="block text-[9px] tracking-[0.25em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
                A field guide · covers 1958 — 2025
              </span>
              <span className="mt-1 block text-3xl font-bold tracking-tight [font-family:var(--font-display)]">
                Landmarks of AI
              </span>
            </span>
            <span className="mt-4 grid grid-cols-[56px_1fr] items-baseline gap-4 sm:grid-cols-[180px_72px_1fr]">
              <span className="relative hidden h-24 self-center border border-[var(--border)] bg-[var(--surface)] p-1 sm:block">
                <MiniPerceptron />
              </span>
              <span className="text-2xl font-bold text-[var(--muted)] [font-family:var(--font-display)]">
                1958
              </span>
              <span>
                <span className="block text-[9px] font-semibold tracking-[0.25em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
                  Foundations · Cornell Aeronautical Laboratory
                </span>
                <span className="mt-0.5 block text-lg font-bold [font-family:var(--font-display)]">
                  The Perceptron
                </span>
                <span className="block text-[12px] leading-relaxed text-[var(--muted)]">
                  A machine that learned from examples — and a press conference
                  that promised it would one day be conscious.
                </span>
                <span className="mt-1.5 block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#c8102e] [font-family:var(--font-geist-sans)]">
                  Read story →
                </span>
              </span>
            </span>
            <span className="mt-4 block border-t border-[var(--border)] pt-2 text-center text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
              17 entries · 5 eras · illustrated stories · reading progress
              resets on refresh
            </span>
          </span>
        </Link>
      </section>

      {/* provenance */}
      <section className="mt-14 border-t border-neutral-200 pt-8">
        <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
          From board to system to site
        </h2>
        <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-neutral-600">
          <li>
            <strong className="font-medium text-neutral-900">Publication rules became structure.</strong>{" "}
            The 1912 Tribune on the Editorial board separates chaos with rules
            and columns — the system&apos;s only dividers; no boxes, no shadows.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">The annotated archive became the figures.</strong>{" "}
            The Perceptron manual&apos;s leader-line photograph is the anatomy the
            site&apos;s three archival figures follow — labels, captions, plain ink.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">One red became an accent policy.</strong>{" "}
            A front page spends red on one thing; here crimson appears only on
            the primary action, the “Read story” cue, and the focus ring.
          </li>
        </ul>
      </section>

      {/* process */}
      <section className="mt-10 border-t border-neutral-200 pt-8">
        <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
          Process notes
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-[13px] leading-relaxed text-neutral-600">
          <li>
            <strong className="font-medium text-neutral-900">First browser review.</strong>{" "}
            A Playwright pass at 390px and 1440px caught invisible swatches and
            low-contrast labels — fixed before first deployment.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Design review → accent policy.</strong>{" "}
            Crimson had leaked into metadata while the real primary action was
            black; the revision reserves crimson for actions.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Content audit.</strong>{" "}
            Every entry re-verified against primary sources, with corrections
            recorded in{" "}
            <a
              href={`${REPO}/blob/main/SOURCES.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-neutral-900"
            >
              SOURCES.md ↗
            </a>
            .
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Accessibility rework.</strong>{" "}
            Native dialog with focus trapped and returned, radiogroup filters,
            reduced-motion support.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Author review → this visual refinement.</strong>{" "}
            After reviewing the deployed site, the author asked for stronger
            visuals; this pass added sourced archival references (credits in{" "}
            <a
              href={`${REPO}/blob/main/ATTRIBUTIONS.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-neutral-900"
            >
              ATTRIBUTIONS.md ↗
            </a>
            ), this hub, a beginner-friendly copy pass, and the unified figure
            series. Implementation choices were the agent&apos;s; the result awaits
            the author&apos;s review.
          </li>
        </ol>

        <figure className="mt-5">
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                Before — crimson metadata
              </p>
              <a href="/process/row-before-full.png" target="_blank" rel="noopener" title="Open full size">
                <Image
                  src="/process/detail-before.png"
                  alt="Close-up of an earlier timeline row: the category and organization label is set in crimson."
                  width={640}
                  height={190}
                  className="rounded-md border border-neutral-200"
                />
              </a>
            </div>
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                After — ink metadata, crimson read cue
              </p>
              <a href="/process/row-after-full.png" target="_blank" rel="noopener" title="Open full size">
                <Image
                  src="/process/detail-after.png"
                  alt="The same row revised: metadata in muted ink, with a small crimson Read story cue below the summary."
                  width={640}
                  height={220}
                  className="rounded-md border border-neutral-200"
                />
              </a>
            </div>
          </div>
          <figcaption className="mt-2 text-[12px] text-neutral-500">
            The exact changed detail, from the verification screenshots — click
            either image for the full-size region. More context in{" "}
            <a
              href={`${REPO}/tree/main/docs`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-neutral-900"
            >
              docs/ ↗
            </a>
            .
          </figcaption>
        </figure>

        <p className="mt-4 max-w-lg text-[12px] leading-relaxed text-neutral-400">
          Honestly divided: the topic, the three styles, the Editorial
          direction, and the call for stronger visuals were the author&apos;s; the
          specific solutions were the agent&apos;s, verified by agent-driven
          Playwright runs — which are checks, not human testing.
        </p>
      </section>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-400">
        <span>Design, Build, Ship · Autumn 2026 · Anees Amjad</span>
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-neutral-900"
        >
          GitHub ↗
        </a>
      </footer>
    </main>
  );
}
