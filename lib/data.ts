// ============================================================
// PORTFOLIO DATA
// Customized for Nyasha Hama
// ============================================================

export const PORTFOLIO = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Nyasha Hama",
  title:
    "Backend & Platform Engineer | Go, TypeScript, Rust | Healthcare Ops, Data Systems & Upstream OSS",
  tagline:
    "Building public, working systems in Go, TypeScript, and Rust across healthcare ops, data systems, and upstream OSS",
  location: "Cape Town, South Africa",
  email: "nyashaahama@gmail.com",
  github: "https://github.com/nyashahama",
  linkedin: "https://www.linkedin.com/in/nyasha-hama-5b1312229",
  twitter: "https://x.com/cCraftsman_",
  resume: "./nyasha_hama_cv.pdf",

  // ── Hero Terminal Lines ────────────────────────────────────
  terminalLines: [
    "$ whoami",
    "> nyasha_hama",
    "$ cat role.txt",
    "> backend_platform_engineer",
    "$ ls core_stack/",
    "> go  rust  typescript  nextjs  postgres  redis",
    "$ ./deploy --profile production",
    "> booting services...",
    "> observability online",
    "> ready.",
  ],

  // ── About ─────────────────────────────────────────────────
  about: {
    bio: [
      "I build backend and platform systems with Go, TypeScript, Rust, PostgreSQL, and Redis, with emphasis on healthcare operations, property platforms, data workflows, auth/RBAC, observability, and release gates.",
      "Recent evidence includes merged upstream Turso database-engine fixes, a merged CrossHair Python/C tracer contribution, a live clinic-operations platform for South Africa's public healthcare network, and a live sectional-title property platform with real workflow depth.",
      "I still bring a broader engineering foundation from Java, C++, and C#, including early backend and web work with ASP.NET, but my current focus is firmly on modern backend and product delivery.",
      "I am especially interested in distributed systems, secure execution, database internals, and the engineering details that make software reliable under real usage.",
    ],
    stats: [
      { label: "Degree", value: "BSc Computer Science" },
      { label: "Core Stack", value: "Go · Rust · TS" },
      { label: "Frontend", value: "TypeScript · Next.js" },
      { label: "Upstream OSS", value: "Merged in Turso + CrossHair" },
    ],
  },

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      id: "01",
      name: "ClinicPulse",
      tagline: "Clinic-operations platform for SA's public healthcare network",
      description:
        "A live TypeScript and Go clinic-operations platform for South Africa's public primary healthcare network, covering facility status, referral routing, field reporting, and district operational intelligence across 3,500+ facilities.",
      highlights: [
        "Built role-based workflows for admin, district, facility, field, partner, and public users, with PostgreSQL-backed API paths and product surfaces for operational decision-making.",
        "Added release gates, auth/security hardening, pilot data integrity, partner workflows, E2E coverage, smoke/load scripts, and observability primitives including request correlation, metrics, and runbooks.",
      ],
      tech: ["TypeScript", "Go", "PostgreSQL", "Auth/RBAC", "Observability"],
      accent: "cyan",
      github: "https://github.com/nyashahama/clinic-pulse",
      live: "https://clinic-pulse-five.vercel.app",
      featured: true,
    },
    {
      id: "02",
      name: "StrataHQ",
      tagline: "Sectional-title property operations for agents, trustees & residents",
      description:
        "A live Next.js and Go platform for South African sectional-title property operations, serving agents, trustees, and residents across scheme management workflows with real workflow depth.",
      highlights: [
        "Built scheme-scoped levy operations, maintenance workflows, resident/trustee communications, AGM administration, document access, audit logs, open API access, and predictive levy analytics.",
        "Modeled production-style backend paths with PostgreSQL, pgx, sqlc, goose migrations, Redis, auth/RBAC, tests/CI, and deployment-ready project structure.",
      ],
      tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Redis"],
      accent: "green",
      github: "https://github.com/nyashahama/StrataHQ",
      live: "https://strata-hq-blue.vercel.app",
      featured: true,
    },
    {
      id: "03",
      name: "Healthcare Access Connector",
      tagline: "Go healthcare backend for patient-provider access",
      description:
        "A Go healthcare access backend connecting patients and providers through scheduling, search, notifications, telemedicine support, and role-aware workflows, shaped around HIPAA/POPIA-aligned access design.",
      highlights: [
        "Designed patient, provider, appointment, staff invitation, and notification flows with PostgreSQL-backed domain modeling, validation, and explicit service boundaries.",
        "Implemented JWT/RBAC, rate limiting, Redis caching, NATS messaging, Docker local infrastructure, Prometheus metrics, structured logging, health endpoints, and graceful shutdown.",
      ],
      tech: ["Go", "PostgreSQL", "Redis", "NATS", "JWT/RBAC"],
      accent: "cyan",
      github:
        "https://github.com/nyashahama/healthcare-access-connector-backend",
      live: "https://healthcare-access-connector-web.vercel.app/",
      featured: true,
    },
    {
      id: "04",
      name: "guard-rail",
      tagline: "Rust policy-enforcement runtime for internal API traffic",
      description:
        "guard-rail is a Rust policy-enforcement runtime for internal API traffic with route-level authorization, audit persistence, replay capture, and readiness and metrics surfaces, plus a documented beta deployment path across container, Postgres, and reverse-proxy infrastructure.",
      highlights: [
        "Building the core runtime in Rust with route-level authorization, audit persistence, and replay capture for stronger production visibility.",
        "Added readiness, health, and metrics surfaces plus a documented beta deployment path covering container, Postgres, and reverse-proxy infrastructure.",
      ],
      tech: ["Rust", "Authorization", "Audit", "Docker", "Runtime Design"],
      accent: "magenta",
      github: "https://github.com/nyashahama/guard-rail",
      live: "https://guard-rail-steel.vercel.app",
      featured: true,
    },
    {
      id: "05",
      name: "Burnout Predictor",
      tagline: "Workload analysis with Go + Next.js product delivery",
      description:
        "A workload-analysis application that combines signal ingestion, backend scoring, and a polished Next.js interface to estimate burnout risk and surface intervention suggestions through a production-style user experience.",
      highlights: [
        "Built Go and PostgreSQL services to ingest sleep, calendar, and work-pattern signals and compute rolling burnout-risk assessments.",
        "Integrated the scoring backend with a Next.js frontend and shipped the product publicly.",
        "Turned behavioral data into a usable product flow rather than a narrow scoring demo.",
      ],
      tech: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
      accent: "yellow",
      github: "https://github.com/nyashahama/burnout-predictor.git",
      live: "https://burnout-predictor-ten.vercel.app/",
      featured: false,
    },
    {
      id: "06",
      name: "E-commerce Search Optimization",
      tagline: "Search performance through data-structure design",
      description:
        "A Java backend project focused on improving e-commerce search speed and relevance by applying core data-structure and systems ideas to product discovery. The work explores how graphs, binary search trees, concurrent maps, and relational persistence can be combined to serve faster search experiences under load.",
      highlights: [
        "Used classic computer science tools in a practical product domain instead of treating data structures as theory-only exercises.",
        "Focused on the backend mechanics of search performance, not just the UI layer or catalog screens.",
      ],
      tech: ["Java", "Spring Boot", "MySQL", "Data Structures"],
      accent: "yellow",
      github:
        "https://github.com/nyashahama/Optimizing-Search-Algorithms-in-E-commerce-Platforms-backend",
      live: null,
      featured: false,
    },
    {
      id: "07",
      name: "Wedding Planning System",
      tagline: "Collaborative planning workflow for event coordination",
      description:
        "A collaborative full-stack application for coordinating the moving parts of wedding planning through a React frontend and Node/Express backend. The project emphasized clean API design, shared ownership in Git, and working as part of a team rather than building in isolation.",
      highlights: [
        "Delivered a multi-person university project with shared architecture, version control discipline, and division of responsibilities.",
        "Used the project to practice turning planning workflows into a usable full-stack product instead of isolated classroom exercises.",
      ],
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      accent: "green",
      github: "https://github.com/nyashahama/Team-34-Project",
      live: null,
      featured: false,
    },
  ],

  // ── Open Source Contributions ─────────────────────────────
  openSource: [
    {
      name: "Turso",
      role: "Upstream Contributor",
      date: "May 2026",
      summary:
        "Merged two Rust database-engine fixes around SQLite-compatible schema rewrites, preserving AUTOINCREMENT invariants after DROP COLUMN and clearing stale sqlite_sequence metadata after ALTER COLUMN.",
      highlights: [
        "Patched schema serialization, ALTER execution state, SQL regressions, and file-backed reopen integration coverage for rowid reuse and stale metadata failures.",
      ],
      links: [
        { label: "PR #6993", href: "https://github.com/tursodatabase/turso/pull/6993" },
        { label: "PR #7117", href: "https://github.com/tursodatabase/turso/pull/7117" },
      ],
      accent: "cyan",
    },
    {
      name: "CrossHair",
      role: "Upstream Contributor",
      date: "May 2026",
      summary:
        "Merged Python/C tracer work moving call-target normalization into CrossHair's C extension while keeping keyword handling and trace dispatch behavior stable.",
      highlights: [
        "Added coverage for bound Python methods, callable instances, C-level bound methods, reference behavior, and descriptor-error propagation.",
      ],
      links: [
        { label: "PR #413", href: "https://github.com/pschanely/CrossHair/pull/413" },
      ],
      accent: "green",
    },
  ],

  skills: {
    categories: [
      {
        name: "Backend & Platform",
        icon: "◉",
        items: [
          { name: "Go", level: 92 },
          { name: "PostgreSQL", level: 89 },
          { name: "Redis", level: 84 },
          { name: "REST APIs", level: 91 },
          { name: "Service Design", level: 88 },
        ],
      },
      {
        name: "Product Delivery",
        icon: "◌",
        items: [
          { name: "TypeScript", level: 88 },
          { name: "Next.js", level: 86 },
          { name: "React", level: 84 },
          { name: "Auth Flows", level: 87 },
          { name: "UI Systems", level: 80 },
        ],
      },
      {
        name: "Foundations",
        icon: "◈",
        items: [
          { name: "Rust", level: 80 },
          { name: "Java", level: 84 },
          { name: "C++", level: 90 },
          { name: "C#", level: 76 },
          { name: "Data Structures", level: 94 },
        ],
      },
    ],
    technologies: [
      "Go",
      "Rust",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "Java",
      "C++",
      "C#",
      "SQL",
      "pgx",
      "sqlc",
      "goose",
      "JWT",
      "NATS",
      "Prometheus",
      "Docker",
      "Linux",
      "GitHub Actions",
      "Observability",
      "E2E Tests",
    ],
  },

  experience: [
    {
      role: "Backend & Platform Engineer",
      company: "Independent Software Engineer",
      period: "2023 – Present",
      location: "Remote",
      description:
        "Building public, working systems in Go, TypeScript, and Rust across healthcare operations, property platforms, data workflows, and upstream OSS, with a focus on production-minded engineering.",
      highlights: [
        "Contributed two merged Rust fixes to Turso's production SQLite-compatible database engine (AUTOINCREMENT preservation after DROP COLUMN, stale sqlite_sequence metadata after ALTER COLUMN) and a merged Python/C tracer contribution to CrossHair.",
        "Built and shipped three live production-oriented systems: ClinicPulse for South Africa's public healthcare network, StrataHQ for sectional-title property management, and Healthcare Access Connector with HIPAA/POPIA-aligned scheduling and telemedicine.",
        "Designed Go REST APIs with JWT/RBAC across multi-role hierarchies, PostgreSQL schemas with pgx, sqlc, and goose migrations, Redis-backed caching and rate limiting, and NATS-based async messaging.",
        "Added Prometheus metrics, structured logging, health/readiness endpoints, request tracing, graceful shutdown, Docker Compose environments, and GitHub Actions CI with race detection and release-readiness gates.",
        "Created a reusable Go backend scaffold with documented quality gates, adoption checklist, bootstrap verification, and release automation via GitHub Releases/GHCR.",
        "Building guard-rail, a Rust policy-enforcement runtime for internal API traffic with route-level authorization, audit persistence, replay capture, and a documented beta deployment path.",
      ],
      accent: "cyan",
    },
  ],

  posts: [
    {
      slug: "database-internals",
      title: "Database Internals and Why I Keep Coming Back to Them",
      date: "Current Focus",
      readTime: "Core interest",
      tags: ["Databases", "PostgreSQL", "Storage"],
      excerpt:
        "I am drawn to the layers below application code: indexing, query planning, storage tradeoffs, and the details that decide whether a system stays fast and understandable as complexity grows.",
      accent: "cyan",
    },
    {
      slug: "distributed-systems",
      title: "Distributed Systems Beyond the Buzzwords",
      date: "Current Focus",
      readTime: "Core interest",
      tags: ["Distributed Systems", "Messaging", "Reliability"],
      excerpt:
        "The interesting part is not the label. It is the engineering discipline around failure modes, observability, explicit boundaries, and service behavior under real operational pressure.",
      accent: "magenta",
    },
    {
      slug: "secure-runtime-design",
      title: "Runtime Design, Secure Execution, and guard-rail",
      date: "Current Focus",
      readTime: "Active work",
      tags: ["Rust", "Runtime Design", "Security"],
      excerpt:
        "guard-rail pulls me toward secure execution, operational hardening, and the kind of runtime design where small engineering choices have outsized effects on safety and resilience.",
      accent: "green",
    },
    {
      slug: "observability-and-operations",
      title: "Observability as a Product Requirement",
      date: "Current Focus",
      readTime: "Core interest",
      tags: ["Observability", "Metrics", "Operations"],
      excerpt:
        "Health probes, readiness, structured logs, trace context, and metrics are not decoration. They shape how confidently a system can be shipped, debugged, and evolved.",
      accent: "yellow",
    },
  ],
};

// Type exports
export type Project = (typeof PORTFOLIO.projects)[number];
export type Experience = (typeof PORTFOLIO.experience)[number];
export type Post = (typeof PORTFOLIO.posts)[number];
export type SkillCat = (typeof PORTFOLIO.skills.categories)[number];
export type OpenSourceContribution = (typeof PORTFOLIO.openSource)[number];
