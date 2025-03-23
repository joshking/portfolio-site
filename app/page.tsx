import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { LinkedinIcon } from "@/components/ui/icons"
import { Logo } from "@/components/ui/logo"

export default function Home() {
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

      <main className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-8">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-[#000000]">JOSH</span>
            <span className="text-[#8f8f8f]">KING</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium mb-6">Multi-disciplined software design leader</h2>

          <p className="text-base max-w-3xl mb-12">
            I'm a multi-discipline product designer with 20+ years professional experience. I have worked in a wide
            variety of fields, but have most recently focussed on developer tools. I have delivered multiple products
            within automation, CI/CD, testing, IT, machine learning, infrastructure, performance and optimization. I
            have built and led multiple design teams and primarily operated as a player-coach for most of my career.
          </p>

          <div className="mb-4 text-sm text-[#606060]">Previously at</div>

          <Separator className="mb-8 bg-[#00000020]" />

          <div className="flex flex-wrap justify-start gap-12 mb-8 items-center">
            <div className="h-12 w-24 relative">
              <Image
                src="/images/dell-logo.png"
                alt="Dell - Previous employer"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="h-12 w-36 relative">
              <Image
                src="/images/stormforge-logo.png"
                alt="StormForge - Previous employer"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="h-12 w-24 relative">
              <Image
                src="/images/sofi-logo.png"
                alt="SoFi - Previous employer"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="h-12 w-36 relative">
              <Image
                src="/images/saucelabs-logo.png"
                alt="SauceLabs - Previous employer"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <Separator className="mt-8 bg-[#00000020]" />
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

