"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check, X, Shield, FileText, Car } from "lucide-react"

const packages = [
  {
    id: "basic",
    name: "Silver Package",
    icon: <FileText className="h-6 w-6" />,
    price: 35,
    description: "Essential vehicle history for budget-conscious buyers",
    features: [
      { name: "1 Vehicle Report", included: true },
      { name: "Ownership History", included: true },
      { name: "Title Information", included: true },
      { name: "Accident Records", included: true },
      { name: "Odometer Readings", included: true },
      { name: "Market Value Range", included: true },
      { name: "Vehicle Specifications", included: false },
      { name: "Service Records", included: false },
      { name: "Safety Recall Status", included: false },
      { name: "Warranty Information", included: false },
    ],
  },
  {
    id: "standard",
    name: "Gold Package",
    icon: <Car className="h-6 w-6" />,
    price: 45,
    description: "Comprehensive coverage for most vehicle buyers",
    popular: true,
    features: [
      { name: "1 Vehicle Report", included: true },
      { name: "Ownership History", included: true },
      { name: "Title Information", included: true },
      { name: "Accident Records", included: true },
      { name: "Odometer Readings", included: true },
      { name: "Market Value Range", included: true },
      { name: "Vehicle Specifications", included: true },
      { name: "Service Records", included: true },
      { name: "Safety Recall Status", included: true },
      { name: "Warranty Information", included: false },
    ],
  },
  {
    id: "premium",
    name: "Platinum Package",
    icon: <Shield className="h-6 w-6" />,
    price: 65,
    description: "Complete vehicle insights for serious buyers and dealers",
    features: [
      { name: "1 Vehicle Report", included: true },
      { name: "Ownership History", included: true },
      { name: "Title Information", included: true },
      { name: "Accident Records", included: true },
      { name: "Odometer Readings", included: true },
      { name: "Market Value Range", included: true },
      { name: "Vehicle Specifications", included: true },
      { name: "Service Records", included: true },
      { name: "Safety Recall Status", included: true },
      { name: "Warranty Information", included: true },
    ],
  },
]

export default function PricingSection() {
  const router = useRouter()
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const handleSelectPackage = (packageId: string) => {
    router.push(`/checkout?package=${packageId}`)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">Select the perfect package for your vehicle history needs.</p>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                billingPeriod === "monthly"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                billingPeriod === "yearly" ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg border ${
                pkg.popular ? "border-primary-500" : "border-gray-200"
              } relative`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-6 border-b border-gray-200">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">
                    ${billingPeriod === "yearly" ? Math.round(pkg.price * 0.8) : pkg.price}
                  </span>
                  <span className="text-gray-500 ml-1">/{billingPeriod === "yearly" ? "year" : "month"}</span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold mb-4">What's included:</h4>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleSelectPackage(pkg.id)}
                  className={`w-full ${
                    pkg.popular
                      ? "bg-primary-600 hover:bg-primary-700 text-white"
                      : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

