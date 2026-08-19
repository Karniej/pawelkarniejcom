/**
 * Service worker for pawelkarniej.com.
 *
 * The site is a static export, so the rules are deliberately simple:
 *
 * - Pages use the network first. A stale marketing page is worse than a slow
 *   one, and a new deploy must win immediately.
 * - Build assets under /_next/static and the icons use the cache first. Their
 *   names carry a hash, so a cached copy can never be the wrong copy.
 * - Every other request goes straight to the network, untouched.
 *
 * Bump CACHE_VERSION whenever these rules change. The activate step deletes
 * every cache that does not match, so an old worker cannot keep serving stale
 * files after an update.
 *
 * @format
 */

const CACHE_VERSION = "v1";
const PAGE_CACHE = `pages-${CACHE_VERSION}`;
const ASSET_CACHE = `assets-${CACHE_VERSION}`;
const OFFLINE_URL = "/";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGE_CACHE)
      .then((cache) => cache.add(OFFLINE_URL))
      .catch(() => undefined)
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== PAGE_CACHE && key !== ASSET_CACHE)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

const isCacheableAsset = (url) =>
  url.pathname.startsWith("/_next/static/") ||
  url.pathname.startsWith("/icons/") ||
  url.pathname === "/favicon.ico" ||
  url.pathname === "/favicon.png";

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Pages: network first, cache as a fallback when the phone is offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches
            .open(PAGE_CACHE)
            .then((cache) => cache.put(request, copy))
            .catch(() => undefined);
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match(OFFLINE_URL)),
        ),
    );
    return;
  }

  // Hashed build output and icons: cache first.
  if (isCacheableAsset(url)) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            const copy = response.clone();
            caches
              .open(ASSET_CACHE)
              .then((cache) => cache.put(request, copy))
              .catch(() => undefined);
            return response;
          }),
      ),
    );
  }
});
