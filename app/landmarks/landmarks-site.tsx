"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Modal from "../lib/Modal";
import { ILLUSTRATIONS } from "./illustrations";
import {
  CATEGORIES,
  ERAS,
  LANDMARKS,
  type Category,
  type Landmark,
} from "./data";

type Filter = "All" | Category;
const FILTERS: Filter[] = ["All", ...CATEGORIES];

/* Editorial accent policy (documented in /design-systems/editorial):
   crimson appears only as an action signal — the primary button, the
   per-row "Read story" cue, and the focus ring. Metadata, categories,
   badges, and section labels are ink or muted gray. Selected filters are
   a neutral ink fill. */

const label =
  "text-[10px] font-semibold tracking-[0.25em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]";
const cue =
  "text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--accent)] [font-family:var(--font-geist-sans)]";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";
const btnPrimary = `inline-flex min-h-10 items-center justify-center gap-2 bg-[var(--accent)] px-5 py-2 text-xs tracking-[0.12em] uppercase text-[var(--accent-ink)] transition-colors hover:bg-[#a60d26] active:bg-[#8d0b20] ${focusRing} [font-family:var(--font-geist-sans)]`;
const btnSecondary = `inline-flex min-h-10 items-center justify-center gap-2 border border-[var(--text)] px-5 py-2 text-xs tracking-[0.12em] uppercase text-[var(--text)] transition-colors hover:bg-[var(--text)]/5 ${focusRing} [font-family:var(--font-geist-sans)]`;

const START_YEAR = Math.min(...LANDMARKS.map((l) => l.year));
const END_YEAR = Math.max(...LANDMARKS.map((l) => l.endYear ?? l.year));

export default function LandmarksSite() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Landmark | null>(null);
  const [read, setRead] = useState<Set<string>>(new Set());
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const visible = LANDMARKS.filter(
    (l) => filter === "All" || l.category === filter
  );
  const selectedIndex = selected
    ? visible.findIndex((l) => l.id === selected.id)
    : -1;
  const prev = selectedIndex > 0 ? visible[selectedIndex - 1] : null;
  const next =
    selectedIndex >= 0 && selectedIndex < visible.length - 1
      ? visible[selectedIndex + 1]
      : null;

  const toggleRead = (id: string) =>
    setRead((r) => {
      const nextSet = new Set(r);
      if (nextSet.has(id)) nextSet.delete(id);
      else nextSet.add(id);
      return nextSet;
    });

  /* Single-select filter → radiogroup semantics with roving tabindex. */
  const onChipKeyDown = (e: React.KeyboardEvent) => {
    const i = FILTERS.indexOf(filter);
    let target = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown")
      target = (i + 1) % FILTERS.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      target = (i - 1 + FILTERS.length) % FILTERS.length;
    else if (e.key === "Home") target = 0;
    else if (e.key === "End") target = FILTERS.length - 1;
    if (target >= 0) {
      e.preventDefault();
      setFilter(FILTERS[target]);
      chipRefs.current[target]?.focus();
    }
  };

  const Illustration = selected ? ILLUSTRATIONS[selected.id] : undefined;

  return (
    <div className="theme-editorial min-h-screen bg-[var(--bg)] text-[var(--text)] [font-family:var(--font-body)]">
      <main className="mx-auto w-full max-w-3xl px-4 pb-20 pt-8">
        {/* Masthead */}
        <header className="border-b-2 border-[var(--border)]">
          <div className="flex items-baseline justify-between text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
            <Link href="/" className={`hover:text-[var(--text)] ${focusRing}`}>
              ← Hub
            </Link>
            <span>
              Covers {START_YEAR} — {END_YEAR}
            </span>
          </div>
          <div className="py-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight [font-family:var(--font-display)] sm:text-6xl">
              Landmarks of AI
            </h1>
            <p className="mt-3 text-[16px] italic text-[var(--muted)]">
              A short field guide to the breakthroughs behind modern AI.
            </p>
            <p className="mt-1.5 text-[13px] text-[var(--muted)]">
              Machines, methods, datasets, and products — no jargon assumed.
              Read in order, or pull one thread.
            </p>
          </div>
          <p
            aria-live="polite"
            className="border-t border-[var(--border)] py-2 text-center text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]"
          >
            Showing {visible.length} of {LANDMARKS.length}
            {filter !== "All" ? ` · ${filter}` : ""} · {read.size} of{" "}
            {LANDMARKS.length} read
          </p>
        </header>

        {/* Filters — single selection, radio semantics */}
        <div
          role="radiogroup"
          aria-label="Filter landmarks by category"
          className="mt-8 flex flex-wrap gap-2"
          onKeyDown={onChipKeyDown}
        >
          {FILTERS.map((c, i) => {
            const active = filter === c;
            return (
              <button
                key={c}
                ref={(el) => {
                  chipRefs.current[i] = el;
                }}
                role="radio"
                aria-checked={active}
                tabIndex={active ? 0 : -1}
                onClick={() => setFilter(c)}
                className={`min-h-10 border px-3.5 py-2 text-[11px] tracking-[0.12em] uppercase transition-colors ${focusRing} [font-family:var(--font-geist-sans)] ${
                  active
                    ? "border-[var(--text)] bg-[var(--text)] text-[var(--surface)]"
                    : "border-[var(--text)] bg-transparent text-[var(--text)] hover:bg-[var(--text)]/5"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        {visible.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-2xl [font-family:var(--font-display)]">∅</p>
            <p className="mt-2 text-sm italic text-[var(--muted)]">
              Nothing matches this filter.
            </p>
            <button onClick={() => setFilter("All")} className={`mt-4 ${btnSecondary}`}>
              Show all {LANDMARKS.length}
            </button>
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
                  {entries.map((l) => {
                    const isRead = read.has(l.id);
                    return (
                      <li key={l.id} className="border-b border-[var(--border)]">
                        <button
                          onClick={() => setSelected(l)}
                          aria-haspopup="dialog"
                          className={`group grid w-full grid-cols-[64px_1fr] items-baseline gap-4 py-5 text-left transition-colors hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--accent)] sm:grid-cols-[96px_1fr]`}
                        >
                          <span className="text-2xl font-bold text-[var(--muted)] [font-family:var(--font-display)] sm:text-3xl">
                            {l.yearLabel ?? l.year}
                          </span>
                          <span>
                            <span className={label}>
                              {l.category} · {l.org}
                            </span>
                            <span className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                              <span className="text-xl font-bold leading-tight [font-family:var(--font-display)] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4 sm:text-2xl">
                                {l.name}
                              </span>
                              {l.badge && (
                                <span className="border border-[var(--text)] px-1.5 py-0.5 text-[9px] tracking-[0.15em] uppercase [font-family:var(--font-geist-sans)]">
                                  {l.badge}
                                </span>
                              )}
                              {isRead && (
                                <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
                                  ✓ Read
                                </span>
                              )}
                            </span>
                            <span className="mt-1.5 block max-w-xl text-[14px] leading-relaxed text-[var(--muted)]">
                              {l.oneliner}
                            </span>
                            <span className={`mt-2 block ${cue}`}>
                              Read story →
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })
        )}

        {/* Footer */}
        <footer className="mt-16 border-t-2 border-[var(--border)] pt-4 text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
            Written &amp; designed by Anees Amjad · Chicago · MPCS 51238,
            Autumn 2026
          </p>
          <p className="mt-2 text-[11px] italic text-[var(--muted)]">
            Reading progress lives in memory only — it resets when the page
            reloads. Sources for every entry are linked in its story.
          </p>
        </footer>
      </main>

      {/* Detail panel — native <dialog>, right side on desktop, full-screen on mobile */}
      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        label={selected ? `${selected.name}, ${selected.yearLabel ?? selected.year}` : "Landmark"}
        className="panel panel-right theme-editorial"
      >
        {selected && (
          <div className="panel-body ml-auto h-full w-full overflow-y-auto border-l-2 border-[#121212] bg-[#ffffff] text-[#121212] [font-family:var(--font-body)] sm:w-[480px]">
            {/* Sticky top bar keeps the close control reachable on mobile */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#121212]/15 bg-[#ffffff] px-6 py-3 sm:px-8">
              <p className={label}>
                {selected.category} · {selected.kind}
              </p>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close story"
                className={`flex h-10 w-10 items-center justify-center text-xl leading-none text-[var(--muted)] transition-colors hover:text-[var(--text)] ${focusRing}`}
              >
                ×
              </button>
            </div>

            <div className="px-6 pb-8 sm:px-8">
              <p className="mt-5 text-6xl font-bold [font-family:var(--font-display)]">
                {selected.yearLabel ?? selected.year}
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight [font-family:var(--font-display)]">
                {selected.name}
              </h2>
              <p className={`mt-2 ${label}`}>{selected.org}</p>
              {selected.badge && (
                <span className="mt-3 inline-block border border-[var(--text)] px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase [font-family:var(--font-geist-sans)]">
                  {selected.badge}
                </span>
              )}

              <div className="mt-5 space-y-4 text-[15px] leading-relaxed">
                {selected.story.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {Illustration && <Illustration />}

              <div className="mt-6 border-t-2 border-[var(--border)] pt-4">
                <p className={label}>Why it mattered</p>
                <p className="mt-2 text-[15px] italic leading-relaxed">
                  {selected.why}
                </p>
              </div>

              <div className="mt-6">
                <p className={label}>Sources</p>
                <ul className="mt-2 space-y-1.5">
                  {selected.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[13px] underline decoration-[var(--text)]/40 underline-offset-4 transition-colors hover:decoration-[var(--text)] ${focusRing}`}
                      >
                        {s.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[12px] italic text-[var(--muted)]">
                  {selected.citation}
                </p>
              </div>

              <div className="mt-7 flex items-center gap-3">
                {read.has(selected.id) ? (
                  <button
                    onClick={() => toggleRead(selected.id)}
                    aria-pressed="true"
                    className={btnSecondary}
                  >
                    ✓ Read · undo
                  </button>
                ) : (
                  <button
                    onClick={() => toggleRead(selected.id)}
                    aria-pressed="false"
                    className={btnPrimary}
                  >
                    Mark as read
                  </button>
                )}
              </div>

              {/* Previous / next follow the currently filtered list */}
              <div className="mt-7 flex items-stretch justify-between gap-3 border-t border-[var(--border)] pt-4">
                <button
                  onClick={() => prev && setSelected(prev)}
                  disabled={!prev}
                  className={`max-w-[46%] text-left text-[13px] leading-snug transition-colors ${focusRing} ${
                    prev
                      ? "text-[var(--text)] hover:underline"
                      : "cursor-default text-[var(--muted)]/50"
                  }`}
                >
                  <span className={`${label} block`}>← Previous</span>
                  {prev && (
                    <span className="[font-family:var(--font-display)] font-bold">
                      {prev.name}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => next && setSelected(next)}
                  disabled={!next}
                  className={`max-w-[46%] text-right text-[13px] leading-snug transition-colors ${focusRing} ${
                    next
                      ? "text-[var(--text)] hover:underline"
                      : "cursor-default text-[var(--muted)]/50"
                  }`}
                >
                  <span className={`${label} block`}>Next →</span>
                  {next && (
                    <span className="[font-family:var(--font-display)] font-bold">
                      {next.name}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
