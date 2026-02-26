"use client";

import { useRef } from "react";
import { PORTFOLIO, type Experience } from "@/lib/data";
import { useInView } from "@/lib/useInView";

const ACCENT_MAP: Record<
  string,
  { dot: string; line: string; tag: string; border: string; glow: string }
> = {
  cyan: {
    dot: "bg-cyber-cyan shadow-neon-cyan",
    line: "from-cyber-cyan/40",
    tag: "text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/10",
    border: "group-hover:border-cyber-cyan/40",
    glow: "shadow-neon-cyan",
  },
  magenta: {
    dot: "bg-cyber-magenta shadow-neon-magenta",
    line: "from-cyber-magenta/40",
    tag: "text-cyber-magenta border-cyber-magenta/30 bg-cyber-magenta/10",
    border: "group-hover:border-cyber-magenta/40",
    glow: "shadow-neon-magenta",
  },
  green: {
    dot: "bg-cyber-green shadow-neon-green",
    line: "from-cyber-green/40",
    tag: "text-cyber-green border-cyber-green/30 bg-cyber-green/10",
    border: "group-hover:border-cyber-green/40",
    glow: "shadow-neon-green",
  },
  yellow: {
    dot: "bg-cyber-yellow",
    line: "from-cyber-yellow/40",
    tag: "text-cyber-yellow border-cyber-yellow/30 bg-cyber-yellow/10",
    border: "group-hover:border-cyber-yellow/40",
    glow: "",
  },
};

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const accent = ACCENT_MAP[exp.accent] ?? ACCENT_MAP.cyan;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid md:grid-cols-[1fr_auto_1fr] gap-0 items-start transition-all duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Left content (odd items empty on desktop) */}
      <div
        className={`pb-12 ${isEven ? "md:pr-12 md:text-right" : "md:hidden"}`}
      >
        {isEven && <ExperienceContent exp={exp} accent={accent} />}
      </div>

      {/* Center: dot + line */}
      <div className="hidden md:flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full ${accent.dot} mt-1.5 z-10 shrink-0`}
        />
        <div
          className={`w-px flex-1 bg-gradient-to-b ${accent.line} to-transparent mt-2`}
        />
      </div>

      {/* Right content */}
      <div className={`pb-12 ${!isEven ? "md:pl-12" : "md:hidden"}`}>
        {/* Mobile: always show */}
        <div className="md:hidden flex items-center gap-3 mb-4">
          <div className={`w-3 h-3 rounded-full ${accent.dot}`} />
          <div
            className={`h-px flex-1 bg-gradient-to-r ${accent.line} to-transparent`}
          />
        </div>
        {!isEven && <ExperienceContent exp={exp} accent={accent} />}
        {/* Mobile content */}
        <div className="md:hidden">
          {isEven && <ExperienceContent exp={exp} accent={accent} />}
        </div>
      </div>
    </div>
  );
}

function ExperienceContent({
  exp,
  accent,
}: {
  exp: Experience;
  accent: ReturnType<(typeof Object)["values"]>[0];
}) {
  return (
    <div
      className={`card-cyber p-6 border-cyber-border ${accent.border} transition-all duration-300 group`}
    >
      {/* Period badge */}
      <span
        className={`inline-block font-mono text-xs px-2 py-0.5 border ${accent.tag} mb-3`}
      >
        {exp.period}
      </span>

      {/* Role & company */}
      <h3 className="font-display text-base font-bold text-white tracking-wide mb-1">
        {exp.role}
      </h3>
      <p className="font-mono text-sm text-cyber-muted mb-1">{exp.company}</p>
      <p className="font-mono text-xs text-cyber-muted/60 mb-4">
        📍 {exp.location}
      </p>

      {/* Description */}
      <p className="text-cyber-text/70 text-sm leading-relaxed mb-4">
        {exp.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2">
        {exp.highlights.map((h, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-xs text-cyber-muted font-mono"
          >
            <span
              className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${accent.dot}`}
            />
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const headerInView = useInView(ref, { threshold: 0.05 });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-cyber-cyan/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-20 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="section-label mb-3">04 / Experience</p>
          <h2 className="section-title">
            Career{" "}
            <span className="text-cyber-cyan text-glow-cyan">Timeline</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-cyber-border" />

          {PORTFOLIO.experience.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
