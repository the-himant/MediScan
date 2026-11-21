const MediScan_LANG_KEY = 'MediScan_lang_v1';
const MediScan_HISTORY_KEY = 'MediScan_history_v1';
const MediScan_RESCAN_KEY = 'MediScan_rescan_item_v1';

const SHARED_STRINGS = {
  English: {
    code: 'en-IN',
    brand: 'MediScan AI',
    navDashboard: 'Dashboard',
    navHistory: 'History',
    navSafety: 'Packaging text reader only. Always confirm medicine details with a doctor or pharmacist.',
    footer: 'MediScan AI helps read visible medicine packaging and does not prescribe, diagnose, or replace professional medical guidance.'
  },
  Hindi: {
    code: 'hi-IN',
    brand: 'MediScan AI',
    navDashboard: 'डैशबोर्ड',
    navHistory: 'इतिहास',
    navSafety: 'केवल पैकेज की जानकारी पढ़ने के लिए। दवा की पुष्टि डॉक्टर या फार्मासिस्ट से करें।',
    footer: 'MediScan AI केवल दवा के पैकेट का लिखा अंश पढ़ने में मदद करता है; यह चिकित्सीय परामर्श या पर्चा नहीं है।'
  },
  Punjabi: {
    code: 'pa-IN',
    brand: 'MediScan AI',
    navDashboard: 'ਡੈਸ਼ਬੋਰਡ',
    navHistory: 'ਇਤਿਹਾਸ',
    navSafety: 'ਸਿਰਫ਼ ਡੱਬੇ ਦੀ ਲਿਖਤ ਪੜ੍ਹਨ ਲਈ। ਦਵਾਈ ਦੀ ਪੁਸ਼ਟੀ ਡਾਕਟਰ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਨਾਲ ਕਰੋ।',
    footer: 'MediScan AI ਸਿਰਫ਼ ਦਵਾਈ ਦੇ ਪੈਕਟ ਦੀ ਲਿਖਤ ਪੜ੍ਹਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ; ਇਹ ਡਾਕਟਰੀ ਸਲਾਹ ਜਾਂ ਨੁਸਖ਼ਾ ਨਹੀਂ ਹੈ।'
  }
};

function getCurrentLanguage() {
  const saved = localStorage.getItem(MediScan_LANG_KEY);
  return SHARED_STRINGS[saved] ? saved : 'English';
}

function setCurrentLanguage(lang) {
  if (!SHARED_STRINGS[lang]) return;
  localStorage.setItem(MediScan_LANG_KEY, lang);
}

function loadScanHistory() {
  try {
    const raw = localStorage.getItem(MediScan_HISTORY_KEY);
    const parsed = JSON.parse(raw || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveScanHistory(items) {
  localStorage.setItem(MediScan_HISTORY_KEY, JSON.stringify(items));
}

function appendScanToHistory(record) {
  const items = loadScanHistory();
  items.unshift(record);
  saveScanHistory(items);
  updateHistoryNavCount();
  return items;
}

function removeScanFromHistory(id) {
  const items = loadScanHistory().filter((item) => item.id !== id);
  saveScanHistory(items);
  updateHistoryNavCount();
  return items;
}

function updateHistoryNavCount() {
  const count = loadScanHistory().length;
  const badge = document.getElementById('navHistoryCount');
  if (badge) badge.textContent = String(count);
}

function speakText(text, lang) {
  if (!text) return;
  const langInfo = SHARED_STRINGS[lang] || SHARED_STRINGS.English;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = langInfo.code;
    utter.rate = 0.92;
    window.speechSynthesis.speak(utter);
  }
}

function initSharedChrome(onLanguageChange) {
  const lang = getCurrentLanguage();
  const s = SHARED_STRINGS[lang];

  const brandEl = document.getElementById('navBrandName');
  const dashEl = document.getElementById('navDashboardLabel');
  const histEl = document.getElementById('navHistoryLabel');
  const safetyEl = document.getElementById('navSafetyText');
  const footerEl = document.getElementById('footerDisclaimerText');

  if (brandEl) brandEl.textContent = s.brand;
  if (dashEl) dashEl.textContent = s.navDashboard;
  if (histEl) histEl.textContent = s.navHistory;
  if (safetyEl) safetyEl.textContent = s.navSafety;
  if (footerEl) footerEl.textContent = s.footer;

  updateHistoryNavCount();

  document.querySelectorAll('.lang-pill').forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang');
    btn.classList.toggle('active', btnLang === lang);
    btn.addEventListener('click', () => {
      setCurrentLanguage(btnLang);
      document.querySelectorAll('.lang-pill').forEach((p) => {
        p.classList.toggle('active', p.getAttribute('data-lang') === btnLang);
      });
      initSharedChrome();
      if (typeof onLanguageChange === 'function') {
        onLanguageChange(btnLang);
      }
    });
  });

  const menuBtn = document.getElementById('mobileMenuBtn');
  const sidenav = document.getElementById('sideNav');
  const backdrop = document.getElementById('mobileBackdrop');

  function closeDrawer() {
    if (sidenav) sidenav.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
  }

  if (menuBtn && sidenav && backdrop) {
    menuBtn.addEventListener('click', () => {
      sidenav.classList.toggle('open');
      backdrop.classList.toggle('open');
    });
    backdrop.addEventListener('click', closeDrawer);
  }
}
