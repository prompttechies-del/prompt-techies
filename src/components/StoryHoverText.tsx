"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { X } from "lucide-react";
import { MEMBERS, type Member } from "@/data/team";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function StoryHoverText() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <>
      <div 
        className="relative w-full overflow-visible py-20 md:py-32 flex flex-col items-center justify-center cursor-default group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Floating images container - Row of images */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-full max-w-[95vw] md:max-w-[1200px] h-auto pointer-events-none z-20 flex flex-wrap items-end justify-center gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-8 px-4">
          {MEMBERS.map((member, idx) => {
            // Stagger effect
            const centerIndex = Math.floor(MEMBERS.length / 2);
            const distance = Math.abs(idx - centerIndex);
            const delay = distance * 0.05;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={isHovered ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  rotate: 0
                } : { 
                  opacity: 0, 
                  y: 60, 
                  scale: 0.8,
                  rotate: 0
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: isHovered ? delay : 0
                }}
                className="relative shrink-0 flex flex-col items-center pointer-events-auto cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                {/* Image Container */}
                <div className={cn(
                  "relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-800 transition-transform duration-500",
                  "w-24 h-36 sm:w-32 sm:h-48 md:w-44 md:h-64 lg:w-56 lg:h-[22rem]", // Much bigger sizes
                  isHovered && "hover:scale-105"
                )}>
                  <Image 
                    src={member.src} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 250px"
                  />
                </div>
                
                {/* Name and Position Label Below Image */}
                <div className="w-full mt-4 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-2xl flex flex-col items-center text-center">
                    <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent text-sm sm:text-base md:text-xl font-extrabold tracking-wide drop-shadow-lg">
                      {member.name}
                    </span>
                    <span className="text-[#FFD700] text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mt-1 drop-shadow-md">
                      {member.position}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Massive Bold Text */}
        <div className="relative z-10 text-center w-full overflow-visible flex justify-center mt-12 md:mt-24">
          <h2 
            className={cn(
              "text-[14vw] sm:text-[15vw] md:text-[16vw] font-black tracking-tighter leading-[0.8] transition-all duration-700 ease-out select-none uppercase inline-block whitespace-nowrap",
              isHovered 
                ? "text-transparent" 
                : "bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent"
            )}
            style={{
              WebkitTextStroke: isHovered ? "2px rgba(0, 75, 255, 0.4)" : "0px",
              transform: isHovered ? "scale(1.02)" : "scale(1)"
            }}
          >
            OUR TEAM
          </h2>
        </div>
      </div>

      {/* Member Story Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-neutral-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-start"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-80 shrink-0 rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-neutral-800">
                <Image 
                  src={selectedMember.src} 
                  alt={selectedMember.name} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#00c8ff] to-[#004bff] bg-clip-text text-transparent mb-2">
                  {selectedMember.name}
                </h3>
                <h4 className="text-[#FFD700] text-sm sm:text-base font-semibold uppercase tracking-widest mb-6">
                  {selectedMember.position}
                </h4>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg">
                  {selectedMember.story}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
