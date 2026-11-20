import Image from "next/image";
import type { ReactNode } from "react";
import { TextField } from "@/components/forms/fields";
import { ProductCard } from "@/components/ProductCard";
import { TdsButton } from "@/components/tds/TdsButton";
import { ChevronIcon, TdsIconButton } from "@/components/tds/TdsIconButton";
import { TdsLabel } from "@/components/tds/TdsLabel";
import { TdsLink } from "@/components/tds/TdsLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  colorGroups,
  durations,
  easings,
  fontFamilies,
  layoutTokens,
  overlays,
  radii,
  shadows,
  spacing,
  typeScale,
} from "@/data/tesla-tokens";
import { vehicles } from "@/data/vehicles";
import { cn } from "@/lib/cn";

/* ---------- page-level helpers (same structure as /reba-styleguide) ---------- */

// TDS layout: width = min(1200px, 100% − 2 × gutter); content-box so the gutter sits outside the 1200px
const container = "mx-auto max-w-[1200px] px-6 box-content md:px-12";

function Block({
  id,
  eyebrow,
  title,
  lead,
  tone = "white",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "white" | "grey";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-14 pt-16 pb-12 md:pt-24 md:pb-20", tone === "grey" ? "bg-tds-grey-70" : "bg-white")}
    >
      <div className={cn(container, "flex flex-col gap-12")}>
        <SectionTitle label={eyebrow} title={title} description={lead} />
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="border-b border-tds-grey-50 pb-3 font-mono text-tds-20 font-medium tracking-[0.08em] text-tds-grey-30 uppercase">
      {children}
    </h3>
  );
}

function Code({ children }: { children: ReactNode }) {
  return <code className="font-mono text-tds-20 text-tds-grey-30 [overflow-wrap:anywhere]">{children}</code>;
}

/* ---------- page ---------- */

export default function StyleguidePage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-tds-grey-70 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className={cn(container, "flex flex-col gap-8")}>
          <TdsLabel rule>Design system · tesla.com</TdsLabel>
          <h1 className="text-tds-100 font-medium text-tds-grey-10 md:text-tds-130">Styleguide</h1>
          <p className="max-w-[564px] text-tds-40 text-tds-grey-30">
            Colors, type, spacing, motion and components of the Tesla Design System — rebuilt as Tailwind tokens (
            <Code>tds-*</Code>) and React components for this site.
          </p>
          <div className="flex flex-wrap gap-3">
            <TdsButton href="#colors">Explore tokens</TdsButton>
            <TdsButton href="#components" variant="secondary">
              View components
            </TdsButton>
          </div>
        </div>
      </section>

      {/* Colors */}
      <Block
        id="colors"
        eyebrow="Foundations"
        title="Color"
        lead="Almost entirely greyscale. One blue marks the primary action; red, green and yellow only signal status."
      >
        {colorGroups.map(({ group, colors }) => (
          <div key={group} className="flex flex-col gap-5">
            <SubHeading>{group}</SubHeading>
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
              {colors.map((c) => (
                <div key={c.token} className="flex flex-col gap-3">
                  <div
                    className="flex h-28 items-end rounded-tds p-3 shadow-[inset_0_0_0_1px_#d0d1d2]"
                    style={{ background: c.value }}
                  >
                    <span className={cn("font-mono text-tds-20", c.dark ? "text-white" : "text-tds-grey-10")}>
                      {c.value}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-tds-grey-10">{c.name}</p>
                    <Code>{c.token}</Code>
                    <p className="text-tds-20 text-tds-grey-30">{c.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-5">
          <SubHeading>Overlays (on imagery)</SubHeading>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {overlays.map((o) => (
              <div key={o.name} className="flex flex-col gap-3">
                <div className="relative h-36 overflow-hidden rounded-tds">
                  <Image src="/assets/product-model-3.png" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0" style={{ background: o.css }} />
                  <span className="absolute bottom-3 left-3 font-medium text-white">Text on photo</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium text-tds-grey-10">{o.name}</p>
                  <Code>
                    {o.token} · {o.value}
                  </Code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Block>

      {/* Typography */}
      <Block
        id="typography"
        tone="grey"
        eyebrow="Foundations"
        title="Typography"
        lead="One family in two optical sizes plus a mono. Headings are medium (500), never bold; body copy is a quiet 14px."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {fontFamilies.map((f) => (
            <div key={f.token} className="flex flex-col gap-6 rounded-tds bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <span className={cn(f.className, "text-tds-110 font-medium text-tds-grey-10")}>Aa</span>
                <TdsLabel size="tag">{f.name}</TdsLabel>
              </div>
              <p className={cn(f.className, "text-tds-40 text-tds-grey-10")}>Улаанбаатар · Model Y 0123456789</p>
              <div className="flex flex-col gap-1 border-t border-tds-grey-50 pt-4">
                <p className="font-medium text-tds-grey-10">{f.family}</p>
                <Code>{f.token}</Code>
                <p className="text-tds-20 text-tds-grey-30">
                  {f.usage}. {f.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <SubHeading>Type scale</SubHeading>
          <div className="flex flex-col">
            {typeScale.map((t) => (
              <div
                key={t.token}
                className="grid grid-cols-1 gap-2 border-b border-tds-grey-50 py-5 md:grid-cols-[220px_1fr] md:items-baseline md:gap-8"
              >
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium text-tds-grey-10">{t.name}</p>
                  <Code>
                    {t.token} · {t.size}
                  </Code>
                  <Code>line-height / tracking {t.meta}</Code>
                </div>
                <p className={cn(t.className, "min-w-0 text-tds-grey-10 [overflow-wrap:anywhere]")}>Model 3 Performance</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-tds bg-white p-6">
            <TdsLabel size="tag">Body paragraph · 14 / 20 · max 75ch</TdsLabel>
            <p className="max-w-[75ch] text-tds-30">
              Every Tesla is built for safety, range and performance. Full Self-Driving (Supervised) makes every drive
              easier, and the Supercharger network keeps you moving across the country.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-tds bg-tds-grey-10 p-6 text-white">
            <TdsLabel size="tag" tone="inherit">
              Hero title · 40 / 48 medium
            </TdsLabel>
            <p className="text-tds-80 font-medium">Model Y</p>
          </div>
        </div>
      </Block>

      {/* Spacing, radius, layout */}
      <Block
        id="spacing"
        eyebrow="Foundations"
        title="Spacing, radius & layout"
        lead="An 8px grid, one 4px corner for everything and shadows used sparingly."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SubHeading>Spacing</SubHeading>
            <div className="flex flex-col gap-3">
              {spacing.map((s) => (
                <div key={s.token} className="grid grid-cols-[minmax(0,140px)_48px_1fr] items-center gap-4">
                  <Code>{s.token}</Code>
                  <span className="font-medium text-tds-grey-10">{s.px}px</span>
                  <span className="h-3 rounded-tds bg-tds-blue-30" style={{ width: s.px }} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <SubHeading>Radius</SubHeading>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {radii.map((r) => (
                <div key={r.token} className="flex flex-col gap-3">
                  <div className="aspect-square border border-tds-grey-50 bg-tds-grey-70" style={{ borderRadius: r.value }} />
                  <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-tds-grey-10">
                      {r.name} · {r.value}
                    </p>
                    <Code>{r.token}</Code>
                  </div>
                </div>
              ))}
            </div>

            <SubHeading>Elevation</SubHeading>
            <div className="grid grid-cols-3 gap-5">
              {shadows.map((s) => (
                <div key={s.token} className="flex flex-col gap-3">
                  <div className={cn("h-20 rounded-tds bg-white", s.className)} />
                  <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-tds-grey-10">{s.name}</p>
                    <Code>{s.value}</Code>
                  </div>
                </div>
              ))}
            </div>

            <SubHeading>Layout</SubHeading>
            <dl className="flex flex-col">
              {layoutTokens.map((l) => (
                <div key={l.token} className="grid grid-cols-[minmax(0,180px)_1fr] gap-4 border-b border-tds-grey-50 py-3">
                  <dt>
                    <Code>{l.token}</Code>
                  </dt>
                  <dd className="flex flex-col">
                    <span className="font-medium text-tds-grey-10">{l.value}</span>
                    <span className="text-tds-20 text-tds-grey-30">{l.usage}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Block>

      {/* Motion */}
      <Block
        id="motion"
        tone="grey"
        eyebrow="Foundations"
        title="Motion"
        lead="Short, calm transitions. Hover or focus a curve to preview it at 800ms."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-5">
            <SubHeading>Easing</SubHeading>
            <div className="flex flex-col gap-2">
              {easings.map((e) => (
                <div
                  key={e.token}
                  tabIndex={0}
                  className="group grid grid-cols-1 gap-3 rounded-tds bg-white p-4 outline-tds-grey-35 focus-visible:outline-2 md:grid-cols-[200px_1fr] md:items-center"
                >
                  <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-tds-grey-10">{e.name}</p>
                    <Code>{e.token}</Code>
                  </div>
                  <div className="relative h-2 rounded-tds bg-tds-grey-70">
                    <span
                      className="absolute top-1/2 left-0 size-4 -translate-y-1/2 rounded-full bg-tds-blue-30 group-hover:left-[calc(100%-16px)] group-focus-visible:left-[calc(100%-16px)]"
                      style={{ transition: `left 800ms ${e.value}` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <SubHeading>Duration</SubHeading>
            <dl className="flex flex-col">
              {durations.map((d) => (
                <div key={d.token} className="grid grid-cols-[minmax(0,180px)_1fr] gap-4 border-b border-tds-grey-50 py-3">
                  <dt>
                    <Code>{d.token}</Code>
                  </dt>
                  <dd className="flex items-baseline gap-3">
                    <span className="font-medium text-tds-grey-10">{d.value}</span>
                    <span className="text-tds-20 text-tds-grey-30">{d.usage}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Block>

      {/* Components */}
      <Block
        id="components"
        eyebrow="Components"
        title="Buttons, labels & cards"
        lead="40px buttons, square 4px corners and uppercase labels — shown with the site's own components and content."
      >
        <div className="flex flex-col gap-5">
          <SubHeading>Buttons · TdsButton</SubHeading>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-wrap items-center gap-4 rounded-tds border border-tds-grey-50 p-8">
              <TdsButton>Захиалах</TdsButton>
              <TdsButton variant="secondary">Дэлгэрэнгүй</TdsButton>
              <TdsButton variant="tertiary">Харьцуулах</TdsButton>
              <TdsButton disabled>Disabled</TdsButton>
              <p className="w-full pt-2">
                <Code>primary · secondary · tertiary · disabled — on light surfaces</Code>
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-4 overflow-hidden rounded-tds p-8">
              <Image src="/assets/hero.png" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative flex flex-wrap items-center gap-4">
                <TdsButton>Захиалах</TdsButton>
                <TdsButton variant="light">Туршилтын жолоодлого</TdsButton>
                <TdsButton variant="outline-light">Дэлгэрэнгүй</TdsButton>
                <p className="w-full pt-2 font-mono text-tds-20 text-white">primary · light · outline-light — on photos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SubHeading>Icon buttons · 40px · TdsIconButton</SubHeading>
            <div className="flex flex-wrap items-center gap-4">
              <TdsIconButton label="Previous" disabled>
                <ChevronIcon direction="left" />
              </TdsIconButton>
              <TdsIconButton label="Next">
                <ChevronIcon />
              </TdsIconButton>
              <div className="relative grid size-20 place-items-center overflow-hidden rounded-tds">
                <Image src="/assets/product-model-y.png" alt="" fill sizes="80px" className="object-cover" />
                <TdsIconButton variant="light" label="Next photo" className="relative">
                  <ChevronIcon />
                </TdsIconButton>
              </div>
            </div>
            <Code>default (disabled / enabled) · light</Code>
          </div>

          <div className="flex flex-col gap-5">
            <SubHeading>Labels & links · TdsLabel, TdsLink</SubHeading>
            <div className="flex flex-col gap-4">
              <TdsLabel>Default label</TdsLabel>
              <TdsLabel rule>With rule</TdsLabel>
              <TdsLabel size="tag">Tag · 10px</TdsLabel>
              <div className="w-fit rounded-tds bg-tds-grey-10 px-3 py-2 text-white">
                <TdsLabel size="tag" tone="inherit">
                  Inherit on dark
                </TdsLabel>
              </div>
              <p>
                Үнэ урамшууллаас өмнөх дүн. <TdsLink href="/offers">Урамшуулал үзэх</TdsLink> эсвэл{" "}
                <TdsLink href="/drive">туршилтын жолоодлого товлох</TdsLink>.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <SubHeading>Section title + cards · SectionTitle, ProductCard</SubHeading>
          <SectionTitle
            label="Загварууд"
            title="Өөрт тохирох Tesla-гаа олоорой"
            description="Явах зай, хурд, үнийг харьцуулаад өөрийн загвараа сонгоорой."
            action={
              <TdsButton href="/offers" variant="secondary">
                Бүх загвар
              </TdsButton>
            }
          />
          <div className="no-scrollbar -mx-6 flex gap-6 overflow-x-auto px-6 md:mx-0 md:px-0">
            {vehicles.slice(0, 3).map((v) => (
              <ProductCard key={v.slug} vehicle={v} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <SubHeading>Form fields · TextField</SubHeading>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <TextField name="sg-name" label="Нэр" placeholder="Болд" />
            <TextField name="sg-phone" label="Утас" placeholder="9911 2233" hint="8 оронтой дугаар" />
            <TextField name="sg-email" label="И-мэйл" defaultValue="bold@" error="Зөв и-мэйл хаяг оруулна уу" />
          </div>
          <Code>40px · grey-70 fill · 12px grey-30 label · hint · red-10 error</Code>
        </div>
      </Block>
    </>
  );
}
