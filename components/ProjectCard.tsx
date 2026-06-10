"use client";

import { useRef } from "react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const MAX_TILT = 7;

/**
 * 3D tilt card with a pointer-tracked gold spotlight.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const num = String(index + 1).padStart(2, "0");

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(0.5 - py) * MAX_TILT}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * MAX_TILT}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="tilt-card group relative flex flex-col justify-between rounded-xl border border-border bg-surface/60 p-8 overflow-hidden hover:border-gold/50 transition-colors duration-300"
    >
      <div className="spotlight" aria-hidden="true" />

      <div className="relative">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-caps text-muted">
          <span>
            <span className="text-gold/70">/</span>
            {num}
          </span>
          {project.status === "live" ? (
            <span className="inline-flex items-center gap-1.5 text-up">
              <span className="h-1.5 w-1.5 rounded-full bg-up animate-pulse" />
              live
            </span>
          ) : (
            <span className="text-muted/70">wip</span>
          )}
        </div>

        <h3 className="mt-7 text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-gold-bright transition-colors duration-300">
          {project.name}
        </h3>
        <p className="mt-2 font-serif italic text-gold/90">{project.tagline}</p>

        <p className="mt-5 text-muted leading-relaxed text-[15px]">
          {project.description}
        </p>
      </div>

      <div className="relative mt-8">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono text-[10px] uppercase tracking-wider text-muted border border-border rounded-full px-2.5 py-1 group-hover:border-gold/30 transition-colors duration-300"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between font-mono text-xs">
          <span className="text-muted/70 lowercase">
            {project.url.replace(/^https?:\/\//, "")}
          </span>
          <span className="text-gold text-base transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
