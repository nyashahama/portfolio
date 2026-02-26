"use client";
import { PORTFOLIO } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative py-12 border-t border-cyber-border bg-cyber-surface/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-display text-cyber-cyan text-glow-cyan font-bold">
            &lt;NH/&gt;
          </span>
          <span className="font-mono text-xs text-cyber-muted">
            {PORTFOLIO.name}
          </span>
        </div>

        {/* Credit */}
        <p className="font-mono text-xs text-cyber-muted text-center">
          © {year} {PORTFOLIO.name} · Built with{" "}
          <span className="text-cyber-cyan">Next.js</span> &{" "}
          <span className="text-cyber-cyan">Tailwind CSS</span>
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-xs text-cyber-muted hover:text-cyber-cyan transition-colors duration-200 flex items-center gap-1.5"
        >
          Back to top
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent" />
    </footer>
  );
}
