"use client";

import { useEffect, useState } from "react";

const LINES = [
  { text: "$ ./tanish --init", delay: 0 },
  { text: "› connecting to NSE feed ......... ok", delay: 0.3 },
  { text: "› loading portfolio ............... ok", delay: 0.6 },
  { text: "› rendering at 60fps .............. ok", delay: 0.9 },
];

/**
 * Terminal boot sequence shown once per browser session, then slides away.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"hidden" | "boot" | "exit">("hidden");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("booted")) return;

    setPhase("boot");
    const exitT = setTimeout(() => setPhase("exit"), 1700);
    const doneT = setTimeout(() => {
      setPhase("hidden");
      // flag only once the boot completes, so a strict-mode double mount
      // (which clears these timers) can re-run the sequence instead of
      // bailing out with the overlay stuck on screen
      sessionStorage.setItem("booted", "1");
    }, 2500);
    return () => {
      clearTimeout(exitT);
      clearTimeout(doneT);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[110] bg-bg flex items-center justify-center ${
        phase === "exit" ? "preloader-exit" : ""
      }`}
    >
      <div className="font-mono text-sm sm:text-base space-y-2 px-6">
        {LINES.map((line) => (
          <p
            key={line.text}
            className="boot-line text-muted"
            style={{ "--d": `${line.delay}s` } as React.CSSProperties}
          >
            {line.text.startsWith("$") ? (
              <span className="text-gold">{line.text}</span>
            ) : (
              <>
                {line.text.slice(0, -2)}
                <span className="text-up">ok</span>
              </>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
