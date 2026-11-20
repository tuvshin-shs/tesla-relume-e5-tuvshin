import type { Metadata } from "next";
import Image from "next/image";
import { OfferCard } from "@/components/OfferCard";
import { TdsButton } from "@/components/tds/TdsButton";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { offers } from "@/data/offers";
import { SPEC_NOTE, startingPrice, vehicles } from "@/data/vehicles";
import { formatUsd } from "@/lib/format";

export const metadata: Metadata = {
  title: "Урамшуулал",
  description: "Загвар бүрийн эхлэх үнэ, түрээсийн нөхцөл болон худалдан авах сонголтууд.",
};

const purchaseOptions = [
  {
    title: "Бэлэн төлбөр",
    text: "Машинаа бүтэн үнээр нь худалдан авч, нэмэлт хүү, шимтгэлгүйгээр шууд эзэмшинэ.",
  },
  {
    title: "Зээлээр",
    text: "Урьдчилгаа төлбөр төлж, үлдэгдлийг сар бүр хэсэгчлэн төлнө. Зээлийн хугацаа, хүүг банктайгаа тохирно.",
  },
  {
    title: "Түрээсээр",
    text: "Сарын тогтмол төлбөрөөр машин унаж, гэрээний хугацаа дуусахад шинэ загвар руу шилжих боломжтой.",
  },
];

// the external offer (shareholder meeting) closes the page; the "current offers" card would link to itself
const shareholder = offers.find((o) => o.href.startsWith("http"));

export default function OffersPage() {
  return (
    <>
      <Section className="flex flex-col gap-10">
        <SectionTitle
          as="h1"
          label="Урамшуулал"
          title="Одоогийн урамшуулал"
          description="Загвар бүрийн эхлэх үнэ, түрээсийн нөхцөлтэй танилцаад өөрт тохирохыг сонгоорой."
        />
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <li key={v.slug} className="flex flex-col overflow-hidden rounded-tds bg-tds-grey-70">
              <div className="relative aspect-[4/3]">
                <Image src={v.image} alt={v.name} fill sizes="(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                {v.comingSoon && (
                  <span className="absolute top-3 left-3 rounded-tds bg-white/90 px-3 py-1 text-tds-20 font-medium text-tds-grey-10">
                    Тун удахгүй
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div className="flex flex-col gap-1">
                  <h2 className="text-tds-60 font-medium text-tds-grey-10">{v.name}</h2>
                  <p className="text-tds-grey-30">{v.type}</p>
                </div>
                <dl className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col-reverse gap-1">
                    <dt className="text-tds-20 text-tds-grey-30">Эхлэх үнэ*</dt>
                    <dd className="text-tds-50 font-medium text-tds-grey-10">{formatUsd(startingPrice(v))}</dd>
                  </div>
                  {v.leaseFrom && (
                    <div className="flex flex-col-reverse gap-1">
                      <dt className="text-tds-20 text-tds-grey-30">Түрээс</dt>
                      <dd className="text-tds-50 font-medium text-tds-grey-10">{formatUsd(v.leaseFrom)}/сар</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-auto flex gap-3">
                  <TdsButton block href={`/${v.slug}/design`}>
                    Захиалах
                  </TdsButton>
                  <TdsButton block variant="light" href={`/${v.slug}`}>
                    Дэлгэрэнгүй
                  </TdsButton>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-tds-20 text-tds-grey-30">{SPEC_NOTE}</p>
      </Section>

      <Section bg="grey" className="flex flex-col gap-10">
        <SectionTitle label="Төлбөр" title="Худалдан авах сонголтууд" />
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {purchaseOptions.map((p) => (
            <li key={p.title} className="flex flex-col gap-3 rounded-tds bg-white p-6 md:p-8">
              <h3 className="text-tds-60 font-medium text-tds-grey-10">{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <TdsButton href="/support#contact" variant="secondary">
            Зөвлөгөө авах
          </TdsButton>
        </div>
      </Section>

      {shareholder && (
        <Section className="flex">
          <OfferCard offer={shareholder} />
        </Section>
      )}
    </>
  );
}
