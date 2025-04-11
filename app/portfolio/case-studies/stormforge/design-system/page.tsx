"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Modal } from "@/components/ui/modal"

export default function DesignSystemCaseStudy() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-[#d1fae5] flex flex-col">
      <Header />

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <Link
            href="/portfolio/case-studies/stormforge"
            className="text-sm text-blue-600 hover:underline mb-8 inline-block"
          >
            ← Back to StormForge
          </Link>
        </div>

        <h1 className="text-6xl font-bold mb-6">
          <span className="text-[#000000]">CASE</span> <span className="text-[#8f8f8f]">STUDY</span>
        </h1>

        <h2 className="text-3xl font-bold mb-6">Full Redesign and Design System</h2>

        <div className="max-w-4xl mb-12">
          <p className="text-base mb-8">
            When I first started with StormForge, the UI was nearly non-existent. It was clear we needed to scrap the
            existing front-end, and replace it with a solid design system, and scaleable component library.
          </p>
        </div>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Situation</h3>
          <ul className="list-disc pl-5 space-y-1 mb-6">
            <li>Dated visual language</li>
            <li>UI was not scalable</li>
            <li>Information was hard to find</li>
            <li>UX was mediocre</li>
            <li>Free trials were abysmal</li>
            <li>We needed to be established</li>
            <li>We didn't know what the real problems were</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Task</h3>
          <p className="text-base mb-6">
            I served as the lead designer, and design manager. My role was to work with the multiple stakeholders within
            the company to not only redesign the product and create the visual language, but also make what was being
            designed in Figma translated to a React component library.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Action</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-6">
            <li>Determine visual language.</li>
            <li>Prototype out ideas.</li>
            <li>Gather feedback from internal stakeholders.</li>
            <li>Work with engineering to establish the implementation.</li>
            <li>
              Fix any small UX issues that could be improved without slowing down the ultimate goal of launching the UI.
            </li>
          </ol>

          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-3">Determine visual language with feedback internally</h4>
            <p className="text-base mb-4">
              The first step was to capture the soul of the product visually. I did so by creating a number of visual
              explorations to try and gauge the feedback of what is most favorable. Since I had a good idea that we were
              going to go down the Material UI route, I used Material Design as a visual framework. Also, since we did
              not have current customers, I kept the feedback internally.
            </p>
            <p className="text-base mb-4">
              The company had existing brand guidelines determined by marketing. This was actually a problem because the
              brand guidelines didn't translate as well to the product UI. The colors were muted, and non-complementary.
              It had a mix of sea foam green and pink, which created accessibility problems with contrast, and well, was
              sort of ugly.
            </p>
            <p className="text-base mb-4">
              I grabbed aspects of the color palette, and created a few explorations. I sent this out to the company
              attached with a poll to gather feedback on what people were feeling. Dark mode, neutral, overwhelming was
              preferred. Below are examples that I put together.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Implementation</h3>
          <p className="text-base mb-6">
            Working with engineering, we landed on MUI (Material UI). This decision was mostly decided on based on
            velocity and flexibility. We didn't want another UI that looks like gmail. We wanted the flexibility of the
            theming system of MUI, and enjoyed an existing set of React components as to not reinvent the wheel. The
            name of the game here was velocity. We knew we needed to get a ton of UI out the door quickly, but we didn't
            want to rack up lots of tech debt because of this velocity.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Result</h3>
          <p className="text-base mb-6">
            We were very happy with the results. In about a month, we had redesigned the UI, and had a design system
            that was a 1:1 match Figma to React components.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Before & After</h3>
          <p className="text-base mb-4">Click on images to view larger version</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Before: "Batman Theme"</h4>
              <div
                className="cursor-pointer border border-gray-300 rounded-md overflow-hidden hover:opacity-90 transition-opacity"
                onClick={() => openModal("/placeholder.svg?height=800&width=1200")}
              >
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Before: Batman theme dashboard"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">After: Dark Mode</h4>
              <div
                className="cursor-pointer border border-gray-300 rounded-md overflow-hidden hover:opacity-90 transition-opacity"
                onClick={() => openModal("/placeholder.svg?height=800&width=1200")}
              >
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="After: New dark mode dashboard"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Before: Charts</h4>
              <div
                className="cursor-pointer border border-gray-300 rounded-md overflow-hidden hover:opacity-90 transition-opacity"
                onClick={() => openModal("/placeholder.svg?height=800&width=1200")}
              >
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Before: Batman theme charts"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">After: Charts</h4>
              <div
                className="cursor-pointer border border-gray-300 rounded-md overflow-hidden hover:opacity-90 transition-opacity"
                onClick={() => openModal("/placeholder.svg?height=800&width=1200")}
              >
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="After: New dark mode charts"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Modal for displaying larger images */}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {selectedImage && (
              <div className="flex justify-center items-center">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Enlarged view"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            )}
          </Modal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
