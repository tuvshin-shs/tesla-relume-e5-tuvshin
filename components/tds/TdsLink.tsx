import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Tesla text link: 1px underline drawn with box-shadow, thickening to 2px on hover. External URLs open in a new tab. */
export function TdsLink({
  href,
  subtle,
  className,
  children,
}: {
  href: string;
  /** No underline until hover (footer, dense lists) */
  subtle?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const classes = cn(
    "text-inherit transition-shadow duration-330 ease-[ease]",
    subtle
      ? "hover:shadow-[0_2px_0_-1px_currentColor]"
      : "shadow-[0_2px_0_-1px_currentColor] hover:shadow-[0_3px_0_-1px_currentColor]",
    "focus-visible:rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tds-grey-35",
    className,
  );

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
