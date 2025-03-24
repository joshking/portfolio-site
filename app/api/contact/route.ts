import { NextResponse } from "next/server"
import { Resend } from "resend"

// Create a Resend instance with your API key
// You'll need to add this as an environment variable in your Vercel project
const resend = new Resend(process.env.RESEND_API_KEY)

// Your email address where you want to receive contact form submissions
const RECIPIENT_EMAIL = "me@joshking.me"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate the request
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: "Josh King Portfolio <onboarding@resend.dev>", // Replace with your verified domain in production
      to: RECIPIENT_EMAIL,
      subject: `New contact form submission from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

