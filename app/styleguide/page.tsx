import Image from "next/image";
import type { ReactNode } from "react";
import { TdsButton } from "@/components/tds/TdsButton";
import { TdsLink } from "@/components/tds/TdsLink";
import {
  colorGroups,
  comparison,
  durations,
  easings,
  fontFamilies,
  fontWeights,
  layoutTokens,
  radii,
  roles,
  shadows,
  sizes,
  typeScale,
} from "@/data/tesla-tokens";
import { cn } from "@/lib/cn";

/* ---------- page-level helpers ---------- */

const container = "mx-auto w-full max-w-[1200px] px-6 md:px-12";

function Block({
  id,
  label,
  title,
  lead,
  tone = "white",
  children,
}: {
  id: string;
  label: string;
  title: string;
  lead?: string;
  tone?: "white" | "grey";
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-14 py-16 md:py-24", tone === "grey" ? "bg-tds-grey-70" : "bg-white")}>
      <div className={cn(container, "flex flex-col gap-12")}>
        <div className="flex max-w-[75ch] flex-col gap-2">
          <p className="text-tds-20 font-medium tracking-[0.08em] text-tds-grey-30 uppercase">{label}</p>
          <h2 className="text-tds-70 font-medium text-tds-grey-10 md:text-tds-80">{title}</h2>
          {lead && <p className="text-tds-40 text-tds-grey-30">{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="border-b border-tds-grey-50 pb-3 text-tds-20 font-medium tracking-[0.08em] text-tds-grey-30 uppercase">
      {children}
    </h3>
  );
}

function Code({ children }: { children: ReactNode }) {
  return <code className="font-mono text-tds-20 text-tds-grey-30 [overflow-wrap:anywhere]">{children}</code>;
}

const products = [
  { name: "Model 3", image: "/assets/product-model-3.png", note: "Sport Sedan" },
  { name: "Model Y", image: "/assets/product-model-y.png", note: "Midsize SUV" },
  { name: "Cybertruck", image: "/assets/product-cybertruck.png", note: "Built for Any Adventure" },
];

const specs = [
  { value: "303 mi", label: "Range (EPA est.)" },
  { value: "2.9 s", label: "0–60 mph" },
  { value: "163 mph", label: "Top Speed" },
];

/* ---------- page ---------- */

export default function StyleguidePage() {
  return (
    <>
      {/* Hero — the tesla.com homepage tile pattern: dark title over sky, buttons at the bottom */}
      <section className="relative flex h-[min(calc(100svh-56px),960px)] min-h-[560px] flex-col items-center justify-between overflow-hidden px-6 pt-16 pb-12 text-center md:pt-24">
        <Image src="/assets/hero.png" alt="" fill priority sizes="100vw" className="object-cover object-[60%_center]" />
        <div className="relative flex flex-col gap-2">
          <h1 className="text-tds-80 font-medium text-tds-grey-10">Tesla Design System</h1>
          <p className="text-tds-40 text-tds-grey-20">Colors, type, spacing, motion and components from tesla.com</p>
        </div>
        <div className="relative flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <TdsButton href="#colors" wide className="w-full max-w-[320px] sm:w-auto">
            Explore Tokens
          </TdsButton>
          <TdsButton href="#components" variant="light" wide className="w-full max-w-[320px] sm:w-auto">
            View Components
          </TdsButton>
        </div>
      </section>

      {/* Site vs tesla.com */}
      <Block
        id="compare"
        label="Overview"
        title="This site vs tesla.com"
        lead="The site already shares Tesla's blue and grey text. These are the values that still differ — change them in app/globals.css and components/ui/Button.tsx to match."
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-tds-grey-50 text-tds-20 text-tds-grey-30">
                <th className="py-3 pr-4 font-medium">Property</th>
                <th className="py-3 pr-4 font-medium">This site</th>
                <th className="py-3 pr-4 font-medium">tesla.com</th>
                <th className="py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.property} className="border-b border-tds-grey-50">
                  <td className="py-3 pr-4 font-medium text-tds-grey-10">{row.property}</td>
                  <td className="py-3 pr-4">{row.site}</td>
                  <td className="py-3 pr-4">{row.tesla}</td>
                  <td className="py-3">
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 text-tds-20 font-medium",
                        row.match ? "text-tds-grey-30" : "text-tds-red-10",
                      )}
                    >
                      <span
                        className={cn("size-2 shrink-0 rounded-full", row.match ? "bg-tds-green" : "bg-tds-red-10")}
                      />
                      <span className="sr-only sm:not-sr-only">{row.match ? "Matches" : "Differs"}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      {/* Colors */}
      <Block
        id="colors"
        tone="grey"
        label="Foundations"
        title="Color"
        lead="Almost entirely greyscale. A single blue marks the primary action; red, green and yellow only signal status."
      >
        {colorGroups.map(({ group, colors }) => (
          <div key={group} className="flex flex-col gap-5">
            <SubHeading>{group}</SubHeading>
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
              {colors.map((c) => (
                <div key={c.token} className="flex flex-col gap-3">
                  <div
                    className="flex h-24 items-end rounded-tds p-3 shadow-[inset_0_0_0_1px_#d0d1d2]"
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
          <SubHeading>Semantic roles</SubHeading>
          <dl className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
            {roles.map((r) => (
              <div key={r.token} className="flex items-center gap-4 border-b border-tds-grey-50 py-3">
                <span
                  className="size-8 shrink-0 rounded-full shadow-[inset_0_0_0_1px_#d0d1d2]"
                  style={{ background: r.value }}
                />
                <div className="flex min-w-0 flex-col">
                  <dt className="font-medium text-tds-grey-10">
                    {r.role} <span className="font-normal text-tds-grey-30">· {r.value}</span>
                  </dt>
                  <dd className="flex flex-col">
                    <Code>{r.token}</Code>
                    <span className="text-tds-20 text-tds-grey-30">{r.usage}</span>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Block>

      {/* Typography */}
      <Block
        id="typography"
        label="Foundations"
        title="Typography"
        lead="One family in two optical sizes. Headings are medium weight, never bold; body copy is a quiet 14px."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {fontFamilies.map((f) => (
            <div key={f.token} className="flex flex-col gap-6 rounded-tds bg-tds-grey-70 p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="text-tds-110 font-medium text-tds-grey-10">Aa</span>
                <span className="text-tds-20 font-medium tracking-[0.08em] text-tds-grey-30 uppercase">{f.name}</span>
              </div>
              <div className="flex flex-col gap-1 border-t border-tds-grey-50 pt-4">
                <p className="font-medium text-tds-grey-10">{f.family}</p>
                <Code>{f.token}</Code>
                <p className="text-tds-20 text-tds-grey-30">
                  {f.usage}. Proprietary — rendered here in Inter (<Code>font-tds</Code>).
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <SubHeading>Weights</SubHeading>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {fontWeights.map((w) => (
              <div key={w.value} className="flex flex-col gap-1">
                <span className={cn(w.className, "text-tds-70 text-tds-grey-10")}>Model S</span>
                <Code>
                  {w.name} · {w.value}
                </Code>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <SubHeading>Type scale · size / line-height in px</SubHeading>
          <div className="flex flex-col">
            {typeScale.map((t) => (
              <div
                key={t.token}
                className="grid grid-cols-1 gap-2 border-b border-tds-grey-50 py-5 md:grid-cols-[220px_1fr] md:items-baseline md:gap-8"
              >
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium text-tds-grey-10">
                    text-{t.token} <span className="font-normal text-tds-grey-30">· {t.size}</span>
                  </p>
                  <span className="text-tds-20 text-tds-grey-30">{t.usage}</span>
                </div>
                <p className={cn(t.className, "min-w-0 text-tds-grey-10 [overflow-wrap:anywhere]")}>Model Y</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-tds bg-tds-grey-70 p-6">
            <span className="text-tds-20 text-tds-grey-30">Hero tile · 40/48 medium + 17/24</span>
            <p className="text-tds-80 font-medium text-tds-grey-10">Model 3</p>
            <p className="text-tds-40 text-tds-grey-20">Schedule a Demo Drive</p>
          </div>
          <div className="flex flex-col gap-2 rounded-tds bg-tds-grey-70 p-6">
            <span className="text-tds-20 text-tds-grey-30">Body · 14/20 · max 75ch</span>
            <p className="max-w-[75ch] text-tds-30 text-tds-grey-20">
              Every Tesla is built for safety, range and performance. Full Self-Driving (Supervised) makes every drive
              easier, and the Supercharger network keeps you moving across the country.
            </p>
          </div>
        </div>
      </Block>

      {/* Spacing, radius, shadow, layout */}
      <Block
        id="spacing"
        tone="grey"
        label="Foundations"
        title="Spacing, radius & elevation"
        lead="An 8px grid, one 4px corner radius for everything, and shadows used sparingly."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SubHeading>Size scale · 8px base</SubHeading>
            <div className="flex flex-col gap-3">
              {sizes.map((s) => (
                <div key={s.token} className="grid grid-cols-[minmax(0,140px)_44px_1fr] items-center gap-4">
                  <Code>{s.token}</Code>
                  <span className="font-medium text-tds-grey-10">{s.px}px</span>
                  <span className="flex items-center gap-3">
                    <span className="h-3 shrink-0 rounded-tds bg-tds-blue-30" style={{ width: s.px }} />
                    <Code>p-{s.tw}</Code>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <SubHeading>Radius</SubHeading>
            <div className="grid grid-cols-2 gap-5">
              {radii.map((r) => (
                <div key={r.token} className="flex flex-col gap-3">
                  <div className="size-24 border border-tds-grey-50 bg-white" style={{ borderRadius: r.value }} />
                  <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-tds-grey-10">
                      {r.name} · {r.value}
                    </p>
                    <Code>{r.token}</Code>
                    <span className="text-tds-20 text-tds-grey-30">{r.usage}</span>
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
                    <Code>{s.className}</Code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <SubHeading>Layout & sizing</SubHeading>
          <dl className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
            {layoutTokens.map((l) => (
              <div key={l.token} className="grid grid-cols-[minmax(0,200px)_1fr] gap-4 border-b border-tds-grey-50 py-3">
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
      </Block>

      {/* Motion */}
      <Block
        id="motion"
        label="Foundations"
        title="Motion"
        lead="Short, calm transitions. Hover or focus a curve to preview it at 600ms."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-5">
            <SubHeading>Easing</SubHeading>
            <div className="flex flex-col gap-2">
              {easings.map((e) => (
                <div
                  key={e.token}
                  tabIndex={0}
                  className="group grid grid-cols-1 gap-3 rounded-tds bg-tds-grey-70 p-4 outline-tds-grey-35 focus-visible:outline-2 md:grid-cols-[200px_1fr] md:items-center"
                >
                  <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-tds-grey-10">{e.name}</p>
                    <Code>{e.value}</Code>
                  </div>
                  <div className="relative h-2 rounded-tds bg-white">
                    <span
                      className={cn(
                        "absolute top-1/2 left-0 size-4 -translate-y-1/2 rounded-full bg-tds-blue-30 transition-[left] duration-600",
                        "group-hover:left-[calc(100%-16px)] group-focus-visible:left-[calc(100%-16px)]",
                        e.className,
                      )}
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
                <div key={d.value} className="grid grid-cols-[80px_1fr] gap-4 border-b border-tds-grey-50 py-3">
                  <dt className="font-medium text-tds-grey-10">{d.value}</dt>
                  <dd className="text-tds-20 text-tds-grey-30">{d.usage}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Block>

      {/* Components */}
      <Block
        id="components"
        tone="grey"
        label="Components"
        title="Buttons, links, forms & tiles"
        lead="Built from the tokens above — see components/tds/."
      >
        <div className="flex flex-col gap-5">
          <SubHeading>Buttons · 40px · TdsButton</SubHeading>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-tds bg-white p-8">
              <div className="flex flex-wrap items-center gap-4">
                <TdsButton>Order Now</TdsButton>
                <TdsButton variant="secondary">Learn More</TdsButton>
                <TdsButton variant="tertiary">Compare</TdsButton>
                <TdsButton disabled>Disabled</TdsButton>
              </div>
              <Code>primary · secondary · tertiary · disabled — on light surfaces</Code>
            </div>
            <div className="relative flex flex-col gap-4 overflow-hidden rounded-tds p-8">
              <Image
                src="/assets/product-model-3.png"
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative flex flex-wrap items-center gap-4">
                <TdsButton>Order Now</TdsButton>
                <TdsButton variant="light">Demo Drive</TdsButton>
                <TdsButton variant="outline-light">Learn</TdsButton>
              </div>
              <p className="relative font-mono text-tds-20 text-white">primary · light · outline-light — on photos</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SubHeading>Links · TdsLink</SubHeading>
            <p className="max-w-[75ch]">
              Prices shown are before incentives. <TdsLink href="#components">See current offers</TdsLink> or{" "}
              <TdsLink href="#components">schedule a demo drive</TdsLink>.
            </p>
            <Code>1px underline (box-shadow) → 2px on hover</Code>
          </div>

          <div className="flex flex-col gap-5">
            <SubHeading>Form input</SubHeading>
            <div className="flex flex-col gap-2">
              <label htmlFor="tds-zip" className="text-tds-20 text-tds-grey-30">
                Delivery ZIP Code
              </label>
              <input
                id="tds-zip"
                inputMode="numeric"
                placeholder="94301"
                className="h-10 w-full max-w-[360px] rounded-tds border border-transparent bg-white px-4 text-tds-30 text-tds-grey-10 transition-[border-color] duration-330 placeholder:text-tds-grey-35 hover:border-tds-grey-50 focus-visible:border-tds-grey-35 focus-visible:outline-none"
              />
              <p className="text-tds-20 text-tds-red-10">Enter a valid ZIP code</p>
            </div>
            <Code>40px · container fill · 12px grey-30 label · red-10 error</Code>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <SubHeading>Product tiles · homepage pattern</SubHeading>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.name}
                className="relative flex aspect-[4/5] flex-col justify-end gap-4 overflow-hidden rounded-tds p-6 text-white"
              >
                <Image src={p.image} alt={p.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0" />
                <div className="relative flex flex-col gap-1">
                  <h4 className="text-tds-70 font-medium">{p.name}</h4>
                  <p className="text-tds-30">{p.note}</p>
                </div>
                <div className="relative flex gap-3">
                  <TdsButton block>Order Now</TdsButton>
                  <TdsButton variant="light" block>
                    Learn
                  </TdsButton>
                </div>
              </div>
            ))}
          </div>
          <Code>4:5 photo · bottom scrim · 28/36 title · two equal buttons</Code>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SubHeading>Spec stats</SubHeading>
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              {specs.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-tds-70 font-medium text-tds-grey-10">{s.value}</span>
                  <span className="text-tds-20 text-tds-grey-30">{s.label}</span>
                </div>
              ))}
            </div>
            <Code>28/36 medium value · 12px grey-30 label · example data</Code>
          </div>

          <div className="flex flex-col gap-5">
            <SubHeading>Card · dense</SubHeading>
            <div className="flex flex-col gap-4 rounded-tds bg-white p-4 shadow-tds-sm">
              <div className="flex flex-col gap-1">
                <p className="text-tds-50 font-medium text-tds-grey-10">Home Charging</p>
                <p className="text-tds-grey-30">Charge overnight with the Wall Connector.</p>
              </div>
              <div className="flex gap-3">
                <TdsButton variant="tertiary">Learn</TdsButton>
                <TdsButton variant="secondary">Shop</TdsButton>
              </div>
            </div>
            <Code>16px padding · 4px radius · shadow-tds-sm</Code>
          </div>
        </div>
      </Block>
    </>
  );
}
