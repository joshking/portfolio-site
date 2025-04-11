import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Flag to control whether images are shown in cards
const SHOW_IMAGES = false

export default function DellProject() {
  return (
    <div className="min-h-screen bg-[#d1fae5] flex flex-col relative overflow-hidden">
      <Header />

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-6">
          <Image
            src="/images/dell-technologies-logo.svg"
            alt="Dell Technologies Logo"
            width={400}
            height={50}
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-medium mb-8">Enterprise IT Solutions</h2>

        <div className="mb-12">
          <div className="text-sm text-gray-600 mb-4">Jan 2013 - Q3 2014</div>
          <div className="max-w-3xl">
            <p className="text-base text-gray-800 mb-4">
              At Dell, I worked within the design team as a UI/UX engineer. My main responsibilities was the lead designer and UX engineer for a website called ITNinja.com. I also contributed to their service desk product - both desktop and mobile applicaiton. 
            </p>
            <p className="text-base text-gray-800">
              I was responsible for designing UX workflows and prototypes for web and mobile based applications,
              implementing HTML/CSS/JS, conducting user testing, and collaborating between UX teams, engineering teams,product and project managers.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="flex flex-col items-start gap-8 mb-16">
          {/* Insight.com */}
          <Card className="bg-white border-0 overflow-hidden shadow-sm w-full">
            <div className="flex flex-col md:flex-row">
              {SHOW_IMAGES && (
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Insight.com Screenshot"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className={`p-6 ${SHOW_IMAGES ? "md:w-2/3" : "w-full"}`}>
                <h3 className="text-xl font-semibold mb-2">ITNinja.com</h3>
                <p className="text-sm text-gray-600 mb-4">Designing the ITNinja experience.</p>
                <Link href="#" className="text-sm text-blue-600 hover:underline">
                  Coming soon
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Service Desk */}
          <Card className="bg-white border-0 overflow-hidden shadow-sm w-full">
            <div className="flex flex-col md:flex-row">
              {SHOW_IMAGES && (
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Service Desk Screenshot"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className={`p-6 ${SHOW_IMAGES ? "md:w-2/3" : "w-full"}`}>
                <h3 className="text-xl font-semibold mb-2">Service Desk</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Enhancing the service desk products for desktop and mobile platforms.
                </p>
                <Link href="#" className="text-sm text-blue-600 hover:underline">
                  Coming soon
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Mobile Applications */}
          <Card className="bg-white border-0 overflow-hidden shadow-sm w-full">
            <div className="flex flex-col md:flex-row">
              {SHOW_IMAGES && (
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Mobile Applications Screenshot"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
