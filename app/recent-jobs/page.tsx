import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { RecentJobs } from "@/components/sections/RecentJobs";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGalleryEntries } from "@/data/projectGallery";
import { siteConfig, socialImage } from "@/lib/site";

const galleryEntries = getGalleryEntries();
const hasEntries = galleryEntries.length > 0;
const hasJobs = galleryEntries.some((entry) => entry.kind === "job");
const pageTitle = "On the Job";
const socialTitle = "On the Job | Tow-N-Go Trailers";
const description = hasEntries
  ? "Explore Tow-N-Go trailers in use for renovation cleanup, landscaping, moving and equipment projects. Trailer rentals serving Kelowna and the Okanagan."
  : "Our customer job gallery is coming soon: Tow-N-Go trailers at work on moves, material runs and hauling projects around Kelowna and the Okanagan.";
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
  // Index the populated gallery without representing supplied photos as verified jobs.
  robots: { index: hasEntries, follow: true },
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
        eyebrow={hasJobs ? "Customer projects & trailers in use" : "Trailers in use"}
        title="On the Job"
        breadcrumb="On the Job"
        image={{
          src: "/images/heroes/on-the-job-premium.webp",
          alt: "Illustrative scene of an empty black flatdeck trailer at a residential construction site",
          position: "68% 60%",
          mobilePosition: "90% 58%",
        }}
        description={hasEntries
          ? "Renovation cleanups, landscaping, moving day and equipment projects. Explore the fleet in use, with trailer rental options for Kelowna, the Okanagan and beyond."
          : "Our trailers. Your projects. A closer look at customer jobs and the trailers that help make them happen. Photos coming soon."}
      />
      <RecentJobs fullPage />
      <CTASection />
    </main>
  );
}
