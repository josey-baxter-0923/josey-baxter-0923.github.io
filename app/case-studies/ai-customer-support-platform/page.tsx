import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/portfolio/case-study-page";

export const metadata: Metadata = {
  title: "AI Customer Support Platform Case Study",
  description:
    "Technical case study for an AI-assisted support platform with RAG, FastAPI, Next.js, PostgreSQL, pgvector, Redis, and observability.",
};

export default function Page() {
  return (
    <CaseStudyPage
      study={{
        title: "AI Customer Support Platform",
        intro:
          "An AI-assisted support workspace should reduce repetitive support work without turning the model into an unreviewed decision maker.",
        context:
          "Support teams need triage, prioritization, customer context, and repeatable draft responses. The hard part is not calling an LLM. The hard part is making AI output explainable, source-backed, reviewable, and measurable.",
        architecture: [
          "Next.js frontend for inbox, ticket detail, analytics, and agent workflows",
          "FastAPI backend for ticket APIs, auth, knowledge search, and AI orchestration",
          "PostgreSQL with pgvector for ticket data and semantic retrieval",
          "Redis for rate limiting, caching, and short-lived coordination",
          "SSE streaming for draft generation and chat assistance",
          "Prometheus metrics for API behavior and support workflow health",
        ],
        decisions: [
          "Keep prompt templates and model configuration behind an AI gateway boundary",
          "Store retrieval sources and confidence metadata with draft responses",
          "Escalate low-confidence or sensitive tickets instead of auto-sending",
          "Treat analytics as part of the workflow, not a separate reporting afterthought",
        ],
        challenges: [
          "Preventing AI responses from bypassing support review",
          "Making source context visible to agents",
          "Balancing latency with retrieval quality",
          "Separating product state from AI provider behavior",
        ],
        improvements: [
          "Add screenshots and seeded demo data",
          "Add evaluation tests for retrieval and prompt behavior",
          "Add role-specific dashboards for agent and manager workflows",
          "Add production deployment notes and service-level assumptions",
        ],
      }}
    />
  );
}
