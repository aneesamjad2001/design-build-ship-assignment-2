import type { Metadata } from "next";
import { Shell, Section, Stage, ColorRole, SpacingScale } from "../ui";

export const metadata: Metadata = {
  title: "Editorial — Design System",
};

/* Editorial: square edges, hairline rules instead of boxes, ink on newsprint,
   crimson reserved strictly for the primary action and emphasis. */

const btn =
  "inline-flex items-center justify-center px-5 py-2 text-xs tracking-[0.12em] uppercase transition-colors";
const btnPrimary = `${btn} bg-[var(--text)] text-[var(--surface)] hover:bg-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:bg-[#8d0b20]`;
const btnSecondary = `${btn} border border-[var(--text)] bg-transparent text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`;
const field =
  "border-b-2 border-[var(--text)] bg-transparent px-1 py-2 text-sm text-[var(--text)] placeholder:italic placeholder:text-[var(--muted)] focus-visible:outline-none focus-visible:border-[var(--accent)]";

export default function EditorialSystem() {
  return (
    <Shell
      theme="theme-editorial"
      name="Editorial"
      blurb="Square edges and hairline rules instead of boxes. Ink on newsprint, with crimson reserved for the primary action and nothing else."
    >
      <Section n={1} title="Color roles" note="Ratios are WCAG contrast against the background.">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          <ColorRole hex="#faf7f1" role="Background" border />
          <ColorRole hex="#ffffff" role="Surface" border />
          <ColorRole hex="#121212" role="Text" ratio="17.5:1" />
          <ColorRole hex="#57544c" role="Muted" ratio="7.1:1" />
          <ColorRole hex="#121212" role="Border (rules)" />
          <ColorRole hex="#c8102e" role="Accent" ratio="5.5:1" />
        </div>
      </Section>

      <Section n={2} title="Type roles" note="Playfair Display for display and headings; Source Serif for body. Labels are the one sans moment.">
        <div className="flex flex-col gap-6 border-y-2 border-[var(--border)] bg-[var(--surface)] p-6">
          <div>
            <p className="text-6xl font-bold [font-family:var(--font-display)]">1958</p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Display · Playfair 60/1.1 · bold</p>
          </div>
          <div>
            <p className="text-2xl font-bold [font-family:var(--font-display)]">The Scaling Era</p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Heading · Playfair 24/1.2 · bold</p>
          </div>
          <div>
            <p className="max-w-md text-[16px] leading-relaxed">
              AlexNet halved the error rate on ImageNet, and a field that had
              spent decades arguing about features stopped arguing.
            </p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Body · Source Serif 16/1.65 · regular</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)] [font-family:var(--font-geist-sans)]">
              Milestone
            </p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Label · Geist 11/1.3 · semibold, tracked caps</p>
          </div>
        </div>
      </Section>

      <Section
        n={3}
        title="Spacing and shape"
        note="Spacing scale in px · no rounding anywhere · no shadows — hierarchy comes from rules and weight."
      >
        <div className="flex flex-wrap items-end gap-10">
          <SpacingScale />
          <div className="flex items-end gap-3">
            <figure className="flex flex-col items-center gap-1.5">
              <div className="h-12 w-16 border border-[var(--border)] bg-[var(--surface)]" />
              <figcaption className="text-[10px] text-[var(--muted)]">0px · hairline</figcaption>
            </figure>
            <figure className="flex flex-col items-center gap-1.5">
              <div className="h-12 w-16 border-y-2 border-[var(--border)] bg-[var(--surface)]" />
              <figcaption className="text-[10px] text-[var(--muted)]">rules, not boxes</figcaption>
            </figure>
            <figure className="flex flex-col items-center gap-1.5">
              <div className="h-12 w-16 bg-[var(--surface)] outline outline-1 outline-offset-4 outline-[var(--border)]" />
              <figcaption className="text-[10px] text-[var(--muted)]">plate frame</figcaption>
            </figure>
          </div>
        </div>
      </Section>

      <Section n={4} title="Components" note="Everything the Landmarks site needs, in Editorial.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stage label="buttons · primary / secondary">
            <div className="flex gap-3">
              <button className={btnPrimary}>Read entry</button>
              <button className={btnSecondary}>All eras</button>
            </div>
          </Stage>
          <Stage label="link">
            <a href="#" className="text-[15px] italic underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]">
              See the full timeline →
            </a>
          </Stage>
          <Stage label="text input">
            <input type="text" placeholder="Search the archive…" className={field} />
          </Stage>
          <Stage label="select">
            <select className={`${field} not-italic`} defaultValue="chron">
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
                <input type="radio" name="ed-view" defaultChecked className="h-4 w-4 accent-[var(--accent)]" />
                Timeline view
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="ed-view" className="h-4 w-4 accent-[var(--accent)]" />
                Grid view
              </label>
            </div>
          </Stage>
          <Stage label="toggle · on / off">
            <div className="flex items-center gap-5">
              <span className="flex h-6 w-12 items-center border border-[var(--text)] bg-[var(--text)] px-0.5">
                <span className="ml-auto h-4 w-4 bg-[var(--surface)]" />
              </span>
              <span className="flex h-6 w-12 items-center border border-[var(--text)] px-0.5">
                <span className="h-4 w-4 bg-[var(--text)]" />
              </span>
            </div>
          </Stage>
          <Stage label="tabs">
            <div className="flex gap-6 border-b-2 border-[var(--border)] text-sm">
              <span className="-mb-[2px] border-b-[3px] border-[var(--accent)] pb-2 font-semibold">Timeline</span>
              <span className="pb-2 italic text-[var(--muted)]">Eras</span>
              <span className="pb-2 italic text-[var(--muted)]">About</span>
            </div>
          </Stage>
          <Stage label="filter chips">
            <div className="flex flex-wrap justify-center gap-2 text-[11px] tracking-[0.12em] uppercase">
              <span className="bg-[var(--text)] px-3 py-1.5 text-[var(--surface)]">All</span>
              <span className="border border-[var(--text)] px-3 py-1.5">Language</span>
              <span className="border border-[var(--text)] px-3 py-1.5">Games</span>
            </div>
          </Stage>
          <Stage label="card" className="sm:col-span-2 lg:col-span-1">
            <div className="w-full max-w-[270px] border-y-2 border-[var(--border)] bg-[var(--surface)] px-1 py-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--accent)] [font-family:var(--font-geist-sans)]">
                2017 · Google Brain
              </p>
              <p className="mt-1.5 text-xl font-bold leading-tight [font-family:var(--font-display)]">
                Attention Is All You Need
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">
                The transformer replaced recurrence with attention — and became
                the substrate for everything after.
              </p>
              <span className="mt-3 inline-block border border-[var(--text)] px-2 py-0.5 text-[10px] tracking-[0.15em] uppercase">
                Paradigm shift
              </span>
            </div>
          </Stage>
          <Stage label="list rows (index)">
            <ul className="w-full max-w-[260px] text-sm">
              {[
                ["AlexNet", "2012"],
                ["AlphaGo", "2016"],
                ["GPT-3", "2020"],
              ].map(([name, year]) => (
                <li key={name} className="flex items-baseline gap-2 py-2">
                  <span className="font-semibold [font-family:var(--font-display)]">{name}</span>
                  <span className="flex-1 border-b border-dotted border-[var(--muted)]" />
                  <span className="text-[var(--muted)]">{year}</span>
                </li>
              ))}
            </ul>
          </Stage>
          <Stage label="badge">
            <span className="bg-[var(--accent)] px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-[var(--accent-ink)]">
              Nobel-cited
            </span>
          </Stage>
          <Stage label="detail panel (modal)" className="sm:col-span-2">
            <div className="w-full max-w-sm border-2 border-[var(--border)] bg-[var(--surface)] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--accent)] [font-family:var(--font-geist-sans)]">
                    2016 · DeepMind
                  </p>
                  <p className="mt-1 text-2xl font-bold [font-family:var(--font-display)]">AlphaGo</p>
                </div>
                <button aria-label="Close" className="px-2 text-[var(--muted)] hover:text-[var(--accent)]">
                  ×
                </button>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">
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
            <span className={`${btn} bg-[var(--text)] text-[var(--surface)]`}>Read</span>
          </Stage>
          <Stage label="hover">
            <span className={`${btn} bg-[var(--accent)] text-[var(--accent-ink)]`}>Read</span>
          </Stage>
          <Stage label="focus">
            <span className={`${btn} bg-[var(--text)] text-[var(--surface)] outline-2 outline-offset-2 outline-[var(--accent)]`}>Read</span>
          </Stage>
          <Stage label="pressed">
            <span className={`${btn} bg-[#8d0b20] text-[var(--surface)]`}>Read</span>
          </Stage>
          <Stage label="selected">
            <span className={`${btn} border border-[var(--text)] bg-transparent text-[var(--text)]`}>✓ Read</span>
          </Stage>
          <Stage label="disabled">
            <span className={`${btn} bg-[#e5ded0] text-[var(--muted)]`}>Read</span>
          </Stage>
        </div>
      </Section>

      <Section n={6} title="UI states">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stage label="empty">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <span className="text-xl [font-family:var(--font-display)]">∅</span>
              <span className="text-xs italic text-[var(--muted)]">Nothing in this edition.</span>
            </div>
          </Stage>
          <Stage label="loading">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <span className="text-lg tracking-[0.4em] [font-family:var(--font-display)]">
                ···
              </span>
              <span className="text-xs italic text-[var(--muted)]">Setting the type…</span>
            </div>
          </Stage>
          <Stage label="error">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <span className="text-lg font-bold text-[var(--accent)] [font-family:var(--font-display)]">!</span>
              <span className="text-xs text-[var(--accent)]">Couldn’t load the archive.</span>
            </div>
          </Stage>
          <Stage label="success">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <span className="text-lg [font-family:var(--font-display)]">✓</span>
              <span className="text-xs text-[var(--muted)]">Filed to the archive.</span>
            </div>
          </Stage>
        </div>
      </Section>
    </Shell>
  );
}
