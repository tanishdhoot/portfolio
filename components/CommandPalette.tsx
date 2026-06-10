"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface Command {
  label: string;
  hint: string;
  action: () => void;
}

/**
 * ⌘K / Ctrl+K command palette. Arrow keys navigate, Enter runs, Esc closes.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const commands: Command[] = useMemo(
    () => [
      {
        label: "View work",
        hint: "scroll",
        action: () => {
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        label: "Read notes",
        hint: "page",
        action: () => {
          window.location.href = "/blog";
        },
      },
      {
        label: "Book 15 minutes",
        hint: "cal.com",
        action: () => window.open("https://cal.com/tanishdhoot", "_blank"),
      },
      {
        label: "GitHub",
        hint: "link",
        action: () => window.open("https://github.com/tanishdhoot", "_blank"),
      },
      {
        label: "LinkedIn",
        hint: "link",
        action: () =>
          window.open("https://www.linkedin.com/in/tanish-dhoot/", "_blank"),
      },
      {
        label: "Copy email",
        hint: "clipboard",
        action: () => {
          void navigator.clipboard.writeText("tanish.dhoot98@gmail.com");
        },
      },
      {
        label: "Email me",
        hint: "mailto",
        action: () => {
          window.location.href = "mailto:tanish.dhoot98@gmail.com";
        },
      },
    ],
    []
  );

  const filtered = useMemo(
    () =>
      commands.filter((c) =>
        c.label.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [commands, query]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const run = (cmd: Command) => {
    close();
    cmd.action();
  };

  return (
    <div
      className="fixed inset-0 z-[105] flex items-start justify-center pt-[18vh] px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <button
        aria-label="Close"
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
        onClick={close}
      />
      <div className="relative w-full max-w-lg rounded-lg border border-border bg-surface shadow-[0_0_80px_rgba(212,175,55,0.07)] overflow-hidden">
        <div className="flex items-center gap-3 border-b border-border px-4">
          <span className="text-gold font-mono text-sm">›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter" && filtered[active]) {
                run(filtered[active]);
              }
            }}
            placeholder="Type a command…"
            className="w-full bg-transparent py-3.5 font-mono text-sm text-ink placeholder:text-muted/60 focus:outline-none"
          />
          <kbd className="font-mono text-[10px] text-muted border border-border rounded px-1.5 py-0.5">
            esc
          </kbd>
        </div>
        <ul className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-3 font-mono text-sm text-muted">
              no matches
            </li>
          )}
          {filtered.map((cmd, i) => (
            <li key={cmd.label}>
              <button
                onClick={() => run(cmd)}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                  i === active ? "bg-raised text-gold" : "text-ink"
                }`}
              >
                <span>{cmd.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-caps text-muted">
                  {cmd.hint}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
