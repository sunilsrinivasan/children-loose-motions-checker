self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('loose-motions-cache-v1')
      .then(cache => cache.addAll([
        './',
        './index.html',
        './landing.css',
        './style.css',
        './chatbot.js',
        './manifest.json'
      ]))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
