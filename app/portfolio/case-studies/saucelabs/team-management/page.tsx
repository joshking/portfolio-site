import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function TeamManagementStudy() {
  return (
    <div className="min-h-screen bg-[#d1fae5] flex flex-col">
      <Header />

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <Link
            href="/portfolio/case-studies/saucelabs"
            className="text-sm text-blue-600 hover:underline mb-8 inline-block"
          >
            ← Back to SauceLabs
          </Link>
        </div>

        <h1 className="text-6xl font-bold mb-6">
          <span className="text-[#000000]">CASE</span> <span className="text-[#8f8f8f]">STUDY</span>
        </h1>

        <h2 className="text-3xl font-bold mb-6">Team Management</h2>

        <div className="max-w-4xl mb-12">
          <p className="text-base mb-8">
            The Live Testing product at SauceLabs allows people to test their app or website on emulators, simulators,
            and real devices.
          </p>
        </div>

        <Alert className="bg-[#2D6475] text-white border-0 mb-12">
          <AlertDescription className="w-full px-4 py-3">
            <h3 className="font-bold text-lg mb-2">Highlight</h3>
            <p className="mb-2">
              Team management was release with full RBAC support. JP Morgan Chase ended up signing a large deal with
              SauceLabs. Please note, the files shown in Figma were originally created in Sketch. Some elements did not
              translate perfectly, so if you see issues, this is likely the culprit.
            </p>
            <p className="text-sm">
              <Link href="#" className="text-white underline hover:text-gray-200">
                View screens from the project in Figma
              </Link>
            </p>
          </AlertDescription>
        </Alert>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Situation</h3>
          <p className="text-base mb-6">
            JP Morgan Chase wanted to sign a large deal with us but before they do, they needed a way to allocate test
            concurrency, and users, to different properties under their umbrella.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Task</h3>
          <p className="text-base mb-6">
            I served as the lead designer. My role was to work with Product, and solution engineers. I did not have
            direct access to the customers, but had customer communication via product managers.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Action</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-6">
            <li>Collect all requirements, customer feedback.</li>
            <li>Meet weekly with product team, and other stakeholders.</li>
            <li>Create multiple prototypes and share with JPMC.</li>
            <li>Launch the final solution.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Result</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>One of the largest contracts in SauceLabs history was inked!</li>
            <li>As far as I know, this product is being used today.</li>
          </ul>

          <div className="mt-8">
            <Link href="#" className="text-blue-600 hover:underline">
              View screens from the project in Figma
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
