"use client"

import { motion } from "framer-motion"
import { Users, FileCheck, ShieldCheck, Star } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "2M+",
    label: "Satisfied Users",
    description: "Trusted by millions of car buyers and sellers",
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    value: "100M+",
    label: "Reports Generated",
    description: "Comprehensive vehicle history reports",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    value: "99.9%",
    label: "Data Accuracy",
    description: "Reliable information you can trust",
  },
  {
    icon: <Star className="h-8 w-8" />,
    value: "4.8/5",
    label: "Customer Rating",
    description: "Based on thousands of reviews",
  },
]

export default function StatsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Millions Worldwide</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Join the millions of satisfied customers who rely on our comprehensive vehicle history reports.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">{stat.value}</h3>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">{stat.label}</h4>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

