import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { CTASection } from "@/components/sections/CTASection";
import { RecentJobs } from "@/components/sections/RecentJobs";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TrailerPreview } from "@/components/sections/TrailerPreview";

export const metadata: Metadata = {
  description: siteConfig.description,
  openGraph: {
    title: "Tow-N-Go Trailers | Trailer Rentals in Kelowna & the Okanagan",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/okanagan-trailer-rentals-dump-enclosed-flatdeck-black-trailers.jpg",
        width: 1200,
        height: 630,
        alt: "Tow-N-Go trailer rentals in the Okanagan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tow-N-Go Trailers | Trailer Rentals in Kelowna & the Okanagan",
    description: siteConfig.description,
    images: [
      "/images/okanagan-trailer-rentals-dump-enclosed-flatdeck-black-trailers.jpg",
    ],
  },
};

export default function HomePage() {
  return (
    <main className="overflow-x-clip bg-[#050505]">
      <Hero />
      <ServicesPreview />
      <TrailerPreview />
      <RecentJobs />
      <CTASection />
    </main>
  );
}
