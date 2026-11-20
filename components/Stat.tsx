import { cn } from "@/lib/cn";

type StatProps = {
  value: string;
  label: string;
  /**
   * Takes the remaining row width and keeps the value on one line,
   * shrinking the font only if the column is too narrow.
   */
  wide?: boolean;
};

/** TDS spec stat: medium value, 12px grey-30 label. */
export function Stat({ value, label, wide }: StatProps) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-1", wide ? "@container md:flex-1" : "md:flex-none")}>
      <p
        className={cn(
          "font-medium text-tds-grey-10",
          wide ? "text-[length:min(40px,12.8cqi)] leading-[1.2] whitespace-nowrap" : "text-tds-80",
        )}
      >
        {value}
      </p>
      <p className="text-tds-20 text-tds-grey-30">{label}</p>
    </div>
  );
}
