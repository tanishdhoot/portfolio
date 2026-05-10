import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between rounded-sm border border-border bg-surface/40 p-7 transition-all duration-200 hover:border-gold/60 hover:bg-surface hover:-translate-y-0.5"
    >
      <div>
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          <span>
            <span className="text-gold/70">/</span>
            {num}
          </span>
          {project.status === "live" && (
            <span className="inline-flex items-center gap-1.5 text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              live
            </span>
          )}
        </div>

        <h3 className="mt-6 text-3xl font-semibold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-gold/90 font-mono">
          {project.tagline}
        </p>

        <p className="mt-5 text-muted leading-relaxed text-[15px]">
          {project.description}
        </p>
      </div>

      <div className="mt-8">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono text-[11px] uppercase tracking-wider text-muted border border-border rounded-sm px-2 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between font-mono text-xs">
          <span className="text-muted lowercase">
            {project.url.replace(/^https?:\/\//, "")}
          </span>
          <span className="text-gold transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
