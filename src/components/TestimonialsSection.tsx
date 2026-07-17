'use client';

import React from 'react';

const testimonialsRow1 = [
  { name: "Aarav Reddy", college: "Software Engineer, Nexus AI", feedback: "The platforms provided helped me understand how AI tools can be applied to real projects. It was practical, engaging, and easy to deploy." },
  { name: "Sanjana Rao", college: "Product Manager, TechFlow", feedback: "I learned more about building scalable products and using modern development tools. The enterprise approach made the platform extremely valuable." },
  { name: "Nithya Sharma", college: "Data Scientist, DataGen", feedback: "Prompt Techies gave us the confidence to start integrating AI and modern development practices into our core infrastructure." },
  { name: "Arjun Kumar", college: "Startup Founder, Zephyr", feedback: "The ecosystem showed us how ideas can be converted into actual working products at scale. It was a game-changing experience." },
  { name: "Harshitha Reddy", college: "AI Researcher", feedback: "I enjoyed learning about enterprise AI tools and how they can improve productivity. The ecosystem is highly intuitive and robust." },
  { name: "Karthik Sai", college: "Fullstack Developer", feedback: "The best part was the immediate impact. Instead of just theoretical tools, we got to explore platforms and practical workflows." },
  { name: "Priya Nair", college: "Technical Lead, CloudX", feedback: "The ecosystem introduced me to new scalable technologies and gave our team a clearer understanding of the AI workflows expected in the industry." },
  { name: "Rohit Reddy", college: "DevOps Engineer", feedback: "I liked the way the platform connected complex technology concepts with real-world applications and enterprise scaling opportunities." },
  { name: "Ananya Gupta", college: "Software Engineer", feedback: "The ecosystem motivated our team to start building our own intelligent solutions and improve our technical architecture." },
  { name: "Sneha Reddy", college: "Product Designer", feedback: "I discovered new ways of using AI for product research, and development. The experience was genuinely transformative." },
  { name: "Aditya Rao", college: "Startup Founder", feedback: "Prompt Techies made enterprise technology feel more accessible. The practical tools helped our team deploy concepts quickly." },
  { name: "Keerthana Sai", college: "AI Engineer", feedback: "The ecosystem encouraged us to think beyond basic implementations and start creating products that solve actual market problems." },
  { name: "Rakesh Kumar", college: "Backend Developer", feedback: "I learned about modern development workflows and how engineers can prepare themselves for rapid scaling and enterprise integration." },
  { name: "Rohan Mehta", college: "Machine Learning Engineer", feedback: "The platform gave me a fresh perspective on using AI tools to move from an idea to a functional prototype. The practical workflow was especially valuable." },
  { name: "Ananya Kapoor", college: "Frontend Engineer", feedback: "I enjoyed how the platform focused on rapid building and experimentation. It encouraged our team to explore AI-powered product development." },
  { name: "Arjun Malhotra", college: "CTO, ElevateTech", feedback: "The ecosystem introduced a structured approach to ideation, rapid prototyping, and collaboration. It was practical and engaging throughout." },
  { name: "Kavya Sharma", college: "Data Analyst", feedback: "Prompt Techies created an interactive environment where we could explore tools, build integrations, and understand how modern AI workflows work." },
];

const testimonialsRow2 = [
  { name: "Divya Sharma", college: "Software Engineer", feedback: "The platforms were robust and explained every complex concept clearly. The intuitive design kept our entire team involved." },
  { name: "Sai Charan", college: "Cloud Architect", feedback: "The ecosystem gave our team a better understanding of enterprise AI, development tools, and the process of building scalable technical products." },
  { name: "Pooja Reddy", college: "Product Manager", feedback: "I enjoyed the combination of advanced tools and practical implementation. It made the entire development experience much faster." },
  { name: "Shreya Rao", college: "Startup Founder", feedback: "Prompt Techies introduced us to enterprise tools and workflows that drastically reduced our time to market." },
  { name: "Naveen Kumar", college: "Backend Developer", feedback: "I gained clarity about how to architect a product, collaborate with a distributed team, and present the final outcome effectively." },
  { name: "Manasa Reddy", college: "Fullstack Developer", feedback: "The platform was fast and practical. I left with several architectural ideas that I wanted to explore and build immediately." },
  { name: "Akash Verma", college: "AI Researcher", feedback: "The ecosystem helped me understand how developers can use AI responsibly to iterate faster and build better enterprise products." },
  { name: "Bhavya Nair", college: "Software Engineer", feedback: "The practical workflows made the complex concepts easy to implement. I particularly enjoyed exploring the rapid product-building process." },
  { name: "Surya Teja", college: "DevOps Engineer", feedback: "It was a refreshing experience because the focus was not just on providing tools, but on actually enabling creation and enterprise deployment." },
  { name: "Ishita Rao", college: "Data Scientist", feedback: "The platform inspired our team to iterate on our architecture and start working on advanced projects outside our usual scope." },
  { name: "Deepika Sharma", college: "Frontend Developer", feedback: "The development environment was highly intuitive and responsive. I felt comfortable building integrations and experimenting with new tools." },
  { name: "Tejas Kumar", college: "CTO, InnovateAI", feedback: "Prompt Techies helped bridge the gap between AI concepts and how technology is actually used while building enterprise products." },
  { name: "Akhila Reddy", college: "Technical Lead", feedback: "The experience motivated our team to deploy consistently, build meaningful products, and explore new architectural opportunities." },
  { name: "Siddharth Jain", college: "Machine Learning Engineer", feedback: "The platform helped me understand how AI can accelerate development without replacing architectural creativity and problem-solving." },
  { name: "Ishita Verma", college: "Startup Founder", feedback: "I liked the focus on turning ideas into scalable working prototypes. The tools made the entire development process much more efficient." },
  { name: "Aditya Bansal", college: "Software Engineer", feedback: "The ecosystem connected enterprise AI tools, development workflows, and product thinking in a clear and highly practical way." },
  { name: "Nandini Rao", college: "Product Manager", feedback: "The platform encouraged our team to think beyond basic features and explore scalable products that solve meaningful real-world problems." },
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
    <div className={`w-[320px] flex-shrink-0 bg-[#121216] border border-white/5 ${borderStyle} rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.05] hover:bg-[#1a1a20] whitespace-normal flex flex-col justify-between group`}>
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
          Voices from <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">Technology Leaders</span>
        </h2>
        
        <p className="text-sm md:text-base font-normal text-gray-400 max-w-xl">
          Stories from developers and founders exploring technology, building scalable products, and turning ideas into execution.
        </p>
      </div>

      {/* Row 1 - Scroll Left */}
      <div className="relative w-full flex overflow-hidden group mb-6 relative z-10">
        <div className="flex animate-scroll-left whitespace-nowrap gap-6 items-center min-w-max py-2 will-change-transform transform-gpu">
          {[...testimonialsRow1, ...testimonialsRow1].map((t, index) => (
            <TestimonialCard key={index} {...t} colorIndex={index} />
          ))}
        </div>
      </div>

      {/* Row 2 - Scroll Right */}
      <div className="relative w-full flex overflow-hidden group relative z-10">
        <div className="flex animate-scroll-right whitespace-nowrap gap-6 items-center min-w-max py-2 will-change-transform transform-gpu">
          {[...testimonialsRow2, ...testimonialsRow2].map((t, index) => (
            <TestimonialCard key={index} {...t} colorIndex={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
