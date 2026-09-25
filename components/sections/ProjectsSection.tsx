import Image from "next/image";
import SystemsTraceVisual from "@/components/SystemsTraceVisual";
import { PORTFOLIO, type Project } from "@/lib/data";

function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "clinicpulse") {
    return (
      <div className="project-visual project-visual-clinic">
        <Image
          className="project-photo"
          src="/projects/clinicpulse-concept.png"
          alt="Concept illustration of a fictional clinical worker using a tablet in a dark corridor"
          fill
          sizes="(max-width: 900px) 100vw, 58vw"
        />
        <div className="clinic-flow" aria-label="Illustration of an offline report being queued and synchronized">
          <span>FIELD REPORT</span><span className="flow-node">01 / CAPTURED</span>
          <span className="flow-track" aria-hidden="true"><i /><i /><i /></span>
          <span className="flow-node">02 / QUEUED</span><span className="flow-node is-active">03 / SYNCED</span>
          <small>WORKFLOW ILLUSTRATION</small>
        </div>
        <span className="project-media-caption">CLINICPULSE / CONCEPT ART · FIELD REPORTING</span>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual-strata">
      <div className="project-screen">
        <div className="project-screen-top" aria-hidden="true"><span /><span /><span /><em>STRATAHQ / AGENT WORKSPACE</em></div>
        <Image
          src="/projects/stratahq-dashboard.png"
          alt="StrataHQ agent portfolio dashboard with scheme and collection information"
          width={1440}
          height={900}
          sizes="(max-width: 900px) 100vw, 58vw"
        />
      </div>
      <span className="project-media-caption">STRATAHQ / PORTFOLIO OVERVIEW</span>
    </div>
  );
}

function ProjectFeature({ project }: { project: Project }) {
  return (
    <article className={project.slug === "stratahq" ? "project-feature is-reversed" : "project-feature"}>
      <div className="project-art"><ProjectVisual project={project} /></div>
      <div className="project-story">
        <div className="project-story-top"><span>{project.id} / FEATURED PRODUCT</span><span>{project.status.toUpperCase()}</span></div>
        <h3>{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
        <ul className="project-points">
          {project.highlights.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="project-tech">{project.tech.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-actions">
          <a className="action-primary" href={"/work/" + project.slug}>Explore case study <span aria-hidden="true">↗</span></a>
          {project.live && <a className="action-text" href={project.live} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
          <a className="action-text" href={project.github} target="_blank" rel="noopener noreferrer">Source ↗</a>
        </div>
      </div>
    </article>
  );
}

function SystemsFeature({ project }: { project: Project }) {
  return (
    <article className="systems-feature" aria-labelledby="systems-project-title">
      <SystemsTraceVisual />
      <div className="project-story systems-story">
        <div className="project-story-top"><span>{project.id} / SYSTEMS PROJECT</span><span>{project.status.toUpperCase()}</span></div>
        <h3 id="systems-project-title">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
        <ul className="project-points">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-actions">
          <a className="action-primary" href={"/work/" + project.slug}>Inspect the case <span aria-hidden="true">↗</span></a>
          <a className="action-text" href={project.github} target="_blank" rel="noopener noreferrer">Source ↗</a>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const products = PORTFOLIO.projects.filter((project) => project.featured && project.slug !== "tx-proof");
  const txProof = PORTFOLIO.projects.find((project) => project.slug === "tx-proof");
  const searchBackend = PORTFOLIO.projects.find((project) => project.slug === "ecommerce-search-backend");
  return (
    <section id="projects" className="work-section" aria-labelledby="projects-title">
      <div className="section-intro">
        <p className="eyebrow">01 / SELECTED WORK</p>
        <div className="section-intro-row">
          <h2 id="projects-title">Work that<br /><em>goes deeper.</em></h2>
          <p>Two operational products, one bounded failure-testing system, and the engineering decisions you can inspect behind them.</p>
        </div>
      </div>
      {products.map((project) => <ProjectFeature key={project.slug} project={project} />)}
      {txProof && <SystemsFeature project={txProof} />}
      {searchBackend && <article className="research-project additional-project">
        <div className="research-visual" aria-hidden="true">
          <div className="research-lines"><i /><i /><i /><i /></div>
          <div className="research-core"><span>SEARCH</span><strong>4</strong><small>COMPARABLE PATHS</small></div>
          <div className="research-orbits"><span>SQL LIKE</span><span>FULL TEXT</span><span>IN MEMORY</span><span>OPENSEARCH</span></div>
        </div>
        <div className="research-story">
          <p className="eyebrow">{searchBackend.id} / ADDITIONAL BACKEND WORK · {searchBackend.status.toUpperCase()}</p>
          <h3>{searchBackend.name}</h3>
          <p>{searchBackend.description}</p>
          <div className="project-tech">{searchBackend.tech.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="project-actions">
            <a className="action-primary" href={"/work/" + searchBackend.slug}>Explore case study <span aria-hidden="true">↗</span></a>
            <a className="action-text" href={searchBackend.github} target="_blank" rel="noopener noreferrer">Source ↗</a>
          </div>
        </div>
      </article>}
    </section>
  );
}
