import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/data/products";
import { cn } from "@/lib/cn";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const { name, label, price, image, cta, href } = product;

  return (
    <article className={cn("flex w-[260px] shrink-0 flex-col gap-4 md:w-[296px]", className)}>
      <Image
        src={image}
        alt={name}
        width={296}
        height={365}
        sizes="296px"
        className="h-[364.8px] w-full rounded-2xl object-cover"
      />
      <div className="flex flex-col gap-4">
        {/* name on top, then "label + price" on one baseline-aligned line */}
        <div className="flex flex-col gap-1">
          <h3 className="text-medium font-semibold">{name}</h3>
          <p className="flex items-baseline gap-1.5 leading-[1.3]">
            <span className="text-[14px] whitespace-nowrap text-muted">{label}</span>
            <span className="text-[22px] font-semibold whitespace-nowrap">{price}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" block href={href}>
            {cta}
          </Button>
          <Button variant="outline" block href={href}>
            Learn More
          </Button>
        </div>
      </div>
    </article>
  );
}
