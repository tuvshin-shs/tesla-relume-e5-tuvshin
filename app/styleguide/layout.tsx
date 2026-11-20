import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { TdsButton } from "@/components/tds/TdsButton";

export const metadata: Metadata = {
  title: "Styleguide — Tesla Design System",
  description: "Colors, typography, spacing, motion and components based on tesla.com's design system (TDS).",
};

const nav = [
  { label: "Colors", href: "#colors" },
  { label: "Typography", href: "#typography" },
  { label: "Spacing", href: "#spacing" },
  { label: "Motion", href: "#motion" },
  { label: "Components", href: "#components" },
];

export default function StyleguideLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="en" className="min-h-screen bg-white font-tds text-tds-30 text-tds-grey-20 antialiased">
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur">
        <div className="flex h-14 items-center justify-between gap-6 px-6 md:px-12">
          <Link href="/styleguide" className="flex items-center gap-3" aria-label="Tesla styleguide home">
            <Image src="/assets/tesla-logo.svg" alt="" width={120} height={16} />
            <span className="hidden text-tds-20 font-medium text-tds-grey-30 sm:inline">Design System</span>
          </Link>
          <nav aria-label="Styleguide sections" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-tds px-3 py-1 font-medium text-tds-grey-10 transition-colors duration-330 hover:bg-black/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <TdsButton href="/" variant="tertiary" size="sm">
            ← Site
          </TdsButton>
        </div>
      </header>

      <main>{children}</main>

      <footer className="px-6 py-10 text-center text-tds-20 text-tds-grey-30 md:px-12">
        Tokens read from the public CSS custom properties (<code>--tds-*</code>) on tesla.com · Inter stands in for
        Universal Sans · <Link href="/reba-styleguide" className="underline underline-offset-2">REBA styleguide</Link>
      </footer>
    </div>
  );
}
