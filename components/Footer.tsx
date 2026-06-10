"use client";

import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";

function ISTClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="tabular-nums">{time ?? "--:--:--"} IST</span>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-caps text-gold">
            04 — say hello
          </p>
          <h2 className="mt-6 text-5xl sm:text-7xl font-semibold tracking-tightest">
            Let&apos;s build something{" "}
            <span className="font-serif italic font-light text-shimmer">
              dumb
            </span>
            .
          </h2>
          <div className="mt-10">
            <Magnetic strength={0.25}>
              <a
                href="mailto:tanish.dhoot98@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full border border-gold/60 bg-gold/10 px-8 py-4 font-mono text-xs uppercase tracking-caps text-gold hover:bg-gold hover:text-bg transition-colors duration-300"
              >
                <span>tanish.dhoot98@gmail.com</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-border pt-8 font-mono text-[11px] uppercase tracking-caps text-muted">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>pune, india</span>
            <span className="text-border">·</span>
            <ISTClock />
          </div>

          <nav className="flex items-center gap-5">
            <a href="/blog" className="hover:text-gold transition-colors">
              notes
            </a>
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
            <span className="text-muted/50">© {year}</span>
          </nav>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none text-center font-semibold tracking-tightest leading-none text-[clamp(6rem,22vw,20rem)] text-ink/[0.03] -mb-[0.18em]"
      >
        TANISH
      </div>
    </footer>
  );
}
