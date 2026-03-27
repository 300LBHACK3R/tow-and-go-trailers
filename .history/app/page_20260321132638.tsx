import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { TrailerPreview } from "@/components/sections/TrailerPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TrailerPreview />
      <ServicesPreview />
      <CTASection />
    </>
  );
}