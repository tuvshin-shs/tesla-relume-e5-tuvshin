import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type IconButtonVariant = "plain" | "outline" | "overlay";

const base =
  "grid size-11 place-items-center rounded-full text-reba-ink transition-[background-color,opacity] duration-200 disabled:cursor-default disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-reba-ink [&_svg]:size-5";

const variants: Record<IconButtonVariant, string> = {
  plain: "enabled:hover:bg-reba-ink/8",
  outline: "shadow-[inset_0_0_0_1px_#d4ccc0] enabled:hover:bg-reba-ink/8",
  // on top of photos
  overlay:
    "bg-black/40 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] hover:bg-black/70 focus-visible:outline-white",
};

type IconButtonProps = {
  variant?: IconButtonVariant;
  /** Accessible name — icon buttons have no visible text */
  label: string;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "aria-label">;

export function IconButton({ variant = "plain", label, children, className, type = "button", ...rest }: IconButtonProps) {
  return (
    <button type={type} aria-label={label} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

/** 20px stroke icons used in the styleguide demos (inherit currentColor). */
export function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {direction === "right" ? (
        <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M19 12H5m6-6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 8h16M4 16h16" strokeLinecap="round" />
    </svg>
  );
}
