"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import { TdsButton } from "@/components/tds/TdsButton";
import { mainNav } from "@/data/navigation";
import { vehicles } from "@/data/vehicles";
import { cn } from "@/lib/cn";

type Panel = "vehicles" | "menu" | null;

const navItem =
  "rounded-tds px-3 py-1.5 font-medium text-tds-grey-10 transition-colors duration-330 hover:bg-black/5 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tds-grey-35";

export function Navbar() {
  const pathname = usePathname();
  const [panel, setPanel] = useState<Panel>(null);
  const [lastPath, setLastPath] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);

  // close any open menu after navigating
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setPanel(null);
  }

  // Escape and outside clicks close the menus
  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanel(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setPanel(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [panel]);

  // the full-screen phone menu locks page scroll
  useEffect(() => {
    if (panel !== "menu") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [panel]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const onVehiclePage = vehicles.some((v) => isActive(`/${v.slug}`));
  // a click on any link inside a panel closes it (also when the link points to the current page)
  const closeOnLink = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) setPanel(null);
  };

  return (
    // solid white, no backdrop-filter: a filter would become the containing block of the fixed phone menu
    <header ref={headerRef} className="sticky top-0 z-40 bg-white">
      <div className="flex h-14 items-center justify-between gap-4 px-6 lg:px-12">
        <div className="flex flex-1">
          <Link href="/" aria-label="Tesla — нүүр хуудас" className="flex h-9 items-center">
            <Image src="/assets/tesla-logo.svg" alt="Tesla" width={120} height={16} priority />
          </Link>
        </div>

        <nav aria-label="Үндсэн цэс" className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            aria-expanded={panel === "vehicles"}
            aria-controls="vehicles-panel"
            onClick={() => setPanel((p) => (p === "vehicles" ? null : "vehicles"))}
            className={cn(navItem, (panel === "vehicles" || onVehiclePage) && "bg-black/5")}
          >
            Тээврийн хэрэгсэл
          </button>
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(navItem, isActive(link.href) && "bg-black/5")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <span className="hidden sm:block">
            <TdsButton href="/drive" size="sm">
              Туршилтын жолоодлого
            </TdsButton>
          </span>
          <button
            type="button"
            aria-expanded={panel === "menu"}
            aria-controls="mobile-menu"
            onClick={() => setPanel("menu")}
            className={cn(navItem, "bg-black/5 lg:hidden")}
          >
            Цэс
          </button>
        </div>
      </div>

      {/* Desktop: vehicles mega menu */}
      {panel === "vehicles" && (
        <div
          id="vehicles-panel"
          onClick={closeOnLink}
          className="absolute inset-x-0 top-full hidden bg-white px-12 pt-8 pb-10 shadow-tds-md lg:block"
        >
          <ul className="mx-auto grid max-w-[1200px] grid-cols-5 gap-6">
            {vehicles.map((v) => (
              <li key={v.slug} className="flex flex-col items-center gap-3 text-center">
                <Link
                  href={`/${v.slug}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden rounded-tds bg-tds-grey-70"
                >
                  <Image src={v.image} alt={v.name} fill sizes="220px" className="object-cover" />
                </Link>
                <p className="text-tds-40 font-medium text-tds-grey-10">{v.name}</p>
                <div className="flex gap-4 text-tds-20 text-tds-grey-20">
                  <Link href={`/${v.slug}`} className="underline-offset-4 hover:underline">
                    Дэлгэрэнгүй
                  </Link>
                  <Link href={`/${v.slug}/design`} className="underline-offset-4 hover:underline">
                    {v.orderLabel}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Phone + tablet: full-screen menu */}
      {panel === "menu" && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Цэс"
          onClick={closeOnLink}
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white lg:hidden"
        >
          <div className="flex h-14 shrink-0 items-center justify-end px-6">
            <button type="button" onClick={() => setPanel(null)} className={navItem}>
              Хаах ✕
            </button>
          </div>
          <nav aria-label="Үндсэн цэс" className="flex flex-col gap-8 px-6 pb-10">
            <div className="flex flex-col gap-2">
              <p className="text-tds-20 font-medium tracking-[0.08em] text-tds-grey-30 uppercase">Тээврийн хэрэгсэл</p>
              <ul className="flex flex-col">
                {vehicles.map((v) => (
                  <li key={v.slug}>
                    <Link
                      href={`/${v.slug}`}
                      className="flex items-center gap-4 rounded-tds py-2 transition-colors duration-330 hover:bg-black/5"
                    >
                      <span className="relative size-14 shrink-0 overflow-hidden rounded-tds bg-tds-grey-70">
                        <Image src={v.image} alt="" fill sizes="56px" className="object-cover" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-tds-40 font-medium text-tds-grey-10">{v.name}</span>
                        <span className="text-tds-20 text-tds-grey-30">{v.type}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex flex-col border-t border-tds-grey-60 pt-4">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="block rounded-tds py-3 text-tds-40 font-medium text-tds-grey-10 transition-colors duration-330 hover:bg-black/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <TdsButton href="/drive" className="w-full">
              Туршилтын жолоодлого
            </TdsButton>
          </nav>
        </div>
      )}
    </header>
  );
}
