#!/usr/bin/env python3
"""
===============================================================================
LOCAL-PIA: PYTHON BACKEND SERVER (app.py)
===============================================================================
Serves as the Python application entry point for Local PIA.
Interfaces with local_pia.db SQLite database.
Includes automatic port failover for Windows environments.
===============================================================================
"""

import os
import sys
import json
import socket
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = int(os.getenv("PORT", "3000"))
HOST = os.getenv("HOST", "0.0.0.0")

class LocalPIARequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = {
                "status": "ok",
                "engine": "Python Local PIA Backend",
                "aiProvider": os.getenv("AI_PROVIDER", "ollama"),
                "ollamaEndpoint": os.getenv("OLLAMA_ENDPOINT", "http://localhost:11434")
            }
            self.wfile.write(json.dumps(response).encode('utf-8'))
            return
        
        # Static file fallback handling (dist/ index.html or root)
        if not os.path.exists('.' + self.path) and os.path.exists('dist/index.html'):
            self.path = '/dist' + self.path
        return super().do_GET()

def run_server():
    target_port = PORT
    httpd = None
    
    for attempt_port in range(target_port, target_port + 10):
        try:
            server_address = (HOST, attempt_port)
            httpd = HTTPServer(server_address, LocalPIARequestHandler)
            target_port = attempt_port
            break
        except (OSError, socket.error) as err:
            print(f"[Python Server] Port {attempt_port} busy ({err}). Trying port {attempt_port + 1}...")
    
    if not httpd:
        print("[ERROR] Failed to bind Python server to any open port.")
        sys.exit(1)
        
    try:
        with open('.active_port', 'w', encoding='utf-8') as f:
            f.write(str(target_port))
    except Exception:
        pass

    print(f"============================================================================")
    print(f"  Starting Local PIA Python Server on http://localhost:{target_port}")
    print(f"============================================================================")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[INFO] Python server stopped gracefully.")

if __name__ == "__main__":
    run_server()
