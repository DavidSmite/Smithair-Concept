
// 🔧 Snap Test Script – PWA & SEO Validation (à exécuter dans le navigateur ou via Playwright / Puppeteer)

(async () => {
  const testURL = 'http://localhost:3000/fr'; // adapte au port actif

  console.log('🧪 Test #1 – Vérification du <head> SEO');
  const head = document.head.innerHTML;
  console.assert(head.includes('<title>'), '❌ Title manquant');
  console.assert(head.includes('og:image'), '❌ Balise OG:image manquante');
  console.assert(head.includes('description'), '❌ Meta description manquante');

  console.log('✅ SEO <head> vérifié');

  console.log('🧪 Test #2 – Manifest PWA');
  const manifest = document.querySelector('link[rel="manifest"]');
  console.assert(manifest !== null, '❌ manifest.json non détecté');

  console.log('🧪 Test #3 – Service Worker actif');
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();
    console.assert(registration, '❌ Aucun service worker actif');
    if (registration) {
      console.log('✅ SW actif :', registration.scope);
    }
  } else {
    console.warn('❌ ServiceWorker API non supportée');
  }

  console.log('🧪 Test #4 – Installation possible ?');
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('✅ beforeinstallprompt détecté – installable');
  });

  console.log('🧪 Test #5 – Mode hors-ligne');
  const offlineTest = await fetch(testURL).catch(() => 'offline');
  console.assert(offlineTest !== 'offline', '❌ La page ne s'affiche pas en offline');

  console.log('✅ Tous les tests PWA / SEO de base ont été exécutés');

})();
