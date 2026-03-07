const CACHE_NAME = 'fruity-v2.3.1';
const FONT_CACHE = 'fruity-fonts-v1';

// Core app files — all self-contained in index.html (fonts + images base64 embedded)
const PRECACHE_URLS = [
  '/fruity-app/',
  '/fruity-app/index.html',
  '/fruity-app/manifest.json',
  '/fruity-app/icon-192.png',
  '/fruity-app/icon-512.png',
  '/fruity-app/screenshot.png',
];

// Install: cache all core files immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate: delete all old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== FONT_CACHE)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch strategy:
// - Google Fonts: cache-first with network fallback (stale-while-revalidate)
// - App files: cache-first (they are self-contained)
// - Everything else: network-first with cache fallback
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Google Fonts — cache aggressively
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(FONT_CACHE).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            cache.put(event.request, response.clone());
            return response;
          }).catch(() => cached);
        })
      )
    );
    return;
  }

  // Same-origin app files — cache-first
  if (url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            caches.open(CACHE_NAME).then(cache =>
              cache.put(event.request, response.clone())
            );
          }
          return response;
        }).catch(() => {
          // Offline fallback for navigation
          if (event.request.mode === 'navigate') {
            return caches.match('/fruity-app/index.html');
          }
        });
      })
    );
  }
});
