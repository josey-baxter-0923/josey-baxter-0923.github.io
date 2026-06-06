import {
  Activity,
  Bot,
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  DatabaseZap,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  Network,
  ShieldCheck,
  TimerReset,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Josey Baxter",
  role: "Senior Software Engineer",
  positioning: "SaaS Architect, Product Engineer, AI Systems Builder",
  github: "https://github.com/josey-baxter-0923",
  email: "joseybaxterdev@gmail.com",
  location: "US remote",
  summary:
    "Full-stack product engineer focused on SaaS architecture, AI-assisted workflows, platform reliability, and analytics-heavy product surfaces.",
};

export const repoAudit = {
  generatedAt: "2026-06-06",
  publicRepos: 11,
  followers: 0,
  following: 0,
  currentStory:
    "The profile currently signals a senior SaaS/AI direction, but the public evidence is uneven: one substantial AI support project, a profile README with broad positioning, several empty source repos, and three prominent forks.",
  weaknesses: [
    "Pinned repositories currently include Ghost, Strapi, and Django forks, which can read as borrowed credibility unless there are visible PRs or fork-specific changes.",
    "Several original repos have no description, no detected language, and size 0, which weakens the senior narrative.",
    "The profile bio has a capitalization issue and lacks location, company context, website, and hireability signal.",
    "Recent visible activity is compressed into a short June 2026 burst rather than a steady contribution pattern.",
    "README language sometimes says production-grade before the public repo evidence supports that claim.",
  ],
  highlight: [
    "ai-customer-support-platform",
    "josey-baxter-0923.github.io",
    "saas-multi-tenant-platform once implemented",
    "workflow-automation-engine once created",
    "realtime-analytics-dashboard once created",
  ],
  hide: ["Ghost", "strapi", "django", "empty placeholder repos until implemented"],
  create: [
    "saas-billing-subscription-system",
    "workflow-automation-engine",
    "realtime-analytics-dashboard",
    "multi-tenant-saas-starter",
    "github-portfolio-intelligence",
  ],
};

export const impactMetrics = [
  {
    label: "Public repos audited",
    value: "11",
    detail: "Profile narrative mapped to hiring signals",
  },
  {
    label: "Priority systems",
    value: "5",
    detail: "AI support, billing, automation, analytics, tenancy",
  },
  {
    label: "Architecture layers",
    value: "8",
    detail: "Web, API, auth, queue, data, AI, observability, deploy",
  },
  {
    label: "Target audience",
    value: "A/B",
    detail: "Built for startup engineering manager review",
  },
];

export const selectedProducts = [
  {
    slug: "ai-customer-support-platform",
    name: "AI Customer Support Platform",
    repo: "https://github.com/josey-baxter-0923/ai-customer-support-platform",
    status: "Implemented repo",
    problem:
      "Support teams need faster triage and response drafting without losing review control or customer context.",
    solution:
      "A support workspace with ticket management, RAG-backed knowledge retrieval, AI draft assistance, sentiment signals, and analytics.",
    architecture:
      "Next.js frontend, FastAPI service layer, PostgreSQL + pgvector, Redis rate limiting/cache, SSE streaming, Prometheus metrics, Docker Compose.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "pgvector", "Redis", "OpenAI"],
    challenges: [
      "Keeping AI assistive rather than autonomous",
      "Capturing confidence and source context",
      "Separating product workflows from model orchestration",
    ],
    outcome:
      "Strongest current repo signal; should become the primary pinned project after adding screenshots, issues, tests, and deployment.",
    icon: MessageSquareText,
  },
  {
    slug: "saas-billing-subscription-system",
    name: "SaaS Billing & Subscription System",
    repo: "https://github.com/josey-baxter-0923/saas-billing-subscription-system",
    status: "Recommended build",
    problem:
      "Early SaaS products often bolt billing on late, creating unreliable entitlements and ambiguous account state.",
    solution:
      "A subscription system that models plans, Stripe webhooks, idempotency, invoices, usage limits, and account entitlements.",
    architecture:
      "Next.js account UI, Node service layer, Prisma/PostgreSQL billing model, Stripe Checkout/Portal, webhook event ledger, entitlement resolver.",
    stack: ["React", "Node.js", "Stripe", "Prisma", "PostgreSQL", "GitHub Actions"],
    challenges: [
      "Handling out-of-order provider events",
      "Making subscription state explainable",
      "Avoiding runtime dependency on Stripe for feature checks",
    ],
    outcome:
      "Shows practical SaaS judgment and gives hiring managers a familiar, high-signal system to evaluate.",
    icon: LockKeyhole,
  },
  {
    slug: "workflow-automation-engine",
    name: "Workflow Automation Engine",
    repo: "https://github.com/josey-baxter-0923/workflow-automation-engine",
    status: "Recommended build",
    problem:
      "Product teams need reliable automations that can recover from failures and explain what happened.",
    solution:
      "Event ingestion, workflow definitions, typed actions, queue-backed execution, retry policies, and audit trails.",
    architecture:
      "Fastify/Node API, Zod validation, BullMQ workers, Redis queues, PostgreSQL definitions, tenant-aware execution limits.",
    stack: ["TypeScript", "Node.js", "BullMQ", "Redis", "PostgreSQL", "Docker"],
    challenges: [
      "Designing repeatable execution semantics",
      "Making failed runs inspectable",
      "Keeping actions typed and tenant-scoped",
    ],
    outcome:
      "Positions Josey as an AI systems and automation engineer, not only a UI builder.",
    icon: Workflow,
  },
  {
    slug: "realtime-analytics-dashboard",
    name: "Realtime Analytics Dashboard",
    repo: "https://github.com/josey-baxter-0923/realtime-analytics-dashboard",
    status: "Recommended build",
    problem:
      "Founders and product leads need fresh operational metrics without dumping raw event noise into dashboards.",
    solution:
      "Realtime product analytics with funnel, cohort, feature usage, API health, queue health, and anomaly views.",
    architecture:
      "React dashboard, FastAPI metrics API, event ingestion, PostgreSQL/Timescale rollups, Redis fanout, WebSocket or SSE streaming.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "TimescaleDB", "Redis"],
    challenges: [
      "Choosing freshness where it changes decisions",
      "Maintaining metric contracts",
      "Balancing charts with operational tables",
    ],
    outcome:
      "Adds product judgment and data storytelling, both valuable to Series A/B SaaS teams.",
    icon: ChartNoAxesCombined,
  },
  {
    slug: "multi-tenant-saas-starter",
    name: "Multi-Tenant SaaS Starter",
    repo: "https://github.com/josey-baxter-0923/multi-tenant-saas-starter",
    status: "Recommended build",
    problem:
      "Most SaaS demos ignore the tenant, role, billing, and audit boundaries that production products need early.",
    solution:
      "A tenant-aware starter with organizations, memberships, RBAC, feature flags, billing hooks, background jobs, and audit events.",
    architecture:
      "Next.js 15 app, Prisma/PostgreSQL, NextAuth-compatible auth, tenant-scoped service helpers, Stripe hooks, queue worker.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Vercel"],
    challenges: [
      "Preventing tenant isolation leaks",
      "Keeping starter code understandable",
      "Making product modules composable",
    ],
    outcome:
      "Best flagship repo candidate once it has tests, screenshots, seed data, and deployment docs.",
    icon: Layers3,
  },
];

export const architectureHighlights = [
  {
    title: "Tenant isolation first",
    body: "Organization membership, RBAC, feature gates, and data-access helpers are treated as product primitives rather than late-stage cleanup.",
    icon: ShieldCheck,
  },
  {
    title: "AI gateway pattern",
    body: "Prompts, retrieval, confidence metadata, usage logging, and provider configuration sit behind a service boundary.",
    icon: BrainCircuit,
  },
  {
    title: "Event-driven work",
    body: "Long-running work moves through queues with idempotency, retries, dead-letter handling, and inspectable run history.",
    icon: GitBranch,
  },
  {
    title: "Operational dashboards",
    body: "Metrics are tied to decisions: latency, support load, activation, conversion, queue depth, and reliability.",
    icon: Activity,
  },
];

export const systemDiagramNodes = [
  { id: "Web App", x: "8%", y: "16%", icon: Boxes },
  { id: "API Layer", x: "38%", y: "16%", icon: Network },
  { id: "Auth/RBAC", x: "68%", y: "16%", icon: ShieldCheck },
  { id: "AI Gateway", x: "18%", y: "56%", icon: Bot },
  { id: "Queue", x: "48%", y: "56%", icon: TimerReset },
  { id: "Data Store", x: "76%", y: "56%", icon: DatabaseZap },
  { id: "Cloud Deploy", x: "40%", y: "78%", icon: CloudCog },
];

export const caseStudies = [
  {
    slug: "ai-customer-support-platform",
    title: "AI Support Platform",
    summary:
      "How to use LLMs for support acceleration while preserving human review, source context, and escalation paths.",
    metrics: ["RAG workflow", "SSE streaming", "Prometheus metrics"],
  },
  {
    slug: "multi-tenant-saas-starter",
    title: "Multi-Tenant SaaS Starter",
    summary:
      "A foundation for tenant-aware products where auth, roles, billing hooks, and audit events are modeled early.",
    metrics: ["RBAC", "Tenant-scoped services", "Billing hooks"],
  },
  {
    slug: "workflow-automation-engine",
    title: "Workflow Automation Engine",
    summary:
      "A queue-backed automation architecture with typed actions, retries, failure inspection, and tenant execution limits.",
    metrics: ["BullMQ", "Typed events", "Run history"],
  },
];

export const timeline = [
  {
    label: "Profile repair",
    date: "Now",
    text: "Unpin forks, add descriptions/topics, and promote original SaaS/AI systems.",
  },
  {
    label: "Flagship implementation",
    date: "Next",
    text: "Complete multi-tenant starter and billing system with screenshots, issues, tests, and deployments.",
  },
  {
    label: "Contribution credibility",
    date: "Ongoing",
    text: "Make small, traceable contributions to Strapi/Django/Ghost only if linked to concrete pull requests.",
  },
  {
    label: "Technical leadership",
    date: "After buildout",
    text: "Add architecture decision records, test strategy, and operational notes to each product repo.",
  },
];

export const githubMetrics = [
  { label: "Public repositories", value: 11, tone: "neutral" },
  { label: "Original repos with substance", value: 1, tone: "warning" },
  { label: "Pinned forks", value: 3, tone: "warning" },
  { label: "Priority repos to create/complete", value: 5, tone: "positive" },
];
