import type { ReactNode } from "react";
import { TdsLabel } from "@/components/tds/TdsLabel";
import { cn } from "@/lib/cn";

type SectionTitleProps = {
  /** Small uppercase label above the title */
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Right-aligned action (buttons) on left-aligned titles */
  action?: ReactNode;
  as?: "h1" | "h2" | "h3";
  /** "dark" for text on photos */
  tone?: "light" | "dark";
  className?: string;
};

/** TDS heading block: 12px label, 28→40px medium title, 17px lead, optional action on the right. */
export function SectionTitle({
  label,
  title,
  description,
  align = "left",
  action,
  as: Heading = "h2",
  tone = "light",
  className,
}: SectionTitleProps) {
  const onDark = tone === "dark";
  const center = align === "center";

  const head = (
    <div
      className={cn(
        "flex max-w-[75ch] flex-col gap-2",
        center && "mx-auto items-center text-center",
        !action && className,
      )}
    >
      {label && <TdsLabel tone={onDark ? "on-dark" : "muted"}>{label}</TdsLabel>}
      <Heading className={cn("text-tds-70 font-medium md:text-tds-80", onDark ? "text-white" : "text-tds-grey-10")}>
        {title}
      </Heading>
      {description && (
        <p className={cn("text-tds-40", onDark ? "text-white/85" : "text-tds-grey-30")}>{description}</p>
      )}
    </div>
  );

  if (!action || center) return head;

  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-6", className)}>
      {head}
      {action}
    </div>
  );
}
