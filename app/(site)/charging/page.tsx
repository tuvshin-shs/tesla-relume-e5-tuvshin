import type { Metadata } from "next";
import Image from "next/image";
import { ChargingCalculator } from "@/components/charging/ChargingCalculator";
import { FIND_US_URL } from "@/components/sections/ChargingMap";
import { TdsButton } from "@/components/tds/TdsButton";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Цэнэглэлт",
  description: "Гэрийн цэнэглэлт, Supercharger, Destination цэнэглэгч болон сарын зардлын тооцоолуур.",
};

const ways = [
  {
    title: "Гэртээ цэнэглэх",
    text: "Wall Connector-ийг гэр, гаражид суурилуулаад шөнийн турш цэнэглэвэл өглөө бүр бүрэн цэнэгтэй гарна. Ердийн розеткоор ч цэнэглэх боломжтой.",
  },
  {
    title: "Supercharger",
    text: "Урт замд гарахдаа хурдан цэнэглэгчээр хэдхэн минутад хэдэн зуун км-ийн зай нэмээрэй. Машины навигац хамгийн ойрын станцыг өөрөө санал болгоно.",
  },
  {
    title: "Destination цэнэглэгч",
    text: "Зочид буудал, ресторан, худалдааны төвд байрлах цэнэглэгчид — амарч, хооллож байх хооронд машин тань цэнэглэгдэнэ.",
  },
];

const winterTips = [
  {
    title: "Батерейгаа урьдчилан халаа",
    text: "Supercharger руу явахдаа навигацаа тохируулбал батерей замдаа халж, цэнэглэлт хурдан болно.",
  },
  {
    title: "Гарахаасаа өмнө салоноо халаа",
    text: "Цэнэглэгчид залгаатай байхад Tesla апп-аар салоноо халаавал батерейн цэнэг хэмнэгдэнэ.",
  },
  {
    title: "Цэнэглэлтээ хуваарьт",
    text: "Шөнийн хямд тарифаар цэнэглэж, гарах цагаа тохируулбал батерей бүлээн, бэлэн байна.",
  },
  {
    title: "Өдөр тутам 80% хүртэл",
    text: "Өдөр тутмын хэрэглээнд 80% хүртэл, урт замд гарахдаа 100% хүртэл цэнэглээрэй.",
  },
];

export default function ChargingPage() {
  return (
    <>
      <section className="px-6 pt-12 md:px-12 md:pt-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              as="h1"
              label="Цэнэглэлт"
              title="Гэртээ ч, замдаа ч цэнэглэнэ"
              description="Ихэнх цэнэглэлтийг гэртээ хийж, урт замд Supercharger сүлжээг ашиглаарай."
            />
            <div className="flex flex-wrap gap-3">
              <TdsButton href={FIND_US_URL}>Газрын зураг нээх</TdsButton>
              <TdsButton href="#calculator" variant="tertiary">
                Зардал тооцох
              </TdsButton>
            </div>
          </div>
          <Image
            src="/assets/charge-map.png"
            alt="Tesla Supercharger станцуудын газрын зураг"
            width={1412}
            height={565}
            priority
            sizes="(min-width: 1296px) 1200px, 100vw"
            className="aspect-[1412/565] w-full rounded-tds object-cover"
          />
        </div>
      </section>

      <Section className="flex flex-col gap-10">
        <SectionTitle label="Сонголтууд" title="Цэнэглэх гурван арга" />
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {ways.map((w) => (
            <li key={w.title} className="flex flex-col gap-3 rounded-tds bg-tds-grey-70 p-6 md:p-8">
              <h3 className="text-tds-60 font-medium text-tds-grey-10">{w.title}</h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="grey" id="calculator" className="flex flex-col gap-10">
        <SectionTitle
          label="Тооцоолуур"
          title="Сард хэр хэмнэх вэ?"
          description="Өдөр тутмын явах зай, цахилгаан ба бензиний үнээ оруулаад зардлаа харьцуулаарай."
        />
        <ChargingCalculator />
      </Section>

      <Section className="flex flex-col gap-10">
        <SectionTitle
          label="Өвлийн зөвлөмж"
          title="Хүйтэн улиралд цэнэглэх нь"
          description="Хасах хэмд батерей удаан цэнэглэгдэж, зай багасдаг. Эдгээр зөвлөмж тусална."
        />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {winterTips.map((t, i) => (
            <li key={t.title} className="flex flex-col gap-3 rounded-tds bg-tds-grey-70 p-6">
              <span className="text-tds-20 font-medium text-tds-grey-30">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-tds-50 font-medium text-tds-grey-10">{t.title}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
