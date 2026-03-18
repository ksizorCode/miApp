// 📌 Nombre de caché
const CACHE_NAME = 'prlapp-v1';

// 📌 Archivos a cachear
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/ico_prl.png'
];

// 📌 Instalación
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('📦 Cacheando archivos');
            return cache.addAll(urlsToCache);
        })
    );
});

// 📌 Activación
self.addEventListener('activate', event => {
    console.log('🟢 Service Worker activo');
});

// 📌 Interceptar peticiones (modo offline)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});

const urlsToCache = [
    '/',
    '/index.html',
    '/offline.html'
];

// En fetch:
.catch(() => caches.match('/offline.html'))

