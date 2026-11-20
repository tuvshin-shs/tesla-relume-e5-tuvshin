import Image from "next/image";
import Link from "next/link";
import { TdsButton } from "@/components/tds/TdsButton";
import { type Vehicle, priceLine } from "@/data/vehicles";
import { cn } from "@/lib/cn";

type ProductCardProps = {
  vehicle: Vehicle;
  className?: string;
};

export function ProductCard({ vehicle, className }: ProductCardProps) {
  const { slug, name, type, image } = vehicle;
  const price = priceLine(vehicle);

  return (
    <article className={cn("flex w-[280px] shrink-0 flex-col gap-4 md:w-[320px]", className)}>
      <Link
        href={`/${slug}`}
        aria-label={`${name} — дэлгэрэнгүй`}
        className="group relative block aspect-[4/5] overflow-hidden rounded-tds bg-tds-grey-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tds-grey-35"
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-600 ease-tds-mktg group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-col gap-1">
        <h3 className="text-tds-50 font-medium text-tds-grey-10">{name}</h3>
        <p className="flex flex-wrap items-baseline gap-x-1.5">
          <span className="text-tds-20 text-tds-grey-30">{type} ·</span>
          <span className="text-tds-20 text-tds-grey-30">{price.label}</span>
          <span className="text-tds-40 font-medium text-tds-grey-10">{price.value}</span>
        </p>
      </div>
      <div className="flex gap-3">
        <TdsButton block href={`/${slug}/design`}>
          Захиалах
        </TdsButton>
        <TdsButton block variant="tertiary" href={`/${slug}`}>
          Дэлгэрэнгүй
        </TdsButton>
      </div>
    </article>
  );
}
