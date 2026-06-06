import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:bg-primary/90",
        secondary:
          "border border-border bg-white/[0.04] text-foreground hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]",
        ghost: "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-3",
        lg: "h-12 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? "span" : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
