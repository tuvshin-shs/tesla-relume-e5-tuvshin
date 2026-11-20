import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TdsButton } from "@/components/tds/TdsButton";
import { TdsLabel } from "@/components/tds/TdsLabel";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SpecList } from "@/components/vehicle/SpecList";
import { SPEC_NOTE, getVehicle, headlineSpecs, trimSpecs, vehicles } from "@/data/vehicles";
import { formatUsd } from "@/lib/format";

type Props = { params: Promise<{ model: string }> };

export function generateStaticParams() {
  return vehicles.map((v) => ({ model: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const vehicle = getVehicle((await params).model);
  return vehicle ? { title: vehicle.name, description: `${vehicle.type}. ${vehicle.tagline}` } : {};
}

export default async function ModelPage({ params }: Props) {
  const vehicle = getVehicle((await params).model);
  if (!vehicle) notFound();

  const { slug, name, type, tagline, image, features, trims, comingSoon, orderLabel } = vehicle;
  const others = vehicles.filter((v) => v.slug !== slug);

  return (
    <>
      {/* Hero: copy + specs beside the photo */}
      <section className="bg-tds-grey-70">
        <div className="grid grid-cols-1 lg:min-h-[calc(100svh-56px)] lg:grid-cols-2">
          <div className="relative h-[55svh] min-h-[320px] lg:order-2 lg:h-auto">
            <Image src={image} alt={name} fill priority sizes="(min-width: 992px) 50vw, 100vw" className="object-cover" />
            {comingSoon && (
              <span className="absolute top-4 left-4 rounded-tds bg-white/90 px-3 py-1 text-tds-20 font-medium text-tds-grey-10">
                Тун удахгүй
              </span>
            )}
          </div>
          <div className="flex flex-col justify-center gap-10 px-6 py-12 md:px-12 lg:py-16 xl:px-20">
            <div className="flex flex-col gap-2">
              <TdsLabel rule>{type}</TdsLabel>
              <h1 className="text-tds-90 font-medium text-tds-grey-10 md:text-tds-100">{name}</h1>
              <p className="max-w-[48ch] text-tds-40 text-tds-grey-20">{tagline}</p>
            </div>
            <SpecList specs={headlineSpecs(vehicle)} />
            <div className="flex flex-col gap-3 sm:flex-row">
              <TdsButton href={`/${slug}/design`} wide>
                {orderLabel}
              </TdsButton>
              {!comingSoon && (
                <TdsButton href={`/drive?model=${slug}`} variant="secondary" wide>
                  Туршилтын жолоодлого
                </TdsButton>
              )}
            </div>
            <p className="text-tds-20 text-tds-grey-30">{SPEC_NOTE}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section className="flex flex-col gap-10">
        <SectionTitle label={name} title="Онцлог шинж чанар" />
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((f, i) => (
            <li key={f.title} className="flex flex-col gap-3 rounded-tds bg-tds-grey-70 p-6 md:p-8">
              <span className="text-tds-20 font-medium text-tds-grey-30">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-tds-60 font-medium text-tds-grey-10">{f.title}</h3>
              <p className="max-w-[60ch]">{f.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FSD band */}
      <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
        <Image src="/assets/fsd-video-poster.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-start gap-8">
          <SectionTitle
            tone="dark"
            label="Full Self-Driving (Хяналттай)"
            title="Жолоодлого бүр илүү хялбар"
            description="Хурдны зам, хотын гудамж, зогсоол — таны хяналт дор машин тань жолоодлогын ихэнх ажлыг гүйцэтгэнэ."
          />
          <TdsButton href="/fsd" variant="light">
            Дэлгэрэнгүй
          </TdsButton>
        </div>
      </section>

      {/* Trims */}
      <Section bg="grey" id="trims" className="flex flex-col gap-10">
        <SectionTitle
          label="Хувилбарууд"
          title={trims.length > 1 ? "Өөрт тохирохоо сонгоорой" : "Үнэ ба үзүүлэлт"}
        />
        <ul className={trims.length > 2 ? "grid grid-cols-1 gap-5 lg:grid-cols-3" : "grid grid-cols-1 gap-5 md:grid-cols-2"}>
          {trims.map((t) => (
            <li key={t.id} className="flex flex-col gap-6 rounded-tds bg-white p-6 md:p-8">
              <div className="flex flex-col gap-1">
                <h3 className="text-tds-50 font-medium text-tds-grey-10">{t.name}</h3>
                <p className="text-tds-40 text-tds-grey-20">{formatUsd(t.price)}</p>
              </div>
              <SpecList specs={trimSpecs(t)} size="sm" />
              <TdsButton href={`/${slug}/design?trim=${t.id}`} variant="tertiary" className="mt-auto">
                Энэ хувилбарыг сонгох
              </TdsButton>
            </li>
          ))}
        </ul>
        <p className="text-tds-20 text-tds-grey-30">{SPEC_NOTE}</p>
      </Section>

      {/* Other models */}
      <Section className="flex flex-col gap-10">
        <SectionTitle label="Харьцуулах" title="Бусад загварууд" />
        <ul className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {others.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/${v.slug}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-tds p-4 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tds-grey-35 md:p-6"
              >
                <Image
                  src={v.image}
                  alt=""
                  fill
                  sizes="(min-width: 992px) 25vw, 50vw"
                  className="object-cover transition-transform duration-600 ease-tds-mktg group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0" />
                <span className="relative text-tds-50 font-medium">{v.name}</span>
                <span className="relative text-tds-20">{v.type}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
