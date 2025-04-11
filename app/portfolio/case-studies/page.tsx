"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

// Session storage key
const AUTH_KEY = "portfolio_authenticated"

// Set to false to enable passphrase protection
const BYPASS_AUTH = false

export default function CaseStudies() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // If bypassing auth, just set loading to false
    if (BYPASS_AUTH) {
      setIsLoading(false)
      return
    }

    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem(AUTH_KEY) === "true"

    if (!isAuthenticated) {
      router.push("/portfolio")
    } else {
      setIsLoading(false)
    }
  }, [router])

  // Show nothing while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#d1fae5] flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Loading case studies...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#d1fae5] flex flex-col">
      <Header />

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Previous Projects</h1>
        <p className="mb-8 text-lg">Explore my work with these companies</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/portfolio/case-studies/stormforge" className="group">
            <Card className="bg-white border-0 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="h-48 bg-[#f5f5f5] flex items-center justify-center">
                <div className="h-12 w-36 relative">
                  <Image src="/images/stormforge-logo.png" alt="StormForge" fill className="object-contain" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-medium text-xl">StormForge</h3>
                <p className="text-sm text-[#606060] mt-2">Cloud-native optimization platform</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/portfolio/case-studies/saucelabs" className="group">
            <Card className="bg-white border-0 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="h-48 bg-[#f5f5f5] flex items-center justify-center">
                <div className="h-12 w-36 relative">
                  <Image src="/images/saucelabs-logo.png" alt="SauceLabs" fill className="object-contain" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-medium text-xl">SauceLabs</h3>
                <p className="text-sm text-[#606060] mt-2">Testing platform redesign</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/portfolio/case-studies/dell" className="group">
            <Card className="bg-white border-0 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="h-48 bg-[#f5f5f5] flex items-center justify-center">
                <div className="h-12 w-24 relative">
                  <Image src="/images/dell-logo.png" alt="Dell" fill className="object-contain" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-medium text-xl">Dell</h3>
                <p className="text-sm text-[#606060] mt-2">Enterprise software solutions</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
