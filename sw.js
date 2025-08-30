const CACHE = 'parole5-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './words-it-5.txt',
  './icons/favicon.png',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-192.png',
  './icons/icon-256.png',
  './icons/icon-384.png',
  './icons/icon-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(e.request);
      if (cached) return cached;
      try {
        const res = await fetch(e.request);
        if (res && res.ok) cache.put(e.request, res.clone());
        return res;
      } catch {
        return cached || Response.error();
      }
    })());
  }
});
