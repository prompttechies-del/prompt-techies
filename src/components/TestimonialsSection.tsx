'use client';
import LazyVideo from '@/components/LazyVideo';

import React from 'react';

const testimonialsRow1 = [
  { name: "Rahul K.", college: "Full Stack Developer", feedback: "Prompt Techies helped me move from learning tutorials to building real-world applications. The community pushed me to experiment, collaborate, and grow as a developer." },
  { name: "Sneha R.", college: "AI & ML Enthusiast", feedback: "Through Prompt Techies, I got exposure to AI tools, hackathons, and mentorship opportunities that accelerated my learning journey far beyond the classroom." },
  { name: "Vishal P.", college: "Software Developer", feedback: "What stands out about Prompt Techies is the culture of building. Whether it's a startup idea, a side project, or a hackathon prototype, there's always support to turn ideas into reality." },
  { name: "Akhil M.", college: "Web Developer", feedback: "The workshops and events organized by Prompt Techies gave me practical insights that traditional coursework often misses. Every session added value to my technical growth." },
  { name: "Harshita S.", college: "Product Builder", feedback: "I joined for the events but stayed for the community. Prompt Techies connected me with talented developers, mentors, and founders who inspired me to think bigger." },
  { name: "Nikhil T.", college: "Backend Developer", feedback: "Prompt Techies creates opportunities for students to gain hands-on experience through projects, collaborations, and industry interactions. It has been a game changer for my career." },
  { name: "Priya V.", college: "UI/UX Designer", feedback: "Working alongside developers, designers, and innovators in the Prompt Techies ecosystem helped me understand product development from a completely different perspective." },
  { name: "Arjun R.", college: "Hackathon Participant", feedback: "My first national-level hackathon experience came through Prompt Techies. The guidance, networking, and learning opportunities gave me the confidence to keep building and competing." },
  { name: "Tejas Reddy", college: "CMR Institute of Technology, Hyderabad", feedback: "Prompt Techies helped me connect classroom learning with real-world technology. Through workshops, hackathons, and mentorship sessions, I gained practical skills that boosted my confidence as a developer." },
];

const testimonialsRow2 = [
  { name: "Ananya Sharma", college: "Institute of Aeronautical Engineering (IARE)", feedback: "The opportunities provided by Prompt Techies allowed me to collaborate with students from different colleges and work on innovative projects. It has been an incredible learning experience." },
  { name: "Sai Charan", college: "Malla Reddy Engineering College (MREC)", feedback: "From AI workshops to national-level hackathons, Prompt Techies consistently creates platforms where students can learn, build, and showcase their talents." },
  { name: "Harika N.", college: "VBIT, Hyderabad", feedback: "Prompt Techies introduced me to industry experts, startup founders, and mentors who shared valuable insights about technology and entrepreneurship." },
  { name: "Abhinav Kumar", college: "ACE Engineering College", feedback: "The hands-on learning approach at Prompt Techies helped me improve my technical skills and understand how products are built in the real world." },
  { name: "Keerthana P.", college: "CMR College of Engineering & Technology (CMRCET)", feedback: "Being part of Prompt Techies gave me access to a vibrant community of builders and innovators. Every event offered something new to learn." },
  { name: "Praneeth Reddy", college: "KITS Warangal", feedback: "Prompt Techies is one of the few communities that genuinely focuses on student growth. The exposure to hackathons and networking opportunities was invaluable." },
  { name: "Divya Sri", college: "VNR Vignana Jyothi Institute of Engineering & Technology", feedback: "The mentorship and guidance I received through Prompt Techies helped me explore AI, product development, and startup ecosystems with confidence." },
  { name: "Rahul Varma", college: "SR University, Warangal", feedback: "Prompt Techies creates an environment where students are encouraged to experiment, innovate, and solve real-world problems through technology." },
  { name: "Meghana S.", college: "AVN Institute of Engineering & Technology", feedback: "Participating in Prompt Techies events allowed me to collaborate with talented peers, improve my problem-solving abilities, and build meaningful connections." },
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

const cardOffsets = ['mt-0', 'mt-8', 'mt-3', 'mt-10', 'mt-5'];

function TestimonialCard({ name, college, feedback, colorIndex }: { name: string, college: string, feedback: string, colorIndex: number }) {
  const borderStyle = neonBorders[colorIndex % neonBorders.length];
  const textColor = neonTextColors[colorIndex % neonTextColors.length];
  const offset = cardOffsets[(colorIndex * 3) % cardOffsets.length];
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('');

  return (
    <div className={`w-[300px] md:w-[340px] flex-shrink-0 self-start ${offset} bg-[#121216]/90 backdrop-blur-sm border border-white/5 ${borderStyle} rounded-[28px] p-6 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-[#1a1a20] whitespace-normal flex flex-col gap-5 group`}>
      <div className="absolute right-5 top-2 text-white/5 text-7xl font-serif select-none pointer-events-none group-hover:text-white/10 transition-colors">
        &rdquo;
      </div>

      <p className="text-[14px] font-normal text-gray-300 leading-relaxed relative z-10">
        {feedback}
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <div className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold ${textColor}`}>
          {initials}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[13px] font-semibold text-white truncate">{name}</span>
          <span className={`text-[11px] font-medium ${textColor} tracking-wide mt-0.5 truncate`}>{college}</span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-24 flex flex-col items-center overflow-hidden border-t border-white/5 relative">
      
      {/* Background Video Animation */}
      <LazyVideo 
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
        <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,175,25,0.08)]">
          💬 Wall of Love
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white">
          Voices from Our Student <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">Developers</span>
        </h2>
        
        <p className="text-sm md:text-base font-normal text-gray-400 max-w-xl">
          Stories from student developers building, competing, and growing with Prompt Techies.
        </p>
      </div>

      {/* Row 1 - Scroll Left */}
      <div className="relative w-full flex overflow-hidden group mb-6 relative z-10">
        <div style={{ animationDuration: '160s' }} className="flex animate-scroll-left hover:[animation-play-state:paused] whitespace-nowrap gap-6 items-start min-w-max py-6 will-change-transform transform-gpu">
          {[...testimonialsRow1, ...testimonialsRow1].map((t, index) => (
            <TestimonialCard key={index} {...t} colorIndex={index} />
          ))}
        </div>
      </div>

      {/* Row 2 - Scroll Right */}
      <div className="relative w-full flex overflow-hidden group relative z-10">
        <div style={{ animationDuration: '180s' }} className="flex animate-scroll-right hover:[animation-play-state:paused] whitespace-nowrap gap-6 items-start min-w-max py-6 will-change-transform transform-gpu">
          {[...testimonialsRow2, ...testimonialsRow2].map((t, index) => (
            <TestimonialCard key={index} {...t} colorIndex={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
