import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#d1fae5] flex flex-col">
      <Header />

      <main className="flex-1 px-6 md:px-16 lg:px-24 py-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">RESUME</h1>
        <p className="mb-12 text-sm">What I've been up to the last 25 years in tech.</p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-sm mb-4">
                I'm a multi-discipline product designer with 20+ years professional experience. I have worked in a wide
                variety of fields, but have primarily focused on developer tools. I have delivered multiple products
                within automation, CI/CD testing, IT, machine learning, infrastructure, performance and optimization. I
                have built and led multiple design teams and primarily operated as a player-coach for most of my career.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-6">Experience</h2>

              <div className="space-y-10">
                <article>
                  <h3 className="font-medium text-base">Director of Product Design, Design Lead</h3>
                  <p className="text-sm text-[#606060] mb-1">StormForge</p>
                  <p className="text-sm text-[#606060] mb-3">2020 - Present</p>
                  <p className="text-sm mb-3">
                    I was the founding designer for our flagship product Optimize Live which was successfully acquired
                    by CloudBolt. I was in charge of the UX of every workflow for 2 of our 3 products as well as the
                    user interface design. Our focus at StormForge is optimizing large enterprise Kubernetes
                    environments using machine learning.
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-2">
                    <li>
                      Designed the entire product in partnership with executives, product and engineering following
                      standard design processes.
                    </li>
                    <li>Created the design system and worked with engineering and marketing to implement.</li>
                    <li>
                      Served in the Product team where I helped craft our product vision and user interface experience.
                    </li>
                    <li>
                      Coordinated with leadership, other designers, contractors, and other stakeholders from around the
                      company around process, and internal policies.
                    </li>
                    <li>I've led and guided product decisions.</li>
                  </ul>
                </article>

                <article>
                  <h3 className="font-medium text-base">UX Manager, Principal UX Designer</h3>
                  <p className="text-sm text-[#606060] mb-1">Sauce Labs</p>
                  <p className="text-sm text-[#606060] mb-3">Dec 2016 - Nov 2020</p>
                  <p className="text-sm mb-3">
                    At SauceLabs our mission was to provide software testing solutions to the entire software
                    development market. I took over the lead design role, and over time built a team of designers. I
                    took part in integral decisions and managed the user experience for our suite of products.
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-2">
                    <li>
                      Oversaw strategy, UX research/planning, user stories, journey mapping, personas, wireframes,
                      prototypes and visual design along with a UCD focus.
                    </li>
                    <li>Design system creation and retrofit.</li>
                    <li>Delivered multiple product features and enhancements.</li>
                    <li>Integral piece of the product team and assisted in planning, and OKRs.</li>
                    <li>Domestic and overseas staffing and team design.</li>
                  </ul>
                </article>

                <article>
                  <h3 className="font-medium text-base">User Interface Developer, UX Engineer</h3>
                  <p className="text-sm text-[#606060] mb-1">SoFi</p>
                  <p className="text-sm text-[#606060] mb-3">2014 - Q3 2016</p>
                  <p className="text-sm mb-3">
                    With SoFi, I was in a hybrid role where I was half in design, and half in engineering. SoFi was in
                    the growth stage when I joined. I focused on the main product flows, but also contributed in
                    spin-off projects including a social wealth indicator and an online bank.
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-2">
                    <li>Designing UX workflows and prototypes for web and mobile based applications.</li>
                    <li>HTML / CSS / JS Implementation.</li>
                    <li>User testing of proposed and existing user interfaces.</li>
                    <li>Collaboration between UX teams, engineering teams, product and project managers.</li>
                  </ul>
                </article>

                <article>
                  <h3 className="font-medium text-base">UX Engineer, Senior Designer</h3>
                  <p className="text-sm text-[#606060] mb-1">Dell</p>
                  <p className="text-sm text-[#606060] mb-3">Jan 2013 - Q3 2014</p>
                  <p className="text-sm mb-3">
                    With Dell, I worked within the design team as a UI/UX engineer. My main responsibilities was for a
                    website called Insight.com. We also contributed to their service desk products - both desktop and
                    mobile.
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-2">
                    <li>Designing UX workflows and prototypes for web and mobile based applications.</li>
                    <li>HTML / CSS / JS Implementation.</li>
                    <li>User testing of proposed and existing user interfaces.</li>
                    <li>Collaboration between UX teams, engineering teams, product and project managers.</li>
                  </ul>
                </article>

                <article>
                  <h3 className="font-medium text-base">Lead Designer</h3>
                  <p className="text-sm text-[#606060] mb-1">Indaba</p>
                  <p className="text-sm text-[#606060] mb-3">Jan 2010 - Oct 2013</p>
                  <p className="text-sm mb-3">
                    I was in charge of the user interface design and development for this start-up focussing on finding
                    the best crowd-sourced deals from the internet.
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-2">
                    <li>All UI design and essential workflows.</li>
                    <li>Owned the presentation layer of the codebase.</li>
                    <li>Worked closely with all business stakeholders across the company.</li>
                    <li>Created our design system before they were called such.</li>
                  </ul>
                </article>

                <article>
                  <h3 className="font-medium text-base">Web Developer / Multi-Media</h3>
                  <p className="text-sm text-[#606060] mb-1">Kinetic Advertising Group</p>
                  <p className="text-sm text-[#606060] mb-3">2009 - 2010</p>
                  <p className="text-sm mb-3">
                    Kinetic is a Montana-based advertising agency. I served as the staff web-designer and multi-media
                    specialist. I wore a lot of hats here including:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-2">
                    <li>Developed dozens of websites for a wide range of clients.</li>
                    <li>Motion and video producer.</li>
                    <li>In-house photographer.</li>
                    <li>Illustration and print design.</li>
                  </ul>
                </article>

                <article>
                  <h3 className="font-medium text-base">Lead Designer, Design Manager, Co-Founder</h3>
                  <p className="text-sm text-[#606060] mb-1">Dealerspan</p>
                  <p className="text-sm text-[#606060] mb-3">Oct 2004 - Mar 2009</p>
                  <p className="text-sm mb-3">
                    Dealerspan was an end-to-end automobile dealership solution. I was a co-founder here, and served
                    many roles at this series B startup with about 20+ employees. My main role was to oversee all
                    aspects of design but served for a time overseeing both design, product, engineering, and QA.
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-2">
                    <li>Received industry attention to our unique user interface, and seamless UX.</li>
                    <li>Many if not all business functions including seeking out and acquiring funding.</li>
                    <li>Hired and built both engineering and design departments.</li>
                    <li>Served as founding designer creating initial workflows and interface elements.</li>
                    <li>Served as Creative Director.</li>
                    <li>Helped raise funding.</li>
                  </ul>
                </article>

                <article>
                  <h3 className="font-medium text-base">Online Manager, Webmaster</h3>
                  <p className="text-sm text-[#606060] mb-1">Lee Enterprises</p>
                  <p className="text-sm text-[#606060] mb-3">2000 - 2004</p>
                  <p className="text-sm mb-3">
                    With Lee Enterprises, I served as the resident lead web designer, and managed all aspects of the
                    online department.
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-2">
                    <li>
                      Worked with customers to develop websites and online advertising strategy raising online revenue
                      about 300%.
                    </li>
                    <li>Managed and hired content staff.</li>
                    <li>Created, developed, and managed the helenair.com website.</li>
                    <li>
                      Worked with customers to develop websites and online advertising strategy raising online revenue.
                    </li>
                    <li>Managed and hired content staff.</li>
                    <li>Created, developed, and managed the helenair.com website.</li>
                  </ul>
                </article>
              </div>
            </section>
          </div>

          <div>
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>

              <ul className="text-sm space-y-2">
                <li>Proven Leader</li>
                <li>Built and led multiple design teams</li>
                <li>Product founder</li>
                <li>Launched multiple products</li>
                <li>Launched multiple design systems</li>
                <li>Team player</li>
                <li>Front end dev experience</li>
                <li>Overseas working/management</li>
                <li>Motion and photography</li>
                <li>Certified Scrum master</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4">Education</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-sm">AAS Computer Science, University of Montana</h3>
                  <p className="text-sm text-[#606060]">1996-2000</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Find me</h2>

              <p className="text-sm">
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/joshkingdesign" className="text-[#3ddc91] hover:underline">
                  www.linkedin.com/in/joshkingdesign
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
