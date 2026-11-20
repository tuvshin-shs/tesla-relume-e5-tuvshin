import { Stat } from "@/components/Stat";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FsdShowcase() {
  return (
    <Section bg="gray">
      <article className="flex flex-col overflow-hidden rounded-2xl bg-white lg:h-[640px] lg:flex-row">
        <div className="flex flex-col justify-center gap-8 p-6 md:p-12 lg:min-w-0 lg:flex-1">
          <div className="flex flex-col gap-8">
            <SectionTitle
              tagline="Proof"
              title="Full Self-Driving (supervised)"
              description="Makes every drive easier. Subscribe for $99/mo.1"
              // Figma text node carries two trailing empty lines
              descriptionClassName="pb-[3em]"
            />
            <div className="flex flex-col gap-6 py-2 md:flex-row">
              <Stat value="7x" label="Fewer Collisions" />
              <Stat wide value="17,386,302,310" label="Miles Driven" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
            <Button href="#" variant="secondary" ring>
              Shop
            </Button>
            <Button href="#" variant="link" iconSrc="/assets/chevron-right.svg">
              Learn
            </Button>
          </div>
        </div>

        <VideoPlayer
          youtubeId="TUDiG7PcLBs"
          title="Full Self-Driving (Supervised) | Tesla"
          poster="/assets/fsd-video-poster.jpg"
          className="aspect-[4/3] lg:aspect-auto lg:min-w-0 lg:flex-1"
        />
      </article>
    </Section>
  );
}
