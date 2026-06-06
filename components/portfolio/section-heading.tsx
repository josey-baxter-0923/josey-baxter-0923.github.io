import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{children}</p> : null}
    </div>
  );
}
