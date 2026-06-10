"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor: a gold dot that sticks to the pointer and a lerped ring
 * that trails it. The ring expands over interactive elements. Desktop
 * (pointer: fine) only; never blocks input.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.body.classList.add("custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let hovering = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const target = e.target as Element | null;
      hovering = !!target?.closest("a, button, [data-hover]");
    };

    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      const scale = hovering ? 2.2 : 1;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${scale})`;
      ring.style.borderColor = hovering
        ? "rgba(212, 175, 55, 0.9)"
        : "rgba(212, 175, 55, 0.45)";
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-gold pointer-events-none hidden md:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border border-gold/45 pointer-events-none hidden md:block transition-[border-color] duration-300"
      />
    </>
  );
}
