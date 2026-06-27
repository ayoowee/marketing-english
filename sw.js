// 简单离线缓存：首次打开后即可离线使用
const CACHE = 'mkt-en-v5';
const ASSETS = ['./', './index.html', './data.js', './vocab2.js', './scripts.js', './manifest.json'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
    return caches.open(CACHE).then(c => { try { c.put(e.request, resp.clone()); } catch (x) {} return resp; });
  }).catch(() => caches.match('./index.html'))));
});
