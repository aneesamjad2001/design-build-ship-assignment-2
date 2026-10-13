import Link from "next/link";

const moods = [
  {
    slug: "calm",
    name: "Calm",
    swatches: ["#f4f1ea", "#47684c", "#dfd9c8", "#2a2a24"],
  },
  {
    slug: "arcade",
    name: "Arcade",
    swatches: ["#0c0c12", "#c8ff00", "#ff2e88", "#16161f"],
  },
  {
    slug: "editorial",
    name: "Editorial",
    swatches: ["#faf7f1", "#121212", "#c8102e", "#ffffff"],
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
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-neutral-600">
          Three moods, three design systems, one site: a field guide to the
          models that changed everything.
        </p>
      </header>

      <section className="mt-12">
        <SectionHeading n={1} title="Mood boards" />
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {moods.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/mood-boards/${m.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3.5 transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
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
          Each one built from its mood board.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {moods.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/design-systems/${m.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3.5 transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <span className="flex items-center gap-3">
                  <span className="font-serif text-base text-neutral-900">
                    Aa
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
            </li>
          ))}
        </ul>
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
      </section>

      <footer className="mt-16 border-t border-neutral-200 pt-6 text-xs text-neutral-400">
        Design, Build, Ship · Autumn 2026 · Anees Amjad
      </footer>
    </main>
  );
}
