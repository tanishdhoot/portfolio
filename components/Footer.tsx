export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-5xl px-6 pb-12">
      <div className="rule-thick pt-6 text-center space-y-3">
        <nav className="flex items-center justify-center gap-5 font-mono text-[11px] uppercase tracking-caps text-faint">
          <a href="/blog" className="hover:text-gold transition-colors">
            Notes
          </a>
          <span className="text-rule">·</span>
          <a
            href="https://github.com/tanishdhoot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            GitHub
          </a>
          <span className="text-rule">·</span>
          <a
            href="https://www.linkedin.com/in/tanish-dhoot/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-rule">·</span>
          <a
            href="mailto:tanish.dhoot98@gmail.com"
            className="hover:text-gold transition-colors"
          >
            Email
          </a>
        </nav>
        <p className="font-mono text-[10px] uppercase tracking-caps text-faint/80">
          Set in Fraunces &amp; Geist Mono · Printed on the web from Pune,
          India · © {year} Tanish Dhoot
        </p>
      </div>
    </footer>
  );
}
