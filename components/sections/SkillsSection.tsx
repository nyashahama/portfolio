"use client";

import { useRef } from "react";
import { PORTFOLIO } from "@/lib/data";
import { useInView } from "@/lib/useInView";

const ACCENTS = [
  {
    text: "text-cyber-cyan",
    border: "border-cyber-cyan/30",
    background: "bg-cyber-cyan/6",
  },
  {
    text: "text-cyber-magenta",
    border: "border-cyber-magenta/30",
    background: "bg-cyber-magenta/6",
  },
  {
    text: "text-cyber-green",
    border: "border-cyber-green/30",
    background: "bg-cyber-green/6",
  },
  {
    text: "text-cyber-yellow",
    border: "border-cyber-yellow/30",
    background: "bg-cyber-yellow/6",
  },
];

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden bg-cyber-surface/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="section-label mb-3">04 / Engineering Toolkit</p>
          <h2 className="section-title">
            Breadth with a clear <span className="text-cyber-cyan text-glow-cyan">centre of gravity</span>
          </h2>
          <p className="mt-4 max-w-3xl text-cyber-muted">
            Full-stack product delivery leads. Backend, platform, and systems work make that delivery stronger.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PORTFOLIO.skills.categories.map((category, index) => {
            const accent = ACCENTS[index];
            return (
              <article
                key={category.name}
                className={`card-cyber border-cyber-border p-6 transition-all duration-700 sm:p-8 ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className={`border px-2 py-1 font-mono text-xs ${accent.border} ${accent.text} ${accent.background}`}>
                    {category.icon}
                  </span>
                  <div>
                    <h3 className={`font-display text-base font-bold tracking-wide ${accent.text}`}>
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cyber-muted">
                      {category.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className={`border px-2.5 py-1 font-mono text-[0.7rem] text-cyber-text/85 ${accent.border} ${accent.background}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
