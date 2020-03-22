const name = 'frobaglia';
console.log(`Hello ${name}`);

addEventListener('install', (event) => {
  console.log('Hello from the service worker')
  event.waitUntil(
    caches.open('offline').then((cache) => {
      cache.add('offline.html');
    })
  );
});

addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match('offline.html')),
  );
});