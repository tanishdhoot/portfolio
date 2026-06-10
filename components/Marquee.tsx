const ITEMS = [
  "TypeScript",
  "Next.js",
  "React",
  "Kotlin",
  "LLM Agents",
  "Algorithmic Trading",
  "Firebase",
  "PostgreSQL",
  "Razorpay",
  "Indian Markets",
  "Design Systems",
  "Realtime",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="Skills"
      className="border-b border-border py-6 overflow-hidden select-none"
    >
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center shrink-0 font-mono text-xs uppercase tracking-caps text-muted"
          >
            <span className="px-6">{item}</span>
            <span className="text-gold/50">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
