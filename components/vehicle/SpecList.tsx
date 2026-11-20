import type { Spec } from "@/data/vehicles";
import { cn } from "@/lib/cn";

/** Three headline specs: medium value over a 12px grey label. */
export function SpecList({ specs, size = "lg", className }: { specs: Spec[]; size?: "lg" | "sm"; className?: string }) {
  return (
    <dl className={cn("grid grid-cols-3 gap-4", className)}>
      {specs.map((s) => (
        <div key={s.label} className="flex flex-col-reverse gap-1">
          <dt className="text-tds-20 text-tds-grey-30">{s.label}</dt>
          <dd className={cn("font-medium text-tds-grey-10", size === "lg" ? "text-tds-60 md:text-tds-70" : "text-tds-50")}>
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
