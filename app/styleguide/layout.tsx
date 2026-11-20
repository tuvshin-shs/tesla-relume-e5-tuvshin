import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { TdsButton } from "@/components/tds/TdsButton";

export const metadata: Metadata = {
  title: "Styleguide — Tesla Design System",
  description: "Colors, typography, spacing, motion and components of the Tesla Design System (TDS).",
};

const nav = [
  { label: "Colors", href: "#colors" },
  { label: "Typography", href: "#typography" },
  { label: "Spacing", href: "#spacing" },
  { label: "Motion", href: "#motion" },
  { label: "Components", href: "#components" },
];

// TDS layout: content-box container so the gutter sits outside the 1200px
const container = "mx-auto max-w-[1200px] px-6 box-content md:px-12";

export default function StyleguideLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="en" className="min-h-screen bg-white font-tds text-tds-30 text-tds-grey-20 antialiased">
      <header className="sticky top-0 z-20 border-b border-tds-grey-60 bg-white/90 backdrop-blur">
        <div className={`${container} flex h-14 items-center justify-between gap-6`}>
          <Link href="/styleguide" className="flex items-center gap-3" aria-label="Tesla styleguide home">
            <Image src="/assets/tesla-logo.svg" alt="" width={120} height={16} />
            <span className="font-mono text-tds-10 tracking-[0.12em] text-tds-grey-30 uppercase">Design system</span>
          </Link>
          <nav aria-label="Styleguide sections" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-tds px-3 py-1 font-medium text-tds-grey-30 transition-colors duration-330 hover:bg-black/5 hover:text-tds-grey-10"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <TdsButton href="/" variant="secondary" size="sm">
            ← Tesla site
          </TdsButton>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-tds-grey-10 text-white">
        <div className={`${container} flex flex-col gap-2 py-12 md:flex-row md:items-center md:justify-between`}>
          <p className="text-tds-30 text-white/70">
            Tokens read from the public CSS custom properties (<code className="font-mono">--tds-*</code>) on tesla.com ·
            Structure follows the{" "}
            <Link href="/reba-styleguide" className="underline underline-offset-2 hover:text-white">
              REBA styleguide
            </Link>
            .
          </p>
          <p className="font-mono text-tds-10 tracking-[0.12em] text-white/70 uppercase">/styleguide</p>
        </div>
      </footer>
    </div>
  );
}
