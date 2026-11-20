import Image from "next/image";
import Link from "next/link";
import { footerLinks, legalLinks, socialLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-white px-(--pad-x) py-(--sec-y-md)">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20">
        <div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-between lg:flex-nowrap">
          <div className="lg:flex-1">
            <Link href="/" aria-label="Tesla home" className="inline-flex h-9 items-center">
              <Image src="/assets/tesla-logo.svg" alt="Tesla" width={120} height={16} />
            </Link>
          </div>

          <nav
            aria-label="Footer"
            className="order-3 flex flex-col items-center gap-3 text-small font-semibold whitespace-nowrap md:basis-full md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:order-none lg:basis-auto"
          >
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:opacity-70">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:flex-1 lg:justify-end">
            {socialLinks.map((s) => (
              <Link key={s.label} href={s.href} aria-label={s.label} className="hover:opacity-70">
                <Image src={s.icon} alt="" width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <Image src="/assets/divider.svg" alt="" width={1280} height={1} className="h-px w-full" />
          <div className="flex flex-col items-center gap-3 text-small whitespace-nowrap md:flex-row md:gap-6">
            <p>© 2025 Tesla. All rights reserved.</p>
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="underline [text-decoration-skip-ink:none]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
