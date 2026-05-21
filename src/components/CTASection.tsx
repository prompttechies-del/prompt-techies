"use client";

import React from "react";

export default function CTASection() {
  return (
    <section className="velorah-container relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-[hsl(201,100%,13%)] text-white">
      {/* Localized Stylesheet for Fonts, Color Variables, Liquid Glass & Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');

        .velorah-container {
          --background: 201 100% 13%;
          --foreground: 0 0% 100%;
          --muted-foreground: 240 4% 66%;
          --primary: 0 0% 100%;
          --primary-foreground: 0 0% 4%;
          --secondary: 0 0% 10%;
          --muted: 0 0% 10%;
          --accent: 0 0% 10%;
          --border: 0 0% 18%;
          --input: 0 0% 18%;
          
          --font-display: 'Instrument Serif', serif;
          --font-body: 'Inter', sans-serif;

          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
          font-family: var(--font-body);
        }

        .velorah-container .text-foreground {
          color: hsl(var(--foreground));
        }

        .velorah-container .text-muted-foreground {
          color: hsl(var(--muted-foreground));
        }

        /* Liquid Glass Styling */
        .velorah-container .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .velorah-container .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.45) 0%,
            rgba(255, 255, 255, 0.15) 20%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 0.15) 80%,
            rgba(255, 255, 255, 0.45) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Animations */
        @keyframes velorah-fade-rise {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .velorah-container .animate-fade-rise {
          animation: velorah-fade-rise 0.8s ease-out both;
        }

        .velorah-container .animate-fade-rise-delay {
          animation: velorah-fade-rise 0.8s ease-out 0.2s both;
        }

        .velorah-container .animate-fade-rise-delay-2 {
          animation: velorah-fade-rise 0.8s ease-out 0.4s both;
        }
      ` }} />

      {/* Fullscreen Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Hero Section Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-7xl mx-auto w-full">
        <h1 
          className="animate-fade-rise text-[#D4AF37] text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl font-normal select-none drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Don't Just Graduate. <br />
          <em className="not-italic bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent pb-1">Build Something That Matters.</em>
        </h1>

        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed select-none">
          Join a thriving community of students, creators, and innovators building skills, launching projects, and creating meaningful impact together.
        </p>

        <a 
          href="https://chat.whatsapp.com/D9eITx9D35RDZupF1zNust"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-rise-delay-2 liquid-glass inline-block rounded-full px-10 py-3.5 text-sm font-black text-[#00f0ff] mt-12 hover:scale-[1.05] transition-all duration-500 cursor-pointer shadow-[0_0_20px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] tracking-widest uppercase relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full" />
          <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">🌟 Join the Builders Club</span>
        </a>
      </div>


    </section>
  );
}
