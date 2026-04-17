// ============================================================
// PORTFOLIO DATA
// Customized for Nyasha Hama
// ============================================================

export const PORTFOLIO = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Nyasha Hama",
  title: "Backend & Platform Engineer | Go, Rust, TypeScript, Next.js",
  tagline:
    "Building production backend systems, secure runtimes, and modern product surfaces",
  location: "Pretoria, South Africa",
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
      "I build backend and platform systems with Go, Rust, TypeScript, and Next.js across healthcare, property management, workflow automation, and developer tooling.",
      "My work centers on APIs, authentication, PostgreSQL data modeling, Redis caching, observability, and Dockerized development environments that feel production-ready early.",
      "I still bring a broader engineering foundation from Java, C++, and C#, including early backend and web work with ASP.NET, but my current focus is firmly on modern backend and product delivery.",
      "I am especially interested in distributed systems, secure execution, database internals, and the engineering details that make software reliable under real usage.",
    ],
    stats: [
      { label: "Degree", value: "BSc Computer Science" },
      { label: "Core Stack", value: "Go · Rust · TS" },
      { label: "Frontend", value: "TypeScript · Next.js" },
      { label: "DSA Practice", value: "200+ in C++" },
    ],
  },

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      id: "01",
      name: "StrataHQ",
      tagline: "Property operations software for sectional-title schemes",
      description:
        "StrataHQ is property management software for South African sectional-title schemes, covering levy operations, maintenance workflows, AGM administration, communications, and document access across agent, trustee, and resident workflows.",
      highlights: [
        "Built a monorepo that pairs a Next.js frontend with a Go REST API for a workflow-heavy multi-role product.",
        "Designed backend domains for auth, scheme management, levy operations, maintenance, and billing using PostgreSQL, pgx, sqlc, and goose migrations.",
        "Added Redis-backed caching, JWT authentication, Stripe payment flows, email delivery, and deployment paths for Vercel and Render.",
      ],
      tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Redis"],
      accent: "green",
      github: "https://github.com/nyashahama/StrataHQ",
      live: "https://strata-hq-blue.vercel.app",
      featured: true,
    },
    {
      id: "02",
      name: "Healthcare Access Connector",
      tagline: "Backend infrastructure for patient-provider access",
      description:
        "A healthcare access platform focused on scheduling, discovery, notifications, and role-aware workflows, with a backend architecture shaped around secure records handling, observability, and operational readiness.",
      highlights: [
        "Built a Go API with JWT auth, patient and provider workflows, appointment scheduling, health probes, metrics, and structured validation.",
        "Added Redis caching, NATS-based async messaging, rate limiting, and Prometheus instrumentation to harden the backend beyond CRUD.",
        "Modeled the platform around healthcare constraints and secure workflow design instead of generic marketplace behavior.",
      ],
      tech: ["Go", "PostgreSQL", "Redis", "NATS", "JWT"],
      accent: "cyan",
      github:
        "https://github.com/nyashahama/healthcare-access-connector-backend",
      live: "https://healthcare-access-connector-web.vercel.app/",
      featured: true,
    },
    {
      id: "03",
      name: "guard-rail",
      tagline: "Secure execution runtime for modern automation",
      description:
        "guard-rail is an active Rust runtime and secure execution platform for operational workloads, focused on production-hardening concerns such as readiness, metrics, trace-aware logging, graceful shutdown, and deployment support.",
      highlights: [
        "Building the core runtime in Rust with a focus on secure execution, operational resilience, and infrastructure-oriented service design.",
        "Added readiness, health, and metrics endpoints together with trace-context-aware request logging for stronger production visibility.",
        "Implemented graceful shutdown and drain behavior plus container and systemd deployment artifacts for practical operations.",
      ],
      tech: ["Rust", "Systems", "Observability", "Docker", "Runtime Design"],
      accent: "magenta",
      github: "https://github.com/nyashahama/guard-rail",
      live: "https://guard-rail-steel.vercel.app",
      featured: true,
    },
    {
      id: "04",
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
      featured: true,
    },
    {
      id: "05",
      name: "AgencyForge",
      tagline: "Agency operations software with AI campaign delivery",
      description:
        "AgencyForge is an agency operations platform for turning client briefs into campaign execution. It covers client intake, briefs, campaigns, white-label portals, documents, workspace metadata, and analytics through a Next.js product surface backed by a Go API and PostgreSQL workflow model.",
      highlights: [
        "Designed agency-scoped backend domains for auth, clients, briefs, campaigns, portals, workspace metadata, and analytics.",
        "Built a product shell that spans the full operator workflow from intake to delivery instead of a narrow single-page demo.",
        "Used SQL migrations, sqlc, integration tests, request hardening, and CI verification to keep the backend durable and maintainable.",
      ],
      tech: ["Next.js", "TypeScript", "Go", "Postgres"],
      accent: "yellow",
      github: "https://github.com/nyashahama/AgencyForge",
      live: "https://agency-forge.vercel.app",
      featured: false,
    },
    {
      id: "06",
      name: "Asymmetric Risk Mapper",
      tagline: "A decision tool for existential business risk",
      description:
        "A SaaS assessment product that helps business owners surface the few risks that can actually break the company. Users complete a 20-question assessment, see a live probability-vs-impact heat map, pay once through Stripe to unlock the full report, and receive a detailed risk register with a 30-day action plan.",
      highlights: [
        "Built an auth-free product flow using anonymous sessions, token-based API access, and public report delivery without forcing account creation.",
        "Implemented interactive assessment UX, client-side scoring, preview heat maps, checkout, report polling, and email-based access links.",
        "Turned a complex business analysis concept into a clear product journey with pricing, paywall, and deliverable-grade reports.",
      ],
      tech: ["Next.js", "TypeScript", "Stripe", "Go API"],
      accent: "magenta",
      github: "https://github.com/nyashahama/asymmetric-risk-mapper",
      live: "https://asymmetric-risk-mapper.vercel.app/",
      featured: false,
    },

    {
      id: "07",
      name: "FormFlow AI",
      tagline: "Product UX for AI-assisted form automation",
      description:
        "FormFlow AI presents a product workflow for automating complex government forms: capturing user information once, reusing it across submissions, integrating with external systems, and keeping a visible audit trail so every automated step remains traceable.",
      highlights: [
        "Built a complete product surface with hero, stats, workflow explanation, integrations, audit-trail storytelling, pricing, and trust-building sections.",
        "Framed automation around compliance and traceability, which makes the product feel operational rather than just 'AI for forms'.",
        "Focused on turning a bureaucratic process into a clean, credible user journey with strong information architecture and motion.",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind", "Product UX"],
      accent: "cyan",
      github: "https://github.com/nyashahama/FormFlow-AI",
      live: "https://form-flow-ai-pink.vercel.app",
      featured: false,
    },
    {
      id: "08",
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
      id: "09",
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
    {
      id: "10",
      name: "AI Life CFO",
      tagline: "Investor-style product storytelling for personal finance AI",
      description:
        "A polished Next.js product presentation for an AI cash-flow platform aimed at high-earning professionals. It combines an investor-style pitch deck with a separate marketing landing page, using scroll-driven sections, custom interactions, and strong visual storytelling to explain the product, market, traction, and business model.",
      highlights: [
        "Built both a founder-pitch narrative and a public landing experience inside one cohesive product surface.",
        "Used custom cursor behavior, scroll-snap slides, and deliberate section sequencing to make the concept feel like a real startup, not a template site.",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind", "Interaction Design"],
      accent: "green",
      github: "https://github.com/nyashahama/AI-Life-CFO.git",
      live: "https://ai-life-cfo.vercel.app",
      featured: false,
    },
    {
      id: "11",
      name: "Music Awards System",
      tagline: "Awards operations platform with role-based workflows",
      description:
        "A full-stack platform for running music awards end to end: nominations, voting, analytics, dashboards, and role-based access for different actors in the process. The system combines a Go backend with PostgreSQL and containerized services to support a workflow-heavy application with real operational structure.",
      highlights: [
        "Covered the full awards lifecycle instead of a narrow feature slice, which makes the project closer to a real business platform.",
        "Used Go, PostgreSQL, Dockerized services, and CI/CD automation to move beyond a basic student CRUD implementation.",
      ],
      tech: ["Go", "Gin", "PostgreSQL", "React", "Angular", "Docker"],
      accent: "cyan",
      github: "https://github.com/nyashahama/music_awards_server",
      live: null,
      featured: false,
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
      "JWT",
      "NATS",
      "Prometheus",
      "Docker",
      "Linux",
      "GitHub Actions",
      "Observability",
    ],
  },

  experience: [
    {
      role: "Backend & Platform Engineer",
      company: "Independent Software Engineer",
      period: "2023 – Present",
      location: "Remote",
      description:
        "Building backend-heavy products and developer tooling across healthcare, property management, workflow automation, and operational software, with a focus on production-minded engineering.",
      highlights: [
        "Designed Go services with JWT authentication, role-aware access control, PostgreSQL schema design, and explicit SQL access patterns using pgx and sqlc.",
        "Added Redis caching, health checks, structured logging, metrics, and Dockerized local environments across multiple services.",
        "Built modern product surfaces with TypeScript and Next.js while keeping backend concerns like auth, data modeling, and observability central.",
        "Expanded into Rust runtime work through guard-rail while continuing to deepen interest in distributed systems and database internals.",
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
