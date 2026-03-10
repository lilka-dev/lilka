(function () {
  const STORAGE_KEY = "lilka_lang";
  const FALLBACK_LANG = "uk";
  const SUPPORTED_LANGS = ["uk", "en"];

  function trackLanguagePreference(lang, source) {
    if (!window.umami || typeof window.umami.track !== "function") {
      return;
    }

    window.umami.track("language_preference", {
      language: lang,
      source: source
    });
  }

  function detectInitialLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(saved)) {
      return saved;
    }

    const browserLang = (navigator.language || "").toLowerCase();
    if (browserLang.startsWith("en")) {
      return "en";
    }

    return FALLBACK_LANG;
  }

  function setSwitchButtonState(button, lang) {
    if (!button) return;
    button.textContent = lang === "uk" ? "🇬🇧 EN" : "🇺🇦 UA";
    button.setAttribute("aria-label", lang === "uk" ? "Switch language to English" : "Змінити мову на українську");
  }

  function getTranslationValue(translations, page, key, lang) {
    const pageMap = translations[page];
    if (!pageMap) return null;

    const keyMap = pageMap[key];
    if (!keyMap) return null;

    return keyMap[lang] || keyMap[FALLBACK_LANG] || null;
  }

  function applyTranslations(translations, lang, source) {
    const page = document.body.dataset.i18nPage;
    if (!page) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      const value = getTranslationValue(translations, page, key, lang);
      if (value !== null) {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const key = node.dataset.i18nHtml;
      const value = getTranslationValue(translations, page, key, lang);
      if (value !== null) {
        node.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      const descriptor = node.dataset.i18nAttr;
      if (!descriptor) return;

      const pairs = descriptor.split(";").map((item) => item.trim()).filter(Boolean);
      pairs.forEach((pair) => {
        const [attrName, key] = pair.split(":").map((part) => part && part.trim());
        if (!attrName || !key) return;

        const value = getTranslationValue(translations, page, key, lang);
        if (value !== null) {
          node.setAttribute(attrName, value);
        }
      });
    });

    localStorage.setItem(STORAGE_KEY, lang);
    setSwitchButtonState(document.querySelector("[data-lang-switch]"), lang);
    trackLanguagePreference(lang, source || "unknown");
  }

  async function initI18n() {
    const switchButton = document.querySelector("[data-lang-switch]");
    const initialLang = detectInitialLanguage();

    try {
      const response = await fetch("/static/i18n.json", { cache: "no-cache" });
      if (!response.ok) {
        throw new Error("Failed to fetch translations");
      }

      const translations = await response.json();
      let activeLang = initialLang;
      applyTranslations(translations, activeLang, "load");

      if (switchButton) {
        switchButton.addEventListener("click", function () {
          activeLang = activeLang === "uk" ? "en" : "uk";
          applyTranslations(translations, activeLang, "switch");
        });
      }
    } catch (error) {
      setSwitchButtonState(switchButton, initialLang);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initI18n);
  } else {
    initI18n();
  }
})();
