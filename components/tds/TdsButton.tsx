import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Tesla Design System button (.tds-btn): 40px tall, 4px radius, 14px medium label,
 * 4px × 24px padding, colors fade over 330ms.
 */
type Variant = "primary" | "secondary" | "tertiary" | "light" | "outline-light";

const base =
  "inline-flex items-center justify-center rounded-tds border-[3px] py-1 font-tds text-tds-30 leading-[1.2] font-medium whitespace-nowrap " +
  "transition-[background-color,border-color,color,box-shadow] duration-330 ease-[ease] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tds-grey-35 " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "border-transparent bg-tds-blue-30 text-white hover:bg-tds-blue-20",
  // outlined, high-contrast; fills on hover
  secondary: "border-tds-grey-10 bg-transparent text-tds-grey-10 hover:bg-tds-grey-10 hover:text-white",
  tertiary: "border-transparent bg-tds-grey-70 text-tds-grey-20 hover:bg-tds-grey-65",
  // on photography
  light: "border-transparent bg-white/90 text-tds-grey-20 hover:bg-white",
  "outline-light": "border-white bg-transparent text-white hover:bg-white hover:text-tds-grey-10",
};

const sizes = {
  md: "h-10 px-6", // --tds-height--pill
  sm: "h-8 px-4", // compact (header)
};

type TdsButtonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  /** 204px minimum width (hero buttons on tablet/desktop) */
  wide?: boolean;
  /** Share a row equally with sibling buttons (product tiles) */
  block?: boolean;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function TdsButton({
  variant = "primary",
  size = "md",
  wide,
  block,
  href,
  className,
  children,
  type = "button",
  ...rest
}: TdsButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    block ? "h-10 min-w-0 flex-1 px-3" : sizes[size],
    wide && "sm:min-w-[204px]",
    className,
  );

  if (href && /^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

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
