import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact / Booking Inquiry"
        title="Send a rental inquiry."
        description="Tow-N-Go Trailers is keeping things simple: send your details, let us know what trailer you need, and we’ll review your request directly."
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Get in touch</h2>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                    Phone
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="mt-2 block text-lg text-white hover:text-[#d4af37]"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                    Email
                  </p>
                  <a
                    href={siteConfig.emailHref}
                    className="mt-2 block text-lg text-white hover:text-[#d4af37]"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                    Service Area
                  </p>
                  <p className="mt-2 text-zinc-300">{siteConfig.serviceArea}</p>
                  <p className="mt-2 text-xs text-zinc-500">
                    Delivery and pickup are centered around the Okanagan.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                    Hours
                  </p>
                  <p className="mt-2 text-zinc-300">
                    Flexible hours available. Contact us for current availability.
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}