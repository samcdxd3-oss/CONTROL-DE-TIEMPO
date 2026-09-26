// Service worker mínimo -- existe solo para que el navegador reconozca la
// app como instalable ("Agregar a pantalla de inicio" / "Instalar app").
// A propósito NO cachea nada: esta app siempre necesita conexión para
// hablar con Firestore en tiempo real, así que guardar una copia vieja
// del HTML/JS en caché haría más daño que bien (se podría quedar
// mostrando una versión desactualizada). Todas las peticiones pasan
// directo a la red, como si este archivo no existiera.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Sin caché: se deja pasar todo a la red normalmente.
});
