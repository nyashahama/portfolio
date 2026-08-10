"use client";

import { useRef } from "react";
import { PORTFOLIO, type Project } from "@/lib/data";
import { useInView } from "@/lib/useInView";

const ACCENTS: Record<
  string,
  {
    text: string;
    border: string;
    hoverBorder: string;
    dot: string;
    background: string;
  }
> = {
  cyan: {
    text: "text-cyber-cyan",
    border: "border-cyber-cyan/35",
    hoverBorder: "hover:border-cyber-cyan/50",
    dot: "bg-cyber-cyan shadow-neon-cyan",
    background: "bg-cyber-cyan/7",
  },
  green: {
    text: "text-cyber-green",
    border: "border-cyber-green/35",
    hoverBorder: "hover:border-cyber-green/50",
    dot: "bg-cyber-green shadow-neon-green",
    background: "bg-cyber-green/7",
  },
  yellow: {
    text: "text-cyber-yellow",
    border: "border-cyber-yellow/35",
    hoverBorder: "hover:border-cyber-yellow/50",
    dot: "bg-cyber-yellow",
    background: "bg-cyber-yellow/7",
  },
};

function ExternalIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  wide = false,
}: {
  project: Project;
  index: number;
  wide?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.08 });
  const accent = ACCENTS[project.accent] ?? ACCENTS.cyan;

  return (
    <article
      ref={ref}
      className={`card-cyber group border-cyber-border p-6 transition-all duration-700 sm:p-8 ${accent.hoverBorder} ${
        wide ? "lg:col-span-2" : ""
      } ${inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={wide ? "lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:gap-12" : ""}>
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
              <span className={`font-mono text-xs ${accent.text}`}>{project.id}</span>
              <span className={`border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider ${accent.border} ${accent.text} ${accent.background}`}>
                {project.status}
              </span>
            </div>
            <div className="flex gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} live demo`}
                  className="icon-button h-9 w-9 border border-cyber-border bg-cyber-cyan/5 text-cyber-cyan transition-colors hover:border-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg"
                >
                  <ExternalIcon />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} source code`}
                className="icon-button h-9 w-9 border border-cyber-border bg-cyber-cyan/5 text-cyber-cyan transition-colors hover:border-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          <h3 className="mt-6 font-display text-xl font-bold tracking-wide text-white sm:text-2xl">
            {project.name}
          </h3>
          <p className={`mt-2 font-mono text-xs leading-relaxed ${accent.text}`}>
            {project.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cyber-muted sm:text-base">
            {project.description}
          </p>
        </div>

        <div className={wide ? "mt-7 lg:mt-0" : "mt-7"}>
          <ul className="space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-relaxed text-cyber-text/80">
                <span className={`mt-2 h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((technology) => (
              <span
                key={technology}
                className={`border px-2.5 py-1 font-mono text-[0.68rem] ${accent.border} ${accent.text} ${accent.background}`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.04 });

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-cyber opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg via-transparent to-cyber-bg" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div
          className={`transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="section-label mb-3">03 / Selected Projects</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title">
                Products, not just <span className="text-cyber-cyan text-glow-cyan">code samples</span>
              </h2>
              <p className="mt-4 max-w-2xl text-cyber-muted">
                Three projects chosen for depth, range, and verifiable engineering evidence.
              </p>
            </div>
            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-mono text-xs text-cyber-muted transition-colors hover:text-cyber-cyan"
            >
              Explore all repositories →
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PORTFOLIO.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              wide={index === 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
