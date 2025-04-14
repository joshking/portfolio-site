import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Flag to control whether images are shown in cards
const SHOW_IMAGES = false

export default function StormForgeProject() {
  return (
    <div className="min-h-screen bg-[#d1fae5] flex flex-col relative overflow-hidden">
      <Header />

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-6">
          <Image
            src="/images/stormforge-logo.svg"
            alt="StormForge Logo"
            width={600}
            height={80}
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-medium mb-8">Autonomous Rightsizing for Kubernetes Workloads</h2>

        <div className="mb-12">
          <div className="text-sm text-gray-600 mb-4">Dec 2020 - March 2025</div>
          <div className="max-w-3xl">
            <p className="text-base text-gray-800 mb-4">
              At StormForge, I operated as the lead and founding designer. Before I started, the company had used
              contractors and freebie templates found on the web. I came in right after a $63 million series B funding
              raise and built the department from the ground up.
            </p>
            <p className="text-base text-gray-800">
              I took part in most every product decision that was made, and was integral to the creation of our flagship
              product, Optimize Live. I led the design to an acquisition in March 2025.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="flex flex-col items-start gap-8 mb-16">
          {/* Design System & Redesign */}
          <Card className="bg-white border-0 overflow-hidden shadow-sm w-full">
            <div className="flex flex-col md:flex-row">
              {SHOW_IMAGES && (
                <div className="md:w-1/3">
                  <Image
                    src="/images/stormforge-design-system.png"
                    alt="Design System Screenshot"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className={`p-6 ${SHOW_IMAGES ? "md:w-2/3" : "w-full"}`}>
                <h3 className="text-xl font-semibold mb-2">Design System & Redesign</h3>
                <p className="text-sm text-gray-600 mb-4">
                  A small case study on our first launched product at StormForge.
                </p>
                <Link
                  href="/portfolio/case-studies/stormforge/design-system"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View study
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Optimize Live */}
          <Card className="bg-white border-0 overflow-hidden shadow-sm w-full">
            <div className="flex flex-col md:flex-row">
              {SHOW_IMAGES && (
                <div className="md:w-1/3">
                  <Image
                    src="/images/stormforge-optimize-live.png"
                    alt="Optimize Live Screenshot"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className={`p-6 ${SHOW_IMAGES ? "md:w-2/3" : "w-full"}`}>
                <h3 className="text-xl font-semibold mb-2">Optimize Live</h3>
                <p className="text-sm text-gray-600 mb-4">
                  A small case study on our first launched product at StormForge.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/portfolio/case-studies/stormforge/optimize-live"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View study
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link href="https://www.figma.com/design/NxMFBFB1RUmzLRPHTQBJob/Portfolio?node-id=377-63270&t=GTUPx0hnSAN8PwFo-1" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                    View screens in Figma
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Optimize Pro */}
          <Card className="bg-white border-0 overflow-hidden shadow-sm w-full">
            <div className="flex flex-col md:flex-row">
              {SHOW_IMAGES && (
                <div className="md:w-1/3">
                  <Image
                    src="/images/stormforge-optimize-pro.png"
                    alt="Optimize Pro Screenshot"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className={`p-6 ${SHOW_IMAGES ? "md:w-2/3" : "w-full"}`}>
                <h3 className="text-xl font-semibold mb-2">Optimize Pro</h3>
                <p className="text-sm text-gray-600 mb-4">
                  A small case study on our first launched product at StormForge.
                </p>
                <Link
                  href="https://www.figma.com/design/NxMFBFB1RUmzLRPHTQBJob/Portfolio?node-id=187-8454&t=IzErZ2XvoCFLj1tf-1"
                  className="text-sm text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View screens in Figma
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Onboarding */}
          <Card className="bg-white border-0 overflow-hidden shadow-sm w-full">
            <div className="flex flex-col md:flex-row">
              {SHOW_IMAGES && (
                <div className="md:w-1/3">
                  <Image
                    src="/images/stormforge-onboarding.png"
                    alt="Onboarding Screenshot"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className={`p-6 ${SHOW_IMAGES ? "md:w-2/3" : "w-full"}`}>
                <h3 className="text-xl font-semibold mb-2">Onboarding</h3>
                <p className="text-sm text-gray-600 mb-4">
                  A small case study on our first launched product at StormForge.
                </p>
                <Link
                  href="https://www.figma.com/design/NxMFBFB1RUmzLRPHTQBJob/Portfolio?node-id=415-70929&t=GTUPx0hnSAN8PwFo-1"
                  className="text-sm text-blue-600 hover:underline" target="_blank">
                  View screens in Figma
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </main>

      {/* Background character image - positioned above footer */}
      <div className="absolute bottom-[67px] right-0 z-10">
        <Image src="/images/stevie.png" alt="StormForge mascot" width={400} height={400} priority />
      </div>

      <Footer />
    </div>
  )
}
