export const PORTFOLIO = {
  name: "Nyasha Hama",
  title: "Software Engineer | Product and Backend Systems",
  role: "Software Engineer · Product & Backend Systems",
  stackLine: "Product interfaces · Backend systems · Correctness",
  tagline:
    "I build operational products from interface to data model, with particular attention to retries, access boundaries, and recoverable failures.",
  location: "Cape Town, South Africa",
  email: "nyashahama5@gmail.com",
  website: "https://www.nyashahama.xyz",
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
      "I build operational software across product interfaces, Go services, and PostgreSQL data paths. ClinicPulse and StrataHQ are self-directed alpha and seeded beta products that let a reviewer inspect the tradeoffs behind the UI.",
      "My systems work asks what happens when the normal path breaks: a field report is retried, a payment reference is ambiguous, or a provider commits before the caller sees a response. TxProof turns bounded payment failures into replayable cases; Turso and CrossHair accepted three upstream contributions across Rust and Python/C.",
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
        value: "Working demos, merged upstream work, tested delivery",
      },
    ],
  },

  confidentialWork:
    "Current confidential full-stack work includes C#. Client and implementation details are withheld under NDA.",

  experience: [
    {
      role: "Self-Directed Software Engineer",
      company: "Independent engineering",
      period: "Jan 2023 – Present",
      location: "Cape Town, South Africa",
      description:
        "Independent engineering practice across product interfaces, backend services, data models, and verification. Representative projects appear above; their individual histories are described in each case study.",
      highlights: [
        "Built self-directed products with Next.js, Go, and PostgreSQL, owning accessible UI states, API boundaries, persistent data paths, and automated checks.",
        "Investigated failure cases across offline synchronization and financial reconciliation, then documented their tradeoffs and regression boundaries in public code.",
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
        "Authored two maintainer-merged Rust fixes for schema-transition correctness in Turso's SQLite-compatible engine.",
      highlights: [
        "Preserved AUTOINCREMENT metadata through DROP COLUMN and cleared stale sqlite_sequence state after an ALTER COLUMN transition, with regression coverage across schema changes and reopen behavior. A maintainer contributed the final reopen test for PR #7117.",
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
        "Contributed a maintainer-merged Python/C tracing change to CrossHair.",
      highlights: [
        "Moved call-target normalization into the C tracer while preserving keyword handling, dispatch, and descriptor errors; added regressions for bound methods, callable instances, and reference stability.",
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
      slug: "clinicpulse",
      featured: true,
      name: "ClinicPulse",
      status: "Alpha demo",
      tagline: "A field report should survive weak signal and uncertain retries.",
      description:
        "A self-directed clinic-operations demo connecting field reporting, district review, public discovery, and audit context.",
      highlights: [
        "Persisted reports in an offline browser queue; the Go sync path distinguishes safe duplicates from conflicting submissions and records each attempt.",
        "Added regressions for changed payloads, uniqueness races, and timestamp precision across the data boundary.",
      ],
      tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Playwright"],
      accent: "cyan",
      github: "https://github.com/nyashahama/clinic-pulse",
      live: "https://clinic-pulse-five.vercel.app",
      caseStudy: {
        problem: "A clinic status can change before a field reporter has reliable connectivity. A delayed acknowledgement can make a submitted report look unsent, and a retry can create a duplicate or hide a changed payload.",
        role: "Self-directed product engineering across the Next.js reporting interface, Go synchronization service, and PostgreSQL records.",
        constraints: "Offline drafts must persist, retries need a stable client identity, district review needs the source and sync outcome, and role boundaries must hold on the server.",
        decisions: [
          "Persist field reports in IndexedDB until synchronization can complete.",
          "Compare client report IDs and payloads: equal submissions are duplicates, while changed submissions return a conflict for review.",
          "Record sync attempts and re-read after a uniqueness race so the response describes the surviving report.",
        ],
        failureCase: "When a client retries after an uncertain response, the same ID and payload is safe to recognize as a duplicate. Reusing the ID with different content returns a conflict instead of silently replacing the report.",
        verification: "Go regressions cover duplicates, conflicts, uniqueness races, timestamp precision, per-item validation, and attempt-record failure. Public CI for the referenced revision passed on 13 August 2026.",
        limitations: "Alpha, self-directed demo with seeded scenario data. The modeled routing and time-saved figures are not observed clinic deployments or patient outcomes.",
        evidenceLinks: [
          { label: "Sync service", href: "https://github.com/nyashahama/clinic-pulse/blob/47739ea5f6a6a08855a8ea06bb45fe07aec868b9/services/api/internal/service/offline_sync.go" },
          { label: "Regression tests", href: "https://github.com/nyashahama/clinic-pulse/blob/47739ea5f6a6a08855a8ea06bb45fe07aec868b9/services/api/internal/service/offline_sync_test.go" },
          { label: "Browser queue", href: "https://github.com/nyashahama/clinic-pulse/blob/47739ea5f6a6a08855a8ea06bb45fe07aec868b9/lib/demo/offline-queue-store.ts" },
        ],
      },
    },
    {
      id: "02",
      slug: "stratahq",
      featured: true,
      name: "StrataHQ",
      status: "Seeded beta demo",
      tagline: "What happens when a bank reference matches more than one account?",
      description:
        "A self-directed property-operations beta spanning levies, maintenance, governance, and role-aware scheme workspaces.",
      highlights: [
        "Built bank-statement imports with deterministic row fingerprints, transactional payment application, and manual review of ambiguous matches or overpayments.",
        "Connected managing-agent, trustee, and resident workflows to scheme-scoped access checks in a Next.js and Go product.",
      ],
      tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Redis"],
      accent: "green",
      github: "https://github.com/nyashahama/StrataHQ",
      live: "https://strata-hq-blue.vercel.app",
      caseStudy: {
        problem: "Bank-statement descriptions rarely arrive as clean account IDs. A guessed match can apply money to the wrong levy account, while a repeated import can distort paid balances.",
        role: "Self-directed product and backend engineering across the managing-agent workspace, Go levy domain, PostgreSQL schema, and background import path.",
        constraints: "Scheme access must be checked before review; ambiguous payments need a human choice; application of accepted rows must remain within one transaction.",
        decisions: [
          "Normalize and fingerprint statement rows for stable import identity.",
          "Classify ambiguous, unmatched, partial, and overpaid rows instead of forcing an automatic match.",
          "Apply reviewed payments and account updates in a PostgreSQL transaction, with a separate worker for imports.",
        ],
        failureCase: "A reference with multiple candidate units stays ambiguous. An overpayment is also held for review rather than being applied to an arbitrary account.",
        verification: "Public tests cover matching, amount parsing, ambiguous candidates, overpayments, partial payments, and row fingerprint determinism; the product has seeded beta workflows.",
        limitations: "Beta review/demo software with fake seeded data. No customer count, collection uplift, production tenant, or compliance certification is claimed.",
        evidenceLinks: [
          { label: "Import service", href: "https://github.com/nyashahama/StrataHQ/blob/4b462eb50e409850602d567fb9a25ac4d78de9e8/backend/internal/levy/bank_statement_import.go" },
          { label: "Matching tests", href: "https://github.com/nyashahama/StrataHQ/blob/4b462eb50e409850602d567fb9a25ac4d78de9e8/backend/internal/levy/bank_statement_import_test.go" },
          { label: "Architecture decisions", href: "https://github.com/nyashahama/StrataHQ/blob/4b462eb50e409850602d567fb9a25ac4d78de9e8/docs/engineering-decisions.md" },
        ],
      },
    },
    {
      id: "03",
      slug: "tx-proof",
      featured: true,
      name: "TxProof",
      status: "Bounded Rust project",
      tagline: "Make the failure case reproducible.",
      description:
        "Rust tooling for bounded counterexample search across money-moving backend invariants, using a synthetic payment reference application.",
      highlights: [
        "Planned state-valid campaigns for ambiguous provider responses, retries, webhook disorder, and process restart boundaries.",
        "Recorded decisions for deterministic replay and checked a five-query invariant contract in a read-only PostgreSQL snapshot.",
      ],
      tech: ["Rust", "PostgreSQL", "Tokio", "Replay"],
      accent: "yellow",
      github: "https://github.com/nyashahama/tx-proof",
      live: null,
      caseStudy: {
        problem: "A provider can commit a payment operation and lose the response before the caller knows its result. A changed retry identity may create another object even though the first call succeeded.",
        role: "Built the Rust campaign planner, runtime safety boundaries, PostgreSQL invariant runner, and replay/evidence path in a self-directed public project.",
        constraints: "Search is bounded to state-valid cases, test databases must be disposable and identity-checked, and a reported counterexample must have inspectable evidence.",
        decisions: [
          "Generate bounded schedules covering retries, ambiguous provider results, webhook delay/drop/reordering, and crash/restart cut points.",
          "Persist decision streams so a violating case can be replayed against a compatible fresh test baseline.",
          "Bind destructive reset acknowledgement to exact database and project identity, and evaluate SQL invariants in one read-only repeatable-read snapshot.",
        ],
        failureCase: "In the synthetic commit-then-close case, a retry with a changed idempotency key yields two provider objects and violates provider-object-unique. Keeping the same key yields one object in the paired corrected case.",
        verification: "The public configured-run regression asserts the violating and corrected outcomes. Workspace tests passed in the audit, and the isolated reference-app CI job succeeded on 25 August 2026.",
        limitations: "Bounded search against a repository-owned reference app and fixture provider. No formal proof of arbitrary payment systems, live Stripe boundary, or customer deployment is claimed.",
        evidenceLinks: [
          { label: "Configured-run regression", href: "https://github.com/nyashahama/tx-proof/blob/83ba9537354475830ec4f0549261ad1080dc2be9/crates/tiv-cli/tests/configured_run.rs" },
          { label: "Campaign planner", href: "https://github.com/nyashahama/tx-proof/blob/83ba9537354475830ec4f0549261ad1080dc2be9/crates/tiv-core/src/plan.rs" },
          { label: "Safety boundary", href: "https://github.com/nyashahama/tx-proof/blob/83ba9537354475830ec4f0549261ad1080dc2be9/crates/tiv-runtime/src/postgres/safety.rs" },
        ],
      },
    },
    {
      id: "04",
      slug: "ecommerce-search-backend",
      featured: false,
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
      caseStudy: {
        problem: "A commerce service needs to compare retrieval behavior across simple SQL matching, database full-text search, memory, and an external search index without confusing distinct workloads.",
        role: "Built a self-directed Java 21/Spring Boot backend with commerce endpoints, search paths, indexing jobs, and contract checks.",
        constraints: "Each search path needs its own data/index freshness boundary, while catalog, checkout, and authorization remain coherent across the backend.",
        decisions: [
          "Expose SQL LIKE, PostgreSQL full-text, in-memory, and OpenSearch retrieval paths for comparison.",
          "Use Kafka-driven indexing and asynchronous benchmark jobs to collect latency, relevance, throughput, and freshness observations.",
          "Cover endpoint contracts, authorization expectations, and a buyer-flow smoke path in Java CI.",
        ],
        failureCase: "An index can be stale while database-backed results are current; the comparison must account for freshness rather than presenting latency alone as a winner.",
        verification: "The public repository contains Java CI, API contract tests, and a buyer-flow smoke test. No new benchmark numbers were measured for this case study.",
        limitations: "Self-directed backend project. No customer deployment, performance advantage, or production search volume is claimed.",
        evidenceLinks: [
          { label: "Source repository", href: "https://github.com/nyashahama/optimizing-search-algorithms-in-e-commerce-platforms-backend" },
        ],
      },
    },
  ],

  skills: {
    categories: [
      {
        name: "Languages",
        icon: "01",
        summary: "TypeScript, Go, Rust, SQL, Java, C#, C++",
        items: [
          "TypeScript",
          "Go",
          "Rust",
          "SQL",
          "Java",
          "C#",
          "C++",
        ],
      },
      {
        name: "Product & Interface",
        icon: "02",
        summary: "Accessible interfaces and usable failure states",
        items: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "TanStack Query",
          "Responsive UI",
          "Accessibility testing",
        ],
      },
      {
        name: "Backend & Systems",
        icon: "03",
        summary: "Transactional data and reproducible failures",
        items: [
          "REST APIs",
          "Go (Chi)",
          "Rust",
          "Spring Boot",
          "PostgreSQL",
          "pgx",
          "sqlc",
          "Redis",
          "Background jobs",
          "SQLite internals",
          "Deterministic replay",
        ],
      },
      {
        name: "Delivery & Verification",
        icon: "04",
        summary: "Tests, CI, and operational visibility",
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
    qualification: "Coursework toward BSc Computer Science, completed through final year",
    period: "2022 – 2024",
  },
};

export type Project = (typeof PORTFOLIO.projects)[number];
export const getProjectBySlug = (slug: string): Project | undefined =>
  PORTFOLIO.projects.find((project) => project.slug === slug);
export type Experience = (typeof PORTFOLIO.experience)[number];
export type SkillCat = (typeof PORTFOLIO.skills.categories)[number];
export type OpenSourceContribution = (typeof PORTFOLIO.openSource)[number];
