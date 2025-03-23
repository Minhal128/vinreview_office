"use client"

import { useRouter } from "next/navigation"

const packages = [
  {
    id: "basic",
    name: "Silver Package",
    price: 35,
    features: ["1 Vehicle Report", "Ownership Costs", "Market Value Range", "Owner's History"],
  },
  {
    id: "standard",
    name: "Gold Package",
    price: 45,
    features: [
      "1 Vehicle Report",
      "Ownership Costs",
      "Market Value Range",
      "Owner's History",
      "Vehicle Specifications",
      "Safety Recall Status",
    ],
  },
  {
    id: "premium",
    name: "Platinum Package",
    price: 65,
    features: [
      "1 Vehicle Report",
      "Ownership Costs",
      "Market Value Range",
      "Owner's History",
      "Vehicle Specifications",
      "Safety Recall Status",
      "Warranties",
    ],
  },
]

export default function ServicePackages() {
  const router = useRouter()

  const handleSelectPackage = (packageId: string) => {
    router.push(`/checkout?package=${packageId}`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600"
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
              <div>
                <p className="text-gray-500 text-sm">individuals</p>
                <h3 className="font-bold text-xl">{pkg.name}</h3>
              </div>
            </div>
          </div>

          <div className="p-6">
            <p className="mb-4">
              <span className="text-2xl font-bold">${pkg.price}</span>
              <span className="text-gray-500"> /monthly</span>
            </p>

            <h4 className="font-bold mb-2">What's included</h4>
            <ul className="mb-6 space-y-2">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSelectPackage(pkg.id)}
              className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors font-medium"
            >
              Get started
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

