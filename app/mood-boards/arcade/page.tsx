import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arcade — Mood Board",
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
      className={`relative flex flex-col overflow-hidden rounded-[6px] ${span} ${className}`}
    >
      {children}
      {label && (
        <figcaption className="absolute bottom-2 left-3 text-[10px] tracking-wider uppercase text-[var(--muted)]">
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
}: {
  span: string;
  src: string;
  alt: string;
  title: string;
  credit: string;
}) {
  return (
    <figure
      className={`flex flex-col overflow-hidden rounded-[6px] border border-white/10 bg-[var(--surface)] ${span}`}
    >
      <div className="relative min-h-0 flex-1">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 33vw" />
      </div>
      <figcaption className="px-3 py-2">
        <span className="block text-[10px] uppercase tracking-wider leading-snug text-[var(--text)]">
          {title}
        </span>
        <span className="block text-[9px] leading-snug normal-case text-[var(--muted)]">
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
  light = false,
  role,
}: {
  hex: string;
  name: string;
  span?: string;
  light?: boolean;
  role?: string;
}) {
  return (
    <Tile span={span} className="border border-white/10">
      <div className="flex-1" style={{ backgroundColor: hex }} />
      <div
        className={`px-3 py-2 text-[10px] leading-tight tracking-wider uppercase ${
          light ? "text-[#0c0c12]" : "text-[var(--muted)]"
        }`}
        style={{ backgroundColor: hex }}
      >
        {name} · {hex}
        {role && <span className="block text-[8px] normal-case opacity-80">{role}</span>}
      </div>
    </Tile>
  );
}

/* 8×8 pixel invader, drawn from a bitmap so it reads as genuine pixel art */
const INVADER = [
  "00100100",
  "00111100",
  "01111110",
  "11011011",
  "11111111",
  "00100100",
  "01011010",
  "10100101",
];

function Invader({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 8 8" className="h-16 w-16 [image-rendering:pixelated]" aria-hidden>
      {INVADER.flatMap((row, y) =>
        row.split("").map((bit, x) =>
          bit === "1" ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={color} />
          ) : null
        )
      )}
    </svg>
  );
}

export default function ArcadeBoard() {
  return (
    <div className="theme-arcade min-h-screen bg-[var(--bg)] text-[var(--text)] [font-family:var(--font-body)]">
      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Link
              href="/"
              className="text-xs tracking-[0.18em] uppercase text-[var(--muted)] hover:text-[var(--text)]"
            >
              ← Hub
            </Link>
            <h1 className="mt-3 text-3xl text-[var(--accent)] [font-family:var(--font-display)] [text-shadow:0_0_18px_rgba(200,255,0,0.5)]">
              ARCADE
            </h1>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Neon · Pixel · One more run
            </p>
          </div>
          <p className="max-w-[230px] text-right text-xs leading-relaxed text-[var(--muted)]">
            ✦ original CSS/SVG studies, plus sourced references (credited on
            each)
          </p>
        </header>

        <section
          aria-label="28 artifacts"
          className="mt-8 grid auto-rows-[92px] grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6"
        >
          {/* — color: four earned UI roles, two stayed inspiration — */}
          <Swatch hex="#0c0c12" name="Void" span="row-span-2" role="→ background" />
          <Swatch hex="#c8ff00" name="Acid" span="row-span-2" light role="→ accent · player one" />
          <Swatch hex="#ff2e88" name="Magenta" light role="→ accent 2 · player two" />
          <Swatch hex="#2de2e6" name="Cyan" light role="inspiration only" />
          <Swatch hex="#7b2ff7" name="Ultra" role="inspiration only" />
          <Swatch hex="#16161f" name="Panel" role="→ surface" />

          {/* — type — */}
          <Tile
            span="row-span-2 col-span-2"
            className="items-center justify-center border border-[var(--border)] bg-[var(--surface)]"
            label="Press Start 2P"
          >
            <span className="text-5xl text-[var(--text)] [font-family:var(--font-display)]">
              Aa
            </span>
          </Tile>
          <Tile
            span="col-span-2"
            className="items-center justify-center bg-[var(--accent)]"
          >
            <span className="text-xs text-[var(--accent-ink)] [font-family:var(--font-display)]">
              INSERT COIN
            </span>
          </Tile>
          <Tile
            span="col-span-2"
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="body"
          >
            <span className="px-3 text-center text-[13px] leading-snug">
              Fast hands. Faster feedback.
            </span>
          </Tile>

          {/* — sourced references (this refinement) — */}
          <RefTile
            span="col-span-2 row-span-4"
            src="/refs/arcade/space-invaders-cabinet.jpg"
            alt="A Space Invaders cocktail-table arcade cabinet with the game glowing green on its screen"
            title="Cabinet · Space Invaders"
            credit="Tomomarusan, CC BY 2.5"
          />
          <RefTile
            span="col-span-2 row-span-3"
            src="/refs/arcade/vt100.jpg"
            alt="A DEC VT100 computer terminal with a dark CRT screen and beige keyboard"
            title="CRT · DEC VT100"
            credit="Jason Scott, CC BY 2.0"
          />
          <RefTile
            span="col-span-2 row-span-3"
            src="/refs/arcade/punch-cards.jpg"
            alt="An archive room densely stacked with boxes of IBM punched cards"
            title="Early computing · card storage"
            credit="U.S. National Archives, public domain"
          />
          <RefTile
            span="col-span-2 row-span-3"
            src="/refs/arcade/vt100-keys.jpg"
            alt="Close-up of a VT100 keyboard's beige keycaps"
            title="Keycaps"
            credit="snuci, public domain"
          />
          <RefTile
            span="col-span-2 row-span-3"
            src="/refs/arcade/cabinet-2.jpg"
            alt="An upright Space Invader arcade cabinet with painted side art"
            title="Cabinet · side art"
            credit="Scalleja, CC BY-SA 2.0"
          />
          <Tile
            span="row-span-3 col-span-2"
            className="texture-grid bg-[linear-gradient(180deg,#0c0c12_0%,#131324_100%)]"
            label="neon grid"
          />

          {/* — sprites & HUD — */}
          <Tile
            span="row-span-2"
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="invader"
          >
            <Invader color="#c8ff00" />
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="lives"
          >
            <span className="text-lg tracking-widest text-[var(--accent-2)]">
              ♥ ♥ ♥
            </span>
          </Tile>
          <Tile
            span="col-span-2"
            className="items-center justify-center gap-2 bg-[var(--surface)] border border-[var(--border)]"
            label="health bar"
          >
            <span className="flex h-4 w-32 gap-[3px] border border-[var(--accent)] p-[2px]">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className={`flex-1 ${i < 6 ? "bg-[var(--accent)]" : "bg-transparent"}`}
                />
              ))}
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="pixel heart"
          >
            <svg viewBox="0 0 9 8" className="h-12 w-14" aria-hidden>
              {[
                "011011000",
                "111111100",
                "111111100",
                "011111000",
                "001110000",
                "000100000",
              ].map((row, y) =>
                row.split("").map((bit, x) =>
                  bit === "1" ? (
                    <rect key={`${x}-${y}`} x={x} y={y + 1} width="1" height="1" fill="#ff2e88" />
                  ) : null
                )
              )}
            </svg>
          </Tile>

          {/* — interface pieces — */}
          <Tile
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="button"
          >
            <span className="bg-[var(--accent)] px-4 py-2 text-[10px] text-[var(--accent-ink)] [font-family:var(--font-display)] shadow-[3px_3px_0_#ff2e88]">
              START
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="chip"
          >
            <span className="border border-[var(--accent-2)] px-3 py-1 text-[10px] uppercase tracking-wider text-[var(--accent-2)]">
              LVL 12
            </span>
          </Tile>
          <Tile
            span="col-span-2"
            className="justify-center gap-1 bg-[var(--surface)] border border-[var(--border)] px-4"
            label="leaderboard row"
          >
            <span className="flex items-baseline justify-between text-sm">
              <span className="text-[var(--accent)] [font-family:var(--font-display)] text-[10px]">
                1ST
              </span>
              <span>AAA</span>
              <span className="text-[var(--muted)]">120 450</span>
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="toggle · on"
          >
            <span className="flex h-6 w-12 items-center border border-[var(--accent)] px-0.5">
              <span className="ml-auto h-4 w-4 bg-[var(--accent)]" />
            </span>
          </Tile>
          <Tile
            className="items-center justify-center bg-[var(--surface)] border border-[var(--border)]"
            label="coin"
          >
            <svg viewBox="0 0 24 24" className="h-12 w-12" aria-hidden>
              <circle cx="12" cy="12" r="10" fill="#c9a227" />
              <circle cx="12" cy="12" r="7" fill="none" stroke="#0c0c12" strokeWidth="1.5" />
              <rect x="10.5" y="7" width="3" height="10" fill="#0c0c12" />
            </svg>
          </Tile>

          {/* — studies & words — */}
          <Tile
            span="row-span-2 col-span-2"
            className="justify-center gap-1 bg-[var(--surface)] border border-[var(--border)] px-4 pb-6"
            label="study · instruction card"
          >
            <span className="text-[8px] text-[var(--accent)] [font-family:var(--font-display)]">
              HOW TO PLAY
            </span>
            <span className="text-[10px] leading-relaxed text-[var(--muted)]">
              ① INSERT COIN
              <br />② PICK AN ERA
              <br />③ READ
            </span>
          </Tile>
          <Tile
            span="row-span-2 col-span-2"
            className="justify-center gap-1 bg-[#0a0f0a] px-4 pb-6"
            label="study · 1978 terminal"
          >
            <span className="font-mono text-[11px] leading-relaxed text-[#33ff66]">
              &gt; LOAD &quot;LANDMARKS&quot;
              <br />
              &gt; RUN
              <br />
              &gt; <span className="animate-pulse">▮</span>
            </span>
          </Tile>
          <Tile
            span="col-span-2"
            className="items-center justify-center bg-[#16161f] texture-scanlines"
          >
            <span className="text-[11px] text-[var(--text)] [font-family:var(--font-display)]">
              GAME OVER
            </span>
          </Tile>
          <Tile
            span="col-span-2"
            className="items-center justify-center border border-[var(--accent-2)] bg-[var(--bg)]"
          >
            <span className="animate-pulse text-xs text-[var(--accent-2)] [font-family:var(--font-display)]">
              READY?
            </span>
          </Tile>
        </section>

        <footer className="mt-8 text-center text-xs text-[var(--muted)]">
          28 artifacts · color (roles marked), type, sprites, studies,
          interface pieces, and five sourced references — credits on each tile
          and in the repository&apos;s ATTRIBUTIONS.md
        </footer>

        <section className="mx-auto mt-10 max-w-2xl border-t border-[var(--border)] pt-6">
          <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--muted)]">
            Three lessons this board teaches the system
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[13px] leading-relaxed text-[var(--muted)]">
            <li>
              The Space Invaders cabinets put one glowing color on near-black
              wood and glass — that became the display treatment, and the rule
              that glow belongs to headlines, never body text.
            </li>
            <li>
              Game HUDs confirm every input instantly — health bars, score
              ticks — which became the hard-offset press states: buttons that
              physically move when you hit them.
            </li>
            <li>
              The VT100&apos;s screen shouts while its keycaps stay quiet beige —
              the same ration the system keeps between Press Start 2P labels
              and readable Space Grotesk body text.
            </li>
          </ol>
          <p className="mt-3 text-[11px] italic text-[var(--muted)]">
            The sourced references were added in the October refinement pass to
            ground these lessons in real material.
          </p>
          <p className="mt-5 text-[13px]">
            <Link
              href="/design-systems/arcade"
              className="text-[var(--accent)] underline underline-offset-4 hover:text-[var(--accent-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              See the design system built from this board →
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
