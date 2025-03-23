import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Let's make sure the layout has proper metadata and is properly structured.

// Update the metadata to be more descriptive:
export const metadata: Metadata = {
  title: "Josh King | Product Designer & UX Leader",
  description:
    "Portfolio website of Josh King, a multi-disciplined software design leader with 20+ years of experience in developer tools, automation, and product design.",
  keywords: ["product design", "UX design", "portfolio", "Josh King", "design leader"],
  authors: [{ name: "Josh King" }],
  creator: "Josh King",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joshking.me",
    title: "Josh King | Product Designer & UX Leader",
    description:
      "Portfolio website of Josh King, a multi-disciplined software design leader with 20+ years of experience.",
    siteName: "Josh King Portfolio",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
            <footer className="bg-[#000000] text-white p-2 flex justify-between items-center text-xs">
              <div className="flex items-center gap-1">
                <ChevronLeftIcon className="h-3 w-3" />
                <span>Previous</span>
              </div>
              <div className="text-center text-[10px] opacity-70">Portfolio © {new Date().getFullYear()}</div>
              <div className="flex items-center gap-1">
                <span>Next</span>
                <ChevronRightIcon className="h-3 w-3" />
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'