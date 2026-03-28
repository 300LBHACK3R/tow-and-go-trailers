import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Trailer Rentals",
    text: "Flexible rental options built around real jobs, not a one-size setup. Clean equipment, straightforward process, and a growing premium fleet.",
    points: [
      "Daily, weekly, and flexible rentals",
      "Premium blacked-out fleet",
      "Simple booking and support",
    ],
  },
  {
    title: "Delivery & Pickup",
    text: "Delivery and pickup available across the Okanagan to keep your job moving without extra hassle or wasted time.",
    points: [
      "Okanagan-wide coverage",
      "Flexible drop-off & pickup",
      "Quoted based on location",
    ],
  },
  {
    title: "Accessories & Support",
    text: "Optional add-ons to make each rental more capable, secure, and ready for the job.",
    points: [
      "Hitches & adapters",
      "Ratchet straps & tie-downs",
      "Cargo nets, boxes & blankets",
    ],
  },
];

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black py-24 md:py-28">
      {/* premium background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Services / Add-Ons"
          title="Built to make hauling easier."
          description="Tow-N-Go Trailers focuses on clean rentals, flexible support, and practical add-ons that make every job simpler, more capable, and more reliable."
          align="center"
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {/* gold accent line */}
              <div className="mb-6 h-px w-20 bg-gradient-to-r from-[#d4af37] to-transparent" />

              <h3 className="text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-300">
                {service.text}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/services" className="min-w-[220px]">
            View Full Services
          </Button>
        </div>
      </Container>
    </section>
  );
}