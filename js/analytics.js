import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js';
import { getAnalytics, isSupported, logEvent } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js';

const firebaseConfig = {
  apiKey: 'AIzaSyA8y607JV3mUVB8KjR55XT1lDB7hlJvbl4',
  authDomain: 'foundation-handbook-site.firebaseapp.com',
  projectId: 'foundation-handbook-site',
  storageBucket: 'foundation-handbook-site.firebasestorage.app',
  messagingSenderId: '195395885002',
  appId: '1:195395885002:web:a4a79048e74e10ca502133',
  measurementId: 'G-QPF9KYPK8L'
};

let analyticsInstance = null;
let lastTrackedSection = null;

function getCurrentSection() {
  return window.location.hash.replace('#', '') || 'inicio';
}

function trackSectionView(sectionId, source = 'navigation') {
  if (!analyticsInstance || !sectionId || sectionId === lastTrackedSection) return;

  const pagePath = sectionId === 'inicio' ? '/' : `/#${sectionId}`;
  lastTrackedSection = sectionId;

  logEvent(analyticsInstance, 'section_view', {
    section_name: sectionId,
    page_path: pagePath,
    navigation_source: source
  });
}

async function setupAnalytics() {
  const supported = await isSupported().catch(() => false);
  if (!supported) return;

  const app = initializeApp(firebaseConfig);
  analyticsInstance = getAnalytics(app);

  trackSectionView(getCurrentSection(), 'initial_load');

  document.addEventListener('foundation:navigate', (event) => {
    trackSectionView(event.detail?.sectionId || getCurrentSection(), 'in_app_navigation');
  });
}

setupAnalytics();
