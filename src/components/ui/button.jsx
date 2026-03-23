"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex w-fit items-center justify-center whitespace-nowrap rounded-full border border-transparent font-semibold ring-offset-background transition-[transform,background-color,border-color,color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_20px_60px_-25px_rgba(255,151,87,0.85)] hover:-translate-y-0.5 hover:bg-primary/90",
        secondary:
          "border-white/10 bg-secondary/70 text-secondary-foreground shadow-[0_18px_50px_-28px_rgba(63,174,190,0.7)] hover:-translate-y-0.5 hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-white/12 bg-white/[0.05] text-foreground shadow-[0_18px_60px_-38px_rgba(0,0,0,0.95)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.08]",
        plain:
          "border-white/10 bg-transparent text-muted-foreground shadow-none hover:border-white/20 hover:bg-white/[0.05] hover:text-foreground",
      },
      size: {
        default: "h-12 px-6 text-sm sm:h-14 sm:px-8",
        sm: "h-10 px-4 text-sm",
        lg: "h-12 px-8 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const MotionButton = motion(Button);

export { MotionButton, Button, buttonVariants };
