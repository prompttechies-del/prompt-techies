import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full bg-[#0a0a0a] pt-12 md:pt-20 pb-16 px-4 md:px-8 flex flex-col items-center gap-12">
      <div className="w-full max-w-[1600px] bg-[#121212] rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col lg:flex-row items-center p-8 md:p-12 lg:px-20 lg:py-6 gap-10 lg:gap-12 border border-white/5 shadow-2xl shadow-black/30">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-white">
          <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-4 py-1 rounded-full text-[10px] font-semibold mb-8 uppercase tracking-wider inline-block shadow-[0_0_15px_rgba(245,175,25,0.08)]">
            Our Mission
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 tracking-tight text-white">
            Build Your Startup Legacy with <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">Prompt Techies</span>
          </h2>
          <div className="flex items-center gap-2 mb-6 bg-gradient-to-r from-[#ffe07d] to-[#f5af19] bg-clip-text text-transparent font-black tracking-[0.15em] text-xs uppercase">
            Dream. Develop. Deploy. ⚡
          </div>
          <p className="text-base font-normal text-gray-400 leading-relaxed mb-10 max-w-xl">
            As a DPIIT-recognized AI technology company, we engineer intelligent solutions that transform industries. We build scalable software, developer tools, and enterprise AI platforms that accelerate innovation for startups and businesses worldwide.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/about" 
              className="px-8 py-3 border border-white/30 rounded-full text-sm font-normal hover:bg-white/5 transition-all text-white whitespace-nowrap"
            >
              Learn More
            </Link>
            <Link 
              href="https://prompt-os-x.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap bg-gradient-to-r from-[#00c8ff] to-[#004bff] text-white hover:scale-105 shadow-[0_0_15px_rgba(0,200,255,0.3)] flex items-center gap-2"
            >
              Try Prompt OS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </Link>
          </div>
        </div>

        {/* Right Video Animation */}
        <div className="flex-1 w-full aspect-[4/3] relative rounded-[16px] overflow-hidden group border border-white/10 shadow-2xl">
          <video 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            muted 
            autoPlay 
            loop 
            playsInline 
            preload="none" 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
          />
        </div>
      </div>
    </section>
  );
}
