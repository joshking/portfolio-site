import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate the request
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Log the form submission (for debugging purposes)
    console.log("Contact form submission:", { name, email, message })

    // In a real application, you would send an email here
    // For now, we'll just return a success response

    return NextResponse.json({
      success: true,
      message: "Form submission received. Note: This is a simulation as email sending is not configured.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process form submission" }, { status: 500 })
  }
}
