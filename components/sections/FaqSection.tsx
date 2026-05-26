import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import type { FaqItem } from "@/data/faqs";

type FaqSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  faqs: FaqItem[];
  className?: string;
  includeJsonLd?: boolean;
};

export function FaqSection({
  eyebrow = "Questions & Answers",
  title = "Common rental questions.",
  description = "Helpful answers for customers planning a trailer rental, pickup, delivery, payment, or hauling job.",
  faqs,
  className = "",
  includeJsonLd = true,
}: FaqSectionProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      className={`relative overflow-hidden border-t border-white/10 bg-[#050505] py-20 md:py-24 ${className}`}
    >
      {includeJsonLd && <JsonLd data={faqJsonLd} />}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.78))]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-base leading-8 text-zinc-400">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition hover:border-[#d4af37]/35 md:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left">
                <span className="text-base font-semibold text-white md:text-lg">
                  {faq.question}
                </span>

                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-black/40 text-lg font-semibold text-[#d4af37] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}