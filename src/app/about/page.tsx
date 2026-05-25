import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Prompt Techies | Mission & Vision',
  description: 'Explore the mission, vision, and core values of Prompt Techies. We are dedicated to nurturing the next generation of technical and entrepreneurial leaders.',
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#121212] border-b border-white/5">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(245,175,25,0.08)]">
            Our Foundation
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Our Mission & <span className="text-[#004bff] italic">Prompt Techies</span>.
          </h1>
          <p className="text-base lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Prompt Techies is a dedicated national portal and initiative designed to bridge the gap between academic foundations and professional success.
          </p>
        </div>
      </section>

      {/* Visual Identity Section */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a] overflow-hidden">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] rounded-[24px] md:rounded-[48px] overflow-hidden shadow-2xl border border-white/5">
            <Image
              src="/about_nurturing.png"
              alt="Prompt Techies Innovation Hub"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-white tracking-tight decoration-[#004bff] decoration-4 underline underline-offset-8">Our Vision</h2>
              <p className="text-lg text-gray-400 leading-relaxed font-normal">
                To build the world's most accessible and high-impact ecosystem for student innovation. We believe that every student, regardless of their background or institution, deserves access to the tools, mentorship, and infrastructure required to transform their academic potential into a professional legacy.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-white tracking-tight decoration-[#004bff] decoration-4 underline underline-offset-8">Our Mission</h2>
              <p className="text-lg text-gray-400 leading-relaxed font-normal">
                By establishing strategic 'Nodes' across national universities, Prompt Techies provides a standardized path for technical excellence. We bridge the gap between classroom learning and industry reality through immersive bootcamps, direct mentorship, and project-based incubation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Poster Section */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a]">
        <div className="w-full max-w-[1200px]">
          <div className="relative w-full rounded-[24px] md:rounded-[48px] overflow-hidden shadow-2xl border border-white/5">
            <Image
              src="/prompt_techies_poster.png"
              alt="Prompt Techies Poster"
              width={1200}
              height={1600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a]">
        <div className="w-full max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#004bff] bg-[#004bff]/5 border border-[#004bff]/20 px-4 py-2 rounded-full">Our Values</span>
            <h2 className="text-4xl font-bold text-white tracking-tight mt-6">The Pillars of Prompt Techies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Standardized Excellence", desc: "Ensuring every student has access to the same high-tier technical resources and mentorship, regardless of location." },
              { title: "Direct Assistance", desc: "Moving beyond theory to provide verified, hands-on support in internships, projects, and entrepreneurship." },
              { title: "National Growth", desc: "Building a interconnected network of nodes that uplift the entire student community simultaneously." }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl hover:border-[#004bff]/30 transition-all group">
                <div className="w-12 h-12 bg-[#004bff]/10 rounded-2xl flex items-center justify-center mb-6 text-[#004bff] font-bold text-xl group-hover:bg-[#004bff] group-hover:text-white transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
