import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calm — Mood Board",
};

function Tile({
  span = "",
  className = "",
  label,
  labelClass = "text-[var(--muted)]",
  children,
}: {
  span?: string;
  className?: string;
  label?: string;
  labelClass?: string;
  children?: React.ReactNode;
}) {
  return (
    <figure
      className={`relative flex flex-col overflow-hidden rounded-[14px] ${span} ${className}`}
    >
      {children}
      {label && (
        <figcaption
          className={`absolute bottom-2 left-3 text-[11px] tracking-wide ${labelClass}`}
        >
          {label}
        </figcaption>
      )}
    </figure>
  );
}

/** A sourced reference: the image fills the tile, the caption gets its own
 *  strip below — credits stay readable at every size. */
function RefTile({
  span,
  src,
  alt,
  title,
  credit,
}: {
  span: string;
  src: string;
  alt: string;
  title: string;
  credit: string;
}) {
  return (
    <figure
      className={`flex flex-col overflow-hidden rounded-[14px] border border-black/10 bg-[var(--surface)] ${span}`}
    >
      <div className="relative min-h-0 flex-1">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 33vw" />
      </div>
      <figcaption className="px-3 py-2">
        <span className="block text-[11px] leading-snug text-[var(--text)]">{title}</span>
        <span className="block text-[9px] leading-snug text-[var(--muted)]">{credit}</span>
      </figcaption>
    </figure>
  );
}

function Swatch({
  hex,
  name,
  span,
  dark = false,
  role,
}: {
  hex: string;
  name: string;
  span?: string;
  dark?: boolean;
  role?: string;
}) {
  return (
    <Tile span={span} className="border border-black/10">
      <div className="flex-1" style={{ backgroundColor: hex }} />
      <div
        className={`px-3 py-2 text-[11px] leading-tight tracking-wide ${
          dark ? "text-[var(--bg)]" : "text-[var(--muted)]"
        }`}
        style={{ backgroundColor: hex }}
      >
        {name} · {hex}
        {role && <span className="block text-[9px] opacity-80">{role}</span>}
      </div>
    </Tile>
  );
}

export default function CalmBoard() {
  return (
    <div className="theme-calm min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Link
              href="/"
              className="text-xs tracking-[0.18em] uppercase text-[var(--muted)] hover:text-[var(--text)]"
            >
              ← Hub
            </Link>
            <h1 className="mt-2 text-5xl [font-family:var(--font-display)]">
              Calm
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Matte · Warm · Unhurried
            </p>
          </div>
          <p className="max-w-[230px] text-right text-xs leading-relaxed text-[var(--muted)]">
            ✦ original CSS/SVG studies, plus sourced archival references
            (credited on each)
          </p>
        </header>

        <section
          aria-label="28 artifacts"
          className="mt-8 grid auto-rows-[92px] grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6"
        >
          {/* — color: four earned UI roles, four stayed inspiration — */}
          <Swatch hex="#f4f1ea" name="Cream" span="row-span-2" role="→ background" />
          <Swatch hex="#47684c" name="Sage" span="row-span-2" dark role="→ the one accent" />
          <Swatch hex="#dfd9c8" name="Sand" role="→ border" />
          <Swatch hex="#2a2a24" name="Ink" dark role="→ text" />
          <Swatch hex="#8a9b7d" name="Moss" dark role="inspiration only" />
          <Swatch hex="#e9ddca" name="Oat" role="inspiration only" />
          <Swatch hex="#c9a227" name="Honey" role="inspiration only" />
          <Swatch hex="#b9ac90" name="Stone" role="inspiration only" />

          {/* — type — */}
          <Tile
            span="row-span-2 col-span-2"
            className="items-center justify-center border border-[var(--border)] bg-[var(--surface)]"
            label="Fraunces · display"
          >
            <span className="text-7xl [font-family:var(--font-display)]">
              Aa
            </span>
          </Tile>
          <Tile
            className="items-center justify-center border border-[var(--border)] bg-[var(--surface)]"
            label="numerals"
          >
            <span className="text-4xl [font-family:var(--font-display)]">
              41
            </span>
          </Tile>
          <Tile
            className="items-center justify-center border border-[var(--border)] bg-[var(--surface)]"
            label="body"
          >
            <span className="px-4 text-center text-[13px] leading-relaxed text-[var(--text)]">
              Move 37, and the room went quiet.
            </span>
          </Tile>

          {/* — sourced references (this refinement) — */}
          <RefTile
            span="col-span-2 row-span-4"
            src="/refs/calm/botanical-plate.jpg"
            alt="Hand-colored botanical plate of a flowering plant from Curtis's Botanical Magazine, 1847"
            title="Field-guide plate"
            credit="Curtis's Botanical Magazine, 1847 · public domain"
          />
          <RefTile
            span="col-span-2 row-span-4"
            src="/refs/calm/reading-room.jpg"
            alt="A quiet corner of the John Rylands Library reading room: oak shelves, a desk, and a green-shaded lamp under leaded windows"
            title="Reading space"
            credit="John Rylands Library · Andy Stephenson, CC BY-SA 2.0"
          />
          <RefTile
            span="col-span-2 row-span-4"
            src="/refs/calm/herbarium.jpg"
            alt="A pressed plant specimen mounted on a herbarium sheet with a small printed label"
            title="Specimen & label"
            credit="MNHN Luxembourg · CC BY 4.0"
          />

          {/* — original studies kept from earlier passes — */}
          <Tile
            span="row-span-2"
            className="texture-linen bg-[#efe9dc]"
            label="linen"
          />
          <Tile
            span="row-span-2"
            className="items-center justify-center gap-2 border border-[var(--border)] bg-[var(--surface)]"
            label="study · plate form"
          >
            <span className="text-[9px] tracking-[0.3em] text-[var(--muted)]">
              PLATE IV
            </span>
            <svg viewBox="0 0 48 56" className="h-16 w-14" aria-hidden>
              <path
                d="M24 2 C40 18 42 36 24 54 C6 36 8 18 24 2 Z"
                fill="#47684c"
                opacity="0.9"
              />
              <path d="M24 8 L24 50" stroke="#f4f1ea" strokeWidth="1.6" fill="none" />
            </svg>
          </Tile>
          <Tile
            span="col-span-2"
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="hills"
          >
            <svg
              viewBox="0 0 160 48"
              className="mb-6 h-12 w-full px-4"
              aria-hidden
              preserveAspectRatio="none"
            >
              <path
                d="M0 44 Q30 18 60 36 T120 30 T160 40 L160 48 L0 48 Z"
                fill="#8a9b7d"
                opacity="0.7"
              />
              <path
                d="M0 46 Q40 30 80 42 T160 44 L160 48 L0 48 Z"
                fill="#47684c"
                opacity="0.85"
              />
            </svg>
          </Tile>
          <Tile
            span="row-span-2"
            className="justify-center gap-1 bg-[var(--surface)] border border-[var(--border)] px-3 pb-6"
            label="study · museum label"
          >
            <span className="text-[9px] tracking-[0.25em] text-[var(--muted)]">
              SPECIMEN 41
            </span>
            <span className="text-[12px] [font-family:var(--font-display)]">
              Mark I Perceptron
            </span>
            <span className="text-[9px] italic text-[var(--muted)]">
              Cornell, 1958 · on loan
            </span>
          </Tile>
          <Tile
            span="row-span-2"
            className="items-center justify-center bg-[#e9ddca]"
            label="study · reading lamp"
          >
            <svg viewBox="0 0 48 44" className="h-16 w-18" aria-hidden>
              <path d="M14 8 L30 8 L36 20 L8 20 Z" fill="#47684c" />
              <ellipse cx="22" cy="24" rx="12" ry="4" fill="#c9a227" opacity="0.35" />
              <rect x="20" y="20" width="4" height="16" fill="#2a2a24" />
              <rect x="12" y="36" width="20" height="3" rx="1.5" fill="#2a2a24" />
            </svg>
          </Tile>

          {/* — interface pieces — */}
          <Tile
            span="col-span-2"
            className="justify-center gap-1.5 bg-[var(--surface)] border border-[var(--border)] px-4"
            label="list row"
          >
            <span className="text-sm">The Perceptron</span>
            <span className="text-[11px] text-[var(--muted)]">
              1958 · Cornell · to read
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="button"
          >
            <span className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm text-[var(--accent-ink)]">
              Log
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="toggle · on"
          >
            <span className="flex h-7 w-12 items-center rounded-full bg-[var(--accent)] px-1">
              <span className="ml-auto h-5 w-5 rounded-full bg-[var(--surface)]" />
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="badge"
          >
            <span className="rounded-full border border-[var(--accent)] px-3 py-1 text-[11px] text-[var(--accent)]">
              New
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="progress"
          >
            <span className="h-1.5 w-16 overflow-hidden rounded-full bg-[var(--border)]">
              <span className="block h-full w-2/3 rounded-full bg-[var(--accent)]" />
            </span>
          </Tile>

          {/* — words that set the mood — */}
          <Tile
            span="col-span-2"
            className="items-center justify-center bg-[#2a2a24]"
          >
            <span className="px-4 text-center text-sm italic leading-relaxed text-[#e9ddca] [font-family:var(--font-display)]">
              “Nothing here asks for your attention.”
            </span>
          </Tile>
          <RefTile
            span="col-span-2 row-span-2"
            src="/refs/calm/card-catalog.jpg"
            alt="Rows of small wooden card-catalog drawers with brass handles and typed labels"
            title="Quiet information layout"
            credit="Card catalog · Michael Holley, public domain"
          />
          <Tile
            span="col-span-2"
            className="items-center justify-center bg-[var(--accent)]"
          >
            <span className="text-2xl italic text-[var(--accent-ink)] [font-family:var(--font-display)]">
              breathe
            </span>
          </Tile>
          <RefTile
            span="col-span-2 row-span-3"
            src="/refs/calm/botanical-plate-2.jpg"
            alt="A second hand-colored botanical plate with flowering stems"
            title="Field-guide plate II"
            credit="Curtis's Botanical Magazine, 1846 · public domain"
          />
        </section>

        <footer className="mt-8 text-center text-xs text-[var(--muted)]">
          28 artifacts · color (roles marked), type, texture, studies,
          interface pieces, and five sourced archival references — credits on
          each tile and in the repository&apos;s ATTRIBUTIONS.md
        </footer>

        <section className="mx-auto mt-10 max-w-2xl border-t border-[var(--border)] pt-6">
          <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--muted)]">
            Three lessons this board teaches the system
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[13px] leading-relaxed text-[var(--muted)]">
            <li>
              The herbarium sheet and the museum label share one move — a tiny
              typed label doing all the talking under a generous specimen —
              which is the card and list-row anatomy of the Calm system.
            </li>
            <li>
              Curtis&apos;s botanical plates frame one subject in wide margin;
              that ratio of air to subject sets the spacing scale and the
              one-idea-per-card rule.
            </li>
            <li>
              Of eight colors explored, only four earned UI roles — the fern
              green works because nothing competes with it, which became the
              single-accent rule.
            </li>
          </ol>
          <p className="mt-3 text-[11px] italic text-[var(--muted)]">
            The sourced references were added in the October refinement pass to
            ground these lessons in real material; the lessons themselves date
            from the original board.
          </p>
          <p className="mt-5 text-[13px]">
            <Link
              href="/design-systems/calm"
              className="underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              See the design system built from this board →
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
