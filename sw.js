self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
        vibrate: [100, 50, 100],
        data: { dateOfArrival: Date.now() }
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Permite que o Service Worker assuma o controle imediatamente
self.addEventListener('install', () => self.skipWaiting());
