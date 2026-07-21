import { JsonLd } from "@/components/seo/JsonLd";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { siteConfig } from "@/lib/site";

type TestimonialsSectionProps = {
  items?: Testimonial[];
  includeJsonLd?: boolean;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div
      aria-label={`${rating} out of 5 stars`}
      className="flex gap-1 text-[#d4af37]"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>{index < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export function TestimonialsSection({
  items = testimonials,
  includeJsonLd = true,
}: TestimonialsSectionProps) {
  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    review: items.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: item.rating,
        bestRating: 5,
      },
      reviewBody: item.quote,
    })),
  };

  return (
    <section className="section-padding relative overflow-hidden border-y border-white/10 bg-[#050505]">
      {includeJsonLd && <JsonLd data={reviewJsonLd} />}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.11),transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.20),rgba(0,0,0,0.85))]" />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
              Customer Feedback
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Real rentals. Real reviews.
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              Reviews help customers see that Tow-N-Go Trailers is active,
              dependable, and focused on making the rental experience smooth
              from booking to drop-off.
            </p>

            <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af37]">
                Trust Signals
              </p>

              <div className="mt-4 grid gap-3 text-sm text-zinc-300">
                <div className="flex gap-3">
                  <span className="text-[#d4af37]">✓</span>
                  Clean, dependable trailers
                </div>
                <div className="flex gap-3">
                  <span className="text-[#d4af37]">✓</span>
                  Helpful rental support
                </div>
                <div className="flex gap-3">
                  <span className="text-[#d4af37]">✓</span>
                  Pickup and delivery options may be available
                </div>
                <div className="flex gap-3">
                  <span className="text-[#d4af37]">✓</span>
                  Cash, e-transfer, and credit card accepted
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {items.map((item) => (
              <article
                key={`${item.name}-${item.quote.slice(0, 18)}`}
                className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] md:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <Stars rating={item.rating} />

                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {item.name}
                    </h3>

                    {item.dateLabel && (
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {item.dateLabel}
                      </p>
                    )}
                  </div>

                  {item.source && (
                    <div className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-semibold text-zinc-300">
                      {item.source}
                    </div>
                  )}
                </div>

                <blockquote className="mt-6 text-base leading-8 text-zinc-300">
                  “{item.quote}”
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}