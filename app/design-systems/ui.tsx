import Link from "next/link";

/** Shared scaffolding for the three design-system pages. The components the
 *  systems showcase are defined per page, in each style's own classes. */

export function Shell({
  theme,
  name,
  blurb,
  children,
}: {
  theme: string;
  name: string;
  blurb: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${theme} min-h-screen bg-[var(--bg)] text-[var(--text)] [font-family:var(--font-body)]`}
    >
      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
        <header>
          <Link
            href="/"
            className="text-xs tracking-[0.18em] uppercase text-[var(--muted)] hover:text-[var(--text)]"
          >
            ← Hub
          </Link>
          <h1 className="mt-2 text-4xl [font-family:var(--font-display)]">
            {name} · Design System
          </h1>
          <p className="mt-2 max-w-xl text-sm text-[var(--muted)]">{blurb}</p>
        </header>
        {children}
      </main>
    </div>
  );
}

export function Section({
  n,
  title,
  note,
  children,
}: {
  n: number;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="flex items-baseline gap-3 text-xs font-semibold tracking-[0.18em] uppercase text-[var(--muted)]">
        <span aria-hidden className="text-[var(--accent)]">
          {String(n).padStart(2, "0")}
        </span>
        {title}
      </h2>
      {note && <p className="mt-1.5 text-xs text-[var(--muted)]">{note}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

/** A labeled specimen cell: the design system's equivalent of a petri dish. */
export function Stage({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={`flex flex-col gap-2 ${className}`}>
      <div className="flex min-h-[64px] flex-1 items-center justify-center rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        {children}
      </div>
      <figcaption className="text-center text-[11px] text-[var(--muted)]">
        {label}
      </figcaption>
    </figure>
  );
}

export function ColorRole({
  hex,
  role,
  ratio,
  border = false,
}: {
  hex: string;
  role: string;
  ratio?: string;
  border?: boolean;
}) {
  return (
    <figure className="flex flex-col gap-1.5">
      <div
        className={`h-16 rounded-[var(--radius)] ${
          border ? "border border-[var(--border)]" : ""
        }`}
        style={{ backgroundColor: hex }}
      />
      <figcaption className="text-[11px] leading-tight">
        <span className="block font-medium">{role}</span>
        <span className="block text-[var(--muted)]">
          {hex}
          {ratio && (
            <>
              {" · "}
              <span title="WCAG contrast against the background">{ratio}</span>
            </>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

/** One row of the control-state matrix: a component name followed by labeled
 *  state specimens. Specimens are static renderings of each state (so hover
 *  and focus can be seen side by side); the working controls live in the
 *  Components section above. */
export function StateRow({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 border-t border-[var(--border)] py-4 sm:grid-cols-[120px_1fr] sm:gap-4">
      <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--text)] sm:pt-2">
        {name}
      </h3>
      <div className="flex flex-wrap items-end gap-x-6 gap-y-3">{children}</div>
    </div>
  );
}

export function StateCell({
  state,
  children,
}: {
  state: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="flex flex-col items-start gap-1.5">
      <div className="flex min-h-[36px] items-center">{children}</div>
      <figcaption className="text-[10px] tracking-wide text-[var(--muted)]">
        {state}
      </figcaption>
    </figure>
  );
}

export function SpacingScale() {
  return (
    <div className="flex items-end gap-2">
      {[4, 8, 12, 16, 24, 32, 48].map((s) => (
        <figure key={s} className="flex flex-col items-center gap-1.5">
          <div
            className="w-5 bg-[var(--accent)] opacity-80"
            style={{ height: s }}
          />
          <figcaption className="text-[10px] text-[var(--muted)]">{s}</figcaption>
        </figure>
      ))}
    </div>
  );
}
