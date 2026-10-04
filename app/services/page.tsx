import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { siteConfig, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trailer Rentals, Delivery & Transport",
  description:
    "Rent a trailer, arrange empty-trailer delivery and collection, or request loaded transport with Tow-N-Go Trailers in Kelowna and the Okanagan.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Trailer Rentals, Delivery & Transport | Tow-N-Go Trailers",
    description:
      "Trailer rentals, empty-trailer delivery and collection, and pickup, transport and delivery across Kelowna and the Okanagan.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trailer Rentals, Delivery & Transport | Tow-N-Go Trailers",
    description:
      "Trailer rentals, empty-trailer delivery and collection, and pickup, transport and delivery across Kelowna and the Okanagan.",
    images: [socialImage.url],
  },
};

export default function ServicesPage() {
  return (
    <main className="overflow-x-clip bg-[#090a09]">
      <PageHero
        eyebrow="Rentals / Delivery / Transport"
        title="Three ways to get the job moving."
        description="Tow it yourself, have an empty rental trailer brought to you, or arrange transport for cargo you prepare and load. Choose the service that fits your job."
        breadcrumb="Services"
        image={{
          src: "/images/services-add-ons-premium-trailer-banner.png",
          alt: "Tow-N-Go trailer services and add-ons in the Okanagan",
          position: "70% 55%",
          mobilePosition: "78% 58%",
        }}
      />

      <ServicesPreview details />
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-7 border-t border-[#d4af37]/30 pt-9 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-2xl font-semibold text-white">Need the extras?</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">Ask about a hitch, ratchet straps, cargo nets, boxes or moving blankets with your inquiry. Accessory availability and pricing depend on the trailer and your requirements.</p>
            </div>
            <Button href="/contact#inquiry">Ask about accessories</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
