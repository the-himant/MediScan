# 💊 MediScan AI — Smart Medicine Packaging Reader

**MediScan AI** is an AI-powered medicine packaging reader designed to help users understand the information printed on medicine packages. By uploading or scanning a medicine image, users can extract important details such as medicine name, manufacturer, strength, manufacturing date, expiry date, and basic purpose.

The application uses AI to make medicine packaging information easier to read and understand, with multilingual support for English, Hindi, and Punjabi.

> **Our goal:** Make medicine packaging information more accessible, understandable, and convenient for everyone.

---

## ✨ Features

### 📸 AI-Powered Medicine Scanning
- Upload or capture an image of a medicine package.
- Extract visible medicine information using Google's Gemini AI.
- Identify the medicine name and manufacturer.
- Read medicine strength and basic purpose.
- Extract manufacturing and expiry dates.
- Display extracted information in an organized format.

### 🌐 Multilingual Support
Understand medicine information in multiple languages:
- English
- Hindi
- Punjabi

### 📚 Medicine Scan History
- Automatically save previous medicine scans.
- View previously scanned medicines.
- Search saved records by medicine name.
- Filter records by:
  - All scans
  - Recently scanned
  - Expired medicines
  - Expiring soon
- View detailed information about previous scans.
- Delete individual records or clear saved history.

**Note:** Scan history is stored locally in the browser using LocalStorage. No database is required for this feature.

### 🔊 Text-to-Speech
Listen to medicine information using speech functionality, making the information easier to access.

### 🎨 User-Friendly Interface
- Clean and modern dashboard.
- Responsive layout for different screen sizes.
- Simple navigation between Dashboard and History.
- Easy-to-understand medicine information cards.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Python | Backend development |
| FastAPI | API development |
| Google Gemini AI | AI-powered image understanding |
| HTML5 | Frontend structure |
| CSS3 | Styling and responsive design |
| JavaScript | Frontend functionality |
| Pillow (PIL) | Image processing |

---

## ⚙️ How It Works

1. **Upload Medicine Image:** The user uploads or captures a medicine package image.
2. **Image Processing:** The backend receives and processes the uploaded image.
3. **AI Analysis:** The image is sent to Google's Gemini AI for analysis.
4. **Information Extraction:** The AI extracts visible medicine packaging details.
5. **Display Results:** The extracted information is displayed on the dashboard.
6. **Save History:** The scan record is saved in browser LocalStorage.
7. **Access Anytime:** Users can revisit, search, filter, and manage their previous scans through the History page.

---

## 📂 Project Structure

```text
MediScan-AI/
│
├── backend/
│   ├── main.py
│   ├── config.py
│   ├── requirements.txt
│   └── ...
│
├── dashboard/
│   ├── dashboard.html
│   ├── dashboard.js
│   └── shared.css
│
├── history/
│   ├── history.html
│   ├── history.css
│   └── js/
│       ├── shared.js
│       └── history.js
│
├── assets/
│   └── ...
│
├── .env
├── .gitignore
└── README.md
```

*The structure above is illustrative. Adjust filenames and folders to match your actual repository.*

---

## 🚀 Getting Started

Follow these steps to run MediScan AI locally.

### 1. Clone the Repository

```bash
git clone https://github.com/the-himant/MediScan
```

```bash
cd MediScan-AI
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate it:

**Windows:**
```bash
venv\Scripts\activate
```

**macOS / Linux:**
```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Your Gemini API Key

Create a configuration file or environment variable setup according to your backend's `config.py`.

Example:

```python
API_KEY = "AQ.Ab8RN6KOChpuTv6ibtj8z3zooQ6X0HQ_Wt2QiR0arPmTZWBeOw"
MODEL_NAME = "gemini-3.5-flash-lite"
```

**Important:** Never upload your API key or other private credentials to GitHub.

### 5. Start the Backend

If your FastAPI application entry point is `main.py`, run:

```bash
uvicorn main:app --reload
```

If it is inside a backend directory, run the command from the appropriate project root or backend directory.

### 6. Open the Frontend

Open the dashboard HTML file using a local development server and ensure the frontend API configuration points to your running backend.

---

## 🔐 Privacy & Data Storage

- Medicine scan history is stored in browser LocalStorage.
- No database is required for local scan-history storage.
- The Gemini API is used to analyze uploaded medicine images.
- API credentials should remain private and must not be exposed in frontend code.
- Clearing browser storage may remove locally saved scan records.

---

## ⚠️ Medical Disclaimer

MediScan AI is an informational tool designed to read visible medicine packaging.

- AI-generated information may contain errors.
- Medicine details should always be verified against the original packaging.
- The application does not diagnose medical conditions.
- It does not prescribe medicines or recommend dosages.
- Always consult a qualified doctor or pharmacist before making medical decisions.

**MediScan AI is not a replacement for professional medical advice.**

---

## 🔮 Future Improvements

Some planned enhancements include:

- [ ] Cloud-based medicine scan history.
- [ ] Database integration.
- [ ] Improved medicine recognition accuracy.
- [ ] Better handling of blurry and low-quality images.
- [ ] Medicine reminders and expiry notifications.
- [ ] Advanced voice-based interaction.
- [ ] More regional language support.
- [ ] Export medicine scan history as PDF.

---

## 👨‍💻 Project Purpose

MediScan AI explores how Artificial Intelligence can make everyday information more accessible.

The project combines AI-powered image understanding, backend API development, frontend technologies, and local data storage to create a practical application for understanding medicine packaging.

---

🏆 Hackathon Project

MediScan AI is a collaborative team project developed as part of the Code Fusion Hackathon.

Our team worked together to design and develop an AI-powered solution that makes medicine packaging information easier to access and understand.

Through this project, we aim to combine Artificial Intelligence, web development, and practical problem-solving to address a real-world challenge.

Built with teamwork, creativity, and innovation.

if you are from watching this for evaluation process. Please use this  `GEMINI_API_KEY=AQ.Ab8RN6KOChpuTv6ibtj8z3zooQ6X0HQ_Wt2QiR0arPmTZWBeOw`

Team Member:-
Built with [@jobanpreetsinghphull-cloud](https://github.com/jobanpreetsinghphull-cloud), Mrigakshi Sandal & [@sharma-coder2008](https://github.com/sharma-coder2008) 

## ⭐ Support

If you find this project interesting, consider giving the repository a **Star ⭐** on GitHub.

**MediScan AI — Making Medicine Information Easier to Understand.**
