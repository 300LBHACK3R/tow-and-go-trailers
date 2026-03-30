import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  pricing?: string;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  description,
  pricing,
  align = "center",
}: PageHeroProps) {
  return (
    <section className="border-b border-white/10 pt-28">
      <Container className="section-padding">
        <div
          className={cn(
            "max-w-4xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
              {eyebrow}
            </p>
          )}

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {title}
          </h1>

          {pricing && (
            <p className="mt-4 text-lg text-zinc-300">
              Pricing starting at{" "}
              <span className="font-semibold text-[#d4af37]">{pricing}</span>
            </p>
          )}

          {description && (
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}