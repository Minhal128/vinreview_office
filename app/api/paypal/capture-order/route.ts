import { NextResponse } from "next/server"

// PayPal API endpoints
const PAYPAL_API_URL =
  process.env.NODE_ENV === "production" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com"

// PayPal credentials
const CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "YOUR_PAYPAL_CLIENT_ID"
const APP_SECRET =
  process.env.PAYPAL_SECRET_KEY || "EAMRHYpxUkJujZsILrhz9RqvaQv1Rluk4S9XrTeJPnfWzCvwsM_1-DI9WTJeVHO0t_FquwI4PqeJHefc"

// Generate an access token
async function generateAccessToken() {
  try {
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
    throw new Error("Failed to generate PayPal access token")
  }
}

export async function POST(request: Request) {
  try {
    const { orderId } = await request.json()

    // Validate the order ID
    if (!orderId) {
      return NextResponse.json({ message: "Order ID is required" }, { status: 400 })
    }

    // Get access token
    const accessToken = await generateAccessToken()

    // Capture the order
    const response = await fetch(`${PAYPAL_API_URL}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const data = await response.json()

    if (response.ok) {
      // Here you would typically update your database with the order information
      // For example, mark the order as paid, store transaction details, etc.

      return NextResponse.json(data)
    } else {
      console.error("PayPal capture order error:", data)
      return NextResponse.json(
        { message: "Failed to capture PayPal order", details: data },
        { status: response.status },
      )
    }
  } catch (error) {
    console.error("Error in capture-order route:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

