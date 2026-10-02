import { useSyncExternalStore } from 'react';

const noopSubscribe = () => () => {};

export function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export function useIsMobile(breakpoint = 768) {
  return useSyncExternalStore(
    noopSubscribe,
    () => window.innerWidth < breakpoint,
    () => false
  );
}
