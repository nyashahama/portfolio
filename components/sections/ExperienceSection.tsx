"use client";

import { useRef } from "react";
import { PORTFOLIO } from "@/lib/data";
import { useInView } from "@/lib/useInView";

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.08 });
  const experience = PORTFOLIO.experience[0];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute right-[8%] top-24 h-80 w-80 rounded-full bg-cyber-cyan/4 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={`transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="section-label mb-3">01 / Experience</p>
          <h2 className="section-title">
            Building across the <span className="text-cyber-cyan text-glow-cyan">whole stack</span>
          </h2>
        </div>

        <article
          className={`card-cyber mt-12 grid overflow-hidden border-cyber-border transition-all delay-150 duration-700 lg:grid-cols-[0.72fr_1.28fr] ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative border-b border-cyber-border bg-cyber-cyan/4 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div className="absolute left-0 top-0 h-px w-28 bg-cyber-cyan shadow-neon-cyan" />
            <span className="inline-flex border border-cyber-cyan/30 bg-cyber-cyan/8 px-3 py-1 font-mono text-xs text-cyber-cyan">
              {experience.period}
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              {experience.role}
            </h3>
            <p className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-cyber-cyan">
              {experience.company}
            </p>
            <p className="mt-2 font-mono text-xs text-cyber-muted">
              {experience.location}
            </p>
            <p className="mt-7 text-base leading-relaxed text-cyber-muted">
              {experience.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href="#projects"
                className="border border-cyber-border bg-cyber-surface/60 px-3 py-1.5 font-mono text-xs text-cyber-text transition-colors hover:border-cyber-cyan hover:text-cyber-cyan"
              >
                Product work ↓
              </a>
              <a
                href="#open-source"
                className="border border-cyber-border bg-cyber-surface/60 px-3 py-1.5 font-mono text-xs text-cyber-text transition-colors hover:border-cyber-green hover:text-cyber-green"
              >
                Upstream proof ↓
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyber-muted">
              Selected impact
            </p>
            <ol className="mt-2 divide-y divide-cyber-border">
              {experience.highlights.map((highlight, index) => (
                <li key={highlight} className="grid grid-cols-[auto_1fr] gap-4 py-5 sm:gap-6">
                  <span className="font-mono text-xs text-cyber-cyan">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-cyber-text/85 sm:text-base">
                    {highlight}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
}
