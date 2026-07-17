"use client";

import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AboutVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] rounded-[24px] md:rounded-[48px] overflow-hidden shadow-2xl border border-white/5 group">
      <video
        ref={videoRef}
        src="/lli.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </div>
  );
}
