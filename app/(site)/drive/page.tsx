import type { Metadata } from "next";
import Image from "next/image";
import { testDriveCalAttrs } from "@/components/CalEmbed";
import { DemoDriveForm } from "@/components/forms/DemoDriveForm";
import { TdsButton } from "@/components/tds/TdsButton";
import { drivableVehicles } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Туршилтын жолоодлого",
  description: "Model 3, Model Y, Model Y L эсвэл Cybertruck-ийг өөрийн биеэр туршиж үзэх цагаа товлоорой.",
};

type Props = { searchParams: Promise<{ model?: string | string[] }> };

export default async function DrivePage({ searchParams }: Props) {
  // /drive?model=modely preselects a vehicle (links from model pages)
  const { model } = await searchParams;
  const initialModel = drivableVehicles.find((v) => v.slug === model)?.slug ?? drivableVehicles[0].slug;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div className="relative h-[40svh] min-h-[280px] lg:sticky lg:top-14 lg:h-[calc(100svh-56px)]">
        <Image src="/assets/hero.png" alt="" fill priority sizes="(min-width: 992px) 45vw, 100vw" className="object-cover object-[60%_center]" />
      </div>

      <div className="flex flex-col gap-10 px-6 py-12 md:px-12 lg:py-16 xl:px-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-tds-80 font-medium text-tds-grey-10">Туршилтын жолоодлого</h1>
          <p className="max-w-[60ch] text-tds-40 text-tds-grey-30">
            Tesla-г өөрийн биеэр мэдэрч үзээрэй. Мэдээллээ үлдээвэл бид тантай холбогдож цагаа тохирно.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <TdsButton variant="secondary" {...testDriveCalAttrs}>
              Календараас цаг сонгох
            </TdsButton>
            <span className="text-tds-20 text-tds-grey-30">эсвэл доорх маягтыг бөглөнө үү</span>
          </div>
        </div>

        <DemoDriveForm key={initialModel} initialModel={initialModel} />
      </div>
    </div>
  );
}
