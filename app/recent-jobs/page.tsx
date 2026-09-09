import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { RecentJobs } from "@/components/sections/RecentJobs";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPublishedJobs } from "@/data/recentJobs";
import { siteConfig } from "@/lib/site";

const description =
  "Explore Tow-N-Go trailer projects and updates from Kelowna and the Okanagan. Plan your next trailer rental, delivery or transport inquiry.";
export const metadata: Metadata = {
  title: "Recent Jobs & Trailer Projects",
  description,
  alternates: { canonical: `${siteConfig.url}/recent-jobs` },
  // The gallery becomes indexable automatically when real approved entries are added.
  robots: getPublishedJobs().length
    ? { index: true, follow: true }
    : { index: false, follow: true },
  openGraph: {
    title: "Recent Jobs | Tow-N-Go Trailers",
    description,
    url: `${siteConfig.url}/recent-jobs`,
    type: "website",
  },
};

export default function RecentJobsPage() {
  return (
    <main className="overflow-x-clip bg-[#050505]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Recent Jobs",
              item: `${siteConfig.url}/recent-jobs`,
            },
          ],
        }}
      />
      <section className="border-b border-white/10 bg-[#0b0b0b] py-16 sm:py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
            Tow-N-Go in action
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Recent jobs.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Trailers for moving days, workdays and everything you have planned
            next.
          </p>
        </Container>
      </section>
      <RecentJobs fullPage />
      <CTASection />
    </main>
  );
}
