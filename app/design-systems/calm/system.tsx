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

/* Calm: soft pill shapes, generous air, one sage accent, no shadows —
   a thin warm border does the separating. */

const btn =
  "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm transition-colors";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";
const btnPrimary = `${btn} bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[#3a5740] active:bg-[#2f4734] ${focusRing}`;
const btnSecondary = `${btn} border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] active:bg-[var(--border)] ${focusRing}`;
const field =
  "rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)]";
const chipOn = "rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs text-[var(--accent-ink)]";
const chipOff =
  "rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs";

export default function CalmSystem() {
  return (
    <Shell
      theme="theme-calm"
      name="Calm"
      blurb="Soft pill shapes, generous air, one sage accent. No shadows — a thin warm border does the separating. Focus is a 2px sage outline, offset 2px, on every control."
    >
      <Section n={1} title="Color roles" note="Ratios are WCAG contrast against the background; button text is checked against its own fill (cream on sage: 6.3:1).">
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

      <Section
        n={4}
        title="Components"
        note="Everything the Landmarks site needs, in Calm. Form controls, the switch, the tabs, and the panel here are real and usable — the labeled state specimens live in 05."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stage label="buttons · primary / secondary">
            <div className="flex gap-3">
              <button className={btnPrimary}>Mark as read</button>
              <button className={btnSecondary}>All eras</button>
            </div>
          </Stage>
          <Stage label="link (goes to the site)">
            <Link
              href="/landmarks"
              className={`text-sm text-[var(--accent)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)] ${focusRing}`}
            >
              See the full timeline →
            </Link>
          </Stage>
          <Stage label="text input · try it">
            <label className="flex w-full max-w-[220px] flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--muted)]">Search</span>
              <input type="text" placeholder="Search landmarks" className={field} />
            </label>
          </Stage>
          <Stage label="select · try it">
            <label className="flex w-full max-w-[220px] flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--muted)]">Order</span>
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
                <input type="radio" name="calm-view" defaultChecked className="h-4 w-4 accent-[var(--accent)]" />
                Timeline view
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="calm-view" className="h-4 w-4 accent-[var(--accent)]" />
                Grid view
              </label>
            </div>
          </Stage>
          <Stage label="switch · try it">
            <SwitchDemo
              label="Reminders"
              trackOn="flex h-7 w-12 items-center rounded-full bg-[var(--accent)] px-1"
              trackOff="flex h-7 w-12 items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-1"
              knobOn="ml-auto h-5 w-5 rounded-full bg-[var(--surface)]"
              knobOff="h-5 w-5 rounded-full bg-[var(--border)]"
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
              listClass="flex gap-5 border-b border-[var(--border)] text-sm"
              activeClass={`border-b-2 border-[var(--accent)] pb-2 font-medium ${focusRing}`}
              idleClass={`pb-2 text-[var(--muted)] hover:text-[var(--text)] ${focusRing}`}
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
          <Stage label="detail panel · try it (focus is trapped, Escape closes, focus returns)" className="sm:col-span-2">
            <ModalDemo
              openLabel="Open panel demo"
              openClass={btnSecondary}
              dialogClass="panel panel-right theme-calm"
            >
              {(close) => (
                <div className="panel-body ml-auto flex h-full w-full flex-col overflow-y-auto border-l border-[#dfd9c8] bg-[#fdfbf6] p-6 text-[#2a2a24] [font-family:var(--font-body)] sm:w-[420px]">
                  <div className="flex items-start justify-between">
                    <p className="text-[11px] tracking-[0.15em] uppercase text-[var(--muted)]">Games · System</p>
                    <button
                      onClick={close}
                      aria-label="Close panel demo"
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-xl leading-none text-[var(--muted)] hover:text-[var(--text)] ${focusRing}`}
                    >
                      ×
                    </button>
                  </div>
                  <p className="mt-3 text-5xl [font-family:var(--font-display)]">2016</p>
                  <h2 className="mt-1 text-2xl [font-family:var(--font-display)]">AlphaGo</h2>
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
        n={5}
        title="Control states"
        note="Static specimens of every state, side by side — the working controls are in 04."
      >
        <div className="border-b border-[var(--border)]">
          <StateRow name="Primary button">
            <StateCell state="rest"><span className={`${btn} bg-[var(--accent)] text-[var(--accent-ink)]`}>Read</span></StateCell>
            <StateCell state="hover"><span className={`${btn} bg-[#3a5740] text-[var(--accent-ink)]`}>Read</span></StateCell>
            <StateCell state="focus-visible"><span className={`${btn} bg-[var(--accent)] text-[var(--accent-ink)] outline-2 outline-offset-2 outline-[var(--accent)]`}>Read</span></StateCell>
            <StateCell state="pressed"><span className={`${btn} bg-[#2f4734] text-[var(--accent-ink)]`}>Read</span></StateCell>
            <StateCell state="disabled"><span className={`${btn} bg-[var(--border)] text-[var(--muted)]`}>Read</span></StateCell>
          </StateRow>
          <StateRow name="Secondary button">
            <StateCell state="rest"><span className={`${btn} border border-[var(--border)] bg-[var(--surface)]`}>All eras</span></StateCell>
            <StateCell state="hover"><span className={`${btn} border border-[var(--accent)] bg-[var(--surface)]`}>All eras</span></StateCell>
            <StateCell state="focus-visible"><span className={`${btn} border border-[var(--border)] bg-[var(--surface)] outline-2 outline-offset-2 outline-[var(--accent)]`}>All eras</span></StateCell>
            <StateCell state="pressed"><span className={`${btn} border border-[var(--border)] bg-[var(--border)]`}>All eras</span></StateCell>
            <StateCell state="disabled"><span className={`${btn} border border-[var(--border)]/60 bg-[var(--surface)] text-[var(--muted)]/60`}>All eras</span></StateCell>
          </StateRow>
          <StateRow name="Link">
            <StateCell state="rest"><span className="text-sm text-[var(--accent)] underline decoration-[var(--border)] underline-offset-4">Full timeline</span></StateCell>
            <StateCell state="hover"><span className="text-sm text-[var(--accent)] underline decoration-[var(--accent)] underline-offset-4">Full timeline</span></StateCell>
            <StateCell state="focus-visible"><span className="text-sm text-[var(--accent)] underline decoration-[var(--border)] underline-offset-4 outline-2 outline-offset-2 outline-[var(--accent)]">Full timeline</span></StateCell>
            <StateCell state="active"><span className="text-sm text-[#2f4734] underline decoration-[#2f4734] underline-offset-4">Full timeline</span></StateCell>
          </StateRow>
          <StateRow name="Text input">
            <StateCell state="empty"><span className={`${field} w-36 text-[var(--muted)]`}>Search…</span></StateCell>
            <StateCell state="filled"><span className={`${field} w-36`}>AlphaGo</span></StateCell>
            <StateCell state="focused"><span className={`${field} w-36 outline-2 outline-offset-1 outline-[var(--accent)]`}>AlphaG</span></StateCell>
            <StateCell state="invalid">
              <span className="flex w-44 flex-col gap-1">
                <span className={`${field} w-full border-[#8a3b2e]`}>2031</span>
                <span className="text-[10px] text-[#8a3b2e]">No entries after 2025 — try an earlier year.</span>
              </span>
            </StateCell>
            <StateCell state="disabled"><span className={`${field} w-36 border-[var(--border)]/60 text-[var(--muted)]/60`}>Search…</span></StateCell>
          </StateRow>
          <StateRow name="Select">
            <StateCell state="default"><span className={`${field} w-44`}>Sort: Chronological ▾</span></StateCell>
            <StateCell state="focus"><span className={`${field} w-44 outline-2 outline-offset-1 outline-[var(--accent)]`}>Sort: Chronological ▾</span></StateCell>
            <StateCell state="value chosen"><span className={`${field} w-44 font-medium`}>Sort: Impact ▾</span></StateCell>
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
            <StateCell state="on"><span className="flex h-7 w-12 items-center rounded-full bg-[var(--accent)] px-1"><span className="ml-auto h-5 w-5 rounded-full bg-[var(--surface)]" /></span></StateCell>
            <StateCell state="off"><span className="flex h-7 w-12 items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-1"><span className="h-5 w-5 rounded-full bg-[var(--border)]" /></span></StateCell>
            <StateCell state="focus"><span className="flex h-7 w-12 items-center rounded-full bg-[var(--accent)] px-1 outline-2 outline-offset-2 outline-[var(--accent)]"><span className="ml-auto h-5 w-5 rounded-full bg-[var(--surface)]" /></span></StateCell>
            <StateCell state="disabled"><span className="flex h-7 w-12 items-center rounded-full border border-[var(--border)]/60 bg-[var(--surface)] px-1"><span className="h-5 w-5 rounded-full bg-[var(--border)]/60" /></span></StateCell>
          </StateRow>
          <StateRow name="Tab">
            <StateCell state="selected"><span className="border-b-2 border-[var(--accent)] pb-1 text-sm font-medium">Timeline</span></StateCell>
            <StateCell state="unselected"><span className="pb-1 text-sm text-[var(--muted)]">Eras</span></StateCell>
            <StateCell state="hover"><span className="pb-1 text-sm text-[var(--text)]">Eras</span></StateCell>
            <StateCell state="focus-visible"><span className="pb-1 text-sm text-[var(--muted)] outline-2 outline-offset-2 outline-[var(--accent)]">Eras</span></StateCell>
          </StateRow>
          <StateRow name="Filter chip">
            <StateCell state="selected"><span className={chipOn}>All</span></StateCell>
            <StateCell state="unselected"><span className={chipOff}>Games</span></StateCell>
            <StateCell state="hover"><span className={`${chipOff} border-[var(--accent)]`}>Games</span></StateCell>
            <StateCell state="focus-visible"><span className={`${chipOff} outline-2 outline-offset-2 outline-[var(--accent)]`}>Games</span></StateCell>
            <StateCell state="disabled"><span className={`rounded-full border border-[var(--border)]/60 bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]/60`}>Games</span></StateCell>
          </StateRow>
          <StateRow name="List row">
            <StateCell state="rest">
              <span className="flex w-44 justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm"><span>Deep Blue</span><span className="text-[var(--muted)]">1997</span></span>
            </StateCell>
            <StateCell state="hover">
              <span className="flex w-44 justify-between rounded-[var(--radius)] border border-[var(--accent)] bg-[var(--surface)] px-3 py-2 text-sm"><span>Deep Blue</span><span className="text-[var(--muted)]">1997</span></span>
            </StateCell>
            <StateCell state="focus-visible">
              <span className="flex w-44 justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-2 outline-offset-2 outline-[var(--accent)]"><span>Deep Blue</span><span className="text-[var(--muted)]">1997</span></span>
            </StateCell>
            <StateCell state="pressed">
              <span className="flex w-44 justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--border)]/40 px-3 py-2 text-sm"><span>Deep Blue</span><span className="text-[var(--muted)]">1997</span></span>
            </StateCell>
            <StateCell state="read">
              <span className="flex w-44 justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm"><span>Deep Blue</span><span className="text-[11px] text-[var(--accent)]">✓ read</span></span>
            </StateCell>
          </StateRow>
          <StateRow name="Mark as read">
            <StateCell state="unread (primary)"><span className={`${btn} bg-[var(--accent)] text-[var(--accent-ink)]`}>Mark as read</span></StateCell>
            <StateCell state="read (quiet, reversible)"><span className={`${btn} border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]`}>✓ Read · undo</span></StateCell>
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

      <div className="mt-12 border-t border-[var(--border)] pt-5">
        <p className="text-[12px] text-[var(--muted)]">
          Built from the{" "}
          <Link href="/mood-boards/calm" className={`underline underline-offset-2 ${focusRing}`}>
            Calm mood board
          </Link>{" "}
          — matte paper became the background, pebble forms became pills, and
          the single fern green became the one accent.
        </p>
      </div>
    </Shell>
  );
}
