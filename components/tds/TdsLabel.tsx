import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TdsLabelProps = {
  /** "tag" is the smaller 10px label with wider tracking */
  size?: "default" | "tag";
  /** 32px rule before the text */
  rule?: boolean;
  /** muted grey (default), the parent's color, or white on photos */
  tone?: "muted" | "inherit" | "on-dark";
  as?: "p" | "span";
  className?: string;
  children: ReactNode;
};

/** Small uppercase label shown above headings (the TDS counterpart of REBA's Eyebrow). */
export function TdsLabel({ size = "default", rule, tone = "muted", as: Tag = "p", className, children }: TdsLabelProps) {
  return (
    <Tag
      className={cn(
        "flex w-fit items-center gap-3 font-medium uppercase",
        size === "tag" ? "text-tds-10 tracking-[0.12em]" : "text-tds-20 tracking-[0.08em]",
        tone === "muted" && "text-tds-grey-30",
        tone === "inherit" && "text-inherit",
        tone === "on-dark" && "text-white/80",
        rule && "before:h-px before:w-8 before:flex-none before:bg-current before:content-['']",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
