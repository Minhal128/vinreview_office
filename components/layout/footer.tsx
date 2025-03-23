import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center">
                <img src="/logo.png" alt="Vinreview" className="h-10 w-auto mr-2" />
                <span className="font-bold text-xl">Vinreview</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Providing comprehensive vehicle history reports to help you make informed decisions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-gray-400">861 E Cherry Hills Dr, AZ 85249</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-gray-400">contact@vinreview.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-gray-400">(480) 555-0123</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/service" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Our Services</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/service" className="text-gray-400 hover:text-white transition-colors">
                  Vehicle History Reports
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-400 hover:text-white transition-colors">
                  Accident History
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-400 hover:text-white transition-colors">
                  Title Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Stay Connected</h6>
            <p className="text-gray-400 mb-4">Follow us on social media for updates and automotive insights.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Vinreview. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

