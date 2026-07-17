'use client';

import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function InstallPWA({ scrolled }: { scrolled?: boolean }) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch((err) => {
          console.log('SW registration failed: ', err);
        });
      });
    }

    // Listen for the PWA install prompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert("To install Prompt Techies:\n\n📱 iOS/Safari: Tap 'Share' then 'Add to Home Screen'\n\n💻 Desktop/Android: Click the install icon in your browser's address bar.");
      return;
    }
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <button
      onClick={handleInstallClick}
      className={`
        flex items-center gap-2 rounded-full font-bold uppercase tracking-wider transition-all whitespace-nowrap 
        bg-[#004bff] text-white hover:bg-[#003cb3] border border-transparent shadow-md shadow-[#004bff]/20
        ${scrolled ? 'px-3 py-1.5 text-[10px]' : 'px-4 py-2 text-[10px]'}
      `}
    >
      <Download className="w-3.5 h-3.5" />
      <span>Install App</span>
    </button>
  );
}
