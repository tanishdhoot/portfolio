"use client";

import { useEffect, useState } from "react";
import { MarketCanvas } from "./MarketCanvas";
import { Magnetic } from "./Magnetic";

const NAME = "TANISH";
const ROLES = ["engineer", "trader", "designer", "builder"];

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setShow(true);
      }, 320);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block font-serif italic text-gold-bright transition-all duration-300 ease-out-expo ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {ROLES[index]}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden border-b border-border">
      <MarketCanvas />
      <div
        className="absolute inset-x-0 top-0 h-96 pointer-events-none opacity-[0.08]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, #D4AF37 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
        <p className="font-mono text-xs uppercase tracking-caps text-muted">
          <span className="text-gold">01</span> — Pune, India ·{" "}
          <RotatingRole />
        </p>

        <h1
          className="mt-6 font-semibold tracking-tightest leading-[0.88] text-[clamp(4.5rem,16vw,13rem)] select-none"
          aria-label={NAME}
        >
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="letter"
              style={{ "--d": `${0.06 * i + 0.2}s` } as React.CSSProperties}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <p className="text-2xl sm:text-3xl leading-snug text-balance max-w-2xl">
            Building things at the intersection of{" "}
            <span className="text-shimmer font-medium">finance</span> and{" "}
            <span className="text-shimmer font-medium">code</span> — small,
            sharp products between markets, software, and design.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Magnetic>
              <a
                href="https://cal.com/tanish-dhoot-cfgc0m/lets-connect"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-gold/60 bg-gold/10 px-7 py-3.5 font-mono text-xs uppercase tracking-caps text-gold hover:bg-gold hover:text-bg transition-colors duration-300"
              >
                <span>book 15 min</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Magnetic>
            <a
              href="#work"
              className="group font-mono text-xs uppercase tracking-caps text-muted hover:text-gold transition-colors"
            >
              view work{" "}
              <span className="inline-block text-gold transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-caps text-muted/60 flex items-center gap-2">
        <kbd className="border border-border rounded px-1.5 py-0.5">⌘K</kbd>
        <span>command palette</span>
      </div>
    </section>
  );
}
