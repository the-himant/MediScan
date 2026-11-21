// /* =========================================================
//    MediScan AI - DASHBOARD.JS
//    Frontend API integration + image upload + camera
// ========================================================= */

// const DASH_COPY = {
//   English: {
//     heroTitle: 'Understand your medicine.',
//     heroSubtitle: 'Scan your medicine package to understand its name, dates, and basic use in simple words.',
//     uploadHint: 'Upload Photo',
//     uploadFormats: 'JPG, JPEG, PNG, WEBP (up to 10 MB)',
//     chooseFile: 'Choose File',
//     cameraHint: 'Take Photo',
//     cameraSub: 'Use device camera',
//     openCamera: 'Open Camera',
//     capturePhoto: '📸 Capture Photo',
//     closeCamera: '✖ Close Camera',
//     replaceBtn: '🔄 Replace',
//     removeBtn: '🗑️ Remove',
//     identifyBtn: '✨ Identify Medicine',
//     scanningTitle: 'Analyzing medicine...',
//     scanningSub: 'Reading package information...',
//     errorText: 'We could not read this image. Please try again.',
//     invalidFileText: 'Choose a valid JPG, JPEG, PNG, or WEBP image under 10 MB.',
//     cameraFallbackNote: 'Live camera is unavailable. Opening camera picker.',
//     retryBtn: '🔁 Try Again',
//     notSureTitle: '⚠️ Not Sure About This Package',
//     notSureBody: 'The image is blurry or key details are hard to read. Please take a clearer photo or ask a pharmacist.',
//     listenBtn: '🔊 Listen',
//     purposeHeading: 'What This Medicine Is For',
//     lblManufacturer: 'Manufacturer',
//     lblStrength: 'Strength',
//     lblMfgDate: 'Manufacturing Date',
//     lblExpDate: 'Expiry Date',
//     notAvailable: 'Not visible on pack',
//     unnamedMed: 'Unidentified Medicine',
//     aiWarning: '⚠️ AI-extracted information may be inaccurate. Always verify with a pharmacist or doctor.'
//   },

//   Hindi: {
//     heroTitle: 'अपनी दवा को समझें।',
//     heroSubtitle: 'दवा के पैकेट की फ़ोटो लेकर उसका नाम, तारीख़ और सरल उपयोग जानें।',
//     uploadHint: 'फ़ोटो अपलोड करें',
//     uploadFormats: 'JPG, JPEG, PNG, WEBP (10 MB तक)',
//     chooseFile: 'फ़ाइल चुनें',
//     cameraHint: 'कैमरा से फ़ोटो लें',
//     cameraSub: 'डिवाइस कैमरा उपयोग करें',
//     openCamera: 'कैमरा खोलें',
//     capturePhoto: '📸 फ़ोटो लें',
//     closeCamera: '✖ कैमरा बंद करें',
//     replaceBtn: '🔄 बदलें',
//     removeBtn: '🗑️ हटाएं',
//     identifyBtn: '✨ दवा पहचानें',
//     scanningTitle: 'दवा का विश्लेषण हो रहा है...',
//     scanningSub: 'पैकेट की जानकारी पढ़ी जा रही है...',
//     errorText: 'अभी यह फ़ोटो पढ़ी नहीं जा सकी। कृपया पुनः प्रयास करें।',
//     invalidFileText: '10 MB से कम की मान्य JPG, JPEG, PNG या WEBP फ़ोटो चुनें।',
//     cameraFallbackNote: 'लाइव कैमरा उपलब्ध नहीं है। कैमरा विकल्प खोला जा रहा है।',
//     retryBtn: '🔁 पुनः प्रयास करें',
//     notSureTitle: '⚠️ इस पैकेट पर पूरी तरह सुनिश्चित नहीं हैं',
//     notSureBody: 'फ़ोटो धुंधली है। कृपया साफ़ फ़ोटो लें या फार्मासिस्ट से पूछें।',
//     listenBtn: '🔊 सुनें',
//     purposeHeading: 'यह दवा किस काम आती है',
//     lblManufacturer: 'निर्माता',
//     lblStrength: 'क्षमता / मात्रा',
//     lblMfgDate: 'निर्माण तिथि',
//     lblExpDate: 'समाप्ति तिथि',
//     notAvailable: 'पैकेट पर स्पष्ट नहीं',
//     unnamedMed: 'अस्पष्ट दवा नाम',
//     aiWarning: '⚠️ AI द्वारा निकाली गई जानकारी गलत हो सकती है। डॉक्टर या फार्मासिस्ट से पुष्टि करें।'
//   },

//   Punjabi: {
//     heroTitle: 'ਆਪਣੀ ਦਵਾਈ ਨੂੰ ਸਮਝੋ।',
//     heroSubtitle: 'ਦਵਾਈ ਦੇ ਪੈਕਟ ਦੀ ਫ਼ੋਟੋ ਲੈ ਕੇ ਇਸਦਾ ਨਾਮ, ਤਾਰੀਖ਼ ਅਤੇ ਸੌਖੀ ਵਰਤੋਂ ਜਾਣੋ।',
//     uploadHint: 'ਫ਼ੋਟੋ ਅੱਪਲੋਡ ਕਰੋ',
//     uploadFormats: 'JPG, JPEG, PNG, WEBP (10 MB ਤੱਕ)',
//     chooseFile: 'ਫ਼ਾਈਲ ਚੁਣੋ',
//     cameraHint: 'ਕੈਮਰੇ ਨਾਲ ਫ਼ੋਟੋ ਲਓ',
//     cameraSub: 'ਕੈਮਰਾ ਵਰਤੋ',
//     openCamera: 'ਕੈਮਰਾ ਖੋਲ੍ਹੋ',
//     capturePhoto: '📸 ਫ਼ੋਟੋ ਖਿੱਚੋ',
//     closeCamera: '✖ ਕੈਮਰਾ ਬੰਦ ਕਰੋ',
//     replaceBtn: '🔄 ਬਦਲੋ',
//     removeBtn: '🗑️ ਹਟਾਓ',
//     identifyBtn: '✨ ਦਵਾਈ ਪਛਾਣੋ',
//     scanningTitle: 'ਦਵਾਈ ਦੀ ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ...',
//     scanningSub: 'ਪੈਕਟ ਦੀ ਜਾਣਕਾਰੀ ਪੜ੍ਹੀ ਜਾ ਰਹੀ ਹੈ...',
//     errorText: 'ਫ਼ੋਟੋ ਪੜ੍ਹੀ ਨਹੀਂ ਜਾ ਸਕੀ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
//     invalidFileText: '10 MB ਤੋਂ ਘੱਟ ਦੀ JPG, JPEG, PNG ਜਾਂ WEBP ਫ਼ੋਟੋ ਚੁਣੋ।',
//     cameraFallbackNote: 'ਲਾਈਵ ਕੈਮਰਾ ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਕੈਮਰਾ ਵਿਕਲਪ ਖੋਲ੍ਹਿਆ ਜਾ ਰਿਹਾ ਹੈ।',
//     retryBtn: '🔁 ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ',
//     notSureTitle: '⚠️ ਇਸ ਪੈਕਟ ਬਾਰੇ ਪੱਕਾ ਯਕੀਨ ਨਹੀਂ',
//     notSureBody: 'ਫ਼ੋਟੋ ਧੁੰਦਲੀ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਸਾਫ਼ ਫ਼ੋਟੋ ਲਓ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਨਾਲ ਗੱਲ ਕਰੋ।',
//     listenBtn: '🔊 ਸੁਣੋ',
//     purposeHeading: 'ਇਹ ਦਵਾਈ ਕਿਸ ਕੰਮ ਆਉਂਦੀ ਹੈ',
//     lblManufacturer: 'ਨਿਰਮਾਤਾ',
//     lblStrength: 'ਤਾਕਤ / ਮਾਤਰਾ',
//     lblMfgDate: 'ਬਣਾਉਣ ਦੀ ਤਾਰੀਖ਼',
//     lblExpDate: 'ਮਿਆਦ ਖ਼ਤਮ ਹੋਣ ਦੀ ਤਾਰੀਖ਼',
//     notAvailable: 'ਪੈਕਟ ’ਤੇ ਸਪੱਸ਼ਟ ਨਹੀਂ',
//     unnamedMed: 'ਅਸਪੱਸ਼ਟ ਦਵਾਈ ਨਾਮ',
//     aiWarning: '⚠️ AI ਜਾਣਕਾਰੀ ਗਲਤ ਹੋ ਸਕਦੀ ਹੈ। ਡਾਕਟਰ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਤੋਂ ਪੁਸ਼ਟੀ ਕਰੋ।'
//   }
// };



// /* =========================================================
//    CONFIGURATION
// ========================================================= */

// const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

// // Local FastAPI server
// // For deployment, change this to your hosted backend URL.
// const API_BASE_URL = String(
//   window.MediScan_API_BASE_URL || 'http://127.0.0.1:8000'
// ).replace(/\/$/, '');

// const API_URL = `${API_BASE_URL}/api/identify-medicine`;

// const API_TIMEOUT_MS = 120000;

// const DASH_HISTORY_KEY =
//   typeof MediScan_HISTORY_KEY !== 'undefined'
//     ? MediScan_HISTORY_KEY
//     : 'MediScan_history_v1';

// const DASH_LAST_SCAN_KEY =
//   typeof MediScan_LAST_SCAN_KEY !== 'undefined'
//     ? MediScan_LAST_SCAN_KEY
//     : 'MediScan_last_scan_v1';

// const DASH_RESCAN_KEY =
//   typeof MediScan_RESCAN_KEY !== 'undefined'
//     ? MediScan_RESCAN_KEY
//     : 'MediScan_rescan_item_v1';


// /* =========================================================
//    GLOBAL STATE
// ========================================================= */

// let currentImageDataUrl = null;
// let currentScanData = null;
// let cameraStream = null;
// let lastErrorMessage = null;
// let isScanning = false;


// /* =========================================================
//    LANGUAGE
// ========================================================= */

// function getActiveLanguage() {
//   if (typeof getCurrentLanguage === 'function') {
//     return getCurrentLanguage();
//   }

//   return document.querySelector('.lang-pill.active')
//     ?.dataset?.lang || 'English';
// }


// /* =========================================================
//    API CONNECTION
// ========================================================= */

// window.readMedicinesImage = async function (dataUrl) {

//   if (!dataUrl || !dataUrl.startsWith('data:image/')) {
//     throw new Error('Please upload a valid medicine image.');
//   }

//   const controller = new AbortController();

//   const timeoutId = window.setTimeout(() => {
//     controller.abort();
//   }, API_TIMEOUT_MS);

//   try {

//     console.log('Sending image to API:', API_URL);

//     const response = await fetch(API_URL, {
//       method: 'POST',

//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },

//       body: JSON.stringify({
//         image: dataUrl,
//         language: getActiveLanguage()
//       }),

//       signal: controller.signal
//     });

//     const responseText = await response.text();

//     let result;

//     try {
//       result = responseText ? JSON.parse(responseText) : null;
//     } catch {
//       throw new Error(
//         `Invalid API response. HTTP ${response.status}`
//       );
//     }

//     if (!response.ok) {

//       const detail =
//         result?.detail ||
//         result?.message ||
//         `Server error: ${response.status}`;

//       throw new Error(
//         typeof detail === 'string'
//           ? detail
//           : JSON.stringify(detail)
//       );
//     }

//     if (!result || typeof result !== 'object') {
//       throw new Error('The server returned an empty response.');
//     }

//     // Supports direct JSON or { data: {...} }
//     const data = result.data || result;

//     console.log('API response:', data);

//     return {
//       medicine_name: data.medicine_name ?? null,
//       manufacturer: data.manufacturer ?? null,
//       strength: data.strength ?? null,
//       basic_purpose: data.basic_purpose ?? null,
//       manufacturing_date: data.manufacturing_date ?? null,
//       expiry_date: data.expiry_date ?? null,
//       image_quality: data.image_quality ?? 'unknown',
//       accuracy: Number(data.accuracy) || 0,
//       printed_text: Array.isArray(data.printed_text)
//         ? data.printed_text
//         : [],
//       uncertain_text: Array.isArray(data.uncertain_text)
//         ? data.uncertain_text
//         : []
//     };

//   } catch (error) {

//     console.error('API request failed:', error);

//     if (error.name === 'AbortError') {
//       throw new Error(
//         'The request timed out. Please try again.'
//       );
//     }

//     if (error instanceof TypeError) {
//       throw new Error(
//         `Cannot connect to the backend at ${API_URL}. Make sure FastAPI is running.`
//       );
//     }

//     throw error;

//   } finally {

//     window.clearTimeout(timeoutId);

//   }
// };


// /* =========================================================
//    DOM HELPERS
// ========================================================= */

// function setDisplay(id, value) {

//   const element = document.getElementById(id);

//   if (element) {
//     element.style.display = value;
//   }
// }


// function setText(id, value) {

//   const element = document.getElementById(id);

//   if (element) {
//     element.textContent = value;
//   }
// }


// function cleanField(value, fallback) {

//   if (value === null || value === undefined) {
//     return fallback;
//   }

//   const text = String(value).trim();

//   if (
//     !text ||
//     ['none', 'null', 'n/a', 'na', 'unknown']
//       .includes(text.toLowerCase())
//   ) {
//     return fallback;
//   }

//   return text;
// }


// /* =========================================================
//    ERROR HANDLING
// ========================================================= */

// function showErrorMessage(message) {

//   const lang = getActiveLanguage();
//   const copy = DASH_COPY[lang] || DASH_COPY.English;

//   lastErrorMessage = message || copy.errorText;

//   setText('errorText', lastErrorMessage);

//   setDisplay('errorSection', 'block');
// }


// /* =========================================================
//    HISTORY
// ========================================================= */

// function syncLocalHistoryBadge() {

//   try {

//     const raw = localStorage.getItem(DASH_HISTORY_KEY);
//     const list = raw ? JSON.parse(raw) : [];

//     const badge = document.getElementById('navHistoryCount');

//     if (badge && Array.isArray(list)) {
//       badge.textContent = String(list.length);
//     }

//   } catch (error) {
//     console.warn('History badge error:', error);
//   }
// }


// function saveScanEntry(entry) {

//   try {

//     if (typeof appendScanToHistory === 'function') {
//       appendScanToHistory(entry);
//       return;
//     }

//     const raw = localStorage.getItem(DASH_HISTORY_KEY);
//     const history = raw ? JSON.parse(raw) : [];

//     const updatedHistory = [
//       entry,
//       ...(Array.isArray(history) ? history : [])
//     ];

//     localStorage.setItem(
//       DASH_HISTORY_KEY,
//       JSON.stringify(updatedHistory)
//     );

//     localStorage.setItem(
//       DASH_LAST_SCAN_KEY,
//       JSON.stringify(entry)
//     );

//     const badge = document.getElementById('navHistoryCount');

//     if (badge) {
//       badge.textContent = String(updatedHistory.length);
//     }

//   } catch (error) {
//     console.warn('Could not save scan history:', error);
//   }
// }


// /* =========================================================
//    LANGUAGE CONTENT
// ========================================================= */

// function applyDashboardCopy(lang) {

//   const copy = DASH_COPY[lang] || DASH_COPY.English;

//   const elements = {
//     heroTitle: copy.heroTitle,
//     heroSubtitle: copy.heroSubtitle,
//     uploadHint: copy.uploadHint,
//     uploadFormats: copy.uploadFormats,
//     chooseFileBtn: copy.chooseFile,
//     cameraHint: copy.cameraHint,
//     cameraSub: copy.cameraSub,
//     openCameraBtn: copy.openCamera,
//     capturePhotoBtn: copy.capturePhoto,
//     closeCameraBtn: copy.closeCamera,
//     replaceBtn: copy.replaceBtn,
//     removeBtn: copy.removeBtn,
//     identifyBtn: copy.identifyBtn,
//     scanningTitle: copy.scanningTitle,
//     scanningSub: copy.scanningSub,
//     errorText: lastErrorMessage || copy.errorText,
//     retryBtn: copy.retryBtn,
//     notSureTitle: copy.notSureTitle,
//     notSureBody: copy.notSureBody,
//     listenBtn: copy.listenBtn,
//     purposeHeading: copy.purposeHeading,
//     lblManufacturer: copy.lblManufacturer,
//     lblStrength: copy.lblStrength,
//     lblMfgDate: copy.lblMfgDate,
//     lblExpDate: copy.lblExpDate,
//     aiWarningBox: copy.aiWarning
//   };

//   Object.entries(elements).forEach(([id, value]) => {
//     setText(id, value);
//   });

//   if (currentScanData) {
//     renderResultView(currentScanData, lang);
//   }
// }


// /* =========================================================
//    CAMERA
// ========================================================= */

// function stopCameraStream() {

//   if (cameraStream) {

//     cameraStream.getTracks().forEach(track => {
//       track.stop();
//     });

//     cameraStream = null;
//   }

//   const video = document.getElementById('cameraVideo');

//   if (video) {
//     video.srcObject = null;
//   }

//   setDisplay('cameraStreamBox', 'none');
// }


// function triggerNativeCameraFallback() {

//   const lang = getActiveLanguage();
//   const copy = DASH_COPY[lang] || DASH_COPY.English;

//   const cameraInput = document.getElementById('cameraInput');

//   if (cameraInput) {

//     showErrorMessage(copy.cameraFallbackNote);

//     cameraInput.click();

//   } else {

//     showErrorMessage(copy.errorText);

//   }
// }


// async function startCameraCapture() {

//   const video = document.getElementById('cameraVideo');

//   lastErrorMessage = null;

//   setDisplay('errorSection', 'none');

//   const secure =
//     window.isSecureContext ||
//     location.hostname === 'localhost' ||
//     location.hostname === '127.0.0.1';

//   if (
//     !secure ||
//     !navigator.mediaDevices ||
//     !navigator.mediaDevices.getUserMedia ||
//     !video
//   ) {
//     triggerNativeCameraFallback();
//     return;
//   }

//   try {

//     stopCameraStream();

//     cameraStream = await navigator.mediaDevices.getUserMedia({

//       video: {
//         facingMode: { ideal: 'environment' },
//         width: { ideal: 1280 },
//         height: { ideal: 720 }
//       },

//       audio: false

//     });

//     video.srcObject = cameraStream;

//     await video.play();

//     setDisplay('cameraStreamBox', 'block');

//   } catch (error) {

//     console.error('Camera error:', error);

//     triggerNativeCameraFallback();

//   }
// }


// function captureFrameFromVideo() {

//   const video = document.getElementById('cameraVideo');
//   const canvas = document.getElementById('cameraCanvas');

//   if (
//     !video ||
//     !canvas ||
//     !video.videoWidth ||
//     !video.videoHeight
//   ) {
//     showErrorMessage('Camera is not ready. Please try again.');
//     return;
//   }

//   const maxDimension = 1280;

//   let width = video.videoWidth;
//   let height = video.videoHeight;

//   if (width > maxDimension || height > maxDimension) {

//     const scale = Math.min(
//       maxDimension / width,
//       maxDimension / height
//     );

//     width = Math.round(width * scale);
//     height = Math.round(height * scale);
//   }

//   canvas.width = width;
//   canvas.height = height;

//   const context = canvas.getContext('2d');

//   if (!context) {
//     showErrorMessage('Could not capture the image.');
//     return;
//   }

//   context.drawImage(video, 0, 0, width, height);

//   const imageData = canvas.toDataURL('image/jpeg', 0.88);

//   stopCameraStream();

//   setSelectedImage(imageData);
// }


// /* =========================================================
//    IMAGE OPTIMIZATION
// ========================================================= */

// function normalizeUploadedDataUrl(dataUrl) {

//   return new Promise(resolve => {

//     const image = new Image();

//     image.onload = () => {

//       const maxDimension = 1280;

//       let width = image.naturalWidth || image.width;
//       let height = image.naturalHeight || image.height;

//       if (!width || !height) {
//         resolve(dataUrl);
//         return;
//       }

//       if (width > maxDimension || height > maxDimension) {

//         const scale = Math.min(
//           maxDimension / width,
//           maxDimension / height
//         );

//         width = Math.round(width * scale);
//         height = Math.round(height * scale);

//         const canvas = document.createElement('canvas');

//         canvas.width = width;
//         canvas.height = height;

//         const context = canvas.getContext('2d');

//         if (!context) {
//           resolve(dataUrl);
//           return;
//         }

//         context.drawImage(
//           image,
//           0,
//           0,
//           width,
//           height
//         );

//         resolve(canvas.toDataURL('image/jpeg', 0.88));

//       } else {

//         resolve(dataUrl);

//       }
//     };

//     image.onerror = () => resolve(dataUrl);

//     image.src = dataUrl;
//   });
// }


// /* =========================================================
//    SELECTED IMAGE
// ========================================================= */

// function setSelectedImage(dataUrl) {

//   currentImageDataUrl = dataUrl;
//   currentScanData = null;
//   lastErrorMessage = null;

//   const image = document.getElementById('previewImage');

//   setDisplay('resultSection', 'none');
//   setDisplay('notSureSection', 'none');
//   setDisplay('errorSection', 'none');

//   if (dataUrl) {

//     if (image) {
//       image.src = dataUrl;
//     }

//     setDisplay('previewPanel', 'grid');

//   } else {

//     if (image) {
//       image.src = '';
//     }

//     setDisplay('previewPanel', 'none');

//   }
// }


// /* =========================================================
//    FILE VALIDATION AND UPLOAD
// ========================================================= */

// function handleFileSelection(file) {

//   if (!file) return;

//   const lang = getActiveLanguage();
//   const copy = DASH_COPY[lang] || DASH_COPY.English;

//   const allowedTypes = [
//     'image/jpeg',
//     'image/jpg',
//     'image/pjpeg',
//     'image/png',
//     'image/webp'
//   ];

//   const allowedExtensions = [
//     '.jpg',
//     '.jpeg',
//     '.png',
//     '.webp'
//   ];

//   const fileName = (file.name || '').toLowerCase();

//   const validMime = allowedTypes.includes(
//     (file.type || '').toLowerCase()
//   );

//   const validExtension = allowedExtensions.some(extension =>
//     fileName.endsWith(extension)
//   );

//   if (
//     (!validMime && !validExtension) ||
//     file.size > MAX_UPLOAD_BYTES
//   ) {

//     showErrorMessage(copy.invalidFileText);

//     return;
//   }

//   const reader = new FileReader();

//   reader.onload = async event => {

//     try {

//       stopCameraStream();

//       const optimizedImage = await normalizeUploadedDataUrl(
//         event.target.result
//       );

//       setSelectedImage(optimizedImage);

//     } catch (error) {

//       console.error('Image processing error:', error);

//       showErrorMessage(copy.errorText);

//     }
//   };

//   reader.onerror = () => {
//     showErrorMessage(copy.errorText);
//   };

//   reader.readAsDataURL(file);
// }


// /* =========================================================
//    IDENTIFY MEDICINE
// ========================================================= */

// async function identifyMedicineFromImage(dataUrl) {

//   if (typeof window.readMedicinesImage !== 'function') {

//     throw new Error(
//       'API function is not available. Check dashboard.js.'
//     );
//   }

//   return await window.readMedicinesImage(dataUrl);
// }


// /* =========================================================
//    DISPLAY RESULT
// ========================================================= */

// function renderResultView(data, lang) {

//   const copy = DASH_COPY[lang] || DASH_COPY.English;

//   data = data && typeof data === 'object' ? data : {};

//   const quality = String(
//     data.image_quality || ''
//   ).toLowerCase();

//   const accuracy = Number(data.accuracy) || 0;

//   const hasMedicineName = Boolean(
//     cleanField(data.medicine_name, '')
//   );

//   if (
//     !hasMedicineName ||
//     (
//       ['blurry', 'poor', 'unreadable'].includes(quality) &&
//       accuracy < 40
//     )
//   ) {

//     setDisplay('resultSection', 'none');
//     setDisplay('notSureSection', 'block');

//     return;
//   }

//   setDisplay('notSureSection', 'none');
//   setDisplay('resultSection', 'block');

//   setText(
//     'resMedicineName',
//     cleanField(data.medicine_name, copy.unnamedMed)
//   );

//   setText(
//     'resPurpose',
//     cleanField(data.basic_purpose, copy.notAvailable)
//   );

//   setText(
//     'resManufacturer',
//     cleanField(data.manufacturer, copy.notAvailable)
//   );

//   setText(
//     'resStrength',
//     cleanField(data.strength, copy.notAvailable)
//   );

//   setText(
//     'resMfgDate',
//     cleanField(data.manufacturing_date, copy.notAvailable)
//   );

//   setText(
//     'resExpDate',
//     cleanField(data.expiry_date, copy.notAvailable)
//   );
// }


// /* =========================================================
//    MAIN SCAN FUNCTION
// ========================================================= */

// async function runScanFlow() {

//   if (isScanning) return;

//   if (!currentImageDataUrl) {

//     const previewImage = document.getElementById('previewImage');

//     const imageSource = previewImage?.getAttribute('src');

//     if (imageSource?.startsWith('data:image/')) {

//       currentImageDataUrl = imageSource;

//     } else {

//       showErrorMessage(
//         'Please upload or capture a medicine photo first.'
//       );

//       return;
//     }
//   }

//   const lang = getActiveLanguage();
//   const copy = DASH_COPY[lang] || DASH_COPY.English;

//   const identifyButton = document.getElementById('identifyBtn');
//   const retryButton = document.getElementById('retryBtn');

//   isScanning = true;

//   if (identifyButton) identifyButton.disabled = true;
//   if (retryButton) retryButton.disabled = true;

//   lastErrorMessage = null;

//   setDisplay('errorSection', 'none');
//   setDisplay('resultSection', 'none');
//   setDisplay('notSureSection', 'none');
//   setDisplay('scanningSection', 'block');

//   try {

//     console.log('Starting medicine identification...');

//     const data = await identifyMedicineFromImage(
//       currentImageDataUrl
//     );

//     console.log('Medicine identified:', data);

//     setDisplay('scanningSection', 'none');

//     currentScanData = data;

//     renderResultView(data, lang);

//     // Save scan history
//     saveScanEntry({

//       id:
//         'scan_' +
//         Date.now() +
//         '_' +
//         Math.random().toString(36).slice(2, 6),

//       scanned_at: new Date().toISOString(),

//       medicine_name: data.medicine_name || null,
//       manufacturer: data.manufacturer || null,
//       strength: data.strength || null,
//       basic_purpose: data.basic_purpose || null,

//       manufacturing_date:
//         data.manufacturing_date || null,

//       expiry_date:
//         data.expiry_date || null,

//       image_quality:
//         data.image_quality || 'unknown',

//       accuracy:
//         data.accuracy ?? 0,

//       thumbnail:
//         currentImageDataUrl

//     });

//   } catch (error) {

//     console.error('Medicine identification failed:', error);

//     setDisplay('scanningSection', 'none');

//     showErrorMessage(
//       error?.message || copy.errorText
//     );

//   } finally {

//     isScanning = false;

//     if (identifyButton) identifyButton.disabled = false;
//     if (retryButton) retryButton.disabled = false;

//   }
// }


// /* =========================================================
//    LANGUAGE FALLBACK
// ========================================================= */

// function bindLanguageFallback() {

//   if (typeof initSharedChrome === 'function') {

//     initSharedChrome(updatedLang => {
//       applyDashboardCopy(updatedLang);
//     });

//     return;
//   }

//   syncLocalHistoryBadge();

//   document.querySelectorAll('.lang-pill').forEach(pill => {

//     pill.addEventListener('click', () => {

//       document.querySelectorAll('.lang-pill').forEach(item => {
//         item.classList.remove('active');
//       });

//       pill.classList.add('active');

//       applyDashboardCopy(
//         pill.dataset.lang || 'English'
//       );

//     });

//   });

//   const menuButton = document.getElementById('mobileMenuBtn');
//   const sideNav = document.getElementById('sideNav');
//   const backdrop = document.getElementById('mobileBackdrop');

//   if (menuButton && sideNav && backdrop) {

//     const toggleMenu = open => {

//       sideNav.classList.toggle('open', open);
//       backdrop.classList.toggle('open', open);

//     };

//     menuButton.addEventListener('click', () => {

//       toggleMenu(!sideNav.classList.contains('open'));

//     });

//     backdrop.addEventListener('click', () => {
//       toggleMenu(false);
//     });

//   }
// }


// /* =========================================================
//    DASHBOARD INITIALIZATION
// ========================================================= */

// function initializeDashboard() {

//   console.log('MediScan dashboard initialized.');

//   const initialLanguage = getActiveLanguage();

//   bindLanguageFallback();

//   applyDashboardCopy(initialLanguage);

//   const fileInput = document.getElementById('fileInput');
//   const cameraInput = document.getElementById('cameraInput');
//   const dropZone = document.getElementById('dropZone');

//   const identifyButton = document.getElementById('identifyBtn');

//   /* Choose file */

//   document.getElementById('chooseFileBtn')
//     ?.addEventListener('click', () => {

//       fileInput?.click();

//     });


//   /* Open camera */

//   document.getElementById('openCameraBtn')
//     ?.addEventListener('click', startCameraCapture);


//   /* Capture camera image */

//   document.getElementById('capturePhotoBtn')
//     ?.addEventListener('click', captureFrameFromVideo);


//   /* Close camera */

//   document.getElementById('closeCameraBtn')
//     ?.addEventListener('click', stopCameraStream);


//   /* File input */

//   fileInput?.addEventListener('change', event => {

//     const file = event.target.files?.[0];

//     if (file) {
//       handleFileSelection(file);
//     }

//     event.target.value = '';

//   });


//   /* Camera input */

//   cameraInput?.addEventListener('change', event => {

//     const file = event.target.files?.[0];

//     if (file) {
//       handleFileSelection(file);
//     }

//     event.target.value = '';

//   });


//   /* Drag over */

//   dropZone?.addEventListener('dragover', event => {

//     event.preventDefault();

//     dropZone.classList.add('dragover');

//   });


//   /* Drag leave */

//   dropZone?.addEventListener('dragleave', event => {

//     if (!dropZone.contains(event.relatedTarget)) {

//       dropZone.classList.remove('dragover');

//     }

//   });


//   /* Drop image */

//   dropZone?.addEventListener('drop', event => {

//     event.preventDefault();

//     dropZone.classList.remove('dragover');

//     const file = event.dataTransfer?.files?.[0];

//     if (file) {
//       handleFileSelection(file);
//     }

//   });


//   /* Replace image */

//   document.getElementById('replaceBtn')
//     ?.addEventListener('click', () => {

//       if (fileInput) fileInput.value = '';
//       if (cameraInput) cameraInput.value = '';

//       fileInput?.click();

//     });


//   /* Remove image */

//   document.getElementById('removeBtn')
//     ?.addEventListener('click', () => {

//       if (fileInput) fileInput.value = '';
//       if (cameraInput) cameraInput.value = '';

//       stopCameraStream();

//       currentScanData = null;

//       lastErrorMessage = null;

//       setSelectedImage(null);

//     });


//   /* Identify medicine */

//   identifyButton?.addEventListener('click', runScanFlow);


//   /* Retry scan */

//   document.getElementById('retryBtn')
//     ?.addEventListener('click', runScanFlow);


//   /* Text to speech */

//   document.getElementById('listenBtn')
//     ?.addEventListener('click', () => {

//       if (
//         !currentScanData ||
//         typeof speakText !== 'function'
//       ) {
//         return;
//       }

//       const lang = getActiveLanguage();

//       const copy = DASH_COPY[lang] || DASH_COPY.English;

//       const name = cleanField(
//         currentScanData.medicine_name,
//         copy.unnamedMed
//       );

//       const purpose = cleanField(
//         currentScanData.basic_purpose,
//         copy.notAvailable
//       );

//       speakText(`${name}. ${purpose}`, lang);

//     });


//   /* Stop camera when leaving page */

//   window.addEventListener('beforeunload', stopCameraStream);


//   /* Restore previous scan */

//   try {

//     const pendingRescanRaw =
//       sessionStorage.getItem(DASH_RESCAN_KEY);

//     if (pendingRescanRaw) {

//       sessionStorage.removeItem(DASH_RESCAN_KEY);

//       const item = JSON.parse(pendingRescanRaw);

//       if (
//         item &&
//         typeof item.thumbnail === 'string' &&
//         item.thumbnail.startsWith('data:image/')
//       ) {

//         setSelectedImage(item.thumbnail);

//       }

//     }

//   } catch (error) {

//     console.warn('Could not restore previous scan:', error);

//   }

// }


// /* =========================================================
//    START DASHBOARD
// ========================================================= */

// if (document.readyState === 'loading') {

//   document.addEventListener(
//     'DOMContentLoaded',
//     initializeDashboard,
//     { once: true }
//   );

// } else {

//   initializeDashboard();

// }


// /* =========================================================
//    Save history
// ========================================================= */

// function saveMedicineToHistory(medicine) {
//   let history = JSON.parse(
//     localStorage.getItem("medicineHistory") || "[]"
//   );

//   const record = {
//     ...medicine,
//     scannedAt: new Date().toLocaleString()
//   };

//   history.unshift(record);

//   localStorage.setItem(
//     "medicineHistory",
//     JSON.stringify(history)
//   );
// }

// /* =========================================================
//    MediScan AI - LOCAL SCAN HISTORY
//    ========================================================= */


// // Get all saved scans
// function getStoredScanHistory() {
//   try {
//     const history = JSON.parse(
//       localStorage.getItem(DASH_HISTORY_KEY) || '[]'
//     );

//     return Array.isArray(history) ? history : [];
//   } catch (error) {
//     console.error('History loading error:', error);
//     return [];
//   }
// }

// // Update History badge
// function syncLocalHistoryBadge() {
//   const badge = document.getElementById('navHistoryCount');

//   if (badge) {
//     badge.textContent = getStoredScanHistory().length;
//   }
// }

// // Save a new medicine scan
// function saveScanEntry(entry) {
//   try {
//     const history = getStoredScanHistory();

//     const updatedHistory = [
//       entry,
//       ...history.filter(item => item.id !== entry.id)
//     ].slice(0, 100);

//     localStorage.setItem(
//       DASH_HISTORY_KEY,
//       JSON.stringify(updatedHistory)
//     );

//     localStorage.setItem(
//       DASH_LAST_SCAN_KEY,
//       JSON.stringify(entry)
//     );

//     syncLocalHistoryBadge();

//     window.dispatchEvent(
//       new CustomEvent('MediScan:history-updated', {
//         detail: {
//           entry,
//           history: updatedHistory
//         }
//       })
//     );

//     return true;

//   } catch (error) {
//     console.error('Could not save scan:', error);
//     return false;
//   }
// }

// // Get saved history from another JS file
// window.getMedicineScanHistory = getStoredScanHistory;

// // Get the latest scan
// window.getLastMedicineScan = function () {
//   try {
//     return JSON.parse(
//       localStorage.getItem(DASH_LAST_SCAN_KEY) || 'null'
//     );
//   } catch (error) {
//     console.error('Could not get last scan:', error);
//     return null;
//   }
// };

// // Delete an individual scan
// window.deleteMedicineScanFromHistory = function (scanId) {
//   try {
//     const updatedHistory = getStoredScanHistory().filter(
//       item => item.id !== scanId
//     );

//     localStorage.setItem(
//       DASH_HISTORY_KEY,
//       JSON.stringify(updatedHistory)
//     );

//     const lastScan = window.getLastMedicineScan();

//     if (lastScan?.id === scanId) {
//       localStorage.setItem(
//         DASH_LAST_SCAN_KEY,
//         JSON.stringify(updatedHistory[0] || null)
//       );
//     }

//     syncLocalHistoryBadge();

//     window.dispatchEvent(
//       new CustomEvent('MediScan:history-updated', {
//         detail: { history: updatedHistory }
//       })
//     );

//     return true;

//   } catch (error) {
//     console.error('Delete history error:', error);
//     return false;
//   }
// };

// // Clear all history
// window.clearMedicineScanHistory = function () {
//   try {
//     localStorage.removeItem(DASH_HISTORY_KEY);
//     localStorage.removeItem(DASH_LAST_SCAN_KEY);

//     syncLocalHistoryBadge();

//     window.dispatchEvent(
//       new CustomEvent('MediScan:history-updated', {
//         detail: { history: [] }
//       })
//     );

//     return true;

//   } catch (error) {
//     console.error('Clear history error:', error);
//     return false;
//   }
// };

// // Keep badge updated across browser tabs
// window.addEventListener('storage', function (event) {
//   if (event.key === DASH_HISTORY_KEY) {
//     syncLocalHistoryBadge();
//   }
// });

// // Initial badge update
// document.addEventListener('DOMContentLoaded', syncLocalHistoryBadge);



/* =========================================================
   MediScan AI - DASHBOARD.JS
   Frontend API integration + image upload + camera
========================================================= */

const DASH_COPY = {
  English: {
    heroTitle: 'Understand your medicine.',
    heroSubtitle: 'Scan your medicine package to understand its name, dates, and basic use in simple words.',
    uploadHint: 'Upload Photo',
    uploadFormats: 'JPG, JPEG, PNG, WEBP (up to 10 MB)',
    chooseFile: 'Choose File',
    cameraHint: 'Take Photo',
    cameraSub: 'Use device camera',
    openCamera: 'Open Camera',
    capturePhoto: '📸 Capture Photo',
    closeCamera: '✖ Close Camera',
    replaceBtn: '🔄 Replace',
    removeBtn: '🗑️ Remove',
    identifyBtn: '✨ Identify Medicine',
    scanningTitle: 'Analyzing medicine...',
    scanningSub: 'Reading package information...',
    errorText: 'We could not read this image. Please try again.',
    invalidFileText: 'Choose a valid JPG, JPEG, PNG, or WEBP image under 10 MB.',
    cameraFallbackNote: 'Live camera is unavailable. Opening camera picker.',
    retryBtn: '🔁 Try Again',
    notSureTitle: '⚠️ Not Sure About This Package',
    notSureBody: 'The image is blurry or key details are hard to read. Please take a clearer photo or ask a pharmacist.',
    listenBtn: '🔊 Listen',
    purposeHeading: 'What This Medicine Is For',
    lblManufacturer: 'Manufacturer',
    lblStrength: 'Strength',
    lblMfgDate: 'Manufacturing Date',
    lblExpDate: 'Expiry Date',
    notAvailable: 'Not visible on pack',
    unnamedMed: 'Unidentified Medicine',
    aiWarning: '⚠️ AI-extracted information may be inaccurate. Always verify with a pharmacist or doctor.'
  },
  Hindi: {
    heroTitle: 'अपनी दवा को समझें।',
    heroSubtitle: 'दवा के पैकेट की फ़ोटो लेकर उसका नाम, तारीख़ और सरल उपयोग जानें।',
    uploadHint: 'फ़ोटो अपलोड करें',
    uploadFormats: 'JPG, JPEG, PNG, WEBP (10 MB तक)',
    chooseFile: 'फ़ाइल चुनें',
    cameraHint: 'कैमरा से फ़ोटो लें',
    cameraSub: 'डिवाइस कैमरा उपयोग करें',
    openCamera: 'कैमरा खोलें',
    capturePhoto: '📸 फ़ोटो लें',
    closeCamera: '✖ कैमरा बंद करें',
    replaceBtn: '🔄 बदलें',
    removeBtn: '🗑️ हटाएं',
    identifyBtn: '✨ दवा पहचानें',
    scanningTitle: 'दवा का विश्लेषण हो रहा है...',
    scanningSub: 'पैकेट की जानकारी पढ़ी जा रही है...',
    errorText: 'अभी यह फ़ोटो पढ़ी नहीं जा सकी। कृपया पुनः प्रयास करें।',
    invalidFileText: '10 MB से कम की मान्य JPG, JPEG, PNG या WEBP फ़ोटो चुनें।',
    cameraFallbackNote: 'लाइव कैमरा उपलब्ध नहीं है। कैमरा विकल्प खोला जा रहा है।',
    retryBtn: '🔁 पुनः प्रयास करें',
    notSureTitle: '⚠️ इस पैकेट पर पूरी तरह सुनिश्चित नहीं हैं',
    notSureBody: 'फ़ोटो धुंधली है। कृपया साफ़ फ़ोटो लें या फार्मासिस्ट से पूछें।',
    listenBtn: '🔊 सुनें',
    purposeHeading: 'यह दवा किस काम आती है',
    lblManufacturer: 'निर्माता',
    lblStrength: 'क्षमता / मात्रा',
    lblMfgDate: 'निर्माण तिथि',
    lblExpDate: 'समाप्ति तिथि',
    notAvailable: 'पैकेट पर स्पष्ट नहीं',
    unnamedMed: 'अस्पष्ट दवा नाम',
    aiWarning: '⚠️ AI द्वारा निकाली गई जानकारी गलत हो सकती है। डॉक्टर या फार्मासिस्ट से पुष्टि करें।'
  },
  Punjabi: {
    heroTitle: 'ਆਪਣੀ ਦਵਾਈ ਨੂੰ ਸਮਝੋ।',
    heroSubtitle: 'ਦਵਾਈ ਦੇ ਪੈਕਟ ਦੀ ਫ਼ੋਟੋ ਲੈ ਕੇ ਇਸਦਾ ਨਾਮ, ਤਾਰੀਖ਼ ਅਤੇ ਸੌਖੀ ਵਰਤੋਂ ਜਾਣੋ।',
    uploadHint: 'ਫ਼ੋਟੋ ਅੱਪਲੋਡ ਕਰੋ',
    uploadFormats: 'JPG, JPEG, PNG, WEBP (10 MB ਤੱਕ)',
    chooseFile: 'ਫ਼ਾਈਲ ਚੁਣੋ',
    cameraHint: 'ਕੈਮਰੇ ਨਾਲ ਫ਼ੋਟੋ ਲਓ',
    cameraSub: 'ਕੈਮਰਾ ਵਰਤੋ',
    openCamera: 'ਕੈਮਰਾ ਖੋਲ੍ਹੋ',
    capturePhoto: '📸 ਫ਼ੋਟੋ ਖਿੱਚੋ',
    closeCamera: '✖ ਕੈਮਰਾ ਬੰਦ ਕਰੋ',
    replaceBtn: '🔄 ਬਦਲੋ',
    removeBtn: '🗑️ ਹਟਾਓ',
    identifyBtn: '✨ ਦਵਾਈ ਪਛਾਣੋ',
    scanningTitle: 'ਦਵਾਈ ਦੀ ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ...',
    scanningSub: 'ਪੈਕਟ ਦੀ ਜਾਣਕਾਰੀ ਪੜ੍ਹੀ ਜਾ ਰਹੀ ਹੈ...',
    errorText: 'ਫ਼ੋਟੋ ਪੜ੍ਹੀ ਨਹੀਂ ਜਾ ਸਕੀ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
    invalidFileText: '10 MB ਤੋਂ ਘੱਟ ਦੀ JPG, JPEG, PNG ਜਾਂ WEBP ਫ਼ੋਟੋ ਚੁਣੋ।',
    cameraFallbackNote: 'ਲਾਈਵ ਕੈਮਰਾ ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਕੈਮਰਾ ਵਿਕਲਪ ਖੋਲ੍ਹਿਆ ਜਾ ਰਿਹਾ ਹੈ।',
    retryBtn: '🔁 ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ',
    notSureTitle: '⚠️ ਇਸ ਪੈਕਟ ਬਾਰੇ ਪੱਕਾ ਯਕੀਨ ਨਹੀਂ',
    notSureBody: 'ਫ਼ੋਟੋ ਧੁੰਦਲੀ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਸਾਫ਼ ਫ਼ੋਟੋ ਲਓ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਨਾਲ ਗੱਲ ਕਰੋ।',
    listenBtn: '🔊 ਸੁਣੋ',
    purposeHeading: 'ਇਹ ਦਵਾਈ ਕਿਸ ਕੰਮ ਆਉਂਦੀ ਹੈ',
    lblManufacturer: 'ਨਿਰਮਾਤਾ',
    lblStrength: 'ਤਾਕਤ / ਮਾਤਰਾ',
    lblMfgDate: 'ਬਣਾਉਣ ਦੀ ਤਾਰੀਖ਼',
    lblExpDate: 'ਮਿਆਦ ਖ਼ਤਮ ਹੋਣ ਦੀ ਤਾਰੀਖ਼',
    notAvailable: 'ਪੈਕਟ ’ਤੇ ਸਪੱਸ਼ਟ ਨਹੀਂ',
    unnamedMed: 'ਅਸਪੱਸ਼ਟ ਦਵਾਈ ਨਾਮ',
    aiWarning: '⚠️ AI ਜਾਣਕਾਰੀ ਗਲਤ ਹੋ ਸਕਦੀ ਹੈ। ਡਾਕਟਰ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਤੋਂ ਪੁਸ਼ਟੀ ਕਰੋ।'
  }
};

/* CONFIGURATION */

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

const API_BASE_URL = String(
  window.MediScan_API_BASE_URL || 'http://127.0.0.1:8000'
).replace(/\/$/, '');

const API_URL = `${API_BASE_URL}/api/identify-medicine`;
const API_TIMEOUT_MS = 120000;

const DASH_HISTORY_KEY =
  typeof MediScan_HISTORY_KEY !== 'undefined'
    ? MediScan_HISTORY_KEY
    : 'MediScan_history_v1';

const DASH_LAST_SCAN_KEY =
  typeof MediScan_LAST_SCAN_KEY !== 'undefined'
    ? MediScan_LAST_SCAN_KEY
    : 'MediScan_last_scan_v1';

const DASH_RESCAN_KEY =
  typeof MediScan_RESCAN_KEY !== 'undefined'
    ? MediScan_RESCAN_KEY
    : 'MediScan_rescan_item_v1';

/* GLOBAL STATE */

let currentImageDataUrl = null;
let currentScanData = null;
let cameraStream = null;
let lastErrorMessage = null;
let isScanning = false;

/* LANGUAGE */

function getActiveLanguage() {
  if (typeof getCurrentLanguage === 'function') {
    return getCurrentLanguage();
  }

  return document.querySelector('.lang-pill.active')
    ?.dataset?.lang || 'English';
}

/* API CONNECTION */

window.readMedicinesImage = async function (dataUrl) {
  if (!dataUrl || !dataUrl.startsWith('data:image/')) {
    throw new Error('Please upload a valid medicine image.');
  }

  const controller = new AbortController();

  const timeoutId = window.setTimeout(() => {
    controller.abort();
  }, API_TIMEOUT_MS);

  try {
    console.log('Sending image to API:', API_URL);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        image: dataUrl,
        language: getActiveLanguage()
      }),
      signal: controller.signal
    });

    const responseText = await response.text();
    let result;

    try {
      result = responseText ? JSON.parse(responseText) : null;
    } catch {
      throw new Error(`Invalid API response. HTTP ${response.status}`);
    }

    if (!response.ok) {
      const detail =
        result?.detail ||
        result?.message ||
        `Server error: ${response.status}`;

      throw new Error(
        typeof detail === 'string'
          ? detail
          : JSON.stringify(detail)
      );
    }

    if (!result || typeof result !== 'object') {
      throw new Error('The server returned an empty response.');
    }

    const data = result.data || result;

    console.log('API response:', data);

    return {
      medicine_name: data.medicine_name ?? null,
      manufacturer: data.manufacturer ?? null,
      strength: data.strength ?? null,
      basic_purpose: data.basic_purpose ?? null,
      manufacturing_date: data.manufacturing_date ?? null,
      expiry_date: data.expiry_date ?? null,
      image_quality: data.image_quality ?? 'unknown',
      accuracy: Number(data.accuracy) || 0,
      printed_text: Array.isArray(data.printed_text)
        ? data.printed_text
        : [],
      uncertain_text: Array.isArray(data.uncertain_text)
        ? data.uncertain_text
        : []
    };

  } catch (error) {
    console.error('API request failed:', error);

    if (error.name === 'AbortError') {
      throw new Error('The request timed out. Please try again.');
    }

    if (error instanceof TypeError) {
      throw new Error(
        `Cannot connect to the backend at ${API_URL}. Make sure FastAPI is running.`
      );
    }

    throw error;

  } finally {
    window.clearTimeout(timeoutId);
  }
};

/* DOM HELPERS */

function setDisplay(id, value) {
  const element = document.getElementById(id);
  if (element) element.style.display = value;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function cleanField(value, fallback) {
  if (value === null || value === undefined) {
    return fallback;
  }

  const text = String(value).trim();

  if (
    !text ||
    ['none', 'null', 'n/a', 'na', 'unknown'].includes(text.toLowerCase())
  ) {
    return fallback;
  }

  return text;
}

function showErrorMessage(message) {
  const lang = getActiveLanguage();
  const copy = DASH_COPY[lang] || DASH_COPY.English;

  lastErrorMessage = message || copy.errorText;
  setText('errorText', lastErrorMessage);
  setDisplay('errorSection', 'block');
}

/* =========================================================
   HISTORY
========================================================= */

function getStoredScanHistory() {
  try {
    const parsed = JSON.parse(
      localStorage.getItem(DASH_HISTORY_KEY) || '[]'
    );

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('Could not read scan history:', error);
    return [];
  }
}

function syncLocalHistoryBadge() {
  const badge = document.getElementById('navHistoryCount');

  if (badge) {
    badge.textContent = String(getStoredScanHistory().length);
  }
}

function saveScanEntry(entry) {
  try {
    const history = getStoredScanHistory();

    const updatedHistory = [
      entry,
      ...history.filter(item => item.id !== entry.id)
    ].slice(0, 100);

    localStorage.setItem(
      DASH_HISTORY_KEY,
      JSON.stringify(updatedHistory)
    );

    localStorage.setItem(
      DASH_LAST_SCAN_KEY,
      JSON.stringify(entry)
    );

    syncLocalHistoryBadge();

    window.dispatchEvent(
      new CustomEvent('MediScan:history-updated', {
        detail: { entry, history: updatedHistory }
      })
    );

    return true;
  } catch (error) {
    console.warn('Could not save scan history:', error);
    return false;
  }
}

// Public helpers for the History page or other dashboard scripts.
window.getMedicineScanHistory = getStoredScanHistory;

window.getLastMedicineScan = function () {
  try {
    return JSON.parse(
      localStorage.getItem(DASH_LAST_SCAN_KEY) || 'null'
    );
  } catch (error) {
    console.warn('Could not read the latest scan:', error);
    return null;
  }
};

window.deleteMedicineScanFromHistory = function (scanId) {
  try {
    const updatedHistory = getStoredScanHistory().filter(
      item => item.id !== scanId
    );

    localStorage.setItem(
      DASH_HISTORY_KEY,
      JSON.stringify(updatedHistory)
    );

    const lastScan = window.getLastMedicineScan();

    if (lastScan && lastScan.id === scanId) {
      const nextLastScan = updatedHistory[0] || null;

      if (nextLastScan) {
        localStorage.setItem(
          DASH_LAST_SCAN_KEY,
          JSON.stringify(nextLastScan)
        );
      } else {
        localStorage.removeItem(DASH_LAST_SCAN_KEY);
      }
    }

    syncLocalHistoryBadge();

    window.dispatchEvent(
      new CustomEvent('MediScan:history-updated', {
        detail: { history: updatedHistory }
      })
    );

    return true;
  } catch (error) {
    console.warn('Could not delete scan history item:', error);
    return false;
  }
};

window.clearMedicineScanHistory = function () {
  try {
    localStorage.removeItem(DASH_HISTORY_KEY);
    localStorage.removeItem(DASH_LAST_SCAN_KEY);

    syncLocalHistoryBadge();

    window.dispatchEvent(
      new CustomEvent('MediScan:history-updated', {
        detail: { history: [] }
      })
    );

    return true;
  } catch (error) {
    console.warn('Could not clear scan history:', error);
    return false;
  }
};

// Keep the History badge in sync when another browser tab changes history.
window.addEventListener('storage', event => {
  if (
    event.key === DASH_HISTORY_KEY ||
    event.key === null
  ) {
    syncLocalHistoryBadge();
  }
});

/* =========================================================
   LANGUAGE CONTENT
========================================================= */

function applyDashboardCopy(lang) {
  const copy = DASH_COPY[lang] || DASH_COPY.English;

  const elements = {
    heroTitle: copy.heroTitle,
    heroSubtitle: copy.heroSubtitle,
    uploadHint: copy.uploadHint,
    uploadFormats: copy.uploadFormats,
    chooseFileBtn: copy.chooseFile,
    cameraHint: copy.cameraHint,
    cameraSub: copy.cameraSub,
    openCameraBtn: copy.openCamera,
    capturePhotoBtn: copy.capturePhoto,
    closeCameraBtn: copy.closeCamera,
    replaceBtn: copy.replaceBtn,
    removeBtn: copy.removeBtn,
    identifyBtn: copy.identifyBtn,
    scanningTitle: copy.scanningTitle,
    scanningSub: copy.scanningSub,
    errorText: lastErrorMessage || copy.errorText,
    retryBtn: copy.retryBtn,
    notSureTitle: copy.notSureTitle,
    notSureBody: copy.notSureBody,
    listenBtn: copy.listenBtn,
    purposeHeading: copy.purposeHeading,
    lblManufacturer: copy.lblManufacturer,
    lblStrength: copy.lblStrength,
    lblMfgDate: copy.lblMfgDate,
    lblExpDate: copy.lblExpDate,
    aiWarningBox: copy.aiWarning
  };

  Object.entries(elements).forEach(([id, value]) => {
    setText(id, value);
  });

  if (currentScanData) {
    renderResultView(currentScanData, lang);
  }
}

/* =========================================================
   CAMERA
========================================================= */

function stopCameraStream() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => {
      track.stop();
    });

    cameraStream = null;
  }

  const video = document.getElementById('cameraVideo');

  if (video) {
    video.srcObject = null;
  }

  setDisplay('cameraStreamBox', 'none');
}

function triggerNativeCameraFallback() {
  const lang = getActiveLanguage();
  const copy = DASH_COPY[lang] || DASH_COPY.English;

  const cameraInput = document.getElementById('cameraInput');

  if (cameraInput) {
    showErrorMessage(copy.cameraFallbackNote);
    cameraInput.click();
  } else {
    showErrorMessage(copy.errorText);
  }
}

async function startCameraCapture() {
  const video = document.getElementById('cameraVideo');

  lastErrorMessage = null;
  setDisplay('errorSection', 'none');

  const secure =
    window.isSecureContext ||
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1';

  if (
    !secure ||
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia ||
    !video
  ) {
    triggerNativeCameraFallback();
    return;
  }

  try {
    stopCameraStream();

    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: 'environment' },
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    });

    video.srcObject = cameraStream;

    await video.play();

    setDisplay('cameraStreamBox', 'block');
  } catch (error) {
    console.error('Camera error:', error);
    triggerNativeCameraFallback();
  }
}

function captureFrameFromVideo() {
  const video = document.getElementById('cameraVideo');
  const canvas = document.getElementById('cameraCanvas');

  if (
    !video ||
    !canvas ||
    !video.videoWidth ||
    !video.videoHeight
  ) {
    showErrorMessage('Camera is not ready. Please try again.');
    return;
  }

  const maxDimension = 1280;

  let width = video.videoWidth;
  let height = video.videoHeight;

  if (width > maxDimension || height > maxDimension) {
    const scale = Math.min(
      maxDimension / width,
      maxDimension / height
    );

    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');

  if (!context) {
    showErrorMessage('Could not capture the image.');
    return;
  }

  context.drawImage(video, 0, 0, width, height);

  const imageData = canvas.toDataURL('image/jpeg', 0.88);

  stopCameraStream();
  setSelectedImage(imageData);
}

/* IMAGE OPTIMIZATION */

function normalizeUploadedDataUrl(dataUrl) {
  return new Promise(resolve => {
    const image = new Image();

    image.onload = () => {
      const maxDimension = 1280;

      let width = image.naturalWidth || image.width;
      let height = image.naturalHeight || image.height;

      if (!width || !height) {
        resolve(dataUrl);
        return;
      }

      if (width > maxDimension || height > maxDimension) {
        const scale = Math.min(
          maxDimension / width,
          maxDimension / height
        );

        width = Math.round(width * scale);
        height = Math.round(height * scale);

        const canvas = document.createElement('canvas');

        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext('2d');

        if (!context) {
          resolve(dataUrl);
          return;
        }

        context.drawImage(
          image,
          0,
          0,
          width,
          height
        );

        resolve(canvas.toDataURL('image/jpeg', 0.88));
      } else {
        resolve(dataUrl);
      }
    };

    image.onerror = () => resolve(dataUrl);
    image.src = dataUrl;
  });
}

/* SELECTED IMAGE */

function setSelectedImage(dataUrl) {
  currentImageDataUrl = dataUrl;
  currentScanData = null;
  lastErrorMessage = null;

  const image = document.getElementById('previewImage');

  setDisplay('resultSection', 'none');
  setDisplay('notSureSection', 'none');
  setDisplay('errorSection', 'none');

  if (dataUrl) {
    if (image) {
      image.src = dataUrl;
    }

    setDisplay('previewPanel', 'grid');
  } else {
    if (image) {
      image.src = '';
    }

    setDisplay('previewPanel', 'none');
  }
}

/* FILE VALIDATION AND UPLOAD */

function handleFileSelection(file) {
  if (!file) return;

  const lang = getActiveLanguage();
  const copy = DASH_COPY[lang] || DASH_COPY.English;

  const allowedTypes = [
    'image/jpeg',
    'image/jpg',
    'image/pjpeg',
    'image/png',
    'image/webp'
  ];

  const allowedExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.webp'
  ];

  const fileName = (file.name || '').toLowerCase();

  const validMime = allowedTypes.includes(
    (file.type || '').toLowerCase()
  );

  const validExtension = allowedExtensions.some(extension =>
    fileName.endsWith(extension)
  );

  if (
    (!validMime && !validExtension) ||
    file.size > MAX_UPLOAD_BYTES
  ) {
    showErrorMessage(copy.invalidFileText);
    return;
  }

  const reader = new FileReader();

  reader.onload = async event => {
    try {
      stopCameraStream();

      const optimizedImage = await normalizeUploadedDataUrl(
        event.target.result
      );

      setSelectedImage(optimizedImage);
    } catch (error) {
      console.error('Image processing error:', error);
      showErrorMessage(copy.errorText);
    }
  };

  reader.onerror = () => {
    showErrorMessage(copy.errorText);
  };

  reader.readAsDataURL(file);
}

/* IDENTIFY MEDICINE */

async function identifyMedicineFromImage(dataUrl) {
  if (typeof window.readMedicinesImage !== 'function') {
    throw new Error(
      'API function is not available. Check dashboard.js.'
    );
  }

  return await window.readMedicinesImage(dataUrl);
}

/* DISPLAY RESULT */

function renderResultView(data, lang) {
  const copy = DASH_COPY[lang] || DASH_COPY.English;

  data = data && typeof data === 'object' ? data : {};

  const quality = String(
    data.image_quality || ''
  ).toLowerCase();

  const accuracy = Number(data.accuracy) || 0;

  const hasMedicineName = Boolean(
    cleanField(data.medicine_name, '')
  );

  if (
    !hasMedicineName ||
    (
      ['blurry', 'poor', 'unreadable'].includes(quality) &&
      accuracy < 40
    )
  ) {
    setDisplay('resultSection', 'none');
    setDisplay('notSureSection', 'block');
    return;
  }

  setDisplay('notSureSection', 'none');
  setDisplay('resultSection', 'block');

  setText(
    'resMedicineName',
    cleanField(data.medicine_name, copy.unnamedMed)
  );

  setText(
    'resPurpose',
    cleanField(data.basic_purpose, copy.notAvailable)
  );

  setText(
    'resManufacturer',
    cleanField(data.manufacturer, copy.notAvailable)
  );

  setText(
    'resStrength',
    cleanField(data.strength, copy.notAvailable)
  );

  setText(
    'resMfgDate',
    cleanField(data.manufacturing_date, copy.notAvailable)
  );

  setText(
    'resExpDate',
    cleanField(data.expiry_date, copy.notAvailable)
  );
}

/* MAIN SCAN FUNCTION */

async function runScanFlow() {
  if (isScanning) return;

  if (!currentImageDataUrl) {
    const previewImage = document.getElementById('previewImage');
    const imageSource = previewImage?.getAttribute('src');

    if (imageSource?.startsWith('data:image/')) {
      currentImageDataUrl = imageSource;
    } else {
      showErrorMessage(
        'Please upload or capture a medicine photo first.'
      );
      return;
    }
  }

  const lang = getActiveLanguage();
  const copy = DASH_COPY[lang] || DASH_COPY.English;

  const identifyButton = document.getElementById('identifyBtn');
  const retryButton = document.getElementById('retryBtn');

  isScanning = true;

  if (identifyButton) identifyButton.disabled = true;
  if (retryButton) retryButton.disabled = true;

  lastErrorMessage = null;

  setDisplay('errorSection', 'none');
  setDisplay('resultSection', 'none');
  setDisplay('notSureSection', 'none');
  setDisplay('scanningSection', 'block');

  try {
    console.log('Starting medicine identification...');

    const data = await identifyMedicineFromImage(
      currentImageDataUrl
    );

    console.log('Medicine identified:', data);

    setDisplay('scanningSection', 'none');

    currentScanData = data;

    renderResultView(data, lang);

    // Save scan history
    saveScanEntry({
      id:
        'scan_' +
        Date.now() +
        '_' +
        Math.random().toString(36).slice(2, 6),

      scanned_at: new Date().toISOString(),

      medicine_name: data.medicine_name || null,
      manufacturer: data.manufacturer || null,
      strength: data.strength || null,
      basic_purpose: data.basic_purpose || null,

      manufacturing_date:
        data.manufacturing_date || null,

      expiry_date:
        data.expiry_date || null,

      image_quality:
        data.image_quality || 'unknown',

      accuracy:
        data.accuracy ?? 0,

      thumbnail:
        currentImageDataUrl
    });

  } catch (error) {
    console.error('Medicine identification failed:', error);

    setDisplay('scanningSection', 'none');

    showErrorMessage(
      error?.message || copy.errorText
    );

  } finally {
    isScanning = false;

    if (identifyButton) identifyButton.disabled = false;
    if (retryButton) retryButton.disabled = false;
  }
}

/* =========================================================
   LANGUAGE FALLBACK
========================================================= */

function bindLanguageFallback() {
  if (typeof initSharedChrome === 'function') {
    initSharedChrome(updatedLang => {
      applyDashboardCopy(updatedLang);
    });

    return;
  }

  syncLocalHistoryBadge();

  document.querySelectorAll('.lang-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.lang-pill').forEach(item => {
        item.classList.remove('active');
      });

      pill.classList.add('active');

      applyDashboardCopy(
        pill.dataset.lang || 'English'
      );
    });
  });

  const menuButton = document.getElementById('mobileMenuBtn');
  const sideNav = document.getElementById('sideNav');
  const backdrop = document.getElementById('mobileBackdrop');

  if (menuButton && sideNav && backdrop) {
    const toggleMenu = open => {
      sideNav.classList.toggle('open', open);
      backdrop.classList.toggle('open', open);
    };

    menuButton.addEventListener('click', () => {
      toggleMenu(!sideNav.classList.contains('open'));
    });

    backdrop.addEventListener('click', () => {
      toggleMenu(false);
    });
  }
}

/* =========================================================
   DASHBOARD INITIALIZATION
========================================================= */

function initializeDashboard() {
  console.log('MediScan dashboard initialized.');

  const initialLanguage = getActiveLanguage();

  bindLanguageFallback();
  applyDashboardCopy(initialLanguage);

  const fileInput = document.getElementById('fileInput');
  const cameraInput = document.getElementById('cameraInput');
  const dropZone = document.getElementById('dropZone');
  const identifyButton = document.getElementById('identifyBtn');

  /* Choose file */
  document.getElementById('chooseFileBtn')
    ?.addEventListener('click', () => {
      fileInput?.click();
    });

  /* Open camera */
  document.getElementById('openCameraBtn')
    ?.addEventListener('click', startCameraCapture);

  /* Capture camera image */
  document.getElementById('capturePhotoBtn')
    ?.addEventListener('click', captureFrameFromVideo);

  /* Close camera */
  document.getElementById('closeCameraBtn')
    ?.addEventListener('click', stopCameraStream);

  /* File input */
  fileInput?.addEventListener('change', event => {
    const file = event.target.files?.[0];

    if (file) {
      handleFileSelection(file);
    }

    event.target.value = '';
  });

  /* Camera input */
  cameraInput?.addEventListener('change', event => {
    const file = event.target.files?.[0];

    if (file) {
      handleFileSelection(file);
    }

    event.target.value = '';
  });

  /* Drag over */
  dropZone?.addEventListener('dragover', event => {
    event.preventDefault();
    dropZone.classList.add('dragover');
  });

  /* Drag leave */
  dropZone?.addEventListener('dragleave', event => {
    if (!dropZone.contains(event.relatedTarget)) {
      dropZone.classList.remove('dragover');
    }
  });

  /* Drop image */
  dropZone?.addEventListener('drop', event => {
    event.preventDefault();
    dropZone.classList.remove('dragover');

    const file = event.dataTransfer?.files?.[0];

    if (file) {
      handleFileSelection(file);
    }
  });

  /* Replace image */
  document.getElementById('replaceBtn')
    ?.addEventListener('click', () => {
      if (fileInput) fileInput.value = '';
      if (cameraInput) cameraInput.value = '';

      fileInput?.click();
    });

  /* Remove image */
  document.getElementById('removeBtn')
    ?.addEventListener('click', () => {
      if (fileInput) fileInput.value = '';
      if (cameraInput) cameraInput.value = '';

      stopCameraStream();

      currentScanData = null;
      lastErrorMessage = null;

      setSelectedImage(null);
    });

  /* Identify medicine */
  identifyButton?.addEventListener('click', runScanFlow);

  /* Retry scan */
  document.getElementById('retryBtn')
    ?.addEventListener('click', runScanFlow);

  /* Text to speech */
  document.getElementById('listenBtn')
    ?.addEventListener('click', () => {
      if (
        !currentScanData ||
        typeof speakText !== 'function'
      ) {
        return;
      }

      const lang = getActiveLanguage();
      const copy = DASH_COPY[lang] || DASH_COPY.English;

      const name = cleanField(
        currentScanData.medicine_name,
        copy.unnamedMed
      );

      const purpose = cleanField(
        currentScanData.basic_purpose,
        copy.notAvailable
      );

      speakText(`${name}. ${purpose}`, lang);
    });

  /* Stop camera when leaving page */
  window.addEventListener('beforeunload', stopCameraStream);

  /* Restore previous scan */
  try {
    const pendingRescanRaw =
      sessionStorage.getItem(DASH_RESCAN_KEY);

    if (pendingRescanRaw) {
      sessionStorage.removeItem(DASH_RESCAN_KEY);

      const item = JSON.parse(pendingRescanRaw);

      if (
        item &&
        typeof item.thumbnail === 'string' &&
        item.thumbnail.startsWith('data:image/')
      ) {
        setSelectedImage(item.thumbnail);
      }
    }
  } catch (error) {
    console.warn('Could not restore previous scan:', error);
  }
}

/* =========================================================
   START DASHBOARD
========================================================= */

if (document.readyState === 'loading') {
  document.addEventListener(
    'DOMContentLoaded',
    initializeDashboard,
    { once: true }
  );
} else {
  initializeDashboard();
}