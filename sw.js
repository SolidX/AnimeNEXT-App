const CACHE_NAME = 'anext-app-v0.8';
const SCHEDULE_SOURCE = 'schedule.json';

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([
      'index.html',
      'sched.js',
      SCHEDULE_SOURCE,
      'pages/schedule.html',
      'pages/location.html',
      'pages/shuttles.html',
      'pages/about.html'
    ]);
    self.skipWaiting();
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(event.request);

    if (event.request.url.includes(SCHEDULE_SOURCE)) {

      try {
        //We're out of dev time so getting the schedule is online first w/ fallback to cache because updating it is tricky
        const fetchResponse = await fetch(event.request);
        cache.put(event.request, fetchResponse.clone()).catch( err => console.log(err));
        
        return fetchResponse;
      } catch (e) {
          // The network failed.
          return cachedResponse;
      }
    } else {
      //For static content (everything that's not the schedule), fetch it directly from the cache
      if (cachedResponse) {
        return cachedResponse;
      } else {
          try {
            // If the resource was not in the cache, try the network.
            const fetchResponse = await fetch(event.request);

            // Save the resource in the cache and return it.
            cache.put(event.request, fetchResponse.clone()).catch( err => console.log(err));
            return fetchResponse;
          } catch (e) {
            // The network failed.
          }
      }
    }
  })());
});