"use client";

import { useRef } from "react";
import { PORTFOLIO } from "@/lib/data";
import { useInView } from "@/lib/useInView";

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const education = PORTFOLIO.education;

  return (
    <section
      id="education"
      ref={ref}
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-grid-cyber opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg via-cyber-surface/40 to-cyber-bg" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div
          className={`transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="section-label mb-3">05 / Education</p>
          <div className="card-cyber mt-8 grid gap-6 border-cyber-border p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyber-cyan">
                {education.institution}
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                {education.qualification}
              </h2>
            </div>
            <p className="font-mono text-sm text-cyber-muted">
              {education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
