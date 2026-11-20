import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  bg?: "white" | "gray";
  /** Remove top padding (used when the previous section already provides the gap) */
  flushTop?: boolean;
  /** Classes for the inner 1280px container */
  className?: string;
  id?: string;
  children: ReactNode;
};

export function Section({ bg = "white", flushTop, className, id, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "overflow-hidden px-(--pad-x) py-(--sec-y)",
        bg === "gray" ? "bg-surface" : "bg-white",
        flushTop && "pt-0",
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1280px]", className)}>{children}</div>
    </section>
  );
}
