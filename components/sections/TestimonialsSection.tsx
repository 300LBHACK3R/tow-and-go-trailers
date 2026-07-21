import { ReviewsSection } from "@/components/sections/ReviewsSection";
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
        <span key={index}>{index < rating ? "â˜…" : "â˜†"}</span>
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
    <ReviewsSection />
  );
}