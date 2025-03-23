"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Settings, Gauge, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const vehicles = [
  {
    id: 1,
    name: "2020 Tesla Model 3",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    year: 2020,
    transmission: "Automatic",
    mileage: "18,500 mi",
    price: "$39,900",
    rating: 5,
    status: "Clean Title",
  },
  {
    id: 2,
    name: "2019 BMW 5 Series",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    year: 2019,
    transmission: "Automatic",
    mileage: "32,400 mi",
    price: "$36,500",
    rating: 4,
    status: "Clean Title",
  },
  {
    id: 3,
    name: "2021 Audi Q5",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    year: 2021,
    transmission: "Automatic",
    mileage: "15,200 mi",
    price: "$45,800",
    rating: 5,
    status: "Clean Title",
  },
  {
    id: 4,
    name: "2018 Mercedes-Benz E-Class",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    year: 2018,
    transmission: "Automatic",
    mileage: "42,700 mi",
    price: "$34,200",
    rating: 4,
    status: "Clean Title",
  },
]

export default function VehicleShowcase() {
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0])

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Vehicles</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Browse our selection of premium vehicles with verified history reports.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-30 blur-xl"></div>

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-1">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                <img
                  src={activeVehicle.image || "/placeholder.svg"}
                  alt={activeVehicle.name}
                  className="w-full h-[350px] object-cover rounded-t-xl"
                />

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">{activeVehicle.name}</h3>
                    <div className="bg-green-900/30 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full border border-green-800">
                      {activeVehicle.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <p className="text-xs text-gray-400">Year</p>
                        <p className="font-medium">{activeVehicle.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <p className="text-xs text-gray-400">Transmission</p>
                        <p className="font-medium">{activeVehicle.transmission}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Gauge className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <p className="text-xs text-gray-400">Mileage</p>
                        <p className="font-medium">{activeVehicle.mileage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Price</p>
                      <p className="text-2xl font-bold text-white">{activeVehicle.price}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < activeVehicle.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/vin-report">
                      <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                        View Vehicle History
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`bg-gray-800 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg ${activeVehicle.id === vehicle.id ? "ring-2 ring-primary-500" : ""}`}
                onClick={() => setActiveVehicle(vehicle)}
              >
                <div className="relative h-40">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-gray-900/80 text-white text-xs font-medium px-2 py-1 rounded">
                    {vehicle.year}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-white mb-1">{vehicle.name}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-sm">{vehicle.mileage}</p>
                    <p className="font-bold text-primary-500">{vehicle.price}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="sm:col-span-2 mt-4">
              <Link href="/vehicles">
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  View All Vehicles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

