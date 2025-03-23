"use client"

import { motion } from "framer-motion"
import { Shield, FileText, AlertTriangle, Users } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Comprehensive Reports",
    description: "Get detailed insights into a vehicle's past, ensuring transparency and confidence in your purchase.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Title Verification",
    description: "Verify clean titles and avoid salvage, rebuilt, or flood-damaged vehicles with our thorough checks.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Accident History",
    description: "Uncover past accidents, damage reports, and structural issues that might affect vehicle value.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Ownership Records",
    description: "Track the number of previous owners and how the vehicle was used throughout its lifetime.",
  },
]

export default function ServiceFeatures() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Our vehicle history reports provide comprehensive information to help you make informed decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-white rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

