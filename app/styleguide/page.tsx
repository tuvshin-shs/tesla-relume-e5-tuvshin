import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/reba/Eyebrow";
import { ArrowIcon, IconButton, MenuIcon } from "@/components/reba/IconButton";
import { RebaButton } from "@/components/reba/RebaButton";
import { RebaCard } from "@/components/reba/RebaCard";
import { SectionHead } from "@/components/reba/SectionHead";
import {
  colorGroups,
  durations,
  easings,
  fontFamilies,
  layoutTokens,
  overlays,
  radii,
  spacing,
  typeScale,
} from "@/data/reba-tokens";
import { cn } from "@/lib/cn";

/* ---------- page-level helpers ---------- */

// REBA: width = min(1328px, 100% − 2 × gutter); content-box so the gutter sits outside the 1328px
const container = "mx-auto max-w-[1328px] px-[clamp(16px,6vw,92px)] box-content";

function Block({
  id,
  eyebrow,
  title,
  lead,
  tone = "paper",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "paper" | "beige";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 pt-[clamp(64px,9.5vw,144px)] pb-[clamp(48px,6.4vw,96px)]",
        tone === "beige" ? "bg-reba-beige" : "bg-reba-paper",
      )}
    >
      <div className={cn(container, "flex flex-col gap-12")}>
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="border-b border-reba-line pb-3 font-reba-mono text-reba-xs font-medium tracking-[0.08em] text-reba-muted uppercase">
      {children}
    </h3>
  );
}

function Code({ children }: { children: ReactNode }) {
  return <code className="font-reba-mono text-reba-xs text-reba-muted">{children}</code>;
}

/* ---------- page ---------- */

export default function StyleguidePage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-reba-beige pt-[clamp(64px,9.5vw,144px)] pb-[clamp(48px,6.4vw,96px)]">
        <div className={cn(container, "flex flex-col gap-8")}>
          <Eyebrow rule>Design system · reba.mn</Eyebrow>
          <h1 className="text-reba-display-1 font-semibold">Styleguide</h1>
          <p className="max-w-[564px] font-reba-serif text-reba-md text-reba-muted">
            Colors, type, spacing, motion and components of the REBA design system — rebuilt as Tailwind tokens
            (<Code>reba-*</Code>) and React components for this site.
          </p>
          <div className="flex flex-wrap gap-3">
            <RebaButton href="#colors">Explore tokens</RebaButton>
            <RebaButton href="#components" variant="dark">
              View components
            </RebaButton>
          </div>
        </div>
      </section>

      {/* Colors */}
      <Block
        id="colors"
        eyebrow="Foundations"
        title="Color"
        lead="A warm, paper-and-ink palette. Taupe is the single accent; everything else is neutral."
      >
        {colorGroups.map(({ group, colors }) => (
          <div key={group} className="flex flex-col gap-5">
            <SubHeading>{group}</SubHeading>
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
              {colors.map((c) => (
                <div key={c.token} className="flex flex-col gap-3">
                  <div
                    className="flex h-28 items-end rounded-reba p-3 shadow-[inset_0_0_0_1px_#d4ccc0]"
                    style={{ background: c.value }}
                  >
                    <span className={cn("font-reba-mono text-reba-xs", c.dark ? "text-white" : "text-reba-ink")}>
                      {c.value}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-reba-sm font-semibold">{c.name}</p>
                    <Code>{c.token}</Code>
                    <p className="font-reba-serif text-reba-xs text-reba-muted">{c.usage}</p>
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
              <div key={o.token} className="flex flex-col gap-3">
                <div className="relative h-36 overflow-hidden rounded-reba">
                  <Image src="/assets/hero.png" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-black" style={{ opacity: o.opacity }} />
                  <span className="absolute bottom-3 left-3 text-reba-sm font-semibold text-white">Text on photo</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-reba-sm font-semibold">{o.name}</p>
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
        tone="beige"
        eyebrow="Foundations"
        title="Typography"
        lead="A geometric sans for headings and interface, a bookish serif for reading. Display sizes scale fluidly with the viewport."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {fontFamilies.map((f) => (
            <div key={f.token} className="flex flex-col gap-6 rounded-reba-lg bg-reba-paper p-6">
              <div className="flex items-start justify-between gap-4">
                <span className={cn(f.className, "text-reba-display-3 font-semibold")}>Aa</span>
                <Eyebrow size="tag">{f.name}</Eyebrow>
              </div>
              <p className={cn(f.className, "text-reba-md")}>Улаанбаатар · Vintage café 0123456789</p>
              <div className="flex flex-col gap-1 border-t border-reba-line pt-4">
                <p className="text-reba-sm font-semibold">{f.family}</p>
                <Code>{f.token}</Code>
                <p className="font-reba-serif text-reba-xs text-reba-muted">
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
                className="grid grid-cols-1 gap-2 border-b border-reba-line py-5 md:grid-cols-[220px_1fr] md:items-baseline md:gap-8"
              >
                <div className="flex flex-col gap-0.5">
                  <p className="text-reba-sm font-semibold">{t.name}</p>
                  <Code>
                    {t.token} · {t.size}
                  </Code>
                  <Code>line-height / tracking {t.meta}</Code>
                </div>
                <p className={cn(t.className, "min-w-0 font-reba-sans [overflow-wrap:anywhere]")}>Model 3 Performance</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-reba-lg bg-reba-paper p-6">
            <Eyebrow size="tag">Body paragraph · serif 16 / 1.5</Eyebrow>
            <p className="font-reba-serif text-reba-base">
              Every Tesla is built for safety, range and performance. Full Self-Driving (Supervised) makes every
              drive easier, and the Supercharger network keeps you moving across the country.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-reba-lg bg-reba-ink p-6 text-white">
            <Eyebrow size="tag" inherit>
              Wordmark · serif display
            </Eyebrow>
            <p className="font-reba-serif text-reba-display-3 font-normal">Vintage café</p>
          </div>
        </div>
      </Block>

      {/* Spacing, radius, layout */}
      <Block
        id="spacing"
        eyebrow="Foundations"
        title="Spacing, radius & layout"
        lead="A ten-step spacing scale on a 4px base, soft corners and fluid section padding."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SubHeading>Spacing</SubHeading>
            <div className="flex flex-col gap-3">
              {spacing.map((s) => (
                <div key={s.token} className="grid grid-cols-[96px_48px_1fr] items-center gap-4">
                  <Code>{s.token}</Code>
                  <span className="text-reba-sm font-semibold">{s.px}px</span>
                  <span className="h-3 rounded-full bg-reba-taupe" style={{ width: s.px }} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <SubHeading>Radius</SubHeading>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {radii.map((r) => (
                <div key={r.token} className="flex flex-col gap-3">
                  <div
                    className="aspect-square border border-reba-line bg-reba-beige"
                    style={{ borderRadius: r.value }}
                  />
                  <div className="flex flex-col gap-0.5">
                    <p className="text-reba-sm font-semibold">
                      {r.name} · {r.value}
                    </p>
                    <Code>{r.token}</Code>
                  </div>
                </div>
              ))}
            </div>

            <SubHeading>Layout</SubHeading>
            <dl className="flex flex-col">
              {layoutTokens.map((l) => (
                <div key={l.token} className="grid grid-cols-[140px_1fr] gap-4 border-b border-reba-line py-3">
                  <dt>
                    <Code>{l.token}</Code>
                  </dt>
                  <dd className="flex flex-col">
                    <span className="text-reba-sm font-semibold">{l.value}</span>
                    <span className="font-reba-serif text-reba-xs text-reba-muted">{l.usage}</span>
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
        tone="beige"
        eyebrow="Foundations"
        title="Motion"
        lead="Five easing curves and seven durations. Hover or focus a curve to preview it at 800ms."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-5">
            <SubHeading>Easing</SubHeading>
            <div className="flex flex-col gap-2">
              {easings.map((e) => (
                <div
                  key={e.token}
                  tabIndex={0}
                  className="group grid grid-cols-1 gap-3 rounded-reba bg-reba-paper p-4 outline-reba-ink focus-visible:outline-2 md:grid-cols-[180px_1fr] md:items-center"
                >
                  <div className="flex flex-col gap-0.5">
                    <p className="text-reba-sm font-semibold">{e.name}</p>
                    <Code>{e.token}</Code>
                  </div>
                  <div className="relative h-2 rounded-full bg-reba-beige">
                    <span
                      className="absolute top-1/2 left-0 size-4 -translate-y-1/2 rounded-full bg-reba-ink group-hover:left-[calc(100%-16px)] group-focus-visible:left-[calc(100%-16px)]"
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
                <div key={d.token} className="grid grid-cols-[120px_1fr] gap-4 border-b border-reba-line py-3">
                  <dt>
                    <Code>{d.token}</Code>
                  </dt>
                  <dd className="flex items-baseline gap-3">
                    <span className="text-reba-sm font-semibold">{d.value}</span>
                    {d.usage && <span className="font-reba-serif text-reba-xs text-reba-muted">{d.usage}</span>}
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
        lead="Pill buttons, round icon buttons and uppercase eyebrows — shown here with Tesla content."
      >
        <div className="flex flex-col gap-5">
          <SubHeading>Buttons</SubHeading>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-wrap items-center gap-4 rounded-reba-lg border border-reba-line p-8">
              <RebaButton>Order now</RebaButton>
              <RebaButton variant="dark">Learn more</RebaButton>
              <p className="w-full pt-2">
                <Code>primary · dark — on light surfaces</Code>
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-4 overflow-hidden rounded-reba-lg p-8">
              <Image src="/assets/hero.png" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative flex flex-wrap items-center gap-4">
                <RebaButton variant="light">Test drive</RebaButton>
                <RebaButton variant="ghost">Watch video</RebaButton>
                <p className="w-full pt-2 font-reba-mono text-reba-xs text-reba-on-dark-muted">
                  light · ghost — on photos and ink
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SubHeading>Icon buttons · 44px</SubHeading>
            <div className="flex flex-wrap items-center gap-4">
              <IconButton label="Menu">
                <MenuIcon />
              </IconButton>
              <IconButton variant="outline" label="Previous" disabled>
                <ArrowIcon direction="left" />
              </IconButton>
              <IconButton variant="outline" label="Next">
                <ArrowIcon />
              </IconButton>
              <div className="relative grid size-20 place-items-center overflow-hidden rounded-reba">
                <Image src="/assets/product-model-3.png" alt="" fill sizes="80px" className="object-cover" />
                <IconButton variant="overlay" label="Next photo" className="relative">
                  <ArrowIcon />
                </IconButton>
              </div>
            </div>
            <Code>plain · outline (disabled / enabled) · overlay</Code>
          </div>

          <div className="flex flex-col gap-5">
            <SubHeading>Eyebrows</SubHeading>
            <div className="flex flex-col gap-4">
              <Eyebrow>Default label</Eyebrow>
              <Eyebrow rule>With rule</Eyebrow>
              <Eyebrow mono>Mono · 12px</Eyebrow>
              <Eyebrow size="tag">Tag · 10px</Eyebrow>
              <div className="w-fit rounded-reba-sm bg-reba-ink px-3 py-2 text-white">
                <Eyebrow inherit size="tag">
                  Inherit on dark
                </Eyebrow>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <SubHeading>Section head + cards</SubHeading>
          <SectionHead
            eyebrow="Lineup"
            title="Find the Tesla that fits your life"
            lead="Compare range, performance and price across every model."
            action={<RebaButton variant="dark">View all models</RebaButton>}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <RebaCard
              image="/assets/product-model-3.png"
              imageAlt="Model 3"
              eyebrow="Lease from $439/mo"
              title="Model 3"
              text="Sleek, efficient and quick — the everyday sedan."
            />
            <RebaCard
              image="/assets/product-model-y.png"
              imageAlt="Model Y"
              eyebrow="Lease from $499/mo"
              title="Model Y"
              text="Room for seven and all-weather capability."
            />
            <RebaCard
              image="/assets/product-cybertruck.png"
              imageAlt="Cybertruck"
              eyebrow="Card · large"
              title="Cybertruck"
              text="Built for any planet, with a stainless steel exoskeleton."
              large
            />
          </div>
        </div>
      </Block>
    </>
  );
}
