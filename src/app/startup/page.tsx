import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Startup Node | Prompt Techies Venture Building',
  description: 'Transforming student ideas into scalable startups. Prompt Techies is a venture-building platform providing structure, speed, and support for real-world products.',
};

export default function StartupPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#121212] border-b border-white/5">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <div className="border border-[#004bff]/30 text-[#004bff] bg-[#004bff]/5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
            Venture-Building Platform
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Build your legacy <br /><span className="text-[#004bff] italic">with Prompt Techies</span>.
          </h1>
          <p className="text-base lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
            We transform student ideas into scalable startups. We work at the earliest stage—where ideas are raw—and provide the structure, speed, and support needed to turn them into real, market-ready products.
          </p>
        </div>
      </section>

      {/* Why it exists Section */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a] border-b border-white/5">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-3xl font-bold text-white tracking-tight">Why does Prompt Techies exist?</h2>
            <p className="text-base text-gray-400 leading-relaxed">
              Across campuses, thousands of ideas never move beyond discussions. The gap isn’t creativity—it’s execution, access, and direction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Reduce the friction of starting up",
                "Provide real-world building infrastructure",
                "Enable faster validation",
                "Smarter execution"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-[#004bff] rounded-full" />
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#121212] border border-white/5 p-10 rounded-[40px] text-white shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-white">What do we do?</h3>
            <p className="text-base text-gray-400 mb-8">We actively build and support early-stage startups through a structured, execution-first model.</p>
            <div className="space-y-4">
              {[
                { title: "Validation", desc: "Idea validation and problem clarity" },
                { title: "MVP Development", desc: "Hardware & software development support" },
                { title: "Live Testing", desc: "Real-world testing and iteration" },
                { title: "Scaling", desc: "Startup formation and early scaling" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col border-l border-[#004bff]/30 pl-4 py-1">
                  <span className="text-xs font-bold text-[#004bff] uppercase tracking-widest">{item.title}</span>
                  <span className="text-sm text-gray-300">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-6 bg-[#0a0a0a] flex justify-center border-b border-white/5">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { val: "50+", label: "Active Projects" },
              { val: "12+", label: "Institutional Ecosystems" },
              { val: "100+", label: "Student Builders" },
              { val: "Many", label: "MVPs Deployed" },
              { val: "Growing", label: "Startup Pipeline" }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col items-center text-center ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                <span className="text-3xl font-black bg-gradient-to-r from-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">{stat.val}</span>
                <span className="text-[10px] uppercase font-bold text-[#004bff] tracking-widest mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Benefits */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a] border-b border-white/5">
        <div className="w-full max-w-[1200px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">What do founders get?</h2>
            <p className="text-gray-400 mt-2 text-sm italic">We don’t just guide—we actively support the build process.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Infrastructure",
                points: ["End-to-end MVP development support", "Scalable system architecture", "Hands-on engineering guidance"]
              },
              {
                title: "Mentorship & Strategy",
                points: ["Access to founders and experts", "Direction on product and growth", "Execution-focused strategy"]
              },
              {
                title: "Startup Enablement",
                points: ["Legal and operational support", "Access to networks & partnerships", "Pathway to formal formation"]
              }
            ].map((box, i) => (
              <div key={i} className="p-10 border border-white/5 rounded-[40px] hover:border-[#004bff]/30 transition-all bg-[#121212] shadow-2xl">
                <h3 className="text-lg font-bold text-white mb-6 border-b border-[#004bff]/20 pb-4">{box.title}</h3>
                <ul className="space-y-4">
                  {box.points.map((p, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#004bff] rounded-full mt-1.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a] text-white border-b border-white/5">
        <div className="w-full max-w-[1200px]">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#004bff]">The Process</span>
            <h2 className="text-3xl font-bold tracking-tight mt-4 text-white">The Startup Roadmap</h2>
            <p className="text-gray-400 mt-2 text-sm">A high-speed journey from raw idea to market company.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", stage: "Ideation", title: "Problem Definition", desc: ["Identify and refine the core problem", "Validate relevance and potential impact"] },
              { step: "02", stage: "Validation", title: "Can this work?", desc: ["Build a functional MVP", "Test with early adopters"] },
              { step: "03", stage: "Incubation", title: "Reality Check", desc: ["Deploy within institutional ecosystems", "Iterate using real-world feedback"] },
              { step: "04", stage: "Scale", title: "Market Entry", desc: ["Formalize the startup", "Prepare for growth and funding"] }
            ].map((phase, i) => (
              <div key={i} className="relative flex flex-col gap-4 p-6 border border-white/5 rounded-3xl bg-[#121212] shadow-2xl">
                <span className="text-4xl font-bold text-[#004bff]/10 absolute top-4 right-6">{phase.step}</span>
                <span className="text-[10px] font-bold text-[#004bff] uppercase tracking-widest">{phase.stage}</span>
                <h4 className="text-base font-bold uppercase border-b border-white/5 pb-2 text-white">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.desc.map((d, k) => (
                    <li key={k} className="text-[11px] text-gray-400 leading-relaxed">• {d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Pillars Section */}
      <section className="py-24 px-6 border-b border-white/5 flex justify-center bg-[#0a0a0a]">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-12">What makes us different?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Execution > Theory", "Speed > Perfection", "Real users > Assumptions", "Building > Pitching"].map((pill, i) => (
              <div key={i} className="px-8 py-3 bg-gradient-to-br from-[#004bff] to-[#002e99] text-white rounded-full font-bold text-sm shadow-xl shadow-[#004bff]/10 border border-white/10">
                {pill}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-10 italic">We focus on outcomes, not just ideas.</p>
        </div>
      </section>

      {/* Initiatives & Vision */}
      <section className="py-24 px-6 bg-[#0a0a0a] flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">Our Initiatives & Brands</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-8">
                <span className="text-2xl font-black text-white opacity-20 select-none">CLEED</span>
                <span className="text-2xl font-black text-white opacity-20 select-none">LEARN GRID</span>
                <span className="text-2xl font-black text-[#004bff] select-none">PROMPT TECHIES</span>
              </div>
              <p className="text-sm text-gray-400 max-w-md">An ecosystem where student innovation consistently turns into real companies.</p>
            </div>
          </div>
          <div className="p-10 bg-[#121212] border border-white/5 text-white rounded-[40px] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6 text-[#004bff]">Long-Term Vision</h2>
              <p className="text-base text-gray-400 leading-relaxed">
                To create a distributed, institution-driven startup ecosystem that produces high-quality, founder-ready startups at scale.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#004bff] opacity-5 rounded-full -mr-16 -mt-16" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="px-6 py-16 bg-[#0a0a0a]">
        <section className="p-8 md:p-16 bg-gradient-to-br from-[#004bff] to-[#002e99] text-white flex justify-center text-left rounded-[32px] md:rounded-[64px] max-w-[1200px] mx-auto overflow-hidden relative shadow-2xl border border-white/10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full -mr-48 -mb-48" />
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">Ready to build your legacy? <br /><span className="text-white/80">Apply to the Startup Node.</span></h2>
            <Link
              href="https://forms.gle/CPxWiQL83piHpdDm8"
              className="px-10 py-5 bg-white text-[#004bff] rounded-full font-bold text-base shadow-xl hover:scale-105 transition-transform"
            >
              Start Building
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
