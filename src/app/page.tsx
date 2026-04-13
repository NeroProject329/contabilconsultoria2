import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
