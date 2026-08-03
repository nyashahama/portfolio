"use client";

import { useRef } from "react";
import { PORTFOLIO, type OpenSourceContribution } from "@/lib/data";
import { useInView } from "@/lib/useInView";

const ACCENT_MAP: Record<
  string,
  { text: string; border: string; tag: string; dot: string }
> = {
  cyan: {
    text: "text-cyber-cyan",
    border: "border-cyber-cyan/30",
    tag: "text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/10",
    dot: "bg-cyber-cyan shadow-neon-cyan",
  },
  green: {
    text: "text-cyber-green",
    border: "border-cyber-green/30",
    tag: "text-cyber-green border-cyber-green/30 bg-cyber-green/10",
    dot: "bg-cyber-green shadow-neon-green",
  },
  magenta: {
    text: "text-cyber-magenta",
    border: "border-cyber-magenta/30",
    tag: "text-cyber-magenta border-cyber-magenta/30 bg-cyber-magenta/10",
    dot: "bg-cyber-magenta shadow-neon-magenta",
  },
};

function ContributionCard({
  contribution,
  index,
}: {
  contribution: OpenSourceContribution;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const accent = ACCENT_MAP[contribution.accent] ?? ACCENT_MAP.cyan;

  return (
    <div
      ref={ref}
      className={`
        card-cyber p-6 border-cyber-border ${accent.border} group
        transition-all duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span
            className={`w-1.5 h-1.5 rounded-full ${accent.dot}`}
          />
          <h3 className="font-display font-bold tracking-wide text-white text-lg">
            {contribution.name}
          </h3>
        </div>
        <span className={`inline-block font-mono text-xs px-2 py-0.5 border ${accent.tag}`}>
          {contribution.date}
        </span>
      </div>

      <p className="font-mono text-xs text-cyber-muted tracking-wider mb-4">
        {contribution.role}
      </p>

      {/* Summary */}
      <p className="text-cyber-muted text-sm leading-relaxed mb-5">
        {contribution.summary}
      </p>

      {/* Highlights */}
      {contribution.highlights?.length ? (
        <ul className="space-y-2 mb-5">
          {contribution.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-cyber-muted text-xs leading-relaxed"
            >
              <span
                className={`mt-1 h-1.5 w-1.5 rounded-full ${accent.dot} shrink-0`}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {/* PR links */}
      <div className="flex flex-wrap gap-2">
        {contribution.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-xs px-2 py-0.5 border ${accent.border} ${accent.text}/70 bg-cyber-surface/50 hover:${accent.text} transition-colors duration-200`}
          >
            {link.label} ↗
          </a>
        ))}
      </div>

      {/* Corner accent */}
      <div
        className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${accent.border}/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />
    </div>
  );
}

export default function OpenSourceSection() {
  const ref = useRef<HTMLElement>(null);
  const headerInView = useInView(ref, { threshold: 0.05 });

  return (
    <section
      id="open-source"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyber-green/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="section-label mb-3">03 / Upstream OSS</p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <h2 className="section-title">
              Merged into{" "}
              <span className="text-cyber-green text-glow-green">
                Open Source
              </span>
            </h2>
            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-cyber-muted hover:text-cyber-green transition-colors duration-200 shrink-0"
            >
              More on GitHub →
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PORTFOLIO.openSource.map((contribution, i) => (
            <ContributionCard
              key={contribution.name}
              contribution={contribution}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
