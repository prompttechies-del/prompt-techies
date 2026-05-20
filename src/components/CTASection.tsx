import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-16 px-6 flex justify-center">
      <div className="w-full max-w-[1600px] bg-gradient-to-br from-[#004bff] to-[#002e99] rounded-[28px] md:rounded-[48px] p-8 md:p-16 flex flex-col items-center text-center text-white shadow-2xl shadow-[#004bff]/10 border border-white/10">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight bg-gradient-to-r from-[#ffe07d] via-[#f5af19] to-[#ffe07d] bg-clip-text text-transparent">
          Ready to Break Beyond Your Degree?
        </h2>
        <p className="text-lg lg:text-xl font-normal text-white/80 mb-12 max-w-2xl leading-relaxed">
          Join students who are building skills, launching ideas, and making real moves beyond the classroom.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link 
            href="https://www.instagram.com/prompt_techies" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-white text-[#004bff] rounded-full text-sm font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
          >
            Get Started Now
          </Link>
          <Link 
            href="/contact" 
            className="px-12 py-5 border border-white/40 rounded-full text-sm font-medium hover:bg-white/10 transition-all text-white"
          >
            Contact Admissions
          </Link>
        </div>
      </div>
    </section>
  );
}
