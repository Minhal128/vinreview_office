import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Vinreview" className="h-12" />
            <span className="ml-2 text-xl font-bold text-gray-800">Vinreview</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="/service" className="text-gray-700 hover:text-red-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-red-600 transition-colors">
              Testimonials
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/service"
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

