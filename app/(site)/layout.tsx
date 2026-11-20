import type { ReactNode } from "react";
import { CalEmbed } from "@/components/CalEmbed";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

/** Tesla marketing pages: shared Navbar + Footer. */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CalEmbed />
    </>
  );
}
