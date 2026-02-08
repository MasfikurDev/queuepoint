// database

import Database from 'better-sqlite3'
import path from 'node:path'

const dbPath = path.join(process.cwd(), 'queuepoint.db')

export const db = new Database(dbPath)

db.pragma('journal_mode = WAL')
