"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ChevronIcon, TdsIconButton } from "@/components/tds/TdsIconButton";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { vehicles } from "@/data/vehicles";

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
      <SectionTitle
        label="Загварууд"
        title="Өөрт тохирох Tesla-гаа олоорой"
        description="Явах зай, хурд, үнийг харьцуулаад өөрийн загвараа сонгоорой."
        action={
          <div className="flex gap-3">
            <TdsIconButton
              label="Өмнөх загварууд"
              aria-controls="model-track"
              disabled={!canPrev}
              onClick={() => scroll(-1)}
            >
              <ChevronIcon direction="left" />
            </TdsIconButton>
            <TdsIconButton
              label="Дараагийн загварууд"
              aria-controls="model-track"
              disabled={!canNext}
              onClick={() => scroll(1)}
            >
              <ChevronIcon />
            </TdsIconButton>
          </div>
        }
      />

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
