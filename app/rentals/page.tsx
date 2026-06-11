import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { TrailerCategoryCard } from "@/components/rentals/TrailerCategoryCard";
import { siteConfig } from "@/lib/site";
import {
  getCategoryPreviewImage,
  getCategoryTrailerCount,
  trailerCategories,
} from "@/data/trailerCategories";

export const metadata: Metadata = {
  title: "Trailer Rentals",
  description:
    "Browse Tow-N-Go Trailers by category, including enclosed trailers, dump trailers, flat deck trailers, dovetail trailers, and equipment hauling options across Kelowna and the Okanagan.",
  alternates: {
    canonical: `${siteConfig.url}/rentals`,
  },
  openGraph: {
    title: "Trailer Rentals in Kelowna & the Okanagan | Tow-N-Go Trailers",
    description:
      "Browse enclosed trailer rentals, dump trailer rentals, flat deck trailer rentals, and equipment trailer rentals from Tow-N-Go Trailers.",
    url: `${siteConfig.url}/rentals`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tow-N-Go Trailers rental fleet in the Okanagan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trailer Rentals in Kelowna & the Okanagan | Tow-N-Go Trailers",
    description: "Browse trailer rentals by category from Tow-N-Go Trailers.",
    images: ["/twitter-image.png"],
  },
};

const rentalsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/rentals#trailer-rentals`,
  name: "Trailer Rentals in Kelowna and the Okanagan",
  serviceType: "Trailer Rental",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: [
    "Kelowna",
    "West Kelowna",
    "Penticton",
    "Vernon",
    "Lake Country",
    "Armstrong",
    "Okanagan",
    "British Columbia",
  ],
  description:
    "Tow-N-Go Trailers provides premium trailer rentals across Kelowna and the Okanagan, including enclosed trailers, dump trailers, flat deck trailers, dovetail trailers, and equipment hauling options.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tow-N-Go Trailer Rental Categories",
    itemListElement: trailerCategories.map((category) => ({
      "@type": "Offer",
      name: category.title,
      url: `${siteConfig.url}/rentals/${category.id}`,
    })),
  },
};

export default function RentalsPage() {
  return (
    <>
      <PageViewTracker path="/rentals" title="Trailer Rentals" />
      <JsonLd data={rentalsJsonLd} />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/rentals-premium-fleet-flatdeck-dump-banner.png"
            alt="Flat deck, dump, and enclosed trailer rentals in the Okanagan"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.48),rgba(0,0,0,0.20),rgba(0,0,0,0.62))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),rgba(0,0,0,0.38))]" />
        </div>

        <Container className="relative z-10 flex min-h-[560px] items-center justify-center py-28 text-center md:min-h-[640px]">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Trailer Rentals
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Find the right trailer faster.
            </h1>

            <p className="mt-5 text-lg text-zinc-200 md:text-xl">
              Pricing starting at{" "}
              <span className="font-semibold text-[#d4af37]">$115/day</span>
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-xl">
              Browse Tow-N-Go Trailers by category. Choose enclosed trailers,
              dump trailers, or flat deck and equipment trailer options built
              for real work across Kelowna and the Okanagan.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#050505] py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.20),rgba(0,0,0,0.70))]" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
              Browse by Trailer Type
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Choose the right trailer for the job.
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              Select the trailer category that matches what you need to haul.
              Each rental type is organized by use case, making it easier to
              compare options for moving, cleanup jobs, equipment hauling,
              contractor work, and weekend projects.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {trailerCategories.map((category) => (
              <TrailerCategoryCard
                key={category.id}
                category={category}
                previewImage={getCategoryPreviewImage(category.id)}
                trailerCount={getCategoryTrailerCount(category.id)}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
