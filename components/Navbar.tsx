"use client";

import { useEffect, useRef, useState } from "react";
import { PORTFOLIO } from "@/lib/data";

const LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#open-source", label: "Open source" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const links = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);
    links[0]?.focus();
    const onTab = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || links.length === 0) return;
      const first = links[0];
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 801px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <nav className="site-nav" aria-label="Main navigation">
          <a className="brand" href="#hero" aria-label="Nyasha Hama, back to top" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">N<span>H</span></span>
            <span className="brand-label">NYASHA HAMA <small>ENGINEER / BUILDER</small></span>
          </a>
          <ul className="nav-links">
            {LINKS.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
          </ul>
          <div className="nav-end">
            <a className="nav-cv" href={PORTFOLIO.resume} target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">↗</span></a>
            <button
              ref={triggerRef}
              type="button"
              className="menu-trigger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span /><span />
            </button>
          </div>
        </nav>
      </header>
      <div
        ref={menuRef}
        id="mobile-navigation"
        className={menuOpen ? "mobile-navigation is-open" : "mobile-navigation"}
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul>
            {LINKS.map((link, index) => (
              <li key={link.href}>
                <span aria-hidden="true">0{index + 1}</span>
                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a className="mobile-cv" href={PORTFOLIO.resume} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Download CV ↗</a>
        </nav>
      </div>
    </>
  );
}
