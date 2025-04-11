"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { LinkedinIcon } from "@/components/ui/icons"
import { Logo } from "@/components/ui/logo"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new FormData(e.currentTarget)

    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Form submission failed")
      }

      setSubmitStatus({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      })

      // Reset the form
      e.currentTarget.reset()
    } catch (error) {
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
      <header className="p-6 flex justify-between items-center">
        <Logo />
        <nav className="flex space-x-8">
          <Link href="/resume" className="text-sm font-medium hover:text-[#3ddc91] transition-colors">
            Resume
          </Link>
          <Link href="/portfolio" className="text-sm font-medium hover:text-[#3ddc91] transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#3ddc91] transition-colors">
            Contact
          </Link>
        </nav>
      </header>

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
                name="name"
                type="text"
                className="bg-white border border-[#000000] rounded-md focus-visible:ring-[#3ddc91] focus-visible:ring-offset-0"
                aria-required="true"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                className="bg-white border border-[#000000] rounded-md focus-visible:ring-[#3ddc91] focus-visible:ring-offset-0"
                aria-required="true"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                className="bg-white border border-[#000000] rounded-md focus-visible:ring-[#3ddc91] focus-visible:ring-offset-0"
                aria-required="true"
                required
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

      <footer className="bg-[#000000] text-white p-6 flex justify-between items-center">
        <Link href="https://linkedin.com" className="text-white hover:text-[#3ddc91]">
          <LinkedinIcon className="h-5 w-5" />
        </Link>
        <div className="text-sm">
          Email me:{" "}
          <Link href="mailto:me@joshking.me" className="text-[#3ddc91] hover:underline">
            me@joshking.me
          </Link>
        </div>
      </footer>
    </div>
  )
}
