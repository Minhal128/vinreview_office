import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src="/logo-light.png" alt="Vinreview" className="h-10" />
            </Link>
            <p className="text-gray-400 mb-6">
              We provide everything you need to build an amazing dealership website developed especially for car sellers
              dealers or auto motor retailers.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">861 E Cherry Hills Dr Chandler, AZ 85249</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">contact@vinreview.com</span>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-6 relative">
              Useful Links
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-red-600 -mb-2"></span>
            </h6>
            <ul className="space-y-3">
              <li>
                <Link href="/ownership" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Ownership and Title Information
                </Link>
              </li>
              <li>
                <Link href="/odometer" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Odometer Readings
                </Link>
              </li>
              <li>
                <Link href="/accident" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Accident and Damage History
                </Link>
              </li>
              <li>
                <Link href="/recall" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Recall Information
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-6 relative">
              Recent Reports
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-red-600 -mb-2"></span>
            </h6>
            <div className="space-y-4">
              <div className="flex">
                <img src="/images/car/01.jpg" alt="Car" className="w-16 h-12 object-cover rounded" />
                <div className="ml-3">
                  <Link href="/vin-report" className="text-gray-400 hover:text-white transition-colors">
                    Time to change your car?
                  </Link>
                  <p className="text-gray-500 text-sm mt-1 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Dec 15, 2024
                  </p>
                </div>
              </div>
              <div className="flex">
                <img src="/images/car/02.jpg" alt="Car" className="w-16 h-12 object-cover rounded" />
                <div className="ml-3">
                  <Link href="/vin-report" className="text-gray-400 hover:text-white transition-colors">
                    The best time to buy
                  </Link>
                  <p className="text-gray-500 text-sm mt-1 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Dec 01, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-6 relative">
              Subscribe Our Newsletter
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-red-600 -mb-2"></span>
            </h6>
            <p className="text-gray-400 mb-4">
              Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our
              newsletter.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-gray-800 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            ©Copyright 2025 | Developed by
            <a
              href="https://ashbdevtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-500 ml-1"
            >
              IT Inventive
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

