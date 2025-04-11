import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function OptimizeLiveStudy() {
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

        <h2 className="text-3xl font-bold mb-6">Optimize Live</h2>

        <div className="max-w-4xl mb-12">
          <p className="text-base mb-8">
            StormForge Optimize Live is an automated Kubernetes resource management agent for platform engineering teams
            to continuously rightsize workloads with HPA compatibility. This study was born from a failing flagship
            product that leveraged experimentation to optimize Kubernetes cluster environments. Optimize Live was a full
            pivot in product strategy, and I was served an integral role in helping shape a new product and strategy.
          </p>
        </div>

        <Alert className="bg-[#155e75] text-white border-0 mb-12">
          <AlertDescription className="space-y-2">
            <h3 className="font-bold text-lg">Highlight</h3>
            <p>
              A full pivot from one product that was struggling, to finding market fit, and an eventual acquisition
              March 2025.
            </p>
            <p className="text-sm">
            <Link href="https://www.figma.com/design/NxMFBFB1RUmzLRPHTQBJob/Portfolio?node-id=377-63270&t=GTUPx0hnSAN8PwFo-1" className="text-blue-100 hover:underline">
              View screens from the project in Figma.
            </Link></p>
          </AlertDescription>
        </Alert>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Situation</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Current product Optimize Pro was not gaining market traction.</li>
            <li>People wanted immediate and automatic changes to their environment aka an "easy button."</li>
            <li>
              Potential customers wanted an automated solution to address performance and cost fluctuations in a
              production environment.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Task</h3>
          <p className="text-base mb-6">
            I served as the lead designer. I worked Product and Engineering to identify problems, and potential
            solutions to what a new product looked like. I also served in a strong capacity with user research.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Action</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-6">
            <li>Target market research and competitive analysis.</li>
            <li>SME interviews.</li>
            <li>Week long offsite dedicated to flushing out core strategies.</li>
            <li>Many prototypes were created of different ways to approach.</li>
            <li>Initial UI and product was created quickly.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Target market research</h3>
          <p className="text-base mb-6">
            This was a bit hard. We had a general idea on who we were trying to tap into. We had an idea who are target
            market was through our previous product Optimize Pro. The ideal customers were mid to large cluster
            enterprise customers running Kubernetes. We knew we wanted to focus on Kubernetes to begin, simply because
            we didn't want to spread ourselves thin trying to solve for the entire cloud. Our target personas were
            SRE's, DevOps practitioners of these companies. We thought that if we could impress them, we could make
            moves further up the org to centers of excellence and to the folks setting the budgets.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">SME Interviews</h3>
          <p className="text-base mb-6">
            Since we didn't have a customer base already, we had to reach out to various contacts we had that were in
            the category of our presumed ICP. We leveraged our individual networks and sought out SRE's, and DevOps
            folks in the industry. We brainstormed as a product team what questions to ask, and set up zoom meetings. I
            also set up local meetings with a SRE in my network, and went out for coffee. These interviews were
            essential to understand why our previous product Optimize Pro was not taking hold. Primary insights helped
            us understand that we need to be 1) automated and 2) responsive to live resource usage.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Offsite</h3>
          <p className="text-base mb-6">
            Our team was fully remote. We met for a week long offsite in DC to dive in on our next steps for the
            product, and company. We questioned all of our previous assumption. As a team, we decided that Kubernetes is
            our hill to die on. We also decided that we needed an "easy button" to apply recommendations generated by
            our ML.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Initial User Journey</h3>
          <p className="text-base mb-6">
            We imagined our user journey step by step, and tried to estimate what level of effort it would take to
            accomplish each step.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Prototype, prototype, prototype</h3>
          <p className="text-base mb-6">
            As a designer, one of my best tools is visibility into a problem. Prototypes is the best tool for the job.
            With each prototype, we tested it. Typically we tested internally until we found an approach that we thought
            would work.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Development</h3>
          <p className="text-base mb-6">
            Our team worked tirelessly to produce an entirely new product, and we did it in 6 months. One of the most
            monumental projects in my career.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Result</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>We had our first paying customers!</li>
            <li>Optimize Pro was shelved in favor of Live.</li>
            <li>Product was acquired by CloudBolt in March of 2025.</li>
          </ul>

          <div className="mt-8">
            <Link href="https://www.figma.com/design/NxMFBFB1RUmzLRPHTQBJob/Portfolio?node-id=377-63270&t=GTUPx0hnSAN8PwFo-1" className="text-blue-600 hover:underline">
              View the project in Figma
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
