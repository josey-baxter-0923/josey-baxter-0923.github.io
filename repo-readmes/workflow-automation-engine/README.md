# Workflow Automation Engine

[![CI](https://github.com/josey-baxter-0923/workflow-automation-engine/actions/workflows/ci.yml/badge.svg)](https://github.com/josey-baxter-0923/workflow-automation-engine/actions)

Event-driven workflow automation engine for defining triggers, running typed actions, retrying failed jobs, and keeping an audit trail of automation activity.

> Deployment: `https://your-deployment-url.example.com`

## Features

- Workflow builder model with triggers, conditions, and action steps
- Event ingestion API for product, CRM, billing, or support events
- Worker-based execution with retries and backoff
- Action adapters for email, webhook calls, notifications, and internal tasks
- Run history with status, duration, input payload, and error details
- Tenant-aware workflow ownership and execution limits
- Audit log for workflow changes and manual re-runs
- Basic metrics for run volume, failure rate, and queue latency

## Tech Stack

- **Runtime:** Node.js, TypeScript
- **API:** Express or Fastify
- **Workers:** BullMQ with Redis
- **Database:** PostgreSQL with Prisma
- **Validation:** Zod
- **Infrastructure:** Docker Compose, GitHub Actions
- **Testing:** Unit tests for workflow definitions and integration tests for job execution

## Architecture Overview

The engine is split into definition, ingestion, scheduling, and execution concerns.

- Workflow definitions describe triggers, filters, action steps, and enabled state.
- The event ingestion API validates incoming events and stores them before scheduling work.
- The scheduler resolves matching workflows and enqueues execution jobs.
- Workers execute each step with retry behavior, timeout handling, and structured logs.
- The audit layer records workflow changes and run-level events for support and debugging.

This design keeps external event intake fast while moving slower or failure-prone actions into the worker pool.

## Setup

```bash
git clone https://github.com/josey-baxter-0923/workflow-automation-engine.git
cd workflow-automation-engine
npm install
cp .env.example .env
docker compose up -d
npx prisma migrate dev
npm run dev
```

Required environment variables:

```bash
DATABASE_URL=
REDIS_URL=
WEBHOOK_SIGNING_SECRET=
APP_URL=
```

Run workers locally:

```bash
npm run worker
```

## Screenshots

Add screenshots here once the UI is deployed:

- Workflow list
- Trigger and action configuration
- Run history
- Failed job detail
- Queue metrics

## Roadmap

- Add visual workflow editor
- Add more action adapters
- Add workflow versioning and rollback
- Add dead-letter queue inspection
- Add per-tenant concurrency controls

## Notes

This project is a practical automation architecture example. Real production use should include stricter sandboxing for third-party actions, deeper observability, and rate-limit policies tailored to each integration.
