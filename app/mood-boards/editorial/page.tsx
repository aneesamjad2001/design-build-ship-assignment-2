import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial — Mood Board",
};

function Tile({
  span = "",
  className = "",
  label,
  children,
}: {
  span?: string;
  className?: string;
  label?: string;
  children?: React.ReactNode;
}) {
  return (
    <figure
      className={`relative flex flex-col overflow-hidden border border-[var(--border)] ${span} ${className}`}
    >
      {children}
      {label && (
        <figcaption className="absolute bottom-1.5 left-2.5 text-[10px] tracking-wider uppercase text-[var(--muted)]">
          {label}
        </figcaption>
      )}
    </figure>
  );
}

function RefTile({
  span,
  src,
  alt,
  title,
  credit,
  contain = false,
}: {
  span: string;
  src: string;
  alt: string;
  title: string;
  credit: string;
  contain?: boolean;
}) {
  return (
    <figure
      className={`flex flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)] ${span}`}
    >
      <div className="relative min-h-0 flex-1">
        <Image
          src={src}
          alt={alt}
          fill
          className={
            contain ? "object-contain p-2" : "object-cover object-top"
          }
          sizes="(max-width: 640px) 50vw, 40vw"
        />
      </div>
      <figcaption className="border-t border-[var(--border)] px-3 py-2">
        <span className="block text-[11px] font-semibold leading-snug [font-family:var(--font-display)]">
          {title}
        </span>
        <span className="block text-[9px] leading-snug text-[var(--muted)] [font-family:var(--font-geist-sans)]">
          {credit}
        </span>
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
    <Tile span={span}>
      <div className="flex-1" style={{ backgroundColor: hex }} />
      <div
        className={`px-2.5 py-1.5 text-[10px] leading-tight tracking-wider uppercase ${
          dark ? "text-[var(--surface)]" : "text-[var(--muted)]"
        }`}
        style={{ backgroundColor: hex }}
      >
        {name} · {hex}
        {role && <span className="block text-[8px] normal-case opacity-80">{role}</span>}
      </div>
    </Tile>
  );
}

function FauxLines({ n = 5, w = "100%" }: { n?: number; w?: string }) {
  return (
    <span className="flex w-full flex-col gap-1.5" style={{ maxWidth: w }}>
      {[...Array(n)].map((_, i) => (
        <span
          key={i}
          className="h-[3px] bg-[var(--text)] opacity-20"
          style={{ width: i === n - 1 ? "60%" : "100%" }}
        />
      ))}
    </span>
  );
}

export default function EditorialBoard() {
  return (
    <div className="theme-editorial min-h-screen bg-[var(--bg)] text-[var(--text)] [font-family:var(--font-body)]">
      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-[var(--border)] pb-6">
          <div>
            <Link
              href="/"
              className="text-xs tracking-[0.18em] uppercase text-[var(--muted)] hover:text-[var(--text)] [font-family:var(--font-geist-sans)]"
            >
              ← Hub
            </Link>
            <h1 className="mt-2 text-5xl font-bold [font-family:var(--font-display)]">
              Editorial
            </h1>
            <p className="mt-2 text-sm italic text-[var(--muted)]">
              Ink · Columns · Above the fold
            </p>
          </div>
          <p className="max-w-[240px] text-right text-xs leading-relaxed text-[var(--muted)]">
            ✦ original CSS/SVG studies, plus sourced archival references
            (credited on each)
          </p>
        </header>

        <section
          aria-label="29 artifacts"
          className="mt-8 grid auto-rows-[92px] grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6"
        >
          {/* — color: five earned UI roles, one stayed inspiration — */}
          <Swatch hex="#faf7f1" name="Newsprint" span="row-span-2" role="→ background" />
          <Swatch hex="#121212" name="Ink" span="row-span-2" dark role="→ text & rules" />
          <Swatch hex="#c8102e" name="Crimson" dark role="→ accent · action only" />
          <Swatch hex="#ffffff" name="Page" role="→ surface" />
          <Swatch hex="#57544c" name="Graphite" dark role="→ muted text" />
          <Swatch hex="#e5ded0" name="Aged" role="inspiration only" />

          {/* — type — */}
          <Tile
            span="row-span-2 col-span-2"
            className="items-center justify-center bg-[var(--surface)]"
            label="Playfair Display"
          >
            <span className="text-7xl font-bold [font-family:var(--font-display)]">
              Aa
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)]"
            label="folio"
          >
            <span className="text-2xl [font-family:var(--font-display)]">
              № 41
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--text)]"
          >
            <span className="text-4xl font-bold text-[var(--bg)] [font-family:var(--font-display)]">
              T
            </span>
          </Tile>

          {/* — the anchor: annotated archive material, on subject — */}
          <RefTile
            span="col-span-4 row-span-4"
            src="/refs/editorial/perceptron-manual.jpg"
            alt="A labeled archival photograph of the Mark I Perceptron machine, with leader lines naming the response panel, association units, camera, and plugboard"
            title="The Mark I Perceptron, annotated"
            credit="Operators' Manual figure, 1960 · public domain"
            contain
          />
          <RefTile
            span="col-span-2 row-span-4"
            src="/refs/editorial/tribune-1912.jpg"
            alt="Front page of the New-York Tribune from April 17, 1912, reporting the Titanic disaster in dense columns around a map"
            title="Front page, 1912"
            credit="New-York Tribune · Library of Congress, public domain"
          />
          <RefTile
            span="col-span-2 row-span-2"
            src="/refs/editorial/eniac.jpg"
            alt="Two operators reprogramming the room-sized ENIAC computer by replugging its cable panels"
            title="Reprogramming ENIAC"
            credit="U.S. Army photograph · public domain"
          />
          <RefTile
            span="col-span-2 row-span-2"
            src="/refs/editorial/linotype.jpg"
            alt="Rows of Linotype operators setting type at the Chicago Defender newspaper, 1941"
            title="Setting the type"
            credit="Russell Lee, FSA/LoC, 1941 · public domain"
          />

          {/* — print furniture & studies — */}
          <Tile span="row-span-2" className="texture-halftone bg-[var(--surface)]" label="halftone" />
          <Tile
            className="items-center justify-center bg-[var(--surface)]"
            label="dinkus"
          >
            <span className="text-lg tracking-[0.5em] [font-family:var(--font-display)]">
              ***
            </span>
          </Tile>
          <Tile
            span="col-span-2 row-span-2"
            className="justify-center gap-2 bg-[var(--surface)] px-5 pb-7"
            label="study · headline"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
              The Interview
            </span>
            <span className="text-xl font-bold leading-tight [font-family:var(--font-display)]">
              The Machine That Read Everything
            </span>
            <FauxLines n={3} />
          </Tile>
          <Tile
            span="col-span-2 row-span-2"
            className="justify-center gap-2 bg-[var(--bg)] px-5 pb-7"
            label="study · pull quote"
          >
            <span className="text-2xl leading-snug [font-family:var(--font-display)]">
              “Attention was all it needed.”
            </span>
            <span className="h-[3px] w-10 bg-[var(--accent)]" />
          </Tile>
          <Tile
            span="col-span-2 row-span-2"
            className="justify-center gap-1 bg-[var(--surface)] px-4 pb-7"
            label="study · archive card"
          >
            <span className="font-mono text-[10px] leading-loose text-[var(--text)]">
              PERCEPTRON, MARK I — 1958.
              <br />
              <span className="text-[var(--muted)]">See: ROSENBLATT, F.</span>
              <br />
              <span className="text-[var(--muted)]">Shelf 41 · Drawer C</span>
            </span>
          </Tile>

          {/* — editorial fragments — */}
          <Tile
            span="col-span-2"
            className="justify-center gap-1.5 bg-[var(--surface)] px-5"
            label="byline"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
              By A. Amjad · Chicago
            </span>
            <span className="h-px w-full bg-[var(--border)]" />
            <span className="text-xs italic text-[var(--muted)]">
              12 min read · October 2026
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)]"
            label="kicker"
          >
            <span className="bg-[var(--accent)] px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-[var(--accent-ink)] [font-family:var(--font-geist-sans)]">
              Analysis
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)]"
            label="link"
          >
            <span className="border-b-2 border-[var(--accent)] pb-0.5 text-sm">
              Read more
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)]"
            label="button"
          >
            <span className="bg-[var(--text)] px-5 py-2 text-xs tracking-wide uppercase text-[var(--surface)] [font-family:var(--font-geist-sans)]">
              Subscribe
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)]"
            label="tab · active"
          >
            <span className="border-b-[3px] border-[var(--accent)] pb-1 text-sm font-semibold">
              Essays
            </span>
          </Tile>
          <Tile
            span="col-span-2"
            className="justify-center gap-1 bg-[var(--surface)] px-5"
            label="index row"
          >
            <span className="flex items-baseline justify-between">
              <span className="text-sm font-semibold [font-family:var(--font-display)]">
                The Scaling Era
              </span>
              <span className="text-xs text-[var(--muted)]">p. 41</span>
            </span>
            <span className="h-px w-full border-b border-dotted border-[var(--muted)]" />
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)]"
            label="badge"
          >
            <span className="border border-[var(--text)] px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase [font-family:var(--font-geist-sans)]">
              Archive
            </span>
          </Tile>
          <Tile
            span="col-span-2"
            className="items-center justify-center gap-1 bg-[var(--surface)]"
            label="masthead"
          >
            <span className="text-xl font-bold tracking-tight [font-family:var(--font-display)]">
              The Landmark Review
            </span>
            <span className="flex w-3/4 items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
              <span className="h-px flex-1 bg-[var(--border)]" />
              Est. 2026
              <span className="h-px flex-1 bg-[var(--border)]" />
            </span>
          </Tile>
          <Tile
            className="justify-end gap-1 bg-[var(--surface)] px-4 pb-6"
            label="caption"
          >
            <span className="h-10 w-full bg-[#e5ded0]" />
            <span className="text-[10px] italic text-[var(--muted)]">
              Fig. 3 — the attention head.
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)]"
            label="folio corner"
          >
            <svg viewBox="0 0 40 40" className="h-12 w-12" aria-hidden>
              <path d="M4 4 H28 L36 12 V36 H4 Z" fill="none" stroke="#121212" strokeWidth="2" />
              <path d="M28 4 L28 12 L36 12" fill="#c8102e" stroke="#121212" strokeWidth="2" />
            </svg>
          </Tile>
          <Tile className="items-center justify-center bg-[var(--text)]">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--bg)] [font-family:var(--font-geist-sans)]">
              above the fold
            </span>
          </Tile>
        </section>

        <footer className="mt-8 text-center text-xs text-[var(--muted)]">
          29 artifacts · color (roles marked), type, print furniture, studies,
          interface pieces, and four sourced archival references — credits on
          each tile and in the repository&apos;s ATTRIBUTIONS.md
        </footer>

        <section className="mx-auto mt-10 max-w-2xl border-t-2 border-[var(--border)] pt-6">
          <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
            Three lessons this board teaches the system
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[13px] leading-relaxed text-[var(--muted)]">
            <li>
              The 1912 Tribune separates a chaotic story with rules, columns,
              and one map — no boxes, no color. The hairline and the double
              rule became the system&apos;s only dividers, and shadows were banned.
            </li>
            <li>
              The Perceptron manual&apos;s annotated photograph earns trust with
              leader lines, tracked-caps labels, and a plain caption — the
              exact anatomy the site&apos;s archival figures follow (Fig. 1–3).
            </li>
            <li>
              A front page spends ink generously and red almost never; that
              restraint became the accent policy — crimson marks the action
              you can take, never decoration or metadata.
            </li>
          </ol>
          <p className="mt-3 text-[11px] italic text-[var(--muted)]">
            The sourced references were added in the October refinement pass to
            ground these lessons in real material.
          </p>
          <p className="mt-5 text-[13px]">
            <Link
              href="/design-systems/editorial"
              className="underline decoration-[var(--text)]/40 underline-offset-4 hover:decoration-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              See the design system built from this board →
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
