import HeroSection from "@/components/home/hero-section"
import FeaturesSection from "@/components/home/features-section"
import VehicleShowcase from "@/components/home/vehicle-showcase"
import TestimonialsSection from "@/components/home/testimonials-section"
import PricingSection from "@/components/home/pricing-section"
import StatsSection from "@/components/home/stats-section"
import VinCheckSection from "@/components/home/vin-check-section"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* VIN Check Section */}
      <VinCheckSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Vehicle Showcase */}
      <VehicleShowcase />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}

