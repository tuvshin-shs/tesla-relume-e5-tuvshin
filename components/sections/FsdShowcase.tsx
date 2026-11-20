import { Stat } from "@/components/Stat";
import { VideoPlayer } from "@/components/VideoPlayer";
import { TdsButton } from "@/components/tds/TdsButton";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FSD_MONTHLY } from "@/data/vehicles";

export function FsdShowcase() {
  return (
    <Section bg="grey">
      <article className="flex flex-col overflow-hidden rounded-tds bg-white lg:min-h-[560px] lg:flex-row">
        <div className="flex flex-col justify-center gap-8 p-6 md:p-12 lg:min-w-0 lg:flex-1">
          <SectionTitle
            label="Автомат жолоодлого"
            title="Full Self-Driving (Хяналттай)"
            description={`Жолоодлого бүрийг илүү хялбар болгоно. Сард $${FSD_MONTHLY}-өөр захиалаарай.`}
          />
          <div className="flex flex-col gap-6 md:flex-row md:gap-10">
            <Stat value="7x" label="Мөргөлдөөн цөөн" />
            <Stat wide value="17,386,302,310" label="Туулсан зам (миль)" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <TdsButton href="/fsd">Дэлгэрэнгүй</TdsButton>
            <TdsButton href="/drive" variant="tertiary">
              Туршилтын жолоодлого
            </TdsButton>
          </div>
        </div>

        <VideoPlayer
          youtubeId="TUDiG7PcLBs"
          title="Full Self-Driving (Хяналттай) | Tesla"
          poster="/assets/fsd-video-poster.jpg"
          className="aspect-[4/3] lg:aspect-auto lg:min-w-0 lg:flex-1"
        />
      </article>
    </Section>
  );
}
