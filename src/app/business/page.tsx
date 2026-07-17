import { Metadata } from 'next';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Corporate AI Growth Solutions | Partner with Prompt Techies',
  description: 'Accelerate AI adoption through Prompt Techies innovation ecosystem. Connect your AI products, APIs, and platforms with the next generation of developers, startups, educators, and enterprise builders.',
};

export default function BusinessPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-[#121212] border-b border-white/5 min-h-[60vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/corp.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up">
            Corporate <span className="text-[#004bff] italic">AI Growth</span> Solutions.
          </h1>
          <p className="text-base lg:text-xl text-gray-400 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up animation-delay-100">
            Accelerate AI adoption through Prompt Techies' innovation ecosystem. Connect your AI products, APIs, and platforms with the next generation of developers, startups, educators, and enterprise builders.
          </p>
        </div>
      </section>

      {/* Main Partnership Blocks */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a] overflow-hidden">
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          <div className="p-10 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl hover:border-[#004bff]/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">AI Product Promotion & Developer Growth</h3>
            <p className="text-base text-gray-400 leading-relaxed mb-8">
              Launch your AI platform to a highly engaged ecosystem of developers, students, startups, and technical professionals. We help AI companies drive awareness, adoption, and real-world usage through technical communities and hands-on experiences.
            </p>
            <ul className="flex flex-col gap-4">
              {["AI Product Launch Campaigns", "API Adoption Programs", "Developer Evangelism", "Technical Community Outreach"].map((pt, j) => (
                <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <div className="w-2 h-2 bg-[#004bff] rounded-full" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl hover:border-[#004bff]/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">AI Ecosystem Partnerships</h3>
            <p className="text-base text-gray-400 leading-relaxed mb-8">
              Partner with Prompt Techies to co-create hackathons, innovation challenges, workshops, research initiatives, and developer programs that showcase your AI technologies in real-world applications.
            </p>
            <ul className="flex flex-col gap-4">
              {["Sponsored AI Hackathons", "Product Workshops & Bootcamps", "AI Research Collaborations", "Innovation Challenges"].map((pt, j) => (
                <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <div className="w-2 h-2 bg-[#004bff] rounded-full" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl hover:border-[#004bff]/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Brand Visibility Across the AI Ecosystem</h3>
            <p className="text-base text-gray-400 leading-relaxed mb-8">
              Expand your brand presence across our network of universities, startups, developer communities, and digital platforms through strategic campaigns designed for technical audiences.
            </p>
            <ul className="flex flex-col gap-4">
              {["University Outreach Programs", "Community Branding Campaigns", "Social & Technical Media Promotion", "Event Sponsorship Opportunities"].map((pt, j) => (
                <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <div className="w-2 h-2 bg-[#004bff] rounded-full" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl hover:border-[#004bff]/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">AI Talent & Innovation Network</h3>
            <p className="text-base text-gray-400 leading-relaxed mb-8">
              Discover skilled AI builders, startup founders, researchers, and developers who have demonstrated their capabilities through real-world projects, competitions, and innovation programs.
            </p>
            <ul className="flex flex-col gap-4">
              {["Verified AI Developers", "Startup & Founder Network", "Project-Based Talent Discovery", "Internship & Hiring Programs"].map((pt, j) => (
                <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <div className="w-2 h-2 bg-[#004bff] rounded-full" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Corporate Impact Section */}
      <section className="py-24 px-6 bg-[#121212] flex justify-center text-center border-t border-white/5">
        <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Partner With Prompt Techies</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-4">
            Grow your AI product, reach technical audiences, build developer communities, and connect with the future of AI innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-br from-[#004bff] to-[#002e99] text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform shadow-[#004bff]/20 border border-white/10">
              Become a Corporate Partner
            </button>
            <button className="px-8 py-4 bg-transparent border border-[#004bff] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#004bff]/10 transition-colors">
              Launch Your AI Ecosystem
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
