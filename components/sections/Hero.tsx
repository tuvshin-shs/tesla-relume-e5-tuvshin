import Image from "next/image";
import { TdsButton } from "@/components/tds/TdsButton";
import { getVehicle, startingPrice } from "@/data/vehicles";
import { formatUsd } from "@/lib/format";

/** tesla.com homepage tile: dark title over the sky, two buttons at the bottom. */
export function Hero() {
  const model3 = getVehicle("model3")!;
  const subtitle = model3.leaseFrom
    ? `Түрээс сард ${formatUsd(model3.leaseFrom)}-өөс`
    : `Үнэ ${formatUsd(startingPrice(model3))}-өөс`;

  return (
    <section className="relative flex h-[min(calc(100svh-56px),900px)] min-h-[560px] flex-col items-center justify-between overflow-hidden px-6 pt-16 pb-12 text-center md:pt-24">
      <Image
        src="/assets/hero.png"
        alt="Мөнгөлөг Model 3 цөлийн замаар давхиж явна"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_center]"
      />
      <div className="relative flex flex-col gap-2">
        <h1 className="text-tds-80 font-medium text-tds-grey-10">{model3.name}</h1>
        <p className="text-tds-40 text-tds-grey-20">{subtitle}</p>
      </div>
      <div className="relative flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
        <TdsButton href="/model3/design" wide className="w-full max-w-[320px] sm:w-auto">
          Захиалах
        </TdsButton>
        <TdsButton href="/drive?model=model3" variant="light" wide className="w-full max-w-[320px] sm:w-auto">
          Туршилтын жолоодлого
        </TdsButton>
      </div>
    </section>
  );
}
