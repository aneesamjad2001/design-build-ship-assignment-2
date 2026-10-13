"use client";

import Link from "next/link";
import {
  Shell,
  Section,
  Stage,
  ColorRole,
  SpacingScale,
  StateRow,
  StateCell,
  SectionIndex,
} from "../ui";
import { SwitchDemo, TabsDemo, ModalDemo, MarkReadDemo } from "../demos";

/* Editorial: square edges, hairline rules instead of boxes, ink on newsprint.
 *
 * Accent policy (also enforced on /landmarks):
 *   — Crimson appears only as an action signal: the primary action, the
 *     per-row "Read story" cue, and the focus ring.
 *   — Metadata, categories, dates, and informational badges are ink or muted.
 *   — Selected filters/tabs use neutral ink fills and rules, not the accent.
 */

const sans = "[font-family:var(--font-geist-sans)]";
const label = `text-[10px] font-semibold tracking-[0.25em] uppercase text-[var(--muted)] ${sans}`;
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";
const btn = `inline-flex items-center justify-center px-5 py-2 text-xs tracking-[0.12em] uppercase transition-colors ${sans}`;
const btnPrimary = `${btn} bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[#a60d26] active:bg-[#8d0b20] ${focusRing}`;
const btnSecondary = `${btn} border border-[var(--text)] bg-transparent text-[var(--text)] hover:bg-[var(--text)]/5 active:bg-[var(--text)]/10 ${focusRing}`;
const field = `border-b-2 border-[var(--text)] bg-transparent px-1 py-2 text-sm text-[var(--text)] placeholder:italic placeholder:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] focus-visible:border-[var(--accent)]`;
const chipOn = `border border-[var(--text)] bg-[var(--text)] px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase text-[var(--surface)] ${sans}`;
const chipOff = `border border-[var(--text)] bg-transparent px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase text-[var(--text)] ${sans}`;

export default function EditorialSystem() {
  return (
    <Shell
      theme="theme-editorial"
      name="Editorial"
      blurb="Square edges and hairline rules instead of boxes. Ink on newsprint — and crimson appears only as an action signal: the primary action, the read cue, and the focus ring. Everything informational is ink or gray."
    >
      <SectionIndex />

      <Section
        id="colors"
        n={1}
        title="Color roles"
        note="Ratios are WCAG contrast against the background; button text is checked against its own fill."
      >
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          <ColorRole hex="#faf7f1" role="Background" border />
          <ColorRole hex="#ffffff" role="Surface" border />
          <ColorRole hex="#121212" role="Text" ratio="17.5:1" />
          <ColorRole hex="#57544c" role="Muted" ratio="7.1:1" />
          <ColorRole hex="#121212" role="Border (rules)" />
          <ColorRole hex="#c8102e" role="Accent (action)" ratio="5.5:1" />
        </div>
        <div className="mt-4 border-l-2 border-[var(--border)] pl-4 text-[13px] leading-relaxed text-[var(--muted)]">
          <p>
            <strong className="text-[var(--text)]">Accent policy.</strong>{" "}
            Crimson signals action and nothing else: the primary button
            (white on crimson, 5.9:1), the “Read story” cue, and the focus
            ring. Metadata, dates, categories, and informational badges stay
            ink or gray; selected filters and tabs use neutral ink fills.
          </p>
          <p className="mt-1.5">
            <strong className="text-[var(--text)]">Focus.</strong> Every
            interactive element shows a 2px crimson outline, offset 2px —
            the one non-button use of the accent, so keyboard position is
            always findable (5.5:1 against newsprint, 5.9:1 against white).
          </p>
        </div>
      </Section>

      <Section
        id="type"
        n={2}
        title="Type roles"
        note="Playfair Display for display and headings; Source Serif for body. Labels are the one sans moment."
      >
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
              AlexNet dropped ImageNet&apos;s top-5 error from 26 to 15 percent, and
              a field that had spent decades arguing about features stopped
              arguing.
            </p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Body · Source Serif 16/1.65 · regular</p>
          </div>
          <div>
            <p className={`text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--muted)] ${sans}`}>
              Milestone
            </p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">Label · Geist 11/1.3 · semibold, tracked caps, muted ink</p>
          </div>
        </div>
      </Section>

      <Section
        id="spacing"
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

      <Section
        id="components"
        n={4}
        title="Components"
        note="Everything the Landmarks site needs. Form controls, the switch, the tabs, and the panel here are real and usable — the labeled state specimens live in 05."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stage label="buttons · primary (working read/undo) · secondary (specimen)">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <MarkReadDemo primaryClass={btnPrimary} doneClass={btnSecondary} />
              <span aria-hidden className={btnSecondary}>All eras</span>
            </div>
          </Stage>
          <Stage label="link (goes to the site)">
            <Link
              href="/landmarks"
              className={`text-[15px] underline decoration-[var(--text)]/40 underline-offset-4 transition-colors hover:decoration-[var(--text)] hover:decoration-2 ${focusRing}`}
            >
              See the full timeline →
            </Link>
          </Stage>
          <Stage label="text input · try it">
            <label className="flex w-full max-w-[220px] flex-col gap-1">
              <span className={label}>Search</span>
              <input type="text" placeholder="Search the archive…" className={field} />
            </label>
          </Stage>
          <Stage label="select · try it">
            <label className="flex w-full max-w-[220px] flex-col gap-1">
              <span className={label}>Order</span>
              <select className={`${field} not-italic`} defaultValue="chron">
                <option value="chron">Sort: Chronological</option>
                <option value="impact">Sort: Impact</option>
              </select>
            </label>
          </Stage>
          <Stage label="checkboxes · try them">
            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-[var(--text)]" />
                Language models
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-[var(--text)]" />
                Vision
              </label>
            </div>
          </Stage>
          <Stage label="radios · try them">
            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="ed-view" defaultChecked className="h-4 w-4 accent-[var(--text)]" />
                Timeline view
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="ed-view" className="h-4 w-4 accent-[var(--text)]" />
                Grid view
              </label>
            </div>
          </Stage>
          <Stage label="switch · try it">
            <SwitchDemo
              label="Figures"
              trackOn="flex h-6 w-12 items-center border border-[var(--text)] bg-[var(--text)] px-0.5"
              trackOff="flex h-6 w-12 items-center border border-[var(--text)] bg-transparent px-0.5"
              knobOn="ml-auto h-4 w-4 bg-[var(--surface)]"
              knobOff="h-4 w-4 bg-[var(--text)]"
              labelClass="text-sm"
            />
          </Stage>
          <Stage label="tabs · try them">
            <TabsDemo
              tabs={[
                { name: "Timeline", content: "Seventeen entries, 1958 to 2025." },
                { name: "Eras", content: "Five eras, from the pioneers on." },
                { name: "About", content: "A field guide for curious readers." },
              ]}
              listClass="flex gap-6 border-b-2 border-[var(--border)] text-sm"
              activeClass={`-mb-[2px] border-b-[3px] border-[var(--text)] pb-2 font-semibold ${focusRing}`}
              idleClass={`pb-2 italic text-[var(--muted)] hover:text-[var(--text)] ${focusRing}`}
              panelClass="pt-3 text-[13px] leading-relaxed text-[var(--muted)]"
            />
          </Stage>
          <Stage label="filter chips · selected is ink, not crimson">
            <div className="flex flex-wrap justify-center gap-2">
              <span className={chipOn}>All</span>
              <span className={chipOff}>Language</span>
              <span className={chipOff}>Games</span>
            </div>
          </Stage>
          <Stage label="card · crimson appears only as the cue" className="sm:col-span-2 lg:col-span-1">
            <div className="w-full max-w-[270px] border-y-2 border-[var(--border)] bg-[var(--surface)] px-1 py-4">
              <p className={label}>2017 · Google Brain</p>
              <p className="mt-1.5 text-xl font-bold leading-tight [font-family:var(--font-display)]">
                Attention Is All You Need
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">
                The transformer replaced recurrence with attention — and became
                the substrate for everything after.
              </p>
              <p className={`mt-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--accent)] ${sans}`}>
                Read story →
              </p>
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
          <Stage label="badge · informational, so ink">
            <span className={`border border-[var(--text)] px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase ${sans}`}>
              Nobel-cited
            </span>
          </Stage>
          <Stage label="detail panel · try it (focus is trapped, Escape closes, focus returns)" className="sm:col-span-2">
            <ModalDemo
              openLabel="Open panel demo"
              openClass={btnSecondary}
              dialogClass="panel panel-right theme-editorial"
            >
              {(close) => (
                <div className="panel-body ml-auto flex h-full w-full flex-col overflow-y-auto border-l-2 border-[#121212] bg-white p-6 text-[#121212] [font-family:var(--font-body)] sm:w-[420px]">
                  <div className="flex items-start justify-between">
                    <p className={label}>Games · System</p>
                    <button
                      onClick={close}
                      aria-label="Close panel demo"
                      className={`flex h-10 w-10 items-center justify-center text-xl leading-none text-[var(--muted)] hover:text-[var(--text)] ${focusRing}`}
                    >
                      ×
                    </button>
                  </div>
                  <p className="mt-3 text-5xl font-bold [font-family:var(--font-display)]">2016</p>
                  <h2 className="mt-1 text-2xl font-bold [font-family:var(--font-display)]">AlphaGo</h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
                    Move 37 looked like a mistake for about three minutes. Then
                    it looked like the future.
                  </p>
                  <div className="mt-5 flex gap-3">
                    <MarkReadDemo primaryClass={btnPrimary} doneClass={btnSecondary} />
                  </div>
                </div>
              )}
            </ModalDemo>
          </Stage>
        </div>
      </Section>

      <Section
        id="control-states"
        n={5}
        title="Control states"
        note="Static specimens of every state, side by side — inert to clicks and the keyboard; the working controls are in 04. Hover and pressed are shown with their styles applied."
      >
        <div inert className="border-b border-[var(--border)]">
          <StateRow name="Primary button">
            <StateCell state="rest"><span className={btn + " bg-[var(--accent)] text-[var(--accent-ink)]"}>Read</span></StateCell>
            <StateCell state="hover"><span className={btn + " bg-[#a60d26] text-[var(--accent-ink)]"}>Read</span></StateCell>
            <StateCell state="focus-visible"><span className={btn + " bg-[var(--accent)] text-[var(--accent-ink)] outline-2 outline-offset-2 outline-[var(--accent)]"}>Read</span></StateCell>
            <StateCell state="pressed"><span className={btn + " bg-[#8d0b20] text-[var(--accent-ink)]"}>Read</span></StateCell>
            <StateCell state="disabled"><span className={btn + " bg-[#e5ded0] text-[var(--muted)]"}>Read</span></StateCell>
          </StateRow>
          <StateRow name="Secondary button">
            <StateCell state="rest"><span className={btn + " border border-[var(--text)]"}>All eras</span></StateCell>
            <StateCell state="hover"><span className={btn + " border border-[var(--text)] bg-[var(--text)]/5"}>All eras</span></StateCell>
            <StateCell state="focus-visible"><span className={btn + " border border-[var(--text)] outline-2 outline-offset-2 outline-[var(--accent)]"}>All eras</span></StateCell>
            <StateCell state="pressed"><span className={btn + " border border-[var(--text)] bg-[var(--text)]/10"}>All eras</span></StateCell>
            <StateCell state="disabled"><span className={btn + " border border-[var(--muted)]/40 text-[var(--muted)]/60"}>All eras</span></StateCell>
          </StateRow>
          <StateRow name="Link">
            <StateCell state="rest"><span className="text-sm underline decoration-[var(--text)]/40 underline-offset-4">Full timeline</span></StateCell>
            <StateCell state="hover"><span className="text-sm underline decoration-[var(--text)] decoration-2 underline-offset-4">Full timeline</span></StateCell>
            <StateCell state="focus-visible"><span className="text-sm underline decoration-[var(--text)]/40 underline-offset-4 outline-2 outline-offset-2 outline-[var(--accent)]">Full timeline</span></StateCell>
            <StateCell state="active"><span className="text-sm text-[#8d0b20] underline decoration-[#8d0b20] decoration-2 underline-offset-4">Full timeline</span></StateCell>
          </StateRow>
          <StateRow name="Text input">
            <StateCell state="empty"><span className={`${field} w-36 text-[var(--muted)] italic`}>Search…</span></StateCell>
            <StateCell state="filled"><span className={`${field} w-36`}>AlphaGo</span></StateCell>
            <StateCell state="focused"><span className={`${field} w-36 border-[var(--accent)] outline-2 outline-offset-2 outline-[var(--accent)]`}>AlphaG</span></StateCell>
            <StateCell state="invalid">
              <span className="flex w-40 flex-col gap-1">
                <span className={`${field} w-full border-[#8d0b20]`}>2031</span>
                <span className={`text-[10px] text-[#8d0b20] ${sans}`}>No entries after 2025 — try an earlier year.</span>
              </span>
            </StateCell>
            <StateCell state="disabled"><span className={`${field} w-36 border-[var(--muted)]/40 text-[var(--muted)]/60 italic`}>Search…</span></StateCell>
          </StateRow>
          <StateRow name="Select">
            <StateCell state="default"><span className={`${field} w-40 not-italic`}>Sort: Chronological ▾</span></StateCell>
            <StateCell state="focus"><span className={`${field} w-40 not-italic border-[var(--accent)] outline-2 outline-offset-2 outline-[var(--accent)]`}>Sort: Chronological ▾</span></StateCell>
            <StateCell state="value chosen"><span className={`${field} w-40 not-italic font-semibold`}>Sort: Impact ▾</span></StateCell>
            <StateCell state="disabled"><span className={`${field} w-40 not-italic border-[var(--muted)]/40 text-[var(--muted)]/60`}>Sort: — ▾</span></StateCell>
          </StateRow>
          <StateRow name="Checkbox">
            <StateCell state="checked"><label className="flex items-center gap-2 text-sm"><input type="checkbox" readOnly checked className="h-4 w-4 accent-[var(--text)]" />Vision</label></StateCell>
            <StateCell state="unchecked"><label className="flex items-center gap-2 text-sm"><input type="checkbox" readOnly className="h-4 w-4 accent-[var(--text)]" />Vision</label></StateCell>
            <StateCell state="focus"><label className="flex items-center gap-2 text-sm"><input type="checkbox" readOnly checked className="h-4 w-4 accent-[var(--text)] outline-2 outline-offset-2 outline-[var(--accent)]" />Vision</label></StateCell>
            <StateCell state="disabled"><label className="flex items-center gap-2 text-sm text-[var(--muted)]/60"><input type="checkbox" disabled className="h-4 w-4" />Vision</label></StateCell>
          </StateRow>
          <StateRow name="Radio">
            <StateCell state="selected"><label className="flex items-center gap-2 text-sm"><input type="radio" readOnly checked className="h-4 w-4 accent-[var(--text)]" />Timeline</label></StateCell>
            <StateCell state="unselected"><label className="flex items-center gap-2 text-sm"><input type="radio" readOnly className="h-4 w-4 accent-[var(--text)]" />Grid</label></StateCell>
            <StateCell state="focus"><label className="flex items-center gap-2 text-sm"><input type="radio" readOnly checked className="h-4 w-4 accent-[var(--text)] outline-2 outline-offset-2 outline-[var(--accent)]" />Timeline</label></StateCell>
            <StateCell state="disabled"><label className="flex items-center gap-2 text-sm text-[var(--muted)]/60"><input type="radio" disabled className="h-4 w-4" />Grid</label></StateCell>
          </StateRow>
          <StateRow name="Switch">
            <StateCell state="on"><span className="flex h-6 w-12 items-center border border-[var(--text)] bg-[var(--text)] px-0.5"><span className="ml-auto h-4 w-4 bg-[var(--surface)]" /></span></StateCell>
            <StateCell state="off"><span className="flex h-6 w-12 items-center border border-[var(--text)] px-0.5"><span className="h-4 w-4 bg-[var(--text)]" /></span></StateCell>
            <StateCell state="focus"><span className="flex h-6 w-12 items-center border border-[var(--text)] bg-[var(--text)] px-0.5 outline-2 outline-offset-2 outline-[var(--accent)]"><span className="ml-auto h-4 w-4 bg-[var(--surface)]" /></span></StateCell>
            <StateCell state="disabled"><span className="flex h-6 w-12 items-center border border-[var(--muted)]/40 px-0.5"><span className="h-4 w-4 bg-[var(--muted)]/40" /></span></StateCell>
          </StateRow>
          <StateRow name="Tab">
            <StateCell state="selected"><span className="-mb-[2px] border-b-[3px] border-[var(--text)] pb-1 text-sm font-semibold">Timeline</span></StateCell>
            <StateCell state="unselected"><span className="pb-1 text-sm italic text-[var(--muted)]">Eras</span></StateCell>
            <StateCell state="hover"><span className="pb-1 text-sm italic text-[var(--text)]">Eras</span></StateCell>
            <StateCell state="focus-visible"><span className="pb-1 text-sm italic text-[var(--muted)] outline-2 outline-offset-2 outline-[var(--accent)]">Eras</span></StateCell>
          </StateRow>
          <StateRow name="Filter chip">
            <StateCell state="selected"><span className={chipOn}>All</span></StateCell>
            <StateCell state="unselected"><span className={chipOff}>Games</span></StateCell>
            <StateCell state="hover"><span className={`${chipOff} bg-[var(--text)]/5`}>Games</span></StateCell>
            <StateCell state="focus-visible"><span className={`${chipOff} outline-2 outline-offset-2 outline-[var(--accent)]`}>Games</span></StateCell>
            <StateCell state="disabled"><span className={`border border-[var(--muted)]/40 px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase text-[var(--muted)]/60 ${sans}`}>Games</span></StateCell>
          </StateRow>
          <StateRow name="List row">
            <StateCell state="rest">
              <span className="flex w-44 flex-col border-y border-[var(--border)] py-2 pl-1">
                <span className={label}>Games · IBM</span>
                <span className="font-bold [font-family:var(--font-display)]">Deep Blue</span>
              </span>
            </StateCell>
            <StateCell state="hover">
              <span className="flex w-44 flex-col border-y border-[var(--border)] bg-[var(--surface)] py-2 pl-1">
                <span className={label}>Games · IBM</span>
                <span className="font-bold underline decoration-2 underline-offset-4 [font-family:var(--font-display)]">Deep Blue</span>
              </span>
            </StateCell>
            <StateCell state="focus-visible">
              <span className="flex w-44 flex-col border-y border-[var(--border)] py-2 pl-1 outline-2 -outline-offset-2 outline-[var(--accent)]">
                <span className={label}>Games · IBM</span>
                <span className="font-bold [font-family:var(--font-display)]">Deep Blue</span>
              </span>
            </StateCell>
            <StateCell state="pressed">
              <span className="flex w-44 flex-col border-y border-[var(--border)] bg-[var(--text)]/5 py-2 pl-1">
                <span className={label}>Games · IBM</span>
                <span className="font-bold [font-family:var(--font-display)]">Deep Blue</span>
              </span>
            </StateCell>
            <StateCell state="read">
              <span className="flex w-44 flex-col border-y border-[var(--border)] py-2 pl-1">
                <span className={label}>Games · IBM</span>
                <span className="font-bold [font-family:var(--font-display)]">Deep Blue <span className={`ml-1 text-[9px] font-semibold tracking-[0.15em] text-[var(--muted)] ${sans}`}>✓ READ</span></span>
              </span>
            </StateCell>
          </StateRow>
          <StateRow name="Mark as read">
            <StateCell state="unread (primary)"><span className={btn + " bg-[var(--accent)] text-[var(--accent-ink)]"}>Mark as read</span></StateCell>
            <StateCell state="read (quiet, reversible)"><span className={btn + " border border-[var(--text)]"}>✓ Read · undo</span></StateCell>
          </StateRow>
        </div>
      </Section>

      <Section
        id="ui-states"
        n={6}
        title="UI states"
        note="Playground specimens — the static site itself never fakes loading or failure."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stage label="empty">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <span className="text-xl [font-family:var(--font-display)]">∅</span>
              <span className="text-xs italic text-[var(--muted)]">Nothing in this edition.</span>
            </div>
          </Stage>
          <Stage label="loading">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <span className="text-lg tracking-[0.4em] [font-family:var(--font-display)]">···</span>
              <span className="text-xs italic text-[var(--muted)]">Setting the type…</span>
            </div>
          </Stage>
          <Stage label="error">
            <div className="flex flex-col items-center gap-1.5 py-2 text-center">
              <span className="text-lg font-bold text-[#8d0b20] [font-family:var(--font-display)]">!</span>
              <span className="text-xs text-[#8d0b20]">Couldn’t load the archive.</span>
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

      <div className="mt-12 border-t-2 border-[var(--border)] pt-5">
        <Link
          href="/landmarks"
          className={`inline-flex items-center gap-2 text-sm font-semibold [font-family:var(--font-display)] underline decoration-[var(--text)]/40 underline-offset-4 hover:decoration-[var(--text)] ${focusRing}`}
        >
          See this system applied: Landmarks of AI →
        </Link>
        <p className="mt-1.5 text-[12px] text-[var(--muted)]">
          Built from the <Link href="/mood-boards/editorial" className={`underline underline-offset-2 ${focusRing}`}>Editorial mood board</Link> — publication rules became
          section dividers, the folio numeral became the year column, and the
          restraint of one red became the accent policy above.
        </p>
      </div>
    </Shell>
  );
}
