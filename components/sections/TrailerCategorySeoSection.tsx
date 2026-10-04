import { Container } from "@/components/ui/Container";
import type { TrailerCategory } from "@/data/trailerCategories";
import { getTrailerCategorySeoContent } from "@/data/trailerCategorySeoContent";

function GuideList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-[#d4af37]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TrailerCategorySeoSection({ category }: { category: TrailerCategory }) {
  const content = getTrailerCategorySeoContent(category.id);
  if (!content) return null;

  const headingId = `${category.id}-rental-guide-heading`;

  return (
    <section aria-labelledby={headingId} className="border-t border-white/10 bg-[#0d0f0c] py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">Trailer rental guide</p>
            <h2 id={headingId} className="mt-4 max-w-xl text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-white sm:text-4xl">{content.heading}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">{content.intro}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-t border-[#d4af37]/30 pt-5">
              <h3 className="text-lg font-semibold text-white">{content.bestUsesTitle}</h3>
              <GuideList items={content.bestUses} />
            </div>
            <div className="border-t border-[#d4af37]/30 pt-5">
              <h3 className="text-lg font-semibold text-white">{content.customerTypesTitle}</h3>
              <GuideList items={content.customerTypes} />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">Service area</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">{content.serviceNote}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">Add-ons &amp; support</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">{content.addOnsNote}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">Common questions</h3>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {content.faq.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="text-sm font-medium leading-6 text-white sm:text-base">{item.question}</span>
                  <span aria-hidden="true" className="shrink-0 text-xl font-light text-[#d4af37] transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
                </summary>
                <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-zinc-400">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
