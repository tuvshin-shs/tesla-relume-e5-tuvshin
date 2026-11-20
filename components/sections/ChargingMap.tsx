import Image from "next/image";
import { TdsButton } from "@/components/tds/TdsButton";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const FIND_US_URL = "https://www.tesla.com/findus";

export function ChargingMap() {
  return (
    <Section bg="grey" className="flex flex-col items-center gap-12">
      <Image
        src="/assets/charge-map.png"
        alt="Tesla Supercharger станцуудын газрын зураг"
        width={1412}
        height={565}
        sizes="(min-width: 1296px) 1200px, 100vw"
        className="aspect-[1412/565] w-full rounded-tds object-cover"
      />
      <div className="flex w-full flex-col items-center gap-8">
        <SectionTitle
          align="center"
          label="Цэнэглэлт"
          title="Цэнэглэх цэгээ олоорой"
          description="Ойролцоох Supercharger болон Destination цэнэглэгчийн сүлжээг газрын зураг дээрээс хараарай."
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <TdsButton href={FIND_US_URL} variant="secondary">
            Газрын зураг нээх
          </TdsButton>
          <TdsButton href="/charging" variant="light">
            Цэнэглэлтийн тухай
          </TdsButton>
        </div>
      </div>
    </Section>
  );
}
