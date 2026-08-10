"use client";

import { useRef } from "react";
import { PORTFOLIO } from "@/lib/data";
import { useInView } from "@/lib/useInView";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.12 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-cyber-surface/30 py-24 sm:py-28"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyber-cyan/25 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyber-magenta/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div
            className={`transition-all duration-700 ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="section-label mb-4">The through-line</p>
            <h2 className="section-title max-w-xl leading-tight">
              Product craft,
              <br />
              backed by <span className="text-cyber-cyan text-glow-cyan">systems depth</span>
            </h2>
          </div>

          <div
            className={`space-y-5 transition-all delay-150 duration-700 ${
              inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {PORTFOLIO.about.bio.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-cyber-text/85 sm:text-lg">
                {paragraph}
              </p>
            ))}
            <p className="border-l-2 border-cyber-cyan pl-5 font-mono text-sm leading-relaxed text-cyber-muted">
              I care about the full path: how a product feels, how its data moves,
              how failures recover, and how confidently the team can ship it.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {PORTFOLIO.about.pillars.map((pillar, index) => (
            <div
              key={pillar.label}
              className={`card-cyber border-cyber-border p-5 transition-all duration-700 sm:p-6 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cyber-cyan">
                0{index + 1} / {pillar.label}
              </p>
              <p className="mt-3 font-display text-sm font-semibold leading-relaxed text-white sm:text-base">
                {pillar.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
