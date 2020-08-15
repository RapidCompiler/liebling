const CACHE_NAME = 'contentCache';
const offlineUrl = '/offline/';
const adminPageSlug = '/ghost';

const toCache = [
  '/assets/css/offline.css',
  '/pwa/status.js',
  offlineUrl
];
/**
 * The event listener for the service worker installation and cache the offline page.
 */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(toCache))
      .then(self.skipWaiting())
  );
});

/**
 * Is the current request for an HTML page?
 * @param {Object} event 
 */
function isHtmlPage(event) {
  return event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html');
}

/**
 * Fetch and cache any results as we receive them.
 */
self.addEventListener('fetch', event => {
  if (!event.request.url.includes("/ghost/")) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Only return cache if it's not an HTML page
          if (response && !isHtmlPage(event)) {
            return response;
          }

          return fetch(event.request).then(
            function (response) {
              // Dont cache if not a 200 response
              if (!response || response.status !== 200) {
                return response;
              }

              let responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(function (cache) {
                  cache.put(event.request, responseToCache);
                });

              return response;
            }
          ).catch(error => {
            // Check if the user is offline first and is trying to navigate to a web page. If so serve offline page.
            if (isHtmlPage(event)) {
              return caches.match(offlineUrl);
            }
          });
        })
    );
  }
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key)
            return caches.delete(key)
          }
        }))
      })
      .then(() => self.clients.claim())
  )
})