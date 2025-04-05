"use client";

import * as TogglePrimitive from "@kobalte/core/toggle-button";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "~/lib/utils";

const toggleVariants = cva(
  "hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border-input shadow-xs hover:bg-accent hover:text-accent-foreground border bg-transparent",
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle(
  props: ComponentProps<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>,
) {
  const [local, others] = splitProps(props, ["class", "variant", "size"]);

  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      class={cn(toggleVariants(local))}
      {...others}
    />
  );
}

export { Toggle, toggleVariants };
