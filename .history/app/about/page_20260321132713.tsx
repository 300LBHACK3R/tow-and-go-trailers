import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A local family-run business with a clear goal."
        description="Tow-N-Go Trailers Ltd. was started by Chad and Melissa Muxlow and is built around a simple idea: make hauling easier with a clean, reliable, premium trailer rental experience."
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface p-8">
              <h2 className="text-2xl font-semibold text-white">Our Story</h2>
              <p className="mt-4 leading-8 text-zinc-300">
                Tow-N-Go Trailers Ltd. is proudly based in the Okanagan and started
                as a growing part-time business while both owners continue to work full time.
                The vision is to grow the company into a full-time operation with a strong
                reputation for reliability, quality equipment, and customer-first service.
              </p>
              <p className="mt-4 leading-8 text-zinc-300">
                The fleet is being built with a blacked-out, premium, sleek identity in mind.
                That same look and standard will carry forward into future trailers and future growth.
              </p>
            </div>

            <div className="surface p-8">
              <h3 className="text-xl font-semibold text-white">Why customers choose us</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
                <li>• Local owners building the business properly</li>
                <li>• Premium-looking, growing fleet</li>
                <li>• Flexible rental options</li>
                <li>• Delivery and pickup availability</li>
                <li>• Straightforward inquiry process</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}