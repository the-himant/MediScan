const HISTORY_COPY = {
  English: {
    title: '🕒 Your Medicine History',
    subtitle: "Every medicine you've scanned, organized in one place.",
    scansSaved: (n) => `${n} ${n === 1 ? 'Scan' : 'Scans'} saved`,
    lastMedLabel: 'Last Scanned Medicine',
    viewDetails: '👁️ View Details',
    searchPlaceholder: 'Search medicines by name...',
    filterAll: 'All Scans',
    filterRecent: 'Recently Scanned',
    filterExpired: 'Expired',
    filterSoon: 'Expiring Soon',
    emptyTitle: 'Your history starts here.',
    emptyDesc: 'Scan your first medicine to keep its information organized and accessible whenever you need it.',
    emptyCta: '✨ Scan Your First Medicine',
    noMatchTitle: 'No matching medicines found',
    noMatchDesc: 'Try clearing your search or switching to another filter.',
    backToHistory: '← Back to History',
    listen: '🔊 Listen',
    purposeLbl: 'What This Medicine Is For',
    mfrLbl: 'Manufacturer',
    strLbl: 'Strength',
    mfgLbl: 'Manufacturing Date',
    expLbl: 'Expiry Date',
    notAvailable: 'Not visible on pack',
    unnamedMed: 'Unidentified Medicine',
    scannedOn: 'Scanned',
    rescanBtn: '🔄 Re-scan',
    deleteBtn: '🗑️ Delete',
    statusValid: 'Valid',
    statusSoon: 'Expiring Soon',
    statusExpired: 'Expired',
    statusUnknown: 'Expiry Unclear'
  },
  Hindi: {
    title: '🕒 आपकी दवा का इतिहास',
    subtitle: 'आपने जितनी भी दवाइयाँ स्कैन की हैं, वे एक जगह व्यवस्थित हैं।',
    scansSaved: (n) => `${n} स्कैन सहेजे गए`,
    lastMedLabel: 'अंतिम स्कैन की गई दवा',
    viewDetails: '👁️ विवरण देखें',
    searchPlaceholder: 'नाम से दवा खोजें...',
    filterAll: 'सभी स्कैन',
    filterRecent: 'हाल ही में स्कैन किए गए',
    filterExpired: 'एक्सपायर (समाप्त)',
    filterSoon: 'जल्द समाप्त होने वाली',
    emptyTitle: 'आपका इतिहास यहाँ से शुरू होता है।',
    emptyDesc: 'अपनी पहली दवा स्कैन करें ताकि ज़रूरत पड़ने पर उसकी जानकारी आसानी से मिल सके।',
    emptyCta: '✨ अपनी पहली दवा स्कैन करें',
    noMatchTitle: 'कोई मेल खाती दवा नहीं मिली',
    noMatchDesc: 'खोज साफ़ करें या कोई अन्य फ़िल्टर चुनें।',
    backToHistory: '← इतिहास पर वापस जाएं',
    listen: '🔊 सुनें',
    purposeLbl: 'यह दवा किस काम आती है',
    mfrLbl: 'निर्माता',
    strLbl: 'क्षमता / मात्रा',
    mfgLbl: 'निर्माण तिथि',
    expLbl: 'समाप्ति तिथि',
    notAvailable: 'पैकेट पर स्पष्ट नहीं',
    unnamedMed: 'अस्पष्ट दवा नाम',
    scannedOn: 'स्कैन किया गया',
    rescanBtn: '🔄 दोबारा स्कैन करें',
    deleteBtn: '🗑️ हटाएं',
    statusValid: 'मान्य',
    statusSoon: 'जल्द समाप्त',
    statusExpired: 'समाप्त',
    statusUnknown: 'तिथि अस्पष्ट'
  },
  Punjabi: {
    title: '🕒 ਤੁਹਾਡੀ ਦਵਾਈ ਦਾ ਇਤਿਹਾਸ',
    subtitle: 'ਤੁਹਾਡੇ ਵੱਲੋਂ ਸਕੈਨ ਕੀਤੀਆਂ ਸਾਰੀਆਂ ਦਵਾਈਆਂ ਇੱਕ ਥਾਂ ’ਤੇ ਤਰਤੀਬਵਾਰ ਹਨ।',
    scansSaved: (n) => `${n} ਸਕੈਨ ਸੁਰੱਖਿਅਤ`,
    lastMedLabel: 'ਆਖ਼ਰੀ ਸਕੈਨ ਕੀਤੀ ਦਵਾਈ',
    viewDetails: '👁️ ਵੇਰਵੇ ਦੇਖੋ',
    searchPlaceholder: 'ਨਾਮ ਰਾਹੀਂ ਦਵਾਈ ਖੋਜੋ...',
    filterAll: 'ਸਾਰੇ ਸਕੈਨ',
    filterRecent: 'ਤਾਜ਼ਾ ਸਕੈਨ ਕੀਤੇ',
    filterExpired: 'ਮਿਆਦ ਖ਼ਤਮ',
    filterSoon: 'ਜਲਦੀ ਖ਼ਤਮ ਹੋਣ ਵਾਲੀ',
    emptyTitle: 'ਤੁਹਾਡਾ ਇਤਿਹਾਸ ਇੱਥੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।',
    emptyDesc: 'ਆਪਣੀ ਪਹਿਲੀ ਦਵਾਈ ਸਕੈਨ ਕਰੋ ਤਾਂ ਜੋ ਲੋੜ ਪੈਣ ’ਤੇ ਜਾਣਕਾਰੀ ਆਸਾਨੀ ਨਾਲ ਮਿਲ ਸਕੇ।',
    emptyCta: '✨ ਆਪਣੀ ਪਹਿਲੀ ਦਵਾਈ ਸਕੈਨ ਕਰੋ',
    noMatchTitle: 'ਕੋਈ ਮਿਲਦੀ ਦਵਾਈ ਨਹੀਂ ਮਿਲੀ',
    noMatchDesc: 'ਖੋਜ ਸਾਫ਼ ਕਰੋ ਜਾਂ ਹੋਰ ਫ਼ਿਲਟਰ ਚੁਣੋ।',
    backToHistory: '← ਇਤਿਹਾਸ ’ਤੇ ਵਾਪਸ ਜਾਓ',
    listen: '🔊 ਸੁਣੋ',
    purposeLbl: 'ਇਹ ਦਵਾਈ ਕਿਸ ਕੰਮ ਆਉਂਦੀ ਹੈ',
    mfrLbl: 'ਨਿਰਮਾਤਾ',
    strLbl: 'ਤਾਕਤ / ਮਾਤਰਾ',
    mfgLbl: 'ਬਣਾਉਣ ਦੀ ਤਾਰੀਖ਼',
    expLbl: 'ਮਿਆਦ ਖ਼ਤਮ ਹੋਣ ਦੀ ਤਾਰੀਖ਼',
    notAvailable: 'ਪੈਕਟ ’ਤੇ ਸਪੱਸ਼ਟ ਨਹੀਂ',
    unnamedMed: 'ਅਸਪੱਸ਼ਟ ਦਵਾਈ ਨਾਮ',
    scannedOn: 'ਸਕੈਨ ਕੀਤਾ',
    rescanBtn: '🔄 ਮੁੜ-ਸਕੈਨ',
    deleteBtn: '🗑️ ਮਿਟਾਓ',
    statusValid: 'ਸਹੀ',
    statusSoon: 'ਜਲਦੀ ਖ਼ਤਮ',
    statusExpired: 'ਮਿਆਦ ਖ਼ਤਮ',
    statusUnknown: 'ਤਾਰੀਖ਼ ਅਸਪੱਸ਼ਟ'
  }
};

const HISTORY_STORAGE_KEY =
  typeof MediScan_HISTORY_KEY !== 'undefined' ? MediScan_HISTORY_KEY : 'MediScan_history_v1';
const LAST_SCAN_STORAGE_KEY =
  typeof MediScan_LAST_SCAN_KEY !== 'undefined' ? MediScan_LAST_SCAN_KEY : 'MediScan_last_scan_v1';
const RESCAN_STORAGE_KEY =
  typeof MediScan_RESCAN_KEY !== 'undefined' ? MediScan_RESCAN_KEY : 'MediScan_rescan_item_v1';

let activeFilter = 'all';
let searchQuery = '';
let selectedScanId = null;

function hSetText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function hSetDisplay(id, display) {
  const el = document.getElementById(id);
  if (el) el.style.display = display;
}

function hCleanField(val, fallback) {
  if (val === null || val === undefined) return fallback;
  const s = String(val).trim();
  if (!s || ['none', 'null', 'n/a', 'na', 'unknown'].includes(s.toLowerCase())) {
    return fallback;
  }
  return s;
}

function getSafeLanguage() {
  if (typeof getCurrentLanguage === 'function') {
    return getCurrentLanguage();
  }
  const activePill = document.querySelector('.lang-pill.active');
  return activePill?.dataset?.lang || 'English';
}

function readHistoryItems() {
  if (typeof loadScanHistory === 'function') {
    const items = loadScanHistory();
    return Array.isArray(items) ? items : [];
  }
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function writeHistoryItems(items) {
  if (typeof saveScanHistory === 'function') {
    saveScanHistory(items);
    return;
  }
  try {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(items));
    const badge = document.getElementById('navHistoryCount');
    if (badge) badge.textContent = String(items.length);
  } catch (e) {
    // Ignore storage quota errors
  }
}

function deleteHistoryItem(id) {
  if (typeof removeScanFromHistory === 'function') {
    removeScanFromHistory(id);
  } else {
    const updated = readHistoryItems().filter((item) => item.id !== id);
    writeHistoryItems(updated);
    if (updated.length > 0) {
      localStorage.setItem(LAST_SCAN_STORAGE_KEY, JSON.stringify(updated[0]));
    } else {
      localStorage.removeItem(LAST_SCAN_STORAGE_KEY);
    }
  }

  if (selectedScanId === id) {
    selectedScanId = null;
  }
  renderHistoryPage();
}

function parseExpiryDate(rawExp) {
  if (!rawExp) return null;
  const cleaned = String(rawExp).trim();
  if (!cleaned || ['none', 'null', 'n/a', 'na', 'unknown'].includes(cleaned.toLowerCase())) {
    return null;
  }

  // Matches MM/YYYY or MM-YYYY -> end of that month
  const monthYearMatch = cleaned.match(/^(\d{1,2})[\/\-](\d{4})$/);
  if (monthYearMatch) {
    const month = Number(monthYearMatch[1]);
    const year = Number(monthYearMatch[2]);
    if (month >= 1 && month <= 12) {
      return new Date(year, month, 0, 23, 59, 59, 999);
    }
  }

  // Matches YYYY-MM or YYYY/MM -> end of that month
  const yearMonthMatch = cleaned.match(/^(\d{4})[\/\-](\d{1,2})$/);
  if (yearMonthMatch) {
    const year = Number(yearMonthMatch[1]);
    const month = Number(yearMonthMatch[2]);
    if (month >= 1 && month <= 12) {
      return new Date(year, month, 0, 23, 59, 59, 999);
    }
  }

  const parsed = new Date(cleaned);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function getExpiryStatus(item, lang) {
  const c = HISTORY_COPY[lang] || HISTORY_COPY.English;
  const expDate = parseExpiryDate(item.expiry_date);
  if (!expDate) {
    return { code: 'unknown', label: c.statusUnknown, cssClass: 'expiry-unknown' };
  }

  const now = new Date();
  const diffDays = Math.ceil((expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return { code: 'expired', label: c.statusExpired, cssClass: 'expiry-expired' };
  }
  if (diffDays <= 30) {
    return { code: 'soon', label: c.statusSoon, cssClass: 'expiry-soon' };
  }
  return { code: 'valid', label: c.statusValid, cssClass: 'expiry-valid' };
}

function isRecentlyScanned(item) {
  if (!item.scanned_at) return false;
  const scannedTime = new Date(item.scanned_at).getTime();
  if (Number.isNaN(scannedTime)) return false;
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
  return Date.now() - scannedTime <= sevenDaysMs;
}

function formatScannedDate(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function applyHistoryCopy(lang) {
  const c = HISTORY_COPY[lang] || HISTORY_COPY.English;
  const items = readHistoryItems();

  hSetText('historyTitle', c.title);
  hSetText('historySubtitle', c.subtitle);
  hSetText('historyCountBadge', c.scansSaved(items.length));
  hSetText('navHistoryCount', String(items.length));
  hSetText('lastMedLabel', c.lastMedLabel);
  hSetText('lastMedViewBtn', c.viewDetails);
  hSetText('filterAll', c.filterAll);
  hSetText('filterRecent', c.filterRecent);
  hSetText('filterExpired', c.filterExpired);
  hSetText('filterSoon', c.filterSoon);
  hSetText('emptyTitle', c.emptyTitle);
  hSetText('emptyDesc', c.emptyDesc);
  hSetText('emptyCta', c.emptyCta);
  hSetText('backToHistoryBtn', c.backToHistory);
  hSetText('detailListenBtn', c.listen);
  hSetText('detailPurposeLbl', c.purposeLbl);
  hSetText('detailMfrLbl', c.mfrLbl);
  hSetText('detailStrLbl', c.strLbl);
  hSetText('detailMfgLbl', c.mfgLbl);
  hSetText('detailExpLbl', c.expLbl);

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.placeholder = c.searchPlaceholder;
  }
}

function getLatestMedicine(items) {
  if (typeof loadLastScannedMedicine === 'function') {
    const savedLast = loadLastScannedMedicine();
    if (savedLast && items.some((entry) => entry.id === savedLast.id)) {
      return savedLast;
    }
  }
  return items[0] || null;
}

function renderLastMedicineBanner(items, lang) {
  const c = HISTORY_COPY[lang] || HISTORY_COPY.English;
  const latest = getLatestMedicine(items);
  if (!latest) {
    hSetDisplay('lastMedicineBanner', 'none');
    return;
  }

  const name = hCleanField(latest.medicine_name, c.unnamedMed);
  const strength = hCleanField(latest.strength, '');
  const scannedText = formatScannedDate(latest.scanned_at);
  const metaParts = [strength, scannedText ? `${c.scannedOn}: ${scannedText}` : ''].filter(Boolean);

  hSetText('lastMedName', name);
  hSetText('lastMedMeta', metaParts.join(' • '));

  const viewBtn = document.getElementById('lastMedViewBtn');
  if (viewBtn) {
    viewBtn.onclick = () => openDetailView(latest.id);
  }

  hSetDisplay('lastMedicineBanner', 'block');
}

function filterItems(items, lang) {
  const q = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const name = hCleanField(item.medicine_name, '').toLowerCase();
    const mfr = hCleanField(item.manufacturer, '').toLowerCase();
    const purpose = hCleanField(item.basic_purpose, '').toLowerCase();
    const matchesSearch = !q || name.includes(q) || mfr.includes(q) || purpose.includes(q);
    if (!matchesSearch) return false;

    const status = getExpiryStatus(item, lang);
    if (activeFilter === 'recent') return isRecentlyScanned(item);
    if (activeFilter === 'expired') return status.code === 'expired';
    if (activeFilter === 'soon') return status.code === 'soon';
    return true;
  });
}

function createScanCard(item, lang) {
  const c = HISTORY_COPY[lang] || HISTORY_COPY.English;
  const card = document.createElement('article');
  card.className = 'med-history-card';

  const medName = hCleanField(item.medicine_name, c.unnamedMed);
  const mfrText = hCleanField(item.manufacturer, c.notAvailable);
  const strengthText = hCleanField(item.strength, '');
  const expText = hCleanField(item.expiry_date, c.notAvailable);
  const status = getExpiryStatus(item, lang);
  const scannedLabel = formatScannedDate(item.scanned_at);

  const top = document.createElement('div');
  top.className = 'med-card-top';

  const left = document.createElement('div');
  left.className = 'med-card-left';

  if (item.thumbnail) {
    const img = document.createElement('img');
    img.src = item.thumbnail;
    img.alt = medName;
    img.className = 'med-thumb';
    left.appendChild(img);
  } else {
    const ph = document.createElement('div');
    ph.className = 'med-thumb-placeholder';
    ph.textContent = '💊';
    left.appendChild(ph);
  }

  const titleWrap = document.createElement('div');
  const titleEl = document.createElement('div');
  titleEl.className = 'med-card-name';
  titleEl.textContent = medName;

  const subEl = document.createElement('div');
  subEl.className = 'med-card-sub';
  subEl.textContent = strengthText ? `${mfrText} • ${strengthText}` : mfrText;

  titleWrap.appendChild(titleEl);
  titleWrap.appendChild(subEl);
  left.appendChild(titleWrap);

  const badge = document.createElement('span');
  badge.className = `expiry-badge ${status.cssClass}`;
  badge.textContent = status.label;

  top.appendChild(left);
  top.appendChild(badge);

  const dates = document.createElement('div');
  dates.className = 'med-card-dates';
  const expSpan = document.createElement('span');
  expSpan.textContent = `${c.expLbl}: ${expText}`;
  const scanSpan = document.createElement('span');
  scanSpan.textContent = scannedLabel ? `${c.scannedOn}: ${scannedLabel}` : '';
  dates.appendChild(expSpan);
  dates.appendChild(scanSpan);

  const actions = document.createElement('div');
  actions.className = 'med-card-actions';

  const detailsBtn = document.createElement('button');
  detailsBtn.type = 'button';
  detailsBtn.className = 'btn-secondary card-action-btn';
  detailsBtn.textContent = c.viewDetails;
  detailsBtn.addEventListener('click', () => openDetailView(item.id));

  const rescanBtn = document.createElement('button');
  rescanBtn.type = 'button';
  rescanBtn.className = 'btn-secondary card-action-btn';
  rescanBtn.textContent = c.rescanBtn;
  rescanBtn.addEventListener('click', () => triggerRescan(item));

  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'btn-secondary card-action-btn';
  delBtn.textContent = c.deleteBtn;
  delBtn.addEventListener('click', () => deleteHistoryItem(item.id));

  actions.appendChild(detailsBtn);
  actions.appendChild(rescanBtn);
  actions.appendChild(delBtn);

  card.appendChild(top);
  card.appendChild(dates);
  card.appendChild(actions);

  return card;
}

function triggerRescan(item) {
  try {
    sessionStorage.setItem(RESCAN_STORAGE_KEY, JSON.stringify(item));
  } catch (e) {
    // Ignore sessionStorage errors
  }
  window.location.href = '../dashboard/dashboard.html';
}

function openDetailView(id) {
  const lang = getSafeLanguage();
  const c = HISTORY_COPY[lang] || HISTORY_COPY.English;
  const item = readHistoryItems().find((entry) => entry.id === id);
  if (!item) return;

  selectedScanId = id;
  const status = getExpiryStatus(item, lang);

  hSetText('detailName', hCleanField(item.medicine_name, c.unnamedMed));
  hSetText('detailPurpose', hCleanField(item.basic_purpose, c.notAvailable));
  hSetText('detailMfr', hCleanField(item.manufacturer, c.notAvailable));
  hSetText('detailStr', hCleanField(item.strength, c.notAvailable));
  hSetText('detailMfg', hCleanField(item.manufacturing_date, c.notAvailable));
  hSetText('detailExp', hCleanField(item.expiry_date, c.notAvailable));

  const statusWrap = document.getElementById('detailStatusWrap');
  if (statusWrap) {
    statusWrap.innerHTML = '';
    const pill = document.createElement('span');
    pill.className = `expiry-badge ${status.cssClass}`;
    pill.textContent = status.label;
    statusWrap.appendChild(pill);
  }

  const imgEl = document.getElementById('detailImage');
  if (item.thumbnail && imgEl) {
    imgEl.src = item.thumbnail;
    hSetDisplay('detailImageWrap', 'block');
  } else {
    if (imgEl) imgEl.src = '';
    hSetDisplay('detailImageWrap', 'none');
  }

  const listenBtn = document.getElementById('detailListenBtn');
  if (listenBtn) {
    listenBtn.onclick = () => {
      const name = hCleanField(item.medicine_name, c.unnamedMed);
      const purpose = hCleanField(item.basic_purpose, c.notAvailable);
      if (typeof speakText === 'function') {
        speakText(`${name}. ${purpose}`, lang);
      } else if (typeof window.speechSynthesis !== 'undefined') {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(`${name}. ${purpose}`);
        window.speechSynthesis.speak(utter);
      }
    };
  }

  hSetDisplay('historyControlsCard', 'none');
  hSetDisplay('lastMedicineBanner', 'none');
  hSetDisplay('emptyStateSection', 'none');
  hSetDisplay('historyCardsGrid', 'none');
  hSetDisplay('detailViewSection', 'block');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeDetailView() {
  selectedScanId = null;
  if (typeof window.speechSynthesis !== 'undefined') {
    window.speechSynthesis.cancel();
  }
  hSetDisplay('detailViewSection', 'none');
  renderHistoryPage();
}

function renderHistoryPage() {
  const lang = getSafeLanguage();
  const c = HISTORY_COPY[lang] || HISTORY_COPY.English;
  applyHistoryCopy(lang);

  const allItems = readHistoryItems();

  if (selectedScanId) {
    const stillExists = allItems.some((i) => i.id === selectedScanId);
    if (stillExists) {
      openDetailView(selectedScanId);
      return;
    }
    selectedScanId = null;
  }

  hSetDisplay('detailViewSection', 'none');

  if (!allItems.length) {
    hSetDisplay('lastMedicineBanner', 'none');
    hSetDisplay('historyControlsCard', 'none');
    hSetDisplay('historyCardsGrid', 'none');
    hSetText('emptyTitle', c.emptyTitle);
    hSetText('emptyDesc', c.emptyDesc);
    hSetText('emptyCta', c.emptyCta);
    hSetDisplay('emptyStateSection', 'block');
    return;
  }

  hSetDisplay('historyControlsCard', 'block');
  renderLastMedicineBanner(allItems, lang);

  const visibleItems = filterItems(allItems, lang);
  const grid = document.getElementById('historyCardsGrid');

  if (!visibleItems.length) {
    if (grid) grid.innerHTML = '';
    hSetDisplay('historyCardsGrid', 'none');
    hSetText('emptyTitle', c.noMatchTitle);
    hSetText('emptyDesc', c.noMatchDesc);
    hSetText('emptyCta', c.emptyCta);
    hSetDisplay('emptyStateSection', 'block');
    return;
  }

  hSetDisplay('emptyStateSection', 'none');
  hSetDisplay('historyCardsGrid', 'grid');

  if (grid) {
    grid.innerHTML = '';
    visibleItems.forEach((item) => {
      grid.appendChild(createScanCard(item, lang));
    });
  }
}

function bindHistoryChromeFallback() {
  if (typeof initSharedChrome === 'function') {
    initSharedChrome(() => {
      renderHistoryPage();
    });
    return;
  }

  document.querySelectorAll('.lang-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.lang-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      renderHistoryPage();
    });
  });

  const menuBtn = document.getElementById('mobileMenuBtn');
  const sideNav = document.getElementById('sideNav');
  const backdrop = document.getElementById('mobileBackdrop');
  if (menuBtn && sideNav && backdrop) {
    const toggle = (open) => {
      sideNav.classList.toggle('open', open);
      backdrop.classList.toggle('open', open);
    };
    menuBtn.addEventListener('click', () => toggle(!sideNav.classList.contains('open')));
    backdrop.addEventListener('click', () => toggle(false));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const initialLang = getSafeLanguage();
  bindHistoryChromeFallback();

  document.getElementById('searchInput')?.addEventListener('input', (e) => {
    searchQuery = e.target.value || '';
    renderHistoryPage();
  });

  document.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.dataset.filter || 'all';
      renderHistoryPage();
    });
  });

  document.getElementById('backToHistoryBtn')?.addEventListener('click', closeDetailView);

  applyHistoryCopy(initialLang);
  renderHistoryPage();
});