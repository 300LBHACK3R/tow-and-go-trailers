import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 pt-28">
      <Container className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}