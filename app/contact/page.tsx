"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simple validation
    if (!name || !email || !message) {
      setSubmitStatus({
        success: false,
        message: "Please fill in all fields.",
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubmitStatus({
        success: false,
        message: "Please enter a valid email address.",
      })
      setIsSubmitting(false)
      return
    }

    // Prepare form data
    const formData = {
      name,
      email,
      message,
    }

    try {
      // Send the form data to your API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitStatus({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      })

      // Reset form
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#d1fae5] flex flex-col">
      <Header />

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8">CONTACT</h1>

          <p className="mb-8 text-sm">Feel free to reach out if you'd like to work together or have any questions.</p>

          {submitStatus && (
            <Alert
              className={
                submitStatus.success
                  ? "bg-green-50 text-green-800 border-green-200 mb-6"
                  : "bg-red-50 text-red-800 border-red-200 mb-6"
              }
            >
              <AlertDescription>{submitStatus.message}</AlertDescription>
            </Alert>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white border border-[#000000] rounded-md focus-visible:ring-[#3ddc91] focus-visible:ring-offset-0"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-[#000000] rounded-md focus-visible:ring-[#3ddc91] focus-visible:ring-offset-0"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white border border-[#000000] rounded-md focus-visible:ring-[#3ddc91] focus-visible:ring-offset-0"
                aria-required="true"
              />
            </div>

            <Button
              type="submit"
              className="bg-[#000000] hover:bg-[#000000]/90 text-white rounded-none px-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
