"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface VinInputProps {
  dark?: boolean
}

export default function VinInput({ dark = true }: VinInputProps) {
  const [vinNumber, setVinNumber] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (vinNumber.trim()) {
      router.push(`/checkout?vin=${encodeURIComponent(vinNumber)}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center max-w-md ${dark ? "bg-gray-800/80" : "bg-gray-100"} rounded-lg overflow-hidden border ${dark ? "border-white/30" : "border-gray-300"}`}
    >
      <input
        type="text"
        placeholder="Enter VIN Number"
        value={vinNumber}
        onChange={(e) => setVinNumber(e.target.value)}
        className={`flex-1 p-3 outline-none ${dark ? "bg-gray-800/80 text-white" : "bg-gray-100 text-gray-800"} placeholder-gray-500`}
      />
      <button type="submit" className="bg-red-600 text-white p-3 font-medium hover:bg-red-700 transition-colors">
        Check VIN
      </button>
    </form>
  )
}

