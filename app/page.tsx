import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  GitPullRequestArrow,
  Mail,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/portfolio/header";
import { DashboardHero } from "@/components/portfolio/dashboard-hero";
import { AnimatedNumber, Reveal } from "@/components/portfolio/motion-primitives";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  architectureHighlights,
  caseStudies,
  githubMetrics,
  impactMetrics,
  profile,
  repoAudit,
  selectedProducts,
  systemDiagramNodes,
  timeline,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-surface mask-fade opacity-70" />
          <div className="relative mx-auto grid w-[min(1180px,calc(100%-1.5rem))] items-center gap-10 py-8 md:min-h-[calc(86svh-4rem)] md:py-16 lg:grid-cols-[0.93fr_1.07fr] lg:py-16">
            <Reveal>
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  <Sparkles size={14} />
                  {profile.positioning}
                </div>
                <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl md:text-6xl">
                  Product-minded engineering for SaaS systems with AI in the workflow.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Josey Baxter is positioned for senior full-stack roles where architecture,
                  product judgment, and practical AI implementation matter more than another
                  generic project grid.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={profile.github}>
                    <Button asChild size="lg">
                      <span>
                        <Github className="mr-2 size-4" />
                        Review GitHub
                      </span>
                    </Button>
                  </a>
                  <a href="#products">
                    <Button asChild variant="secondary" size="lg">
                      <span>
                        Selected Products
                        <ArrowUpRight className="ml-2 size-4" />
                      </span>
                    </Button>
                  </a>
                </div>
                <div className="mt-8 hidden gap-3 sm:grid sm:grid-cols-3">
                  {["Senior Software Engineer", "SaaS Architect", "Technical Leader"].map((item) => (
                    <div key={item} className="rounded-md border border-border bg-white/[0.035] p-3 text-sm font-semibold">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="hidden md:block">
              <DashboardHero />
            </Reveal>
          </div>
        </section>

        <section id="impact" className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Engineering Impact"
              title="The story is systems, not slogans."
            >
              The profile should immediately map to problems startup teams actually have:
              tenant boundaries, billing state, AI reliability, workflow automation, analytics,
              observability, and shipping discipline.
            </SectionHeading>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {impactMetrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.04}>
                <Card className="h-full">
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-4xl font-semibold text-foreground">{metric.value}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{metric.detail}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="products" className="border-y border-border bg-white/[0.025] py-20">
          <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))]">
            <Reveal>
              <SectionHeading
                eyebrow="Selected Products"
                title="Five repositories that should define the profile."
              >
                Each card is written like a product architecture brief: problem, solution,
                architecture, engineering challenges, and the intended proof point.
              </SectionHeading>
            </Reveal>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {selectedProducts.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Reveal key={project.slug} delay={index * 0.03}>
                    <Card className="h-full overflow-hidden">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="mb-3 inline-flex rounded-md border border-border bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                              {project.status}
                            </div>
                            <h3 className="text-2xl font-semibold">{project.name}</h3>
                          </div>
                          <div className="grid size-11 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                            <Icon size={22} />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 text-sm leading-6 text-muted-foreground">
                          <ProjectDetail label="Problem" value={project.problem} />
                          <ProjectDetail label="Solution" value={project.solution} />
                          <ProjectDetail label="Architecture" value={project.architecture} />
                          <div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                              Tech Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((item) => (
                                <span key={item} className="rounded-full border border-border bg-white/[0.035] px-2.5 py-1 text-xs text-foreground/85">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                              Engineering Challenges
                            </p>
                            <ul className="space-y-2">
                              {project.challenges.map((challenge) => (
                                <li key={challenge} className="flex gap-2">
                                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                                  <span>{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <ProjectDetail label="Outcome" value={project.outcome} />
                        </div>
                        <div className="mt-5 flex flex-wrap gap-3">
                          <a href={project.repo} className="text-sm font-semibold text-primary">
                            Repository <ExternalLink className="ml-1 inline size-3.5" />
                          </a>
                          {caseStudies.some((study) => study.slug === project.slug) ? (
                            <Link href={`/case-studies/${project.slug}`} className="text-sm font-semibold text-sky-300">
                              Case study <ArrowUpRight className="ml-1 inline size-3.5" />
                            </Link>
                          ) : null}
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="architecture" className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-20">
          <Reveal>
            <SectionHeading eyebrow="Architecture Highlights" title="A product engineer who thinks in boundaries.">
              The visual language borrows from enterprise SaaS: precise surfaces, traceable
              flows, metrics, and diagrams that make system ownership visible.
            </SectionHeading>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-4">
              {architectureHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 0.04}>
                    <Card>
                      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                        <div className="grid size-10 place-items-center rounded-md border border-border bg-white/[0.04] text-primary">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={0.08}>
              <Card className="relative min-h-[520px] overflow-hidden">
                <div className="absolute inset-0 grid-surface opacity-80" />
                <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                {systemDiagramNodes.map((node) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.id}
                      className="absolute w-32 rounded-md border border-border bg-background/88 p-3 text-center shadow-premium"
                      style={{ left: node.x, top: node.y }}
                    >
                      <Icon className="mx-auto mb-2 text-primary" size={20} />
                      <p className="text-xs font-semibold">{node.id}</p>
                    </div>
                  );
                })}
                <div className="absolute bottom-5 left-5 right-5 rounded-md border border-primary/25 bg-primary/10 p-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    The portfolio should make architecture tangible: inputs, boundaries,
                    runtime behavior, failure modes, and measurable product outcomes.
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        <section id="case-studies" className="border-y border-border bg-white/[0.025] py-20">
          <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))]">
            <Reveal>
              <SectionHeading eyebrow="Technical Case Studies" title="Concise enough to scan, technical enough to trust.">
                These are not blog posts. They are engineering briefs that explain product
                context, architecture decisions, tradeoffs, and next steps.
              </SectionHeading>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {caseStudies.map((study, index) => (
                <Reveal key={study.slug} delay={index * 0.05}>
                  <Link href={`/case-studies/${study.slug}`}>
                    <Card className="group h-full transition hover:-translate-y-1 hover:border-primary/35">
                      <CardHeader>
                        <p className="text-sm font-semibold text-primary">0{index + 1}</p>
                        <h3 className="text-xl font-semibold">{study.title}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-6 text-muted-foreground">{study.summary}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {study.metrics.map((metric) => (
                            <span key={metric} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                              {metric}
                            </span>
                          ))}
                        </div>
                        <p className="mt-5 text-sm font-semibold text-primary">
                          Read brief <ArrowUpRight className="inline size-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="github" className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-20">
          <Reveal>
            <SectionHeading eyebrow="Open Source & GitHub Metrics" title="A candid profile audit, turned into a repair plan.">
              Senior portfolios gain credibility when they do not hide weak signals. This
              section shows the current GitHub evidence and what should change next.
            </SectionHeading>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Current profile story</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{repoAudit.currentStory}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {githubMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-md border border-border bg-white/[0.035] p-4">
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                      <p className="mt-1 text-3xl font-semibold">
                        <AnimatedNumber value={metric.value} />
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Recommended GitHub moves</h3>
              </CardHeader>
              <CardContent>
                <div className="grid gap-5 md:grid-cols-3">
                  <AuditList title="Highlight" items={repoAudit.highlight} />
                  <AuditList title="Hide" items={repoAudit.hide} />
                  <AuditList title="Create" items={repoAudit.create} />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="timeline" className="border-y border-border bg-white/[0.025] py-20">
          <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))]">
            <Reveal>
              <SectionHeading eyebrow="Experience Timeline" title="Positioning the work like a technical lead.">
                This portfolio should read as a sequence of engineering decisions and product
                systems, not a chronological resume.
              </SectionHeading>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {timeline.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.05}>
                  <Card className="h-full">
                    <CardHeader>
                      <p className="text-sm font-semibold text-primary">{item.date}</p>
                      <h3 className="text-lg font-semibold">{item.label}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-20">
          <Reveal>
            <Card className="overflow-hidden border-primary/30 bg-[linear-gradient(135deg,rgba(45,212,191,0.12),transparent_45%),hsl(var(--card))]">
              <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">Contact</p>
                  <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                    Built for founders and engineering managers reviewing senior product engineers.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                    The strongest next step is to turn the recommended repositories into shipped,
                    documented systems and pin only original work that supports the SaaS/AI architecture narrative.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a href={`mailto:${profile.email}`}>
                    <Button asChild size="lg">
                      <span>
                        <Mail className="mr-2 size-4" />
                        Email Josey
                      </span>
                    </Button>
                  </a>
                  <a href={profile.github}>
                    <Button asChild variant="secondary" size="lg">
                      <span>
                        <GitPullRequestArrow className="mr-2 size-4" />
                        GitHub
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </Reveal>
        </section>
      </main>
      <footer className="mx-auto flex w-[min(1180px,calc(100%-1.5rem))] flex-col gap-2 border-t border-border py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2026 Josey Baxter. Architecture-focused portfolio.</p>
        <p>Next.js 15 • TypeScript • Tailwind • Framer Motion • MDX • Vercel</p>
      </footer>
    </>
  );
}

function ProjectDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-foreground">{label}</p>
      <p>{value}</p>
    </div>
  );
}

function AuditList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-foreground">{title}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
