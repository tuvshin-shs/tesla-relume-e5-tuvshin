import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  bg?: "white" | "grey";
  /** Classes for the inner 1200px container */
  className?: string;
  id?: string;
  children: ReactNode;
};

/** Page section: TDS gutters (24 / 48px), 64–96px vertical rhythm, 1200px content width. */
export function Section({ bg = "white", className, id, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-14 px-6 py-16 md:px-12 md:py-24", bg === "grey" ? "bg-tds-grey-70" : "bg-white")}
    >
      <div className={cn("mx-auto w-full max-w-[1200px]", className)}>{children}</div>
    </section>
  );
}
