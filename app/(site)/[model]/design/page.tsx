import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Configurator } from "@/components/vehicle/Configurator";
import { getVehicle } from "@/data/vehicles";

type Props = {
  params: Promise<{ model: string }>;
  searchParams: Promise<{ trim?: string | string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const vehicle = getVehicle((await params).model);
  return vehicle ? { title: `${vehicle.name} — ${vehicle.orderLabel}` } : {};
}

export default async function DesignPage({ params, searchParams }: Props) {
  const vehicle = getVehicle((await params).model);
  if (!vehicle) notFound();

  // /model3/design?trim=performance preselects a trim (links from the model page)
  const { trim } = await searchParams;
  const initialTrim = vehicle.trims.find((t) => t.id === trim)?.id ?? vehicle.trims[0].id;

  // key resets the configurator when the trim link changes while already on the page
  return <Configurator key={initialTrim} vehicle={vehicle} initialTrim={initialTrim} />;
}
