import { JsonLd } from "@/components/seo/JsonLd";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import {
  testimonials,
  type Testimonial,
} from "@/data/testimonials";
import { siteConfig } from "@/lib/site";

type TestimonialsSectionProps = {
  items?: Testimonial[];
  includeJsonLd?: boolean;
};

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
        worstRating: 1,
      },
      reviewBody: item.quote,
    })),
  };

  return (
    <>
      {includeJsonLd && items.length > 0 && (
        <JsonLd data={reviewJsonLd} />
      )}

      <ReviewsSection />
    </>
  );
}