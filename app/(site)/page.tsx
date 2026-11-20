import { ChargingMap } from "@/components/sections/ChargingMap";
import { FsdShowcase } from "@/components/sections/FsdShowcase";
import { Hero } from "@/components/sections/Hero";
import { OfferGrid } from "@/components/sections/OfferGrid";
import { ProductCarousel } from "@/components/sections/ProductCarousel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCarousel />
      <FsdShowcase />
      <OfferGrid />
      <ChargingMap />
    </>
  );
}
