import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "cursor-pointer will-change-[box-shadow,transform] bg-[radial-gradient(100%_100%_at_100%_0%,hsl(42_90%_55%)_0%,hsl(38_85%_45%)_100%)] shadow-[0px_0.01em_0.01em_rgb(45_35_66_/_40%),0px_0.3em_0.7em_-0.01em_rgb(45_35_66_/_30%),inset_0px_-0.01em_0px_hsl(38_75%_35%)] rounded-[0.3em] text-primary-foreground text-shadow-[0_1px_0_rgb(0_0_0_/_40%)] transition-[box-shadow_0.15s_ease,transform_0.15s_ease] hover:shadow-[0px_0.1em_0.2em_rgb(45_35_66_/_40%),0px_0.4em_0.7em_-0.1em_rgb(45_35_66_/_30%),inset_0px_-0.1em_0px_hsl(38_65%_30%)] hover:-translate-y-[0.1em] active:shadow-[inset_0px_0.1em_0.6em_hsl(38_65%_30%)] active:translate-y-0 font-bold",
        default: "bg-card text-foreground border-2 border-border hover:border-primary/40 hover:bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] rounded-2xl transition-all",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all",
        secondary: "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground border-2 border-border/50 hover:border-secondary/40 rounded-2xl transition-all",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[2.6em] px-8 py-2 text-base",
        sm: "h-[2.2em] px-6 py-1.5 text-sm",
        lg: "h-[3.2em] px-10 py-3 text-lg",
        icon: "h-10 w-10",
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
