@echo off
setlocal enabledelayedexpansion

:: Force working directory to script location
cd /d "%~dp0"

:: ============================================================================
::  Local PIA Engine - Direct Server Launcher (server.bat)
::  Automatically delegates to start.bat in direct Node execution mode
:: ============================================================================

title Local PIA Engine - Direct Server Launcher
color 0B

echo ============================================================================
echo   Direct Server Launch - Local PIA Governance Engine
echo ============================================================================
echo.

call "%~dp0start.bat" 1 %*
exit /b %errorlevel%
