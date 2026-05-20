'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Startup', href: '/startup' },
    { name: 'Universities / Institutions', href: '/institutions' },
    { name: 'Corporate', href: '/business' },
    { name: 'Events', href: '/events' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:px-12 group pointer-events-none">
      <nav 
        className={`
          flex items-center justify-between w-full transition-all duration-500 ease-in-out pointer-events-auto
          ${scrolled 
            ? 'bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-md max-w-5xl rounded-full px-6 py-2 shadow-xl shadow-black/20' 
            : 'bg-transparent max-w-full px-4 py-2'
          }
        `}
      >
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 pointer-events-auto transition-transform hover:scale-105">
            <img 
              src="/logo.jpg" 
              alt="Prompt Techies Logo" 
              className={`transition-all duration-500 rounded-lg ${scrolled ? 'h-5 md:h-7' : 'h-7 md:h-9'}`}
              style={{ filter: 'none' }}
            />
            <span className={`font-mono font-black italic tracking-[0.2em] bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,200,255,0.7)] drop-shadow-[0_0_2px_rgba(0,75,255,0.9)] transition-all duration-500 uppercase ${scrolled ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm'}`}>
              PROMPT TECHIES
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:flex items-center gap-5 text-[13px] font-medium text-white">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#004bff] transition-colors whitespace-nowrap opacity-80 hover:opacity-100">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="https://www.instagram.com/prompt_techies" 
              target="_blank"
              rel="noopener noreferrer"
              className={`
                rounded-full text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap bg-[#004bff] text-white hover:bg-[#003cb3] shadow-md shadow-[#004bff]/20
                ${scrolled 
                  ? 'px-4 py-2' 
                  : 'px-5 py-2.5'
                }
              `}
            >
              Get Started
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen 
                  ? <path d="M18 6L6 18M6 6l12 12" /> 
                  : <path d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 bg-[#0a0a0a]/95 border border-white/10 backdrop-blur-lg rounded-3xl p-8 flex flex-col gap-6 shadow-2xl lg:hidden pointer-events-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-normal text-white hover:text-[#004bff] opacity-70 hover:opacity-100 transition-all border-b border-white/5 pb-4"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
