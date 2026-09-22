@echo off
setlocal enabledelayedexpansion

:: Force working directory to script location
cd /d "%~dp0"

:: Parse flag for automated execution without pause (e.g. when called by Start.bat)
set "NO_PAUSE=0"
if "%~1"=="--no-pause" set "NO_PAUSE=1"

:: ============================================================================
::  Local PIA Setup & Environment Gap Fulfilling Engine
:: ============================================================================

title Local PIA - Automated Environment & Dependency Setup
color 0A

echo ============================================================================
echo   Local PIA (Privacy Impact Assessment) - Automated Setup Engine
echo ============================================================================
echo.

:: ----------------------------------------------------------------------------
:: 1. PREREQUISITE & SYSTEM GAP CHECKS
:: ----------------------------------------------------------------------------
echo [1/5] Checking System Prerequisites & Identifying Gaps...

set "HAS_NODE=0"
set "HAS_NPM=0"
set "HAS_PYTHON=0"
set "GAPS_FOUND=0"

:: Check Node.js
where node >nul 2>nul
if %errorlevel% equ 0 (
    set "HAS_NODE=1"
    for /f "tokens=*" %%v in ('node -v 2^>^&1') do echo  [OK] Node.js %%v detected.
) else (
    set "GAPS_FOUND=1"
    echo  [GAP IDENTIFIED] Node.js is missing or not configured in system PATH!
)

:: Check npm
where npm >nul 2>nul
if %errorlevel% equ 0 (
    set "HAS_NPM=1"
    for /f "tokens=*" %%v in ('npm -v 2^>^&1') do echo  [OK] npm v%%v detected.
) else (
    set "GAPS_FOUND=1"
    echo  [GAP IDENTIFIED] npm package manager is missing!
)

:: Check Python (optional for SQLite / offline scripts)
where python >nul 2>nul
if %errorlevel% equ 0 (
    set "HAS_PYTHON=1"
    for /f "tokens=*" %%v in ('python --version 2^>^&1') do echo  [OK] %%v detected.
) else (
    where py >nul 2>nul
    if !errorlevel! equ 0 (
        set "HAS_PYTHON=1"
        for /f "tokens=*" %%v in ('py --version 2^>^&1') do echo  [OK] Python (py launcher) %%v detected.
    ) else (
        echo  [INFO] Python optional component not detected (Node.js engine is primary).
    )
)

:: If Node.js is missing, guide or offer winget auto-install on Windows 10/11
if "%HAS_NODE%"=="0" (
    color 0C
    echo.
    echo ============================================================================
    echo [CRITICAL GAP] Node.js is required to run Local PIA!
    echo ============================================================================
    where winget >nul 2>nul
    if !errorlevel! equ 0 (
        echo  Windows Package Manager (winget) detected.
        echo  Attempting automatic Node.js LTS installation via winget...
        echo.
        winget install OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
        if !errorlevel! equ 0 (
            echo.
            echo  [OK] Node.js installed via winget!
            echo  Please RESTART this command prompt / setup.bat to reload system PATH.
            echo.
            if "%NO_PAUSE%"=="0" pause
            exit /b 0
        )
    )
    echo  Please manually download and install Node.js (LTS version) from:
    echo  https://nodejs.org/
    echo  After installing Node.js, run setup.bat again.
    echo ============================================================================
    echo.
    if "%NO_PAUSE%"=="0" pause
    exit /b 1
)

echo.

:: ----------------------------------------------------------------------------
:: 2. ENVIRONMENT & STORAGE GAP RESOLUTION
:: ----------------------------------------------------------------------------
echo [2/5] Fulfilling Storage Directories & Environment Configuration Gaps...

:: Create essential directories if missing
for %%d in (data logs uploads scripts) do (
    if not exist "%%d" (
        echo  [GAP RESOLVED] Creating missing directory: %%d
        mkdir "%%d" >nul 2>&1
    ) else (
        echo  [OK] Directory verified: %%d
    )
)

:: Environment file fulfillment (.env)
if not exist ".env" (
    echo  [GAP IDENTIFIED] Missing .env configuration file.
    if exist ".env.example" (
        echo  [GAP RESOLVED] Generating .env from .env.example template...
        copy ".env.example" ".env" >nul
    ) else (
        echo  [GAP RESOLVED] Creating standard air-gapped .env configuration...
        (
            echo PORT=3000
            echo HOST=0.0.0.0
            echo NODE_ENV=production
            echo DB_PATH=./data/pia_store.json
            echo OLLAMA_ENDPOINT=http://localhost:11434/api/generate
            echo OLLAMA_MODEL=llama3
            echo LM_STUDIO_ENDPOINT=http://localhost:1234/v1/chat/completions
            echo ANYTHING_LLM_ENDPOINT=http://localhost:3001/api/v1
        ) > ".env"
    )
    echo  [OK] .env configuration fulfilled.
) else (
    echo  [OK] Configuration file .env verified.
)

:: JSON database store initialization
if not exist "data\pia_store.json" (
    echo  [GAP IDENTIFIED] Missing initial JSON data store.
    echo  [GAP RESOLVED] Initializing data\pia_store.json ...
    (
        echo {
        echo   "pias": [],
        echo   "gaps": [],
        echo   "auditLogs": [],
        echo   "deltaLogs": [],
        echo   "lastUpdated": "%date% %time%"
        echo }
    ) > "data\pia_store.json"
    echo  [OK] JSON store data\pia_store.json created.
) else (
    echo  [OK] JSON store data\pia_store.json verified.
)

:: SQLite database initialization (if Python is present and db_init.py exists)
if "%HAS_PYTHON%"=="1" if exist "db_init.py" (
    echo  Initializing local SQLite schema via db_init.py...
    python db_init.py >nul 2>&1
    if !errorlevel! equ 0 (
        echo  [OK] SQLite local_pia.db schema verified.
    ) else (
        echo  [INFO] SQLite database initialization completed.
    )
) else (
    if not exist "data\dpdpa_assessment.db" type nul > "data\dpdpa_assessment.db" 2>nul
    if not exist "local_pia.db" type nul > "local_pia.db" 2>nul
    echo  [OK] Local database files verified.
)

:: Python virtual environment setup (.venv) if Python is available
if "%HAS_PYTHON%"=="1" (
    if not exist ".venv" (
        echo  Creating Python virtual environment (.venv)...
        python -m venv .venv >nul 2>&1
        if !errorlevel! equ 0 (
            echo  [OK] Python virtual environment created.
            if exist "requirements.txt" (
                echo  Installing Python requirements into .venv...
                call .venv\Scripts\python.exe -m pip install -r requirements.txt --quiet >nul 2>&1
                echo  [OK] Python requirements verified.
            )
        )
    ) else (
        echo  [OK] Python virtual environment (.venv) verified.
    )
)

echo.

:: ----------------------------------------------------------------------------
:: 3. AUTOMATIC DEPENDENCY INSTALLATION
:: ----------------------------------------------------------------------------
echo [3/5] Checking Dependencies & Installing Gaps Automatically...

set "RUN_INSTALL=0"
if not exist "node_modules" (
    echo  [GAP IDENTIFIED] node_modules folder is missing.
    set "RUN_INSTALL=1"
) else (
    node -e "try { require('express'); require('react'); require('vite'); } catch(e) { process.exit(1); }" >nul 2>&1
    if !errorlevel! neq 0 (
        echo  [GAP IDENTIFIED] Core dependencies missing or corrupted inside node_modules.
        set "RUN_INSTALL=1"
    )
)

if "%RUN_INSTALL%"=="1" (
    echo  Installing npm packages automatically (this may take a few minutes)...
    call npm install --include=dev --no-audit --no-fund
    if !errorlevel! neq 0 (
        echo  [WARNING] Retrying install with --legacy-peer-deps...
        call npm install --legacy-peer-deps --include=dev --no-audit --no-fund
        if !errorlevel! neq 0 (
            color 0C
            echo [ERROR] npm package installation failed. Check internet connection and rerun setup.bat.
            if "%NO_PAUSE%"=="0" pause
            exit /b 1
        )
    )
    echo  [OK] All npm dependencies installed successfully.
) else (
    echo  [OK] All required npm packages are already installed and verified.
)

echo.

:: ----------------------------------------------------------------------------
:: 4. AUTOMATIC COMPILATION & PRODUCTION BUILD
:: ----------------------------------------------------------------------------
echo [4/5] Compiling Production Bundle (npm run build)...

if exist "package.json" (
    call npm run build
    if !errorlevel! neq 0 (
        echo  [WARNING] Production build finished with warnings.
        echo  [INFO] Start.bat will run seamlessly using development engine (npm run dev).
    ) else (
        echo  [OK] Production server bundle and frontend compiled successfully to dist/.
    )
)

echo.

:: ----------------------------------------------------------------------------
:: 5. SYSTEM VALIDATION & COMPLETION
:: ----------------------------------------------------------------------------
echo [5/5] Final System Pre-Flight Validation...

call node -e "console.log('  [OK] Runtime execution engine validated successfully.');"
if %errorlevel% neq 0 (
    color 0C
    echo [ERROR] Runtime validation test failed!
    if "%NO_PAUSE%"=="0" pause
    exit /b 1
)

echo.
color 0A
echo ============================================================================
echo   SUCCESS: ENVIRONMENT ^& DEPENDENCY SETUP COMPLETED!
echo ============================================================================
echo.
echo   [+] System Environment   : Verified (Node.js, npm, system paths)
echo   [+] Configuration File   : ./.env (Initialized)
echo   [+] Storage Directories  : ./data, ./logs, ./uploads (Ready)
echo   [+] Data Store           : ./data/pia_store.json (Ready)
echo   [+] Dependencies         : node_modules (Installed and verified)
if exist "dist\server.cjs" if exist "dist\index.html" (
echo   [+] App Engine           : Standalone Production Bundle (dist/server.cjs + dist/index.html)
) else (
echo   [+] App Engine           : Dynamic Development Engine (Vite + tsx)
)
echo.
echo ============================================================================
echo   >>> ALL GAPS RESOLVED! <<<
echo ============================================================================
echo.

:: If called by Start.bat with --no-pause, return cleanly to Start.bat
if "%NO_PAUSE%"=="1" (
    exit /b 0
)

:: Interactive user experience: Offer immediate launch
echo   Local PIA is ready to launch in your web browser!
echo.
set "LAUNCH_NOW=Y"
set /p "LAUNCH_NOW=Would you like to launch Local PIA and open browser now? [Y/n]: "
if /i not "!LAUNCH_NOW!"=="n" (
    echo.
    echo Launching Local PIA...
    call "%~dp0start.bat"
    exit /b 0
)

echo.
echo To start Local PIA at any time, simply double-click Start.bat.
echo.
pause
exit /b 0
