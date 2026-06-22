@echo off
title RankNex AI - Development Server
echo ===================================================
echo             RankNex AI Development Server          
echo ===================================================
echo.
echo Starting dev server... (http://localhost:3000)
echo.
npm run dev
if %errorlevel% neq 0 (
  echo.
  echo Server stopped or failed to start.
  pause
)
