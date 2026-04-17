"use client";

import { useState, useEffect } from "react";
import { PORTFOLIO } from "@/lib/data";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#notes", label: "Notes" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // ── Scroll detection ──────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section by scroll position
      const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Smooth scroll handler ─────────────────────────────────
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-cyber-bg/95 backdrop-blur-md border-b border-cyber-border"
              : "bg-transparent"
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="font-display text-lg font-bold text-white tracking-widest
                       hover:text-cyber-cyan transition-colors duration-300 group"
          >
            <span className="text-cyber-cyan text-glow-cyan group-hover:animate-flicker">
              &lt;
            </span>
            NH
            <span className="text-cyber-cyan text-glow-cyan group-hover:animate-flicker">
              /&gt;
            </span>
          </a>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`
                      font-mono text-xs tracking-widest uppercase transition-all duration-300
                      relative group
                      ${
                        isActive
                          ? "text-cyber-cyan text-glow-cyan"
                          : "text-cyber-muted hover:text-cyber-text"
                      }
                    `}
                  >
                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyber-cyan rounded-full shadow-neon-cyan" />
                    )}
                    {label}
                    {/* Underline on hover */}
                    <span
                      className={`
                      absolute -bottom-1 left-0 h-px bg-cyber-cyan transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <a
            href={PORTFOLIO.resume}
            className="hidden md:flex items-center gap-2 btn-neon text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>

          {/* ── Mobile menu button ── */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-cyber-cyan transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-cyber-cyan transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-cyber-cyan transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* ── Mobile menu ── */}
      <div
        className={`
        fixed inset-0 z-40 bg-cyber-bg/98 backdrop-blur-xl flex flex-col items-center justify-center
        transition-all duration-500 md:hidden
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      >
        <ul className="flex flex-col items-center gap-8">
          {NAV_LINKS.map(({ href, label }, i) => (
            <li key={href} style={{ animationDelay: `${i * 0.06}s` }}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="font-display text-2xl tracking-widest text-white hover:text-cyber-cyan transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href={PORTFOLIO.resume}
              className="btn-neon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
