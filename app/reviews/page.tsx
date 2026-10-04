import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { socialImage } from "@/lib/site";

const SITE_URL = "https://www.towandgotrailers.ca";
const PAGE_PATH = "/reviews";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Customer Reviews | Tow-N-Go Trailers Kelowna & Okanagan";

const PAGE_DESCRIPTION =
  "Read customer reviews for Tow-N-Go Trailers and see why renters across Kelowna and the Okanagan choose our clean, dependable trailer rentals and local service.";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },

  description: PAGE_DESCRIPTION,

  applicationName: "Tow-N-Go Trailers",

  alternates: {
    canonical: CANONICAL_URL,
  },

  openGraph: {
    images: [socialImage],
    type: "website",
    locale: "en_CA",
    url: CANONICAL_URL,
    siteName: "Tow-N-Go Trailers",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },

  twitter: {
    images: [socialImage.url],
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Trailer Rentals",
};

const reviewsPageStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: "en-CA",

      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },

      about: {
        "@id": `${SITE_URL}/#business`,
      },

      breadcrumb: {
        "@id": `${CANONICAL_URL}#breadcrumb`,
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL_URL}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },

        {
          "@type": "ListItem",
          position: 2,
          name: "Customer Reviews",
          item: CANONICAL_URL,
        },
      ],
    },
  ],
};

function serializeJsonLd(
  value: Record<string, unknown>,
): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            reviewsPageStructuredData,
          ),
        }}
      />

      <main  className="bg-[#171717] text-white">
        <PageHero
          eyebrow="Customer reviews"
          title="Good service. In their words."
          description="Experiences with our enclosed, dump, flatdeck, and dovetail trailer rentals from customers across Kelowna, West Kelowna, and the Okanagan."
          breadcrumb="Reviews"
          image={{
            src: "/images/heroes/reviews-premium.webp",
            alt: "Black enclosed trailer with its rear ramp closed outside a workshop at sunset",
            position: "68% 60%",
            mobilePosition: "90% 58%",
          }}
        />

        <ReviewsSection />

        <section className="border-t border-white/10 bg-[#111111] py-16 sm:py-20" aria-labelledby="reviews-cta-heading">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Your next job</p>
                <h2 id="reviews-cta-heading" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                  Find the right trailer.
                </h2>
                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Tell us what you need to move. Rental, delivery, pickup, and transport options may be available depending on the job, location, and schedule.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/rentals">Browse trailers</Button>
                <Button href="/contact" variant="secondary">Request a rental</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
