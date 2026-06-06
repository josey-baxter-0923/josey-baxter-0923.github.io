import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/portfolio/case-study-page";

export const metadata: Metadata = {
  title: "Workflow Automation Engine Case Study",
  description:
    "Technical case study for an event-driven automation engine with typed actions, queues, retries, audit logs, and tenant execution limits.",
};

export default function Page() {
  return (
    <CaseStudyPage
      study={{
        title: "Workflow Automation Engine",
        intro:
          "Automation systems earn trust when they can explain what happened, recover from common failures, and make unsafe work difficult to trigger accidentally.",
        context:
          "SaaS teams often need automations that respond to product, billing, CRM, support, or analytics events. A serious implementation needs more than a trigger-action UI: it needs execution history, retry behavior, rate limits, and inspectable failures.",
        architecture: [
          "TypeScript API for workflow definitions and event ingestion",
          "Zod validation for trigger payloads and typed action inputs",
          "BullMQ and Redis for queue-backed execution",
          "PostgreSQL for workflow definitions, events, runs, and audit logs",
          "Worker processes for retries, backoff, and long-running integrations",
          "Tenant execution limits to protect shared infrastructure",
        ],
        decisions: [
          "Store events before scheduling matching workflows",
          "Execute actions in workers rather than request handlers",
          "Keep action adapters small and typed",
          "Make every run inspectable with status, timing, input, output, and error data",
        ],
        challenges: [
          "Idempotency across retries and external webhooks",
          "Preventing one tenant from exhausting worker capacity",
          "Making failed runs useful to support and engineering teams",
          "Preserving workflow version behavior for already-running jobs",
        ],
        improvements: [
          "Add visual workflow editor",
          "Add dead-letter queue inspection",
          "Add adapter examples for Slack, email, webhooks, and internal APIs",
          "Add concurrency controls and workflow versioning",
        ],
      }}
    />
  );
}
