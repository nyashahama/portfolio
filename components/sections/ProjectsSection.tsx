"use client";

import { useRef, useState } from "react";
import { PORTFOLIO, type Project } from "@/lib/data";
import { useInView } from "@/lib/useInView";

const ACCENT_COLORS: Record<
  string,
  { text: string; border: string; shadow: string; bg: string }
> = {
  cyan: {
    text: "text-cyber-cyan",
    border: "border-cyber-cyan",
    shadow: "shadow-neon-cyan",
    bg: "bg-cyber-cyan/10",
  },
  magenta: {
    text: "text-cyber-magenta",
    border: "border-cyber-magenta",
    shadow: "shadow-neon-magenta",
    bg: "bg-cyber-magenta/10",
  },
  green: {
    text: "text-cyber-green",
    border: "border-cyber-green",
    shadow: "shadow-neon-green",
    bg: "bg-cyber-green/10",
  },
  yellow: {
    text: "text-cyber-yellow",
    border: "border-cyber-yellow",
    shadow: "shadow-[0_0_8px_#ffe100]",
    bg: "bg-cyber-yellow/10",
  },
};

function ProjectCard({
  project,
  featured = false,
  delay = 0,
}: {
  project: Project;
  featured?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const accent = ACCENT_COLORS[project.accent] ?? ACCENT_COLORS.cyan;

  return (
    <div
      ref={ref}
      className={`
        card-cyber p-6 group transition-all duration-700 hover:border-${project.accent === "cyan" ? "cyber-cyan" : "cyber-border"}/60
        ${featured ? "lg:p-8" : ""}
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className={`font-mono text-xs ${accent.text} opacity-60`}>
            {project.id}
          </span>
          <div
            className={`w-1.5 h-1.5 rounded-full ${accent.bg} border ${accent.border} ${accent.shadow}`}
          />
        </div>
        <div className="flex items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-muted hover:text-cyber-cyan transition-colors duration-200"
              aria-label="View live demo"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
              </svg>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-muted hover:text-cyber-cyan transition-colors duration-200"
              aria-label="View source"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Name + tagline */}
      <div className="mb-3">
        <h3
          className={`font-display font-bold tracking-wide text-white mb-1 ${featured ? "text-xl" : "text-lg"} group-hover:${accent.text} transition-colors duration-300`}
        >
          {project.name}
        </h3>
        <p
          className={`font-mono text-xs ${accent.text} opacity-70 tracking-wider`}
        >
          {project.tagline}
        </p>
      </div>

      {/* Description */}
      <p className="text-cyber-muted text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`font-mono text-xs px-2 py-0.5 border ${accent.border}/30 ${accent.text}/70 ${accent.bg}`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Corner accent */}
      <div
        className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${accent.border}/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const headerInView = useInView(ref, { threshold: 0.05 });
  const [showAll, setShowAll] = useState(false);

  const featured = PORTFOLIO.projects.filter((p) => p.featured);
  const rest = PORTFOLIO.projects.filter((p) => !p.featured);
  const displayed = showAll ? rest : rest.slice(0, 3);

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg via-transparent to-cyber-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="section-label mb-3">02 / Projects</p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <h2 className="section-title">
              Things I&apos;ve{" "}
              <span className="text-cyber-cyan text-glow-cyan">Built</span>
            </h2>
            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-cyber-muted hover:text-cyber-cyan transition-colors duration-200 shrink-0"
            >
              View all on GitHub →
            </a>
          </div>
        </div>

        {/* Featured grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured
              delay={i * 100}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-cyber-border" />
          <span className="font-mono text-xs text-cyber-muted tracking-widest">
            MORE PROJECTS
          </span>
          <div className="h-px flex-1 bg-cyber-border" />
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>

        {/* Show more toggle */}
        {rest.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="btn-neon text-xs"
            >
              {showAll ? "Show Less" : `Show ${rest.length - 3} More`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
