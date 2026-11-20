import { TdsLink } from "@/components/tds/TdsLink";
import { footerLinks } from "@/data/navigation";

/** tesla.com-style footer: one centred row of small links. */
export function Footer() {
  return (
    <footer className="px-6 py-10 text-tds-20 text-tds-grey-30">
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
        <li>Tesla © {new Date().getFullYear()}</li>
        {footerLinks.map((link) => (
          <li key={link.href}>
            <TdsLink href={link.href} subtle>
              {link.label}
            </TdsLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}
