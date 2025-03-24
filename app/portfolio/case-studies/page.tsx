"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

// Session storage key
const AUTH_KEY = "portfolio_authenticated"

export default function CaseStudies() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8">
        <h1 className="text-3xl font-bold mb-8">
          PORT<span className="font-normal">FOLIO</span>
        </h1>

        <p className="mb-8 text-base">Selected Case Studies</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/case-study" className="group">
            <Card className="bg-[#132322] border-0 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="StormForge Project"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 text-white">
                <h3 className="font-medium">StormForge</h3>
                <p className="text-xs text-[#b0b0b0]">Cloud-native optimization platform</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="#" className="group">
            <Card className="bg-[#132322] border-0 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="SoFi Project"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 text-white">
                <h3 className="font-medium">SoFi</h3>
                <p className="text-xs text-[#b0b0b0]">Financial services dashboard</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="#" className="group">
            <Card className="bg-[#132322] border-0 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="SauceLabs Project"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 text-white">
                <h3 className="font-medium">SauceLabs</h3>
                <p className="text-xs text-[#b0b0b0]">Testing platform redesign</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

