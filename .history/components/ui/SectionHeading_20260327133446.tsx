type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}