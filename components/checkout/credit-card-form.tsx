// "use client"

// import type React from "react"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// interface CreditCardFormProps {
//   amount: number
// }

// export default function CreditCardForm({ amount }: CreditCardFormProps) {
//   const router = useRouter()
//   const [cardNumber, setCardNumber] = useState("")
//   const [cardName, setCardName] = useState("")
//   const [expiryMonth, setExpiryMonth] = useState("")
//   const [expiryYear, setExpiryYear] = useState("")
//   const [cvv, setCvv] = useState("")
//   const [isFlipped, setIsFlipped] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // In a real application, you would process the payment here
//     // For this demo, we'll just redirect to a success page
//     router.push("/vin-report")
//   }

//   const formatCardNumber = (value: string) => {
//     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
//     const matches = v.match(/\d{4,16}/g)
//     const match = (matches && matches[0]) || ""
//     const parts = []

//     for (let i = 0, len = match.length; i < len; i += 4) {
//       parts.push(match.substring(i, i + 4))
//     }

//     if (parts.length) {
//       return parts.join(" ")
//     } else {
//       return value
//     }
//   }

//   return (
//     <div className="relative">
//       <div className={`mb-8 transition-all duration-500 ${isFlipped ? "opacity-0" : "opacity-100"}`}>
//         <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 h-56 relative overflow-hidden shadow-lg">
//           <div className="absolute top-4 left-4">
//             <div className="w-12 h-8 bg-yellow-400 rounded opacity-70"></div>
//           </div>

//           <div className="absolute top-16 left-4 right-4">
//             <p className="text-gray-300 text-xs mb-1">Card Number</p>
//             <p className="text-white text-lg font-mono tracking-wider">{cardNumber || "•••• •••• •••• ••••"}</p>
//           </div>

//           <div className="absolute bottom-4 left-4 right-4 flex justify-between">
//             <div>
//               <p className="text-gray-300 text-xs mb-1">Card Holder</p>
//               <p className="text-white font-mono">{cardName || "YOUR NAME"}</p>
//             </div>
//             <div>
//               <p className="text-gray-300 text-xs mb-1">Expires</p>
//               <p className="text-white font-mono">
//                 {expiryMonth || "MM"}/{expiryYear || "YY"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`mb-8 absolute top-0 left-0 right-0 transition-all duration-500 ${isFlipped ? "opacity-100" : "opacity-0"}`}
//       >
//         <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 h-56 relative overflow-hidden shadow-lg">
//           <div className="w-full h-12 bg-black mt-4"></div>

//           <div className="mt-4 flex justify-end">
//             <div className="bg-gray-200 h-10 w-3/4 flex items-center justify-end pr-4">
//               <p className="font-mono text-gray-800">{cvv || "•••"}</p>
//             </div>
//           </div>

//           <div className="absolute bottom-4 right-4">
//             <div className="w-12 h-8 bg-yellow-400 rounded opacity-70"></div>
//           </div>
//         </div>
//       </div>

//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <div className="space-y-4">
//           <div>
//             <Label htmlFor="cardNumber">Card Number</Label>
//             <Input
//               id="cardNumber"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
//               placeholder="1234 5678 9012 3456"
//               maxLength={19}
//               className="mt-1"
//               required
//             />
//           </div>

//           <div>
//             <Label htmlFor="cardName">Card Holder Name</Label>
//             <Input
//               id="cardName"
//               value={cardName}
//               onChange={(e) => setCardName(e.target.value)}
//               placeholder="John Doe"
//               className="mt-1"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-3 gap-4">
//             <div>
//               <Label htmlFor="expiryMonth">Expiry Month</Label>
//               <Select value={expiryMonth} onValueChange={setExpiryMonth}>
//                 <SelectTrigger id="expiryMonth" className="mt-1">
//                   <SelectValue placeholder="Month" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {Array.from({ length: 12 }, (_, i) => {
//                     const month = i + 1
//                     return (
//                       <SelectItem key={month} value={month < 10 ? `0${month}` : `${month}`}>
//                         {month < 10 ? `0${month}` : month}
//                       </SelectItem>
//                     )
//                   })}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Label htmlFor="expiryYear">Expiry Year</Label>
//               <Select value={expiryYear} onValueChange={setExpiryYear}>
//                 <SelectTrigger id="expiryYear" className="mt-1">
//                   <SelectValue placeholder="Year" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {Array.from({ length: 10 }, (_, i) => {
//                     const year = new Date().getFullYear() + i
//                     return (
//                       <SelectItem key={year} value={`${year}`}>
//                         {year}
//                       </SelectItem>
//                     )
//                   })}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Label htmlFor="cvv">CVV</Label>
//               <Input
//                 id="cvv"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
//                 onFocus={() => setIsFlipped(true)}
//                 onBlur={() => setIsFlipped(false)}
//                 placeholder="123"
//                 maxLength={4}
//                 className="mt-1"
//                 required
//               />
//             </div>
//           </div>

//           <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white mt-6" size="lg">
//             Pay ${amount.toFixed(2)}
//           </Button>
//         </div>
//       </motion.form>
//     </div>
//   )
// }

"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast" // Assuming you have a toast component

interface CreditCardFormProps {
  amount: number
}

// PayPal window interface
interface PayPalWindow extends Window {
  paypal?: any
}

export default function CreditCardForm({ amount }: CreditCardFormProps) {
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryMonth, setExpiryMonth] = useState("")
  const [expiryYear, setExpiryYear] = useState("")
  const [cvv, setCvv] = useState("")
  const [isFlipped, setIsFlipped] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [sdkReady, setSdkReady] = useState(false)
  
  const cardHolderNameRef = useRef<HTMLInputElement>(null)
  const cardNumberElementRef = useRef<HTMLDivElement>(null)
  const expiryDateElementRef = useRef<HTMLDivElement>(null)
  const cvvElementRef = useRef<HTMLDivElement>(null)

  // Load PayPal SDK
  useEffect(() => {
    // Prevent duplicate script loading
    if (document.querySelector('script[src*="paypal.com/sdk/js"]')) {
      setSdkReady(true)
      return
    }
    
    const script = document.createElement("script")
    // Include card fields in the SDK
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'sb'}&components=hosted-fields`
    script.async = true
    script.onload = () => {
      setSdkReady(true)
    }
    script.onerror = () => {
      console.error("Failed to load PayPal SDK")
      toast({
        title: "Error",
        description: "Failed to load payment processor. Please try again.",
        variant: "destructive"
      })
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // Initialize PayPal hosted fields when SDK is ready
  useEffect(() => {
    if (!sdkReady) return

    // Get PayPal from window
    const paypalWindow = window as unknown as PayPalWindow
    
    if (paypalWindow.paypal && paypalWindow.paypal.HostedFields) {
      try {
        paypalWindow.paypal.HostedFields.render({
          createOrder: () => {
            return fetch('/api/create-paypal-order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                amount: amount
              })
            }).then((res) => res.json())
              .then((orderData) => orderData.id)
              .catch(err => {
                console.error('Error creating order:', err)
                throw err
              })
          },
          styles: {
            'input': {
              'font-size': '16px',
              'font-family': 'Arial, sans-serif',
              'color': '#333'
            },
            '.valid': {
              'color': 'green'
            },
            '.invalid': {
              'color': 'red'
            }
          },
          fields: {
            number: {
              selector: '#card-number',
              placeholder: '4111 1111 1111 1111'
            },
            cvv: {
              selector: '#cvv',
              placeholder: '123'
            },
            expirationDate: {
              selector: '#expiration-date',
              placeholder: 'MM/YYYY'
            }
          }
        }).then(hostedFields => {
          // Store hostedFields instance for later use
          (window as any).hostedFieldsInstance = hostedFields
        }).catch(err => {
          console.error('Error rendering hosted fields:', err)
          toast({
            title: "Error",
            description: "Payment system initialization failed. Please try again later.",
            variant: "destructive"
          })
        })
      } catch (error) {
        console.error('Error setting up PayPal hosted fields:', error)
      }
    }
  }, [sdkReady, amount])

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const paypalWindow = window as unknown as PayPalWindow
      const hostedFieldsInstance = (window as any).hostedFieldsInstance
      
      if (!hostedFieldsInstance) {
        throw new Error("Payment system not initialized yet")
      }

      const { liabilityShifted, liabilityShift } = await hostedFieldsInstance.submit({
        cardholderName: cardName
      })

      // If 3D Secure is available and the liability shift is possible
      if (liabilityShift === 'POSSIBLE' && !liabilityShifted) {
        toast({
          title: "Payment Error",
          description: "Your bank declined the payment. Please try a different payment method.",
          variant: "destructive"
        })
        setIsLoading(false)
        return
      }

      // Payment successful - you would handle actual transaction completion here
      toast({
        title: "Payment Successful",
        description: "Your payment has been processed successfully.",
      })
      
      // Redirect to the report page
      router.push("/vin-report")
    } catch (error: any) {
      console.error('Payment error:', error)
      toast({
        title: "Payment Failed",
        description: error.message || "There was a problem processing your payment. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative">
      <div className={`mb-8 transition-all duration-500 ${isFlipped ? "opacity-0" : "opacity-100"}`}>
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 h-56 relative overflow-hidden shadow-lg">
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
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 h-56 relative overflow-hidden shadow-lg">
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

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="cardName">Card Holder Name</Label>
            <Input
              id="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="John Doe"
              className="mt-1"
              required
              ref={cardHolderNameRef}
            />
          </div>

          <div>
            <Label htmlFor="card-number">Card Number</Label>
            <div id="card-number" className="border rounded-md p-2 mt-1 h-10"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiration-date">Expiration Date</Label>
              <div id="expiration-date" className="border rounded-md p-2 mt-1 h-10"></div>
            </div>

            <div>
              <Label htmlFor="cvv">CVV</Label>
              <div 
                id="cvv" 
                className="border rounded-md p-2 mt-1 h-10"
                onFocus={() => setIsFlipped(true)}
                onBlur={() => setIsFlipped(false)}
              ></div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Your card will be processed securely through PayPal, but you won't need a PayPal account.
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary-600 hover:bg-primary-700 text-white mt-6" 
            size="lg"
            disabled={isLoading || !sdkReady}
          >
            {isLoading ? (
              <>
                <div className="animate-spin mr-2 h-4 w-4 border-b-2 border-white rounded-full"></div>
                Processing...
              </>
            ) : (
              `Pay $${amount.toFixed(2)}`
            )}
          </Button>
        </div>
      </motion.form>
    </div>
  )
}