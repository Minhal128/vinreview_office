import type { Metadata } from "next"
import ServicePackages from "@/components/service/service-packages"
import ServiceFeatures from "@/components/service/service-features"
import ServiceFAQ from "@/components/service/service-faq"
import ServiceComparison from "@/components/service/service-comparison"
import ServiceTestimonials from "@/components/service/service-testimonials"
import ServiceCTA from "@/components/service/service-cta"

export const metadata: Metadata = {
  title: "Services - Vinreview",
  description: "Choose the right vehicle history report package for your needs",
}

export default function ServicePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Choose the right package for your vehicle history needs. Our comprehensive reports provide the information
              you need to make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <ServicePackages />

      {/* Service Features */}
      <ServiceFeatures />

      {/* Service Comparison */}
      <ServiceComparison />

      {/* Service Testimonials */}
      <ServiceTestimonials />

      {/* Service FAQ */}
      <ServiceFAQ />

      {/* Service CTA */}
      <ServiceCTA />
    </main>
  )
}

