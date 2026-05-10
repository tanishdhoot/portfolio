import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="work"
      className="relative border-b border-border scroll-mt-12"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              {"// selected work"}
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
              What I&apos;m shipping
            </h2>
          </div>
          <p className="hidden sm:block font-mono text-xs text-muted">
            {String(projects.length).padStart(2, "0")} projects
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
