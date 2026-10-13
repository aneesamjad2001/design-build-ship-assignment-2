import type { Metadata } from "next";
import { Shell, Section, Stage, ColorRole, SpacingScale } from "../ui";

export const metadata: Metadata = {
  title: "Arcade — Design System",
};

/* Arcade: sharp 4px corners, hard offset shadows instead of soft ones,
   acid-lime primary with magenta as the second player. */

const btn =
  "inline-flex items-center justify-center rounded-[var(--radius)] px-4 py-2 text-xs uppercase tracking-wider transition-transform";
const btnPrimary = `${btn} bg-[var(--accent)] text-[var(--accent-ink)] font-semibold shadow-[3px_3px_0_var(--accent-2)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:translate-y-0.5 active:shadow-none`;
const btnSecondary = `${btn} border border-[var(--accent)] bg-transparent text-[var(--accent)] hover:bg-[var(--accent)]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:translate-y-0.5`;
const field =
  "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-3.5 py-2 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)]";

export default function ArcadeSystem() {
  return (
    <Shell
      theme="theme-arcade"
      name="Arcade"
      blurb="Sharp corners, hard offset shadows, acid lime as player one and magenta as player two. Everything glows a little."
    >
      <Section n={1} title="Color roles" note="Ratios are WCAG contrast against the background.">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-7">
          <ColorRole hex="#0c0c12" role="Background" border />
          <ColorRole hex="#16161f" role="Surface" border />
          <ColorRole hex="#f2f2f7" role="Text" ratio="17.5:1" />
          <ColorRole hex="#9fa0b5" role="Muted" ratio="7.6:1" />
          <ColorRole hex="#2b2b3b" role="Border" border />
          <ColorRole hex="#c8ff00" role="Accent" ratio="16.5:1" />
          <ColorRole hex="#ff2e88" role="Accent 2" ratio="5.6:1" />
        </div>
      </Section>

      <Section n={2} title="Type roles" note="Press Start 2P for display and labels; Space Grotesk for everything you actually read.">
        <div className="flex flex-col gap-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <div>
            <p className="text-4xl text-[var(--accent)] [font-family:var(--font-display)] [text-shadow:0_0_16px_rgba(200,255,0,0.45)]">
              1958
            </p>
            <p className="mt-2 text-[11px] text-[var(--muted)]">Display · Press Start 2P 36/1.2</p>
          </div>
          <div>
            <p className="text-xl font-semibold uppercase tracking-wide">The Scaling Era</p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Heading · Space Grotesk 20/1.3 · semibold caps</p>
          </div>
          <div>
            <p className="max-w-md text-[15px] leading-relaxed">
              AlexNet dropped ImageNet&apos;s top-5 error from 26 to 15 percent, and
              a field that had spent decades arguing about features stopped
              arguing.
            </p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Body · Space Grotesk 15/1.6 · regular</p>
          </div>
          <div>
            <p className="text-[10px] text-[var(--accent-2)] [font-family:var(--font-display)]">MILESTONE</p>
            <p className="mt-2 text-[11px] text-[var(--muted)]">Label · Press Start 2P 10/1.3</p>
          </div>
        </div>
      </Section>

      <Section
        n={3}
        title="Spacing and shape"
        note="Spacing scale in px · 4px corners only · shadows are hard offsets, never blurred."
      >
        <div className="flex flex-wrap items-end gap-10">
          <SpacingScale />
          <div className="flex items-end gap-3">
            <figure className="flex flex-col items-center gap-1.5">
              <div className="h-12 w-16 rounded-[4px] border border-[var(--border)] bg-[var(--surface)]" />
              <figcaption className="text-[10px] text-[var(--muted)]">4px</figcaption>
            </figure>
            <figure className="flex flex-col items-center gap-1.5">
              <div className="h-12 w-16 rounded-[4px] bg-[var(--surface)] shadow-[4px_4px_0_var(--accent)]" />
              <figcaption className="text-[10px] text-[var(--muted)]">hard shadow</figcaption>
            </figure>
            <figure className="flex flex-col items-center gap-1.5">
              <div className="h-12 w-16 rounded-[4px] border border-[var(--accent-2)] bg-[var(--surface)] shadow-[0_0_14px_rgba(255,46,136,0.45)]" />
              <figcaption className="text-[10px] text-[var(--muted)]">glow</figcaption>
            </figure>
          </div>
        </div>
      </Section>

      <Section n={4} title="Components" note="Everything the Landmarks site needs, in Arcade.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stage label="buttons · primary / secondary">
            <div className="flex gap-4">
              <button className={btnPrimary}>Read entry</button>
              <button className={btnSecondary}>All eras</button>
            </div>
          </Stage>
          <Stage label="link">
            <a href="#" className="text-sm text-[var(--accent)] underline underline-offset-4 hover:text-[var(--accent-2)]">
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
                <input type="radio" name="arc-view" defaultChecked className="h-4 w-4 accent-[var(--accent)]" />
                Timeline view
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="arc-view" className="h-4 w-4 accent-[var(--accent)]" />
                Grid view
              </label>
            </div>
          </Stage>
          <Stage label="toggle · on / off">
            <div className="flex items-center gap-5">
              <span className="flex h-6 w-12 items-center rounded-[var(--radius)] border border-[var(--accent)] bg-[var(--accent)]/15 px-0.5">
                <span className="ml-auto h-4 w-4 bg-[var(--accent)]" />
              </span>
              <span className="flex h-6 w-12 items-center rounded-[var(--radius)] border border-[var(--border)] px-0.5">
                <span className="h-4 w-4 bg-[var(--muted)]" />
              </span>
            </div>
          </Stage>
          <Stage label="tabs">
            <div className="flex gap-1 rounded-[var(--radius)] border border-[var(--border)] p-1 text-xs uppercase tracking-wider">
              <span className="rounded-[2px] bg-[var(--accent)] px-3 py-1.5 font-semibold text-[var(--accent-ink)]">
                Timeline
              </span>
              <span className="px-3 py-1.5 text-[var(--muted)]">Eras</span>
              <span className="px-3 py-1.5 text-[var(--muted)]">About</span>
            </div>
          </Stage>
          <Stage label="filter chips">
            <div className="flex flex-wrap justify-center gap-2 text-xs uppercase tracking-wider">
              <span className="rounded-[var(--radius)] bg-[var(--accent)] px-3 py-1.5 font-semibold text-[var(--accent-ink)]">All</span>
              <span className="rounded-[var(--radius)] border border-[var(--border)] px-3 py-1.5 text-[var(--muted)]">Language</span>
              <span className="rounded-[var(--radius)] border border-[var(--border)] px-3 py-1.5 text-[var(--muted)]">Games</span>
            </div>
          </Stage>
          <Stage label="card" className="sm:col-span-2 lg:col-span-1">
            <div className="w-full max-w-[260px] rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] p-4 shadow-[4px_4px_0_var(--accent)]">
              <p className="text-[9px] text-[var(--accent-2)] [font-family:var(--font-display)]">2017 · GOOGLE BRAIN</p>
              <p className="mt-2 text-base font-semibold leading-snug">Attention Is All You Need</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">
                The transformer replaced recurrence with attention — and became
                the substrate for everything after.
              </p>
              <span className="mt-3 inline-block border border-[var(--accent-2)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--accent-2)]">
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
                  <span className="text-[var(--accent)] [font-family:var(--font-display)] text-[10px] leading-5">
                    {year}
                  </span>
                </li>
              ))}
            </ul>
          </Stage>
          <Stage label="badge">
            <span className="bg-[var(--accent-2)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              High score
            </span>
          </Stage>
          <Stage label="detail panel (modal)" className="sm:col-span-2">
            <div className="w-full max-w-sm rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-5 shadow-[0_0_24px_rgba(200,255,0,0.25)]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[9px] text-[var(--accent-2)] [font-family:var(--font-display)]">2016 · DEEPMIND</p>
                  <p className="mt-1.5 text-lg font-semibold uppercase tracking-wide">AlphaGo</p>
                </div>
                <button aria-label="Close" className="px-2 text-[var(--muted)] hover:text-[var(--accent)]">
                  ×
                </button>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                Move 37 looked like a mistake for about three minutes. Then it
                looked like the future.
              </p>
              <div className="mt-4 flex gap-4">
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
            <span className={`${btn} bg-[var(--accent)] font-semibold text-[var(--accent-ink)] shadow-[3px_3px_0_var(--accent-2)]`}>Read</span>
          </Stage>
          <Stage label="hover">
            <span className={`${btn} -translate-y-0.5 bg-[var(--accent)] font-semibold text-[var(--accent-ink)] shadow-[3px_4px_0_var(--accent-2)]`}>Read</span>
          </Stage>
          <Stage label="focus">
            <span className={`${btn} bg-[var(--accent)] font-semibold text-[var(--accent-ink)] shadow-[3px_3px_0_var(--accent-2)] outline-2 outline-offset-2 outline-[var(--accent)]`}>Read</span>
          </Stage>
          <Stage label="pressed">
            <span className={`${btn} translate-y-0.5 bg-[#a8d600] font-semibold text-[var(--accent-ink)]`}>Read</span>
          </Stage>
          <Stage label="selected">
            <span className={`${btn} border border-[var(--accent)] bg-[var(--accent)]/15 font-semibold text-[var(--accent)]`}>✓ Read</span>
          </Stage>
          <Stage label="disabled">
            <span className={`${btn} bg-[var(--border)] text-[var(--muted)]`}>Read</span>
          </Stage>
        </div>
      </Section>

      <Section n={6} title="UI states">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stage label="empty">
            <div className="flex flex-col items-center gap-2 py-2 text-center">
              <span className="text-lg text-[var(--muted)] [font-family:var(--font-display)]">?</span>
              <span className="text-xs text-[var(--muted)]">No landmarks match.</span>
            </div>
          </Stage>
          <Stage label="loading">
            <div className="flex flex-col items-center gap-2 py-2">
              <span className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-2 w-2 animate-pulse bg-[var(--accent)]"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </span>
              <span className="text-xs text-[var(--muted)]">LOADING…</span>
            </div>
          </Stage>
          <Stage label="error">
            <div className="flex flex-col items-center gap-2 py-2 text-center">
              <span className="text-sm text-[var(--accent-2)] [font-family:var(--font-display)]">!</span>
              <span className="text-xs text-[var(--accent-2)]">Couldn’t load the archive.</span>
            </div>
          </Stage>
          <Stage label="success">
            <div className="flex flex-col items-center gap-2 py-2 text-center">
              <span className="text-sm text-[var(--accent)] [font-family:var(--font-display)]">✓</span>
              <span className="text-xs text-[var(--accent)]">Saved. 1UP!</span>
            </div>
          </Stage>
        </div>
      </Section>
    </Shell>
  );
}
