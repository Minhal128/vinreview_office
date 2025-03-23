export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Vinreview</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8">
            Vinreview is a premier provider of vehicle history reports, delivering comprehensive solutions for used car
            buyers, sellers, and dealerships. Our mission is to bring transparency to the vehicle marketplace through
            detailed and accurate reporting.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:contact@vinreview.com"
              className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

