
# import streamlit as st
# import streamlit.components.v1 as components
# from PIL import Image
# from ai_reader import read_medicines_image
# import json


# # ---------------------------------------------------------
# # 1. PAGE CONFIGURATION
# # ---------------------------------------------------------

# st.set_page_config(
#     page_title="MediSpeak - Medicine Reader",
#     layout="centered",
#     initial_sidebar_state="collapsed"
# )

# st.header("MediSpeak")


# # ---------------------------------------------------------
# # 2. ELDERLY-FRIENDLY STYLING
# # ---------------------------------------------------------

# st.markdown("""
# <style>

# .stApp {
#     background-color: #FAF7F2;
#     color: #0F2942;
# }

# .block-container {
#     padding-top: 2rem;
#     padding-bottom: 3rem;
#     max-width: 680px;
# }

# .header-box {
#     background-color: #FFFFFF;
#     border: 2px solid #D8CFC0;
#     border-radius: 18px;
#     padding: 20px 24px;
#     margin-bottom: 20px;
#     box-shadow: 0 4px 12px rgba(15, 41, 66, 0.06);
# }

# .app-title {
#     font-size: 32px;
#     font-weight: 800;
#     color: #0F2942;
#     margin: 0;
# }

# .app-subtitle {
#     font-size: 18px;
#     color: #3B5268;
#     margin-top: 4px;
# }

# /* Radio buttons */

# div[data-testid="stRadio"] > div {
#     gap: 12px;
# }

# div[data-testid="stRadio"] label {
#     background-color: #FFFFFF;
#     border: 2px solid #CBD5E1;
#     border-radius: 14px;
#     padding: 12px 18px !important;
#     font-size: 18px !important;
#     font-weight: 700 !important;
#     color: #0F2942 !important;
# }

# /* Main buttons */

# .stButton > button {
#     background-color: #0D7A5F !important;
#     color: #FFFFFF !important;
#     font-size: 20px !important;
#     font-weight: 700 !important;
#     padding: 14px 24px !important;
#     border-radius: 14px !important;
#     border: none !important;
#     width: 100%;
# }

# .stButton > button:hover {
#     background-color: #095C47 !important;
# }

# /* Result text */

# div[data-testid="stVerticalBlockBorderWrapper"] {
#     border-radius: 18px;
# }

# </style>
# """, unsafe_allow_html=True)


# # ---------------------------------------------------------
# # 3. LOCALIZED UI STRINGS
# # ---------------------------------------------------------

# UI_TEXT = {

#     "English": {

#         "subtitle": "Upload a photo of your medicine strip to see and hear its name and uses.",

#         "step1": "1. Choose Language",
#         "step2": "2. Upload or Take Medicine Photo",

#         "upload_label": "Tap to upload a photo of the medicine strip",
#         "camera_label": "Or take a photo with camera",

#         "scan_btn": "🔍 Identify Medicine",

#         "name_label": "Medicine Name",
#         "uses_label": "Uses (What it is for)",

#         "manufacturer": "Manufacturer",
#         "strength": "Strength",
#         "manufacturing_date": "Manufacturing Date",
#         "expiry_date": "Expiry Date",

#         "listen_btn": "🔊 Listen in English",

#         "notsure_title": "⚠️ NOT SURE — Do Not Take Yet",

#         "notsure_msg": "The medicine strip is blurry, torn, or unclear. Please take a clearer photo or ask a family member or pharmacist.",

#         "lang_code": "en-IN",
#         "not_detected": "Not detected",
#         "scan_success": "Medicine information extracted successfully!"

#     },

#     "हिंदी": {

#         "subtitle": "दवाई का नाम और उपयोग जानने व सुनने के लिए पत्ते की फोटो अपलोड करें।",

#         "step1": "1. भाषा चुनें",
#         "step2": "2. दवाई के पत्ते की फोटो लें या अपलोड करें",

#         "upload_label": "दवाई के पत्ते की फोटो अपलोड करने के लिए यहाँ दबाएं",
#         "camera_label": "या कैमरे से फोटो खींचें",

#         "scan_btn": "🔍 दवाई पहचानें",

#         "name_label": "दवाई का नाम",
#         "uses_label": "उपयोग (किस काम आती है)",

#         "manufacturer": "निर्माता",
#         "strength": "दवाई की मात्रा",
#         "manufacturing_date": "निर्माण की तारीख",
#         "expiry_date": "समाप्ति की तारीख",

#         "listen_btn": "🔊 हिंदी में सुनें",

#         "notsure_title": "⚠️ स्पष्ट नहीं है — अभी दवाई न लें",

#         "notsure_msg": "दवाई का पत्ता धुंधला या फटा हुआ है। कृपया साफ फोटो लें या घर के किसी सदस्य या फार्मासिस्ट से पूछें।",

#         "lang_code": "hi-IN",
#         "not_detected": "पता नहीं चला",
#         "scan_success": "दवाई की जानकारी सफलतापूर्वक प्राप्त हुई!"

#     },

#     "ਪੰਜਾਬੀ": {

#         "subtitle": "ਦਵਾਈ ਦਾ ਨਾਮ ਅਤੇ ਵਰਤੋਂ ਜਾਣਨ ਤੇ ਸੁਣਨ ਲਈ ਪੱਤੇ ਦੀ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ।",

#         "step1": "1. ਭਾਸ਼ਾ ਚੁਣੋ",
#         "step2": "2. ਦਵਾਈ ਦੇ ਪੱਤੇ ਦੀ ਫੋਟੋ ਲਓ ਜਾਂ ਅਪਲੋਡ ਕਰੋ",

#         "upload_label": "ਦਵਾਈ ਦੇ ਪੱਤੇ ਦੀ ਫੋਟੋ ਅਪਲੋਡ ਕਰਨ ਲਈ ਇੱਥੇ ਦਬਾਓ",
#         "camera_label": "ਜਾਂ ਕੈਮਰੇ ਨਾਲ ਫੋਟੋ ਖਿੱਚੋ",

#         "scan_btn": "🔍 ਦਵਾਈ ਪਛਾਣੋ",

#         "name_label": "ਦਵਾਈ ਦਾ ਨਾਮ",
#         "uses_label": "ਵਰਤੋਂ (ਕਿਸ ਕੰਮ ਆਉਂਦੀ ਹੈ)",

#         "manufacturer": "ਨਿਰਮਾਤਾ",
#         "strength": "ਦਵਾਈ ਦੀ ਮਾਤਰਾ",
#         "manufacturing_date": "ਨਿਰਮਾਣ ਦੀ ਮਿਤੀ",
#         "expiry_date": "ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਮਿਤੀ",

#         "listen_btn": "🔊 ਪੰਜਾਬੀ ਵਿੱਚ ਸੁਣੋ",

#         "notsure_title": "⚠️ ਸਪੱਸ਼ਟ ਨਹੀਂ ਹੈ — ਹੁਣੇ ਦਵਾਈ ਨਾ ਲਓ",

#         "notsure_msg": "ਦਵਾਈ ਦਾ ਪੱਤਾ ਧੁੰਦਲਾ ਜਾਂ ਫਟਿਆ ਹੋਇਆ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਸਾਫ਼ ਫੋਟੋ ਲਓ ਜਾਂ ਪਰਿਵਾਰ ਦੇ ਕਿਸੇ ਮੈਂਬਰ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਨੂੰ ਪੁੱਛੋ।",

#         "lang_code": "pa-IN",
#         "not_detected": "ਪਤਾ ਨਹੀਂ ਲੱਗਿਆ",
#         "scan_success": "ਦਵਾਈ ਦੀ ਜਾਣਕਾਰੀ ਸਫਲਤਾਪੂਰਵਕ ਪ੍ਰਾਪਤ ਹੋਈ!"

#     }

# }


# # ---------------------------------------------------------
# # 4. VOICE PLAYBACK COMPONENT
# # ---------------------------------------------------------

# def speak_button(text_to_speak, lang_code, btn_label):

#     safe_text = json.dumps(text_to_speak, ensure_ascii=False)

#     html_code = f"""
#     <button onclick="speakText()" style="
#         background-color: #0F2942;
#         color: #FFFFFF;
#         font-size: 20px;
#         font-weight: 700;
#         padding: 16px 24px;
#         border-radius: 14px;
#         border: none;
#         width: 100%;
#         cursor: pointer;
#         font-family: sans-serif;
#         margin-top: 8px;
#     ">
#         {btn_label}
#     </button>

#     <script>

#         function speakText() {{

#             window.speechSynthesis.cancel();

#             const msg = new SpeechSynthesisUtterance({safe_text});

#             msg.lang = "{lang_code}";
#             msg.rate = 0.88;

#             window.speechSynthesis.speak(msg);

#         }}

#     </script>
#     """

#     components.html(html_code, height=75)


# # ---------------------------------------------------------
# # 5. LANGUAGE SELECTION
# # ---------------------------------------------------------

# st.markdown("### 🌐 Choose Language / भाषा चुनें / ਭਾਸ਼ਾ ਚੁਣੋ")

# selected_lang = st.radio(
#     "Language",
#     options=["English", "हिंदी", "ਪੰਜਾਬੀ"],
#     horizontal=True,
#     label_visibility="collapsed"
# )

# t = UI_TEXT[selected_lang]


# # ---------------------------------------------------------
# # 6. HEADER
# # ---------------------------------------------------------

# st.markdown(f"""
# <div class="header-box">
#     <p class="app-title"> MediSpeak</p>
#     <p class="app-subtitle">{t['subtitle']}</p>
# </div>
# """, unsafe_allow_html=True)


# # ---------------------------------------------------------
# # 7. IMAGE UPLOAD AND CAMERA
# # ---------------------------------------------------------

# st.markdown(f"### {t['step2']}")

# uploaded_file = st.file_uploader(
#     t["upload_label"],
#     type=["jpg", "jpeg", "png", "webp"]
# )

# with st.expander(t["camera_label"]):

#     camera_file = st.camera_input("Camera")


# # Select image source

# image_source = (
#     camera_file
#     if camera_file is not None
#     else uploaded_file
# )


# # ---------------------------------------------------------
# # 8. IMAGE PREVIEW AND GEMINI SCANNING
# # ---------------------------------------------------------

# if image_source is not None:

#     try:

#         img = Image.open(image_source)

#         st.image(
#             img,
#             caption="Medicine Package Preview",
#             width="stretch"
#         )

#         if st.button(t["scan_btn"], width="stretch"):

#             # Remove previous result
#             st.session_state.pop("scan_result", None)

#             with st.spinner("Reading medicine package..."):

#                 try:

#                     result = read_medicines_image(img)

#                     if not isinstance(result, dict):
#                         raise ValueError("Invalid response from medicine reader")

#                     st.session_state["scan_result"] = result

#                     st.success(t["scan_success"])

#                 except Exception as e:

#                     st.error(
#                         f"Could not process image: {e}"
#                     )

#     except Exception as e:

#         st.error(f"Could not open image: {e}")


# # ---------------------------------------------------------
# # 9. DISPLAY MEDICINE RESULT
# # ---------------------------------------------------------

# if "scan_result" in st.session_state:

#     res = st.session_state["scan_result"]

#     if (
#         isinstance(res, dict)
#         and res.get("medicine_name")
#         and res.get("basic_purpose")
#     ):

#         # Extract medicine details

#         med_name = res.get("medicine_name") or t["not_detected"]

#         manufacture = res.get("manufacturer") or t["not_detected"]

#         strength = res.get("strength") or t["not_detected"]

#         basic_purpose = res.get("basic_purpose") or t["not_detected"]

#         manufacturing_date = (
#             res.get("manufacturing_date") or t["not_detected"]
#         )

#         expiry_date = (
#             res.get("expiry_date") or t["not_detected"]
#         )


#         # -------------------------------------------------
#         # MEDICINE RESULT CARD
#         # -------------------------------------------------

#         with st.container(border=True):

#             st.success(t["scan_success"])

#             st.title(med_name)

#             st.divider()

#             st.subheader("Medicine Information")

#             col1, col2 = st.columns(2)

#             with col1:

#                 st.caption(t["manufacturer"])
#                 st.write(manufacture)

#                 st.caption(t["strength"])
#                 st.write(strength)

#             #     st.caption(t["manufacturing_date"])
#             #     st.write(manufacturing_date)

#             # with col2:

#             #     st.caption(t["expiry_date"])
#             #     st.write(expiry_date)


#             st.divider()

#             st.subheader(t["uses_label"])

#             st.write(basic_purpose) 

#             # st.subheader(t["uses_label"])

#             # st.write(accuracy)


#             st.divider()

#             # Voice output

#             spoken_sentence = (

#                 f"{t['name_label']}: {med_name}. "

#                 f"{t['manufacturer']}: {manufacture}. "

#                 f"{t['strength']}: {strength}. "

#                 f"{t['uses_label']}: {basic_purpose}. "

#                 # f"{t['manufacturing_date']}: {manufacturing_date}. "

#                 # f"{t['expiry_date']}: {expiry_date}."

                

#             )

#             speak_button(
#                 spoken_sentence,
#                 t["lang_code"],
#                 t["listen_btn"]
#             )


#         # Safety warning

#         st.warning(
#             "Please verify the extracted information against "
#             "the original medicine packaging. AI extraction "
#             "does not confirm medicine identity or safety."
#         )


#     else:

#         # -------------------------------------------------
#         # NOT SURE GUARDRAIL
#         # -------------------------------------------------

#         with st.container(border=True):

#             st.error(t["notsure_title"])

#             st.write(t["notsure_msg"])

#             speak_button(
#                 t["notsure_msg"],
#                 t["lang_code"],
#                 t["listen_btn"]
#             )



import html
from datetime import datetime, timedelta
from PIL import Image
import streamlit as st
import streamlit.components.v1 as components

from history_store import (
    add_scan_to_history,
    delete_scan_from_history,
    get_expiry_status,
    image_to_data_uri,
    load_history,
    pil_to_data_uri,
)

# Preserve your existing backend Gemini reader
try:
    from ai_reader import read_medicines_image
except ImportError:
    def read_medicines_image(image: Image.Image) -> dict:
        raise RuntimeError("ai_reader.read_medicines_image not found.")


st.set_page_config(
    page_title="MediSpeak AI",
    page_icon="🌿",
    layout="wide",
    initial_sidebar_state="collapsed",
)


LANGUAGES = {
    "English": {"code": "en-IN", "label": "English"},
    "Hindi": {"code": "hi-IN", "label": "हिन्दी"},
    "Punjabi": {"code": "pa-IN", "label": "ਪੰਜਾਬੀ"},
}

UI_TEXT = {
    "English": {
        "brand_name": "MediSpeak AI",
        "nav_dashboard": "Dashboard",
        "nav_history": "History",
        "nav_safety": "Packaging text reader only. Always confirm medicine details with a doctor or pharmacist.",
        "heading": "Understand your medicine.",
        "subtitle": "Scan your medicine package to understand its name, dates, and basic use in simple words.",
        "lang_label": "Language",
        "upload_tab": "Upload Photo",
        "camera_tab": "Take Photo",
        "upload_label": "Choose a medicine package image (JPG, JPEG, PNG, WEBP)",
        "camera_label": "Capture medicine package with camera",
        "replace_btn": "Replace Image",
        "remove_btn": "Remove Image",
        "identify_btn": "Identify Medicine",
        "scanning_title": "Analyzing medicine...",
        "scanning_sub": "Reading package information...",
        "error_msg": "We could not complete the scan right now. Please try again with a clear photo.",
        "retry_btn": "Try Again",
        "not_sure_title": "Not Sure About This Package",
        "not_sure_body": "The image is blurry or key details are hard to read. We will not guess a medicine name. Please take a brighter, steadier photo in good light or ask a pharmacist.",
        "listen_btn": "Listen",
        "purpose_heading": "What This Medicine Is For",
        "manufacturer": "Manufacturer",
        "strength": "Strength",
        "mfg_date": "Manufacturing Date",
        "exp_date": "Expiry Date",
        "scanned_on": "Scanned on",
        "not_available": "Not visible on pack",
        "ai_warning": "AI-extracted information may be inaccurate and is not verified medical advice. Always verify with a pharmacist or doctor.",
        "safety_disclaimer": "MediSpeak AI helps read visible medicine packaging and does not prescribe, diagnose, or replace professional medical guidance.",
        "history_title": "Your Medicine History",
        "history_subtitle": "Every medicine you've scanned, organized in one place.",
        "scans_saved": "Scans saved",
        "search_placeholder": "Search medicines by name...",
        "filter_all": "All Scans",
        "filter_recent": "Recently Scanned",
        "filter_expired": "Expired",
        "filter_soon": "Expiring Soon",
        "status_valid": "Not expired",
        "status_soon": "Expiring soon",
        "status_expired": "Expired",
        "status_unknown": "Expiry date unavailable",
        "view_details": "View Details",
        "delete_btn": "Delete",
        "scan_again": "Scan Again",
        "back_to_history": "Back to History",
        "empty_title": "Your history starts here.",
        "empty_desc": "Scan your first medicine to keep its information organized and accessible whenever you need it.",
        "empty_cta": "Scan Your First Medicine",
        "unnamed_med": "Unidentified Medicine",
    },
    "Hindi": {
        "brand_name": "MediSpeak AI",
        "nav_dashboard": "डैशबोर्ड",
        "nav_history": "इतिहास",
        "nav_safety": "केवल पैकेज की जानकारी पढ़ने के लिए। दवा की पुष्टि डॉक्टर या फार्मासिस्ट से करें।",
        "heading": "अपनी दवा को समझें।",
        "subtitle": "दवा के पैकेट की फ़ोटो लेकर उसका नाम, तारीख़ और सरल उपयोग जानें।",
        "lang_label": "भाषा",
        "upload_tab": "फ़ोटो अपलोड करें",
        "camera_tab": "कैमरा से फ़ोटो लें",
        "upload_label": "दवा के पैकेट की फ़ोटो चुनें (JPG, JPEG, PNG, WEBP)",
        "camera_label": "कैमरे से दवा का पैकेट कैप्चर करें",
        "replace_btn": "फ़ोटो बदलें",
        "remove_btn": "फ़ोटो हटाएं",
        "identify_btn": "दवा पहचानें",
        "scanning_title": "दवा का विश्लेषण हो रहा है...",
        "scanning_sub": "पैकेट की जानकारी पढ़ी जा रही है...",
        "error_msg": "अभी स्कैन पूरा नहीं हो सका। कृपया साफ़ फ़ोटो के साथ पुनः प्रयास करें।",
        "retry_btn": "पुनः प्रयास करें",
        "not_sure_title": "इस पैकेट पर पूरी तरह सुनिश्चित नहीं हैं",
        "not_sure_body": "फ़ोटो धुंधली है या ज़रूरी जानकारी साफ़ नहीं दिख रही है। हम दवा का नाम अनुमान से नहीं बताएंगे। कृपया अच्छी रोशनी में साफ़ फ़ोटो लें या फार्मासिस्ट से पूछें।",
        "listen_btn": "सुनें",
        "purpose_heading": "यह दवा किस काम आती है",
        "manufacturer": "निर्माता",
        "strength": "क्षमता / मात्रा",
        "mfg_date": "निर्माण तिथि",
        "exp_date": "समाप्ति तिथि",
        "scanned_on": "स्कैन तिथि",
        "not_available": "पैकेट पर स्पष्ट नहीं",
        "ai_warning": "AI द्वारा निकाली गई जानकारी गलत हो सकती है और यह प्रमाणित चिकित्सा सलाह नहीं है। कृपया डॉक्टर या फार्मासिस्ट से जांच लें।",
        "safety_disclaimer": "MediSpeak AI केवल दवा के पैकेट का लिखा अंश पढ़ने में मदद करता है; यह चिकित्सीय परामर्श या पर्चा नहीं है।",
        "history_title": "आपका दवा इतिहास",
        "history_subtitle": "आपकी सभी स्कैन की गई दवाएं एक ही जगह व्यवस्थित।",
        "scans_saved": "स्कैन सहेजे गए",
        "search_placeholder": "नाम से दवा खोजें...",
        "filter_all": "सभी स्कैन",
        "filter_recent": "हाल ही में स्कैन",
        "filter_expired": "एक्सपायर",
        "filter_soon": "जल्द एक्सपायर होने वाली",
        "status_valid": "एक्सपायर नहीं",
        "status_soon": "जल्द एक्सपायर",
        "status_expired": "एक्सपायर हो चुकी",
        "status_unknown": "समाप्ति तिथि उपलब्ध नहीं",
        "view_details": "विवरण देखें",
        "delete_btn": "हटाएं",
        "scan_again": "फिर स्कैन करें",
        "back_to_history": "इतिहास पर वापस जाएं",
        "empty_title": "आपका इतिहास यहाँ शुरू होता है।",
        "empty_desc": "अपनी पहली दवा स्कैन करें ताकि ज़रूरत पड़ने पर उसकी जानकारी आसानी से मिल सके।",
        "empty_cta": "पहली दवा स्कैन करें",
        "unnamed_med": "अस्पष्ट दवा नाम",
    },
    "Punjabi": {
        "brand_name": "MediSpeak AI",
        "nav_dashboard": "ਡੈਸ਼ਬੋਰਡ",
        "nav_history": "ਇਤਿਹਾਸ",
        "nav_safety": "ਸਿਰਫ਼ ਡੱਬੇ ਦੀ ਲਿਖਤ ਪੜ੍ਹਨ ਲਈ। ਦਵਾਈ ਦੀ ਪੁਸ਼ਟੀ ਡਾਕਟਰ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਨਾਲ ਕਰੋ।",
        "heading": "ਆਪਣੀ ਦਵਾਈ ਨੂੰ ਸਮਝੋ।",
        "subtitle": "ਦਵਾਈ ਦੇ ਪੈਕਟ ਦੀ ਫ਼ੋਟੋ ਲੈ ਕੇ ਇਸਦਾ ਨਾਮ, ਤਾਰੀਖ਼ ਅਤੇ ਸੌਖੀ ਵਰਤੋਂ ਜਾਣੋ।",
        "lang_label": "ਭਾਸ਼ਾ",
        "upload_tab": "ਫ਼ੋਟੋ ਅੱਪਲੋਡ ਕਰੋ",
        "camera_tab": "ਕੈਮਰੇ ਨਾਲ ਫ਼ੋਟੋ ਲਓ",
        "upload_label": "ਦਵਾਈ ਦੇ ਪੈਕਟ ਦੀ ਫ਼ੋਟੋ ਚੁਣੋ (JPG, JPEG, PNG, WEBP)",
        "camera_label": "ਕੈਮਰੇ ਨਾਲ ਦਵਾਈ ਦੇ ਪੈਕਟ ਦੀ ਫ਼ੋਟੋ ਲਓ",
        "replace_btn": "ਫ਼ੋਟੋ ਬਦਲੋ",
        "remove_btn": "ਫ਼ੋਟੋ ਹਟਾਓ",
        "identify_btn": "ਦਵਾਈ ਪਛਾਣੋ",
        "scanning_title": "ਦਵਾਈ ਦੀ ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ...",
        "scanning_sub": "ਪੈਕਟ ਦੀ ਜਾਣਕਾਰੀ ਪੜ੍ਹੀ ਜਾ ਰਹੀ ਹੈ...",
        "error_msg": "ਇਸ ਵੇਲੇ ਸਕੈਨ ਪੂਰਾ ਨਹੀਂ ਹੋ ਸਕਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਸਾਫ਼ ਫ਼ੋਟੋ ਨਾਲ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        "retry_btn": "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
        "not_sure_title": "ਇਸ ਪੈਕਟ ਬਾਰੇ ਪੱਕਾ ਯਕੀਨ ਨਹੀਂ",
        "not_sure_body": "ਫ਼ੋਟੋ ਧੁੰਦਲੀ ਹੈ ਜਾਂ ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ ਸਾਫ਼ ਨਹੀਂ ਦਿਸ ਰਹੀ। ਅਸੀਂ ਅੰਦਾਜ਼ੇ ਨਾਲ ਦਵਾਈ ਦਾ ਨਾਮ ਨਹੀਂ ਦੱਸਾਂਗੇ। ਕਿਰਪਾ ਕਰਕੇ ਚੰਗੀ ਰੌਸ਼ਨੀ ਵਿੱਚ ਸਾਫ਼ ਫ਼ੋਟੋ ਲਓ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਨਾਲ ਗੱਲ ਕਰੋ।",
        "listen_btn": "ਸੁਣੋ",
        "purpose_heading": "ਇਹ ਦਵਾਈ ਕਿਸ ਕੰਮ ਆਉਂਦੀ ਹੈ",
        "manufacturer": "ਨਿਰਮਾਤਾ",
        "strength": "ਤਾਕਤ / ਮਾਤਰਾ",
        "mfg_date": "ਬਣਾਉਣ ਦੀ ਤਾਰੀਖ਼",
        "exp_date": "ਮਿਆਦ ਖ਼ਤਮ ਹੋਣ ਦੀ ਤਾਰੀਖ਼",
        "scanned_on": "ਸਕੈਨ ਮਿਤੀ",
        "not_available": "ਪੈਕਟ 'ਤੇ ਸਪੱਸ਼ਟ ਨਹੀਂ",
        "ai_warning": "AI ਵੱਲੋਂ ਕੱਢੀ ਗਈ ਜਾਣਕਾਰੀ ਗ਼ਲਤ ਹੋ ਸਕਦੀ ਹੈ ਅਤੇ ਇਹ ਪੁਸ਼ਟੀ ਕੀਤੀ ਡਾਕਟਰੀ ਸਲਾਹ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਡਾਕਟਰ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਤੋਂ ਪੁਸ਼ਟੀ ਕਰੋ।",
        "safety_disclaimer": "MediSpeak AI ਸਿਰਫ਼ ਦਵਾਈ ਦੇ ਪੈਕਟ ਦੀ ਲਿਖਤ ਪੜ੍ਹਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ; ਇਹ ਡਾਕਟਰੀ ਸਲਾਹ ਜਾਂ ਨੁਸਖ਼ਾ ਨਹੀਂ ਹੈ।",
        "history_title": "ਤੁਹਾਡਾ ਦਵਾਈ ਇਤਿਹਾਸ",
        "history_subtitle": "ਤੁਹਾਡੀਆਂ ਸਾਰੀਆਂ ਸਕੈਨ ਕੀਤੀਆਂ ਦਵਾਈਆਂ ਇੱਕ ਥਾਂ 'ਤੇ।",
        "scans_saved": "ਸਕੈਨ ਸੁਰੱਖਿਅਤ",
        "search_placeholder": "ਨਾਮ ਨਾਲ ਦਵਾਈ ਲੱਭੋ...",
        "filter_all": "ਸਾਰੇ ਸਕੈਨ",
        "filter_recent": "ਤਾਜ਼ਾ ਸਕੈਨ",
        "filter_expired": "ਮਿਆਦ ਖ਼ਤਮ",
        "filter_soon": "ਛੇਤੀ ਖ਼ਤਮ ਹੋਣ ਵਾਲੀਆਂ",
        "status_valid": "ਮਿਆਦ ਬਾਕੀ",
        "status_soon": "ਛੇਤੀ ਖ਼ਤਮ",
        "status_expired": "ਮਿਆਦ ਖ਼ਤਮ",
        "status_unknown": "ਮਿਆਦ ਤਾਰੀਖ਼ ਉਪਲਬਧ ਨਹੀਂ",
        "view_details": "ਵੇਰਵਾ ਦੇਖੋ",
        "delete_btn": "ਮਿਟਾਓ",
        "scan_again": "ਦੁਬਾਰਾ ਸਕੈਨ ਕਰੋ",
        "back_to_history": "ਇਤਿਹਾਸ 'ਤੇ ਵਾਪਸ ਜਾਓ",
        "empty_title": "ਤੁਹਾਡਾ ਇਤਿਹਾਸ ਇੱਥੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।",
        "empty_desc": "ਆਪਣੀ ਪਹਿਲੀ ਦਵਾਈ ਸਕੈਨ ਕਰੋ ਤਾਂ ਜੋ ਲੋੜ ਪੈਣ 'ਤੇ ਜਾਣਕਾਰੀ ਆਸਾਨੀ ਨਾਲ ਮਿਲ ਸਕੇ।",
        "empty_cta": "ਪਹਿਲੀ ਦਵਾਈ ਸਕੈਨ ਕਰੋ",
        "unnamed_med": "ਅਸਪੱਸ਼ਟ ਦਵਾਈ ਨਾਮ",
    },
}


def init_session_state() -> None:
    defaults = {
        "active_nav": "Dashboard",
        "language": "English",
        "active_image": None,
        "uploader_key": 0,
        "camera_key": 0,
        "scan_result": None,
        "scan_error": False,
        "selected_history_id": None,
        "history_filter": "all",
        "speak_trigger": 0,
        "speak_payload": "",
    }
    for k, v in defaults.items():
        if k not in st.session_state:
            st.session_state[k] = v


def inject_styles() -> None:
    st.markdown(
        """
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Sans+Gurmukhi:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        :root {
            --parrot: #7ED957;
            --parrot-hover: #6EC946;
            --dark-green: #28532A;
            --white: #FFFFFF;
            --soft-green: #F5FAF2;
            --border-green: #DCEAD4;
            --text-main: #202820;
            --text-secondary: #667266;
        }

        html, body, [class*="css"] {
            font-family: 'Plus Jakarta Sans', 'Noto Sans Devanagari', 'Noto Sans Gurmukhi', sans-serif;
            color: var(--text-main);
        }

        .stApp {
            background-color: var(--soft-green);
        }

        /* Hide default Streamlit chrome */
        #MainMenu, footer, header[data-testid="stHeader"] {
            visibility: hidden;
        }

        .block-container {
            padding-top: 1.5rem;
            padding-bottom: 3rem;
            max-width: 1160px;
        }

        /* Side Nav Panel */
        .sidenav-card {
            background: var(--white);
            border: 1px solid var(--border-green);
            border-radius: 20px;
            padding: 1.25rem;
            box-shadow: 0 4px 20px rgba(40, 83, 42, 0.05);
        }

        .brand-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 1.1rem;
        }

        .brand-badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            background: var(--soft-green);
            border: 1.5px solid var(--parrot);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        .brand-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: var(--dark-green);
            letter-spacing: -0.01em;
        }

        .nav-safety-box {
            margin-top: 1rem;
            padding: 0.85rem;
            border-radius: 14px;
            background: var(--soft-green);
            color: var(--text-secondary);
            font-size: 0.82rem;
            line-height: 1.5;
        }

        /* Main Cards */
        .ms-card {
            background: var(--white);
            border: 1px solid var(--border-green);
            border-radius: 20px;
            padding: 1.5rem;
            box-shadow: 0 4px 20px rgba(40, 83, 42, 0.05);
            margin-bottom: 1.15rem;
        }

        .ms-hero-title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--dark-green);
            line-height: 1.2;
            margin: 0 0 0.4rem 0;
        }

        .ms-hero-sub {
            font-size: 1rem;
            color: var(--text-secondary);
            margin: 0;
            line-height: 1.55;
        }

        .med-name-prominent {
            font-size: 1.85rem;
            font-weight: 700;
            color: var(--dark-green);
            line-height: 1.25;
            margin: 0;
        }

        .purpose-box {
            background: var(--soft-green);
            border-left: 4px solid var(--parrot);
            border-radius: 14px;
            padding: 1rem 1.15rem;
            margin: 1rem 0 1.25rem 0;
        }

        .purpose-label {
            font-size: 0.82rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: var(--dark-green);
            margin-bottom: 0.35rem;
        }

        .purpose-text {
            font-size: 1.15rem;
            line-height: 1.65;
            color: var(--text-main);
            margin: 0;
        }

        .meta-tile {
            background: var(--soft-green);
            border: 1px solid var(--border-green);
            border-radius: 14px;
            padding: 0.85rem 1rem;
            height: 100%;
        }

        .meta-label {
            font-size: 0.8rem;
            color: var(--text-secondary);
            margin-bottom: 0.25rem;
        }

        .meta-value {
            font-size: 1.05rem;
            font-weight: 600;
            color: var(--text-main);
        }

        .warning-banner {
            background: #FFFDF5;
            border: 1px solid #F0D98C;
            border-radius: 14px;
            padding: 0.9rem 1.05rem;
            color: #4A3B10;
            font-size: 0.92rem;
            line-height: 1.5;
            margin-top: 1rem;
        }

        .not-sure-card {
            background: var(--white);
            border: 1.5px solid #F0C674;
            border-radius: 20px;
            padding: 1.4rem;
            box-shadow: 0 4px 20px rgba(40, 83, 42, 0.05);
            margin-bottom: 1.15rem;
        }

        .scanning-card {
            background: var(--white);
            border: 1px solid var(--parrot);
            border-radius: 18px;
            padding: 1.25rem;
            text-align: center;
            box-shadow: 0 4px 20px rgba(126, 217, 87, 0.14);
            margin: 1rem 0;
        }

        .scan-bar-wrap {
            width: 100%;
            height: 8px;
            background: var(--soft-green);
            border-radius: 999px;
            overflow: hidden;
            margin: 0.75rem auto 0.5rem auto;
            max-width: 360px;
        }

        .scan-bar-fill {
            width: 45%;
            height: 100%;
            background: var(--parrot);
            border-radius: 999px;
            animation: scanSlide 1.3s ease-in-out infinite;
        }

        @keyframes scanSlide {
            0% { transform: translateX(-80%); }
            50% { transform: translateX(140%); }
            100% { transform: translateX(-80%); }
        }

        .history-card {
            background: var(--white);
            border: 1px solid var(--border-green);
            border-radius: 18px;
            padding: 1.1rem;
            box-shadow: 0 4px 18px rgba(40, 83, 42, 0.04);
            transition: transform 0.16s ease, box-shadow 0.16s ease;
            margin-bottom: 0.9rem;
        }

        .history-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(40, 83, 42, 0.08);
        }

        .status-pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 0.25rem 0.65rem;
            border-radius: 999px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .status-valid { background: #E9F9E2; color: #1E5622; }
        .status-soon { background: #FFF3DC; color: #8A5300; }
        .status-expired { background: #FDE8E8; color: #9B1C1C; }
        .status-unknown { background: #EEF1EE; color: #4F5B4F; }

        .counter-badge {
            display: inline-block;
            background: var(--soft-green);
            border: 1px solid var(--parrot);
            color: var(--dark-green);
            font-weight: 700;
            font-size: 0.9rem;
            padding: 0.4rem 0.9rem;
            border-radius: 999px;
        }

        .footer-disclaimer {
            text-align: center;
            color: var(--text-secondary);
            font-size: 0.85rem;
            line-height: 1.55;
            padding: 0.75rem 1rem;
        }

        /* Primary button styling */
        div.stButton > button[kind="primary"] {
            background-color: var(--parrot);
            color: #152B17;
            border: 1px solid #6AC742;
            font-weight: 700;
            border-radius: 12px;
            min-height: 46px;
        }

        div.stButton > button[kind="primary"]:hover {
            background-color: var(--parrot-hover);
            border-color: #5AB834;
            color: #152B17;
        }

        div.stButton > button {
            border-radius: 12px;
            min-height: 42px;
            font-weight: 600;
        }
        </style>
        """,
        unsafe_allow_html=True,
    )


def trigger_speech(text: str, lang_code: str) -> None:
    """
    Hook for existing speech backend or browser speechSynthesis fallback.
    If you have a custom TTS helper in your project, call it here.
    """
    st.session_state.speak_trigger += 1
    st.session_state.speak_payload = f"{lang_code}::{text}"

    safe_text = text.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ")
    components.html(
        f"""
        <script>
        (function() {{
            if ('speechSynthesis' in window) {{
                window.speechSynthesis.cancel();
                const msg = new SpeechSynthesisUtterance('{safe_text}');
                msg.lang = '{lang_code}';
                msg.rate = 0.92;
                window.speechSynthesis.speak(msg);
            }}
        }})();
        </script>
        """,
        height=0,
    )


def clean_display(value, fallback: str) -> str:
    if value is None:
        return fallback
    s = str(value).strip()
    if not s or s.lower() in {"none", "null", "n/a", "na", "unknown"}:
        return fallback
    return s


def is_uncertain_scan(result: dict) -> bool:
    quality = str(result.get("image_quality") or "").strip().lower()
    med_name = result.get("medicine_name")
    accuracy = result.get("accuracy")
    try:
        acc_val = float(accuracy) if accuracy is not None else None
    except (ValueError, TypeError):
        acc_val = None

    missing_name = med_name is None or str(med_name).strip().lower() in {"", "none", "null"}
    poor_quality = quality in {"blurry", "poor", "unreadable"}
    low_acc = acc_val is not None and acc_val < 40
    return missing_name or (poor_quality and low_acc)


def run_identification(image: Image.Image, t: dict) -> None:
    st.session_state.scan_error = False
    placeholder = st.empty()
    placeholder.markdown(
        f"""
        <div class="scanning-card">
            <div style="font-weight:700; color:#28532A; font-size:1.05rem;">{html.escape(t["scanning_title"])}</div>
            <div class="scan-bar-wrap"><div class="scan-bar-fill"></div></div>
            <div style="color:#667266; font-size:0.9rem;">{html.escape(t["scanning_sub"])}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )
    try:
        result = read_medicines_image(image)
        placeholder.empty()
        if not isinstance(result, dict):
            st.session_state.scan_error = True
            st.session_state.scan_result = None
            return
        st.session_state.scan_result = result
        add_scan_to_history(result, image)
    except Exception:
        placeholder.empty()
        st.session_state.scan_error = True
        st.session_state.scan_result = None


def render_sidenav(t: dict) -> None:
    st.markdown(
        f"""
        <div class="sidenav-card">
            <div class="brand-row">
                <div class="brand-badge">🌿</div>
                <div class="brand-title">{html.escape(t["brand_name"])}</div>
            </div>
        """,
        unsafe_allow_html=True,
    )

    history_count = len(load_history())
    dash_type = "primary" if st.session_state.active_nav == "Dashboard" else "secondary"
    hist_type = "primary" if st.session_state.active_nav == "History" else "secondary"

    if st.button(f"🩺  {t['nav_dashboard']}", key="nav_dash_btn", type=dash_type, use_container_width=True):
        st.session_state.active_nav = "Dashboard"
        st.session_state.selected_history_id = None
        st.rerun()

    if st.button(
        f"🕒  {t['nav_history']} ({history_count})",
        key="nav_hist_btn",
        type=hist_type,
        use_container_width=True,
    ):
        st.session_state.active_nav = "History"
        st.session_state.selected_history_id = None
        st.rerun()

    st.markdown(
        f"""
            <div class="nav-safety-box">{html.escape(t["nav_safety"])}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )


def render_dashboard(t: dict, lang_code: str) -> None:
    # Hero & Language Selector
    st.markdown(
        f"""
        <div class="ms-card">
            <h1 class="ms-hero-title">{html.escape(t["heading"])}</h1>
            <p class="ms-hero-sub">{html.escape(t["subtitle"])}</p>
        </div>
        """,
        unsafe_allow_html=True,
    )

    # Image Upload & Camera Card
    st.markdown('<div class="ms-card">', unsafe_allow_html=True)
    tab_upload, tab_camera = st.tabs([f"📤 {t['upload_tab']}", f"📷 {t['camera_tab']}"])

    with tab_upload:
        uploaded_file = st.file_uploader(
            t["upload_label"],
            type=["jpg", "jpeg", "png", "webp"],
            key=f"uploader_{st.session_state.uploader_key}",
        )
        if uploaded_file is not None:
            st.session_state.active_image = Image.open(uploaded_file)

    with tab_camera:
        camera_photo = st.camera_input(
            t["camera_label"],
            key=f"camera_{st.session_state.camera_key}",
        )
        if camera_photo is not None:
            st.session_state.active_image = Image.open(camera_photo)

    if st.session_state.active_image is not None:
        st.markdown("---")
        img_col, act_col = st.columns([1.15, 1], vertical_alignment="center")
        with img_col:
            st.image(st.session_state.active_image, use_container_width=True)
        with act_col:
            if st.button(f"🔄 {t['replace_btn']}", key="replace_img_btn", use_container_width=True):
                st.session_state.uploader_key += 1
                st.session_state.camera_key += 1
                st.session_state.scan_result = None
                st.session_state.scan_error = False
                st.rerun()

            if st.button(f"🗑️ {t['remove_btn']}", key="remove_img_btn", use_container_width=True):
                st.session_state.active_image = None
                st.session_state.scan_result = None
                st.session_state.scan_error = False
                st.session_state.uploader_key += 1
                st.session_state.camera_key += 1
                st.rerun()

        st.markdown("<div style='height:0.5rem'></div>", unsafe_allow_html=True)
        if st.button(f"✨ {t['identify_btn']}", key="identify_btn", type="primary", use_container_width=True):
            run_identification(st.session_state.active_image, t)

    st.markdown("</div>", unsafe_allow_html=True)

    # Error State with Retry
    if st.session_state.scan_error:
        st.markdown(
            f"""
            <div class="not-sure-card">
                <div style="font-weight:700; color:#9B1C1C; margin-bottom:0.4rem;">{html.escape(t["error_msg"])}</div>
            </div>
            """,
            unsafe_allow_html=True,
        )
        if st.button(f"🔁 {t['retry_btn']}", key="retry_scan_btn", type="primary"):
            if st.session_state.active_image is not None:
                run_identification(st.session_state.active_image, t)
        return

    # Result or "Not Sure" State
    result = st.session_state.scan_result
    if isinstance(result, dict):
        if is_uncertain_scan(result):
            st.markdown(
                f"""
                <div class="not-sure-card">
                    <h3 style="margin:0 0 0.45rem 0; color:#7A4B00;">⚠️ {html.escape(t["not_sure_title"])}</h3>
                    <p style="margin:0; color:#202820; font-size:1rem; line-height:1.6;">{html.escape(t["not_sure_body"])}</p>
                </div>
                """,
                unsafe_allow_html=True,
            )
            return

        med_name = clean_display(result.get("medicine_name"), t["unnamed_med"])
        manufacturer = clean_display(result.get("manufacturer"), t["not_available"])
        strength = clean_display(result.get("strength"), t["not_available"])
        mfg_date = clean_display(result.get("manufacturing_date"), t["not_available"])
        exp_date = clean_display(result.get("expiry_date"), t["not_available"])
        purpose = clean_display(result.get("basic_purpose"), t["not_available"])

        st.markdown('<div class="ms-card">', unsafe_allow_html=True)
        top_left, top_right = st.columns([3, 1], vertical_alignment="center")
        with top_left:
            st.markdown(f'<h2 class="med-name-prominent">{html.escape(med_name)}</h2>', unsafe_allow_html=True)
        with top_right:
            spoken_line = f"{med_name}. {purpose}"
            if st.button(f"🔊 {t['listen_btn']}", key="listen_result_btn", type="primary", use_container_width=True):
                trigger_speech(spoken_line, lang_code)

        st.markdown(
            f"""
            <div class="purpose-box">
                <div class="purpose-label">{html.escape(t["purpose_heading"])}</div>
                <p class="purpose-text">{html.escape(purpose)}</p>
            </div>
            """,
            unsafe_allow_html=True,
        )

        g1, g2 = st.columns(2)
        with g1:
            st.markdown(
                f"""
                <div class="meta-tile">
                    <div class="meta-label">{html.escape(t["manufacturer"])}</div>
                    <div class="meta-value">{html.escape(manufacturer)}</div>
                </div>
                """,
                unsafe_allow_html=True,
            )
        with g2:
            st.markdown(
                f"""
                <div class="meta-tile">
                    <div class="meta-label">{html.escape(t["strength"])}</div>
                    <div class="meta-value">{html.escape(strength)}</div>
                </div>
                """,
                unsafe_allow_html=True,
            )

        st.markdown("<div style='height:0.65rem'></div>", unsafe_allow_html=True)
        g3, g4 = st.columns(2)
        with g3:
            st.markdown(
                f"""
                <div class="meta-tile">
                    <div class="meta-label">{html.escape(t["mfg_date"])}</div>
                    <div class="meta-value">{html.escape(mfg_date)}</div>
                </div>
                """,
                unsafe_allow_html=True,
            )
        with g4:
            st.markdown(
                f"""
                <div class="meta-tile">
                    <div class="meta-label">{html.escape(t["exp_date"])}</div>
                    <div class="meta-value">{html.escape(exp_date)}</div>
                </div>
                """,
                unsafe_allow_html=True,
            )

        st.markdown(
            f"""
            <div class="warning-banner">
                ⚠️ {html.escape(t["ai_warning"])}
            </div>
            """,
            unsafe_allow_html=True,
        )
        st.markdown("</div>", unsafe_allow_html=True)


def render_status_badge(status_key: str, t: dict) -> str:
    mapping = {
        "valid": ("status-valid", "●", t["status_valid"]),
        "expiring_soon": ("status-soon", "●", t["status_soon"]),
        "expired": ("status-expired", "●", t["status_expired"]),
        "unknown": ("status-unknown", "●", t["status_unknown"]),
    }
    css_cls, dot, label = mapping.get(status_key, mapping["unknown"])
    return f'<span class="status-pill {css_cls}"><span>{dot}</span><span>{html.escape(label)}</span></span>'


def render_history_detail(record: dict, t: dict, lang_code: str) -> None:
    st.markdown('<div class="ms-card">', unsafe_allow_html=True)
    if st.button(f"← {t['back_to_history']}", key="back_to_history_btn"):
        st.session_state.selected_history_id = None
        st.rerun()

    st.markdown("<div style='height:0.5rem'></div>", unsafe_allow_html=True)
    med_name = clean_display(record.get("medicine_name"), t["unnamed_med"])
    manufacturer = clean_display(record.get("manufacturer"), t["not_available"])
    strength = clean_display(record.get("strength"), t["not_available"])
    mfg_date = clean_display(record.get("manufacturing_date"), t["not_available"])
    exp_date = clean_display(record.get("expiry_date"), t["not_available"])
    purpose = clean_display(record.get("basic_purpose"), t["not_available"])
    status_key = get_expiry_status(record.get("expiry_date"))

    c_title, c_listen = st.columns([3, 1], vertical_alignment="center")
    with c_title:
        st.markdown(f'<h2 class="med-name-prominent">{html.escape(med_name)}</h2>', unsafe_allow_html=True)
        st.markdown(f"<div style='margin-top:0.35rem'>{render_status_badge(status_key, t)}</div>", unsafe_allow_html=True)
    with c_listen:
        if st.button(f"🔊 {t['listen_btn']}", key="detail_listen_btn", type="primary", use_container_width=True):
            trigger_speech(f"{med_name}. {purpose}", lang_code)

    thumb_uri = image_to_data_uri(record.get("thumbnail_path"))
    if thumb_uri:
        st.markdown(
            f"""
            <div style="margin:1rem 0;">
                <img src="{thumb_uri}" style="max-height:240px; border-radius:14px; border:1px solid #DCEAD4;" />
            </div>
            """,
            unsafe_allow_html=True,
        )

    st.markdown(
        f"""
        <div class="purpose-box">
            <div class="purpose-label">{html.escape(t["purpose_heading"])}</div>
            <p class="purpose-text">{html.escape(purpose)}</p>
        </div>
        """,
        unsafe_allow_html=True,
    )

    d1, d2 = st.columns(2)
    with d1:
        st.markdown(
            f'<div class="meta-tile"><div class="meta-label">{html.escape(t["manufacturer"])}</div><div class="meta-value">{html.escape(manufacturer)}</div></div>',
            unsafe_allow_html=True,
        )
    with d2:
        st.markdown(
            f'<div class="meta-tile"><div class="meta-label">{html.escape(t["strength"])}</div><div class="meta-value">{html.escape(strength)}</div></div>',
            unsafe_allow_html=True,
        )

    st.markdown("<div style='height:0.65rem'></div>", unsafe_allow_html=True)
    d3, d4 = st.columns(2)
    with d3:
        st.markdown(
            f'<div class="meta-tile"><div class="meta-label">{html.escape(t["mfg_date"])}</div><div class="meta-value">{html.escape(mfg_date)}</div></div>',
            unsafe_allow_html=True,
        )
    with d4:
        st.markdown(
            f'<div class="meta-tile"><div class="meta-label">{html.escape(t["exp_date"])}</div><div class="meta-value">{html.escape(exp_date)}</div></div>',
            unsafe_allow_html=True,
        )

    st.markdown(f'<div class="warning-banner">⚠️ {html.escape(t["ai_warning"])}</div>', unsafe_allow_html=True)
    st.markdown("</div>", unsafe_allow_html=True)


def render_history(t: dict, lang_code: str) -> None:
    records = load_history()

    if st.session_state.selected_history_id:
        selected = next((r for r in records if r.get("id") == st.session_state.selected_history_id), None)
        if selected:
            render_history_detail(selected, t, lang_code)
            return
        st.session_state.selected_history_id = None

    # Header + Counter
    st.markdown(
        f"""
        <div class="ms-card">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
                <div>
                    <h2 style="margin:0; color:#28532A; font-size:1.6rem;">🕒 {html.escape(t["history_title"])}</h2>
                    <p style="margin:0.25rem 0 0 0; color:#667266;">{html.escape(t["history_subtitle"])}</p>
                </div>
                <span class="counter-badge">{len(records)} {html.escape(t["scans_saved"])}</span>
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )

    if not records:
        st.markdown(
            f"""
            <div class="ms-card" style="text-align:center; padding:2.2rem 1.5rem;">
                <div style="font-size:2.4rem; margin-bottom:0.5rem;">💊</div>
                <h3 style="margin:0 0 0.45rem 0; color:#28532A;">{html.escape(t["empty_title"])}</h3>
                <p style="margin:0 auto 1.2rem auto; max-width:440px; color:#667266; line-height:1.6;">
                    {html.escape(t["empty_desc"])}
                </p>
            </div>
            """,
            unsafe_allow_html=True,
        )
        _, mid_col, _ = st.columns([1, 2, 1])
        with mid_col:
            if st.button(f"✨ {t['empty_cta']}", key="empty_scan_cta", type="primary", use_container_width=True):
                st.session_state.active_nav = "Dashboard"
                st.rerun()
        return

    # Search & Filter Controls
    st.markdown('<div class="ms-card">', unsafe_allow_html=True)
    search_query = st.text_input(
        t["search_placeholder"],
        placeholder=t["search_placeholder"],
        label_visibility="collapsed",
        key="history_search_input",
    )

    f_cols = st.columns(4)
    filter_options = [
        ("all", t["filter_all"]),
        ("recent", t["filter_recent"]),
        ("expired", t["filter_expired"]),
        ("soon", t["filter_soon"]),
    ]
    for idx, (f_key, f_label) in enumerate(filter_options):
        with f_cols[idx]:
            b_type = "primary" if st.session_state.history_filter == f_key else "secondary"
            if st.button(f_label, key=f"filter_{f_key}", type=b_type, use_container_width=True):
                st.session_state.history_filter = f_key
                st.rerun()
    st.markdown("</div>", unsafe_allow_html=True)

    # Apply search & filters
    filtered = []
    cutoff_recent = datetime.now() - timedelta(days=7)
    for rec in records:
        name_val = (rec.get("medicine_name") or "").lower()
        if search_query and search_query.strip().lower() not in name_val:
            continue

        status = get_expiry_status(rec.get("expiry_date"))
        f_mode = st.session_state.history_filter
        if f_mode == "expired" and status != "expired":
            continue
        if f_mode == "soon" and status != "expiring_soon":
            continue
        if f_mode == "recent":
            try:
                scanned_dt = datetime.fromisoformat(rec.get("scanned_at", ""))
                if scanned_dt < cutoff_recent:
                    continue
            except ValueError:
                pass
        filtered.append(rec)

    # 2-column grid on desktop, stacks naturally on mobile
    for i in range(0, len(filtered), 2):
        row_cols = st.columns(2)
        for j in range(2):
            if i + j >= len(filtered):
                break
            item = filtered[i + j]
            with row_cols[j]:
                med_name = clean_display(item.get("medicine_name"), t["unnamed_med"])
                mfr = clean_display(item.get("manufacturer"), t["not_available"])
                strength = clean_display(item.get("strength"), t["not_available"])
                exp_disp = clean_display(item.get("expiry_date"), t["not_available"])
                scanned_disp = (item.get("scanned_at") or "")[:10]
                status_key = get_expiry_status(item.get("expiry_date"))
                thumb_uri = image_to_data_uri(item.get("thumbnail_path"))

                thumb_html = (
                    f'<img src="{thumb_uri}" style="width:54px; height:54px; object-fit:cover; border-radius:12px; border:1px solid #DCEAD4;" />'
                    if thumb_uri
                    else '<div style="width:54px; height:54px; border-radius:12px; background:#F5FAF2; display:flex; align-items:center; justify-content:center; font-size:1.3rem;">💊</div>'
                )

                st.markdown(
                    f"""
                    <div class="history-card">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.75rem;">
                            <div style="display:flex; gap:0.75rem; align-items:center;">
                                {thumb_html}
                                <div>
                                    <div style="font-weight:700; font-size:1.08rem; color:#28532A;">{html.escape(med_name)}</div>
                                    <div style="font-size:0.86rem; color:#667266;">{html.escape(mfr)} • {html.escape(strength)}</div>
                                </div>
                            </div>
                            {render_status_badge(status_key, t)}
                        </div>
                        <div style="margin-top:0.75rem; font-size:0.84rem; color:#667266; display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.4rem;">
                            <span>{html.escape(t["exp_date"])}: <strong>{html.escape(exp_disp)}</strong></span>
                            <span>{html.escape(t["scanned_on"])}: {html.escape(scanned_disp)}</span>
                        </div>
                    </div>
                    """,
                    unsafe_allow_html=True,
                )

                a1, a2, a3 = st.columns(3)
                with a1:
                    if st.button(f"👁️ {t['view_details']}", key=f"view_{item['id']}", use_container_width=True):
                        st.session_state.selected_history_id = item["id"]
                        st.rerun()
                with a2:
                    if st.button(f"📷 {t['scan_again']}", key=f"again_{item['id']}", use_container_width=True):
                        thumb_p = item.get("thumbnail_path")
                        if thumb_p and os.path.exists(thumb_p):
                            st.session_state.active_image = Image.open(thumb_p)
                        st.session_state.scan_result = None
                        st.session_state.scan_error = False
                        st.session_state.active_nav = "Dashboard"
                        st.rerun()
                with a3:
                    if st.button(f"🗑️ {t['delete_btn']}", key=f"del_{item['id']}", use_container_width=True):
                        delete_scan_from_history(item["id"])
                        st.rerun()


def main() -> None:
    init_session_state()
    inject_styles()

    t = UI_TEXT[st.session_state.language]
    lang_code = LANGUAGES[st.session_state.language]["code"]

    # Top language bar inside main canvas
    _, lang_col = st.columns([3, 1.3], vertical_alignment="center")
    with lang_col:
        chosen_lang = st.selectbox(
            t["lang_label"],
            options=list(LANGUAGES.keys()),
            index=list(LANGUAGES.keys()).index(st.session_state.language),
            format_func=lambda x: LANGUAGES[x]["label"],
            label_visibility="collapsed",
            key="lang_selector",
        )
        if chosen_lang != st.session_state.language:
            st.session_state.language = chosen_lang
            st.rerun()

    nav_col, main_col = st.columns([1.15, 2.85], gap="large")
    with nav_col:
        render_sidenav(t)

    with main_col:
        if st.session_state.active_nav == "History":
            render_history(t, lang_code)
        else:
            render_dashboard(t, lang_code)

        st.markdown(
            f'<div class="footer-disclaimer">{html.escape(t["safety_disclaimer"])}</div>',
            unsafe_allow_html=True,
        )


if __name__ == "__main__":
    main()
