import Link from "next/link"
import { Logo } from "@/components/ui/logo"

export function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <Logo />
      <nav className="flex space-x-8">
        <Link href="/resume" className="text-sm font-medium hover:text-[#3ddc91] transition-colors">
          Resume
        </Link>
        <Link href="/portfolio" className="text-sm font-medium hover:text-[#3ddc91] transition-colors">
          Portfolio
        </Link>
      </nav>
    </header>
  )
}

