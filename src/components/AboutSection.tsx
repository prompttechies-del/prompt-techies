import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full bg-[#0a0a0a] pt-24 md:pt-32 pb-16 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1600px] bg-[#121212] rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col lg:flex-row items-center p-8 md:p-12 lg:px-20 lg:py-6 gap-10 lg:gap-12 border border-white/5 shadow-2xl shadow-black/30">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-white">
          <div className="bg-[#004bff]/10 text-[#004bff] border border-[#004bff]/20 px-4 py-1 rounded-full text-[10px] font-bold mb-8 uppercase tracking-wider">
            Our Mission
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 tracking-tight text-white">
            Building Future Innovators, Not Just Graduates. 🚀
          </h2>
          <div className="flex items-center gap-2 mb-6 bg-gradient-to-r from-[#ffe07d] to-[#f5af19] bg-clip-text text-transparent font-black tracking-[0.15em] text-xs uppercase">
            Dream. Develop. Deploy. ⚡
          </div>
          <p className="text-base font-normal text-gray-400 leading-relaxed mb-10 max-w-xl">
            We are shaping the next generation of creators, innovators, and industry leaders by bridging the gap between classroom learning and real-world innovation. Through mentorship, hands-on experiences, and a future-driven ecosystem, we empower students to transform ideas into impact and dreams into reality.
          </p>
          <div className="flex items-center gap-4">
            <Link 
              href="/about" 
              className="px-10 py-3 border border-white/30 rounded-full text-sm font-normal hover:bg-white/5 transition-all text-white"
            >
              Learn More
            </Link>
            <Link 
              href="https://platform.prompttechies.in" 
              className="px-10 py-3 bg-[#004bff] text-white rounded-full text-sm font-bold hover:bg-[#003cb3] transition-all shadow-md shadow-[#004bff]/20"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image - Reduced Border Radius */}
        <div className="flex-1 w-full aspect-[4/3] relative rounded-[16px] overflow-hidden">
          <Image 
            src="/mission-image.jpg"
            alt="Prompt Techies Community Event"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
