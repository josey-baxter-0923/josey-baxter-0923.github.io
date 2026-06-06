# Realtime Analytics Dashboard

[![CI](https://github.com/josey-baxter-0923/realtime-analytics-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/josey-baxter-0923/realtime-analytics-dashboard/actions)

Realtime analytics dashboard for monitoring product usage, activation, revenue signals, and operational health across a SaaS application.

> Deployment: `https://your-deployment-url.example.com`

## Features

- Realtime metric updates over WebSockets or server-sent events
- Product usage charts for active users, sessions, events, and feature adoption
- Funnel and cohort views for activation and retention analysis
- Operational metrics for API latency, error rate, and background job throughput
- Date range filters, segment filters, and saved dashboard views
- Role-aware reporting for product, support, and leadership users
- Anomaly indicators for unusual traffic, conversion, or error patterns
- Export-ready table views for deeper analysis

## Tech Stack

- **Frontend:** React, TypeScript, charting library
- **Backend:** Python, FastAPI
- **Realtime:** WebSockets or server-sent events
- **Database:** PostgreSQL or TimescaleDB
- **Cache:** Redis for hot metrics and fanout
- **Infrastructure:** Docker, GitHub Actions, Render or Fly.io
- **Quality:** API tests, chart state tests, metric aggregation tests

## Architecture Overview

The dashboard separates event collection from query and presentation paths.

- Event ingestion validates analytics payloads and writes raw events.
- Aggregation jobs build query-friendly rollups for common dashboard views.
- The API serves filtered metrics and exposes realtime subscriptions for fresh values.
- The frontend renders dashboard modules from stable metric contracts.
- Redis can be used for recent counters, WebSocket fanout, and cache invalidation.

Realtime behavior is reserved for metrics where freshness changes user behavior, such as error spikes, queue delays, or active campaign monitoring.

## Setup

```bash
git clone https://github.com/josey-baxter-0923/realtime-analytics-dashboard.git
cd realtime-analytics-dashboard
cp .env.example .env
docker compose up -d
npm install
npm run dev
```

Backend setup may use a Python environment:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Required environment variables:

```bash
DATABASE_URL=
REDIS_URL=
NEXT_PUBLIC_API_URL=
ANALYTICS_WRITE_KEY=
```

## Screenshots

Add screenshots here once the UI is deployed:

- Executive overview
- Realtime operations dashboard
- Funnel analysis
- Cohort retention
- Feature adoption table

## Roadmap

- Add saved dashboard layouts
- Add anomaly detection rules
- Add CSV export and scheduled email reports
- Add tenant-level metric isolation
- Add synthetic data generator for demos

## Notes

This project is designed to show analytics product thinking and full-stack implementation patterns. A production deployment should define retention policies, sampling strategy, privacy controls, and customer-specific data boundaries.
