import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "max-w-4xl",
        isCentered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.04em] text-white [text-wrap:balance]">
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg",
            isCentered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}