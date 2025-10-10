@echo off
echo ========================================
echo    AI-Powered Canteen Management System
echo ========================================
echo.

echo Starting MongoDB...
net start MongoDB
timeout /t 3 /nobreak > nul

echo.
echo Starting Backend Server...
start "Backend Server" cmd /k "cd /d "%~dp0server" && npm run dev"

echo.
echo Starting Frontend...
start "Frontend" cmd /k "cd /d "%~dp0client" && npm run dev"

echo.
echo Starting AI Crowd Detector...
start "AI Crowd Detector" cmd /k "cd /d "%~dp0ai_module" && python crowd_detector.py"

echo.
echo ========================================
echo All services are starting...
echo.
echo Frontend: http://localhost:3000 (or 3001/3002)
echo Backend:  http://localhost:5000
echo.
echo Press any key to close this window
pause > nul
