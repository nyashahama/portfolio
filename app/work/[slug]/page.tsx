import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, PORTFOLIO } from "@/lib/data";

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
    stratahq: "Property operations with reliable data.",
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
          <div className="case-hero-bottom"><span>PRODUCT &amp; ENGINEERING</span><span>SCROLL TO EXPLORE ↓</span></div>
        </div>
        {project.slug !== "ecommerce-search-backend" ? (
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
        ) : <div className="case-search-visual" aria-label="Diagram showing four comparative search methods"><span>SQL LIKE</span><span>POSTGRES FULL TEXT</span><strong>SEARCH × 4</strong><span>IN MEMORY</span><span>OPENSEARCH</span></div>}
        <div className="case-body">
          <aside><span>THE PROJECT</span><span>{project.status.toUpperCase()}</span></aside>
          <div>
            <h2>{caseHeading}</h2>
            <p className="case-description">{project.description}</p>
            <ol className="case-highlights">
              {project.highlights.map((highlight, index) => <li key={highlight}><span>0{index + 1}</span><p>{highlight}</p></li>)}
            </ol>
            <div className="case-tools"><p>TOOLS &amp; TECHNOLOGIES</p><div>{project.tech.map((item) => <span key={item}>{item}</span>)}</div></div>
            <div className="case-actions">
              {project.live && <a className="action-primary" href={project.live} target="_blank" rel="noopener noreferrer">Open live demo ↗</a>}
              <a className="action-text" href={project.github} target="_blank" rel="noopener noreferrer">View source ↗</a>
            </div>
          </div>
        </div>
      </article>
      <footer className="case-footer"><Link href="/#projects">← All work</Link><a href="mailto:nyashaahama@gmail.com">Start a conversation ↗</a></footer>
    </main>
  );
}
