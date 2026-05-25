'use client';

import React from 'react';

const testimonialsRow1 = [
  { name: "Tikaigari Anirudh", college: "CMR Institute of Technology", feedback: "The mentorship at Prompt Techies is life-changing. It helped me bridge the gap between college and the real world." },
  { name: "Vanshika", college: "CMR Institute of Technology", feedback: "I've gained immense practical knowledge through the structured programs and community initiatives here." },
  { name: "Manchikatla Sai Charan", college: "CMR Institute of Technology", feedback: "A truly user-friendly platform that provides perfect guidance for students transitioning into the tech industry." },
  { name: "Bandari ramu", college: "Kamala Institute of Technology", feedback: "Prompt Techies offers a unique ecosystem for learning that you simply can't find anywhere else. Highly recommended." },
  { name: "Sreeja Reddy Yalam", college: "CMR Institute of Technology", feedback: "The programs are well-balanced and clearly structured, providing a solid foundation for any aspiring innovator." },
  { name: "Pasala George Joseph", college: "CMR Institute of Technology", feedback: "I feel much more confident in my professional skills thanks to the constant support from the Prompt Techies community." },
];

const testimonialsRow2 = [
  { name: "Kacham shanmukh", college: "CMR Institute of Technology", feedback: "One of the best professional development platforms. I've enjoyed every moment of my journey here." },
  { name: "Sanjana Guntuka", college: "Kamala Institute of Technology", feedback: "Extremely helpful in evaluating my true potential and identifying the right career path in technical domains." },
  { name: "Kalyan Janjirala", college: "Other Institutions", feedback: "This platform perfectly exposes us to the competitive world and gives us the skills to thrive in it." },
  { name: "Vishwanath Arnitha", college: "KIT Karimnagar", feedback: "Everything about Prompt Techies is designed to help students grow. It's been a truly transformative experience." },
  { name: "Akshitha Mandala", college: "KIT Karimnagar", feedback: "The perfect place to strengthen full stack fundamentals while working on real projects and global mentorship." },
  { name: "Navadeep", college: "KIT Karimnagar", feedback: "Prompt Techies provides incredible resources for mastering Next.js, AI/ML, and everything in between." },
];

const neonBorders = [
  'border-t-2 border-t-[#00c8ff] hover:shadow-[0_0_30px_rgba(0,200,255,0.18)]', // Cyan
  'border-t-2 border-t-[#004bff] hover:shadow-[0_0_30px_rgba(0,75,255,0.18)]',  // Blue
  'border-t-2 border-t-[#d946ef] hover:shadow-[0_0_30px_rgba(217,70,239,0.18)]', // Purple
  'border-t-2 border-t-[#10b981] hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]', // Emerald
];

const neonTextColors = [
  'text-[#00c8ff]',
  'text-[#004bff]',
  'text-[#d946ef]',
  'text-[#10b981]',
];

function TestimonialCard({ name, college, feedback, colorIndex }: { name: string, college: string, feedback: string, colorIndex: number }) {
  const borderStyle = neonBorders[colorIndex % neonBorders.length];
  const textColor = neonTextColors[colorIndex % neonTextColors.length];
  
  return (
    <div className={`w-[320px] flex-shrink-0 bg-[#121216]/40 backdrop-blur-md border border-white/5 ${borderStyle} rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.05] hover:bg-[#121216]/70 whitespace-normal flex flex-col justify-between group`}>
      {/* Decorative Quote Mark */}
      <div className="absolute right-4 top-2 text-white/5 text-6xl font-serif select-none pointer-events-none group-hover:text-white/10 transition-colors">
        ”
      </div>
      
      <p className="text-[13px] md:text-[14px] font-normal text-gray-300 leading-relaxed mb-6 italic relative z-10">
        "{feedback}"
      </p>
      
      <div className="flex flex-col border-t border-white/5 pt-4">
        <span className="text-[13px] font-bold text-white transition-colors">{name}</span>
        <span className={`text-[9px] font-black ${textColor} uppercase tracking-[0.15em] mt-1.5`}>{college}</span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-24 flex flex-col items-center overflow-hidden border-t border-white/5 relative">
      
      {/* Background Video Animation */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="none"
        className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform opacity-[0.22] pointer-events-none z-0" 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
      />

      {/* Fade Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none z-0" />
      
      {/* Ambient BG Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#004bff]/5 blur-[160px] pointer-events-none z-0" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-4xl px-6 relative z-10">
        <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] mb-4 inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,175,25,0.08)]">
          💬 Wall of Love
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white">
          Community <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">Feedback</span>
        </h2>
        
        <p className="text-sm md:text-base font-normal text-gray-400 max-w-xl">
          Voices from our interns across various institutions. Hear how the community is level-ing up their future.
        </p>
      </div>

      {/* Row 1 - Scroll Left */}
      <div className="relative w-full flex overflow-hidden group mb-6 relative z-10">
        <div className="flex animate-scroll-left whitespace-nowrap gap-6 items-center min-w-max py-2">
          {[...testimonialsRow1, ...testimonialsRow1].map((t, index) => (
            <TestimonialCard key={index} {...t} colorIndex={index} />
          ))}
        </div>
      </div>

      {/* Row 2 - Scroll Right */}
      <div className="relative w-full flex overflow-hidden group relative z-10">
        <div className="flex animate-scroll-right whitespace-nowrap gap-6 items-center min-w-max py-2">
          {[...testimonialsRow2, ...testimonialsRow2].map((t, index) => (
            <TestimonialCard key={index} {...t} colorIndex={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
