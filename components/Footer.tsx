export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>pune, india</span>
            <span className="text-border">·</span>
            <span>{year}</span>
          </div>

          <nav className="flex items-center gap-5">
            <a
              href="https://github.com/tanishdhoot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/tanish-dhoot/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              linkedin
            </a>
            <a
              href="mailto:tanish.dhoot98@gmail.com"
              className="hover:text-gold transition-colors"
            >
              email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
