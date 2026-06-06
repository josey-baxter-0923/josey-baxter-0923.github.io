import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/portfolio/case-study-page";

export const metadata: Metadata = {
  title: "Multi-Tenant SaaS Starter Case Study",
  description:
    "Technical case study for tenant-aware SaaS architecture with organizations, memberships, RBAC, billing hooks, feature flags, jobs, and audit events.",
};

export default function Page() {
  return (
    <CaseStudyPage
      study={{
        title: "Multi-Tenant SaaS Starter",
        intro:
          "The goal of a SaaS starter is not to include every feature. It is to make the dangerous assumptions visible before product features grow around them.",
        context:
          "Early SaaS products usually need organizations, roles, invitations, account settings, feature gates, and billing hooks sooner than expected. If those boundaries are not modeled early, teams often retrofit tenancy through scattered query filters and inconsistent permission checks.",
        architecture: [
          "Next.js 15 app router for product UI and account settings",
          "PostgreSQL and Prisma-style schema for organizations, memberships, roles, and audit events",
          "Auth provider boundary compatible with NextAuth-style session handling",
          "Tenant-scoped service helpers for all reads and writes",
          "Billing event hooks that map subscription state to entitlements",
          "Background jobs for email, scheduled cleanup, and async product workflows",
        ],
        decisions: [
          "Treat organization membership as the core access boundary",
          "Keep entitlement reads local to the app instead of calling billing providers at runtime",
          "Log sensitive changes like invites, role updates, and billing transitions",
          "Pass tenant identifiers explicitly into background jobs",
        ],
        challenges: [
          "Preventing tenant isolation leaks",
          "Keeping starter abstractions understandable",
          "Avoiding overbuilt enterprise patterns before product-market fit",
          "Making the happy path fast while preserving auditability",
        ],
        improvements: [
          "Add a complete demo module that uses tenant-scoped services",
          "Add integration tests for cross-tenant access prevention",
          "Add screenshots for org switcher, roles, billing, and audit log",
          "Add deployment templates for Vercel plus managed Postgres and Redis",
        ],
      }}
    />
  );
}
