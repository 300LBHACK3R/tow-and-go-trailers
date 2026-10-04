import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { TrailerCategoryCard } from "@/components/rentals/TrailerCategoryCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import {
  getCategoryPreviewImage,
  getCategoryTrailerCount,
  getTrailersForCategory,
  trailerCategories,
} from "@/data/trailerCategories";
import { siteConfig, socialImage } from "@/lib/site";

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
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trailer Rentals in Kelowna & the Okanagan | Tow-N-Go Trailers",
    description: "Browse trailer rentals by category from Tow-N-Go Trailers.",
    images: [socialImage.url],
  },
};

const rentalsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/rentals#trailer-rentals`,
  name: "Trailer Rentals in Kelowna and the Okanagan",
  serviceType: "Trailer Rental",
  url: `${siteConfig.url}/rentals`,
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
      itemOffered: {
        "@type": "Service",
        name: category.title,
        serviceType: "Trailer Rental",
      },
    })),
  },
};

export default function RentalsPage() {
  return (
    <main className="overflow-x-clip bg-[#090a09]">
      <PageViewTracker path="/rentals" title="Trailer Rentals" />
      <JsonLd data={rentalsJsonLd} />

      <PageHero
        eyebrow="Trailer Rentals"
        title="The right trailer for the job."
        description="Choose enclosed trailers, dump trailers, or flat deck and equipment trailer options built for real work across Kelowna and the Okanagan."
        breadcrumb="Rentals"
        image={{
          src: "/images/heroes/fleet-premium.webp",
          alt: "Enclosed, dump and flatdeck trailer options in a black fleet at Okanagan sunset",
          position: "68% 60%",
          mobilePosition: "90% 58%",
        }}
      >
        <p className="text-sm text-zinc-300">Rentals from <span className="ml-1 text-xl font-semibold text-[#d4af37]">$115<span className="text-sm font-normal"> / day</span></span></p>
      </PageHero>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col gap-4 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">Our fleet</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">Browse by trailer type.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-zinc-400">Compare options for moving, cleanup, equipment hauling, contractor work, and weekend projects.</p>
          </div>
          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trailerCategories.map((category) => (
              <TrailerCategoryCard
                key={category.id}
                category={category}
                previewImage={getCategoryPreviewImage(category.id)}
                trailerCount={getCategoryTrailerCount(category.id)}
                trailer={getTrailersForCategory(category.id)[0]}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
