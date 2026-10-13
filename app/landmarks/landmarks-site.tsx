"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CATEGORIES, ERAS, LANDMARKS, type Category, type Landmark } from "./data";

type Filter = "All" | Category;

const kicker =
  "text-[10px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)] [font-family:var(--font-geist-sans)]";
const chipBase =
  "border px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] [font-family:var(--font-geist-sans)]";
const btnPrimary =
  "inline-flex items-center justify-center bg-[var(--text)] px-5 py-2 text-xs tracking-[0.12em] uppercase text-[var(--surface)] transition-colors hover:bg-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:bg-[#8d0b20] [font-family:var(--font-geist-sans)]";

export default function LandmarksSite() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Landmark | null>(null);
  const [read, setRead] = useState<Set<string>>(new Set());
  const closeRef = useRef<HTMLButtonElement>(null);

  const visible = LANDMARKS.filter(
    (l) => filter === "All" || l.category === filter
  );
  const years = visible.map((l) => l.year);
  const range = years.length
    ? `${Math.min(...years)} — ${Math.max(...years)}`
    : "—";

  /* Detail panel: Escape closes, body scroll locks, close button takes focus. */
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const toggleRead = (id: string) =>
    setRead((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="theme-editorial min-h-screen bg-[var(--bg)] text-[var(--text)] [font-family:var(--font-body)]">
      <main className="mx-auto w-full max-w-3xl px-4 pb-20 pt-8">
        {/* Masthead */}
        <header className="border-b-2 border-[var(--border)]">
          <div className="flex items-baseline justify-between text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
            <Link
              href="/"
              className="hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              ← Hub
            </Link>
            <span>Est. 1958 · Chicago</span>
          </div>
          <div className="py-8 text-center">
            <p className={kicker}>A field guide</p>
            <h1 className="mt-2 text-5xl font-bold tracking-tight [font-family:var(--font-display)] sm:text-6xl">
              Landmarks of AI
            </h1>
            <p className="mt-3 text-[15px] italic text-[var(--muted)]">
              The models that changed everything.
            </p>
          </div>
          <div className="border-t border-[var(--border)] py-2 text-center text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
            <span aria-live="polite">
              № {visible.length} landmark{visible.length === 1 ? "" : "s"} ·{" "}
              {range}
            </span>
          </div>
        </header>

        {/* Filter chips */}
        <nav aria-label="Filter by category" className="mt-8 flex flex-wrap gap-2">
          {(["All", ...CATEGORIES] as Filter[]).map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                aria-pressed={active}
                onClick={() => setFilter(c)}
                className={`${chipBase} ${
                  active
                    ? "border-[var(--text)] bg-[var(--text)] text-[var(--surface)]"
                    : "border-[var(--text)] bg-transparent text-[var(--text)] hover:bg-[var(--text)]/5"
                }`}
              >
                {c}
              </button>
            );
          })}
        </nav>

        {/* Timeline */}
        {visible.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-2xl [font-family:var(--font-display)]">∅</p>
            <p className="mt-2 text-sm italic text-[var(--muted)]">
              Nothing in this edition.
            </p>
          </div>
        ) : (
          ERAS.map((era) => {
            const entries = visible.filter((l) => l.era === era);
            if (entries.length === 0) return null;
            return (
              <section key={era} className="mt-10">
                <h2 className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
                  {era}
                  <span className="h-px flex-1 bg-[var(--border)]" aria-hidden />
                </h2>
                <ul>
                  {entries.map((l) => (
                    <li key={l.id} className="border-b border-[var(--border)]">
                      <button
                        onClick={() => setSelected(l)}
                        className="group grid w-full grid-cols-[64px_1fr] items-baseline gap-4 py-5 text-left transition-colors hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--accent)] sm:grid-cols-[96px_1fr]"
                      >
                        <span className="text-2xl font-bold text-[var(--muted)] [font-family:var(--font-display)] group-hover:text-[var(--accent)] sm:text-3xl">
                          {l.year}
                        </span>
                        <span>
                          <span className={kicker}>
                            {l.category} · {l.org}
                          </span>
                          <span className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <span className="text-xl font-bold leading-tight [font-family:var(--font-display)] group-hover:text-[var(--accent)] sm:text-2xl">
                              {l.name}
                            </span>
                            {l.badge && (
                              <span className="border border-[var(--text)] px-1.5 py-0.5 text-[9px] tracking-[0.15em] uppercase [font-family:var(--font-geist-sans)]">
                                {l.badge}
                              </span>
                            )}
                            {read.has(l.id) && (
                              <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
                                ✓ read
                              </span>
                            )}
                          </span>
                          <span className="mt-1.5 block max-w-xl text-[14px] leading-relaxed text-[var(--muted)]">
                            {l.oneliner}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })
        )}

        {/* Footer */}
        <footer className="mt-16 border-t-2 border-[var(--border)] pt-4 text-center text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
          Set in Playfair Display &amp; Source Serif · MPCS 51238 · Autumn 2026
        </footer>
      </main>

      {/* Detail panel */}
      {selected && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setSelected(null)}
            aria-hidden
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l-2 border-[var(--border)] bg-[var(--surface)] p-6 sm:w-[460px] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <p className={kicker}>
                {selected.category} · {selected.org}
              </p>
              <button
                ref={closeRef}
                onClick={() => setSelected(null)}
                aria-label="Close detail panel"
                className="-mr-2 -mt-1.5 px-2 py-1 text-xl leading-none text-[var(--muted)] transition-colors hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              >
                ×
              </button>
            </div>

            <p className="mt-4 text-6xl font-bold [font-family:var(--font-display)]">
              {selected.year}
            </p>
            <h2 className="mt-2 text-3xl font-bold leading-tight [font-family:var(--font-display)]">
              {selected.name}
            </h2>
            {selected.badge && (
              <span className="mt-3 inline-block bg-[var(--accent)] px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-[var(--accent-ink)] [font-family:var(--font-geist-sans)]">
                {selected.badge}
              </span>
            )}

            <div className="mt-5 space-y-4 text-[15px] leading-relaxed">
              {selected.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 border-t-2 border-[var(--border)] pt-4">
              <p className={kicker}>Why it mattered</p>
              <p className="mt-2 text-[15px] italic leading-relaxed">
                {selected.why}
              </p>
            </div>

            <p className="mt-6 text-[12px] italic text-[var(--muted)]">
              {selected.citation}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {read.has(selected.id) ? (
                <button
                  onClick={() => toggleRead(selected.id)}
                  className="inline-flex items-center justify-center border border-[var(--text)] px-5 py-2 text-xs tracking-[0.12em] uppercase transition-colors hover:bg-[var(--text)]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] [font-family:var(--font-geist-sans)]"
                >
                  ✓ Read
                </button>
              ) : (
                <button onClick={() => toggleRead(selected.id)} className={btnPrimary}>
                  Mark as read
                </button>
              )}
              <button
                onClick={() => setSelected(null)}
                className="px-2 text-xs tracking-[0.12em] uppercase text-[var(--muted)] transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] [font-family:var(--font-geist-sans)]"
              >
                Close
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
