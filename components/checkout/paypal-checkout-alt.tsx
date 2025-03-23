// "use client"

// import { useEffect, useRef, useState } from "react"
// import { useRouter } from "next/navigation"
// import Script from "next/script"
// import { PaypalIcon } from "./icons"

// interface PaypalCheckoutProps {
//   amount: number
// }

// export default function PaypalCheckout({ amount }: PaypalCheckoutProps) {
//   const paypalButtonsRef = useRef<HTMLDivElement>(null)
//   const router = useRouter()
//   const [scriptLoaded, setScriptLoaded] = useState(false)

//   // Replace with your PayPal client ID
//   const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "YOUR_PAYPAL_CLIENT_ID"

//   useEffect(() => {
//     if (scriptLoaded && paypalButtonsRef.current) {
//       paypalButtonsRef.current.innerHTML = ""

//       try {
//         // @ts-ignore - PayPal is loaded via script
//         window.paypal
//           .Buttons({
//             // Set up the transaction
//             createOrder: (data, actions) => {
//               // This function sets up the details of the transaction
//               return actions.order.create({
//                 purchase_units: [
//                   {
//                     description: "Vehicle History Report",
//                     amount: {
//                       currency_code: "USD",
//                       value: amount.toFixed(2),
//                     },
//                   },
//                 ],
//               })
//             },

//             // Finalize the transaction
//             onApprove: (data, actions) =>
//               actions.order.capture().then((orderData) => {
//                 // Successful capture! Redirect to success page
//                 router.push("/vin-report")
//               }),
//           })
//           .render(paypalButtonsRef.current)
//       } catch (error) {
//         console.error("Error rendering PayPal buttons:", error)
//       }
//     }
//   }, [scriptLoaded, amount, router])

//   return (
//     <div>
//       <Script
//         src={`https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`}
//         onLoad={() => setScriptLoaded(true)}
//       />

//       <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
//         <div className="flex items-center mb-4">
//           <PaypalIcon className="h-6 w-6 text-[#0070ba] mr-2" />
//           <h3 className="font-medium">PayPal Checkout</h3>
//         </div>
//         <p className="text-gray-600 text-sm">
//           Complete your payment securely with PayPal. You can pay with your PayPal account or credit card.
//         </p>
//       </div>

//       <div ref={paypalButtonsRef} className="paypal-buttons-container">
//         {!scriptLoaded && (
//           <div className="flex justify-center items-center py-4">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
//             <span className="ml-2 text-gray-600">Loading PayPal...</span>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { PaypalIcon } from "./icons"

// Add type declarations for process.env
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_URL?: string;
      NEXT_PUBLIC_PAYPAL_EMAIL?: string;
    }
  }
}

interface PaypalCheckoutProps {
  amount: number
}

export default function PaypalCheckout({ amount }: PaypalCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  // Replace with your verified PayPal business email
  const paypalEmail = "sb-xw9wh29267339@business.example.com"
  
  // Use sandbox URL for testing, switch to www.paypal.com for production
  const baseUrl = "https://sandbox.paypal.com" 
  // const baseUrl = "" 
  // const baseUrl = "" 

  const handlePaypalCheckout = (paymentMethod = "paypal") => {
    setIsLoading(true)

    // Create the form data for the package
    const formData = new FormData()
    formData.append("cmd", "_xclick")
    formData.append("business", paypalEmail)
    formData.append("item_name", "Vehicle History Report")
    formData.append("amount", amount.toString())
    formData.append("currency_code", "USD")
    formData.append("return", `${process.env.NEXT_PUBLIC_APP_URL || window.location.origin}/vin-report`)
    formData.append("cancel_return", `${process.env.NEXT_PUBLIC_APP_URL || window.location.origin}/checkout`)
    
    // Add payment_method if not using standard PayPal
    if (paymentMethod === "card") {
      formData.append("payment_method", "credit-card")
    } else if (paymentMethod === "later") {
      formData.append("payment_method", "pay_later")
    }

    // Create a form element
    const form = document.createElement("form")
    form.method = "post"
    form.action = baseUrl
    form.target = "_self"

    // Append all form data
    for (const [key, value] of formData.entries()) {
      const input = document.createElement("input")
      input.type = "hidden"
      input.name = key
      input.value = value.toString()
      form.appendChild(input)
    }

    // Add the form to the document and submit it
    document.body.appendChild(form)
    form.submit()
  }

  return (
    <div>
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center mb-4">
          <PaypalIcon className="h-6 w-6 text-[#0070ba] mr-2" />
          <h3 className="font-medium">PayPal Checkout</h3>
        </div>
        <p className="text-gray-600 text-sm">
          You will be redirected to PayPal to complete your payment securely. Once the payment is completed, you'll be
          returned to access your vehicle report.
        </p>
      </div>

      <button
        onClick={() => handlePaypalCheckout("paypal")}
        disabled={isLoading}
        className="w-full bg-[#0070ba] text-white py-3 px-4 rounded-lg hover:bg-[#003087] transition-colors font-medium flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Processing...
          </>
        ) : (
          <>
            <PaypalIcon className="h-6 w-6 mr-2" />
            Pay with PayPal
          </>
        )}
      </button>

      <button
        onClick={() => handlePaypalCheckout("later")}
        disabled={isLoading}
        className="w-full bg-[#ffc439] text-[#003087] py-3 px-4 rounded-lg hover:bg-[#f0b72b] transition-colors font-medium flex items-center justify-center mt-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        Pay Later
      </button>

      <button
        onClick={() => handlePaypalCheckout("card")}
        disabled={isLoading}
        className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center justify-center mt-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
        Debit or Credit Card
      </button>
    </div>
  )
}