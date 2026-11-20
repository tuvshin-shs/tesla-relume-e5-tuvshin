import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Offer } from "@/data/offers";

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-2xl bg-surface md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:min-w-0 lg:flex-1">
      {/* title + text pinned to top, link pinned to bottom so both cards line up */}
      <div className="flex min-w-0 flex-col items-start justify-between gap-6 p-8">
        <div className="flex flex-col gap-3">
          {/* same 2-line title height in both cards so the descriptions start on one line */}
          <h3 className="text-[24px] leading-[1.4] font-bold tracking-[-0.01em] lg:min-h-[2.8em]">
            {offer.title}
          </h3>
          <p className="text-base">{offer.text}</p>
        </div>
        <Button variant="link" href={offer.href}>
          Learn More
        </Button>
      </div>
      <div className="flex min-w-0 items-center">
        <Image
          src={offer.image}
          alt=""
          width={640}
          height={320}
          sizes="(min-width: 992px) 300px, 100vw"
          className="h-[240px] w-full object-cover md:h-[320px]"
        />
      </div>
    </article>
  );
}
