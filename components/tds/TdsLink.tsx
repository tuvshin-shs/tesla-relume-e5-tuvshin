import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Tesla text link: 1px underline drawn with box-shadow, thickening to 2px on hover. */
export function TdsLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-inherit shadow-[0_2px_0_-1px_currentColor] transition-shadow duration-330 ease-[ease] hover:shadow-[0_3px_0_-1px_currentColor]",
        "focus-visible:rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tds-grey-35",
        className,
      )}
    >
      {children}
    </Link>
  );
}
