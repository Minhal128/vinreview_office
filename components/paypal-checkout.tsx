"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Script from "next/script"

interface PaypalCheckoutProps {
  amount: number
}

export default function PaypalCheckout({ amount }: PaypalCheckoutProps) {
  const paypalButtonsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    // This would be replaced with actual PayPal SDK initialization in a real app
    // For demo purposes, we're just showing a placeholder
    const renderPayPalButtons = () => {
      if (paypalButtonsRef.current) {
        paypalButtonsRef.current.innerHTML = ""

        const button = document.createElement("button")
        button.className =
          "w-full bg-[#0070ba] text-white py-3 px-4 rounded-lg hover:bg-[#003087] transition-colors font-medium flex items-center justify-center"
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.076 21.337h-2.843c-.4 0-.727-.323-.727-.723v-1.398c0-.4.327-.724.727-.724h2.843c.4 0 .726.324.726.724v1.398c0 .4-.326.723-.726.723zm-2.388-2.690c-.182 0-.33.147-.33.33 0 .18.148.328.33.328h1.735c.182 0 .33-.147.33-.329 0-.182-.148-.329-.33-.329h-1.735zm0 1.13c-.182 0-.33.148-.33.33 0 .183.148.33.33.33h1.735c.182 0 .33-.147.33-.33 0-.182-.148-.33-.33-.33h-1.735zm11.346-15.702v3.775h-1.204c-2.228 0-4.04 1.8-4.04 4.019v.127c0 .996.368 1.946 1.037 2.687.719.794 1.722 1.26 2.808 1.304.047.002.094.003.142.003h.034c1.313 0 2.588-.569 3.485-1.55v.746c0 .219.178.397.398.397h1.609c.22 0 .398-.178.398-.397v-11.11c0-.22-.178-.398-.398-.398h-3.87c-.22 0-.399.179-.399.398zm0 1.598h2.671v1.38h-2.671v-1.38zm.398 7.993c0 .547-.217 1.066-.61 1.457-.392.39-.913.606-1.464.606-.552 0-1.073-.216-1.465-.607-.393-.39-.61-.91-.61-1.456v-.127c0-1.133.927-2.055 2.066-2.055h2.083v2.182zm-11.629-9.591v11.11c0 .22.178.398.398.398h3.87c.22 0 .399-.179.399-.398v-3.775h1.204c2.228 0 4.04-1.8 4.04-4.019v-.127c0-.996-.368-1.946-1.037-2.687-.719-.794-1.722-1.26-2.808-1.304-.047-.002-.095-.003-.143-.003h-.033c-1.313 0-2.588.569-3.485 1.55v-.746c0-.219-.178-.397-.398-.397h-1.609c-.22 0-.398.178-.398.397zm3.87 9.591h-2.671v-1.38h2.671v1.38zm-.398-7.993c0-.547.217-1.066.61-1.457.392-.39.913-.606 1.464-.606.552 0 1.073.216 1.465.607.393.39.61.91.61 1.456v.127c0 1.133-.927 2.055-2.066 2.055h-2.083v-2.182z" />
          </svg>
          Pay with PayPal
        `

        button.addEventListener("click", () => {
          // In a real app, this would trigger the PayPal payment flow
          // For demo purposes, we'll just redirect to the success page
          router.push("/vin-report")
        })

        paypalButtonsRef.current.appendChild(button)
      }
    }

    // Render the PayPal buttons after a short delay to simulate SDK loading
    const timer = setTimeout(() => {
      renderPayPalButtons()
    }, 500)

    return () => clearTimeout(timer)
  }, [router, amount])

  return (
    <div>
      <Script id="paypal-js" strategy="lazyOnload" src={`https://www.paypal.com/sdk/js?client-id=test&currency=USD`} />

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Total:</span> ${amount.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">You will be redirected to PayPal to complete your payment securely.</p>
      </div>

      <div ref={paypalButtonsRef} className="paypal-buttons-container">
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
          <span className="ml-2 text-gray-600">Loading PayPal...</span>
        </div>
      </div>
    </div>
  )
}

