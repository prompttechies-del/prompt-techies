import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | Prompt Techies' },
  description: 'The page you are looking for does not exist. Explore Prompt Techies programs, events and campus partnerships.',
  robots: { index: false, follow: true },
};

const links = [
  { href: '/programs', label: 'Innovation Programs' },
  { href: '/events', label: 'Events & Workshops' },
  { href: '/institutions', label: 'Campus Chapters' },
  { href: '/contact', label: 'Contact Us' },
];

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen flex-col w-full bg-[#0a0a0a] text-white">
      <section className="flex flex-1 flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#00c8ff]">Error 404</p>
        <h1 className="mt-4 text-5xl lg:text-7xl font-bold tracking-tight">
          This page <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">got lost</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-400">
          The page you are looking for may have moved or never existed. Let&apos;s get you back to building.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="rounded-full bg-[#004bff] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#003cb3] transition-colors">
            Back to Home
          </Link>
          <Link href="/contact" className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-colors">
            Contact Us
          </Link>
        </div>
        <nav aria-label="Popular pages" className="mt-14">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <Footer />
    </main>
  );
}
