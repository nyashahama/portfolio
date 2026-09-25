import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import SceneBoundary from "@/components/immersive/SceneBoundary";

export default function Home() {
  return (
    <main className="portfolio-page">
      <SceneBoundary />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <section className="scene-interlude" aria-labelledby="interlude-title">
        <div className="interlude-copy">
          <p className="eyebrow">THE SPACE BETWEEN / 01</p>
          <h2 id="interlude-title">Beyond<br />the surface<span>.</span></h2>
          <p>Interfaces are the visible layer. The systems beneath them make the experience dependable.</p>
          <a href="#projects" className="action-text">Enter the work ↘</a>
        </div>
        <p className="interlude-index" aria-hidden="true">INTERFACE&nbsp; / &nbsp;SYSTEMS&nbsp; / &nbsp;DELIVERY</p>
      </section>
      <ProjectsSection />
      <ExperienceSection />
      <OpenSourceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
