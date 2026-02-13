CREATE TABLE IF NOT EXISTS accounts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT CHECK(type IN ('business', 'individual')) NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS queues (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL,
  name TEXT NOT NULL,
  status TEXT CHECK(status IN ('active', 'paused', 'closed')) NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (account_id) REFERENCES accounts(id)
);

CREATE TABLE IF NOT EXISTS tokens (
  id TEXT PRIMARY KEY,
  queue_id TEXT NOT NULL,
  consumer_id TEXT,
  number INTEGER NOT NULL,
  status TEXT NOT NULL,
  issued_at TEXT NOT NULL,
  called_at TEXT,
  served_at TEXT,
  FOREIGN KEY (queue_id) REFERENCES queues(id)
);


CREATE TABLE consumers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
