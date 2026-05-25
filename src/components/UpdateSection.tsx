import Link from 'next/link';

export default function UpdateSection() {
  return (
    <section className="w-full bg-[#0a0a0a] pb-24 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1600px] bg-gradient-to-br from-[#0c0c0e] via-[#121216] to-[#0a0a0c] border border-white/10 rounded-[32px] md:rounded-[48px] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16 shadow-2xl shadow-black/50">
        
        {/* Background Video Animation */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="none"
          className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform opacity-[0.22] pointer-events-none z-0" 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
        />

        {/* Fade overlay to blend the video */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

        {/* Neon Ambient Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#004bff]/15 blur-[120px] pointer-events-none z-0" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#00c8ff]/10 blur-[120px] pointer-events-none z-0" />

        {/* Left Column - Hero Statement & Action */}
        <div className="flex-1 flex flex-col items-start justify-center relative z-10 gap-6 lg:max-w-2xl">
          {/* Gen-Z Neon Badge */}
          <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,175,25,0.08)]">
            <span className="w-2 h-2 rounded-full bg-[#f5af19] animate-pulse" />
            Join the movement
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Join Prompt Techies — <br />
            <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent bg-size-200 animate-pulse">
              Where Skills Pay the Bills.
            </span>
          </h2>
          
          <p className="text-base md:text-lg font-normal text-gray-400 leading-relaxed max-w-xl">
            A career-focused community by Prompt Techies helping students level up with real skills, mentorship, and internship opportunities to build successful future careers.
          </p>

          <div className="pt-4 w-full sm:w-auto">
            <Link
              href="https://forms.gle/L2rvjg4DvLUY6PR26"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full sm:w-auto justify-center items-center px-12 py-5 bg-gradient-to-r from-[#00c8ff] to-[#004bff] text-white rounded-full text-xs font-black uppercase tracking-[0.2em] hover:from-[#00b0e0] hover:to-[#003cb3] transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.98] shadow-[0_0_30px_rgba(0,75,255,0.45)]"
            >
              {/* Pulse overlay */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00c8ff] to-[#004bff] opacity-50 blur-lg group-hover:opacity-100 transition-opacity pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2">
                Register Now
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column - Feature Perks Stack */}
        <div className="flex-1 flex flex-col justify-center relative z-10 gap-4 max-w-xl">
          {/* Perk 1 */}
          <div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] p-6 rounded-2xl transition-all duration-300 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00c8ff]/10 to-[#004bff]/10 border border-[#00c8ff]/20 flex items-center justify-center flex-shrink-0 text-[#00c8ff] text-xl font-bold">
              ⚡
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">Real-World Skills</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Skip the fluff. Build production-grade code, deploy fullstack apps, and make a portfolio that actually gets you hired.</p>
            </div>
          </div>

          {/* Perk 2 */}
          <div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] p-6 rounded-2xl transition-all duration-300 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00c8ff]/10 to-[#004bff]/10 border border-[#00c8ff]/20 flex items-center justify-center flex-shrink-0 text-[#00c8ff] text-xl font-bold">
              🔥
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">Pro Mentorship</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Connect with devs and leaders from Google, Meta, and the world's most disruptive startups to fast-track your growth.</p>
            </div>
          </div>

          {/* Perk 3 */}
          <div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] p-6 rounded-2xl transition-all duration-300 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00c8ff]/10 to-[#004bff]/10 border border-[#00c8ff]/20 flex items-center justify-center flex-shrink-0 text-[#00c8ff] text-xl font-bold">
              💼
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">Guaranteed Internships</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Get first-dibs on high-impact internships at top tech companies where your work actually matters.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
