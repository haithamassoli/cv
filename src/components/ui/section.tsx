import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("flex min-h-0 flex-col gap-y-3 print:gap-y-3", className)}
      {...props}
    />
  );
}
