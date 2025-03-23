"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Car, Shield, FileText, Search, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [vinNumber, setVinNumber] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (vinNumber.trim()) {
      router.push(`/checkout?vin=${encodeURIComponent(vinNumber)}`)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Unlock Your Vehicle's <span className="text-primary-500">Complete History</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Make informed decisions with comprehensive vehicle history reports. Verify VIN, check for accidents, and
              confirm ownership records.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Enter VIN Number"
                  value={vinNumber}
                  onChange={(e) => setVinNumber(e.target.value)}
                  className="pl-10 py-6 bg-white/10 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-primary-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button type="submit" size="lg" className="bg-primary-600 hover:bg-primary-700 text-white">
                Check VIN
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>

            <motion.div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8" variants={itemVariants}>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500/20 mr-3">
                  <Shield className="h-5 w-5 text-primary-500" />
                </div>
                <span className="text-gray-300">Trusted by 2M+ Users</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500/20 mr-3">
                  <FileText className="h-5 w-5 text-primary-500" />
                </div>
                <span className="text-gray-300">100M+ Reports Generated</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-30 blur-xl"></div>

              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-1">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Luxury car dashboard"
                    className="w-full h-auto rounded-xl"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className="flex items-center mb-3">
                        <Car className="h-5 w-5 text-primary-500 mr-2" />
                        <h3 className="text-white font-semibold">Vehicle Report Summary</h3>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Accidents:</span>
                          <span className="text-white font-medium">None</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Owners:</span>
                          <span className="text-white font-medium">2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Odometer:</span>
                          <span className="text-white font-medium">45,230 mi</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Title:</span>
                          <span className="text-white font-medium">Clean</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

