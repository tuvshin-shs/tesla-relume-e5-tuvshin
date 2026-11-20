import type { Metadata } from "next";
import { Literata, Onest } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";
import { RebaButton } from "@/components/reba/RebaButton";
import { cn } from "@/lib/cn";

// REBA's sans is the commercial "GIP" face with Onest as fallback; Literata is its serif.
const onest = Onest({ subsets: ["latin", "cyrillic"], variable: "--font-onest", display: "swap" });
const literata = Literata({ subsets: ["latin", "cyrillic"], variable: "--font-literata", display: "swap" });

export const metadata: Metadata = {
  title: "Styleguide — REBA design system",
  description: "Colors, typography, spacing, motion and components of the REBA design system.",
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
    <div
      className={cn(
        onest.variable,
        literata.variable,
        "min-h-screen bg-reba-paper font-reba-sans text-reba-base text-reba-ink antialiased",
      )}
    >
      <header className="sticky top-0 z-20 border-b border-reba-line bg-reba-paper/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1328px] items-center justify-between gap-6 px-[clamp(16px,6vw,92px)] box-content md:h-[72px]">
          <Link href="/styleguide" className="flex items-baseline gap-3">
            <span className="font-reba-serif text-reba-lg tracking-[-0.03em]">REBA</span>
            <span className="font-reba-mono text-reba-2xs tracking-[0.12em] text-reba-muted uppercase">
              Design system
            </span>
          </Link>
          <nav aria-label="Styleguide sections" className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-reba-sm text-reba-muted transition-colors duration-200 hover:text-reba-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <RebaButton href="/" variant="dark" size="sm">
            ← Tesla site
          </RebaButton>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-reba-ink text-white">
        <div className="mx-auto flex max-w-[1328px] flex-col gap-2 px-[clamp(16px,6vw,92px)] py-12 box-content md:flex-row md:items-center md:justify-between">
          <p className="font-reba-serif text-reba-sm text-reba-on-dark-muted">
            Tokens and components adapted from the REBA design system (reba.mn).
          </p>
          <p className="font-reba-mono text-reba-2xs tracking-[0.12em] text-reba-on-dark-muted uppercase">
            /styleguide
          </p>
        </div>
      </footer>
    </div>
  );
}
