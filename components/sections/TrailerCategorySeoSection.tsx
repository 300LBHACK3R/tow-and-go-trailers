import { Container } from "@/components/ui/Container";
import type { TrailerCategory } from "@/data/trailerCategories";
import { getTrailerCategorySeoContent } from "@/data/trailerCategorySeoContent";

type TrailerCategorySeoSectionProps = {
  category: TrailerCategory;
};

export function TrailerCategorySeoSection({
  category,
}: TrailerCategorySeoSectionProps) {
  const content = getTrailerCategorySeoContent(category.id);

  if (!content) return null;

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.78))]" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
              Trailer Rental Guide
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {content.heading}
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              {content.intro}
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                Service Area
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {content.serviceNote}
              </p>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                Add-Ons / Support
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {content.addOnsNote}
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.35)] md:p-8">
              <h3 className="text-xl font-bold text-white">
                {content.bestUsesTitle}
              </h3>

              <ul className="mt-5 grid gap-3 text-sm leading-7 text-zinc-300">
                {content.bestUses.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.35)] md:p-8">
              <h3 className="text-xl font-bold text-white">
                {content.customerTypesTitle}
              </h3>

              <ul className="mt-5 grid gap-3 text-sm leading-7 text-zinc-300">
                {content.customerTypes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.35)] md:p-8">
              <h3 className="text-xl font-bold text-white">
                Common questions
              </h3>

              <div className="mt-5 grid gap-3">
                {content.faq.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
                      <span>{item.question}</span>
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-black/40 text-[#d4af37] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
