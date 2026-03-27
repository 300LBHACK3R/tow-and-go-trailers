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
        description="Tell us what you need, your timing, and any details about the job. We’ll review your request and get back to you directly with availability and next steps."
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            
            {/* LEFT PANEL */}
            <div className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">
                Get in touch
              </h2>

              <p className="mt-3 text-sm text-zinc-400">
                Quick response times. Direct communication. No unnecessary back and forth.
              </p>

              <div className="mt-8 space-y-6">
                
                {/* PHONE */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                    Phone
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="mt-2 block text-lg text-white transition hover:text-[#d4af37]"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                {/* EMAIL */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                    Email
                  </p>
                  <a
                    href={siteConfig.emailHref}
                    className="mt-2 block text-lg text-white transition hover:text-[#d4af37]"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                {/* SERVICE AREA */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                    Service Area
                  </p>

                  <p className="mt-2 text-zinc-300">
                    {siteConfig.serviceArea}
                  </p>

                  <p className="mt-2 text-xs text-zinc-500">
                    Delivery and pickup are based in the Okanagan. Trailers can be used across BC, Alberta, and beyond.
                  </p>
                </div>

                {/* HOURS */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                    Hours
                  </p>
                  <p className="mt-2 text-zinc-300">
                    Flexible availability depending on bookings. Reach out anytime to check current openings.
                  </p>
                </div>

              </div>
            </div>

            {/* FORM */}
            <ContactForm />

          </div>
        </Container>
      </section>
    </>
  );
}