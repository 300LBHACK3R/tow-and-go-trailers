import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrailerPreview } from "@/components/sections/TrailerPreview";

export default function HomePage() {
  return (
    <main className="overflow-x-clip bg-[#050505]">
      <Hero />
      <TrailerPreview />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}