// All portfolio copy lives here. Links set to `null` are hidden until filled in.

export type Link = { label: string; href: string | null };

export const profile = {
  name: "Yazan Al-Sedih",
  tagline:
    "AI & ML engineer building intelligent systems with patience and precision.",
  intro:
    "I build LLM agents, RAG pipelines and monitored ML models — and the secure backends that put them into production. Backend engineer on the Tasheh app, first place at the Pink AI Hackathon 2026.",
  meta: "Ramallah, Palestine · Open to remote & on-site · Arabic (native) · English (professional)",
  email: "yazansedih@gmail.com",
  cvUrl: null as string | null, // e.g. "/yazan-al-sedih-cv.pdf" once added to /public
  photo: null as string | null, // e.g. "/photo.jpg" once added to /public
  socials: [
    { label: "LinkedIn", href: null },
    { label: "GitHub", href: "https://github.com/yazansedih" },
    { label: "LeetCode", href: null },
  ] satisfies Link[],
};

export const focusAreas = [
  { index: "01 · AI / ML", title: "LLM agents, RAG and model training", tone: "accent" },
  { index: "02 · Backend", title: "Secure APIs, auth and databases", tone: "olive" },
  { index: "03 · Full stack", title: "Next.js and React products, end to end", tone: "ink" },
] as const;

export const featured = {
  eyebrow: "Aurynix · Featured · 2026",
  title: "Aurynix Nexus — AI Business Assistant",
  summary:
    "A multi-agent assistant built with FastAPI and LangGraph that routes work between research, email and calendar agents — with a human approval gate before any irreversible Gmail or Calendar action.",
  highlights: [
    "RAG pipeline on Qdrant + FastEmbed with heading-aware chunking and OCR fallback",
    "Async ingestion through a Redis worker queue",
    "OAuth 2.0 with encrypted tokens; OpenTelemetry, Prometheus and Sentry monitoring",
  ],
  stack: "FastAPI · LangGraph · Next.js · TypeScript · Qdrant · Docker",
  image: null as string | null,
  links: [
    { label: "Live demo →", href: null },
    { label: "Read case study →", href: null },
  ] satisfies Link[],
};

export type Project = {
  eyebrow: string;
  title: string;
  summary: string;
  highlights?: string[];
  metrics?: { value: string; label: string }[];
  stack: string;
  links: Link[];
};

export const projects: Project[] = [
  {
    eyebrow: "Aurynix · ML platform · 2026",
    title: "Aurynix Apex — ML Scoring & Monitoring",
    summary:
      "A configuration-driven pipeline with leakage auditing and calibrated, explainable scoring models — served via FastAPI with drift monitoring and champion/challenger retraining.",
    metrics: [
      { value: "0.787", label: "PR-AUC · X Education" },
      { value: "0.359", label: "PR-AUC · Bank Marketing" },
    ],
    stack: "Python · Scikit-learn · FastAPI · MLflow · GitHub Actions",
    links: [{ label: "View repository →", href: "https://github.com/Aurynix/aurynix-apex" }],
  },
  {
    eyebrow: "Client work · Live on iOS & Android",
    title: "Tasheh — Location-Based Discovery",
    summary:
      "Backend engineer for a multi-tenant venue discovery and ordering platform: the PostgreSQL schema in Prisma, authentication end to end, and a hardened, tested REST API.",
    highlights: [
      "JWT sessions, Google/Apple sign-in, RBAC with audit logging",
      "Zod validation, auto-generated OpenAPI docs, Jest/Supertest",
    ],
    stack: "Node.js · Express · TypeScript · PostgreSQL · Prisma",
    links: [
      { label: "App Store →", href: null },
      { label: "Google Play →", href: null },
    ],
  },
  {
    eyebrow: "Competition · DataCamp × Gaza Sky Geeks",
    title: "Pink AI Hackathon — 1st Place",
    summary:
      "Won first place in a breast cancer ML challenge by focusing on what makes medical models trustworthy: leak-free modeling and careful threshold tuning.",
    stack: "Python · Pandas · Scikit-learn · DataLab",
    links: [{ label: "View certificate →", href: null }],
  },
];

export const experience = [
  {
    period: "Nov 2025 — Present",
    role: "Freelance Backend Developer",
    company: "Tasheh",
    description:
      "Shipping production REST endpoints on Node.js, Express and TypeScript; owning the Prisma schema, authentication and RBAC for a multi-tenant platform. Remote.",
  },
  {
    period: "Nov 2025 — Present",
    role: "Technical Support Representative",
    company: "Jawwal",
    description:
      "Diagnosing Fiber, xDSL and IPTV issues and troubleshooting network infrastructure on MikroTik and Fortinet devices — and explaining it all clearly to non-technical customers. Nablus.",
  },
  {
    period: "Feb — May 2025",
    role: "Backend Developer Intern",
    company: "Experts Turnkey Solutions",
    description:
      "Built RESTful APIs in ASP.NET Core with a layered architecture and Entity Framework, secured with JWT and role-based authorization, documented with Swagger. Ramallah.",
  },
];

export const skills = [
  { group: "AI / LLM", items: "LangGraph, LangChain, RAG, LLM APIs, Prompt Engineering, Hugging Face Transformers, AraBERT" },
  { group: "Machine Learning", items: "Scikit-learn, TensorFlow, Pandas, NumPy, Feature Engineering, MLflow, Jupyter" },
  { group: "Backend", items: "Node.js, Express, FastAPI, ASP.NET Core, REST API design, JWT, OAuth 2.0, RBAC, Zod" },
  { group: "Data", items: "PostgreSQL, Prisma, MySQL, SQL Server, MongoDB, Redis, Qdrant" },
  { group: "Frontend", items: "React, Next.js, TypeScript, HTML, CSS" },
  { group: "DevOps & Quality", items: "Docker, GitHub Actions, OpenTelemetry, Prometheus, Sentry, Jest, Supertest, Swagger/OpenAPI" },
];

export const education = [
  { period: "2020 — 2025", title: "B.E. Computer Engineering", place: "An-Najah National University, Nablus" },
  { period: "Oct 2026", title: "1st Place, Pink AI Hackathon", place: "DataCamp × Gaza Sky Geeks" },
  { period: "2025 — Present", title: "Data Science & AI Scholarship", place: "DataCamp × Gaza Sky Geeks" },
  { period: "Sep — Dec 2025", title: "Deep Dive LLM Bootcamp", place: "zakey.tech" },
];
