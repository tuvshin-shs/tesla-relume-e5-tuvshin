import { OfferCard } from "@/components/OfferCard";
import { Section } from "@/components/ui/Section";
import { offers } from "@/data/offers";

export function OfferGrid() {
  return (
    <Section className="flex flex-col gap-8 lg:flex-row">
      {offers.map((offer) => (
        <OfferCard key={offer.title} offer={offer} />
      ))}
    </Section>
  );
}
