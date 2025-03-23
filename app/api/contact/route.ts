import { NextResponse } from "next/server"

// Recipient email address for the contact form
const RECIPIENT_EMAIL = "webposer@gmail.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate the request
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real implementation, you would send an email here
    // Example using a service like SendGrid, Mailgun, etc.
    //
    // const emailData = {
    //   to: RECIPIENT_EMAIL,
    //   from: email,
    //   subject: `New contact form submission from ${name}`,
    //   text: message,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Message:</strong> ${message}</p>`
    // };
    //
    // await sendEmail(emailData);

    console.log(`Email would be sent to: ${RECIPIENT_EMAIL}`)
    console.log(`From: ${email}`)
    console.log(`Name: ${name}`)
    console.log(`Message: ${message}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

