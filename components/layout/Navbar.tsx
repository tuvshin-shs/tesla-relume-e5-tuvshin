"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { testDriveCalAttrs } from "@/components/CalEmbed";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10 flex min-h-[72px] items-center bg-surface px-(--pad-x)">
      <div className="flex w-full items-center justify-center gap-4 md:gap-8">
        <div className="flex flex-1">
          <Link href="/" aria-label="Tesla home" className="flex h-9 items-center">
            <Image src="/assets/tesla-logo.svg" alt="Tesla" width={120} height={16} priority />
          </Link>
        </div>

        <nav
          id="navbar-menu"
          aria-label="Main"
          className={cn(
            // phone: dropdown panel under the bar
            "absolute inset-x-0 top-full flex-col items-start gap-4 border-b border-line bg-surface px-(--pad-x) pt-4 pb-6",
            open ? "flex" : "hidden",
            // tablet/desktop: inline links
            "md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0",
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="whitespace-nowrap hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            aria-expanded="false"
            className="inline-flex items-center gap-1 whitespace-nowrap hover:opacity-70"
          >
            Waders
            <Image src="/assets/chevron-down.svg" alt="" width={24} height={24} />
          </button>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          <Button size="sm" {...testDriveCalAttrs}>
            Test Drive
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="navbar-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col justify-center gap-[5px] px-1 py-1.5 md:hidden"
          >
            <span className="block h-0.5 rounded-sm bg-ink" />
            <span className="block h-0.5 rounded-sm bg-ink" />
            <span className="block h-0.5 rounded-sm bg-ink" />
          </button>
        </div>
      </div>
    </header>
  );
}
