import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Vinreview",
  description: "Learn about Vinreview and our mission to provide comprehensive vehicle history reports",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vinreview</h1>
            <p className="text-xl text-gray-300">
              We're on a mission to bring transparency to the vehicle marketplace through detailed and accurate
              reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-primary-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Vinreview was born out of a simple idea: car buyers deserve to know exactly what
                they're getting. Our founder, after being misled about a vehicle's history during a purchase, decided to
                create a solution that would help others avoid similar situations.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small project has grown into a comprehensive platform trusted by millions of users
                across the country. Our team of automotive experts and data scientists work tirelessly to ensure that
                every report we provide is accurate, comprehensive, and easy to understand.
              </p>
              <p className="text-gray-600">
                Today, Vinreview is a leading provider of vehicle history reports, helping consumers make informed
                decisions and bringing transparency to the used car market.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-30 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Car dealership"
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              At Vinreview, our mission is to empower consumers with the information they need to make confident vehicle
              purchasing decisions. We believe in transparency, accuracy, and accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">
                We believe in full disclosure. Our reports include all available information about a vehicle, good or
                bad, so you can make an informed decision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
              <p className="text-gray-600">
                We source our data from reliable databases including state DMVs, insurance companies, auto auctions, and
                service facilities to ensure the highest level of accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We make vehicle history information accessible to everyone. Our reports are easy to understand,
                affordable, and available instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Meet the experienced professionals who lead Vinreview and share our commitment to transparency in the
              automotive industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="CEO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Anderson</h3>
                <p className="text-primary-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 20 years of experience in the automotive industry, Michael leads our company with a passion
                  for consumer advocacy and technological innovation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                alt="CTO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-primary-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Sarah oversees our technical operations, ensuring that our platform delivers accurate and
                  comprehensive vehicle history reports using the latest technology.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="COO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Martinez</h3>
                <p className="text-primary-600 mb-4">Chief Operating Officer</p>
                <p className="text-gray-600">
                  David brings extensive operational expertise to Vinreview, focusing on scaling our services while
                  maintaining the highest standards of quality and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Experience the Vinreview difference today. Get comprehensive vehicle history reports instantly.
            </p>
            <Link href="/service">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8">
                View Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

