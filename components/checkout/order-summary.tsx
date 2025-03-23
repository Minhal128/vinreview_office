import type React from "react"
import { Shield } from "./icons"

interface OrderSummaryProps {
  packageInfo: {
    id: string
    name: string
    price: number
    description: string
    icon?: React.ReactNode
  }
  vinNumber?: string
}

export default function OrderSummary({ packageInfo, vinNumber }: OrderSummaryProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{packageInfo.name}</h3>
            <p className="text-gray-500 text-sm">{packageInfo.description}</p>
            {vinNumber && <p className="text-gray-500 text-sm mt-1">VIN: {vinNumber}</p>}
          </div>
          <span className="font-bold">${packageInfo.price.toFixed(2)}</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span>${packageInfo.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Tax</span>
          <span>${(packageInfo.price * 0.08).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${(packageInfo.price * 1.08).toFixed(2)}</span>
        </div>
      </div>

      <div className="bg-green-50 p-3 rounded-lg border border-green-200 flex items-start">
        <Shield className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-green-800">Secure Transaction</p>
          <p className="text-xs text-green-700">
            Your payment information is protected with industry-standard encryption.
          </p>
        </div>
      </div>
    </div>
  )
}

