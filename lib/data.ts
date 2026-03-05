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
      name: "Healthcare Access Connector",
      tagline: "Connecting underserved communities to clinics & telemedicine",
      description:
        "Full-stack healthcare platform built to improve access to clinics, telemedicine, nutrition resources, and appointment scheduling. Backend built in Go with REST APIs powering patient-provider matching.",
      tech: ["Go", "PostgreSQL", "React", "Redis", "JWT"],
      accent: "cyan",
      github:
        "https://github.com/nyashahama/healthcare-access-connector-backend",
      live: "https://healthcare-access-connector-web.vercel.app/",
      featured: true,
    },
    {
      id: "02",
      name: "Asymmetric Risk Mapper",
      tagline: "Identifying risks that can kill your business",
      description:
        "Tool that analyzes asymmetric business risks — highlighting high-impact threats while filtering out low-leverage noise. Built with TypeScript.",
      tech: ["TypeScript", "Go", "Postgres"],
      accent: "green",
      github: "https://github.com/nyashahama/asymmetric-risk-mapper",
      live: "https://asymmetric-risk-mapper.vercel.app/",
      featured: true,
    },
    {
      id: "03",
      name: "Burnout Predictor",
      tagline: "Predict burnout before it happens",
      description:
        "Overload is a burnout predictor. It checks your sleep, calendar and work patterns. This helps give you a 14-day warning if you're about to burn out. The Overload tool was built using Next.js and TypeScript. ",
      tech: ["Next js", "TypeScript", "Go", "Postgres"],
      accent: "magenta",
      github: "https://github.com/nyashahama/burnout-predictor.git",
      live: "https://burnout-predictor-ten.vercel.app/",
      featured: true,
    },
    {
      id: "04",
      name: "AI Life CFO",
      tagline: "AI-powered cash flow forecasting for high earners",
      description:
        "Predictive cash flow intelligence for high-earning professionals. A full-stack Next.js pitch deck and marketing landing page with custom cursor, scroll-snap slides, and elegant dark-mode design.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      accent: "green",
      github: "https://github.com/nyashahama/AI-Life-CFO.git",
      live: "https://ai-life-cfo.vercel.app",
      featured: true,
    },
    {
      id: "05",
      name: "Music Awards System",
      tagline: "Scalable full-stack awards management platform",
      description:
        "Built a full-stack music awards system handling nominations, voting, analytics dashboards, and role-based authentication. Backend developed in Go (Gin, GORM, PostgreSQL) with Dockerized microservices and CI/CD via GitHub Actions.",
      tech: ["Go", "Gin", "PostgreSQL", "React", "Angular", "Docker"],
      accent: "cyan",
      github: "https://github.com/nyashahama/music_awards_server",
      live: null,
      featured: true,
    },
    {
      id: "06",
      name: "Go Scalable Auth Boilerplate",
      tagline: "Production-ready authentication architecture",
      description:
        "High-performance Go backend template using pgx + sqlc (no ORM), Redis caching, NATS messaging, and Prometheus metrics. Designed for scalability and real-world production use.",
      tech: ["Go", "PostgreSQL", "Redis", "NATS", "Prometheus"],
      accent: "magenta",
      github: "https://github.com/nyashahama/go-scalable-auth-boilerplate",
      live: null,
      featured: true,
    },

    {
      id: "07",
      name: "E-commerce Search Optimization",
      tagline: "Optimizing search with advanced data structures",
      description:
        "Java backend project focused on improving e-commerce search performance using graphs, BSTs, concurrent maps, and PostgreSQL.",
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
      tagline: "Collaborative full-stack university project",
      description:
        "Full-stack application built with React frontend and Node.js/Express backend. Focused on clean architecture, RESTful APIs, and collaborative development using Git.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      accent: "green",
      github: "https://github.com/nyashahama/Team-34-Project",
      live: null,
      featured: false,
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
