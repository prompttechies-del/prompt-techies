// A simple service worker to satisfy PWA installation requirements.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Pass-through fetch (no caching). This simply satisfies Chrome's requirement
  // that a fetch handler exists to trigger the "Add to Home Screen" prompt.
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
