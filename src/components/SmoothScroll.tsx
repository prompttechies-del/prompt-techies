'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';
import { useIsClient } from '@/lib/useClient';
import BackgroundMusic from '@/components/BackgroundMusic';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const mounted = useIsClient();
  const reduceMotion = mounted && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12, // snappier, less "floaty" than before
        smoothWheel: !reduceMotion,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
      {mounted && <BackgroundMusic />}
      
    </ReactLenis>
  );
}
