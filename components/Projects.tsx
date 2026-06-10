import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="work" className="relative border-b border-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-caps text-gold">
                02 — selected work
              </p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tightest">
                What I&apos;m{" "}
                <span className="font-serif italic font-light">shipping</span>
              </h2>
            </div>
            <p className="hidden sm:block font-mono text-xs text-muted">
              {String(projects.length).padStart(2, "0")} projects
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.12}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
