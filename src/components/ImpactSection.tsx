'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
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
  }, [end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export default function ImpactSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-8 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-4xl">
        <div className="bg-[#004bff]/10 text-[#004bff] border border-[#004bff]/20 px-6 py-1 rounded-full text-[10px] font-bold mb-6 uppercase tracking-wider">
          Prompt Techies Impact
        </div>
        <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
          Making a Difference in the Student Community
        </h2>
        <p className="text-lg font-normal text-gray-400 leading-relaxed">
          At Prompt Techies, we are dedicated to making a positive impact in the community through various programs and initiatives.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Row 1, Box 1 - Electric Blue Gradient Metric */}
        <div className="lg:col-span-1 bg-gradient-to-br from-[#004bff] to-[#002e99] rounded-[32px] p-10 flex flex-col items-start justify-start text-white shadow-xl shadow-[#004bff]/10 border border-white/10">
          <span className="text-7xl font-bold mb-8 text-white">
            <Counter end={5000} suffix="+" />
          </span>
          <h3 className="text-xl font-bold mb-4 text-white">Students Reached Online</h3>
          <p className="text-sm font-normal text-white/80 leading-relaxed">
            In 2025, our online initiatives reached over 5000 individuals with precise, accessible, and compelling information.
          </p>
        </div>

        {/* Row 1, Box 2 - Large Image */}
        <div className="lg:col-span-2 relative aspect-[16/10] md:aspect-[21/9] lg:aspect-auto rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border border-white/5">
          <Image
            src="/impact-image-v2.jpg"
            alt="Prompt Techies Impact"
            fill
            className="object-cover"
          />
        </div>

        {/* Row 2, Box 3 - Matte Charcoal Metric */}
        <div className="bg-[#121212] rounded-[32px] p-10 flex flex-col items-start justify-start text-white border border-white/5 shadow-2xl">
          <span className="text-7xl font-bold mb-8 text-[#004bff]">
            <Counter end={30} suffix="+" />
          </span>
          <h3 className="text-xl font-bold mb-4 text-white">Mentorship Sessions</h3>
          <p className="text-sm font-normal text-gray-400 leading-relaxed">
            In 2025, Prompt Techies led over 30 in-person and virtual mentorship programs covering key topics.
          </p>
        </div>

        {/* Row 2, Box 4 - Matte Charcoal Metric */}
        <div className="bg-[#121212] rounded-[32px] p-10 flex flex-col items-start justify-start text-white border border-white/5 shadow-2xl">
          <span className="text-7xl font-bold mb-8 text-[#004bff]">
            <Counter end={100} suffix="+" />
          </span>
          <h3 className="text-xl font-bold mb-4 text-white">Projects Completed</h3>
          <p className="text-sm font-normal text-gray-400 leading-relaxed">
            Over 100 industry-level projects successfully conceptualized and delivered by our interns across various technical and business domains.
          </p>
        </div>

        {/* Row 2, Box 5 - Matte Charcoal Metric */}
        <div className="bg-[#121212] rounded-[32px] p-10 flex flex-col items-start justify-start text-white border border-white/5 shadow-2xl">
          <span className="text-7xl font-bold mb-8 text-[#004bff]">
            <Counter end={100} suffix="+" />
          </span>
          <h3 className="text-xl font-bold mb-4 text-white">Internships</h3>
          <p className="text-sm font-normal text-gray-400 leading-relaxed">
            In 2025, Prompt Techies provided 100+ internship opportunities to students across various technical and business domains.
          </p>
        </div>
      </div>
    </section>
  );
}
