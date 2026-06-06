# SaaS Billing & Subscription System

[![CI](https://github.com/josey-baxter-0923/saas-billing-subscription-system/actions/workflows/ci.yml/badge.svg)](https://github.com/josey-baxter-0923/saas-billing-subscription-system/actions)

Subscription billing reference implementation for SaaS products that need plan management, entitlements, invoices, webhook processing, and usage-aware account state.

> Deployment: `https://your-deployment-url.example.com`

## Features

- Plan catalog with monthly and annual pricing options
- Customer subscription lifecycle: trialing, active, past due, canceled, and incomplete
- Stripe Checkout and customer portal integration
- Webhook handling with idempotency keys and event history
- Account entitlements derived from current subscription state
- Usage tracking for metered or tiered plan limits
- Invoice list, payment status, and billing profile views
- Admin view for account-level billing diagnostics

## Tech Stack

- **Frontend:** React, TypeScript
- **Backend:** Node.js, Express or Next.js API routes
- **Database:** PostgreSQL, Prisma
- **Payments:** Stripe Checkout, Billing Portal, Webhooks
- **Auth:** Session-based auth or provider integration
- **Infrastructure:** Docker, GitHub Actions, Vercel or Fly.io

## Architecture Overview

Billing systems are easiest to maintain when payment provider events are treated as inputs to a local subscription model.

- Stripe owns payment collection, checkout, invoices, and hosted billing portal flows.
- The application stores normalized account, subscription, plan, and entitlement records.
- Webhook events are persisted before processing so retries and audits are straightforward.
- Idempotent handlers update local subscription state without assuming events arrive in order.
- Entitlements are read from local state so product features do not need to call Stripe at runtime.

The core design goal is predictable state transitions. Payment provider webhooks can be noisy, delayed, or repeated, so the application should be able to explain why an account has a given level of access.

## Setup

```bash
git clone https://github.com/josey-baxter-0923/saas-billing-subscription-system.git
cd saas-billing-subscription-system
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

Required environment variables:

```bash
DATABASE_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
APP_URL=
```

For local webhook testing:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Screenshots

Add screenshots here once the UI is deployed:

- Pricing table
- Checkout flow
- Subscription settings
- Invoice history
- Admin billing diagnostics

## Roadmap

- Add annual plan upgrade and downgrade proration examples
- Add usage-based billing examples
- Add dunning and failed-payment messaging
- Add team member limits based on entitlement state
- Add webhook replay tooling for local debugging

## Notes

This project focuses on architecture and implementation patterns. Production billing should be reviewed against the actual product model, tax requirements, compliance needs, and payment provider configuration.
