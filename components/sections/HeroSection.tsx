"use client";

import { useEffect, useRef, useState } from "react";
import { PORTFOLIO } from "@/lib/data";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const colors = ["#00f5ff", "#ff00aa", "#39ff14"];
    const particles = Array.from({ length: 44 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.24,
      vy: (Math.random() - 0.5) * 0.24,
      radius: Math.random() + 0.45,
      opacity: Math.random() * 0.35 + 0.12,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x = (particle.x + particle.vx + width) % width;
        particle.y = (particle.y + particle.vy + height) % height;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-60"
    />
  );
}

const ACCENTS: Record<
  string,
  { dot: string; text: string; border: string }
> = {
  cyan: {
    dot: "bg-cyber-cyan shadow-neon-cyan",
    text: "text-cyber-cyan",
    border: "border-cyber-cyan/25",
  },
  green: {
    dot: "bg-cyber-green shadow-neon-green",
    text: "text-cyber-green",
    border: "border-cyber-green/25",
  },
  magenta: {
    dot: "bg-cyber-magenta shadow-neon-magenta",
    text: "text-cyber-magenta",
    border: "border-cyber-magenta/25",
  },
};

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="icon-button h-10 w-10 border border-cyber-border bg-cyber-cyan/5 text-cyber-cyan transition-all duration-300 hover:border-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg hover:shadow-neon-cyan"
    >
      {children}
    </a>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-cyber-bg pb-20 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 bg-grid-cyber opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-bg/35 to-cyber-bg" />
      <div className="absolute left-[12%] top-[18%] h-80 w-80 rounded-full bg-cyber-cyan/6 blur-3xl" />
      <div className="absolute bottom-[12%] right-[10%] h-80 w-80 rounded-full bg-cyber-magenta/6 blur-3xl" />
      {mounted && <ParticleCanvas />}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
        <div className="animate-fade-in-left">
          <div className="inline-flex items-center gap-2 border border-cyber-green/40 bg-cyber-green/5 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-cyber-green shadow-neon-green" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cyber-green">
              Open to full-stack opportunities
            </span>
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.28em] text-cyber-cyan sm:text-sm">
            {PORTFOLIO.stackLine}
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[0.94] tracking-wide text-white sm:text-6xl lg:text-7xl">
            Nyasha
            <br />
            <span className="text-cyber-cyan text-glow-cyan">Hama</span>
          </h1>

          <p className="mt-6 font-display text-xl font-semibold leading-snug tracking-wide text-white sm:text-2xl">
            {PORTFOLIO.role}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cyber-muted sm:text-lg">
            {PORTFOLIO.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#experience" className="btn-neon justify-center">
              See the evidence
            </a>
            <a
              href={PORTFOLIO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-magenta justify-center"
            >
              View CV
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <SocialLink href={PORTFOLIO.github} label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </SocialLink>
            <SocialLink href={PORTFOLIO.linkedin} label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </SocialLink>
            <a
              href={`mailto:${PORTFOLIO.email}`}
              className="font-mono text-xs text-cyber-muted transition-colors hover:text-cyber-cyan"
            >
              {PORTFOLIO.email}
            </a>
            <span className="hidden h-px w-6 bg-cyber-border sm:block" />
            <span className="font-mono text-xs text-cyber-muted">
              {PORTFOLIO.location}
            </span>
          </div>
        </div>

        <div className="animate-fade-in-right delay-200">
          <div className="card-cyber border-cyber-border bg-cyber-surface/85 p-5 backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-cyber-border pb-4">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-cyber-muted">
                  Engineering scope
                </p>
                <h2 className="mt-2 font-display text-lg font-bold text-white sm:text-xl">
                  Product to production
                </h2>
              </div>
              <span className="font-mono text-xs text-cyber-cyan">END_TO_END</span>
            </div>

            <div className="divide-y divide-cyber-border">
              {PORTFOLIO.heroProof.map((item, index) => {
                const accent = ACCENTS[item.accent];
                return (
                  <div key={item.label} className="grid grid-cols-[auto_1fr] gap-4 py-5">
                    <div className="pt-1">
                      <span className={`block h-2 w-2 rounded-full ${accent.dot}`} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className={`font-mono text-xs uppercase tracking-[0.18em] ${accent.text}`}>
                          {item.label}
                        </p>
                        <span className="font-mono text-[0.68rem] text-cyber-muted">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-2 font-display text-sm font-semibold text-white sm:text-base">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-cyber-muted">
                        {item.detail}
                      </p>
                      <div className={`mt-3 h-px w-20 border-t ${accent.border}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-cyber-border pt-5">
              <div>
                <p className="font-display text-2xl font-bold text-cyber-cyan">2</p>
                <p className="font-mono text-[0.68rem] uppercase leading-relaxed tracking-wider text-cyber-muted">
                  End-to-end products
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-cyber-green">3</p>
                <p className="font-mono text-[0.68rem] uppercase leading-relaxed tracking-wider text-cyber-muted">
                  Merged upstream PRs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
