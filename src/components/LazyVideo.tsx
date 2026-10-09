'use client';

import { useEffect, useRef, type VideoHTMLAttributes } from 'react';

/**
 * Drop-in replacement for an autoplaying background <video>.
 * It only downloads and plays while on screen, and pauses when scrolled away or when the
 * visitor prefers reduced motion, so many videos on one page no longer compete for the CPU.
 */
export default function LazyVideo(allProps: VideoHTMLAttributes<HTMLVideoElement>) {
  // autoPlay/preload are controlled here; everything else passes straight through.
  const { autoPlay, preload, ...props } = allProps;
  void autoPlay;
  void preload;
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.01 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return <video ref={ref} muted playsInline loop preload="none" {...props} />;
}
