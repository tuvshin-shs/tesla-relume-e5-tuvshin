import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type RebaButtonVariant = "primary" | "dark" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-reba-sans font-medium whitespace-nowrap transition-[background-color,color,transform] duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-3";

const sizes = {
  md: "px-6 py-2.5 text-reba-base",
  sm: "px-4 py-1.5 text-reba-sm",
};

const variants: Record<RebaButtonVariant, string> = {
  // taupe pill — main call to action
  primary: "bg-reba-taupe text-reba-ink hover:bg-reba-taupe-hover focus-visible:outline-reba-ink",
  // outlined, for light backgrounds
  dark: "text-reba-ink shadow-[inset_0_0_0_1px_#19140e] hover:bg-reba-ink/8 focus-visible:outline-reba-ink",
  // outlined, for dark/photo backgrounds
  ghost: "text-white shadow-[inset_0_0_0_1px_#ffffff99] hover:bg-white/12 focus-visible:outline-white",
  // solid white, for dark/photo backgrounds
  light: "bg-white text-reba-ink hover:bg-[color-mix(in_srgb,#fff_85%,#19140e)] focus-visible:outline-white",
};

type RebaButtonProps = {
  variant?: RebaButtonVariant;
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function RebaButton({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  type = "button",
  ...rest
}: RebaButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
