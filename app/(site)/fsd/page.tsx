import type { Metadata } from "next";
import { Stat } from "@/components/Stat";
import { VideoPlayer } from "@/components/VideoPlayer";
import { TdsButton } from "@/components/tds/TdsButton";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FSD_MONTHLY, FSD_PRICE } from "@/data/vehicles";
import { formatUsd } from "@/lib/format";

export const metadata: Metadata = {
  title: "Full Self-Driving (Хяналттай)",
  description: "Хурдны зам, хотын гудамж, зогсоол — таны хяналт дор машин тань жолоодлогын ихэнх ажлыг гүйцэтгэнэ.",
};

const capabilities = [
  {
    title: "Хурдны замаас хот хүртэл",
    text: "Эгнээ солих, уулзвар, эргэлтийг даван, зорьсон газар луу тань жолоодно.",
  },
  {
    title: "Автомат зогсоол",
    text: "Зогсоолын сул зайг таньж, нэг товшилтоор машинаа байрлуулна.",
  },
  {
    title: "Ухаалаг дуудлага",
    text: "Зогсоол дээр байгаа машинаа утасныхаа апп-аар өөр лүүгээ дуудна.",
  },
  {
    title: "Байнга сайжирна",
    text: "Шинэ чадварууд програм хангамжийн шинэчлэлээр машинд тань нэмэгдсээр байна.",
  },
];

export default function FsdPage() {
  return (
    <>
      <Section className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            as="h1"
            label="Автомат жолоодлого"
            title="Full Self-Driving (Хяналттай)"
            description="Жолоодлого бүрийг илүү хялбар, тайван болгоно."
          />
          <div className="flex flex-wrap gap-3">
            <TdsButton href="/drive">Туршилтын жолоодлого</TdsButton>
            <TdsButton href="/model3/design" variant="tertiary">
              Машин сонгох
            </TdsButton>
          </div>
        </div>
        <VideoPlayer
          youtubeId="TUDiG7PcLBs"
          title="Full Self-Driving (Хяналттай) | Tesla"
          poster="/assets/fsd-video-poster.jpg"
          className="aspect-video w-full"
        />
        <div className="flex flex-col gap-6 md:flex-row md:gap-16">
          <Stat value="7x" label="Мөргөлдөөн цөөн" />
          <Stat wide value="17,386,302,310" label="Туулсан зам (миль)" />
        </div>
      </Section>

      <Section bg="grey" className="flex flex-col gap-10">
        <SectionTitle label="Чадварууд" title="Юу хийж чадах вэ?" />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <li key={c.title} className="flex flex-col gap-3 rounded-tds bg-white p-6">
              <h3 className="text-tds-50 font-medium text-tds-grey-10">{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionTitle label="Үнэ" title="Захиалах эсвэл худалдан авах" />
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1 rounded-tds bg-tds-grey-70 p-6">
              <span className="text-tds-20 text-tds-grey-30">Сарын захиалга</span>
              <span className="text-tds-70 font-medium text-tds-grey-10">{formatUsd(FSD_MONTHLY)}/сар</span>
            </div>
            <div className="flex flex-col gap-1 rounded-tds bg-tds-grey-70 p-6">
              <span className="text-tds-20 text-tds-grey-30">Нэг удаагийн төлбөр</span>
              <span className="text-tds-70 font-medium text-tds-grey-10">{formatUsd(FSD_PRICE)}</span>
            </div>
          </div>
          <p className="text-tds-grey-30">
            Машин захиалахдаа тохируулагч дээрээс Full Self-Driving (Хяналттай)-г нэмэх боломжтой.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3 rounded-tds bg-tds-grey-70 p-6 md:p-8">
          <h2 className="text-tds-50 font-medium text-tds-grey-10">Анхааруулга</h2>
          <p>
            Full Self-Driving (Хяналттай) нь жолоочийн бүрэн анхаарал шаарддаг. Жолооч гараа жолоон дээр байлгаж, хүссэн үедээ
            жолоодлогыг шууд гартаа авахад бэлэн байх ёстой. Энэ функц машиныг бүрэн бие даан явдаг болгохгүй.
          </p>
        </div>
      </Section>
    </>
  );
}
