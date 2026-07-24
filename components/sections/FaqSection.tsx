import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import type { FaqItem } from "@/data/faqs";

type FaqSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  faqs: FaqItem[];
  className?: string;
  includeJsonLd?: boolean;
};

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-200 group-open:rotate-45"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function FaqSection({
  eyebrow = "Questions & Answers",
  title = "Common rental questions.",
  description = "Helpful answers for customers planning a trailer rental, pickup, delivery, payment, or hauling job.",
  faqs,
  className = "",
  includeJsonLd = true,
}: FaqSectionProps) {
  if (faqs.length === 0) {
    return null;
  }

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
      className={`relative isolate overflow-hidden border-t border-white/10 bg-[#050505] py-14 sm:py-16 lg:py-20 ${className}`}
    >
      {includeJsonLd && <JsonLd data={faqJsonLd} />}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.1),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_27%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.78))]"
      />

      <Container className="max-w-[1500px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white [text-wrap:balance]">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-6xl gap-3 sm:mt-10 sm:gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] shadow-[0_18px_60px_rgba(0,0,0,0.25)] transition duration-200 open:border-[#d4af37]/30 hover:border-[#d4af37]/35"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/45 to-transparent opacity-0 transition-opacity duration-200 group-open:opacity-100"
              />

              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 rounded-[1.35rem] px-5 py-4 text-left outline-none marker:hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d4af37]/70 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 text-base font-semibold leading-7 text-white sm:text-lg">
                  {faq.question}
                </span>

                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-black/40 text-[#d4af37] shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition duration-200 group-open:border-[#d4af37]/35 group-open:bg-[#d4af37]/10">
                  <PlusIcon />
                </span>
              </summary>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <div className="border-t border-white/10 pt-4">
                  <p className="max-w-5xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}