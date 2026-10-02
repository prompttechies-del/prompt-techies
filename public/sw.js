// Minimal service worker so the site is installable as a PWA.
// It never intercepts requests, so pages and assets always come straight from the network.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Intentionally empty: a registered fetch handler satisfies Chrome's install criteria.
});
