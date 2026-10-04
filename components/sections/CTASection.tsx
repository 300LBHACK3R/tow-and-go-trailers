import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function CTASection() {
  return (
    <section aria-labelledby="rental-inquiry-heading" className="relative overflow-hidden border-t border-white/10 bg-[#0a0a09] py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.10),transparent_65%)]" />
      <Container className="relative">
        <div className="grid items-center gap-9 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#e6c978]">
              <span aria-hidden="true" className="h-px w-9 bg-[#d4af37]" />
              Your next project
            </p>
            <h2 id="rental-inquiry-heading" className="mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.6rem)] font-semibold leading-[1.07] tracking-[-0.045em] text-white [text-wrap:balance]">
              Let’s get the right trailer behind you.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
              Tell us what you’re moving, where it needs to go and when.
              We’ll confirm the trailer, service options, availability and pricing.
            </p>
          </div>
          <div className="lg:border-l lg:border-white/10 lg:pl-12">
            <p className="text-sm leading-7 text-zinc-300">Rent and tow it yourself, arrange an empty-trailer delivery, or ask us to transport your prepared load.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href="/contact" className="whitespace-nowrap">Start an Enquiry <span aria-hidden="true" className="ml-3">↗</span></Button>
              <Button href={siteConfig.phoneHref} variant="secondary" className="whitespace-nowrap">{siteConfig.phone}</Button>
            </div>
            <p className="mt-5 text-xs leading-6 text-zinc-500">Kelowna · The Okanagan &amp; beyond</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
