import { NextResponse } from "next/server"

// PayPal API endpoints
const PAYPAL_API_URL =
  process.env.NODE_ENV === "production" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com"

// PayPal credentials
const CLIENT_ID = process.env.PAYPAL_CLIENT_ID
const APP_SECRET = process.env.PAYPAL_SECRET_KEY

// Generate an access token
async function generateAccessToken() {
  try {
    if (!CLIENT_ID || !APP_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS")
    }

    const auth = Buffer.from(`${CLIENT_ID}:${APP_SECRET}`).toString("base64")
    const response = await fetch(`${PAYPAL_API_URL}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${auth}`,
      },
      body: "grant_type=client_credentials",
    })

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error("Failed to generate PayPal access token:", error)
    throw error
  }
}

export async function POST(request: Request) {
  try {
    const { amount, currency = "USD" } = await request.json()

    // Validate the amount
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json({ message: "Invalid amount provided" }, { status: 400 })
    }

    // Log the credentials being used
    console.log("Using PayPal credentials:", {
      clientId: CLIENT_ID ? "Set" : "Not set",
      secretKey: APP_SECRET ? "Set" : "Not set",
      apiUrl: PAYPAL_API_URL,
    })

    // Get access token
    const accessToken = await generateAccessToken()
    console.log("Access token generated successfully")

    // Create order
    const payload = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount,
          },
          description: "Vehicle History Report",
        },
      ],
      application_context: {
        brand_name: "Vinreview",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/vin-report`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout`,
      },
    }

    console.log("Creating PayPal order with payload:", JSON.stringify(payload))

    const response = await fetch(`${PAYPAL_API_URL}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    console.log("PayPal API response:", JSON.stringify(data))

    if (response.ok) {
      return NextResponse.json(data)
    } else {
      console.error("PayPal create order error:", data)
      return NextResponse.json({ message: "Failed to create PayPal order", details: data }, { status: response.status })
    }
  } catch (error) {
    console.error("Error in create-order route:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    console.error("Error details:", errorMessage)
    return NextResponse.json({ message: "Internal server error", details: errorMessage }, { status: 500 })
  }
}

