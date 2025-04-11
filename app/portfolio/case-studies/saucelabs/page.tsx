import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Flag to control whether images are shown in cards
const SHOW_IMAGES = false

export default function SauceLabsProject() {
  return (
    <div className="min-h-screen bg-[#d1fae5] flex flex-col relative overflow-hidden">
      {/* Background mascot image - positioned absolutely */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none"
        style={{
          width: "400px",
          height: "500px",
          zIndex: 0, // Lower z-index to place behind content and footer
        }}
      >
        <Image
          src="/images/saucebot-mascot.png"
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "bottom right" }}
          priority
          aria-hidden="true"
        />
      </div>

      <Header />

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-6">
          <Image
            src="/images/saucelabs-logo.svg"
            alt="SauceLabs Logo"
            width={400}
            height={80}
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-medium mb-8">Cross-Browser Testing Platform</h2>

        <div className="mb-12">
          <div className="text-sm text-gray-600 mb-4">Dec 2016 - Nov 2020</div>
          <div className="max-w-3xl">
            <p className="text-base text-gray-800 mb-4">
              At SauceLabs, our mission was to provide software testing solutions to the entire software development
              market. I took over the lead design role, and over time built a team of designers. I took part in integral
              decisions and managed the user experience for our suite of products.
            </p>
            <p className="text-base text-gray-800">
              I oversaw strategy, UX research/planning, user stories, journey mapping, personas, wireframes, prototypes
              and visual design along with a UCD focus. I was responsible for design system creation and retrofit,
              delivering multiple product features and enhancements.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="flex flex-col items-start gap-8 mb-16">
          {/* Live Testing */}
          <Card className="bg-white border-0 overflow-hidden shadow-sm w-full">
            <div className="flex flex-col md:flex-row">
              {SHOW_IMAGES && (
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Live Testing Screenshot"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className={`p-6 ${SHOW_IMAGES ? "md:w-2/3" : "w-full"}`}>
                <h3 className="text-xl font-semibold mb-2">Live Testing</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Redesigning the live testing experience for improved usability.
                </p>
                <Link
                  href="https://www.figma.com/design/3drNa89XPZXe0ahq426GUJ/Live-Testing?node-id=0-1&t=7wxSo8GLuCce4PVs-1"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View screens in Figma
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Team Management */}
          <Card className="bg-white border-0 overflow-hidden shadow-sm w-full">
            <div className="flex flex-col md:flex-row">
              {SHOW_IMAGES && (
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Team Management Screenshot"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className={`p-6 ${SHOW_IMAGES ? "md:w-2/3" : "w-full"}`}>
                <h3 className="text-xl font-semibold mb-2">Team Management</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Creating a comprehensive team management system with RBAC support.
                </p>
                <Link
                  href="/portfolio/case-studies/saucelabs/team-management"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View study
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Design System */}
          <Card className="bg-white border-0 overflow-hidden shadow-sm w-full">
            <div className="flex flex-col md:flex-row">
              {SHOW_IMAGES && (
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Design System Screenshot"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className={`p-6 ${SHOW_IMAGES ? "md:w-2/3" : "w-full"}`}>
                <h3 className="text-xl font-semibold mb-2">Billing</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Building a new checkout flow for our suite of customizable products.
                </p>
                <Link href="#" className="text-sm text-blue-600 hover:underline">
                  View study
                </Link>{" "}
                &nbsp;| &nbsp;
                <Link href="#" className="text-sm text-blue-600 hover:underline">
                  View screens in Figma
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </main>

      {/* Add z-index to the Footer to ensure it appears above the background image */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  )
}
