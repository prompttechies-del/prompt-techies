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
      lerp: 0.1, 
      duration: 1.5, 
      smoothWheel: true 
    }}>
      {children}
      {mounted && <BackgroundMusic />}
    </ReactLenis>
  );
}
