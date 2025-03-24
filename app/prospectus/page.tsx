import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "@/components/ui/icons"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Prospectus() {
  return (
    <div className="min-h-screen bg-[#d1fae5] flex flex-col">
      <Header />

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
      <Footer />
    </div>
  )
}

