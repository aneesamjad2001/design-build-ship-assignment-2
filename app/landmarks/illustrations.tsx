/**
 * Archival-style figures for pivotal entries, drawn as inline SVG in the
 * Editorial system's monochrome ink. Each is wrapped in a <figure> with a
 * caption; conceptual drawings are labeled as such, and the one quantitative
 * figure (AlexNet) uses the exact published numbers with every value printed
 * directly on the mark — nothing is hidden behind hover.
 */

const INK = "#121212";
const MUTED = "#57544c";
const PAPER = "#faf7f1";

const capsLabel = {
  fontFamily: "var(--font-geist-sans)",
  fontSize: 8,
  letterSpacing: "0.18em",
  fill: MUTED,
} as const;

function Figure({
  n,
  heading,
  caption,
  children,
}: {
  n: number;
  heading: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-6 border-y border-[var(--border)] py-4">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <span className="text-[10px] font-semibold tracking-[0.25em] text-[var(--text)] [font-family:var(--font-geist-sans)]">
          FIG. {n}
        </span>
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[var(--muted)] [font-family:var(--font-geist-sans)]">
          {heading}
        </span>
      </div>
      {children}
      <figcaption className="mt-3 text-[12px] italic leading-relaxed text-[var(--muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}

/* --- Fig. 1 · Perceptron -------------------------------------------------- */

function PerceptronFigure() {
  const sUnits: [number, number][] = [];
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 4; c++) sUnits.push([26 + c * 18, 36 + r * 26]);
  const aUnits: [number, number][] = [
    [176, 49],
    [176, 88],
    [176, 127],
  ];

  return (
    <Figure n={1} heading="How it was wired" caption="Conceptual schematic after Rosenblatt (1958): sensory units respond to the image, association units combine them through adjustable weights, and a single response unit answers.">
      <svg
        viewBox="0 0 320 180"
        className="h-auto w-full"
        role="img"
        aria-labelledby="fig-perceptron-title"
      >
        <title id="fig-perceptron-title">
          Schematic of the perceptron: a four-by-four grid of sensory units
          connects through three association units to one response unit.
        </title>
        {/* connections S → A (drawn from the grid's right column for clarity) */}
        {sUnits
          .filter(([x]) => x === 80)
          .map(([x, y]) =>
            aUnits.map(([ax, ay]) => (
              <line
                key={`${x}-${y}-${ax}-${ay}`}
                x1={x + 5}
                y1={y}
                x2={ax - 10}
                y2={ay}
                stroke={INK}
                strokeWidth="0.7"
                opacity="0.3"
              />
            ))
          )}
        {/* connections A → R */}
        {aUnits.map(([ax, ay]) => (
          <line
            key={`a-${ay}`}
            x1={ax + 10}
            y1={ay}
            x2={258}
            y2={88}
            stroke={INK}
            strokeWidth="1.4"
          />
        ))}
        {/* retina frame */}
        <rect
          x="12"
          y="22"
          width="82"
          height="118"
          fill="none"
          stroke={MUTED}
          strokeWidth="0.8"
          strokeDasharray="3 3"
        />
        {/* sensory units */}
        {sUnits.map(([x, y]) => (
          <circle key={`s-${x}-${y}`} cx={x} cy={y} r="4.5" fill="none" stroke={INK} strokeWidth="1.1" />
        ))}
        {/* association units */}
        {aUnits.map(([x, y]) => (
          <circle key={`au-${y}`} cx={x} cy={y} r="9" fill={PAPER} stroke={INK} strokeWidth="1.4" />
        ))}
        {/* response unit */}
        <circle cx="270" cy="88" r="11" fill={INK} />
        <text x="270" y="91.5" textAnchor="middle" fontSize="10" fill={PAPER} fontFamily="var(--font-playfair)">
          R
        </text>
        {/* arrow out */}
        <line x1="281" y1="88" x2="305" y2="88" stroke={INK} strokeWidth="1.4" />
        <path d="M305 88 l-5 -3 v6 Z" fill={INK} />
        <text x="12" y="158" {...capsLabel}>
          SENSORY UNITS
        </text>
        <text x="146" y="158" {...capsLabel}>
          ASSOCIATION
        </text>
        <text x="248" y="158" {...capsLabel}>
          RESPONSE
        </text>
      </svg>
    </Figure>
  );
}

/* --- Fig. 2 · AlexNet ----------------------------------------------------- */

function AlexNetFigure() {
  // ILSVRC-2012 top-5 error, as published: AlexNet 15.3%, runner-up (ISI) 26.2%.
  const scale = 240 / 26.2;
  const x0 = 10;
  const bars = [
    { label: "ALEXNET · TORONTO", value: 15.3, y: 26, solid: true },
    { label: "RUNNER-UP · ISI", value: 26.2, y: 70, solid: false },
  ];
  return (
    <Figure n={2} heading="The result" caption="Top-5 error on the ImageNet 2012 challenge: 15.3% for AlexNet against 26.2% for the next best entry. Source: Krizhevsky, Sutskever & Hinton (2012); ILSVRC-2012 results.">
      <svg
        viewBox="0 0 320 112"
        className="h-auto w-full"
        role="img"
        aria-labelledby="fig-alexnet-title"
      >
        <title id="fig-alexnet-title">
          Bar chart: AlexNet&apos;s top-5 error of 15.3 percent compared with the
          runner-up&apos;s 26.2 percent at the 2012 ImageNet challenge.
        </title>
        <defs>
          <pattern id="halftone-bar" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={INK} opacity="0.45" />
          </pattern>
        </defs>
        {bars.map((b) => (
          <g key={b.label}>
            <text x={x0} y={b.y - 7} {...capsLabel}>
              {b.label}
            </text>
            <rect
              x={x0}
              y={b.y}
              width={b.value * scale}
              height="16"
              rx="2"
              fill={b.solid ? INK : "url(#halftone-bar)"}
              stroke={b.solid ? "none" : INK}
              strokeWidth={b.solid ? 0 : 1}
            />
            <text
              x={x0 + b.value * scale + 7}
              y={b.y + 12}
              fontSize="12"
              fontWeight="600"
              fill={INK}
              fontFamily="var(--font-geist-sans)"
            >
              {b.value}%
            </text>
          </g>
        ))}
        {/* baseline */}
        <line x1={x0} y1="14" x2={x0} y2="92" stroke={INK} strokeWidth="1.2" />
        <text x={x0} y="106" {...capsLabel}>
          TOP-5 ERROR · ILSVRC-2012 · LOWER IS BETTER
        </text>
      </svg>
    </Figure>
  );
}

/* --- Fig. 3 · Transformer ------------------------------------------------- */

function TransformerFigure() {
  const tokens = ["The", "cat", "sat", "on", "the", "mat"];
  const weights = [0.9, 3.4, 0, 0.8, 0.9, 2.4]; // stroke widths from "sat"
  const boxW = 46;
  const gap = 5;
  const x = (i: number) => 7 + i * (boxW + gap);
  const queryIndex = 2;
  const qx = x(queryIndex) + boxW / 2;
  return (
    <Figure n={3} heading="What attention does" caption="Conceptual: one attention head weighing every word in the sentence while reading “sat” — heavier lines, more attention. Simplified after Vaswani et al. (2017).">
      <svg
        viewBox="0 0 320 128"
        className="h-auto w-full"
        role="img"
        aria-labelledby="fig-transformer-title"
      >
        <title id="fig-transformer-title">
          Diagram of attention: the word sat connects to every other word in
          the sentence with lines of varying thickness; cat and mat receive
          the strongest attention.
        </title>
        <text x="7" y="14" {...capsLabel}>
          ATTENTION WHILE READING “SAT”
        </text>
        {tokens.map((_t, i) => {
          if (i === queryIndex) return null;
          const tx = x(i) + boxW / 2;
          const peak = 30 + Math.abs(i - queryIndex) * 4;
          return (
            <path
              key={`arc-${i}`}
              d={`M ${qx} 92 C ${qx} ${peak}, ${tx} ${peak}, ${tx} 92`}
              fill="none"
              stroke={INK}
              strokeWidth={weights[i]}
              opacity={0.25 + weights[i] * 0.18}
              strokeLinecap="round"
            />
          );
        })}
        {tokens.map((t, i) => (
          <g key={t + i}>
            <rect
              x={x(i)}
              y="92"
              width={boxW}
              height="26"
              fill={i === queryIndex ? INK : PAPER}
              stroke={INK}
              strokeWidth="1.2"
            />
            <text
              x={x(i) + boxW / 2}
              y="109"
              textAnchor="middle"
              fontSize="12"
              fontFamily="var(--font-source-serif)"
              fill={i === queryIndex ? PAPER : INK}
            >
              {t}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export const ILLUSTRATIONS: Record<string, () => React.ReactNode> = {
  perceptron: PerceptronFigure,
  alexnet: AlexNetFigure,
  transformer: TransformerFigure,
};
