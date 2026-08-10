export const PORTFOLIO = {
  name: "Nyasha Hama",
  title:
    "Full-Stack Software Engineer | React, Next.js, TypeScript & Go | Product & Platform Engineering",
  role: "Full-Stack Software Engineer",
  stackLine: "React · Next.js · TypeScript · Go",
  tagline:
    "I build operational products end to end—from responsive interfaces and reusable design systems to Go services, PostgreSQL data models, background jobs, CI, and observability.",
  location: "Cape Town, South Africa",
  email: "nyashaahama@gmail.com",
  website: "https://portfolio-topaz-one-58.vercel.app",
  github: "https://github.com/nyashahama",
  linkedin: "https://www.linkedin.com/in/nyasha-hama-5b1312229",
  resume: "/nyasha_hama_cv.pdf",

  heroProof: [
    {
      label: "Frontend & product",
      value: "React / Next.js / TypeScript",
      detail: "Responsive interfaces, design systems, accessible states",
      accent: "cyan",
    },
    {
      label: "Backend & data",
      value: "Go / PostgreSQL / Redis",
      detail: "APIs, data models, background jobs, secure access",
      accent: "green",
    },
    {
      label: "Platform & quality",
      value: "Docker / CI / Observability",
      detail: "Automated tests, delivery gates, operational visibility",
      accent: "magenta",
    },
  ],

  about: {
    bio: [
      "Full-stack software engineer building operational products across responsive React and Next.js interfaces, Go services, PostgreSQL data models, background jobs, CI, and observability.",
      "Built ClinicPulse and StrataHQ across offline-capable field reporting, levy reconciliation, maintenance operations, role-based access controls, and reusable frontend systems. Authored three upstream PRs merged into Turso's Rust database engine and CrossHair's Python/C tracer.",
    ],
    pillars: [
      {
        label: "Product surface",
        value: "Interfaces that hold up on desktop and mobile",
      },
      {
        label: "Systems depth",
        value: "APIs, data models, jobs, security, and reliability",
      },
      {
        label: "Proof of craft",
        value: "Shipped products, merged upstream work, tested delivery",
      },
    ],
  },

  experience: [
    {
      role: "Independent Full-Stack Engineer",
      company: "ClinicPulse & StrataHQ",
      period: "Jan 2023 – Present",
      location: "Remote",
      description:
        "Building both self-directed products across product interfaces, service boundaries, data workflows, and automated delivery.",
      highlights: [
        "Built both self-directed products across responsive React and Next.js interfaces, Go APIs, PostgreSQL data models, and automated test and delivery pipelines.",
        "Created reusable frontend foundations for desktop and mobile—role-aware navigation, workspace shells, semantic design tokens, dark mode, mutation and error states, and automated overflow and accessibility checks.",
        "Implemented hashed sessions, RBAC, scoped API keys, and CSRF checks; instrumented services with request correlation, structured logs, Prometheus metrics, and health/readiness endpoints.",
        "Made offline field reporting recoverable with persisted queues and conflict handling in ClinicPulse; made StrataHQ's levy reconciliation transactional and bank-statement imports safe to retry through idempotent background jobs.",
      ],
      accent: "cyan",
    },
  ],

  openSource: [
    {
      name: "Turso",
      role: "Upstream Contributor",
      date: "May 2026",
      summary:
        "Merged two Rust correctness fixes into Turso's SQLite-compatible database engine.",
      highlights: [
        "Preserved auto-increment state after DROP COLUMN, removed stale sqlite_sequence metadata after ALTER COLUMN, and proved both fixes with SQL and file-reopen regressions.",
      ],
      links: [
        {
          label: "PR #6993",
          href: "https://github.com/tursodatabase/turso/pull/6993",
        },
        {
          label: "PR #7117",
          href: "https://github.com/tursodatabase/turso/pull/7117",
        },
      ],
      accent: "cyan",
    },
    {
      name: "CrossHair",
      role: "Upstream Contributor",
      date: "May 2026",
      summary:
        "Moved call-target normalization from Python into CrossHair's C tracer without changing keyword handling or trace dispatch.",
      highlights: [
        "Added regressions for Python and C bound methods, callable instances, and descriptor errors.",
      ],
      links: [
        {
          label: "PR #413",
          href: "https://github.com/pschanely/CrossHair/pull/413",
        },
      ],
      accent: "green",
    },
  ],

  projects: [
    {
      id: "01",
      name: "ClinicPulse",
      status: "Alpha",
      tagline: "Clinic operations across public, field, district, and admin workflows",
      description:
        "Clinic-operations product for public discovery, field reporting, district review, partner access, and administrative governance.",
      highlights: [
        "Built role-specific workflows in Next.js, backed by a Go API, PostgreSQL, and a same-origin proxy.",
        "Implemented offline-capable field reporting with persisted device queues, retry and conflict recovery, visit verification, and server synchronization.",
        "Built a responsive shell, command palette, semantic tokens, and dark mode, with automated mobile-overflow and axe accessibility checks. At the Aug 2026 revision, all 543 frontend tests and the full Go test suite passed.",
      ],
      tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Playwright"],
      accent: "cyan",
      github: "https://github.com/nyashahama/clinic-pulse",
      live: "https://clinic-pulse-five.vercel.app",
    },
    {
      id: "02",
      name: "StrataHQ",
      status: "Beta",
      tagline: "Property operations for agents, trustees, and residents",
      description:
        "Property-operations product spanning levies, maintenance, governance, communications, and documents.",
      highlights: [
        "Built scheme-scoped dashboards and navigation in Next.js, backed by modular Go services, type-safe PostgreSQL access via sqlc, Redis, and a same-origin API proxy.",
        "Delivered levy-period creation, transactional reconciliation, bank-statement import, payment-candidate matching, manual review, and idempotent background processing.",
        "Built maintenance workflows from resident intake through approval, contractor assignment, SLA tracking, and resolution, with a responsive off-canvas workspace on mobile.",
      ],
      tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Redis"],
      accent: "green",
      github: "https://github.com/nyashahama/StrataHQ",
      live: "https://strata-hq-blue.vercel.app",
    },
    {
      id: "03",
      name: "E-Commerce Search Backend",
      status: "Java 21",
      tagline: "Comparable search paths with operational controls",
      description:
        "Spring Boot commerce backend with four comparable search paths, asynchronous benchmark jobs, and operational health controls.",
      highlights: [
        "Built role-aware APIs for catalog, cart, checkout, orders, inventory, returns, payments, reviews, and addresses, with PostgreSQL and Flyway persistence.",
        "Implemented SQL LIKE, PostgreSQL full-text, in-memory, and OpenSearch discovery paths with Kafka-driven indexing and benchmark jobs.",
        "Enforced endpoint coverage and authorization expectations with contract tests, a buyer-flow smoke test, and Java 21 CI.",
      ],
      tech: ["Java 21", "Spring Boot", "PostgreSQL", "OpenSearch", "Kafka"],
      accent: "yellow",
      github:
        "https://github.com/nyashahama/optimizing-search-algorithms-in-e-commerce-platforms-backend",
      live: null,
    },
  ],

  skills: {
    categories: [
      {
        name: "Languages",
        icon: "01",
        summary: "TypeScript, Go, Java, SQL, JavaScript, Rust, C#, C++",
        items: [
          "TypeScript",
          "Go",
          "Java",
          "SQL",
          "JavaScript",
          "Rust",
          "C#",
          "C++",
        ],
      },
      {
        name: "Frontend & Product",
        icon: "02",
        summary: "Interfaces, systems, and accessible product states",
        items: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "TanStack Query",
          "Responsive UI",
          "Design systems",
          "Accessibility testing",
        ],
      },
      {
        name: "Backend & Data",
        icon: "03",
        summary: "Service boundaries, persistence, and background work",
        items: [
          "REST APIs",
          "Go (Chi)",
          "Spring Boot",
          "Node.js",
          "PostgreSQL",
          "pgx",
          "sqlc",
          "Redis",
          "Background jobs",
          "SQLite internals",
        ],
      },
      {
        name: "Platform & Quality",
        icon: "04",
        summary: "Delivery confidence and operational visibility",
        items: [
          "Docker",
          "Linux",
          "Prometheus",
          "Structured logging",
          "Request tracing",
          "GitHub Actions",
          "Playwright",
          "Vitest",
          "CI/CD",
        ],
      },
    ],
  },

  education: {
    institution: "University of Johannesburg",
    qualification: "BSc Computer Science coursework completed through final year",
    period: "2022 – 2024",
  },
};

export type Project = (typeof PORTFOLIO.projects)[number];
export type Experience = (typeof PORTFOLIO.experience)[number];
export type SkillCat = (typeof PORTFOLIO.skills.categories)[number];
export type OpenSourceContribution = (typeof PORTFOLIO.openSource)[number];
