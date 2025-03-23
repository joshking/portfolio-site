"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Modal } from "@/components/ui/modal"
import { LinkedinIcon } from "@/components/ui/icons"
import { Logo } from "@/components/ui/logo"

// Session storage key
const AUTH_KEY = "portfolio_authenticated"

export default function CaseStudy() {
  const [isBeforeModalOpen, setIsBeforeModalOpen] = useState(false)
  const [isAfterModalOpen, setIsAfterModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

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
    return null
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

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">
          <span className="text-[#000000]">CASE</span> <span className="text-[#8f8f8f]">STUDY</span>
        </h1>

        <h2 className="text-3xl font-medium mb-4">Team Management</h2>

        <p className="mb-8 text-base">
          The Live Testing product at SauceLabs allows people to test their app or website on emulators, simulators, and
          real devices.
        </p>

        <Alert className="bg-[#155e75] text-white border-0 mb-12">
          <AlertDescription className="space-y-2">
            <h3 className="font-bold">Highlight</h3>
            <p>
              Team management was release with full RBAC support. JP Morgan Chase ended up signing a large deal with
              SauceLabs.
            </p>
            <p className="text-sm">View screens from the project in Figma.</p>
          </AlertDescription>
        </Alert>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Situation</h3>
          <p className="text-base mb-4">
            JP Morgan Chase wanted to sign a large deal with us but before they do, they needed a way to allocate tests
            to different properties, and users.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Task</h3>
          <p className="text-base mb-4">
            I served as the lead designer. My role was to work with the company to establish a design language.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Action</h3>
          <ol className="list-decimal pl-5 space-y-2 text-base">
            <li>Conduct SME interviews and establish the problem space</li>
            <li>Map out the potential user journey</li>
            <li>Competitive analysis</li>
            <li>Determine visual language</li>
            <li>Prototype out ideas</li>
            <li>Establish design system</li>
            <li>Validate</li>
          </ol>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Result</h3>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>Dated visual language</li>
            <li>UI was not scalable</li>
            <li>Information was hard to find</li>
            <li>UX was mediocre</li>
            <li>Free trials were abysmal</li>
            <li>We needed to be established</li>
            <li>We didn't know what the real problems were</li>
          </ul>
        </section>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Before</h3>
            <p className="text-sm mb-4">Internally this was referred to as the "batman theme"</p>

            <div
              className="cursor-pointer max-w-[550px]"
              onClick={() => setIsBeforeModalOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="View larger image of dashboard before redesign"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsBeforeModalOpen(true)
                }
              }}
            >
              <Image
                src="/placeholder.svg?height=300&width=550"
                alt="Dashboard Before"
                width={550}
                height={300}
                className="w-full h-auto border border-[#000000] rounded-md"
              />
            </div>

            <Modal isOpen={isBeforeModalOpen} onClose={() => setIsBeforeModalOpen(false)}>
              <Image
                src="/placeholder.svg?height=600&width=1100"
                alt="Dashboard Before - Full Size"
                width={1100}
                height={600}
                className="w-full h-auto"
              />
            </Modal>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">After</h3>
            <p className="text-sm mb-4">Content about this here.</p>

            <div
              className="cursor-pointer max-w-[550px]"
              onClick={() => setIsAfterModalOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="View larger image of dashboard after redesign"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsAfterModalOpen(true)
                }
              }}
            >
              <Image
                src="/placeholder.svg?height=300&width=550"
                alt="Dashboard After"
                width={550}
                height={300}
                className="w-full h-auto border border-[#000000] rounded-md"
              />
            </div>

            <Modal isOpen={isAfterModalOpen} onClose={() => setIsAfterModalOpen(false)}>
              <Image
                src="/placeholder.svg?height=600&width=1100"
                alt="Dashboard After - Full Size"
                width={1100}
                height={600}
                className="w-full h-auto"
              />
            </Modal>
          </div>
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

