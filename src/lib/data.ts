// ---------------------------------------------------------------------------
// Single source of truth for all resume-derived content on the site.
// Every fact here must trace back to the provided resume. Links that were
// not supplied are explicitly modeled as `null` and rendered as disabled /
// "not provided" states in the UI — never invented.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Sumit Singh",
  title: "Full-Stack Developer / SDE-1",
  location: "Delhi, India",
  email: "sumit9810158@gmail.com",
  phone: "+91-9312662261",
  currentlyBuildingAt: "PanScience Innovation",
};

export const social = {
  email: `mailto:${profile.email}`,
  linkedin: "https://www.linkedin.com/in/sumit-singh-94ab12279/",
  github: "https://github.com/sumitt02",
};

// Anchors are prefixed with "/" so they always resolve to the homepage
// section first, even when clicked from a project detail page — a bare
// "#work" just appends the hash to whatever page you're already on.
export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Contact", href: "/#contact" },
];

// ---------------------------------------------------------------------------
// Tech stack strip
// ---------------------------------------------------------------------------

export const techStack = [
  "React",
  "Redux Toolkit",
  "Node.js",
  "Express",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Redis",
  "BullMQ",
  "Celery",
  "Docker",
  "Git",
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  flagship?: boolean;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "PanScience Innovation",
    role: "SDE-1",
    period: "May 2026 — Present",
    flagship: true,
    summary:
      "Building a large-scale, role-based enterprise CRM end-to-end — from data model to production deployment.",
    bullets: [
      "Building a large-scale role-based enterprise CRM end-to-end",
      "React + Redux frontend",
      "Node.js / Express backend with RESTful APIs",
      "Prisma + PostgreSQL data layer",
      "JWT and Azure AD authentication",
      "Fine-grained role-based access control (RBAC)",
      "Async background workers with BullMQ / Redis",
      "Bulk Excel data pipelines",
      "Swagger-documented APIs",
      "Jest unit and integration testing with 95%+ coverage",
    ],
    stack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Azure AD",
      "BullMQ",
      "Redis",
      "Swagger",
      "Jest",
    ],
  },
  {
    company: "Skymet Weather Services",
    role: "IT Intern",
    period: "Summer 2025",
    summary:
      "Built React UI components for an internal weather dashboard rendering live meteorological data.",
    bullets: [
      "Built React UI components for an internal weather dashboard",
      "Rendered live meteorological data",
      "Integrated frontend with backend APIs",
      "Worked through design → implementation → code review → deployment",
      "Debugged backend API issues across Express and React",
      "Traced UI symptoms to API/database root causes",
      "Worked under Agile sprint deadlines",
      "Participated in daily standups and PR reviews",
    ],
    stack: ["React", "Express", "REST APIs"],
  },
  {
    company: "Fonada",
    role: "IT Intern",
    period: "Summer 2024",
    summary: "Backend and API development and debugging.",
    bullets: ["Backend and API development", "API debugging and issue resolution"],
    stack: ["Backend", "APIs"],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type ProjectHighlight = { label: string; detail: string };

export type Project = {
  slug: string;
  flagship?: boolean;
  name: string;
  year: string;
  /** Short label shown on the card eyebrow, e.g. "Full-Stack" or "Frontend". */
  kind: string;
  /** Optional status chip, e.g. "In progress". */
  status?: string;
  /** Which illustrated mockup to render on the work card. */
  visual: "crm" | "screener" | "clinic" | "tv" | "photo";
  oneLiner: string;
  description: string;
  stack: string[];
  highlights: ProjectHighlight[];
  workflow?: string[];
  repoUrl: string | null;
  liveUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: "enterprise-crm-platform",
    flagship: true,
    name: "Enterprise CRM Platform",
    year: "2026",
    kind: "Full-Stack",
    visual: "crm",
    oneLiner:
      "A large-scale, role-based CRM built for production use — from schema to background workers.",
    description:
      "A large-scale role-based enterprise CRM currently being built at PanScience Innovation. The system spans a React + Redux frontend, a Node.js/Express API layer, a Prisma/PostgreSQL data model, and asynchronous background processing for bulk operations — with authentication, authorization, and testing treated as first-class concerns rather than afterthoughts.",
    stack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "JWT",
      "Azure AD",
      "Swagger",
      "Jest",
    ],
    highlights: [
      { label: "Frontend", detail: "React + Redux" },
      { label: "Backend", detail: "Node.js / Express, REST APIs" },
      { label: "Data layer", detail: "Prisma / PostgreSQL" },
      { label: "Auth", detail: "JWT + Azure AD, role-based access control" },
      { label: "Async processing", detail: "BullMQ / Redis background workers" },
      { label: "Data pipelines", detail: "Bulk Excel import/export pipelines" },
      { label: "API docs", detail: "Swagger-documented APIs" },
      { label: "Testing", detail: "Jest unit + integration, 95%+ coverage" },
    ],
    repoUrl: null,
    liveUrl: null,
  },
  {
    slug: "ai-resume-screener",
    name: "AI Resume Screener",
    year: "April 2026",
    kind: "Full-Stack · AI",
    visual: "screener",
    oneLiner: "A two-sided SaaS for recruiters and candidates with parallel resume processing.",
    description:
      "A two-sided SaaS platform for recruiters and candidates. Recruiters bulk-upload PDF resumes, which are processed in parallel by Celery workers and scored against job requirements using the OpenAI API, then reviewed side-by-side in a comparison dashboard.",
    stack: ["FastAPI", "React", "PostgreSQL", "Celery", "OpenAI API"],
    highlights: [
      { label: "Product", detail: "Two-sided SaaS for recruiters and candidates" },
      { label: "Ingestion", detail: "Bulk PDF upload" },
      { label: "Processing", detail: "Parallel processing with Celery workers" },
      { label: "Review UI", detail: "Side-by-side candidate comparison dashboard" },
      { label: "Auth", detail: "JWT authentication, role-based access control" },
      { label: "Data isolation", detail: "Query-level data isolation per tenant/role" },
      {
        label: "Schema",
        detail: "PostgreSQL schema for users, jobs, applications and AI scoring results",
      },
      { label: "Integrity", detail: "Foreign-key constraints and query-performance indexes" },
      { label: "Dedup", detail: "MD5-based duplicate detection" },
    ],
    workflow: ["Upload", "Process", "Score", "Compare"],
    repoUrl: "https://github.com/sumitt02/AI-RESUME-SCREENER",
    liveUrl: "https://ai-resume-screener-hazel.vercel.app/",
  },
  {
    slug: "clinic-management-system",
    name: "Clinic Management System",
    year: "2025",
    kind: "Full-Stack",
    visual: "clinic",
    oneLiner: "Role-based clinic workflow for receptionists and doctors, with live token queuing.",
    description:
      "A role-based clinic management system with separate authentication flows and dashboards for doctors and receptionists — covering patient registration, live-updating token queues, billing, and patient records behind protected, validated APIs.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    highlights: [
      { label: "Roles", detail: "Doctor and Receptionist roles, separate auth flows" },
      { label: "Dashboards", detail: "Role-specific dashboards" },
      { label: "Core flows", detail: "Patient registration, token queuing, billing, records" },
      { label: "Architecture", detail: "RESTful APIs on an MVC architecture" },
      { label: "Data layer", detail: "Mongoose schemas" },
      { label: "Auth", detail: "JWT middleware, protected routes" },
      { label: "Validation", detail: "Form validation" },
      { label: "Realtime", detail: "Live-updating token queue" },
    ],
    workflow: ["Reception", "Patient Registration", "Token Queue", "Doctor", "Records / Billing"],
    // The resume's hyperlink for this repo is truncated at
    // "github.com/sumitt02/clinic-management-" (missing the rest of the
    // slug) — left null rather than guessing the real repo name.
    repoUrl: null,
    liveUrl: null,
  },
  // The client for this project is intentionally not named on the site.
  {
    slug: "tv-entertainment-app",
    name: "TV Entertainment App",
    year: "Shipped",
    kind: "Frontend",
    visual: "tv",
    oneLiner:
      "The frontend of a consumer app for one of India's largest TV service providers.",
    description:
      "Built the frontend of a consumer-facing app for a major Indian TV service provider (client name withheld) — the interface its subscribers use every day.",
    stack: ["Frontend", "Consumer App"],
    highlights: [
      { label: "Client", detail: "Major Indian TV service provider (name withheld)" },
      { label: "Scope", detail: "Frontend of the consumer app" },
      { label: "Audience", detail: "The provider's subscribers" },
    ],
    repoUrl: null,
    liveUrl: null,
  },
  {
    slug: "photography-studio-app",
    name: "Photography Studio App & Website",
    year: "2026",
    kind: "Mobile + Web",
    status: "In progress",
    visual: "photo",
    oneLiner:
      "A mobile app and website for a photography company — currently in the making.",
    description:
      "Currently building a mobile app and a companion website for a photography company. The website showcases the studio's work to new clients, while the mobile app gives customers a dedicated experience on their phones.",
    stack: ["Mobile App", "Website"],
    highlights: [
      { label: "Client", detail: "Photography company" },
      { label: "Scope", detail: "Mobile app + marketing website" },
      { label: "Status", detail: "In progress" },
    ],
    repoUrl: null,
    liveUrl: null,
  },
];

// ---------------------------------------------------------------------------
// Engineering philosophy
// ---------------------------------------------------------------------------

export const principles = [
  {
    title: "Build for production",
    body: "I care about reliability, maintainability, authentication, authorization, testing, and real-world constraints.",
  },
  {
    title: "Understand the system",
    body: "I like tracing problems across the frontend, API, database, and background-processing layers.",
  },
  {
    title: "Keep architecture intentional",
    body: "Use the right abstractions without overengineering.",
  },
  {
    title: "Ship and iterate",
    body: "Design → Build → Test → Review → Deploy → Improve.",
  },
];

// ---------------------------------------------------------------------------
// System-thinking architecture layers
// ---------------------------------------------------------------------------

export const systemLayers = [
  { key: "frontend", label: "Frontend", tech: ["React", "Redux Toolkit", "React Query"] },
  { key: "api", label: "API Layer", tech: ["Node.js", "Express", "FastAPI", "REST APIs"] },
  { key: "auth", label: "Authentication / Authorization", tech: ["JWT", "Azure AD", "RBAC"] },
  { key: "logic", label: "Business Logic", tech: ["MVC", "Prisma ORM"] },
  { key: "database", label: "Database", tech: ["PostgreSQL", "MongoDB", "Mongoose"] },
  { key: "async", label: "Async Processing", tech: ["BullMQ", "Redis", "Celery"] },
  { key: "testing", label: "Testing / Deployment", tech: ["Jest", "Docker", "Git"] },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export type Skill = { name: string; note: string };
export type SkillCategory = { category: string; items: Skill[] };

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", note: "Component-based UI development" },
      { name: "Redux Toolkit", note: "Application state management" },
      { name: "React Query", note: "Server-state and data fetching" },
      { name: "JavaScript (ES6+)", note: "Core language for frontend and backend" },
      { name: "HTML", note: "Semantic markup" },
      { name: "CSS", note: "Styling and layout" },
      { name: "REST API integration", note: "Connecting UI to backend services" },
      { name: "Component architecture", note: "Reusable, composable UI structure" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", note: "JavaScript runtime for services" },
      { name: "Express.js", note: "REST API framework" },
      { name: "FastAPI", note: "Python API framework" },
      { name: "REST APIs", note: "Service-to-client contracts" },
      { name: "MVC", note: "Backend architecture pattern" },
      { name: "Prisma ORM", note: "Type-safe database access" },
      { name: "JWT", note: "Token-based authentication" },
      { name: "Role-Based Access Control", note: "Fine-grained authorization" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", note: "Relational database" },
      { name: "MongoDB", note: "Document database" },
      { name: "Mongoose", note: "MongoDB schema modeling" },
      { name: "SQLite", note: "Lightweight relational database" },
      { name: "Schema Design", note: "Modeling data and relationships" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", note: "Frontend and backend development" },
      { name: "Python", note: "Backend services and APIs" },
      { name: "C++", note: "Core programming fundamentals" },
      { name: "SQL", note: "Relational querying" },
    ],
  },
  {
    category: "Tools & Infrastructure",
    items: [
      { name: "Git", note: "Version control" },
      { name: "GitHub", note: "Collaboration and code review" },
      { name: "Postman", note: "API testing" },
      { name: "Docker", note: "Containerization" },
      { name: "Redis", note: "Caching and queue backing store" },
      { name: "BullMQ", note: "Background job processing" },
      { name: "Celery", note: "Distributed task queue" },
      { name: "VS Code", note: "Primary editor" },
      { name: "Linux", note: "Development and deployment environment" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Education & certifications
// ---------------------------------------------------------------------------

export const education = {
  degree: "B.Tech, Computer Science & Engineering (IoT)",
  school: "Manipal University, Jaipur",
  period: "Sept 2022 — Jun 2026",
};

export const certifications = [
  {
    name: "Google Project Management Professional Certificate",
    issuer: "Google · 7 courses",
    date: "Mar 2026",
  },
  {
    name: "Java Foundations",
    issuer: "Oracle Academy",
    date: null,
  },
  {
    name: "Data Structures & Algorithms",
    issuer: "Udemy",
    date: null,
  },
  {
    name: "Internet of Things",
    issuer: "1stop",
    date: null,
  },
];
