"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, PaypalIcon, ChevronRight, Shield, FileText, Car } from "@/components/checkout/icons"
import CreditCardForm from "@/components/checkout/credit-card-form"
import PaypalCheckout from "@/components/checkout/paypal-checkout"
import OrderSummary from "@/components/checkout/order-summary"

const packages = {
  basic: {
    id: "basic",
    name: "Silver Package",
    icon: <FileText className="h-6 w-6" />,
    price: 35,
    description: "Essential vehicle history for budget-conscious buyers",
  },
  standard: {
    id: "standard",
    name: "Gold Package",
    icon: <Car className="h-6 w-6" />,
    price: 45,
    description: "Comprehensive coverage for most vehicle buyers",
  },
  premium: {
    id: "premium",
    name: "Platinum Package",
    icon: <Shield className="h-6 w-6" />,
    price: 65,
    description: "Complete vehicle insights for serious buyers and dealers",
  },
}

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const vinNumber = searchParams.get("vin")
  const packageType = searchParams.get("package") || "basic"

  const [selectedPackage, setSelectedPackage] = useState(packages.basic)
  const [paymentMethod, setPaymentMethod] = useState("card")

  useEffect(() => {
    if (packageType && packages[packageType as keyof typeof packages]) {
      setSelectedPackage(packages[packageType as keyof typeof packages])
    }
  }, [packageType])

  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="flex items-center text-sm text-gray-500">
              <span>Home</span>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span>Services</span>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-gray-900 font-medium">Checkout</span>
            </div>
          </div>

          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <h1 className="text-2xl font-bold">Checkout</h1>
              {vinNumber && <p className="text-gray-300 mt-2">VIN: {vinNumber}</p>}
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="paypal" className="flex items-center justify-center">
                          <PaypalIcon className="h-5 w-5 mr-2" />
                          PayPal
                        </TabsTrigger>
                        <TabsTrigger value="card" className="flex items-center justify-center">
                          <CreditCard className="h-5 w-5 mr-2" />
                          Credit Card
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="card">
                        <CreditCardForm amount={selectedPackage.price} />
                      </TabsContent>

                      <TabsContent value="paypal">
                        <PaypalCheckout amount={selectedPackage.price} />
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <OrderSummary packageInfo={selectedPackage} vinNumber={vinNumber || undefined} />

                  <div className="mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                        <p className="text-sm text-gray-600">
                          Your payment information is encrypted and secure. We never store your credit card details.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

