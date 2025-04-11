import Link from "next/link"
import { LinkedinIcon } from "@/components/ui/icons"

export function Footer() {
  return (
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
  )
}
