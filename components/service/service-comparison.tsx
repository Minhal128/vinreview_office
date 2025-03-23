"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Ownership History",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    feature: "Title Information",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    feature: "Accident Records",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    feature: "Odometer Readings",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    feature: "Market Value Range",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    feature: "Vehicle Specifications",
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    feature: "Service Records",
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    feature: "Safety Recall Status",
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    feature: "Warranty Information",
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    feature: "Theft History",
    silver: false,
    gold: false,
    platinum: true,
  },
]

export default function ServiceComparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Package Comparison</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Compare our packages to find the one that best suits your needs.</p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200">Feature</th>
                <th className="p-4 text-center bg-gray-50 border-b-2 border-gray-200">Silver Package</th>
                <th className="p-4 text-center bg-primary-50 border-b-2 border-primary-200">Gold Package</th>
                <th className="p-4 text-center bg-gray-50 border-b-2 border-gray-200">Platinum Package</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-4 border-b border-gray-200 font-medium">{row.feature}</td>
                  <td className="p-4 border-b border-gray-200 text-center">
                    {row.silver ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 border-b border-primary-100 text-center bg-primary-50">
                    {row.gold ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 border-b border-gray-200 text-center">
                    {row.platinum ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="p-4 border-b border-gray-200 font-bold">Price</td>
                <td className="p-4 border-b border-gray-200 text-center font-bold">$35/month</td>
                <td className="p-4 border-b border-primary-100 text-center font-bold bg-primary-50">$45/month</td>
                <td className="p-4 border-b border-gray-200 text-center font-bold">$65/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

