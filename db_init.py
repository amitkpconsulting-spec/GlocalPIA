#!/usr/bin/env python3
"""
===============================================================================
LOCAL-PIA: DATABASE INITIALIZATION SCRIPT (db_init.py)
===============================================================================
Initializes the local air-gapped SQLite database (local_pia.db) using schema.sql.
===============================================================================
"""

import os
import sqlite3

DB_PATH = os.getenv("PIA_DB_PATH", "local_pia.db")
SCHEMA_PATH = "schema.sql"

def init_db():
    print(f"Initializing SQLite database '{DB_PATH}'...")
    if not os.path.exists(SCHEMA_PATH):
        print(f"[ERROR] Schema file '{SCHEMA_PATH}' not found.")
        return False

    with open(SCHEMA_PATH, "r", encoding="utf-8") as f:
        schema_sql = f.read()

    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.executescript(schema_sql)
        conn.commit()
        print(f" [OK] Database '{DB_PATH}' successfully initialized/verified.")
        return True
    except sqlite3.Error as e:
        print(f"[ERROR] SQLite schema execution failed: {e}")
        return False
    finally:
        if 'conn' in locals():
            conn.close()

if __name__ == "__main__":
    init_db()
