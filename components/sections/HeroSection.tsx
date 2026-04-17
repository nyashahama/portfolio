"use client";

import { useState, useEffect, useRef } from "react";
import { PORTFOLIO } from "@/lib/data";

// ── Minimal particle canvas ───────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ["#00f5ff", "#ff00aa", "#39ff14"];
    const W = () => canvas.width;
    const H = () => canvas.height;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawn = () => {
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * W(),
          y: Math.random() * H(),
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,245,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x = (p.x + p.vx + W()) % W();
        p.y = (p.y + p.vy + H()) % H();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    spawn();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

// ── Animated terminal ─────────────────────────────────────────
function Terminal({ lines }: { lines: string[] }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= lines.length) return;
    const delay = lines[visibleCount]?.startsWith("$") ? 600 : 300;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount, lines]);

  return (
    <div className="card-cyber bg-cyber-surface/80 backdrop-blur-sm p-5 w-full max-w-lg border border-cyber-border">
      {/* Terminal titlebar */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyber-border">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="font-mono text-xs text-cyber-muted ml-2">
          portfolio_v2.0 — bash
        </span>
      </div>

      {/* Terminal body */}
      <div className="space-y-1 min-h-[180px]">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className={`font-mono text-sm leading-relaxed ${
              line.startsWith("$")
                ? "text-cyber-cyan"
                : line.startsWith(">")
                  ? "text-cyber-green"
                  : "text-cyber-text"
            }`}
          >
            {line.startsWith("$") ? (
              <>
                <span className="text-cyber-magenta mr-1">$</span>
                <span>{line.slice(2)}</span>
              </>
            ) : line.startsWith(">") ? (
              <>
                <span className="text-cyber-yellow mr-1 opacity-60">›</span>
                <span>{line.slice(2)}</span>
              </>
            ) : (
              <span className="text-cyber-muted">{line}</span>
            )}
          </div>
        ))}
        {/* Blinking cursor */}
        {visibleCount < lines.length && (
          <span className="inline-block w-2 h-4 bg-cyber-cyan animate-type-cursor" />
        )}
      </div>
    </div>
  );
}

// ── Typewriter for the role ───────────────────────────────────
function Typewriter({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = deleting ? 50 : 80;
    const pause = !deleting && charIndex === current.length ? 1800 : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setDeleting(true);
      } else if (deleting && charIndex > 0) {
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }, pause);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <span>
      <span className="text-cyber-cyan text-glow-cyan">
        {words[wordIndex].slice(0, charIndex)}
      </span>
      <span className="animate-type-cursor text-cyber-cyan">|</span>
    </span>
  );
}

// ── Social icons ─────────────────────────────────────────────
const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 border border-cyber-border flex items-center justify-center
               text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan
               hover:shadow-neon-cyan transition-all duration-300"
  >
    {children}
  </a>
);

// ── Hero section ──────────────────────────────────────────────
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-bg"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-cyber opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-bg/20 to-cyber-bg" />
      {/* Accent glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyber-magenta/5 rounded-full blur-3xl" />

      {mounted && <ParticleCanvas />}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Text ── */}
        <div className="space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 border border-cyber-green/40 bg-cyber-green/5 px-4 py-1.5 animate-fade-in-up">
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse shadow-neon-green" />
            <span className="font-mono text-xs text-cyber-green tracking-widest">
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Name */}
          <div className="space-y-1 animate-fade-in-up delay-100">
            <p className="font-mono text-sm text-cyber-muted tracking-widest">
              Hello, I&apos;m
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-wider text-white leading-none">
              {PORTFOLIO.name.split(" ")[0]}
              <br />
              <span className="text-cyber-cyan text-glow-cyan">
                {PORTFOLIO.name.split(" ")[1]}
              </span>
            </h1>
          </div>

          {/* Animated role */}
          <div className="animate-fade-in-up delay-200">
            <p className="font-display text-xl lg:text-2xl text-white tracking-wide">
              <Typewriter
                words={[
                  "Backend & Platform Engineer",
                  "Go / Rust Builder",
                  "TypeScript + Next.js Engineer",
                  "Systems-Focused Product Developer",
                ]}
              />
            </p>
          </div>

          {/* Tagline */}
          <p className="text-cyber-muted font-body text-lg leading-relaxed max-w-md animate-fade-in-up delay-300">
            {PORTFOLIO.tagline}. I turn complex problems into elegant, scalable
            solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
            <a href="#projects" className="btn-neon">
              View Projects
            </a>
            <a href="#contact" className="btn-neon-magenta">
              Get In Touch
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 animate-fade-in-up delay-500">
            <SocialLink href={PORTFOLIO.github} label="GitHub">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </SocialLink>
            <SocialLink href={PORTFOLIO.linkedin} label="LinkedIn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </SocialLink>
            <SocialLink href={PORTFOLIO.twitter} label="Twitter">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialLink>
            <span className="h-px w-8 bg-cyber-border" />
            <span className="font-mono text-xs text-cyber-muted">
              {PORTFOLIO.location}
            </span>
          </div>
        </div>

        {/* ── Right: Terminal ── */}
        <div className="flex justify-center lg:justify-end animate-fade-in-right delay-300">
          {mounted && <Terminal lines={PORTFOLIO.terminalLines} />}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-mono text-xs text-cyber-muted tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-cyber-cyan to-transparent" />
      </div>
    </section>
  );
}
