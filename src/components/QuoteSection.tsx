'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function QuoteSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const cardAnimation = (index: number) => ({
    initial: isMobile ? { y: 15, opacity: 0 } : { scale: 0.95, opacity: 0 },
    whileInView: isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1 },
    viewport: { once: true, margin: isMobile ? '-10px' : '-50px' },
    transition: {
      duration: isMobile ? 0.55 : 0.7,
      delay: isMobile ? index * 0.04 : index * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  const quoteWords = [
    "Built", "for", "Students", "Who", "Want", "More", "Than", "Just", "a", "Degree."
  ];

  return (
    <section className="bg-black relative px-4 md:px-6 py-20 md:py-32 font-sans overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .prisma-quote {
          --font-display: var(--font-instrument-serif), serif;
          --font-body: var(--font-almarai), -apple-system, BlinkMacSystemFont, sans-serif;
          font-family: var(--font-body);
        }
        .prisma-quote * {
          font-family: var(--font-body);
        }
        .prisma-quote .font-serif,
        .prisma-quote .font-serif * {
          font-family: var(--font-display) !important;
        }
      ` }} />
      
      <div className="absolute inset-0 bg-[#0a0a0a] pointer-events-none"></div>

      <div className="relative max-w-[1400px] mx-auto prisma-quote">
        
        {/* Header / Quote */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold mb-8 md:mb-12 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
          >
            Core Philosophy
          </motion.div>

          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-5xl mx-auto leading-[1.1] sm:leading-[1.05] flex flex-wrap justify-center gap-x-3 gap-y-1 md:gap-x-5 md:gap-y-2 items-center text-center">
            {quoteWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="inline-block font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] pb-2"
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="mt-16 md:mt-24 max-w-2xl mx-auto flex flex-col items-center gap-6"
          >
            <div className="w-12 h-px bg-[#DEDBC8]/30"></div>
            <p className="text-sm sm:text-base md:text-lg tracking-wide font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] uppercase tracking-[0.08em]">
              Projects by Prompt Techies
            </p>
          </motion.div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 lg:min-h-[500px]">
          
          {/* Card 1 (Image/Video) */}
          <motion.div {...cardAnimation(0)} className="relative rounded-[2rem] overflow-hidden min-h-[380px] md:min-h-[420px] lg:min-h-0 lg:h-full border border-[#212121]">
            <video 
              autoPlay loop muted playsInline preload="none"
              className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform" 
              src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="relative h-full flex items-end p-6 md:p-8">
              <p className="text-2xl sm:text-3xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff]">
                Explore projects built by students, for students
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div {...cardAnimation(1)} className="relative rounded-[2rem] overflow-hidden bg-[#151515] p-6 md:p-8 flex flex-col gap-6 min-h-[380px] md:min-h-[420px] lg:min-h-0 lg:h-full border border-[#212121] group transition-all duration-500 hover:border-[#DEDBC8]/30">
            <img 
              src={"https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"} 
              alt="" 
              className="w-12 h-12 rounded-2xl object-cover shadow-lg border border-[#333]" 
            />
            <h3 className="text-[#DEDBC8] text-xl md:text-2xl font-medium leading-tight tracking-tight">Build Your Hype. <span className="text-gray-500 font-serif italic">(01)</span></h3>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>AI-powered resume creation</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>Smart content suggestions</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>ATS-friendly optimization</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>Get instant ATS score insights</span>
              </li>
            </ul>
            <a href="#" className="mt-auto inline-flex items-center gap-2 font-medium text-sm transition-all hover:opacity-80">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff]">
                💥 Start the Glow-Up
              </span>
              <ArrowRight className="w-4 h-4 text-[#00c8ff] transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div {...cardAnimation(2)} className="relative rounded-[2rem] overflow-hidden bg-[#151515] p-6 md:p-8 flex flex-col gap-6 min-h-[380px] md:min-h-[420px] lg:min-h-0 lg:h-full border border-[#212121] group transition-all duration-500 hover:border-[#DEDBC8]/30">
            <img 
              src={"https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"} 
              alt="" 
              className="w-12 h-12 rounded-2xl object-cover shadow-lg border border-[#333]" 
            />
            <h3 className="text-[#DEDBC8] text-xl md:text-2xl font-medium leading-tight tracking-tight">AI Tools Directory. <span className="text-gray-500 font-serif italic">(02)</span></h3>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>100+ curated AI tools</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>Organized by category and use case</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>Updated with the latest AI innovations</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>Hidden gems curated by the community</span>
              </li>
            </ul>
            <a href="https://techiestools.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 font-medium text-sm transition-all hover:opacity-80">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff]">
                💎 Unlock the Stack
              </span>
              <ArrowRight className="w-4 h-4 text-[#00c8ff] transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Card 4 */}
          <motion.div {...cardAnimation(3)} className="relative rounded-[2rem] overflow-hidden bg-[#151515] p-6 md:p-8 flex flex-col gap-6 min-h-[380px] md:min-h-[420px] lg:min-h-0 lg:h-full border border-[#212121] group transition-all duration-500 hover:border-[#DEDBC8]/30">
            <img 
              src={"https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"} 
              alt="" 
              className="w-12 h-12 rounded-2xl object-cover shadow-lg border border-[#333]" 
            />
            <h3 className="text-[#DEDBC8] text-xl md:text-2xl font-medium leading-tight tracking-tight">MindEase.AI. <span className="text-gray-500 font-serif italic">(03)</span></h3>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>A safe space to check in with yourself</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>Quick mood insights and mindful resets</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-[#E1E0CC]/70">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00c8ff]" />
                <span>Small steps toward a healthier mindset</span>
              </li>
            </ul>
            <a href="https://mindeaseai-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 font-medium text-sm transition-all hover:opacity-80">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff]">
                🫶💙 Recharge Your Mind
              </span>
              <ArrowRight className="w-4 h-4 text-[#00c8ff] transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
