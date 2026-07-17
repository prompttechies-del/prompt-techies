"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import MagicRings from './MagicRings';

interface CarouselItem {
  id: number;
  title: string;
  image?: string;
  video?: string;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 1,
    title: 'HIRING PARTNER FOR THE HACKATHON',
    video: '/dance.mp4'
  },
  {
    id: 2,
    title: 'CORPORATE MEETUP',
    video: '/corp.mp4'
  },
  {
    id: 3,
    title: 'MEET TEAM PROMPT TECHIES',
    video: '/hackathon_video_only.mp4'
  },
  {
    id: 4,
    title: 'BOOTCAMP',
    video: '/product.mp4'
  },
  {
    id: 5,
    title: 'WORKSHOPS',
    video: '/events.mp4'
  },
  {
    id: 6,
    title: 'PRODUCT ACTIVATION',
    video: '/activation.mp4'
  }
];

export default function CoverflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  const getCardProps = (index: number) => {
    // Calculate distance from active index
    // Handle wrap-around math
    const total = CAROUSEL_ITEMS.length;
    let diff = index - activeIndex;
    
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    const absDiff = Math.abs(diff);
    
    // Base properties based on position
    let scale = 1;
    let x = 0;
    let zIndex = 10;
    let opacity = 1;
    let brightness = 1;
    
    if (absDiff === 0) {
      scale = 1;
      x = 0;
      zIndex = 20;
      opacity = 1;
      brightness = 1;
    } else if (absDiff === 1) {
      scale = 0.75;
      x = diff > 0 ? 120 : -120; // Move right or left
      zIndex = 10;
      opacity = 0.6;
      brightness = 0.5;
    } else if (absDiff === 2) {
      scale = 0.55;
      x = diff > 0 ? 200 : -200;
      zIndex = 5;
      opacity = 0.3;
      brightness = 0.3;
    } else {
      scale = 0;
      opacity = 0;
    }

    return { scale, x, zIndex, opacity, brightness, diff };
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background radial gradient to give a subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00c8ff]/10 via-[#050505] to-[#050505]" />
      
      {/* MagicRings Background */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none mix-blend-screen">
        <MagicRings
          color="#00c8ff"
          colorTwo="#004bff"
          ringCount={6}
          speed={1.5}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
        />
      </div>
      
      <div className="relative z-10 w-full max-w-5xl h-full flex items-center justify-center perspective-[1000px]">
        <AnimatePresence mode="popLayout">
          {CAROUSEL_ITEMS.map((item, index) => {
            const { scale, x, zIndex, opacity, brightness, diff } = getCardProps(index);
            const absDiff = Math.abs(diff);
            
            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  scale,
                  x: `${x}%`,
                  zIndex,
                  opacity
                }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="absolute flex flex-col items-center cursor-pointer"
                style={{ 
                  filter: `brightness(${brightness})`,
                }}
                onClick={() => setActiveIndex(index)}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50) {
                    handleNext();
                  } else if (swipe > 50) {
                    handlePrev();
                  }
                }}
              >
                {/* Image/Video Container */}
                <div 
                  className={`relative w-[220px] md:w-[280px] aspect-[9/16] rounded-[24px] overflow-hidden transition-all duration-500 ${
                    absDiff === 0 
                      ? 'border-[1.5px] border-[#00c8ff]/60 shadow-[0_0_30px_rgba(0,200,255,0.15)]' 
                      : 'border border-white/5'
                  }`}
                >
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.image || ''}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                
                {/* Text Label */}
                <motion.div 
                  className={`mt-6 text-xs tracking-[0.25em] font-bold transition-all duration-500 ${
                    absDiff === 0 
                      ? 'bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,200,255,0.4)]' 
                      : 'text-gray-500/60'
                  }`}
                >
                  {item.title}
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
