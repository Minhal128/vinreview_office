// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { PaypalIcon } from "./icons"

// interface PaypalCheckoutProps {
//   amount: number
// }

// export default function PaypalCheckout({ amount }: PaypalCheckoutProps) {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)

//   // Your PayPal email or merchant ID
//   const paypalEmail = "your-paypal-email@example.com" // Replace with your actual PayPal email

//   const handlePaypalCheckout = () => {
//     setIsLoading(true)

//     // Create the form data for the package
//     const formData = new FormData()
//     formData.append("cmd", "_xclick")
//     formData.append("business", paypalEmail)
//     formData.append("item_name", "Vehicle History Report")
//     formData.append("amount", amount.toString())
//     formData.append("currency_code", "USD")
//     formData.append("return", `${process.env.NEXT_PUBLIC_APP_URL || window.location.origin}/vin-report`)
//     formData.append("cancel_return", `${process.env.NEXT_PUBLIC_APP_URL || window.location.origin}/checkout`)

//     // Create a form element
//     const form = document.createElement("form")
//     form.method = "post"
//     form.action = "https://www.paypal.com/cgi-bin/webscr"
//     form.target = "_blank"

//     // Append all form data
//     for (const [key, value] of formData.entries()) {
//       const input = document.createElement("input")
//       input.type = "hidden"
//       input.name = key
//       input.value = value.toString()
//       form.appendChild(input)
//     }

//     // Add the form to the document and submit it
//     document.body.appendChild(form)
//     form.submit()

//     // Clean up
//     document.body.removeChild(form)
//     setIsLoading(false)
//   }

//   return (
//     <div>
//       <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
//         <div className="flex items-center mb-4">
//           <PaypalIcon className="h-6 w-6 text-[#0070ba] mr-2" />
//           <h3 className="font-medium">PayPal Checkout</h3>
//         </div>
//         <p className="text-gray-600 text-sm">
//           You will be redirected to PayPal to complete your payment securely. Once the payment is completed, you'll be
//           returned to access your vehicle report.
//         </p>
//       </div>

//       <button
//         onClick={handlePaypalCheckout}
//         disabled={isLoading}
//         className="w-full bg-[#0070ba] text-white py-3 px-4 rounded-lg hover:bg-[#003087] transition-colors font-medium flex items-center justify-center"
//       >
//         {isLoading ? (
//           <>
//             <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//             Processing...
//           </>
//         ) : (
//           <>
//             <PaypalIcon className="h-6 w-6 mr-2" />
//             Pay with PayPal
//           </>
//         )}
//       </button>

//       <button
//         onClick={handlePaypalCheckout}
//         disabled={isLoading}
//         className="w-full bg-[#ffc439] text-[#003087] py-3 px-4 rounded-lg hover:bg-[#f0b72b] transition-colors font-medium flex items-center justify-center mt-3"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//         </svg>
//         Pay Later
//       </button>

//       <button
//         onClick={handlePaypalCheckout}
//         disabled={isLoading}
//         className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center justify-center mt-3"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6 mr-2"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <rect width="20" height="14" x="2" y="5" rx="2" />
//           <line x1="2" x2="22" y1="10" y2="10" />
//         </svg>
//         Debit or Credit Card
//       </button>
//     </div>
//   )
// }

"use client"

import { useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { PaypalIcon } from "./icons"

// Define PayPal interface for TypeScript
interface PayPalWindow extends Window {
  paypal?: {
    Buttons: (config: PayPalButtonsConfig) => {
      render: (container: HTMLElement) => void
    }
  }
}

interface PayPalButtonsConfig {
  createOrder: (data: any, actions: any) => Promise<string>
  onApprove: (data: any, actions: any) => Promise<void>
  onError?: (err: any) => void
  onCancel?: () => void
}

interface PaypalCheckoutProps {
  amount: number
}

export default function PaypalCheckout({ amount }: PaypalCheckoutProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [sdkReady, setSdkReady] = useState(false)
  const paypalButtonsRef = useRef<HTMLDivElement>(null)

  // Load PayPal SDK
  useEffect(() => {
    // Prevent duplicate script loading
    if (document.querySelector('script[src*="paypal.com/sdk/js"]')) {
      setSdkReady(true)
      return
    }
    
    setIsLoading(true)
    const script = document.createElement("script")
    // Use your Client ID from PayPal Developer Dashboard
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'sb'}&currency=USD`
    script.async = true
    script.onload = () => {
      setSdkReady(true)
      setIsLoading(false)
    }
    script.onerror = () => {
      console.error("Failed to load PayPal SDK")
      setIsLoading(false)
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // Render PayPal buttons when SDK is ready
  useEffect(() => {
    if (sdkReady && paypalButtonsRef.current) {
      // Clear previous buttons
      if (paypalButtonsRef.current.firstChild) {
        paypalButtonsRef.current.innerHTML = ''
      }
      
      // Access window as PayPalWindow
      const paypalWindow = window as unknown as PayPalWindow
      
      if (paypalWindow.paypal) {
        paypalWindow.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: "Vehicle History Report",
                    amount: {
                      currency_code: "USD",
                      value: amount.toString(),
                    },
                  },
                ],
              })
            },
            onApprove: async (data, actions) => {
              setIsLoading(true)
              try {
                const order = await actions.order.capture()
                console.log("Payment successful", order)
                
                // Redirect to success page
                router.push('/vin-report')
              } catch (error) {
                console.error("Payment error", error)
              } finally {
                setIsLoading(false)
              }
            },
            onError: (err) => {
              console.error("PayPal error", err)
              setIsLoading(false)
            },
            onCancel: () => {
              console.log("Payment cancelled")
              setIsLoading(false)
            }
          })
          .render(paypalButtonsRef.current)
      }
    }
  }, [sdkReady, amount, router])

  return (
    <div>
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center mb-4">
          <PaypalIcon className="h-6 w-6 text-[#0070ba] mr-2" />
          <h3 className="font-medium">PayPal Checkout</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Complete your payment securely with PayPal. Once the payment is processed, you'll be
          able to access your vehicle report immediately.
        </p>
      </div>

      {isLoading && (
        <div className="flex justify-center my-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* PayPal Buttons Container */}
      <div ref={paypalButtonsRef} className="my-4"></div>

      {!sdkReady && !isLoading && (
        <div className="text-center text-gray-500 py-4">
          Loading payment options...
        </div>
      )}
    </div>
  )
}   