import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#060608] text-gray-400 pt-20 pb-12 px-8 flex justify-center border-t border-white/5 relative overflow-hidden">
      
      {/* Subtle bottom corner ambient glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#004bff]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 pb-16">
          
          {/* Brand Block */}
          <div className="flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
              <img
                src="/logo.jpg"
                alt="Prompt Techies Logo"
                className="h-10 lg:h-12 rounded-lg shadow-[0_0_15px_rgba(0,75,255,0.15)]"
              />
              <span className="font-mono font-black italic tracking-[0.2em] bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent text-sm uppercase">
                PROMPT TECHIES
              </span>
            </Link>
            
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              Empowering the next generation of technical leaders, developers, and builders with real-world skills, premium mentorship, and global opportunities.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00c8ff]">Official Affiliations</p>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 w-fit">
                <img 
                  src="/logo_msme.png" 
                  alt="MSME" 
                  className="h-12 object-contain brightness-100" 
                />
              </div>
            </div>
          </div>

          {/* Center Locations */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <span className="text-[#00c8ff]">📍</span> Head Office
              </h4>
              <p className="text-xs leading-relaxed text-gray-400 font-normal">
                Prompt Techies<br />
                Flat No. 304, Plot No. 155 & 156,<br />
                Sai Lakshmi Residency, IDPL Colony,<br />
                Beside Reddy’s Factory, Bachupally,<br />
                Medchal-Malkajgiri District,<br />
                Hyderabad, Telangana – 500090.
              </p>
            </div>
          </div>

          {/* Contact Block */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                Direct Support
              </h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="tel:+918008087702"
                  className="flex items-center gap-3.5 text-xs font-semibold text-gray-300 hover:text-[#00c8ff] transition-all cursor-pointer w-fit group"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#004bff]/10 border border-[#004bff]/20 flex items-center justify-center flex-shrink-0 text-[#00c8ff] group-hover:bg-[#004bff] group-hover:text-white transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span>
                  +91 8008087702
                </a>
                <a 
                  href="mailto:prompttechies@gmail.com"
                  className="flex items-center gap-3.5 text-xs font-semibold text-gray-300 hover:text-[#00c8ff] transition-all cursor-pointer w-fit group"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#004bff]/10 border border-[#004bff]/20 flex items-center justify-center flex-shrink-0 text-[#00c8ff] group-hover:bg-[#004bff] group-hover:text-white transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  prompttechies@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-400 mt-2">
              <Link href="https://youtu.be/E6tT3WSOLdk?si=tbaVUUYvh4UCJCiu" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#00c8ff] hover:bg-[#00c8ff]/10 hover:border-[#00c8ff]/30 transition-all hover:scale-110 active:scale-95 duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </Link>
              <Link href="https://www.instagram.com/prompt_techies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#00c8ff] hover:bg-[#00c8ff]/10 hover:border-[#00c8ff]/30 transition-all hover:scale-110 active:scale-95 duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></svg>
              </Link>
              <Link href="https://www.linkedin.com/in/prompt-techies-community-9a705a370" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#00c8ff] hover:bg-[#00c8ff]/10 hover:border-[#00c8ff]/30 transition-all hover:scale-110 active:scale-95 duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright separator */}
        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-medium tracking-wide text-gray-500">
            © 2026 Prompt Techies. All Rights Reserved.
          </p>
          <p className="text-[10px] text-gray-600 font-mono tracking-wider">
            skills &gt; credentials
          </p>
        </div>
      </div>
    </footer>
  );
}
