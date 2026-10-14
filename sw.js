// My God Box service-worker cleanup for v1.3.2
// Replaces/unregisters any older cached worker so GitHub Pages serves the current files.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async () => {
  const keys = await caches.keys();
  await Promise.all(keys.map(k => caches.delete(k)));
  await self.registration.unregister();
  const clients = await self.clients.matchAll({type:'window', includeUncontrolled:true});
  clients.forEach(client => client.navigate(client.url));
})()));
