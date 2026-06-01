window.i18n = (function() {
  const defaultLang = 'pt-BR';

  function getSavedLang() {
    return defaultLang;
  }

  function setLanguage(lang) {
    document.documentElement.lang = defaultLang;
    translateUI();
    updateMetaTags();
    document.dispatchEvent(new CustomEvent('foundation:language_changed', {
      detail: { lang: defaultLang }
    }));
  }

  function translateUI() {
    const dictionary = window.i18nData[defaultLang].ui;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[key]) {
        // Use innerHTML because some strings have HTML tags like <strong>
        el.innerHTML = dictionary[key];
      }
    });

    // Update specific attributes like placeholders
    const searchInput = document.getElementById('globalSearch');
    if (searchInput && dictionary['topbar.search_placeholder']) {
      searchInput.placeholder = dictionary['topbar.search_placeholder'];
    }
  }

  function updateMetaTags() {
    const dictionary = window.i18nData[defaultLang].ui;
    
    document.title = dictionary['title'] || "Foundation";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = dictionary['description'] || "";
  }

  function getCurrentContent() {
    return window.i18nData[defaultLang].content;
  }

  function getCurrentLang() {
    return defaultLang;
  }

  function init() {
    setLanguage(defaultLang);
  }

  // Expose API
  return {
    init,
    setLanguage,
    getCurrentContent,
    getSavedLang,
    getCurrentLang
  };
})();

// Wait for DOM to load, then initialize i18n
document.addEventListener('DOMContentLoaded', () => {
  window.i18n.init();
});
