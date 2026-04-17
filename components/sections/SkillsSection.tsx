"use client";

import { useRef, useEffect, useState } from "react";
import { PORTFOLIO } from "@/lib/data";
import { useInView } from "@/lib/useInView";

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const [filled, setFilled] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setFilled(level), delay);
    return () => clearTimeout(timer);
  }, [inView, level, delay]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-cyber-text">{name}</span>
        <span className="font-mono text-xs text-cyber-cyan">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${filled}%` }}>
          {/* Shimmer */}
          <div className="absolute right-0 top-0 h-full w-4 bg-white/40 blur-sm" />
        </div>
      </div>
    </div>
  );
}

const CATEGORY_ACCENTS = [
  {
    text: "text-cyber-cyan",
    border: "border-cyber-cyan",
    dot: "bg-cyber-cyan",
    glow: "shadow-neon-cyan",
  },
  {
    text: "text-cyber-magenta",
    border: "border-cyber-magenta",
    dot: "bg-cyber-magenta",
    glow: "shadow-neon-magenta",
  },
  {
    text: "text-cyber-green",
    border: "border-cyber-green",
    dot: "bg-cyber-green",
    glow: "shadow-neon-green",
  },
];

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const headerInView = useInView(ref, { threshold: 0.05 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 overflow-hidden bg-cyber-surface/30"
    >
      {/* Accent lines */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyber-magenta/20 to-transparent" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="section-label mb-3">03 / Core Stack</p>
          <h2 className="section-title">
            Stack &{" "}
            <span className="text-cyber-cyan text-glow-cyan">Foundations</span>
          </h2>
        </div>

        {/* Skill category cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {PORTFOLIO.skills.categories.map((cat, catIdx) => {
            const accent = CATEGORY_ACCENTS[catIdx % CATEGORY_ACCENTS.length];
            return (
              <div
                key={cat.name}
                className="card-cyber p-6 border-cyber-border hover:border-cyber-cyan/30 transition-colors duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={`font-mono text-xl ${accent.text}`}>
                    {cat.icon}
                  </span>
                  <h3
                    className={`font-display text-sm font-bold tracking-widest uppercase ${accent.text}`}
                  >
                    {cat.name}
                  </h3>
                  <div
                    className={`h-px flex-1 bg-gradient-to-r from-current to-transparent ${accent.text} opacity-30`}
                  />
                </div>

                {/* Skill bars */}
                <div className="space-y-5">
                  {cat.items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIdx * 100 + i * 120}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full tech cloud */}
        <div
          className={`transition-all duration-700 delay-300 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-mono text-xs text-cyber-muted tracking-widest mb-8 text-center">
            // TECHNOLOGIES I WORK WITH
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {PORTFOLIO.skills.technologies.map((tech, i) => {
              // Vary accent colors across the tag cloud
              const colors = [
                "border-cyber-cyan/30 text-cyber-cyan/70 hover:border-cyber-cyan hover:text-cyber-cyan hover:shadow-neon-cyan",
                "border-cyber-magenta/30 text-cyber-magenta/70 hover:border-cyber-magenta hover:text-cyber-magenta hover:shadow-neon-magenta",
                "border-cyber-green/30 text-cyber-green/70 hover:border-cyber-green hover:text-cyber-green hover:shadow-neon-green",
                "border-cyber-yellow/30 text-cyber-yellow/70 hover:border-cyber-yellow hover:text-cyber-yellow",
              ];
              const colorClass = colors[i % colors.length];
              return (
                <span
                  key={tech}
                  className={`font-mono text-xs px-3 py-1.5 border ${colorClass} bg-cyber-surface/50 
                              transition-all duration-300 cursor-default`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
