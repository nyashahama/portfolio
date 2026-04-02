// ============================================================
// PORTFOLIO DATA
// Customized for Nyasha Hama
// ============================================================

export const PORTFOLIO = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Nyasha Hama",
  title:
    "Backend Engineer | Full-Stack Web Developer | Systems-Focused Developer",
  tagline: "Building scalable backend systems & performance-driven software",
  location: "Johannesburg, South Africa",
  email: "nyashahama5@gmail.com",
  github: "https://github.com/nyashahama",
  linkedin: "https://www.linkedin.com/in/nyasha-hama-5b1312229",
  twitter: "https://x.com/cCraftsman_",
  resume: "./nyasha_hama_cv.pdf",

  // ── Hero Terminal Lines ────────────────────────────────────
  terminalLines: [
    "$ whoami",
    "> nyasha_hama",
    "$ cat specialization.txt",
    "> fullstack engineer| backend engineer | go developer | systems thinker",
    "$ ls skills/",
    "> go  c++  java  react  postgresql  redis  nats",
    "$ ./build --mode=production",
    "> Initializing scalable architecture...",
    "> Ready.",
  ],

  // ── About ─────────────────────────────────────────────────
  about: {
    bio: [
      "I'm a Full-Stack Web Developer with strong foundations in data structures, algorithms, and scalable system design.",
      "I build production-ready backend systems in Go and Java, and modern frontend applications using React and Angular.",
      "I enjoy working across the stack — from database schema design and REST API architecture to responsive UI implementation.",
      "My focus is on performance, clean architecture, and building real-world applications that scale.",
    ],
    stats: [
      { label: "Degree", value: "BSc Computer Science (2022-24)" },
      { label: "Primary Backend", value: "Go & Java" },
      { label: "Frontend", value: "React & Angular" },
      { label: "DSA Practice", value: "230+ Problems C++ & Java" },
    ],
  },

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      id: "01",
      name: "Burnout Predictor",
      tagline: "A performance early-warning system for burnout risk",
      description:
        "Overload combines sleep debt, calendar density, exercise, and daily stress check-ins into a cognitive load score, 14-day crash forecast, 30-day history, and concrete intervention suggestions. It is a full-stack product with a polished Next.js dashboard and a Go backend handling auth, scoring, persistence, notifications, and billing hooks.",
      highlights: [
        "Built a real forecasting workflow instead of a generic wellness tracker, with score breakdowns and forward-looking strain prediction.",
        "Implemented the full product flow: landing page, onboarding, authentication, dashboard, history views, weekly summaries, and settings.",
        "Structured the backend around services, SQL migrations, sqlc queries, background jobs, email delivery, and deployment across Vercel and Render.",
      ],
      tech: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
      accent: "magenta",
      github: "https://github.com/nyashahama/burnout-predictor.git",
      live: "https://burnout-predictor-ten.vercel.app/",
      featured: true,
    },
    {
      id: "02",
      name: "Healthcare Access Connector",
      tagline: "Healthcare infrastructure for patient-provider access",
      description:
        "A production-ready healthcare platform that connects patients with providers, supports provider discovery, appointment scheduling, role-based access, notifications, and a backend architecture designed for secure medical workflows. The system emphasizes reliability, observability, and operational readiness rather than just CRUD screens.",
      highlights: [
        "Built a Go API with JWT auth, patient and provider workflows, appointment scheduling, health probes, metrics, and structured error handling.",
        "Added Redis caching, NATS-based async messaging, rate limiting, validation, and Prometheus instrumentation for a more serious backend foundation.",
        "Modeled the platform around healthcare constraints, including secure records handling, notifications, and HIPAA-aware architecture decisions.",
      ],
      tech: ["Go", "PostgreSQL", "React", "Redis", "JWT"],
      accent: "cyan",
      github:
        "https://github.com/nyashahama/healthcare-access-connector-backend",
      live: "https://healthcare-access-connector-web.vercel.app/",
      featured: true,
    },
    {
      id: "03",
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
      featured: true,
    },
    {
      id: "04",
      name: "StrataHQ",
      tagline: "Software for sectional-title property operations",
      description:
        "StrataHQ is property management software built around the realities of South African sectional-title schemes. It handles levy periods and reconciliation, maintenance workflows, AGM and proxy management, reporting, scheme communications, and document access for agents, trustees, owners, and residents.",
      highlights: [
        "Mapped the product around real property operations like levies, maintenance, meetings, voting, and scheme-level communications.",
        "Built a monorepo with a Next.js frontend, Go REST API, PostgreSQL, Redis, payments, email delivery, and AI-assisted features.",
        "Structured the app around scheme-scoped and agent-scoped views, which is the kind of multi-tenant thinking many portfolio projects skip.",
      ],
      tech: ["Next.js", "TypeScript", "Go", "Postgres"],
      accent: "green",
      github: "https://github.com/nyashahama/StrataHQ",
      live: "https://strata-hq-blue.vercel.app",
      featured: true,
    },
    {
      id: "05",
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
      featured: true,
    },

    {
      id: "06",
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
      featured: true,
    },
    {
      id: "07",
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
      id: "08",
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
      id: "09",
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
      featured: true,
    },
    {
      id: "10",
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
      featured: true,
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  skills: {
    categories: [
      {
        name: "Backend",
        icon: "◉",
        items: [
          { name: "Go", level: 92 },
          { name: "PostgreSQL", level: 88 },
          { name: "Redis", level: 82 },
          { name: "REST APIs", level: 90 },
          { name: "Clean Architecture", level: 85 },
        ],
      },
      {
        name: "Systems & Languages",
        icon: "◈",
        items: [
          { name: "C++", level: 95 },
          { name: "Java", level: 85 },
          { name: "Concurrency", level: 84 },
          { name: "Data Structures", level: 95 },
        ],
      },
      {
        name: "Frontend",
        icon: "◌",
        items: [
          { name: "React", level: 85 },
          { name: "Angular", level: 80 },
          { name: "TypeScript", level: 80 },
          { name: "HTML/CSS", level: 88 },
        ],
      },
    ],
    technologies: [
      "Go",
      "C++",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "GraphQL",
      "Java",
      "PostgreSQL",
      "Redis",
      "NATS",
      "JWT",
      "WebSockets",
      "Elasticsearch",
      "Terraform",
      "Prometheus",
      "Docker",
      "Linux",
      "Neo4j",
      "Git",
    ],
  },

  // ── Experience ────────────────────────────────────────────
  experience: [
    {
      role: "Backend Engineer (Independent Projects)",
      company: "Self-Driven Development",
      period: "2022 – Present",
      location: "South Africa",
      description:
        "Designing and building production-grade backend systems with a strong focus on scalability, performance, and architecture.",
      highlights: [
        "Built healthcare platform connecting underserved communities",
        "Built an ARM that finds the risks that could kill your business; and helps you ignore the ones that won’t",
        "Designed scalable auth boilerplate with pgx + sqlc",
        "Focused on database internals and query engine concepts",
        "Practiced advanced DSA with 200+ solved problems",
      ],
      accent: "cyan",
    },
  ],

  // ── Blog Posts ────────────────────────────────────────────
  posts: [
    {
      slug: "building-vector-databases",
      title: "Building a Production Vector Database from Scratch",
      date: "Jan 12, 2025",
      readTime: "12 min read",
      tags: ["Go", "Databases", "AI"],
      excerpt:
        "Deep dive into HNSW indexing, memory-mapped files, and the engineering decisions behind NeuralDB. From prototype to 1M+ vector production system.",
      accent: "cyan",
    },
    {
      slug: "crdt-real-time-collab",
      title: "CRDTs in the Wild: Lessons from Building Synapse",
      date: "Nov 8, 2024",
      readTime: "9 min read",
      tags: ["Distributed Systems", "Node.js", "Architecture"],
      excerpt:
        "How we implemented conflict-free replicated data types to power real-time collaboration for 50k concurrent users, and the edge cases nobody warns you about.",
      accent: "magenta",
    },
    {
      slug: "typescript-performance",
      title:
        "TypeScript Compiler Performance: 10 Techniques That Actually Work",
      date: "Sep 24, 2024",
      readTime: "7 min read",
      tags: ["TypeScript", "Performance", "DX"],
      excerpt:
        "After spending weeks profiling and optimizing a 300k-line TypeScript codebase, here are the changes that delivered the biggest wins.",
      accent: "green",
    },
    {
      slug: "k8s-cost-optimization",
      title: "Kubernetes Cost Optimization: From $40k to $12k/Month",
      date: "Jul 3, 2024",
      readTime: "10 min read",
      tags: ["Kubernetes", "AWS", "Infrastructure"],
      excerpt:
        "A practical walkthrough of the cluster audit, right-sizing, spot instance migration, and autoscaling policies that cut our AWS bill by 70%.",
      accent: "yellow",
    },
  ],
};

// Type exports
export type Project = (typeof PORTFOLIO.projects)[number];
export type Experience = (typeof PORTFOLIO.experience)[number];
export type Post = (typeof PORTFOLIO.posts)[number];
export type SkillCat = (typeof PORTFOLIO.skills.categories)[number];
