'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode, useState, useEffect } from 'react';
import BackgroundMusic from '@/components/BackgroundMusic';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ReactLenis root options={{ 
      lerp: 0.06, 
      duration: 2,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Premium exponential ease-out
    }}>
      {children}
      {mounted && <BackgroundMusic />}
    </ReactLenis>
  );
}
