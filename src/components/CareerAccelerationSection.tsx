'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Rocket, Trophy, Cpu, Briefcase, Users, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { MouseEvent, useState } from 'react';
import Link from 'next/link';

// Features Data
const features = [
  {
    icon: Trophy,
    title: "Hackathons",
    description: "Participate in national and global hackathons, collaborate with talented developers, solve real-world challenges, and showcase your skills.",
    color: "from-[#8a2be2] to-[#4b0082]"
  },
  {
    icon: Cpu,
    title: "AI & Emerging Tech",
    description: "Learn Generative AI, Machine Learning, Prompt Engineering, Cloud Computing, Full Stack Development, and Automation through practical workshops.",
    color: "from-[#ff007f] to-[#7f00ff]"
  },
  {
    icon: Briefcase,
    title: "Developer Platforms",
    description: "Access advanced tools, APIs, and infrastructure designed to accelerate product development and streamline deployment.",
    color: "from-[#00ffcc] to-[#006699]"
  },
  {
    icon: Users,
    title: "Enterprise Solutions",
    description: "Deliver scalable, intelligent platforms and integrate enterprise-grade AI tailored for modern businesses and high-growth startups.",
    color: "from-[#ffaa00] to-[#ff4400]"
  },
  {
    icon: Lightbulb,
    title: "Innovation Programs",
    description: "Participate in bootcamps, product development sprints, mentorship programs, technical workshops, and collaborative learning experiences.",
    color: "from-[#00ff00] to-[#008800]"
  }
];

// Glow Card Component
function GlowCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col p-8 rounded-[24px] bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2"
    >
      {/* Dynamic Background Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Animated Border Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} bg-opacity-10 backdrop-blur-md shadow-lg shadow-black/20`}>
          <feature.icon className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
          {feature.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed text-[15px] group-hover:text-gray-300 transition-colors duration-300">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function CareerAccelerationSection() {
  return (
    <section className="relative w-full py-16 md:py-32 bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#004bff]/20 rounded-full blur-[80px] md:blur-[150px] md:mix-blend-screen opacity-50 md:animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#8a2be2]/15 rounded-full blur-[80px] md:blur-[150px] md:mix-blend-screen opacity-50 md:animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        
        {/* Subtle Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#00c8ff]" />
            <span className="text-sm font-semibold tracking-wide text-gray-300 uppercase">Product Engineering</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-white"
          >
            Build Fast.<br />
            Scale Smart.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] to-[#004bff]">Engineer What's Next.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            Transform your ambition into real-world impact through scalable product development, AI integration, and cutting-edge engineering solutions.
          </motion.p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16 md:mb-32 px-2 md:px-0">
          {features.map((feature, idx) => (
            <GlowCard key={idx} feature={feature} index={idx} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl mx-auto rounded-[32px] p-8 md:p-16 text-center border border-white/10 overflow-hidden"
        >
          {/* Inner CTA Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] to-[#004bff]">Something That Matters?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join elite developers and visionary founders who are building intelligent technology, scaling platforms, and engineering the future with <span className="text-[#00c8ff] font-semibold">Prompt Techies</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link 
                href="/programs" 
                className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00c8ff] to-[#004bff] text-white rounded-full font-bold text-[15px] overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,200,255,0.3)]"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/about" 
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold text-[15px] transition-all hover:bg-white/5 hover:border-white/40"
              >
                <span>Explore Programs</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
