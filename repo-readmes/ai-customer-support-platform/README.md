# AI Customer Support Platform

[![CI](https://github.com/josey-baxter-0923/ai-customer-support-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/josey-baxter-0923/ai-customer-support-platform/actions)

AI-assisted customer support workspace for triaging tickets, drafting replies, searching internal knowledge, and tracking support quality metrics.

> Deployment: `https://your-deployment-url.example.com`

## Features

- Shared support inbox with ticket status, priority, assignee, and customer context
- AI-assisted draft responses with human review before sending
- Knowledge base retrieval for policy, product, and troubleshooting answers
- Escalation rules for low-confidence responses, billing questions, and sensitive topics
- Conversation timeline with internal notes and audit-friendly activity history
- Dashboard for response time, ticket volume, escalation rate, and resolution trends
- Role-aware access for support agents, managers, and administrators

## Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Backend:** Node.js API routes or service layer
- **Database:** PostgreSQL with Prisma
- **AI:** OpenAI API for drafting, classification, and summarization
- **Infrastructure:** Docker, GitHub Actions, Vercel or Render
- **Quality:** ESLint, Prettier, unit tests, integration tests for core workflows

## Architecture Overview

The application separates the support workspace from AI orchestration so the product can evolve without tightly coupling UI behavior to model prompts.

- The web app handles ticket views, agent workflows, and dashboard reporting.
- The API layer owns validation, permissions, ticket updates, and event logging.
- The AI gateway centralizes prompt templates, model configuration, safety checks, and response metadata.
- The knowledge retrieval layer indexes approved support articles and returns source-backed context.
- Background jobs handle summarization, tagging, stale ticket checks, and reporting rollups.

This keeps AI output assistive rather than autonomous. Drafts are stored with confidence metadata, source references, and review state.

## Setup

```bash
git clone https://github.com/josey-baxter-0923/ai-customer-support-platform.git
cd ai-customer-support-platform
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

Required environment variables:

```bash
DATABASE_URL=
OPENAI_API_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

## Screenshots

Add screenshots here once the UI is deployed:

- Support inbox
- Ticket detail with AI draft
- Knowledge base search
- Manager analytics dashboard

## Roadmap

- Add source citations directly inside draft responses
- Add customer sentiment and urgency signals
- Add saved response templates and approval workflows
- Add Slack or email notification integrations
- Add evaluation tests for prompt and retrieval quality

## Notes

This project is intended as a realistic SaaS support workflow example, not a replacement for production support tooling without additional security, compliance, and provider-specific delivery work.
