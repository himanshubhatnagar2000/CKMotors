import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState('hi');

  useEffect(() => {
    // Read googtrans cookie to detect current language state
    const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
    if (match && match[1]) {
      if (match[1].includes('/hi')) {
        setCurrentLang('hi');
      } else {
        setCurrentLang('en');
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    if (lang === currentLang) return;

    setCurrentLang(lang);
    const domain = window.location.hostname;
    const cookieValue = lang === 'hi' ? '/en/hi' : '/en/en';

    // Set googtrans cookie for domain & root path
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain}`;
    document.cookie = `googtrans=${cookieValue}; path=/`;

    // Trigger select element in google translate if initialized, or reload
    const selectEl = document.querySelector('.goog-te-combo');
    if (selectEl) {
      selectEl.value = lang;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-full text-xs font-semibold text-white shadow-sm">
      <Globe size={14} className="ml-1.5 text-blue-200 shrink-0" />

      {/* English Pill */}
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${currentLang === 'en'
          ? 'bg-white text-tata-blue shadow-sm scale-105'
          : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
      >
        EN
      </button>

      {/* Hindi Pill */}
      <button
        type="button"
        onClick={() => changeLanguage('hi')}
        className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${currentLang === 'hi'
          ? 'bg-white text-tata-blue shadow-sm scale-105'
          : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
      >
        हिन्दी
      </button>
    </div>
  );
}
