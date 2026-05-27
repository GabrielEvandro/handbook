window.i18n = (function() {
  const supportedLangs = ['pt-BR', 'en', 'es'];
  const defaultLang = 'pt-BR';

  function getSavedLang() {
    return localStorage.getItem('foundation_lang') || defaultLang;
  }

  function setLanguage(lang) {
    if (!supportedLangs.includes(lang)) return;
    
    localStorage.setItem('foundation_lang', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active state in language selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate static UI elements
    translateUI();
    
    // Update Meta tags
    updateMetaTags();

    // Dispatch event so app.js can re-render dynamic content
    document.dispatchEvent(new CustomEvent('foundation:language_changed', {
      detail: { lang }
    }));
  }

  function translateUI() {
    const lang = getSavedLang();
    const dictionary = window.i18nData[lang]?.ui || window.i18nData[defaultLang].ui;
    
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
    const lang = getSavedLang();
    const dictionary = window.i18nData[lang]?.ui || window.i18nData[defaultLang].ui;
    
    document.title = dictionary['title'] || "Foundation";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = dictionary['description'] || "";
  }

  function getCurrentContent() {
    const lang = getSavedLang();
    return window.i18nData[lang]?.content || window.i18nData[defaultLang].content;
  }

  function init() {
    const lang = getSavedLang();
    // Setup language buttons
    const langSelector = document.getElementById('langSelector');
    if (langSelector) {
      langSelector.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (btn) {
          setLanguage(btn.dataset.lang);
        }
      });
    }
    
    // Initial setup
    setLanguage(lang);
  }

  // Expose API
  return {
    init,
    setLanguage,
    getCurrentContent,
    getSavedLang
  };
})();

// Wait for DOM to load, then initialize i18n
document.addEventListener('DOMContentLoaded', () => {
  window.i18n.init();
});
