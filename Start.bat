@echo off
:: Delegate to start.bat
call "%~dp0start.bat" %*
exit /b %errorlevel%
