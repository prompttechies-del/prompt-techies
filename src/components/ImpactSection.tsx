'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, BookOpen, Layers, Award } from 'lucide-react';

function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const WordsPullUpMultiStyle = ({ segments = [] }: { segments: { text: string; className: string }[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const allWords: { word: string; className: string }[] = [];
  segments.forEach((segment) => {
    const words = segment.text.split(' ');
    words.forEach((word) => {
      if (word.trim() !== '') {
        allWords.push({ word, className: segment.className });
      }
    });
  });

  return (
    <div ref={ref} className="flex flex-wrap justify-center text-center gap-y-2">
      {allWords.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.05,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className={`inline-block mx-1.5 ${item.className}`}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
};

export default function ImpactSection() {
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

  return (
    <section className="prisma-impact relative w-full bg-[#000000] py-28 px-4 md:px-8 flex flex-col items-center overflow-hidden">
      {/* Localized Stylesheet for Fonts & Prisma Utilities */}
      <style dangerouslySetInnerHTML={{ __html: `
        .prisma-impact {
          --font-display: var(--font-instrument-serif), serif;
          --font-body: var(--font-almarai), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-family: var(--font-body);
        }

        .prisma-impact * {
          font-family: var(--font-body);
        }

        .prisma-impact .font-serif,
        .prisma-impact .font-serif * {
          font-family: var(--font-display) !important;
        }



        .prisma-impact .liquid-glass {
          background: rgba(222, 219, 200, 0.02);
          background-blend-mode: luminosity;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          position: relative;
          overflow: hidden;
        }

        .prisma-impact .liquid-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            180deg,
            rgba(222, 219, 200, 0.25) 0%,
            rgba(222, 219, 200, 0.08) 20%,
            rgba(222, 219, 200, 0) 40%,
            rgba(222, 219, 200, 0) 60%,
            rgba(222, 219, 200, 0.08) 80%,
            rgba(222, 219, 200, 0.25) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      ` }} />

      {/* Fullscreen Cinematic Background Video Layer with scroll fade-and-scale */}
      <motion.div 
        initial={isMobile ? { opacity: 0 } : { scale: 1.06, opacity: 0 }}
        whileInView={isMobile ? { opacity: 0.65 } : { scale: 1, opacity: 0.65 }}
        viewport={{ once: true }}
        transition={{ duration: isMobile ? 0.8 : 1.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-60 transform-gpu will-change-transform"
        />
      </motion.div>

      {/* Cinematic Overlays and Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)] z-1 pointer-events-none" />


      {/* Ambient Moody Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#004bff]/5 rounded-full blur-[160px] pointer-events-none z-1" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00c8ff]/4 rounded-full blur-[140px] pointer-events-none z-1" />
 
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 max-w-4xl px-4">
          {/* Badge Label */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="liquid-glass rounded-full px-6 py-2 border border-[#ffe07d]/35 text-[#ffe07d] text-[10px] font-semibold mb-8 uppercase tracking-[0.25em] select-none drop-shadow-[0_0_8px_rgba(245,175,25,0.25)]"
          >
            Prompt Techies Impact
          </motion.div>
 
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight mb-8 flex flex-wrap justify-center gap-x-2 gap-y-1 md:gap-x-4 md:gap-y-2 items-center text-center">
            {["Powering", "India's", "Next", "Generation", "of", "AI", "Builders."].map((word, index) => (
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
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] pb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
 
          {/* Description */}
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-sm md:text-base font-normal text-gray-400 leading-relaxed max-w-2xl"
          >
            At Prompt Techies, we are dedicated to engineering technology that empowers businesses, developers, and enterprises across the globe.
          </motion.p>
        </div>
 
        {/* Grid Layout - Clean 4-Column Symmetry */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {/* Card 1 */}
          <motion.div {...cardAnimation(0)} className="bg-black/30 backdrop-blur-md rounded-[24px] p-6 md:p-8 flex flex-col items-start justify-between text-white border border-white/5 hover:border-[#00c8ff]/25 hover:bg-black/40 hover:shadow-[0_20px_50px_rgba(0,200,255,0.08)] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#004bff]/5 rounded-full blur-[50px] pointer-events-none transition-all duration-500 group-hover:scale-125" />
            <div className="w-8 h-8 rounded-xl bg-[#004bff]/5 border border-[#00c8ff]/20 flex items-center justify-center text-[#00c8ff] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-inner shadow-[#00c8ff]/10">
              <Users className="w-4 h-4" />
            </div>
            <div className="mt-8">
              <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00c8ff] to-[#004bff] bg-clip-text text-transparent tracking-tight block mb-3 drop-shadow-[0_0_15px_rgba(0,200,255,0.15)]">
                <Counter end={5000} suffix="+" />
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#00c8ff] transition-colors duration-300">Developers Engaged</h3>
              <p className="text-xs md:text-sm font-normal text-gray-400 leading-relaxed">
                Building India's growing network of AI developers, product builders, and innovators through hands-on technical experiences.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div {...cardAnimation(1)} className="bg-black/30 backdrop-blur-md rounded-[24px] p-6 md:p-8 flex flex-col items-start justify-between text-white border border-white/5 hover:border-[#00c8ff]/25 hover:bg-black/40 hover:shadow-[0_20px_50px_rgba(0,200,255,0.08)] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#004bff]/5 rounded-full blur-[50px] pointer-events-none transition-all duration-500 group-hover:scale-125" />
            <div className="w-8 h-8 rounded-xl bg-[#004bff]/5 border border-[#00c8ff]/20 flex items-center justify-center text-[#00c8ff] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-inner shadow-[#00c8ff]/10">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="mt-8">
              <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00c8ff] to-[#004bff] bg-clip-text text-transparent tracking-tight block mb-3 drop-shadow-[0_0_15px_rgba(0,200,255,0.15)]">
                <Counter end={75} suffix="+" />
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#00c8ff] transition-colors duration-300">Institutional Partnerships</h3>
              <p className="text-xs md:text-sm font-normal text-gray-400 leading-relaxed">
                Collaborating with universities, innovation hubs, and organizations to accelerate technology adoption and developer growth.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div {...cardAnimation(2)} className="bg-black/30 backdrop-blur-md rounded-[24px] p-6 md:p-8 flex flex-col items-start justify-between text-white border border-white/5 hover:border-[#00c8ff]/25 hover:bg-black/40 hover:shadow-[0_20px_50px_rgba(0,200,255,0.08)] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#004bff]/5 rounded-full blur-[50px] pointer-events-none transition-all duration-500 group-hover:scale-125" />
            <div className="w-8 h-8 rounded-xl bg-[#004bff]/5 border border-[#00c8ff]/20 flex items-center justify-center text-[#00c8ff] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-inner shadow-[#00c8ff]/10">
              <Layers className="w-4 h-4" />
            </div>
            <div className="mt-8">
              <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00c8ff] to-[#004bff] bg-clip-text text-transparent tracking-tight block mb-3 drop-shadow-[0_0_15px_rgba(0,200,255,0.15)]">
                <Counter end={50} suffix="+" />
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#00c8ff] transition-colors duration-300">Hackathons Powered</h3>
              <p className="text-xs md:text-sm font-normal text-gray-400 leading-relaxed">
                Driving innovation through AI hackathons, coding competitions, and product-building challenges nationwide.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div {...cardAnimation(3)} className="bg-black/30 backdrop-blur-md rounded-[24px] p-6 md:p-8 flex flex-col items-start justify-between text-white border border-white/5 hover:border-[#00c8ff]/25 hover:bg-black/40 hover:shadow-[0_20px_50px_rgba(0,200,255,0.08)] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#004bff]/5 rounded-full blur-[50px] pointer-events-none transition-all duration-500 group-hover:scale-125" />
            <div className="w-8 h-8 rounded-xl bg-[#004bff]/5 border border-[#00c8ff]/20 flex items-center justify-center text-[#00c8ff] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-inner shadow-[#00c8ff]/10">
              <Award className="w-4 h-4" />
            </div>
            <div className="mt-8">
              <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00c8ff] to-[#004bff] bg-clip-text text-transparent tracking-tight block mb-3 drop-shadow-[0_0_15px_rgba(0,200,255,0.15)]">
                <Counter end={100} suffix="+" />
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#00c8ff] transition-colors duration-300">Technical Programs</h3>
              <p className="text-xs md:text-sm font-normal text-gray-400 leading-relaxed">
                Conducting AI workshops, engineering bootcamps, startup sessions, and developer-focused learning experiences.
              </p>
            </div>
          </motion.div>
          
          {/* Card 5 */}
          <motion.div {...cardAnimation(4)} className="bg-black/30 backdrop-blur-md rounded-[24px] p-6 md:p-8 flex flex-col items-start justify-between text-white border border-white/5 hover:border-[#00c8ff]/25 hover:bg-black/40 hover:shadow-[0_20px_50px_rgba(0,200,255,0.08)] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#004bff]/5 rounded-full blur-[50px] pointer-events-none transition-all duration-500 group-hover:scale-125" />
            <div className="w-8 h-8 rounded-xl bg-[#004bff]/5 border border-[#00c8ff]/20 flex items-center justify-center text-[#00c8ff] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-inner shadow-[#00c8ff]/10">
              <Layers className="w-4 h-4" />
            </div>
            <div className="mt-8">
              <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00c8ff] to-[#004bff] bg-clip-text text-transparent tracking-tight block mb-3 drop-shadow-[0_0_15px_rgba(0,200,255,0.15)]">
                <Counter end={500} suffix="+" />
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#00c8ff] transition-colors duration-300">Products & Projects Built</h3>
              <p className="text-xs md:text-sm font-normal text-gray-400 leading-relaxed">
                Supporting the creation of real-world AI products, software platforms, and scalable digital solutions.
              </p>
            </div>
          </motion.div>
          
          {/* Card 6 */}
          <motion.div {...cardAnimation(5)} className="bg-black/30 backdrop-blur-md rounded-[24px] p-6 md:p-8 flex flex-col items-start justify-between text-white border border-white/5 hover:border-[#00c8ff]/25 hover:bg-black/40 hover:shadow-[0_20px_50px_rgba(0,200,255,0.08)] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#004bff]/5 rounded-full blur-[50px] pointer-events-none transition-all duration-500 group-hover:scale-125" />
            <div className="w-8 h-8 rounded-xl bg-[#004bff]/5 border border-[#00c8ff]/20 flex items-center justify-center text-[#00c8ff] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-inner shadow-[#00c8ff]/10">
              <Award className="w-4 h-4" />
            </div>
            <div className="mt-8">
              <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00c8ff] to-[#004bff] bg-clip-text text-transparent tracking-tight block mb-3 drop-shadow-[0_0_15px_rgba(0,200,255,0.15)]">
                <Counter end={25} suffix="+" />
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#00c8ff] transition-colors duration-300">Expert Jury Panels</h3>
              <p className="text-xs md:text-sm font-normal text-gray-400 leading-relaxed">
                Contributing as judges and mentors in national hackathons, startup showcases, and innovation competitions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
