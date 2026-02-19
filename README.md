# QueuePoint

QueuePoint is a modern, backend-first queue management system designed for
physical spaces such as hospitals, banks, public offices, and private businesses.

It allows organizations to create and manage multiple queues under their
accounts, while consumers can receive and track tokens in a fair, ordered flow.

---

## ✨ Features

- Account-based queue management (businesses / individuals)
- Multiple queues per account
- Token issuance and lifecycle management
- FIFO queue processing
- REST API built with Fastify
- SQLite-backed persistence (with migrations & seeders)
- Type-safe domain models using TypeScript
- Designed to evolve into an SPA-friendly backend

---

## 🛠 Tech Stack

- **Runtime:** Node.js (ESM)
- **Language:** TypeScript
- **Web Framework:** Fastify
- **Database:** SQLite (WAL mode)
- **Data Access:** Repository pattern
- **Validation:** JSON Schema (Fastify)
- **Testing (local):** httpYac / curl
- **Migrations & Seeds:** SQL-based

---

## 📂 Project Structure (Simplified)

```
src/
├── api/            # HTTP routes (Fastify)
├── db/             # DB connection, migrations, seeders
├── models/         # Domain models (Account, Queue, Token)
├── repositories/   # Data access layer
├── services/       # Business logic
└── index.ts        # Application entry point
```

---

## 🚧 Status

**Active development**

Core queue and token flows are functional.
Upcoming work includes:

- Consumer identity & authentication (email/phone + token flows)
- Account-level permissions & role-based access control (RBAC)
- Frontend SPA (React/Vue) for operator and consumer views
- Real-time updates (WebSockets / SSE) for live token events
- Queue analytics, history, and reporting (exportable CSV)
- Production database support (PostgreSQL) and improved migrations
- Observability: structured logging, metrics, and tracing
- Automated tests & CI: HTTP smoke tests, unit tests, and linting

---

## 📌 Notes

- DB files are intentionally ignored
- Database schema is managed via SQL migrations
- The system currently favors clarity and correctness over premature optimization

---

## 📜 License

ISC

---

## 🚀 Quickstart

- Install dependencies:

```bash
npm install
```

- Run migrations (creates/updates SQLite DB):

```bash
npm run db:migrate
```

- Seed the database (optional):

```bash
npm run db:seed
```

- Start the dev server (auto-reloads with `tsx`):

```bash
npm run dev
```

The server listens on port `3000` by default. Check `src/api/server.ts` or environment variables to change the port.
