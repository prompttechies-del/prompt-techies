import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Business Solutions | Partner with Prompt Techies',
  description: 'Bridge the gap between corporate requirements and student ingenuity. Launch student-led R&D projects and acquire top talent through Prompt Techies.',
};

export default function BusinessPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-[#121212] border-b border-white/5">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Corporate Solutions with <span className="text-[#004bff] italic">Prompt Techies</span>.
          </h1>
          <p className="text-base lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Bridging institutional talent with high-impact corporate requirements. Your gateway to verified student ingenuity.
          </p>
        </div>
      </section>

      {/* Main Partnership Blocks */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a] overflow-hidden">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[5/4] rounded-[24px] md:rounded-[48px] overflow-hidden shadow-2xl border border-white/5">
            <Image 
              src="/prompt_techies_business.png"
              alt="Corporate Partnership"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="p-10 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Talent Acquisition Pipeline</h3>
              <p className="text-base text-gray-400 leading-relaxed mb-6">Direct access to a verified pool of Prompt Techies high-performers. We standardize skills and evaluate readiness to ensure your talent acquisition is seamless.</p>
              <ul className="flex flex-col gap-4">
                {["Vetted Student Profiles", "Domain-Specific Talent Nodes", "Internship-to-Role Streams"].map((pt, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                    <div className="w-2 h-2 bg-[#004bff] rounded-full" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Impact Section */}
      <section className="py-20 px-6 bg-[#0a0a0a] flex justify-center text-center border-t border-white/5">
        <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Standardized Talent at Scale</h2>
          <p className="text-base text-gray-400 leading-relaxed">
            Prompt Techies works with corporations to build domain-specific curricula that ensure the talent coming out of our academic nodes is baseline-ready for professional challenges from day one.
          </p>
          <button className="px-10 py-5 bg-gradient-to-br from-[#004bff] to-[#002e99] text-white rounded-full font-bold text-base shadow-xl hover:scale-105 transition-transform shadow-[#004bff]/20 border border-white/10">
            Request Partnership Data
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
