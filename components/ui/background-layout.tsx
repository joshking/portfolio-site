import type React from "react"
import Link from "next/link"
import { LinkedinIcon } from "@/components/ui/icons"
import { Logo } from "@/components/ui/logo"

interface BackgroundLayoutProps {
  children: React.ReactNode
  backgroundImage: string
  overlayOpacity?: number // 0-100
}

export function BackgroundLayout({
  children,
  backgroundImage,
  overlayOpacity = 10, // default 10%
}: BackgroundLayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Optional overlay */}
      {overlayOpacity > 0 && (
        <div className="absolute inset-0 bg-black -z-10" style={{ opacity: overlayOpacity / 100 }} />
      )}

      <header className="p-6 flex justify-between items-center bg-[#d1fae5]/80 backdrop-blur-sm">
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

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8">{children}</main>

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

