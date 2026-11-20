import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TdsIconButtonVariant = "default" | "light";

const base =
  "flex size-10 shrink-0 items-center justify-center rounded-tds text-tds-grey-10 transition-colors duration-330 [&_svg]:size-5 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tds-grey-35 disabled:cursor-default disabled:opacity-40";

const variants: Record<TdsIconButtonVariant, string> = {
  default: "bg-tds-grey-70 enabled:hover:bg-tds-grey-65",
  // on top of photos
  light: "bg-white/90 enabled:hover:bg-white",
};

type TdsIconButtonProps = {
  variant?: TdsIconButtonVariant;
  /** Accessible name — icon buttons have no visible text */
  label: string;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "aria-label">;

/** 40px square icon button with the TDS 4px corner (carousel arrows, close buttons). */
export function TdsIconButton({ variant = "default", label, children, className, type = "button", ...rest }: TdsIconButtonProps) {
  return (
    <button type={type} aria-label={label} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

/** 20px stroke chevron (inherits currentColor). */
export function ChevronIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path
        d={direction === "right" ? "m9 6 6 6-6 6" : "m15 6-6 6 6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
