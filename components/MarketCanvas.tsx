"use client";

import { useEffect, useRef } from "react";

interface Candle {
  open: number;
  close: number;
  high: number;
  low: number;
}

const CANDLE_W = 14;
const CANDLE_GAP = 8;
const STEP_MS = 600;

function nextCandle(prev: Candle): Candle {
  const open = prev.close;
  const drift = (Math.random() - 0.47) * 0.09;
  const close = Math.min(0.95, Math.max(0.05, open + drift));
  const high = Math.min(0.98, Math.max(open, close) + Math.random() * 0.03);
  const low = Math.max(0.02, Math.min(open, close) - Math.random() * 0.03);
  return { open, close, high, low };
}

/**
 * Ambient candlestick chart that paints itself in real time behind the hero.
 * Pure canvas random walk — devicePixelRatio aware, paused off-screen.
 */
export function MarketCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let candles: Candle[] = [];
    let last = 0;
    let raf = 0;
    let visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.ceil(width / (CANDLE_W + CANDLE_GAP)) + 2;
      let c: Candle = { open: 0.5, close: 0.5, high: 0.52, low: 0.48 };
      candles = Array.from({ length: count }, () => {
        c = nextCandle(c);
        return c;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      candles.forEach((c, i) => {
        const x = i * (CANDLE_W + CANDLE_GAP);
        const up = c.close >= c.open;
        const color = up
          ? "rgba(212, 175, 55, 0.30)"
          : "rgba(138, 133, 122, 0.18)";
        const yOf = (v: number) => height - v * height;

        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + CANDLE_W / 2, yOf(c.high));
        ctx.lineTo(x + CANDLE_W / 2, yOf(c.low));
        ctx.stroke();

        const top = yOf(Math.max(c.open, c.close));
        const bodyH = Math.max(2, Math.abs(yOf(c.open) - yOf(c.close)));
        ctx.fillStyle = color;
        ctx.fillRect(x, top, CANDLE_W, bodyH);
      });
    };

    const tick = (t: number) => {
      if (visible && t - last > STEP_MS) {
        last = t;
        candles = [...candles.slice(1), nextCandle(candles[candles.length - 1])];
        draw();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    if (!reduced) raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-60 [mask-image:linear-gradient(to_top,transparent,black_35%,black_75%,transparent)]"
    />
  );
}
