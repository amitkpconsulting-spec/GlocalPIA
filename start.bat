@echo off
setlocal enabledelayedexpansion

:: Force working directory to script location
cd /d "%~dp0"

:: ============================================================================
::  Local PIA (Privacy Impact Assessment & Governance Engine) - Server Launcher
:: ============================================================================

title Local PIA Platform - Server Launcher
color 0B

echo ============================================================================
echo   Local PIA (Privacy Impact Assessment & Governance Engine) Launcher
echo ============================================================================
echo.

:: ----------------------------------------------------------------------------
:: 1. PRE-FLIGHT ENVIRONMENT & GAP CHECK
:: ----------------------------------------------------------------------------
echo [1/4] Running Pre-flight Environment Checks...

set "NEEDS_SETUP=0"

if not exist "node_modules" set "NEEDS_SETUP=1"
if not exist ".env" set "NEEDS_SETUP=1"
if not exist "dist\server.cjs" set "NEEDS_SETUP=1"

if not exist "data" mkdir "data" >nul 2>&1
if not exist "logs" mkdir "logs" >nul 2>&1
if not exist "uploads" mkdir "uploads" >nul 2>&1

if "%NEEDS_SETUP%"=="1" (
    color 0E
    echo.
    echo ============================================================================
    echo [ACTION REQUIRED] Prerequisites or compiled bundles are missing.
    echo Fulfilling environment automatically via setup.bat...
    echo ============================================================================
    echo.
    call "%~dp0setup.bat" --no-pause
    if !errorlevel! neq 0 (
        color 0C
        echo [ERROR] Setup failed. Exiting launcher.
        pause
        exit /b 1
    )
)

echo  [OK] Pre-flight checks passed successfully.
echo.

:: ----------------------------------------------------------------------------
:: 2. RUNTIME MODE SELECTION (DOCKER vs NODE.JS)
:: ----------------------------------------------------------------------------
set "HAS_DOCKER=0"
set "HAS_NODE=0"

where docker >nul 2>nul && set "HAS_DOCKER=1"
where node >nul 2>nul && set "HAS_NODE=1"

set "RUN_CHOICE="

:: Check CLI arguments
if "%~1"=="1" set "RUN_CHOICE=1"
if "%~1"=="2" set "RUN_CHOICE=2"
if "%~1"=="--docker" set "RUN_CHOICE=1"
if "%~1"=="--node" set "RUN_CHOICE=2"

if "%RUN_CHOICE%"=="" (
    echo Select Runtime Execution Option:
    echo.
    echo   [1] Run from Docker      (Docker Compose container orchestration)
    echo   [2] Run from Node.js     (Direct local Node.js server)
    echo.
    choice /C 12 /T 10 /D 1 /M "Select runtime mode (Default is 1 in 10s):"
    if !errorlevel! equ 1 set "RUN_CHOICE=1"
    if !errorlevel! equ 2 set "RUN_CHOICE=2"
)

if "%RUN_CHOICE%"=="1" goto LAUNCH_DOCKER
if "%RUN_CHOICE%"=="2" goto LAUNCH_NODE

echo [INFO] Unrecognized choice, defaulting to Docker mode...
goto LAUNCH_DOCKER


:: ============================================================================
:: OPTION 1: RUN FROM DOCKER
:: ============================================================================
:LAUNCH_DOCKER
echo.
echo ============================================================================
echo [OPTION 1] Launching Local Server via Docker Compose...
echo ============================================================================

if "%HAS_DOCKER%"=="0" (
    color 0C
    echo [ERROR] Docker was not found on your system PATH!
    echo Please install Docker Desktop or choose Option 2 (Run from Node.js).
    echo.
    pause
    exit /b 1
)

echo [2/4] Building and Orchestrating Docker Containers...
docker compose up -d --build
if %errorlevel% neq 0 (
    color 0C
    echo [ERROR] Docker Compose failed to start containers. Please verify Docker Desktop is running.
    pause
    exit /b 1
)

echo.
echo [3/4] Registering Automatic Browser Opener...
timeout /t 2 >nul
start "" "http://localhost:3000"

echo.
echo [4/4] Local Server Active via Docker!
echo ============================================================================
echo   SERVER URL : http://localhost:3000
echo   STATUS     : Running in background containers
echo ============================================================================
echo.
echo Press any key to cleanly stop Docker container services...
pause >nul
echo.
echo Stopping Docker containers...
docker compose down
goto END


:: ============================================================================
:: OPTION 2: RUN FROM NODE.JS
:: ============================================================================
:LAUNCH_NODE
echo.
echo ============================================================================
echo [OPTION 2] Launching Local Server via Node.js...
echo ============================================================================

if "%HAS_NODE%"=="0" (
    color 0C
    echo [ERROR] Node.js was not found on your system PATH!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [2/4] Checking Local Port Availability...

set "PORT=3000"
set "HOST=localhost"

:: Fast node check to get open port
for /f "tokens=*" %%P in ('node -e "const net=require('net');const check=(p)=>{const s=net.createServer();s.once('error',()=>check(p+1));s.once('listening',()=>s.close(()=>console.log(p)));s.listen(p);};check(3000);" 2^>nul') do (
    if not "%%P"=="" set "PORT=%%P"
)

echo  [OK] Server Port Allocated: %PORT%

echo.
echo [3/4] Registering Automatic Local Browser Launcher...

start "Local PIA Browser Opener" /min powershell -NoProfile -ExecutionPolicy Bypass -Command "^
    $url = 'http://localhost:%PORT%'; ^
    $i = 0; ^
    while ($i -lt 30) { ^
        Start-Sleep -Seconds 1; ^
        try { ^
            $res = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop; ^
            if ($res.StatusCode -eq 200) { ^
                Start-Process $url; ^
                break; ^
            } ^
        } catch { } ^
        $i++; ^
    }"

echo.
echo [4/4] Starting Local Server Engine...
echo ============================================================================
echo   LOCAL PIA SERVER RUNNING AT: http://localhost:%PORT%
echo ============================================================================
echo   - Web Console & API Endpoint : http://localhost:%PORT%
echo   - Local Database Store      : ./data/pia_store.json
echo   - Press Ctrl+C to stop the local server gracefully.
echo ============================================================================
echo.

if exist "dist\server.cjs" (
    call npm run start
) else (
    call npm run dev
)

goto END

:END
echo.
echo Server session closed cleanly.
timeout /t 2 >nul
exit /b 0
