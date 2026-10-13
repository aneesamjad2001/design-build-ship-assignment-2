import type { Metadata } from "next";
import { Shell, Section, Stage, ColorRole, SpacingScale } from "../ui";

export const metadata: Metadata = {
  title: "Calm — Design System",
};

/* Calm: soft pill shapes, generous air, one sage accent, no shadows —
   a thin warm border instead. */

const btn =
  "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm transition-colors";
const btnPrimary = `${btn} bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[#3a5740] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:bg-[#2f4734]`;
const btnSecondary = `${btn} border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:bg-[var(--border)]`;
const field =
  "rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)]";

export default function CalmSystem() {
  return (
    <Shell
      theme="theme-calm"
      name="Calm"
      blurb="Soft pill shapes, generous air, one sage accent. No shadows — a thin warm border does the separating."
    >
      <Section n={1} title="Color roles" note="Ratios are WCAG contrast against the background.">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          <ColorRole hex="#f4f1ea" role="Background" border />
          <ColorRole hex="#fdfbf6" role="Surface" border />
          <ColorRole hex="#2a2a24" role="Text" ratio="12.8:1" />
          <ColorRole hex="#6e6c5e" role="Muted" ratio="4.7:1" />
          <ColorRole hex="#dfd9c8" role="Border" border />
          <ColorRole hex="#47684c" role="Accent" ratio="5.6:1" />
        </div>
      </Section>

      <Section n={2} title="Type roles" note="Fraunces for display and headings; Geist for body and labels.">
        <div className="flex flex-col gap-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <div>
            <p className="text-6xl [font-family:var(--font-display)]">1958</p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Display · Fraunces 60/1.1 · regular</p>
          </div>
          <div>
            <p className="text-2xl [font-family:var(--font-display)]">The Scaling Era</p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Heading · Fraunces 24/1.2 · regular</p>
          </div>
          <div>
            <p className="max-w-md text-[15px] leading-relaxed">
              AlexNet dropped ImageNet&apos;s top-5 error from 26 to 15 percent, and
              a field that had spent decades arguing about features stopped
              arguing.
            </p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Body · Geist 15/1.6 · regular</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--muted)]">
              Milestone
            </p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Label · Geist 12/1.3 · semibold, tracked caps</p>
          </div>
        </div>
      </Section>

      <Section
        n={3}
        title="Spacing and shape"
        note="Spacing scale in px · pill and 10px corners · no shadow, a thin warm border instead."
      >
        <div className="flex flex-wrap items-end gap-10">
          <SpacingScale />
          <div className="flex items-end gap-3">
            {[
              { r: "0px", label: "0" },
              { r: "10px", label: "10" },
              { r: "999px", label: "pill" },
            ].map((c) => (
              <figure key={c.label} className="flex flex-col items-center gap-1.5">
                <div
                  className="h-12 w-16 border border-[var(--border)] bg-[var(--surface)]"
                  style={{ borderRadius: c.r }}
                />
                <figcaption className="text-[10px] text-[var(--muted)]">{c.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <Section n={4} title="Components" note="Everything the Landmarks site needs, in Calm.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stage label="buttons · primary / secondary">
            <div className="flex gap-3">
              <button className={btnPrimary}>Read entry</button>
              <button className={btnSecondary}>All eras</button>
            </div>
          </Stage>
          <Stage label="link">
            <a
              href="#"
              className="text-sm text-[var(--accent)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)]"
            >
              See the full timeline →
            </a>
          </Stage>
          <Stage label="text input">
            <input type="text" placeholder="Search landmarks" className={field} />
          </Stage>
          <Stage label="select">
            <select className={field} defaultValue="chron">
              <option value="chron">Sort: Chronological</option>
              <option value="impact">Sort: Impact</option>
            </select>
          </Stage>
          <Stage label="checkboxes">
            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-[var(--accent)]" />
                Language models
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-[var(--accent)]" />
                Vision
              </label>
            </div>
          </Stage>
          <Stage label="radios">
            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="calm-view" defaultChecked className="h-4 w-4 accent-[var(--accent)]" />
                Timeline view
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="calm-view" className="h-4 w-4 accent-[var(--accent)]" />
                Grid view
              </label>
            </div>
          </Stage>
          <Stage label="toggle · on / off">
            <div className="flex items-center gap-5">
              <span className="flex h-7 w-12 items-center rounded-full bg-[var(--accent)] px-1">
                <span className="ml-auto h-5 w-5 rounded-full bg-[var(--surface)]" />
              </span>
              <span className="flex h-7 w-12 items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-1">
                <span className="h-5 w-5 rounded-full bg-[var(--border)]" />
              </span>
            </div>
          </Stage>
          <Stage label="tabs">
            <div className="flex gap-5 border-b border-[var(--border)] text-sm">
              <span className="border-b-2 border-[var(--accent)] pb-2 font-medium">Timeline</span>
              <span className="pb-2 text-[var(--muted)]">Eras</span>
              <span className="pb-2 text-[var(--muted)]">About</span>
            </div>
          </Stage>
          <Stage label="filter chips">
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="rounded-full bg-[var(--accent)] px-3 py-1.5 text-[var(--accent-ink)]">All</span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">Language</span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">Games</span>
            </div>
          </Stage>
          <Stage label="card" className="sm:col-span-2 lg:col-span-1">
            <div className="w-full max-w-[260px] rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] p-4">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[var(--muted)]">2017 · Google Brain</p>
              <p className="mt-1 [font-family:var(--font-display)] text-lg leading-snug">
                Attention Is All You Need
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">
                The transformer replaced recurrence with attention — and became
                the substrate for everything after.
              </p>
              <span className="mt-3 inline-block rounded-full border border-[var(--accent)] px-2.5 py-0.5 text-[11px] text-[var(--accent)]">
                Paradigm shift
              </span>
            </div>
          </Stage>
          <Stage label="list rows">
            <ul className="w-full max-w-[260px] divide-y divide-[var(--border)] text-sm">
              {[
                ["AlexNet", "2012"],
                ["AlphaGo", "2016"],
                ["GPT-3", "2020"],
              ].map(([name, year]) => (
                <li key={name} className="flex justify-between py-2">
                  <span>{name}</span>
                  <span className="text-[var(--muted)]">{year}</span>
                </li>
              ))}
            </ul>
          </Stage>
          <Stage label="badge">
            <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[11px] text-[var(--accent)]">
              Nobel-cited
            </span>
          </Stage>
          <Stage label="detail panel (modal)" className="sm:col-span-2">
            <div className="w-full max-w-sm rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[var(--muted)]">2016 · DeepMind</p>
                  <p className="[font-family:var(--font-display)] text-xl">AlphaGo</p>
                </div>
                <button aria-label="Close" className="rounded-full px-2 text-[var(--muted)] hover:text-[var(--text)]">
                  ×
                </button>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                Move 37 looked like a mistake for about three minutes. Then it
                looked like the future.
              </p>
              <div className="mt-4 flex gap-3">
                <button className={btnPrimary}>Read entry</button>
                <button className={btnSecondary}>Close</button>
              </div>
            </div>
          </Stage>
        </div>
      </Section>

      <Section n={5} title="Control states" note="The primary button, in every state it can be in.">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          <Stage label="rest">
            <span className={`${btn} bg-[var(--accent)] text-[var(--accent-ink)]`}>Read</span>
          </Stage>
          <Stage label="hover">
            <span className={`${btn} bg-[#3a5740] text-[var(--accent-ink)]`}>Read</span>
          </Stage>
          <Stage label="focus">
            <span className={`${btn} bg-[var(--accent)] text-[var(--accent-ink)] outline-2 outline-offset-2 outline-[var(--accent)]`}>
              Read
            </span>
          </Stage>
          <Stage label="pressed">
            <span className={`${btn} bg-[#2f4734] text-[var(--accent-ink)]`}>Read</span>
          </Stage>
          <Stage label="selected">
            <span className={`${btn} border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]`}>
              ✓ Read
            </span>
          </Stage>
          <Stage label="disabled">
            <span className={`${btn} bg-[var(--border)] text-[var(--muted)]`}>Read</span>
          </Stage>
        </div>
      </Section>

      <Section n={6} title="UI states">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stage label="empty">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-[var(--muted)] text-[var(--muted)]">·</span>
              <span className="text-xs text-[var(--muted)]">No landmarks match.</span>
            </div>
          </Stage>
          <Stage label="loading">
            <div className="flex flex-col items-center gap-1.5 py-2">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]" />
              <span className="text-xs text-[var(--muted)]">Loading timeline…</span>
            </div>
          </Stage>
          <Stage label="error">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8a3b2e]/10 text-sm text-[#8a3b2e]">!</span>
              <span className="text-xs text-[#8a3b2e]">Couldn’t load the archive.</span>
            </div>
          </Stage>
          <Stage label="success">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)]/10 text-sm text-[var(--accent)]">✓</span>
              <span className="text-xs text-[var(--accent)]">Saved to your list.</span>
            </div>
          </Stage>
        </div>
      </Section>
    </Shell>
  );
}
