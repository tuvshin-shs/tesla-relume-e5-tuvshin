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

export function Stat({ value, label, wide }: StatProps) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-2", wide ? "@container md:flex-1" : "md:flex-none")}>
      <p
        className={cn(
          "font-bold",
          wide
            ? "text-[length:min(var(--fs-h2),12.8cqi)] leading-[1.2] tracking-[-0.01em] whitespace-nowrap"
            : "text-h2",
        )}
      >
        {value}
      </p>
      <p className="text-base">{label}</p>
    </div>
  );
}
