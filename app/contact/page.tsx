import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/industrial-trailers-under-dramatic-skies.png"
            alt="Premium Tow-N-Go trailer rentals in the Okanagan"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.48),rgba(0,0,0,0.20),rgba(0,0,0,0.62))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),rgba(0,0,0,0.38))]" />
        </div>

        <Container className="relative z-10">
          <div className="flex min-h-[430px] flex-col items-center justify-center px-4 py-24 text-center md:min-h-[500px]">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#d4af37]">
              Contact / Booking Inquiry
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Send a rental inquiry.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-xl">
              Tell us what you need, your timing, and any details about the job.
              We’ll review your request and get back to you directly with
              availability and next steps.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">
                Get in touch
              </h2>

              <p className="mt-3 text-sm text-zinc-400">
                Quick response times. Direct communication. No unnecessary back
                and forth.
              </p>

              <div className="mt-8 space-y-6">
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

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                    Service Area
                  </p>

                  <p className="mt-2 text-zinc-300">
                    {siteConfig.serviceArea}
                  </p>

                  <p className="mt-2 text-xs text-zinc-500">
                    Delivery and pickup are based in the Okanagan. Trailers can
                    be used across BC, Alberta, and beyond.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                    Hours
                  </p>

                  <p className="mt-2 text-zinc-300">
                    Flexible availability depending on bookings. Reach out
                    anytime to check current openings.
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