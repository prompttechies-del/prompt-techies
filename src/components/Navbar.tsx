'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';
import { SITE } from '@/lib/site';

const navLinks = [
  { name: 'Our Story', href: '/about' },
  { name: 'Innovation Programs', href: '/programs' },
  { name: 'Campus Chapters', href: '/institutions' },
  { name: 'Events & Workshops', href: '/events' },
  { name: 'Enterprise AI Partnerships', href: '/business' },
];

const moreLinks = [
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  // The menu is "open" only for the page it was opened on, so it closes itself on navigation.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const menuOpen = openAt === pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenAt(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      lenis?.start();
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen, lenis]);

  const closeMenu = () => setOpenAt(null);
  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-4 px-3 md:px-12 pointer-events-none">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .premium-logo-font {
          font-family: var(--font-syncopate), sans-serif !important;
          letter-spacing: 0.28em !important;
        }
        @media (max-width: 767px) {
          .premium-logo-font { letter-spacing: 0.16em !important; }
        }
      `,
        }}
      />

      <nav
        aria-label="Main"
        className={`
          flex items-center justify-between w-full pointer-events-auto transition-all duration-500 ease-in-out
          ${
            scrolled || menuOpen
              ? 'bg-[#0a0a0a]/85 border border-white/10 backdrop-blur-md max-w-6xl rounded-full px-3 md:px-6 py-1.5 md:py-2 shadow-xl shadow-black/30'
              : 'bg-transparent max-w-full px-1 md:px-4 py-2'
          }
        `}
      >
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Prompt Techies home"
          className="flex min-w-0 items-center gap-2.5 md:gap-3 transition-transform hover:scale-105"
        >
          <Image
            src="/logo.jpg"
            alt=""
            width={36}
            height={36}
            priority
            className={`w-auto shrink-0 rounded-lg transition-all duration-500 ${scrolled ? 'h-7 md:h-7' : 'h-8 md:h-9'}`}
          />
          <span
            className={`premium-logo-font truncate font-bold uppercase bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,200,255,0.6)] transition-all duration-500 block xl:hidden 2xl:block whitespace-nowrap ${
              scrolled ? 'text-[9px] md:text-[11px]' : 'text-[11px] md:text-xs'
            }`}
          >
            PROMPT TECHIES
          </span>
        </Link>

        <div className="flex items-center gap-2 xl:gap-4">
          <ul className="hidden xl:flex items-center gap-3 text-[12px] font-semibold text-[#ffe07d]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`whitespace-nowrap transition-all hover:text-white hover:opacity-100 ${
                    isActive(link.href) ? 'text-white opacity-100' : 'opacity-85'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="https://prompttechiesevents.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex rounded-full bg-[#004bff] px-4 py-2 md:px-5 md:py-2.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md shadow-[#004bff]/20 transition-all hover:bg-[#003cb3] whitespace-nowrap"
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setOpenAt(menuOpen ? null : pathname)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="xl:hidden flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors active:bg-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={closeMenu}
            className="xl:hidden fixed inset-0 -z-10 bg-black/60 backdrop-blur-sm pointer-events-auto"
          />
          <div
            id="mobile-menu"
            className="xl:hidden pointer-events-auto absolute top-[3.75rem] left-3 right-3 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-[#0a0a0a]/95 p-3 shadow-2xl backdrop-blur-lg"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`flex min-h-12 items-center rounded-2xl px-4 text-base font-medium transition-colors active:bg-white/10 ${
                      isActive(link.href) ? 'bg-white/5 text-white' : 'text-[#ffe07d]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-2 flex flex-col border-t border-white/10 pt-2">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex min-h-12 items-center rounded-2xl px-4 text-base font-medium text-white/80 active:bg-white/10"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex gap-3 border-t border-white/10 pt-3">
              <a
                href={SITE.phoneHref}
                className="flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-white active:bg-white/10"
              >
                Call Us
              </a>
              <Link
                href="https://prompttechiesevents.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-[#004bff] text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#004bff]/30 active:bg-[#003cb3]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
