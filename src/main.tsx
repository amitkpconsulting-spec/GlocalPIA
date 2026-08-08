import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (typeof window !== 'undefined') {
  const isViteOrWsError = (msg: unknown) => {
    const s = String(msg || '').toLowerCase();
    return (
      s.includes('websocket') ||
      s.includes('vite') ||
      s.includes('ws') ||
      s.includes('closed without opened') ||
      s.includes('connection refused')
    );
  };

  window.addEventListener('unhandledrejection', (event) => {
    const reasonStr = event.reason?.message || event.reason?.stack || String(event.reason || '');
    if (isViteOrWsError(reasonStr)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });

  window.addEventListener('error', (event) => {
    const errStr = event.message || event.error?.message || String(event.error || '');
    if (isViteOrWsError(errStr)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

