import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-center justify-center overflow-hidden px-(--pad-x) py-20 text-white lg:h-[900px] lg:py-0">
      <Image src="/assets/hero.png" alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative flex w-full max-w-[1280px] flex-col items-center lg:h-[820px]">
        <div className="flex w-full max-w-[768px] flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-h1 font-bold">Model 3</h1>
            <p className="text-medium">
              We sell hand-tied flies and rugged rods for the cold rivers of Montana. Our gear is built to
              last, like the men who use it.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="#">Order now</Button>
            <Button href="#" variant="alt">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
