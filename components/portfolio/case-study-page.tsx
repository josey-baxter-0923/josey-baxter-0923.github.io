import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/portfolio/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export type CaseStudyBrief = {
  title: string;
  intro: string;
  context: string;
  architecture: string[];
  decisions: string[];
  challenges: string[];
  improvements: string[];
};

export function CaseStudyPage({ study }: { study: CaseStudyBrief }) {
  return (
    <>
      <Header />
      <main className="mx-auto w-[min(920px,calc(100%-1.5rem))] py-14 md:py-20">
        <Link href="/#case-studies">
          <Button asChild variant="secondary" size="sm">
            <span>
              <ArrowLeft className="mr-2 size-4" />
              Back to case studies
            </span>
          </Button>
        </Link>
        <div className="mt-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Technical Case Study
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">{study.title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{study.intro}</p>
        </div>
        <div className="mt-10 grid gap-5">
          <TextCard title="Product Context" body={study.context} />
          <ListCard title="Architecture" items={study.architecture} />
          <ListCard title="Technical Decisions" items={study.decisions} />
          <ListCard title="Engineering Challenges" items={study.challenges} />
          <ListCard title="Next Improvements" items={study.improvements} />
        </div>
      </main>
    </>
  );
}

function TextCard({ title, body }: { title: string; body: string }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </CardHeader>
      <CardContent>
        <p className="leading-7 text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-muted-foreground">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
