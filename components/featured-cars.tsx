import Link from "next/link"

const featuredCars = [
  {
    id: 1,
    name: "Lexus GS 450h",
    image: "/images/car/02.jpg",
    year: 2018,
    transmission: "Manual",
    mileage: "6,000 mi",
    oldPrice: "$35,568",
    newPrice: "$32,698",
    rating: 4,
  },
  {
    id: 2,
    name: "Acura Rsx",
    image: "/images/car/01.jpg",
    year: 2018,
    transmission: "Manual",
    mileage: "6,000 mi",
    oldPrice: "$35,568",
    newPrice: "$32,698",
    rating: 4,
  },
  {
    id: 3,
    name: "Honda Civic",
    image: "/images/car/05.jpeg",
    year: 2024,
    transmission: "Manual",
    mileage: "6,000 mi",
    oldPrice: "$35,568",
    newPrice: "$32,698",
    rating: 5,
  },
]

export default function FeaturedCars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredCars.map((car) => (
        <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link
                href="/vin-report"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </Link>
            </div>
          </div>

          <div className="p-4 bg-gray-100 border-b border-gray-200">
            <ul className="flex justify-between text-sm text-gray-600">
              <li className="flex items-center">
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
                {car.year}
              </li>
              <li className="flex items-center">
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {car.transmission}
              </li>
              <li className="flex items-center">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                {car.mileage}
              </li>
            </ul>
          </div>

          <div className="p-4">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${i < car.rating ? "text-yellow-500" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <Link
              href="/vin-report"
              className="text-lg font-semibold text-red-600 hover:text-red-700 transition-colors"
            >
              {car.name}
            </Link>

            <div className="w-16 h-1 bg-gray-300 my-3"></div>

            <div className="flex items-center">
              <span className="text-gray-500 line-through mr-2">{car.oldPrice}</span>
              <span className="text-lg font-bold">{car.newPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

