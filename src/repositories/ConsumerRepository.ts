import { randomUUID } from 'node:crypto';
import { db } from '../db/index.js';
import { Consumer } from '../models/Consumer.js';

type ConsumerRow = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  created_at: string;
  updated_at: string;
};

export class ConsumerRepository {
  create(name: string, email?: string, phone?: string): Consumer {
    const now = new Date();
    const consumer: Consumer = {
      id: randomUUID(),
      name,
      email,
      phone,
      createdAt: now,
      updatedAt: now,
    };

    db.prepare(`
      INSERT INTO consumers (id, name, email, phone, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      consumer.id,
      consumer.name,
      consumer.email ?? null,
      consumer.phone ?? null,
      consumer.createdAt.toISOString(),
      consumer.updatedAt.toISOString()
    );

    return consumer;
  }

  findById(id: string): Consumer | null {
    const row = db.prepare(`SELECT * FROM consumers WHERE id = ?`).get(id) as ConsumerRow | undefined;
    if (!row) return null;

    return {
      id: row.id,
      name: row.name,
      email: row.email ?? undefined,
      phone: row.phone ?? undefined,
      createdAt: new Date(row.created_at),
      updatedAt: new Date(row.updated_at),
    };
  }

  findAll(): Consumer[] {
    const rows = db.prepare(`SELECT * FROM consumers`).all() as ConsumerRow[];
    return rows.map(r => ({
      id: r.id,
      name: r.name,
      email: r.email ?? undefined,
      phone: r.phone ?? undefined,
      createdAt: new Date(r.created_at),
      updatedAt: new Date(r.updated_at),
    }));
  }
}
