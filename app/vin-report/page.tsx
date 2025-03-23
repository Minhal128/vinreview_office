"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Car, FileText, DollarSign, Users, Calendar, Check, X, Download, Share2 } from "lucide-react"

export default function VinReportPage() {
  const [activeTab, setActiveTab] = useState("history")

  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h1 className="text-2xl font-bold mb-1">Vehicle History Report</h1>
                  <p className="text-gray-300">VIN: JNKCA31A3YT124016</p>
                  <p className="text-gray-300">2000 INFINITI I30 BASE / TOURING</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            <Tabs defaultValue="history" value={activeTab} onValueChange={setActiveTab}>
              <div className="px-6 pt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="history" className="flex items-center justify-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Vehicle History
                  </TabsTrigger>
                  <TabsTrigger value="specs" className="flex items-center justify-center">
                    <Car className="h-4 w-4 mr-2" />
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger value="value" className="flex items-center justify-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Market Value
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="history" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Clean Title</h3>
                        <p className="text-gray-600 text-sm">No salvage, rebuilt, or other title brands</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Last Title Date</span>
                        <span className="font-medium">June 12, 2022</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Title State</span>
                        <span className="font-medium">California</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Title Number</span>
                        <span className="font-medium">CA12345678</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">No Accidents Reported</h3>
                        <p className="text-gray-600 text-sm">No reported accidents or damage</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Structural Damage</span>
                        <span className="font-medium text-green-600">None Reported</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Airbag Deployment</span>
                        <span className="font-medium text-green-600">None Reported</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Odometer Rollback</span>
                        <span className="font-medium text-green-600">None Reported</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Ownership History</h3>
                <div className="relative mb-8">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                  <div className="space-y-6">
                    <div className="relative pl-12">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center border-4 border-white">
                        <Users className="h-4 w-4 text-primary-600" />
                      </div>
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <h4 className="font-semibold">Owner 2 (Current)</h4>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                            <p className="text-gray-500 text-sm">Purchased</p>
                            <p className="font-medium">June 2022</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Location</p>
                            <p className="font-medium">California</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Estimated Length</p>
                            <p className="font-medium">1 year, 2 months</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Estimated Miles Driven</p>
                            <p className="font-medium">12,430</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-12">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white">
                        <Users className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <h4 className="font-semibold">Owner 1</h4>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                            <p className="text-gray-500 text-sm">Purchased</p>
                            <p className="font-medium">March 2018</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Location</p>
                            <p className="font-medium">Nevada</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Estimated Length</p>
                            <p className="font-medium">4 years, 3 months</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Estimated Miles Driven</p>
                            <p className="font-medium">32,800</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Vehicle History Timeline</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                  <div className="space-y-6">
                    <div className="relative pl-12">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center border-4 border-white">
                        <Calendar className="h-4 w-4 text-primary-600" />
                      </div>
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <h4 className="font-semibold">January 2023</h4>
                        <div className="mt-2">
                          <p className="text-gray-500 text-sm">Odometer Reading</p>
                          <p className="font-medium">45,230 miles</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-12">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white">
                        <Calendar className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <h4 className="font-semibold">October 2022</h4>
                        <div className="mt-2">
                          <p className="text-gray-500 text-sm">Registration Renewed</p>
                          <p className="font-medium">California</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-12">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white">
                        <Calendar className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <h4 className="font-semibold">June 2022</h4>
                        <div className="mt-2">
                          <p className="text-gray-500 text-sm">Ownership Transferred</p>
                          <p className="font-medium">Title issued to new owner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specs" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-lg mb-4">Vehicle Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Year</span>
                        <span className="font-medium">2000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Make</span>
                        <span className="font-medium">Infiniti</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Model</span>
                        <span className="font-medium">I30 Base / Touring</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Trim Level</span>
                        <span className="font-medium">-</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Style</span>
                        <span className="font-medium">Sedan 4D</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Made In</span>
                        <span className="font-medium">Japan</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-lg mb-4">Engine & Transmission</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Engine</span>
                        <span className="font-medium">3.0L V6</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Fuel Type</span>
                        <span className="font-medium">Gasoline</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Transmission</span>
                        <span className="font-medium">4-Speed Automatic</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Drivetrain</span>
                        <span className="font-medium">Front-Wheel Drive</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Horsepower</span>
                        <span className="font-medium">227 hp @ 6400 rpm</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Torque</span>
                        <span className="font-medium">217 lb-ft @ 4000 rpm</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-lg mb-4">Dimensions & Capacity</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Length</span>
                        <span className="font-medium">193.7 in</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Width</span>
                        <span className="font-medium">70.2 in</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Height</span>
                        <span className="font-medium">56.9 in</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Wheelbase</span>
                        <span className="font-medium">108.3 in</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Curb Weight</span>
                        <span className="font-medium">3,342 lbs</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Fuel Capacity</span>
                        <span className="font-medium">18.5 gal</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-lg mb-4">Safety & Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Driver Airbag</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Passenger Airbag</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Anti-lock Braking System (ABS)</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Power Windows</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Power Door Locks</span>
                      </div>
                      <div className="flex items-start">
                        <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500">Navigation System</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="value" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-lg mb-4">Estimated Market Value</h3>
                    <div className="flex items-center justify-center mb-6">
                      <span className="text-4xl font-bold text-primary-600">$5,200 - $6,800</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      This estimate is based on similar vehicles in your area, considering the vehicle's condition,
                      mileage, and history.
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Retail Value</span>
                        <span className="font-medium">$6,800</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Private Party Value</span>
                        <span className="font-medium">$5,900</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Trade-In Value</span>
                        <span className="font-medium">$5,200</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-lg mb-4">Price Factors</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-600">Mileage Impact</span>
                          <span className="text-yellow-600 font-medium">Moderate</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full w-1/2"></div>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">
                          Vehicle has average mileage for its age, which has a moderate impact on its value.
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-600">Condition Impact</span>
                          <span className="text-green-600 font-medium">Positive</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">
                          Vehicle appears to be in good condition with no reported accidents.
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-600">Market Demand</span>
                          <span className="text-yellow-600 font-medium">Moderate</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full w-1/2"></div>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">
                          This model has moderate demand in the current market.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Similar Vehicles in Your Area</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="h-40 bg-gray-200">
                        <img
                          src={`https://images.unsplash.com/photo-158358966${i}000-5c83b4ba16d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60`}
                          alt="Similar vehicle"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium">2000 Infiniti I30</h4>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-600 text-sm">{42000 + i * 5000} miles</span>
                          <span className="font-bold">${5800 + i * 300}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

