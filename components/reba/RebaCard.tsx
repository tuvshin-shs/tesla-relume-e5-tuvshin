import Image from "next/image";
import { Eyebrow } from "@/components/reba/Eyebrow";
import { cn } from "@/lib/cn";

type RebaCardProps = {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  text: string;
  /** card-title--lg / card-text--lg */
  large?: boolean;
  className?: string;
};

export function RebaCard({ image, imageAlt = "", eyebrow, title, text, large, className }: RebaCardProps) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-reba bg-reba-beige">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        {eyebrow && <Eyebrow size="tag">{eyebrow}</Eyebrow>}
        <h3
          className={cn(
            "font-reba-sans font-semibold tracking-[-0.02em] text-reba-ink",
            large ? "text-reba-lg" : "text-reba-md",
          )}
        >
          {title}
        </h3>
        <p className={cn("font-reba-serif text-reba-muted", large ? "text-reba-base" : "text-reba-sm")}>{text}</p>
      </div>
    </article>
  );
}
