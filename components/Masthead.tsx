function editionDate(): string {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

const navLinks = [
  { href: "#work", label: "Holdings" },
  { href: "/blog", label: "Notes" },
  { href: "https://github.com/tanishdhoot", label: "GitHub", external: true },
  {
    href: "https://www.linkedin.com/in/tanish-dhoot/",
    label: "LinkedIn",
    external: true,
  },
  { href: "mailto:tanish.dhoot98@gmail.com", label: "Email" },
];

export function Masthead() {
  return (
    <header className="mx-auto max-w-5xl px-6 pt-8">
      <div className="rule-thick pt-2 flex items-baseline justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-caps text-faint">
        <span>Pune Edition</span>
        <span className="hidden sm:inline">{editionDate()}</span>
        <span>Vol. 01 · No. 02</span>
      </div>

      <div className="py-8 sm:py-10 text-center">
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tightest leading-none">
          Tanish Dhoot
        </h1>
        <p className="mt-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-caps text-faint">
          Finance <span className="text-gold">×</span> Code · Formerly
          Smallcase · Third-generation gold trading household
        </p>
      </div>

      <nav className="rule-double pt-3 pb-3 border-b border-rule">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-caps">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-ink hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
