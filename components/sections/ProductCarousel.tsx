"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { vehicles } from "@/data/vehicles";

const arrowClass =
  "flex size-10 items-center justify-center rounded-tds bg-tds-grey-70 transition-colors duration-330 hover:bg-tds-grey-65 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tds-grey-35 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-tds-grey-70";

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
    <Section id="models" className="flex flex-col gap-10 md:gap-12">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          label="Загварууд"
          title="Өөрт тохирох Tesla-гаа олоорой"
          description="Явах зай, хурд, үнийг харьцуулаад өөрийн загвараа сонгоорой."
          className="md:flex-1"
        />
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Өмнөх загварууд"
            aria-controls="model-track"
            disabled={!canPrev}
            onClick={() => scroll(-1)}
            className={arrowClass}
          >
            <Image src="/assets/arrow-back.svg" alt="" width={24} height={24} />
          </button>
          <button
            type="button"
            aria-label="Дараагийн загварууд"
            aria-controls="model-track"
            disabled={!canNext}
            onClick={() => scroll(1)}
            className={arrowClass}
          >
            <Image src="/assets/arrow-forward.svg" alt="" width={24} height={24} />
          </button>
        </div>
      </div>

      <div
        id="model-track"
        ref={trackRef}
        onScroll={update}
        // cards run past the right edge of the container
        className="no-scrollbar -mr-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pr-6 md:-mr-12 md:pr-12"
      >
        {vehicles.map((vehicle) => (
          <ProductCard key={vehicle.slug} vehicle={vehicle} className="snap-start" />
        ))}
      </div>
    </Section>
  );
}
