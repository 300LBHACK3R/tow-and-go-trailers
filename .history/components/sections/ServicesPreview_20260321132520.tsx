import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Trailer Rentals",
    text: "Flexible rental options for the current fleet with room to expand as the business grows.",
  },
  {
    title: "Delivery & Pickup",
    text: "Delivery and pickup are available across the Okanagan Valley, with flexible arrangements depending on the job.",
  },
  {
    title: "Accessories & Support",
    text: "Hitches, ratchet straps, cargo nets, boxes, moving blankets, and related add-ons are available based on the trailer and rental need.",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding border-y border-white/10 bg-white/[0.02]">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Simple now, built to grow later."
          description="Tow-N-Go Trailers is focused on doing rentals properly right now, with a long-term direction toward transport, hotshots, expanded trailer options, and more service flexibility as the company grows."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="surface p-6">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{service.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}