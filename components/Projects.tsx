import { projects } from "@/lib/projects";
import { LedgerRow } from "./ProjectCard";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 pb-20 scroll-mt-8">
      <div className="rule-double pt-4 flex items-baseline justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Selected Holdings
        </h2>
        <p className="font-mono text-[11px] uppercase tracking-caps text-faint">
          {String(projects.length).padStart(2, "0")} positions · all long
        </p>
      </div>

      <div className="mt-4">
        {projects.map((project, i) => (
          <LedgerRow key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
