"use client";

import { motion } from "framer-motion";
import { Activity, Bot, CheckCircle2, GitCommitHorizontal, ServerCog } from "lucide-react";

const rows = [
  ["RAG response", "source-backed", "green"],
  ["Webhook event", "idempotent", "blue"],
  ["Tenant access", "scoped", "green"],
  ["Queue latency", "normal", "amber"],
];

export function DashboardHero() {
  return (
    <div className="relative min-h-[470px] overflow-hidden rounded-lg border border-border bg-[#091220] shadow-premium">
      <div className="flex h-12 items-center gap-2 border-b border-border px-4 text-xs text-muted-foreground">
        <span className="size-2.5 rounded-full bg-rose-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 font-semibold text-foreground/80">platform-control-plane.tsx</span>
      </div>
      <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

      <div className="grid gap-3 p-4 md:grid-cols-[1fr_0.8fr]">
        <div className="rounded-lg border border-border bg-white/[0.035] p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-primary">System Health</p>
              <h3 className="mt-1 text-xl font-semibold">SaaS architecture cockpit</h3>
            </div>
            <Activity className="text-primary" size={22} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              ["p95 API", "184ms"],
              ["AI cost", "$0.018"],
              ["Queue", "42ms"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-border bg-background/70 p-3">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="mt-1 text-xl font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-5 h-48 overflow-hidden rounded-md border border-border bg-background/70">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <motion.div
              className="absolute left-[8%] top-[18%] flex items-center gap-2 rounded-md border border-primary/40 bg-background px-3 py-2 text-sm font-semibold"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <ServerCog size={16} /> API
            </motion.div>
            <motion.div
              className="absolute right-[10%] top-[26%] flex items-center gap-2 rounded-md border border-sky-400/40 bg-background px-3 py-2 text-sm font-semibold"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3.3, repeat: Infinity }}
            >
              <Bot size={16} /> AI Gateway
            </motion.div>
            <motion.div
              className="absolute bottom-[20%] left-[28%] flex items-center gap-2 rounded-md border border-amber-400/40 bg-background px-3 py-2 text-sm font-semibold"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.7, repeat: Infinity }}
            >
              <GitCommitHorizontal size={16} /> Event Queue
            </motion.div>
            <div className="absolute left-[24%] top-[31%] h-px w-[42%] rotate-6 bg-gradient-to-r from-primary/20 via-primary to-sky-300/20" />
            <div className="absolute bottom-[35%] left-[45%] h-px w-[34%] -rotate-12 bg-gradient-to-r from-amber-300/20 via-amber-300 to-transparent" />
          </div>
        </div>

        <div className="grid content-start gap-3">
          <div className="rounded-lg border border-border bg-white/[0.035] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Live checks</p>
            <div className="mt-3 space-y-3">
              {rows.map(([label, status, tone]) => (
                <div key={label} className="flex items-center justify-between rounded-md bg-background/70 px-3 py-2">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span
                    className={
                      tone === "green"
                        ? "text-sm font-semibold text-primary"
                        : tone === "blue"
                          ? "text-sm font-semibold text-sky-300"
                          : "text-sm font-semibold text-amber-300"
                    }
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-primary/25 bg-primary/10 p-4">
            <CheckCircle2 className="text-primary" size={22} />
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Portfolio narrative is framed around systems: tenancy, billing, AI assist, queues,
              analytics, observability, and deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
