import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { RecentJobs } from "@/components/sections/RecentJobs";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPublishedJobs } from "@/data/recentJobs";
import { siteConfig, socialImage } from "@/lib/site";

const publishedJobs = getPublishedJobs();
const hasJobs = publishedJobs.length > 0;
const pageTitle = "On the Job";
const socialTitle = "On the Job | Tow-N-Go Trailers";
const description = hasJobs
  ? "See Tow-N-Go trailers at work on real customer jobs around Kelowna and the Okanagan, with project photos, trailer details and the services provided."
  : "Our customer job gallery is coming soon: Tow-N-Go trailers at work on moves, material runs and hauling projects around Kelowna and the Okanagan.";
const firstPhoto = publishedJobs[0]?.image;
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
        eyebrow="Customer projects"
        title="On the Job"
        breadcrumb="On the Job"
        image={{
          src: "/images/heroes/on-the-job-premium.webp",
          alt: "Illustrative scene of an empty black flatdeck trailer at a residential construction site",
          position: "68% 60%",
          mobilePosition: "90% 58%",
        }}
        description={hasJobs
          ? "Our trailers. Your projects. See the fleet put to work on customer moves, material runs and hauling jobs around the Okanagan."
          : "Our trailers. Your projects. A closer look at customer jobs and the trailers that help make them happen. Photos coming soon."}
      />
      <RecentJobs fullPage />
      <CTASection />
    </main>
  );
}
