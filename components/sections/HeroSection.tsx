import { PORTFOLIO } from "@/lib/data";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-stage" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="signal-dot" />
          Independent engineer <span className="eyebrow-divider">/</span> Cape Town, South Africa
        </p>
        <p className="hero-kicker">Designing what you see. Engineering what you don&apos;t.</p>
        <h1 id="hero-title" className="hero-title">
          <span>Nyasha</span>
          <span>Hama<span className="hero-title-period">.</span></span>
        </h1>
        <p className="hero-role">{PORTFOLIO.role}</p>
        <p className="hero-description">{PORTFOLIO.tagline}</p>
        <div className="hero-actions">
          <a className="action-primary" href="#projects">Explore selected work <span aria-hidden="true">↗</span></a>
          <a className="action-text" href={PORTFOLIO.resume} target="_blank" rel="noopener noreferrer">Download CV <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="hero-coordinate" aria-hidden="true">
        <span>34° 02&apos; S</span><span>18° 28&apos; E</span>
        <span className="hero-coordinate-rule" />
        <span>THE SPACE BETWEEN<br />INTERFACE &amp; INFRASTRUCTURE</span>
      </div>
      <a className="scroll-cue" href="#about">
        <span className="scroll-cue-line" aria-hidden="true" />
        Scroll to enter
      </a>
      <p className="hero-figure-label" aria-hidden="true">FIG. 01 / THE BUILDER</p>
    </section>
  );
}
