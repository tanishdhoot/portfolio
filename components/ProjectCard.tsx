import type { Project } from "@/lib/projects";

interface LedgerRowProps {
  project: Project;
  index: number;
}

function StatusStamp({ status }: { status: Project["status"] }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 border border-up/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-caps text-up">
        <span className="h-1.5 w-1.5 rounded-full bg-up" />
        Live
      </span>
    );
  }
  if (status === "wip") {
    return (
      <span className="inline-flex items-center border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-caps text-faint">
        In press
      </span>
    );
  }
  return null;
}

export function LedgerRow({ project, index }: LedgerRowProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid gap-3 sm:grid-cols-[3rem_1.1fr_1.5fr_auto] sm:gap-6 border-b border-rule py-7 transition-colors hover:bg-paper-deep/70 sm:items-baseline px-2 -mx-2"
    >
      <span className="font-mono text-xs text-faint tabular-nums pt-1">
        {num}
      </span>

      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight group-hover:text-gold-deep transition-colors">
          {project.name}
        </h3>
        <p className="mt-1 text-sm italic text-faint">{project.tagline}</p>
      </div>

      <div>
        <p className="text-[15px] leading-relaxed text-ink/80">
          {project.description}
        </p>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-caps text-faint">
          {project.stack.join(" · ")}
        </p>
      </div>

      <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-4">
        <StatusStamp status={project.status} />
        <span className="text-gold text-xl transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </a>
  );
}
