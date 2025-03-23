"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface PaymentFormProps {
  amount: number
}

export default function PaymentForm({ amount }: PaymentFormProps) {
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryMonth, setExpiryMonth] = useState("")
  const [expiryYear, setExpiryYear] = useState("")
  const [cvv, setCvv] = useState("")
  const [isFlipped, setIsFlipped] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would process the payment here
    // For this demo, we'll just redirect to a success page
    router.push("/vin-report")
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  return (
    <div className="relative">
      <div className={`mb-8 transition-all duration-500 ${isFlipped ? "opacity-0" : "opacity-100"}`}>
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg p-4 h-48 relative overflow-hidden shadow-lg">
          <div className="absolute top-4 left-4">
            <div className="w-12 h-8 bg-yellow-400 rounded opacity-70"></div>
          </div>

          <div className="absolute top-16 left-4 right-4">
            <p className="text-gray-300 text-xs mb-1">Card Number</p>
            <p className="text-white text-lg font-mono tracking-wider">{cardNumber || "•••• •••• •••• ••••"}</p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <div>
              <p className="text-gray-300 text-xs mb-1">Card Holder</p>
              <p className="text-white font-mono">{cardName || "YOUR NAME"}</p>
            </div>
            <div>
              <p className="text-gray-300 text-xs mb-1">Expires</p>
              <p className="text-white font-mono">
                {expiryMonth || "MM"}/{expiryYear || "YY"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mb-8 absolute top-0 left-0 right-0 transition-all duration-500 ${isFlipped ? "opacity-100" : "opacity-0"}`}
      >
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg p-4 h-48 relative overflow-hidden shadow-lg">
          <div className="w-full h-12 bg-black mt-4"></div>

          <div className="mt-4 flex justify-end">
            <div className="bg-gray-200 h-10 w-3/4 flex items-center justify-end pr-4">
              <p className="font-mono text-gray-800">{cvv || "•••"}</p>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <div className="w-12 h-8 bg-yellow-400 rounded opacity-70"></div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-medium mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cardName" className="block text-gray-700 text-sm font-medium mb-2">
            Card Holder Name
          </label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="John Doe"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="expiryMonth" className="block text-gray-700 text-sm font-medium mb-2">
              Expiry Month
            </label>
            <select
              id="expiryMonth"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => {
                const month = i + 1
                return (
                  <option key={month} value={month < 10 ? `0${month}` : month}>
                    {month < 10 ? `0${month}` : month}
                  </option>
                )
              })}
            </select>
          </div>

          <div>
            <label htmlFor="expiryYear" className="block text-gray-700 text-sm font-medium mb-2">
              Expiry Year
            </label>
            <select
              id="expiryYear"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            >
              <option value="">Year</option>
              {Array.from({ length: 10 }, (_, i) => {
                const year = new Date().getFullYear() + i
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                )
              })}
            </select>
          </div>

          <div>
            <label htmlFor="cvv" className="block text-gray-700 text-sm font-medium mb-2">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
              onFocus={() => setIsFlipped(true)}
              onBlur={() => setIsFlipped(false)}
              placeholder="123"
              maxLength={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          Pay ${amount.toFixed(2)}
        </button>
      </form>
    </div>
  )
}

