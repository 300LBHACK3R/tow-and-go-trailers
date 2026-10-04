import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { RecentJobs } from "@/components/sections/RecentJobs";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGalleryEntries } from "@/data/projectGallery";
import { getPublishedJobs } from "@/data/recentJobs";
import { siteConfig, socialImage } from "@/lib/site";

const publishedJobs = getPublishedJobs();
const galleryEntries = getGalleryEntries();
const hasJobs = publishedJobs.length > 0;
const hasExamples = galleryEntries.some((entry) => entry.kind === "example");
const pageTitle = "On the Job";
const socialTitle = "On the Job | Tow-N-Go Trailers";
const description = hasJobs
  ? "Explore Tow-N-Go trailer projects, with job photos and details about trailer rentals, delivery and load transport."
  : hasExamples
    ? "Picture your next haul with illustrative trailer scenes. These are project ideas, not completed customer jobs. Explore Tow-N-Go rentals, delivery and transport."
    : "The Tow-N-Go customer project gallery is coming soon. Explore trailer rentals, trailer delivery and load transport in Kelowna and the Okanagan.";
const firstPhoto = galleryEntries[0]?.project.image;
const galleryImage = firstPhoto ? {
  url: new URL(firstPhoto.src, siteConfig.url).toString(),
  width: firstPhoto.width,
  height: firstPhoto.height,
  alt: firstPhoto.alt,
} : socialImage;

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: { canonical: `${siteConfig.url}/recent-jobs` },
  // Illustrative examples never make this page indexable as completed work.
  robots: { index: hasJobs, follow: true },
  openGraph: {
    images: [galleryImage],
    title: socialTitle,
    description,
    url: `${siteConfig.url}/recent-jobs`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description,
    images: [{ url: galleryImage.url, alt: galleryImage.alt }],
  },
};

export default function RecentJobsPage() {
  return (
    <main className="overflow-x-clip bg-[#080907]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: "On the Job", item: `${siteConfig.url}/recent-jobs` },
          ],
        }}
      />
      <PageHero
        eyebrow="The gallery"
        title="On the Job"
        breadcrumb="On the Job"
        image={{
          src: "/images/tow-and-go-southland-dovetail-deckover-trailer-kelowna-angled-view-03.jpg",
          alt: "An empty black Southland flatdeck trailer with a timber deck",
          position: "58% 63%",
          mobilePosition: "55% 63%",
        }}
        description={hasJobs
          ? "A closer look at the trailers and services behind our customer projects."
          : hasExamples
            ? "From moving day to a garden refresh. Explore a few ideas for the job ahead, and find a trailer to make it happen."
            : "Our customer project gallery is on its way. Explore the fleet and find a trailer for the job ahead."}
      />
      <RecentJobs fullPage />
      <CTASection />
    </main>
  );
}
