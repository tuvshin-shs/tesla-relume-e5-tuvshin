import Image from "next/image";
import { TdsButton } from "@/components/tds/TdsButton";
import type { Offer } from "@/data/offers";

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-tds bg-tds-grey-70 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:min-w-0 lg:flex-1">
      {/* title + text pinned to top, button pinned to bottom so both cards line up */}
      <div className="flex min-w-0 flex-col items-start justify-between gap-6 p-6 md:p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-tds-60 font-medium text-tds-grey-10 lg:min-h-[56px]">{offer.title}</h3>
          <p>{offer.text}</p>
        </div>
        <TdsButton href={offer.href} variant="secondary">
          {offer.cta}
        </TdsButton>
      </div>
      <div className="relative min-h-[240px] md:min-h-[320px]">
        <Image src={offer.image} alt="" fill sizes="(min-width: 992px) 280px, (min-width: 768px) 45vw, 100vw" className="object-cover" />
      </div>
    </article>
  );
}
