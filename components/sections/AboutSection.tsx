"use client";

import { useRef } from "react";
import { PORTFOLIO } from "@/lib/data";
import { useInView } from "@/lib/useInView";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-cyan/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* ── Left: Avatar / Code Block ── */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            {/* Abstract hexagon identity graphic */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Outer rotating ring */}
              <div className="relative w-72 h-72 mx-auto">
                {/* Concentric hexagons */}
                <div className="absolute inset-0 border border-cyber-cyan/20 clip-hex animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-6 border border-cyber-magenta/20 clip-hex animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute inset-12 border border-cyber-cyan/30 clip-hex animate-[spin_15s_linear_infinite]" />

                {/* Center avatar placeholder */}
                <div
                  className="absolute inset-20 bg-gradient-to-br from-cyber-cyan/20 to-cyber-magenta/20
                                clip-hex border border-cyber-cyan/40 flex items-center justify-center"
                >
                  <span className="font-display text-4xl font-black text-white">
                    {PORTFOLIO.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>

                {/* Orbit dots */}
                {[0, 72, 144, 216, 288].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-cyber-cyan rounded-full shadow-neon-cyan"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${deg}deg) translateY(-130px) translateX(-4px)`,
                      animationDelay: `${i * 0.2}s`,
                      animation: "glowPulse 3s ease-in-out infinite",
                    }}
                  />
                ))}
              </div>

              {/* Code snippet decorations */}
              <div className="absolute -bottom-4 -right-4 card-cyber p-4 bg-cyber-surface/90 backdrop-blur-sm border border-cyber-border">
                <p className="font-mono text-xs text-cyber-muted">
                  <span className="text-cyber-magenta">const</span>{" "}
                  <span className="text-cyber-cyan">me</span>{" "}
                  <span className="text-white">= &#123;</span>
                </p>
                <p className="font-mono text-xs pl-4">
                  <span className="text-cyber-yellow">passion</span>
                  <span className="text-white">: </span>
                  <span className="text-cyber-green">&quot;building&quot;</span>
                  <span className="text-white">,</span>
                </p>
                <p className="font-mono text-xs text-white">&#125;</p>
              </div>
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div>
              <p className="section-label mb-3">01 / About</p>
              <h2 className="section-title mb-6">
                Who I <span className="text-cyber-cyan text-glow-cyan">Am</span>
              </h2>
            </div>

            <div className="space-y-4">
              {PORTFOLIO.about.bio.map((para, i) => (
                <p key={i} className="text-cyber-text/80 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Tech philosophy quote */}
            <blockquote className="border-l-2 border-cyber-cyan pl-5 py-1">
              <p className="font-body italic text-cyber-muted text-sm">
                &ldquo;Code is read far more often than it is written. Write for
                your future self and your teammates.&rdquo;
              </p>
            </blockquote>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {PORTFOLIO.about.stats.map((stat, i) => (
                <div
                  key={i}
                  className="card-cyber p-4 text-center border-cyber-border hover:border-cyber-cyan/40
                             transition-colors duration-300 group"
                >
                  <p
                    className="font-display text-2xl font-bold text-cyber-cyan text-glow-cyan
                                group-hover:animate-glow-pulse"
                  >
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-cyber-muted mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
