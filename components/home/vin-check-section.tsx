"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"

export default function VinCheckSection() {
  const [vinNumber, setVinNumber] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (vinNumber.trim()) {
      router.push(`/checkout?vin=${encodeURIComponent(vinNumber)}`)
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1283&q=80"
          alt="Car background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Check Any Vehicle's History in Seconds</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Enter a VIN number to instantly access accident history, ownership records, title information, and more.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
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
            </form>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                  <span className="text-primary-500 font-semibold">1</span>
                </div>
                <span className="text-white">Enter VIN</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                  <span className="text-primary-500 font-semibold">2</span>
                </div>
                <span className="text-white">Choose Package</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                  <span className="text-primary-500 font-semibold">3</span>
                </div>
                <span className="text-white">Get Report</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Sample VIN Report</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-bold text-lg">2018 Toyota Camry</h4>
                    <p className="text-gray-500 text-sm">VIN: 4T1B11HK5JU123456</p>
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Clean Title
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500 text-xs mb-1">Accidents</p>
                      <p className="font-semibold">No accidents reported</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500 text-xs mb-1">Owners</p>
                      <p className="font-semibold">2 previous owners</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500 text-xs mb-1">Last Odometer</p>
                      <p className="font-semibold">45,230 miles</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500 text-xs mb-1">Usage Type</p>
                      <p className="font-semibold">Personal vehicle</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h5 className="font-semibold mb-2">Vehicle History Timeline</h5>
                    <div className="space-y-3">
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                          <div className="w-0.5 h-full bg-gray-200"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">January 2023</p>
                          <p className="text-xs text-gray-500">Odometer reading: 45,230 miles</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                          <div className="w-0.5 h-full bg-gray-200"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">October 2022</p>
                          <p className="text-xs text-gray-500">Registration renewed</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">June 2022</p>
                          <p className="text-xs text-gray-500">Ownership transferred</p>
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

