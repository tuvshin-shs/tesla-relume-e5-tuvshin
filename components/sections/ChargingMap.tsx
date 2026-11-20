import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ChargingMap() {
  return (
    // the offers section above already provides the gap
    <Section flushTop className="flex flex-col items-center gap-20">
      <Image
        src="/assets/charge-map.png"
        alt="Map of Tesla Superchargers across the United States"
        width={1280}
        height={738}
        sizes="(min-width: 1408px) 1280px, 100vw"
        className="aspect-[1280/738] w-full rounded-2xl object-cover"
      />
      <div className="flex w-full max-w-[768px] flex-col items-center gap-8">
        <SectionTitle
          align="center"
          tagline="Tagline"
          title="Find Your Charge"
          description="View the network of Tesla Superchargers and Destination Chargers available near you."
        />
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button href="#" variant="secondary" ring>
            View Networks
          </Button>
          <Button href="#" variant="link">
            Learn More
          </Button>
        </div>
      </div>
    </Section>
  );
}
