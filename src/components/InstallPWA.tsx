'use client';

import { useState, useEffect } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

export default function InstallPWA({ scrolled }: { scrolled?: boolean }) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
    }

    // Register Service Worker immediately
    if ('serviceWorker' in navigator) {
      const registerSW = () => {
        navigator.serviceWorker.register('/sw.js').catch((err) => {
          console.log('SW registration failed: ', err);
        });
      };

      if (document.readyState === 'complete') {
        registerSW();
      } else {
        window.addEventListener('load', registerSW);
      }
    }

    // Listen for the PWA install prompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isInstalled) {
      alert('Prompt Techies App is already installed on your device!');
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // Fallback instructions for unsupported browsers or iOS Safari
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
      if (isIOS) {
        alert("To install Prompt Techies on iPhone/iPad:\n\n1. Tap the Share button at the bottom of Safari (square with an up arrow)\n2. Scroll down and tap 'Add to Home Screen'\n3. Tap 'Add'");
      } else {
        alert("To install Prompt Techies App:\n\n📱 Android (Chrome): Tap the three dots (⋮) menu > 'Add to Home screen' or 'Install app'\n\n💻 Desktop (Chrome/Edge): Click the Install icon in the browser address bar on the right.");
      }
    }
  };

  return (
    <button
      onClick={handleInstallClick}
      className={`
        flex items-center gap-2 rounded-full font-bold uppercase tracking-wider transition-all whitespace-nowrap 
        bg-[#004bff] text-white hover:bg-[#003cb3] border border-transparent shadow-md shadow-[#004bff]/20 cursor-pointer active:scale-95
        ${scrolled ? 'px-3 py-1.5 text-[10px]' : 'px-4 py-2 text-[10px]'}
      `}
    >
      {isInstalled ? (
        <>
          <CheckCircle2 className="w-3.5 h-3.5 text-[#00c8ff]" />
          <span>App Installed</span>
        </>
      ) : (
        <>
          <Download className="w-3.5 h-3.5" />
          <span>Install App</span>
        </>
      )}
    </button>
  );
}
