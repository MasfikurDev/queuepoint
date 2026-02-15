PRAGMA foreign_keys = OFF;

DROP TABLE IF EXISTS tokens;
DROP TABLE IF EXISTS consumers;
DROP TABLE IF EXISTS queues;
DROP TABLE IF EXISTS organizations;
DROP TABLE IF EXISTS users;

PRAGMA foreign_keys = ON;


CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  phone TEXT UNIQUE,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE organizations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT CHECK(type IN ('business','individual')) NOT NULL,

  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);


CREATE TABLE queues (
  id TEXT PRIMARY KEY,
  organization_id TEXT NOT NULL,
  name TEXT NOT NULL,
  status TEXT CHECK(status IN ('active','paused','closed')) NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (organization_id) REFERENCES organizations(id)
);


CREATE TABLE consumers (
  id TEXT PRIMARY KEY,
  queue_id TEXT NOT NULL,
  user_id TEXT,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  is_temporary INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  expires_at TEXT,

  FOREIGN KEY (queue_id) REFERENCES queues(id),
  FOREIGN KEY (user_id) REFERENCES users(id),

  UNIQUE (queue_id, phone),
  UNIQUE (queue_id, email)
);



CREATE TABLE tokens (
  id TEXT PRIMARY KEY,
  queue_id TEXT NOT NULL,
  consumer_id TEXT NOT NULL,

  number INTEGER NOT NULL,
  status TEXT CHECK(
    status IN ('waiting','called','served','skipped','cancelled')
  ) NOT NULL,

  issued_at TEXT NOT NULL,
  called_at TEXT,
  served_at TEXT,

  FOREIGN KEY (queue_id) REFERENCES queues(id),
  FOREIGN KEY (consumer_id) REFERENCES consumers(id),

  UNIQUE (queue_id, consumer_id)
  UNIQUE (queue_id, number)
);

