"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircleIcon, LinkedinIcon, EyeIcon, EyeOffIcon } from "@/components/ui/icons"
import { Logo } from "@/components/ui/logo"

// Session storage key
const AUTH_KEY = "portfolio_authenticated"

export default function PortfolioLogin() {
  const [passphrase, setPassphrase] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  // Valid passphrases - in a real app, this would be handled server-side
  const validPassphrases = ["abracadabra"]

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem(AUTH_KEY) === "true"
    if (isAuthenticated) {
      router.push("/portfolio/case-studies")
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Trim the passphrase to avoid whitespace issues
    const trimmedPassphrase = passphrase.toLowerCase().trim()

    // Simulate API call with timeout
    setTimeout(() => {
      if (validPassphrases.includes(trimmedPassphrase)) {
        // Store authentication state in sessionStorage
        sessionStorage.setItem(AUTH_KEY, "true")
        router.push("/portfolio/case-studies")
      } else {
        setError("Invalid passphrase. Please try again.")
      }
      setIsLoading(false)
    }, 1000)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
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
        </nav>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center px-6 py-8">
        <Card className="w-full max-w-md bg-white border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Portfolio Access</CardTitle>
            <CardDescription>Enter the passphrase to view case studies</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {error && (
                  <Alert variant="destructive" className="bg-red-50 text-red-800 border-red-200">
                    <AlertCircleIcon className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <label htmlFor="passphrase" className="text-sm font-medium">
                    Passphrase
                  </label>
                  <div className="relative">
                    <Input
                      id="passphrase"
                      type={showPassword ? "text" : "password"}
                      value={passphrase}
                      onChange={(e) => setPassphrase(e.target.value)}
                      placeholder="Enter the secret passphrase"
                      className="bg-white border border-[#000000] rounded-md focus-visible:ring-[#3ddc91] focus-visible:ring-offset-0 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#000000] hover:bg-[#000000]/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Access Portfolio"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center text-sm text-[#606060]">
            <p>Contact me for access to my portfolio case studies</p>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-[#000000] text-white p-6 flex justify-between items-center">
        <Link href="https://www.linkedin.com/in/joshkingbillings/" className="text-white hover:text-[#3ddc91]">
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

