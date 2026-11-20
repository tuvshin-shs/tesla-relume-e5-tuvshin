import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  /** "tag" is the smaller 10px label with wider tracking */
  size?: "default" | "tag";
  mono?: boolean;
  /** 32px rule before the text */
  rule?: boolean;
  /** Use the parent's text color instead of muted (e.g. on dark backgrounds) */
  inherit?: boolean;
  as?: "p" | "span";
  className?: string;
  children: ReactNode;
};

/** Small uppercase label shown above headings. */
export function Eyebrow({
  size = "default",
  mono,
  rule,
  inherit,
  as: Tag = "p",
  className,
  children,
}: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "flex w-fit items-center gap-3 font-medium uppercase",
        mono ? "font-reba-mono" : "font-reba-sans",
        size === "tag" ? "text-reba-2xs tracking-[0.12em]" : "text-reba-xs tracking-[0.08em]",
        inherit ? "text-inherit" : "text-reba-muted",
        rule && "before:h-px before:w-8 before:flex-none before:bg-current before:content-['']",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
