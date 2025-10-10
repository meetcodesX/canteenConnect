# 🚀 Quick Start Guide - AI Canteen Management System

## 📋 Prerequisites
Make sure you have these installed:
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher) 
- **MongoDB** (running on localhost:27017)
- **Git** (for updates)

## 🎯 One-Click Start (Easiest Method)

### Option 1: Use the Batch File
1. **Double-click** `START_SYSTEM.bat`
2. **Wait** for all services to start (about 30-60 seconds)
3. **Open your browser** and go to `http://localhost:3000` (or 3001/3002)

---

## 🔧 Manual Start (Step by Step)

### Step 1: Start MongoDB
```bash
# Windows (if installed as service)
net start MongoDB

# Or if running manually
mongod
```

### Step 2: Start Backend Server
```bash
cd canteen-connect/server
npm install
npm run dev
```

### Step 3: Start Frontend
```bash
cd canteen-connect/client
npm install
npm run dev
```

### Step 4: Start AI Crowd Detector
```bash
cd canteen-connect/ai_module
pip install -r requirements.txt
python crowd_detector.py
```

---

## 🌐 Access Your Application

- **Frontend**: `http://localhost:3000` (or 3001/3002)
- **Backend API**: `http://localhost:5000`
- **AI Detection**: OpenCV window will open automatically

---

## 🛠️ Troubleshooting

### If Frontend shows "Page Not Found":
- Check if backend is running on port 5000
- Check if MongoDB is running

### If Crowd Count shows 0 or wrong numbers:
- Check if AI detector is running
- Make sure webcam is working
- Check the OpenCV window for detection

### If MongoDB connection fails:
- Start MongoDB service: `net start MongoDB`
- Or install MongoDB if not installed

### If Python dependencies missing:
```bash
cd canteen-connect/ai_module
pip install -r requirements.txt
```

---

## 📁 File Structure
```
canteen-connect/
├── START_SYSTEM.bat          # One-click start
├── server/                   # Backend (Node.js)
├── client/                   # Frontend (React)
├── ai_module/               # AI Detection (Python)
└── QUICK_START_GUIDE.md     # This file
```

---

## 🎮 How to Use

1. **Login**: Use any username/password (creates account automatically)
2. **View Dashboard**: See real-time crowd count and menu
3. **AI Detection**: The system automatically detects people via webcam
4. **Menu Management**: Add/rate menu items (admin features)

---

## 🔄 Stopping the System

- **Close all terminal windows** (Backend, Frontend, AI Detector)
- **Stop MongoDB**: `net stop MongoDB` (if running as service)

---

## 📞 Need Help?

- Check the logs in each terminal window
- Make sure all ports (3000, 5000, 27017) are available
- Ensure webcam permissions are granted
- Verify all dependencies are installed

**Happy Canteen Managing! 🍽️**

