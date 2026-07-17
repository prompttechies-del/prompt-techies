import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';
import EventsVideo from '@/components/EventsVideo';

export const metadata: Metadata = {
  title: 'Events & Summits | Prompt Techies Bootcamps',
  description: 'Stay updated on upcoming Prompt Techies events, technical bootcamps, and national leadership summits. Join our flagship Summer Bootcamp 2026.',
};



export default function EventsPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#121212] border-b border-white/5 min-h-[60vh] flex items-center">
        <EventsVideo />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(245,175,25,0.08)] opacity-0 animate-fade-in-up">
            Events, Programs & Impact
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up animation-delay-100">
            Where Students Learn, <span className="text-[#004bff] italic">Build & Lead</span>.
          </h1>
          <p className="text-base lg:text-xl text-gray-400 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
            From AI workshops and technical bootcamps to hackathons, innovation challenges, and student summits, Prompt Techies creates high-impact experiences that turn campuses into active spaces for technology, collaboration, and innovation.
          </p>
        </div>
      </section>

      {/* Flagship Event Card */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a]">
        <div className="w-full max-w-[1200px]">
          <div className="p-8 md:p-16 bg-[#121212] rounded-[28px] md:rounded-[48px] flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl relative overflow-hidden group border border-white/5">
            {/* Background Banner with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/prompt_techies_bootcamp.png"
                alt="Summer Bootcamp Banner"
                fill
                className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/95 to-[#121212]/40" />
            </div>

            <div className="relative z-10 flex flex-col gap-6 lg:max-w-xl">
              <div className="px-4 py-1 bg-gradient-to-r from-[#004bff] to-[#00c8ff] text-white text-[10px] font-bold uppercase tracking-widest rounded-full self-start">
                FLAGSHIP EXPERIENCE
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Prompt Techies Innovation Summit <span className="text-[#004bff] italic">2026</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A high-impact technology and innovation experience bringing together ambitious students, builders, founders, and industry experts to explore emerging technologies, build real-world solutions, exchange ideas, and create meaningful connections across the innovation ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link
                  href="https://www.instagram.com/prompt_techies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-gradient-to-br from-[#004bff] to-[#002e99] text-white rounded-full font-bold text-base shadow-xl shadow-[#004bff]/20 hover:scale-105 transition-transform text-center border border-white/10"
                >
                  Stay Notified
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#004bff] bg-[#004bff]/5 border border-[#004bff]/20 px-4 py-2 rounded-full">Experiences We Create</span>
            <h2 className="text-4xl font-bold text-white tracking-tight mt-6">More Than Events. Real Experiences That Build Futures.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Innovation Summits", desc: "High-energy gatherings connecting students with founders, industry professionals, mentors, creators, and technology leaders." },
              { title: "Technical Hackathons", desc: "Intensive innovation challenges where students collaborate, solve real problems, prototype ideas, and build solutions under pressure." },
              { title: "AI & Technology Bootcamps", desc: "Hands-on learning programs focused on Artificial Intelligence, emerging technologies, development, product building, and practical implementation." },
              { title: "Career Readiness Programs", desc: "Focused experiences that help students strengthen technical skills, build professional confidence, improve portfolios, and prepare for internships and career opportunities." }
            ].map((event, i) => (
              <div key={i} className="p-8 bg-[#121212] border border-white/5 rounded-[32px] shadow-2xl hover:border-[#004bff]/30 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">{event.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a] border-t border-white/5">
        <div className="w-full max-w-[1200px] bg-[#121212] rounded-[32px] md:rounded-[64px] border border-white/5 p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="flex flex-col gap-6 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#004bff]">Bring Prompt Techies to Your Campus</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Ready to Create Something Impactful?</h2>
            <div className="text-lg text-gray-400 leading-relaxed space-y-4">
              <p>
                Partner with Prompt Techies to bring hackathons, AI workshops, technical bootcamps, innovation programs, and student-focused summits to your institution.
              </p>
              <p>
                Together, we can create an environment where students don't just attend events. They <span className="font-bold text-white">learn, build, collaborate, compete, and create something that matters.</span>
              </p>
            </div>
          </div>
          <Link
            href="https://www.instagram.com/prompt_techies"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-gradient-to-br from-[#004bff] to-[#002e99] text-white border border-white/10 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-[#004bff]/10 whitespace-nowrap"
          >
            Host an Event
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
