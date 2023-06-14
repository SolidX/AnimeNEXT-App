const CACHE_NAME = 'anext-app-v1.0';

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([
      'index.html',
      'pages/schedule.html',
      'sched.js',
      'schedule.json',
      'artists.json',
      'pages/artistsalley.html',
      'pages/hours.html',
      'pages/location.html',
      'pages/shuttles.html',
      'pages/bagpolicy.html',
      'pages/conduct.html',
      'pages/cosplaypropspolicy.html',
      'pages/dresscode.html',
      'pages/about.html'
    ]);
    
    self.skipWaiting();
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(event.request);

    try {
      //We're out of dev time so getting the schedule is online first w/ fallback to cache because updating it is tricky
      const fetchResponse = await fetch(event.request);
      cache.put(event.request, fetchResponse.clone()).catch( err => console.log(err));
      
      return fetchResponse;
    } catch (e) {
        // The network failed.
        return cachedResponse;
    }
  })());
});