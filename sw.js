const name = 'frobaglia';
console.log(`Hello ${name}`);

addEventListener('install', (event) => {
  console.log('Hello from the service worker')
});