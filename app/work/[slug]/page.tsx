import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, PORTFOLIO } from "@/lib/data";
import SystemsTraceVisual from "@/components/SystemsTraceVisual";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PORTFOLIO.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Nyasha Hama`,
    description: project.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.name} — Nyasha Hama`,
      description: project.description,
      url: `/work/${slug}`,
      type: "article",
      images: [`/work/${slug}/opengraph-image`],
    },
  };
}

export default async function WorkDetail({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const caseHeading = {
    clinicpulse: "Field reporting that can recover.",
    stratahq: "Reconciliation when a reference is ambiguous.",
    "tx-proof": "Turn uncertainty into a replayable case.",
    "ecommerce-search-backend": "Four search paths. One comparable system.",
  }[project.slug];

  return (
    <main className="case-page">
      <header className="case-nav">
        <Link className="brand" href="/" aria-label="Back to Nyasha Hama portfolio"><span className="brand-mark">N<span>H</span></span><span className="brand-label">NYASHA HAMA <small>ENGINEER / BUILDER</small></span></Link>
        <Link className="case-back" href="/#projects">← Back to selected work</Link>
      </header>
      <article>
        <div className="case-hero">
          <p className="eyebrow">SELECTED WORK / {project.id} / {project.status.toUpperCase()}</p>
          <h1>{project.name}<span>.</span></h1>
          <p className="case-lead">{project.tagline}</p>
          <div className="case-hero-bottom"><span>{project.slug === "tx-proof" ? "SYSTEMS & CORRECTNESS" : project.slug === "ecommerce-search-backend" ? "BACKEND STUDY" : "PRODUCT & ENGINEERING"}</span><span>SCROLL TO EXPLORE ↓</span></div>
        </div>
        {(project.slug === "clinicpulse" || project.slug === "stratahq") ? (
          <div className="case-image">
            <Image
              src={project.slug === "clinicpulse" ? "/projects/clinicpulse-concept.png" : "/projects/stratahq-dashboard.png"}
              alt={project.slug === "clinicpulse" ? "Concept illustration of a fictional clinical worker using a tablet" : "StrataHQ agent portfolio dashboard"}
              width={project.slug === "clinicpulse" ? 1536 : 1440}
              height={project.slug === "clinicpulse" ? 1024 : 900}
              priority
            />
            <p>{project.slug === "clinicpulse" ? "CLINICPULSE / CONCEPT ILLUSTRATION" : "STRATAHQ / AGENT WORKSPACE CAPTURE"}</p>
          </div>
        ) : project.slug === "tx-proof" ? (
          <div className="case-systems-visual"><SystemsTraceVisual /></div>
        ) : <div className="case-search-visual" aria-label="Diagram showing four comparative search methods"><span>SQL LIKE</span><span>POSTGRES FULL TEXT</span><strong>SEARCH × 4</strong><span>IN MEMORY</span><span>OPENSEARCH</span></div>}
        {project.slug === "clinicpulse" && (
          <div className="case-product-evidence" aria-label="ClinicPulse seeded workflow captures">
            <figure>
              <Image src="/projects/clinicpulse-district-console.png" alt="Seeded ClinicPulse district console showing clinic risk and triage context" width={1440} height={1100} sizes="(max-width: 800px) 100vw, 70vw" />
              <figcaption>DISTRICT CONSOLE / LOCAL SEEDED CAPTURE</figcaption>
            </figure>
            <figure>
              <Image src="/projects/clinicpulse-field-report-mobile.png" alt="Seeded ClinicPulse mobile field report view showing assigned clinics and offline sync status" width={390} height={844} sizes="(max-width: 800px) 100vw, 30vw" />
              <figcaption>FIELD REPORTING / LOCAL SEEDED CAPTURE</figcaption>
            </figure>
          </div>
        )}
        <div className="case-body">
          <aside><span>THE PROJECT</span><span>{project.status.toUpperCase()}</span></aside>
          <div>
            <h2>{caseHeading}</h2>
            <p className="case-description">{project.description}</p>
            <section className="case-chapter">
              <p className="case-chapter-label">01 / THE PROBLEM</p>
              <h3>What made this hard</h3>
              <p>{project.caseStudy.problem}</p>
            </section>
            <section className="case-chapter">
              <p className="case-chapter-label">02 / ROLE &amp; CONSTRAINTS</p>
              <h3>What I owned</h3>
              <p>{project.caseStudy.role}</p>
              <p>{project.caseStudy.constraints}</p>
            </section>
            <section className="case-chapter">
              <p className="case-chapter-label">03 / DECISIONS</p>
              <h3>How the boundary works</h3>
              <ol className="case-highlights">
                {project.caseStudy.decisions.map((decision, index) => <li key={decision}><span>0{index + 1}</span><p>{decision}</p></li>)}
              </ol>
            </section>
            <section className="case-chapter case-failure">
              <p className="case-chapter-label">04 / FAILURE CASE</p>
              <h3>The case worth testing</h3>
              <p>{project.caseStudy.failureCase}</p>
            </section>
            <section className="case-chapter">
              <p className="case-chapter-label">05 / PROOF &amp; LIMITS</p>
              <h3>What the evidence supports</h3>
              <p>{project.caseStudy.verification}</p>
              <p>{project.caseStudy.limitations}</p>
              <div className="case-evidence-links">
                {project.caseStudy.evidenceLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}
              </div>
            </section>
            <div className="case-tools"><p>TOOLS &amp; TECHNOLOGIES</p><div>{project.tech.map((item) => <span key={item}>{item}</span>)}</div></div>
            <div className="case-actions">
              {project.live && <a className="action-primary" href={project.live} target="_blank" rel="noopener noreferrer">Open live demo ↗</a>}
              <a className="action-text" href={project.github} target="_blank" rel="noopener noreferrer">View source ↗</a>
            </div>
          </div>
        </div>
      </article>
      <footer className="case-footer"><Link href="/#projects">← All work</Link><a href={"mailto:" + PORTFOLIO.email}>Start a conversation ↗</a></footer>
    </main>
  );
}
