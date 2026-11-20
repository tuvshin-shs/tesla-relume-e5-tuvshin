"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { products } from "@/data/products";

const arrowClass =
  "flex items-center justify-center rounded-lg border border-surface bg-white p-3 transition-colors hover:bg-[#e8e8e8] disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white";

export function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth - 1;
    setCanPrev(track.scrollLeft > 0);
    setCanNext(track.scrollLeft < max);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + gap), behavior: "smooth" });
  };

  return (
    <Section bg="gray" className="flex flex-col gap-12 md:gap-20">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          tagline="Tagline"
          title="Products"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          tight
          className="max-w-[768px] md:flex-1"
        />
        <Button href="#" variant="secondary">
          View all
        </Button>
      </div>

      <div className="flex flex-col gap-12">
        <div
          ref={trackRef}
          onScroll={update}
          // cards run past the container edge like the design
          className="no-scrollbar mr-[calc(var(--pad-x)*-1)] flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pr-(--pad-x)"
        >
          {products.map((product) => (
            <ProductCard key={product.name} product={product} className="snap-start" />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Image src="/assets/slider-dots.svg" alt="" width={104} height={8} />
          <div className="flex gap-4">
            <button
              type="button"
              aria-label="Previous products"
              disabled={!canPrev}
              onClick={() => scroll(-1)}
              className={arrowClass}
            >
              <Image src="/assets/arrow-back.svg" alt="" width={24} height={24} />
            </button>
            <button
              type="button"
              aria-label="Next products"
              disabled={!canNext}
              onClick={() => scroll(1)}
              className={arrowClass}
            >
              <Image src="/assets/arrow-forward.svg" alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
