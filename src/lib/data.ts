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
    period: "May 2026 to now",
    flagship: true,
    summary:
      "I'm building a large enterprise CRM here, from the database design all the way to deployment.",
    bullets: [
      "React and Redux on the front end",
      "REST APIs in Node.js and Express",
      "PostgreSQL through Prisma for the data",
      "Sign in with JWT and Azure AD",
      "Detailed permissions for every role (RBAC)",
      "Background jobs with BullMQ and Redis",
      "Bulk Excel imports and exports",
      "API docs in Swagger",
      "Unit and integration tests in Jest, over 95% coverage",
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
      "Built React components for an internal dashboard that shows live weather data.",
    bullets: [
      "Built React components for the internal weather dashboard",
      "Displayed live weather data coming in from the backend",
      "Connected the frontend to the backend APIs",
      "Took features from design through code review to release",
      "Fixed API bugs on both the Express and React side",
      "Tracked down UI bugs to their real cause in the API or database",
      "Worked in Agile sprints with daily standups and PR reviews",
    ],
    stack: ["React", "Express", "REST APIs"],
  },
  {
    company: "Fonada",
    role: "IT Intern",
    period: "Summer 2024",
    summary: "Worked on backend services and APIs, and spent a lot of time debugging them.",
    bullets: ["Built and maintained backend APIs", "Found and fixed API issues"],
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
      "A big role-based CRM I'm building at work, from the database to the background workers.",
    description:
      "I'm building this enterprise CRM at PanScience Innovation. It has a React and Redux frontend, a Node.js and Express API, a PostgreSQL database accessed through Prisma, and background workers that take care of bulk jobs. Login, permissions and tests were planned in from day one instead of being bolted on at the end.",
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
    oneLiner: "A hiring tool where recruiters upload resumes in bulk and get each one scored against the job.",
    description:
      "A SaaS app with one side for recruiters and one for candidates. Recruiters drop in a stack of PDF resumes at once, Celery workers go through them in parallel, the OpenAI API scores each one against the job, and the results sit side by side so they're easy to compare.",
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
    oneLiner: "Software for a clinic's front desk and its doctors, with a live token queue.",
    description:
      "A clinic management system with separate logins and dashboards for doctors and receptionists. It handles patient registration, a token queue that updates live, billing and patient records, all behind protected APIs with proper form validation.",
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
      "I built the frontend of the app that subscribers of a major Indian TV provider use every day. I can't name the client here.",
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
      "A mobile app and website for a photography company. Still in the works.",
    description:
      "I'm building a mobile app and a website for a photography company. The website shows off the studio's work to new clients, and the app is for their customers to use on their phones.",
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
    body: "Design, build, test, review, ship, then make it better.",
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
  period: "Sept 2022 to Jun 2026",
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
