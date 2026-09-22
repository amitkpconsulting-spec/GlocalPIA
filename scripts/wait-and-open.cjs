/**
 * Local PIA - Automated Server Readiness Detection & Browser Launcher
 * 
 * Accurately detects when Express + Vite/Static backend has completed initialization,
 * then cleanly launches the default web browser to the allocated port without race conditions.
 */

const http = require('http');
const { exec } = require('child_process');

const port = process.argv[2] ? parseInt(process.argv[2], 10) : (process.env.PORT ? parseInt(process.env.PORT, 10) : 3000);
const url = `http://localhost:${port}`;
const fallbackUrl = `http://127.0.0.1:${port}`;

const MAX_ATTEMPTS = 50; // 50 * 400ms = 20 seconds max wait
const POLL_INTERVAL_MS = 400;

let attempts = 0;
let hasLaunched = false;

function launchBrowser() {
  if (hasLaunched) return;
  hasLaunched = true;

  console.log(`[PIA Launcher] Server is ready! Launching default browser at ${url} ...`);

  let launchCmd = '';
  if (process.platform === 'win32') {
    launchCmd = `start "" "${url}"`;
  } else if (process.platform === 'darwin') {
    launchCmd = `open "${url}"`;
  } else {
    launchCmd = `xdg-open "${url}"`;
  }

  exec(launchCmd, (err) => {
    if (err) {
      // Fallback 1 for Windows: try explorer or rundll32
      if (process.platform === 'win32') {
        exec(`start explorer "${url}"`, (err2) => {
          if (err2) {
            exec(`rundll32 url.dll,FileProtocolHandler ${url}`);
          }
        });
      }
    }
    // Clean exit after launching
    setTimeout(() => process.exit(0), 1000);
  });
}

function pollHealth() {
  attempts++;

  const req = http.get(`http://127.0.0.1:${port}/api/health`, (res) => {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      launchBrowser();
    } else {
      scheduleNext();
    }
  });

  req.on('error', () => {
    scheduleNext();
  });

  req.setTimeout(1200, () => {
    req.destroy();
    scheduleNext();
  });
}

function scheduleNext() {
  if (attempts >= MAX_ATTEMPTS) {
    console.log(`[PIA Launcher] Warning: Timeout waiting for health check. Opening browser anyway at ${url}`);
    launchBrowser();
    return;
  }
  setTimeout(pollHealth, POLL_INTERVAL_MS);
}

// Initial delay before first poll to let Node process begin booting
setTimeout(pollHealth, 350);
