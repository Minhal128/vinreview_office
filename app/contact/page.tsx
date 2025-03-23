import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Vinreview",
  description: "Get in touch with the Vinreview team for questions, support, or feedback",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Have questions or need assistance? We're here to help. Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary-600 mb-6"></div>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Whether you have a question about our services, need help with a report, or
                want to provide feedback, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">861 E Cherry Hills Dr, Chandler, AZ 85249</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@vinreview.com</p>
                    <p className="text-gray-600">support@vinreview.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">(480) 555-0123</p>
                    <p className="text-gray-600">(480) 555-0124</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Email
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Write your message here..." rows={6} required />
                    </div>
                    <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Find Us</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Visit our office to speak with our team in person. We're conveniently located in Chandler, Arizona.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.9612033581384!2d-111.9398!3d33.2487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE0JzU1LjMiTiAxMTHCsDU2JzIzLjMiVw!5e0!3m2!1sen!2sus!4v1625160000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Find answers to common questions about contacting us and our support services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">What is your response time for inquiries?</h3>
                <p className="text-gray-600">
                  We strive to respond to all inquiries within 24 hours during business days. For urgent matters, we
                  recommend calling our customer support line.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer phone support?</h3>
                <p className="text-gray-600">
                  Yes, our customer support team is available by phone during our business hours. You can reach us at
                  (480) 555-0123.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  How can I report an issue with my vehicle history report?
                </h3>
                <p className="text-gray-600">
                  If you believe there's an error in your report, please contact our support team with your report ID
                  and details about the issue. We'll investigate and make corrections if necessary.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Can I visit your office in person?</h3>
                <p className="text-gray-600">
                  Yes, you're welcome to visit our office during business hours. We recommend scheduling an appointment
                  in advance to ensure that the appropriate team member is available to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

