"use client"

import { motion } from "framer-motion"
import { Shield, FileText, Clock, AlertTriangle, Users, Car, DollarSign, Gauge } from "lucide-react"

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
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Odometer Verification",
    description: "Detect potential odometer fraud by reviewing the vehicle's recorded mileage history.",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Market Value Analysis",
    description: "Compare the asking price against current market values to ensure you're getting a fair deal.",
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Service Records",
    description: "Review maintenance history to understand how well the vehicle has been cared for.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Instant Results",
    description: "Access your comprehensive vehicle report immediately after purchase, no waiting required.",
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Vehicle History Insights</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Our detailed reports provide everything you need to make informed decisions about your next vehicle
            purchase.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

