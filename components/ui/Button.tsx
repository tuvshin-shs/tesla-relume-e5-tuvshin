import Image from "next/image";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "alt" | "link";
type Size = "sm" | "md";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-[12px] text-base font-medium leading-[1.5] whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants: Record<Variant, string> = {
  // flat brand blue — identical on light and dark backgrounds
  primary:
    "bg-primary text-white shadow-[0_1px_2px_rgba(2,7,11,0.08)] hover:bg-primary-hover active:bg-primary-active",
  secondary:
    "bg-ink/5 text-ink shadow-[0_1px_2px_rgba(2,7,11,0.05),inset_0_-2px_1px_rgba(2,7,11,0.05)] hover:bg-ink/10",
  outline: "bg-transparent text-ink shadow-[inset_0_0_0_1px_var(--color-line)] hover:bg-ink/5",
  // translucent button on dark imagery (hero)
  alt: "bg-white/10 text-white shadow-[0_1px_2px_rgba(2,7,11,0.05),inset_0_-2px_1px_rgba(2,7,11,0.05)] hover:bg-white/20",
  link: "text-ink",
};

// secondary + 1px inner ring (Figma "Shop" / "View Networks")
const secondaryRing =
  "bg-ink/5 text-ink shadow-[0_1px_2px_rgba(2,7,11,0.05),inset_0_0_0_1px_rgba(2,7,11,0.05),inset_0_-2px_1px_rgba(2,7,11,0.05)] hover:bg-ink/10";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2",
  md: "px-6 py-2.5",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  /** Fill the available width inside a flex row (product card buttons) */
  block?: boolean;
  ring?: boolean;
  href?: string;
  /** Chevron for the `link` variant */
  iconSrc?: string;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  block,
  ring,
  href,
  iconSrc = "/assets/chevron-right-dark.svg",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    ring && variant === "secondary" ? secondaryRing : variants[variant],
    variant === "link" ? "p-0" : block ? "h-10 min-w-0 flex-1 px-3 py-2" : sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {variant === "link" && (
        <Image
          src={iconSrc}
          alt=""
          width={24}
          height={24}
          className="transition-transform group-hover:translate-x-[3px]"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
