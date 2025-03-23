import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon, LinkedinIcon } from "@/components/ui/icons"
import { Logo } from "@/components/ui/logo"

export default function Prospectus() {
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

      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="max-w-md w-full">
          <h1 className="text-xl font-medium mb-6">Enter prospectus</h1>

          <div className="relative">
            <Input
              type="text"
              className="bg-white border border-[#000000] rounded-md py-2 px-4 pr-10 focus-visible:ring-[#3ddc91] focus-visible:ring-offset-0"
              placeholder="Search..."
            />
            <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3 hover:bg-transparent">
              <SearchIcon className="w-4 h-4" />
            </Button>
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

