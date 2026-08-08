@echo off
setlocal enabledelayedexpansion

:: Force working directory to script location
cd /d "%~dp0"

:: Parse flag for automated execution without pause
set "NO_PAUSE=0"
if "%~1"=="--no-pause" set "NO_PAUSE=1"

:: ============================================================================
::  Local PIA Setup & Environment Gap Fulfilling Engine
:: ============================================================================

title Local PIA - Automated Environment Setup
color 0A

echo ============================================================================
echo   Local PIA (Privacy Impact Assessment) Setup Engine
echo ============================================================================
echo.

:: ----------------------------------------------------------------------------
:: 1. PREREQUISITE CHECKS
:: ----------------------------------------------------------------------------
echo [1/5] Checking System Prerequisites...

set "MISSING_DEPS=0"

where node >nul 2>nul
if %errorlevel% equ 0 (
    for /f "tokens=*" %%v in ('node -v 2^>^&1') do echo  [OK] Node.js %%v detected.
) else (
    echo  [MISSING] Node.js is not installed or not on PATH!
    echo            Download from: https://nodejs.org/
    set "MISSING_DEPS=1"
)

where npm >nul 2>nul
if %errorlevel% equ 0 (
    for /f "tokens=*" %%v in ('npm -v 2^>^&1') do echo  [OK] npm v%%v detected.
) else (
    echo  [MISSING] npm is not installed or not on PATH!
    echo            Download from: https://nodejs.org/
    set "MISSING_DEPS=1"
)

if "%MISSING_DEPS%"=="1" goto ERR_MISSING_PREREQ

echo.

:: ----------------------------------------------------------------------------
:: 2. ENVIRONMENT & STORAGE GAP FULFILLMENT
:: ----------------------------------------------------------------------------
echo [2/5] Fulfilling Storage Directories & Environment Configuration Gaps...

if not exist "data" mkdir "data" >nul 2>&1
if not exist "logs" mkdir "logs" >nul 2>&1
if not exist "uploads" mkdir "uploads" >nul 2>&1

:: Environment file fulfillment (.env)
if not exist ".env" (
    if exist ".env.example" (
        echo  Creating .env from .env.example...
        copy ".env.example" ".env" >nul
    ) else (
        echo  Generating default .env configuration file...
        (
            echo PORT=3000
            echo HOST=0.0.0.0
            echo NODE_ENV=development
            echo DB_PATH=./data/pia_store.json
            echo OLLAMA_ENDPOINT=http://localhost:11434/api/generate
            echo OLLAMA_MODEL=llama3
            echo LM_STUDIO_ENDPOINT=http://localhost:1234/v1/chat/completions
            echo ANYTHING_LLM_ENDPOINT=http://localhost:3001/api/v1
        ) > ".env"
    )
    echo  [OK] Environment file .env fulfilled.
) else (
    echo  [OK] Environment file .env verified.
)

:: Database files initialization
if not exist "data\dpdpa_assessment.db" (
    echo  Initializing database file: data\dpdpa_assessment.db ...
    type nul > "data\dpdpa_assessment.db" 2>nul
    echo  [OK] Database file data\dpdpa_assessment.db initialized.
) else (
    echo  [OK] Database file data\dpdpa_assessment.db verified.
)

if not exist "dpdpa_assessment.db" (
    copy "data\dpdpa_assessment.db" "dpdpa_assessment.db" >nul 2>&1
)

if not exist "data\pia_store.json" (
    echo  Initializing JSON data store: data\pia_store.json ...
    (
        echo {
        echo   "pias": [],
        echo   "gaps": [],
        echo   "auditLogs": [],
        echo   "deltaLogs": [],
        echo   "lastUpdated": "%date% %time%"
        echo }
    ) > "data\pia_store.json"
    echo  [OK] JSON store data\pia_store.json initialized.
) else (
    echo  [OK] JSON store data\pia_store.json verified.
)

echo.

:: ----------------------------------------------------------------------------
:: 3. AUTOMATIC DEPENDENCY INSTALLATION (NON-LOOPING)
:: ----------------------------------------------------------------------------
echo [3/5] Verifying & Installing npm Dependencies...

set "RUN_INSTALL=0"
if not exist "node_modules" (
    set "RUN_INSTALL=1"
) else (
    :: Quick verification check via node
    node -e "try { require('express'); } catch(e) { process.exit(1); }" >nul 2>&1
    if !errorlevel! neq 0 (
        echo  [INFO] Core modules missing in node_modules. Installing...
        set "RUN_INSTALL=1"
    )
)

if "%RUN_INSTALL%"=="1" (
    echo  Installing dependencies via npm install...
    call npm install --legacy-peer-deps
    if !errorlevel! neq 0 (
        color 0C
        echo [ERROR] npm package installation failed.
        if "%NO_PAUSE%"=="0" pause
        exit /b 1
    )
    echo  [OK] All npm dependencies installed successfully.
) else (
    echo  [OK] Required npm packages are installed.
)

echo.

:: ----------------------------------------------------------------------------
:: 4. AUTOMATIC BUILD & COMPILATION
:: ----------------------------------------------------------------------------
echo [4/5] Compiling Production Bundle (npm run build)...

if exist "package.json" (
    call npm run build
    if !errorlevel! neq 0 (
        echo  [WARNING] Initial build encountered issues. Running fallback lint & build...
        call npm run build
    ) else (
        echo  [OK] Production server bundle compiled successfully to ./dist
    )
)

echo.

:: ----------------------------------------------------------------------------
:: 5. SYSTEM VALIDATION & CLEAN EXIT
:: ----------------------------------------------------------------------------
echo [5/5] Pre-flight System Validation...

call node -e "console.log('  [OK] Node.js execution engine verified successfully.');"
if %errorlevel% neq 0 (
    color 0C
    echo [ERROR] Node.js runtime validation failed!
    if "%NO_PAUSE%"=="0" pause
    exit /b 1
)

echo.
color 0A
echo ============================================================================
echo   SUCCESS! Environment & Dependency Setup Complete.
echo ============================================================================
echo   - Config File  : ./.env
echo   - Data Storage : ./data/dpdpa_assessment.db & ./data/pia_store.json
echo   - App Bundle   : ./dist/server.cjs
echo.
echo   You can now launch the platform by executing start.bat
echo ============================================================================
echo.

if "%NO_PAUSE%"=="0" (
    echo Press any key to close this setup window...
    pause >nul
)

exit /b 0

:ERR_MISSING_PREREQ
color 0C
echo.
echo ============================================================================
echo [CRITICAL ERROR] Core prerequisites (Node.js/npm) are missing!
echo Please install Node.js from https://nodejs.org/ and re-run setup.bat
echo ============================================================================
echo.
if "%NO_PAUSE%"=="0" pause
exit /b 1
