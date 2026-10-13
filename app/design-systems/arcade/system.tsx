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
} from "../ui";
import { SwitchDemo, TabsDemo, ModalDemo, MarkReadDemo } from "../demos";

/* Arcade: sharp 4px corners, hard offset shadows instead of soft ones,
   acid lime as player one and magenta as player two. */

const btn =
  "inline-flex items-center justify-center rounded-[var(--radius)] px-4 py-2 text-xs uppercase tracking-wider transition-transform";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";
const btnPrimary = `${btn} bg-[var(--accent)] text-[var(--accent-ink)] font-semibold shadow-[3px_3px_0_var(--accent-2)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none ${focusRing}`;
const btnSecondary = `${btn} border border-[var(--accent)] bg-transparent text-[var(--accent)] hover:bg-[var(--accent)]/10 active:translate-y-0.5 ${focusRing}`;
const field =
  "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-3.5 py-2 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)]";
const chipOn =
  "rounded-[var(--radius)] bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]";
const chipOff =
  "rounded-[var(--radius)] border border-[var(--border)] px-3 py-1.5 text-xs uppercase tracking-wider text-[var(--muted)]";

export default function ArcadeSystem() {
  return (
    <Shell
      theme="theme-arcade"
      name="Arcade"
      blurb="Sharp corners, hard offset shadows, acid lime as player one and magenta as player two. Everything glows a little. Focus is a 2px lime outline on every control."
    >
      <Section n={1} title="Color roles" note="Ratios are WCAG contrast against the background; button text is checked against its own fill (void on acid: 16.5:1).">
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

      <Section
        n={4}
        title="Components"
        note="Everything the Landmarks site needs, in Arcade. Form controls, the switch, the tabs, and the panel here are real and usable — the labeled state specimens live in 05."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stage label="buttons · primary / secondary">
            <div className="flex gap-4">
              <button className={btnPrimary}>Mark as read</button>
              <button className={btnSecondary}>All eras</button>
            </div>
          </Stage>
          <Stage label="link (goes to the site)">
            <Link
              href="/landmarks"
              className={`text-sm text-[var(--accent)] underline underline-offset-4 hover:text-[var(--accent-2)] ${focusRing}`}
            >
              See the full timeline →
            </Link>
          </Stage>
          <Stage label="text input · try it">
            <label className="flex w-full max-w-[220px] flex-col gap-1">
              <span className="text-[10px] uppercase tracking-wider text-[var(--muted)]">Search</span>
              <input type="text" placeholder="Search landmarks" className={field} />
            </label>
          </Stage>
          <Stage label="select · try it">
            <label className="flex w-full max-w-[220px] flex-col gap-1">
              <span className="text-[10px] uppercase tracking-wider text-[var(--muted)]">Order</span>
              <select className={field} defaultValue="chron">
                <option value="chron">Sort: Chronological</option>
                <option value="impact">Sort: Impact</option>
              </select>
            </label>
          </Stage>
          <Stage label="checkboxes · try them">
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
          <Stage label="radios · try them">
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
          <Stage label="switch · try it">
            <SwitchDemo
              label="Sound"
              trackOn="flex h-6 w-12 items-center rounded-[var(--radius)] border border-[var(--accent)] bg-[var(--accent)]/15 px-0.5"
              trackOff="flex h-6 w-12 items-center rounded-[var(--radius)] border border-[var(--border)] px-0.5"
              knobOn="ml-auto h-4 w-4 bg-[var(--accent)]"
              knobOff="h-4 w-4 bg-[var(--muted)]"
              labelClass="text-sm uppercase tracking-wider"
            />
          </Stage>
          <Stage label="tabs · try them">
            <TabsDemo
              tabs={[
                { name: "Timeline", content: "Seventeen entries, 1958 to 2025." },
                { name: "Eras", content: "Five eras, from the pioneers on." },
                { name: "About", content: "A field guide for curious readers." },
              ]}
              listClass="flex gap-1 rounded-[var(--radius)] border border-[var(--border)] p-1 text-xs uppercase tracking-wider"
              activeClass={`rounded-[2px] bg-[var(--accent)] px-3 py-1.5 font-semibold text-[var(--accent-ink)] ${focusRing}`}
              idleClass={`px-3 py-1.5 text-[var(--muted)] hover:text-[var(--text)] ${focusRing}`}
              panelClass="pt-3 text-[13px] leading-relaxed text-[var(--muted)]"
            />
          </Stage>
          <Stage label="filter chips">
            <div className="flex flex-wrap justify-center gap-2">
              <span className={chipOn}>All</span>
              <span className={chipOff}>Language</span>
              <span className={chipOff}>Games</span>
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
          <Stage label="detail panel · try it (focus is trapped, Escape closes, focus returns)" className="sm:col-span-2">
            <ModalDemo
              openLabel="Open panel demo"
              openClass={btnSecondary}
              dialogClass="panel panel-right theme-arcade"
            >
              {(close) => (
                <div className="panel-body ml-auto flex h-full w-full flex-col overflow-y-auto border-l-2 border-[#c8ff00] bg-[#16161f] p-6 text-[#f2f2f7] [font-family:var(--font-body)] sm:w-[420px]">
                  <div className="flex items-start justify-between">
                    <p className="text-[9px] text-[var(--accent-2)] [font-family:var(--font-display)]">GAMES · SYSTEM</p>
                    <button
                      onClick={close}
                      aria-label="Close panel demo"
                      className={`flex h-10 w-10 items-center justify-center text-xl leading-none text-[var(--muted)] hover:text-[var(--accent)] ${focusRing}`}
                    >
                      ×
                    </button>
                  </div>
                  <p className="mt-3 text-4xl text-[var(--accent)] [font-family:var(--font-display)]">2016</p>
                  <h2 className="mt-2 text-xl font-semibold uppercase tracking-wide">AlphaGo</h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
                    Move 37 looked like a mistake for about three minutes. Then
                    it looked like the future.
                  </p>
                  <div className="mt-5 flex gap-4">
                    <MarkReadDemo primaryClass={btnPrimary} doneClass={btnSecondary} />
                  </div>
                </div>
              )}
            </ModalDemo>
          </Stage>
        </div>
      </Section>

      <Section
        n={5}
        title="Control states"
        note="Static specimens of every state, side by side — the working controls are in 04."
      >
        <div className="border-b border-[var(--border)]">
          <StateRow name="Primary button">
            <StateCell state="rest"><span className={`${btn} bg-[var(--accent)] font-semibold text-[var(--accent-ink)] shadow-[3px_3px_0_var(--accent-2)]`}>Read</span></StateCell>
            <StateCell state="hover"><span className={`${btn} -translate-y-0.5 bg-[var(--accent)] font-semibold text-[var(--accent-ink)] shadow-[3px_4px_0_var(--accent-2)]`}>Read</span></StateCell>
            <StateCell state="focus-visible"><span className={`${btn} bg-[var(--accent)] font-semibold text-[var(--accent-ink)] shadow-[3px_3px_0_var(--accent-2)] outline-2 outline-offset-2 outline-[var(--accent)]`}>Read</span></StateCell>
            <StateCell state="pressed"><span className={`${btn} translate-y-0.5 bg-[#a8d600] font-semibold text-[var(--accent-ink)]`}>Read</span></StateCell>
            <StateCell state="disabled"><span className={`${btn} bg-[var(--border)] text-[var(--muted)]`}>Read</span></StateCell>
          </StateRow>
          <StateRow name="Secondary button">
            <StateCell state="rest"><span className={`${btn} border border-[var(--accent)] text-[var(--accent)]`}>All eras</span></StateCell>
            <StateCell state="hover"><span className={`${btn} border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]`}>All eras</span></StateCell>
            <StateCell state="focus-visible"><span className={`${btn} border border-[var(--accent)] text-[var(--accent)] outline-2 outline-offset-2 outline-[var(--accent)]`}>All eras</span></StateCell>
            <StateCell state="pressed"><span className={`${btn} translate-y-0.5 border border-[var(--accent)] bg-[var(--accent)]/20 text-[var(--accent)]`}>All eras</span></StateCell>
            <StateCell state="disabled"><span className={`${btn} border border-[var(--border)] text-[var(--muted)]/60`}>All eras</span></StateCell>
          </StateRow>
          <StateRow name="Link">
            <StateCell state="rest"><span className="text-sm text-[var(--accent)] underline underline-offset-4">Full timeline</span></StateCell>
            <StateCell state="hover"><span className="text-sm text-[var(--accent-2)] underline underline-offset-4">Full timeline</span></StateCell>
            <StateCell state="focus-visible"><span className="text-sm text-[var(--accent)] underline underline-offset-4 outline-2 outline-offset-2 outline-[var(--accent)]">Full timeline</span></StateCell>
            <StateCell state="active"><span className="text-sm text-[#a8d600] underline underline-offset-4">Full timeline</span></StateCell>
          </StateRow>
          <StateRow name="Text input">
            <StateCell state="empty"><span className={`${field} w-36 text-[var(--muted)]`}>Search…</span></StateCell>
            <StateCell state="filled"><span className={`${field} w-36`}>AlphaGo</span></StateCell>
            <StateCell state="focused"><span className={`${field} w-36 outline-2 outline-offset-1 outline-[var(--accent)]`}>AlphaG</span></StateCell>
            <StateCell state="invalid">
              <span className="flex w-44 flex-col gap-1">
                <span className={`${field} w-full border-[var(--accent-2)]`}>2031</span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--accent-2)]">No entries after 2025.</span>
              </span>
            </StateCell>
            <StateCell state="disabled"><span className={`${field} w-36 border-[var(--border)]/60 text-[var(--muted)]/60`}>Search…</span></StateCell>
          </StateRow>
          <StateRow name="Select">
            <StateCell state="default"><span className={`${field} w-44`}>Sort: Chronological ▾</span></StateCell>
            <StateCell state="focus"><span className={`${field} w-44 outline-2 outline-offset-1 outline-[var(--accent)]`}>Sort: Chronological ▾</span></StateCell>
            <StateCell state="value chosen"><span className={`${field} w-44 font-semibold`}>Sort: Impact ▾</span></StateCell>
            <StateCell state="disabled"><span className={`${field} w-44 border-[var(--border)]/60 text-[var(--muted)]/60`}>Sort: — ▾</span></StateCell>
          </StateRow>
          <StateRow name="Checkbox">
            <StateCell state="checked"><label className="flex items-center gap-2 text-sm"><input type="checkbox" readOnly checked className="h-4 w-4 accent-[var(--accent)]" />Vision</label></StateCell>
            <StateCell state="unchecked"><label className="flex items-center gap-2 text-sm"><input type="checkbox" readOnly className="h-4 w-4 accent-[var(--accent)]" />Vision</label></StateCell>
            <StateCell state="focus"><label className="flex items-center gap-2 text-sm"><input type="checkbox" readOnly checked className="h-4 w-4 accent-[var(--accent)] outline-2 outline-offset-2 outline-[var(--accent)]" />Vision</label></StateCell>
            <StateCell state="disabled"><label className="flex items-center gap-2 text-sm text-[var(--muted)]/60"><input type="checkbox" disabled className="h-4 w-4" />Vision</label></StateCell>
          </StateRow>
          <StateRow name="Radio">
            <StateCell state="selected"><label className="flex items-center gap-2 text-sm"><input type="radio" readOnly checked className="h-4 w-4 accent-[var(--accent)]" />Timeline</label></StateCell>
            <StateCell state="unselected"><label className="flex items-center gap-2 text-sm"><input type="radio" readOnly className="h-4 w-4 accent-[var(--accent)]" />Grid</label></StateCell>
            <StateCell state="focus"><label className="flex items-center gap-2 text-sm"><input type="radio" readOnly checked className="h-4 w-4 accent-[var(--accent)] outline-2 outline-offset-2 outline-[var(--accent)]" />Timeline</label></StateCell>
            <StateCell state="disabled"><label className="flex items-center gap-2 text-sm text-[var(--muted)]/60"><input type="radio" disabled className="h-4 w-4" />Grid</label></StateCell>
          </StateRow>
          <StateRow name="Switch">
            <StateCell state="on"><span className="flex h-6 w-12 items-center rounded-[var(--radius)] border border-[var(--accent)] bg-[var(--accent)]/15 px-0.5"><span className="ml-auto h-4 w-4 bg-[var(--accent)]" /></span></StateCell>
            <StateCell state="off"><span className="flex h-6 w-12 items-center rounded-[var(--radius)] border border-[var(--border)] px-0.5"><span className="h-4 w-4 bg-[var(--muted)]" /></span></StateCell>
            <StateCell state="focus"><span className="flex h-6 w-12 items-center rounded-[var(--radius)] border border-[var(--accent)] bg-[var(--accent)]/15 px-0.5 outline-2 outline-offset-2 outline-[var(--accent)]"><span className="ml-auto h-4 w-4 bg-[var(--accent)]" /></span></StateCell>
            <StateCell state="disabled"><span className="flex h-6 w-12 items-center rounded-[var(--radius)] border border-[var(--border)]/60 px-0.5"><span className="h-4 w-4 bg-[var(--muted)]/40" /></span></StateCell>
          </StateRow>
          <StateRow name="Tab">
            <StateCell state="selected"><span className="rounded-[2px] bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">Timeline</span></StateCell>
            <StateCell state="unselected"><span className="px-3 py-1.5 text-xs uppercase tracking-wider text-[var(--muted)]">Eras</span></StateCell>
            <StateCell state="hover"><span className="px-3 py-1.5 text-xs uppercase tracking-wider text-[var(--text)]">Eras</span></StateCell>
            <StateCell state="focus-visible"><span className="px-3 py-1.5 text-xs uppercase tracking-wider text-[var(--muted)] outline-2 outline-offset-2 outline-[var(--accent)]">Eras</span></StateCell>
          </StateRow>
          <StateRow name="Filter chip">
            <StateCell state="selected"><span className={chipOn}>All</span></StateCell>
            <StateCell state="unselected"><span className={chipOff}>Games</span></StateCell>
            <StateCell state="hover"><span className={`${chipOff} text-[var(--text)]`}>Games</span></StateCell>
            <StateCell state="focus-visible"><span className={`${chipOff} outline-2 outline-offset-2 outline-[var(--accent)]`}>Games</span></StateCell>
            <StateCell state="disabled"><span className="rounded-[var(--radius)] border border-[var(--border)]/60 px-3 py-1.5 text-xs uppercase tracking-wider text-[var(--muted)]/60">Games</span></StateCell>
          </StateRow>
          <StateRow name="List row">
            <StateCell state="rest"><span className="flex w-44 justify-between border-b border-[var(--border)] py-2 text-sm"><span>Deep Blue</span><span className="text-[10px] leading-5 text-[var(--accent)] [font-family:var(--font-display)]">1997</span></span></StateCell>
            <StateCell state="hover"><span className="flex w-44 justify-between border-b border-[var(--accent)] bg-[var(--surface)] py-2 text-sm"><span>Deep Blue</span><span className="text-[10px] leading-5 text-[var(--accent)] [font-family:var(--font-display)]">1997</span></span></StateCell>
            <StateCell state="focus-visible"><span className="flex w-44 justify-between border-b border-[var(--border)] py-2 text-sm outline-2 -outline-offset-1 outline-[var(--accent)]"><span>Deep Blue</span><span className="text-[10px] leading-5 text-[var(--accent)] [font-family:var(--font-display)]">1997</span></span></StateCell>
            <StateCell state="pressed"><span className="flex w-44 justify-between border-b border-[var(--border)] bg-[var(--accent)]/10 py-2 text-sm"><span>Deep Blue</span><span className="text-[10px] leading-5 text-[var(--accent)] [font-family:var(--font-display)]">1997</span></span></StateCell>
            <StateCell state="read"><span className="flex w-44 justify-between border-b border-[var(--border)] py-2 text-sm"><span>Deep Blue</span><span className="text-[10px] uppercase tracking-wider text-[var(--muted)]">✓ read</span></span></StateCell>
          </StateRow>
          <StateRow name="Mark as read">
            <StateCell state="unread (primary)"><span className={`${btn} bg-[var(--accent)] font-semibold text-[var(--accent-ink)] shadow-[3px_3px_0_var(--accent-2)]`}>Mark as read</span></StateCell>
            <StateCell state="read (quiet, reversible)"><span className={`${btn} border border-[var(--accent)] bg-[var(--accent)]/15 font-semibold text-[var(--accent)]`}>✓ Read · undo</span></StateCell>
          </StateRow>
        </div>
      </Section>

      <Section
        n={6}
        title="UI states"
        note="Playground specimens — the static site itself never fakes loading or failure."
      >
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

      <div className="mt-12 border-t border-[var(--border)] pt-5">
        <p className="text-[12px] text-[var(--muted)]">
          Built from the{" "}
          <Link href="/mood-boards/arcade" className={`underline underline-offset-2 ${focusRing}`}>
            Arcade mood board
          </Link>{" "}
          — the cabinet&apos;s marquee glow became the display face, HUD bars became
          progress, and player-one/player-two colors became the two accents.
        </p>
      </div>
    </Shell>
  );
}
