import type { ReactNode } from "react";
import { Eyebrow } from "@/components/reba/Eyebrow";
import { cn } from "@/lib/cn";

type SectionHeadProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  /** Right-aligned action (button) on left-aligned heads */
  action?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

/** Section heading: eyebrow + H2 + lead, optional action on the right. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
  action,
  as: Heading = "h2",
  className,
}: SectionHeadProps) {
  const center = align === "center";
  return (
    <div
      className={cn(
        "flex flex-wrap items-end gap-6",
        center ? "justify-center text-center" : "justify-between",
        className,
      )}
    >
      <div className={cn("flex max-w-[564px] flex-col gap-4", center ? "items-center" : "items-start")}>
        {eyebrow && <Eyebrow rule={!center}>{eyebrow}</Eyebrow>}
        <Heading className="font-reba-sans text-reba-h2 font-semibold text-balance text-reba-ink">{title}</Heading>
        {lead && <p className="font-reba-serif text-reba-base text-reba-muted">{lead}</p>}
      </div>
      {action}
    </div>
  );
}
