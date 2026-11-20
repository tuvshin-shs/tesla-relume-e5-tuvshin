import { cn } from "@/lib/cn";

type SectionTitleProps = {
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** 16px instead of 24px between title and description */
  tight?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
  descriptionClassName?: string;
};

export function SectionTitle({
  tagline,
  title,
  description,
  align = "left",
  tight,
  as: Heading = "h2",
  className,
  descriptionClassName,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4",
        align === "center" && "max-w-[768px] items-center text-center",
        className,
      )}
    >
      {tagline && <p className="text-base font-semibold">{tagline}</p>}
      <div className={cn("flex flex-col", tight ? "gap-4" : "gap-6")}>
        <Heading className="text-h2 font-bold">{title}</Heading>
        {description && <p className={cn("text-medium", descriptionClassName)}>{description}</p>}
      </div>
    </div>
  );
}
