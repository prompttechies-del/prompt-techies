"use client";

import React, { useEffect, useRef, useState } from "react";
import { Globe, ArrowRight } from "lucide-react";
import InstallPWA from "./InstallPWA";

// Custom SVG definitions for social brand icons because lucide-react lacks them
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);
  const [email, setEmail] = useState("");

  const animateOpacity = (targetOpacity: number, duration: number) => {
    const video = videoRef.current;
    if (!video) return;

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const currentOpacity = parseFloat(video.style.opacity) || 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * progress;
      video.style.opacity = newOpacity.toString();

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(tick);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const timeLeft = video.duration - video.currentTime;
    if (!isNaN(video.duration) && timeLeft <= 0.55 && !fadingOutRef.current) {
      fadingOutRef.current = true;
      animateOpacity(0, 500); // 500ms fade-out
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    // Set opacity=0
    video.style.opacity = "0";

    // Wait 100ms
    setTimeout(() => {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Reset fadingOutRef to false for the new loop
            fadingOutRef.current = false;
            // Fade back in over 500ms
            animateOpacity(1, 500);
          })
          .catch((error) => {
            console.error("Playback failed on loop start: ", error);
          });
      }
    }, 100);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Initialize style to ensure start at opacity 0
    video.style.opacity = "0";

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // 500ms fade-in on mount
          animateOpacity(1, 500);
        })
        .catch((error) => {
          console.warn("Autoplay was prevented, waiting for interaction.", error);
          // Standard low power mode fallback: show the poster image by making the video container visible
          if (videoRef.current) {
            videoRef.current.style.opacity = "0.45";
          }
        });
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/contact";
  };

  return (
    <footer className="relative overflow-hidden bg-black w-full min-h-[650px] flex flex-col justify-between pt-24 pb-12 px-6 md:px-12">
      {/* Liquid Glass and Custom Font CSS Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .premium-logo-font {
          font-family: var(--font-syncopate), sans-serif !important;
          letter-spacing: 0.28em !important;
        }

        .liquid-glass {
          background: rgba(255, 255, 255, 0.015);
          background-blend-mode: luminosity;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          position: relative;
          overflow: hidden;
        }

        .liquid-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.35) 0%,
            rgba(255, 255, 255, 0.12) 20%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 0.12) 80%,
            rgba(255, 255, 255, 0.35) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      ` }} />

      {/* Background Video Layer */}
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        preload="none"
        poster="/featured_bg.png"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%] pointer-events-none z-0 transform-gpu will-change-transform"
        style={{ opacity: 0 }}
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none z-1" />
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-1" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-1" />

      {/* Container holding top and middle layers to position relative above background video */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* TOP CTA AREA */}
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="liquid-glass rounded-full px-5 py-2 text-[#D4AF37] text-xs tracking-wider inline-flex items-center gap-1.5 hover:text-[#D4AF37]/80 transition-all duration-300 mb-6 select-none cursor-pointer drop-shadow-[0_0_8px_rgba(212,175,55,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            Join the Future
          </div>

          {/* Heading */}
          <h2 
            className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 select-none font-normal pb-2"
            style={{ fontFamily: "var(--font-instrument-serif), serif" }}
          >
            Dream Bigger. Build Faster. Lead What's Next.
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-white/70 text-sm md:text-base leading-relaxed mb-8 mx-auto">
            Join thousands of students transforming ideas into startups, skills into careers, and passion into impact through cutting-edge projects, mentorship, hackathons, and industry opportunities.
          </p>

          {/* Newsletter Form */}
          <form 
            onSubmit={handleSubmit}
            className="relative flex items-center w-full max-w-md mx-auto liquid-glass rounded-full p-1.5 focus-within:shadow-[0_0_30px_rgba(255,255,255,0.07)] transition-shadow duration-300"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Join the community"
              className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-white/40 focus:outline-none rounded-full"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-1.5 px-6 py-2.5 bg-white text-black rounded-full hover:scale-105 hover:bg-neutral-200 transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(255,255,255,0.15)] flex-shrink-0 text-xs font-bold uppercase tracking-wider"
              aria-label="Subscribe"
            >
              <span>I'm In</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* MIDDLE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-8 border-t border-white/[0.04]">
          {/* Column 1 - Brand Info */}
          <div className="flex flex-col gap-6 text-left">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Prompt Techies Logo"
                className="h-10 w-10 rounded-lg shadow-[0_0_15px_rgba(0,75,255,0.15)] border border-white/10"
              />
              <span className="premium-logo-font font-bold bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent text-xs uppercase">
                PROMPT TECHIES
              </span>
            </div>
            
            <p className="text-xs text-white/50 leading-relaxed max-w-xs">
              Empowering the next generation of technical leaders, developers, and builders with real-world skills, premium mentorship, and global opportunities.
            </p>

            <div className="flex flex-col gap-2 mt-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00c8ff]">Official Affiliations</p>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-2 w-fit liquid-glass">
                <img 
                  src="/logo_msme.png" 
                  alt="MSME" 
                  className="h-8 object-contain brightness-100" 
                />
              </div>
            </div>
          </div>

          {/* Column 2 - Ecosystem Navigation */}
          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#00c8ff] to-[#004bff] bg-clip-text text-transparent mb-2 w-fit">Explore</h4>
            <a href="/about" className="text-white/70 hover:text-white transition-colors duration-200 text-sm w-fit">About</a>
            <a href="/startup" className="text-white/70 hover:text-white transition-colors duration-200 text-sm w-fit">Startup</a>
            <a href="/institutions" className="text-white/70 hover:text-white transition-colors duration-200 text-sm w-fit">Universities / Institutions</a>
            <a href="/business" className="text-white/70 hover:text-white transition-colors duration-200 text-sm w-fit">Corporate</a>
            <a href="/events" className="text-white/70 hover:text-white transition-colors duration-200 text-sm w-fit">Events</a>
          </div>

          {/* Column 3 - Head Office */}
          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2 flex items-center gap-1.5 drop-shadow-[0_0_8px_rgba(212,175,55,0.25)]">
              <span>📍</span> Head Office
            </h4>
            <p className="text-xs leading-relaxed text-white/60 font-normal max-w-xs">
              Prompt Techies<br />
              Flat No. 304, Plot No. 155 & 156,<br />
              Sai Lakshmi Residency, IDPL Colony,<br />
              Beside Reddy’s Factory, Bachupally,<br />
              Medchal-Malkajgiri District,<br />
              Hyderabad, Telangana – 500090.
            </p>
          </div>

          {/* Column 4 - Direct Support */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#00c8ff] to-[#004bff] bg-clip-text text-transparent mb-1 w-fit">Direct Support</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+918008087702"
                className="flex items-center gap-3 text-xs font-medium text-white/70 hover:text-[#00c8ff] hover:scale-[1.02] transition-all duration-300 w-fit group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/80 group-hover:bg-[#004bff] group-hover:text-white transition-all liquid-glass">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span>+91 8008087702</span>
              </a>
              <a 
                href="mailto:prompttechies@gmail.com"
                className="flex items-center gap-3 text-xs font-medium text-white/70 hover:text-[#00c8ff] hover:scale-[1.02] transition-all duration-300 w-fit group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/80 group-hover:bg-[#004bff] group-hover:text-white transition-all liquid-glass">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span>prompttechies@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-16">
        <div className="liquid-glass rounded-full px-6 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 w-full backdrop-blur-md">
          {/* Left */}
          <div className="text-xs text-white/50 select-none">
            © 2026 Prompt Techies. All Rights Reserved.
          </div>

          {/* Center */}
          <div className="flex items-center gap-3">
            <a
              href="https://youtu.be/E6tT3WSOLdk?si=tbaVUUYvh4UCJCiu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-[#ff0000] hover:scale-105 hover:bg-white/5 transition-all duration-300 liquid-glass"
              aria-label="YouTube Channel"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/prompt_techies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-[#e1306c] hover:scale-105 hover:bg-white/5 transition-all duration-300 liquid-glass"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/prompt-techies-community-9a705a370"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-[#0077b5] hover:scale-105 hover:bg-white/5 transition-all duration-300 liquid-glass"
              aria-label="LinkedIn Page"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Right Tagline */}
          <div className="flex items-center gap-4 text-[10px] text-white/40 font-mono tracking-wider select-none">
            <InstallPWA scrolled={true} />
            <span>skills &gt; credentials</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
