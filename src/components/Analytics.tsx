'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { CONSENT_KEY, setAnalyticsConsent } from '@/lib/analytics';

const subscribe = () => () => {};

function readStoredConsent(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

/**
 * Cookie / analytics consent banner. Google Analytics (loaded in layout.tsx) starts in
 * "denied" mode and is only switched to "granted" after the visitor accepts.
 */
export default function Analytics() {
  const stored = useSyncExternalStore(subscribe, readStoredConsent, () => 'pending');
  const [dismissed, setDismissed] = useState(false);

  // Re-apply a previously saved choice on every page load.
  useEffect(() => {
    if (stored === 'granted') {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    }
  }, [stored]);

  if (!process.env.NEXT_PUBLIC_GA_ID || stored !== null || dismissed) return null;

  const choose = (granted: boolean) => {
    setAnalyticsConsent(granted);
    setDismissed(true);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-sm z-[9998] rounded-2xl border border-white/10 bg-neutral-950/95 p-5 text-sm text-gray-300 shadow-2xl backdrop-blur-xl"
    >
      <p className="leading-relaxed">
        We use analytics cookies to understand how the site is used and improve it. See our{' '}
        <Link href="/privacy-policy" className="text-[#00c8ff] underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-full bg-[#004bff] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#003cb3] transition-colors"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-full border border-white/20 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/5 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
