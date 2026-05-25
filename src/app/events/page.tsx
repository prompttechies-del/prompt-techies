import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Events & Summits | Prompt Techies Bootcamps',
  description: 'Stay updated on upcoming Prompt Techies events, technical bootcamps, and national leadership summits. Join our flagship Summer Bootcamp 2026.',
};

const pastEvents = [
  {
    title: "SAWIT.AI – Gen AI Learning Challenge",
    date: "18-Feb-2025",
    desc: "Empowering Women in AI Education",
    img: "https://ik.imagekit.io/dypkhqxip/IMG_20260227_134707%20(1).jpg?updatedAt=1773266169756"
  },
  {
    title: "Prompt Techies x Crypto Wala",
    date: "22-Jun-2025",
    desc: "Tech Synergy: AI Meets Blockchain",
    img: "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-03-10%20at%2017.48.20.jpeg?updatedAt=1773265591827"
  },
  {
    title: "HACKFORGE 2026",
    date: "25-Oct-2025",
    desc: "48HRS BIGGEST AI HACKTHON",
    img: "https://ik.imagekit.io/dypkhqxip/IMG_20260310_175105.jpg?updatedAt=1773266169996"
  },
  {
    title: "UNDER 25 SUMMIT AT CMRIT HYDERABAD",
    date: "01-Nov-2025",
    desc: "Youth-Driven Innovation and Leadership",
    img: "https://ik.imagekit.io/dypkhqxip/IMG_20260308_131321.jpg?updatedAt=1773266169809"
  }
];

export default function EventsPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#121212] border-b border-white/5">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(245,175,25,0.08)]">
            National Impact
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Events, Summits & <span className="text-[#004bff] italic">Prompt Techies Work</span>.
          </h1>
          <p className="text-base lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
            From technical immersion bootcamps to national leadership summits, we bring the industry to your academic node.
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
                Flagship Program
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Summer Bootcamp <span className="text-[#004bff] italic">2026</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Join our premier national immersion program designed to transform your technical foundation into real-world engineering excellence.
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

      {/* Past Events Gallery */}
      <section className="py-24 px-6 bg-[#0a0a0a] flex justify-center border-t border-white/5">
        <div className="w-full max-w-[1200px]">
          <div className="mb-16 text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#004bff] bg-[#004bff]/5 px-4 py-2 rounded-full border border-[#004bff]/20">National Impact</span>
            <h2 className="text-4xl font-bold text-white tracking-tight mt-6">Snapshots of Excellence</h2>
            <p className="text-sm text-gray-400 mt-4 max-w-xl">A glimpse into our past summits, technical bootcamps, and high-impact innovation cycles across national Prompt Techies nodes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, i) => (
              <div key={i} className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/5 bg-[#121212] shadow-2xl hover:border-[#004bff]/30 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md flex items-center gap-1 shadow-lg">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Completed
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-[#004bff] uppercase tracking-widest bg-[#004bff]/5 border border-[#004bff]/10 px-3 py-1 rounded-full self-start">
                    {event.date}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#004bff] transition-colors leading-tight tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Leadership Summits", desc: "Gatherings focused on bridging the gap between student aspirations and executive-level mentorship." },
              { title: "Technical Hackathons", desc: "Intensive 48-hour sprints where students build, break, and scale real-world solutions." },
              { title: "Placement Bootcamps", desc: "Standardized readiness programs focused on technical evaluation and interview excellence." }
            ].map((event, i) => (
              <div key={i} className="p-10 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl hover:border-[#004bff]/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a] border-t border-white/5">
        <div className="w-full max-w-[1200px] bg-[#121212] rounded-[32px] md:rounded-[64px] border border-white/5 p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="flex flex-col gap-6 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#004bff]">Bring Prompt Techies to your Campus</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Ready to Host an Event?</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Partner with Prompt Techies to bring high-impact technical bootcamps and summits to your institution. Empower your students with industry-tier exposure.
            </p>
          </div>
          <Link
            href="https://www.instagram.com/prompt_techies"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-gradient-to-br from-[#004bff] to-[#002e99] text-white border border-white/10 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-[#004bff]/10 whitespace-nowrap"
          >
            Start Hosting
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
