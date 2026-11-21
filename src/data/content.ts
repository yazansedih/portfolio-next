// All portfolio copy lives here. Links set to `null` are hidden until filled in.

export type Link = { label: string; href: string | null };

export const profile = {
  name: "Yazan Al-Sedih",
  tagline:
    "AI/ML & full-stack engineer building intelligent systems with patience and precision.",
  intro:
    "I build LLM agents, RAG pipelines and monitored ML models — and the full-stack products that put them into production. Backend engineer on the Tasheh app, first place at the Pink AI Hackathon 2026.",
  meta: "Ramallah, Palestine · Open to remote & on-site · Arabic (native) · English (professional)",
  email: "yazansedih@gmail.com",
  cvUrl: null as string | null, // CV hidden for now; add a PDF without the phone number to public/ and set its path here
  photo: "/profile-2026-1.jpeg" as string | null,
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yazansedih/" },
    { label: "GitHub", href: "https://github.com/yazansedih" },
    { label: "LeetCode", href: "https://leetcode.com/u/yazansedih/" },
    { label: "DataCamp", href: "https://www.datacamp.com/portfolio/yazansedih" },
  ] satisfies Link[],
};

export const focusAreas = [
  { index: "01 · AI / ML", title: "LLM agents, RAG, data processing and model training", tone: "accent" },
  { index: "02 · Backend", title: "Secure APIs, auth and databases", tone: "olive" },
  { index: "03 · Full stack", title: "Next.js and React, end to end", tone: "ink" },
] as const;

export type Project = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  highlights?: string[];
  metrics?: { value: string; label: string }[];
  stack: string;
  // Screenshots shown (stacked) when this project is featured; width/height keep them uncropped.
  images?: { src: string; width: number; height: number; alt: string }[];
  links: Link[];
  hidden?: boolean; // keeps the card's copy without showing it
};

// Which project gets the large card at the top of Selected Work.
// Set it to any project's `id` (e.g. "apex"); the rest fill the grid in list order.
export const featuredProjectId = "pulse";

export const projects: Project[] = [
  {
    id: "pulse",
    eyebrow: "Aurynix · AI lead qualification · 2026",
    title: "Aurynix Pulse — AI Lead Qualification",
    summary:
      "Tells a sales team which leads are ready to buy, and why. Pulse collects leads from a web form, Telegram and CSV into one place, merges duplicates, scores each one from 0 to 100, and alerts the team on Telegram the moment a lead turns hot. Live in production with a one-click demo login.",
    highlights: [
      "Score blends fit from my Apex ML model with intent from Gemini, which reads Arabic or English messages for budget, authority, need and timeline — every signal backed by a quote from the lead's own words",
      "Won/Lost outcomes flow back to Apex against its original prediction, so the model can be measured on real deals without leakage",
      "Prompt-injection protection, contact details stripped before the LLM, and a keyword fallback when Gemini is down",
      "Transactional outbox and HMAC-signed n8n webhooks; 600+ API tests and a Playwright browser test on every PR",
    ],
    stack: "FastAPI · PostgreSQL · Redis · Gemini · n8n · Next.js · Docker",
    images: [
      { src: "/aurynix-pulse-leads.png", width: 1831, height: 943, alt: "Aurynix Pulse lead list ranked by score" },
      { src: "/aurynix-pulse-lead.png", width: 1818, height: 944, alt: "Aurynix Pulse lead page with quoted BANT signals" },
    ],
    links: [
      { label: "Live demo →", href: "https://aurynix-pulse.duckdns.org/" },
      { label: "Watch the 2-min video →", href: null },
    ],
  },
  {
    id: "apex",
    eyebrow: "Aurynix · ML platform · 2026",
    title: "Aurynix Apex — Lead Scoring & Monitoring",
    summary:
      "Ranks new sales leads by their chance of converting, explains each score in plain words, and warns when the model stops being reliable. A leakage audit removed 9 columns that would have inflated results. Retraining swaps in a new model only if it beats the current one on the same held-out leads. Runs live as a FastAPI service with a Streamlit demo.",
    metrics: [
      { value: "43%", label: "of buyers found in the top 20% of leads" },
      { value: "2.2×", label: "better than random ordering" },
    ],
    stack: "Python · Scikit-learn · FastAPI · Postgres · Docker · GitHub Actions",
    images: [{ src: "/aurynix-apex.png", width: 1821, height: 943, alt: "Aurynix Apex lead scoring demo" }],
    links: [
      { label: "Live demo →", href: "https://aurynix-apex-demo.onrender.com/" },
    ],
  },
  {
    id: "nexus",
    eyebrow: "Aurynix · AI assistant · 2026",
    title: "Aurynix Nexus — AI Business Assistant",
    summary:
      "A multi-agent assistant built with FastAPI and LangGraph that routes work between research, email and calendar agents — with a human approval gate before any irreversible Gmail or Calendar action.",
    highlights: [
      "RAG pipeline on Qdrant + FastEmbed with heading-aware chunking, OCR fallback and source/page citations",
      "Regex-first supervisor routing with LLM fallback; async ingestion through a Redis worker queue",
      "OAuth 2.0 with PKCE, AES-256-GCM token encryption and refresh-token rotation",
    ],
    stack: "FastAPI · LangGraph · Next.js · TypeScript · Qdrant · Docker",
    images: [{ src: "/aurynix-nexus.png", width: 1891, height: 938, alt: "Aurynix Nexus dashboard" }],
    links: [
      { label: "Live demo →", href: "https://aurynix-nexus-web.vercel.app/" },
      { label: "Read case study →", href: null },
    ],
  },
  {
    id: "tasheh",
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
      { label: "App Store →", href: "https://apps.apple.com/il/app/tasheh-%D8%B7%D8%B4%D8%A9/id6771122490" },
      { label: "Google Play →", href: "https://play.google.com/store/apps/details?id=com.tasheh.mobile" },
    ],
  },
  {
    id: "pink-ai",
    eyebrow: "Competition · DataCamp × Gaza Sky Geeks",
    title: "Pink AI Hackathon — 1st Place",
    summary:
      "Team Rooters won a three-hour breast cancer data science challenge in DataCamp's Pink October program — framing the model as a tool that supports doctors, not one that replaces them.",
    highlights: [
      "Repaired hidden errors in a messy, hand-typed dataset instead of deleting data",
      "Removed a leaking feature and chose a decision threshold we could defend",
    ],
    stack: "Python · Pandas · Scikit-learn · DataLab",
    links: [{ label: "View certificate →", href: "https://drive.google.com/file/d/1LbhsYGHiVWxsJNQ0aLja1aQFYRCoUc1p/view?usp=sharing" }],
    hidden: true, // shown under Education & Recognition instead
  },
  {
    id: "shuur",
    eyebrow: "Team project · Arabic NLP · 2025",
    title: "Shu'ur — Arabic Sentiment Analysis",
    summary:
      "Analyzes, classifies and visualizes Arabic customer support conversations — including dialects — so teams can spot dissatisfaction early and improve service quality.",
    highlights: [
      "Positive, neutral and negative sentiment with automatic tagging of unhappy messages",
      "Real-time trend dashboards; evaluated with accuracy, precision, recall, F1, MAE and RMSE",
    ],
    stack: "Arabic NLP · OpenRouter LLM APIs · Real-time chat",
    links: [],
    hidden: true,
  },
  {
    id: "sumod",
    eyebrow: "Team project · Forecasting + RAG · 2025",
    title: "Sumod — Renewable Energy Tracker",
    summary:
      "Visualizes renewable energy consumption and forecasts future usage from historical climate and energy data, with a RAG chatbot that answers questions about the trends.",
    highlights: [
      "LSTM forecasting model in TensorFlow; RAG chatbot on Ollama",
      "Geospatial consumption maps with Plotly and Mapbox; JWT-secured ASP.NET Core API",
    ],
    stack: "TensorFlow · Streamlit · Ollama · ASP.NET Core · SQL Server",
    links: [],
    hidden: true,
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

export const recommendation = {
  quote:
    "Yazan consistently demonstrated strong technical growth, curiosity, and the ability to quickly apply advanced AI tools in real-world tasks. His discipline and eagerness to learn stood out throughout the program.",
  name: "Abd Saya'rah",
  role: "Instructor, “Using AI as a Personal Assistant” bootcamp · Gaza Sky Geeks",
  href: "https://www.linkedin.com/in/yazansedih/details/recommendations/" as string | null,
};

export type EducationItem = { period: string; title: string; place: string; href?: string; linkLabel?: string };

export const education: EducationItem[] = [
  { period: "2020 — 2025", title: "B.E. Computer Engineering", place: "An-Najah National University, Nablus" },
  { period: "Sep — Dec 2025", title: "Deep Dive LLM Bootcamp", place: "zakey.tech" },
  {
    period: "Oct 2026",
    title: "1st Place, Pink AI Hackathon",
    place: "DataCamp × Gaza Sky Geeks",
    href: "https://drive.google.com/file/d/1LbhsYGHiVWxsJNQ0aLja1aQFYRCoUc1p/view?usp=sharing",
    linkLabel: "View certificate →",
  },
  { period: "2025 — Present", title: "Data Science & AI Scholarship", place: "DataCamp × Gaza Sky Geeks" },
];
