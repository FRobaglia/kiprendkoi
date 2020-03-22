const name = 'frobaglia';
console.log(`Hello ${name}`);

addEventListener('install', (event) => {
  console.log('Hello from the service worker')
});

addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});