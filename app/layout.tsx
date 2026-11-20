import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

// cyrillic-ext carries the Mongolian letters Ө ө Ү ү
const inter = Inter({ subsets: ["latin", "cyrillic", "cyrillic-ext"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Tesla — Цахилгаан машин, цэнэглэлт", template: "%s | Tesla" },
  description:
    "Model 3, Model Y, Cybertruck, Roadster — загвараа сонгож, туршилтын жолоодлого товлоод, захиалгаа онлайнаар өгөөрэй.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // data-scroll-behavior lets Next.js turn off smooth scrolling during route changes
    <html lang="mn" className={inter.variable} data-scroll-behavior="smooth">
      <body className="bg-white font-tds text-tds-30 text-tds-grey-20 antialiased">{children}</body>
    </html>
  );
}
