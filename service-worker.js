const CACHE_NAME = 'track-offline-v1';
const APP_SHELL = [
    './',
    './index.html',
    './css/style.css',
    './js/app.js',
    './js/tailwind.config.js',
    './manifest.webmanifest',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/@phosphor-icons/web',
    'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            await Promise.allSettled(APP_SHELL.map(async (url) => {
                const request = new Request(url, { mode: url.startsWith('http') ? 'no-cors' : 'same-origin' });
                const response = await fetch(request);
                if (response.ok || response.type === 'opaque') {
                    await cache.put(request, response);
                }
            }));
            await self.skipWaiting();
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys
                .filter((key) => key !== CACHE_NAME)
                .map((key) => caches.delete(key))
        )).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;

            return fetch(event.request).then((networkResponse) => {
                if (networkResponse.ok || networkResponse.type === 'opaque') {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            }).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
                return new Response('', { status: 503, statusText: 'Offline' });
            });
        })
    );
});
