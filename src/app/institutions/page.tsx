import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from "next/link";
import InstitutionalVideo from "@/components/InstitutionalVideo";

export const metadata: Metadata = {
  title: 'Universities / Institutions | Prompt Techies Academic Partnerships',
  description: 'Empower your educational institution with Prompt Techies. Integrate career events, manage student participation, and access exclusive industry resources.',
};

export default function InstitutionsPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a]">
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#121212] border-b border-white/5 min-h-[60vh] flex items-center">
        <InstitutionalVideo />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto text-left">
          <div className="border border-[#004bff]/30 text-[#004bff] bg-[#004bff]/5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block opacity-0 animate-fade-in-up">
            Institutional Growth
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up animation-delay-100">
            Build the <span className="text-[#004bff] italic">Next Generation</span> of Tech Innovators.
          </h1>
          <div className="text-base lg:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8 space-y-4 opacity-0 animate-fade-in-up animation-delay-200">
            <p>
              Prompt Techies works with universities and institutions to create a powerful ecosystem where students can learn emerging technologies, build real-world projects, participate in innovation challenges, connect with mentors, and access meaningful career and startup opportunities.
            </p>
            <p>
              We help institutions move beyond traditional learning by creating spaces where students don't just study technology. They build with it.
            </p>
          </div>
          <div className="flex items-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link 
              href="https://www.instagram.com/prompt_techies" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#004bff] text-white rounded-full font-bold text-sm hover:bg-[#003cb3] transition-all shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 flex justify-center border-b border-white/5 bg-[#0a0a0a]">
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: "01", title: "Innovation Ecosystem", desc: "Build an active technology and innovation culture on campus through AI programs, technical communities, workshops, hackathons, mentorship, and project-based learning." },
            { id: "02", title: "Student Innovation Programs", desc: "Structured programs that help students explore emerging technologies, develop practical skills, build projects, and transform ideas into working solutions." },
            { id: "03", title: "Industry-Ready Skills", desc: "Hands-on technical bootcamps and learning experiences designed around AI, product development, web technologies, startup building, and evolving industry needs." },
            { id: "04", title: "Opportunity Network", desc: "Connect students with mentors, startups, industry professionals, internships, collaborative projects, and career opportunities through the Prompt Techies ecosystem." }
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl">
              <span className="text-4xl font-bold text-[#004bff] opacity-20 mb-6 block">
                {feature.id}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] flex justify-center border-b border-white/5">
        <div className="w-full max-w-[1200px]">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#004bff] bg-[#004bff]/5 border border-[#004bff]/20 px-4 py-2 rounded-full">What We Build With Institutions</span>
            <h2 className="text-4xl font-bold text-white tracking-tight mt-6">From Campus Learners to Real-World Builders.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI & Emerging Tech Programs", desc: "Practical learning experiences that introduce students to artificial intelligence, modern development tools, emerging technologies, and real-world applications." },
              { title: "Technical Bootcamps", desc: "Focused, hands-on programs where students learn industry-relevant skills and apply them by building practical projects." },
              { title: "Innovation Hackathons", desc: "Challenge-driven events where students form teams, solve meaningful problems, build prototypes, and present their solutions." },
              { title: "Coding Challenges", desc: "Competitive and collaborative technical challenges designed to strengthen problem-solving, engineering thinking, and coding confidence." },
              { title: "Internship & Enterprise AI Partnerships", desc: "Creating pathways for students to gain practical exposure through internships, startup collaborations, mentorship, industry projects, and professional opportunities." },
              { title: "Ideation & Startup Bootcamps", desc: "Helping students move through the complete innovation journey: Problem → Idea → Validation → Prototype → Product → Startup." }
            ].map((service, i) => (
              <div key={i} className="p-10 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl hover:border-[#004bff]/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm mb-4">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Works Section */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a]">
        <div className="w-full max-w-[1200px] flex flex-col items-center text-center">
          <div className="mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#004bff]">Prompt Techies in Action</span>
            <h2 className="text-4xl font-bold text-white tracking-tight mt-6">Ideas Become Projects. Students Become Builders.</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Explore our workshops, innovation programs, hackathons, technical initiatives, and institutional collaborations.</p>
          </div>
          
          <div className="w-full bg-gradient-to-br from-[#004bff] to-[#002e99] rounded-[32px] md:rounded-[64px] p-8 md:p-20 flex flex-col items-center gap-10 border border-white/10 shadow-2xl shadow-[#004bff]/10">
            <h3 className="text-2xl lg:text-3xl text-white font-normal leading-tight max-w-3xl">
              Prompt Techies is building an ecosystem where students can <span className="font-bold">learn, experiment, build, collaborate, innovate, and create opportunities that extend beyond the classroom.</span>
            </h3>
            <Link 
              href="/events" 
              className="px-10 py-5 bg-white text-[#004bff] rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              View Recent Works
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
