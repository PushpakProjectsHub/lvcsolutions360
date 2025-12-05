import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PlainSection from "@/components/PlainSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import EngineSection from "@/components/EngineSection";
import MetricsSection from "@/components/MetricsSection";
import PricingSection from "@/components/PricingSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import First30DaysSection from "@/components/First30DaysSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FounderSection from "@/components/FounderSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import PAPSection from "@/components/PAPSection";


export default function HomePage() {
  return (
    <main className="bg-bg-deep text-white">
      <HeroSection />
      <TrustBar />
      <PlainSection />
      <BeforeAfterSection />
      <WhyDifferentSection />
      <EngineSection />
      <MetricsSection />
      <PricingSection />
      <PAPSection />
      <AdmissionsSection />
      <First30DaysSection />
      <TestimonialsSection />
      <FounderSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
