import { cn } from "@/lib/cn";

type SectionTitleProps = {
  /** Small uppercase label above the title */
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  /** "dark" for text on photos */
  tone?: "light" | "dark";
  className?: string;
};

/** TDS heading block: 12px label, 28→40px medium title, 17px lead. */
export function SectionTitle({
  label,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  tone = "light",
  className,
}: SectionTitleProps) {
  const onDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex max-w-[75ch] flex-col gap-2",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {label && (
        <p
          className={cn(
            "text-tds-20 font-medium tracking-[0.08em] uppercase",
            onDark ? "text-white/80" : "text-tds-grey-30",
          )}
        >
          {label}
        </p>
      )}
      <Heading className={cn("text-tds-70 font-medium md:text-tds-80", onDark ? "text-white" : "text-tds-grey-10")}>
        {title}
      </Heading>
      {description && (
        <p className={cn("text-tds-40", onDark ? "text-white/85" : "text-tds-grey-30")}>{description}</p>
      )}
    </div>
  );
}
