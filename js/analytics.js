let lastTrackedSection = null;
let currentSection = null;
let currentSectionStartedAt = null;

function trackEvent(eventName, params = {}) {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, {
    ...params,
    debug_mode: Boolean(window.analyticsDebugMode)
  });
}

function flushSectionTime(reason = 'navigation') {
  if (!currentSection || currentSectionStartedAt === null) return;

  const durationMs = Date.now() - currentSectionStartedAt;
  const durationSeconds = Math.max(1, Math.round(durationMs / 1000));

  trackEvent('section_engagement', {
    section_name: currentSection,
    engagement_time_seconds: durationSeconds,
    leave_reason: reason
  });

  currentSectionStartedAt = Date.now();
}

function trackSectionView(sectionId, source = 'navigation') {
  if (typeof window.gtag !== 'function' || !sectionId || sectionId === lastTrackedSection) return;

  if (currentSection && currentSection !== sectionId) {
    flushSectionTime('section_change');
  }

  const pagePath = sectionId === 'inicio' ? '/' : `/#${sectionId}`;
  lastTrackedSection = sectionId;
  currentSection = sectionId;
  currentSectionStartedAt = Date.now();

  trackEvent('page_view', {
    page_title: `Foundation | ${sectionId}`,
    page_location: `${window.location.origin}${pagePath}`,
    page_path: pagePath
  });

  trackEvent('section_view', {
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
  trackSectionView(
    event.detail?.sectionId || getCurrentSection(),
    event.detail?.source || 'in_app_navigation'
  );
});

document.addEventListener('foundation:topic_open', (event) => {
  trackEvent('topic_open', {
    section_name: event.detail?.sectionId,
    content_level: event.detail?.level,
    ia_subtab: event.detail?.iaSubtab || undefined,
    topic_title: event.detail?.topicTitle
  });
});

document.addEventListener('foundation:level_change', (event) => {
  trackEvent('content_level_change', {
    section_name: event.detail?.sectionId,
    content_level: event.detail?.level,
    ia_subtab: event.detail?.iaSubtab || undefined
  });
});

document.addEventListener('foundation:ia_subtab_change', (event) => {
  trackEvent('ia_subtab_change', {
    section_name: event.detail?.sectionId,
    ia_subtab: event.detail?.iaSubtab,
    content_level: event.detail?.level
  });
});

document.addEventListener('foundation:search', (event) => {
  const query = event.detail?.query || '';
  trackEvent('search', {
    search_term: query,
    results_count: event.detail?.resultsCount || 0,
    destination_section: event.detail?.destinationSection || undefined,
    search_action: event.detail?.action || 'search'
  });
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    flushSectionTime('tab_hidden');
  }
});

window.addEventListener('pagehide', () => {
  flushSectionTime('page_hide');
});
