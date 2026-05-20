let lastTrackedSection = null;

function trackSectionView(sectionId, source = 'navigation') {
  if (typeof window.gtag !== 'function' || !sectionId || sectionId === lastTrackedSection) return;

  const pagePath = sectionId === 'inicio' ? '/' : `/#${sectionId}`;
  lastTrackedSection = sectionId;

  window.gtag('event', 'page_view', {
    page_title: `Foundation | ${sectionId}`,
    page_location: `${window.location.origin}${pagePath}`,
    page_path: pagePath
  });

  window.gtag('event', 'section_view', {
    section_name: sectionId,
    navigation_source: source
  });
}

function getCurrentSection() {
  return window.location.hash.replace('#', '') || 'inicio';
}

window.addEventListener('load', () => {
  trackSectionView(getCurrentSection(), 'initial_load');
});

document.addEventListener('foundation:navigate', (event) => {
  trackSectionView(event.detail?.sectionId || getCurrentSection(), 'in_app_navigation');
});
