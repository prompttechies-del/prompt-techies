import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full pt-20 md:pt-28 pb-10 flex flex-col items-center overflow-hidden bg-[#121212]">
      {/* Matte Black Background Accent */}
      <div 
        className="absolute top-0 left-0 right-0 h-[80%] md:h-[85%] bg-[#0a0a0a] z-0 transition-all duration-1000 rounded-b-[100px] md:rounded-b-[150px] lg:rounded-b-[200px] border-b border-white/5"
      />

      {/* Hero Content */}
      <div className="relative z-30 px-6 text-center max-w-5xl text-white mb-12">
        <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-3 py-1 rounded-full text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.1em] mb-6 inline-block shadow-[0_0_15px_rgba(245,175,25,0.08)]">
          Welcome to Prompt Techies
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal leading-[1.1] mb-6 tracking-tight text-white">
          Empowering Next-Gen <br className="hidden md:inline" />
          <span className="relative inline-block mt-2 md:mt-0 font-bold md:whitespace-nowrap">
            <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">
              Technical Leaders & Innovators
            </span>
            <span className="absolute left-0 bottom-[-4px] md:bottom-[-6px] w-full h-[4px] md:h-[6px] bg-gradient-to-r from-[#ffe07d] to-[#f5af19] rounded-full"></span>
          </span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-normal text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
          Prompt Techies provides the tools, mentorship, and global network needed to turn your academic foundation into a professional legacy.
        </p>
      </div>

      {/* Hero Image Card - No Frame */}
      <div className="relative w-full max-w-[1600px] px-4 md:px-8 z-20 mb-[-120px] md:mb-[-180px] lg:mb-[-220px]">
        <div className="relative aspect-[16/10] md:aspect-[21/9] lg:aspect-[24/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl mx-auto transform transition-transform duration-700 hover:scale-[1.01]">
          <Image
            src="https://ik.imagekit.io/dypkhqxip/Screenshot%202026-03-12%20at%2003.11.30.png?updatedAt=1773265330453"
            alt="Prompt Techies Community"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Spacer to handle the negative margin overlap properly */}
      <div className="h-20 md:h-32 lg:h-48" />
    </section>
  );
}
