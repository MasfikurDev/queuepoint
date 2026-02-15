import { randomUUID } from 'node:crypto';
import { db } from '../db/index.js';
import { Consumer } from '../models/Consumer.js';
import { User } from '../models/User.js';

type ConsumerRow = {
  id: string;
  queue_id: string;
  user_id?: string;
  name: string;
  email?: string;
  phone?: string;
  is_temporary: boolean;
  created_at: string;
  expires_at: string;
};


export class ConsumerRepository {

  createTemporary(queueId: string, name: string, email?: string, phone?: string): Consumer {
    const now = new Date();
    const consumer: Consumer = {
      id: randomUUID(),
      queueId: queueId,
      name,
      email,
      phone,
      isTemporary: true,
      createdAt: now,
      expiresAt: now,
    };

    db.prepare(`
      INSERT INTO consumers (id,queue_id, name, email, phone, created_at, expires_at)
      VALUES (?, ?, ?, ?, ?, ?,?)
    `).run(
      consumer.id,
      consumer.queueId,
      consumer.name,
      consumer.email ?? null,
      consumer.phone ?? null,
      consumer.createdAt.toISOString(),
      consumer.expiresAt.toISOString()
    );

    return consumer;
  }


  createAuthenticated(queueId: string, userId: string): Consumer {

    const user: User = db.prepare(`SELECT * FROM users WHERE id = ?`).get(userId) as User;

    if (!user) throw Error("User Doesn't Exists!");

    const now = new Date();
    const consumer: Consumer = {
      id: randomUUID(),
      queueId: queueId,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isTemporary: false,
      createdAt: now,
      expiresAt: now,
    };

    db.prepare(`
      INSERT INTO consumers (id,queue_id, name, email, phone, created_at, expires_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      consumer.id,
      consumer.queueId,
      consumer.name,
      consumer.email ?? null,
      consumer.phone ?? null,
      consumer.createdAt.toISOString(),
      consumer.expiresAt.toISOString()
    );

    return consumer;
  }

  findById(id: string): Consumer | null {
    const row = db.prepare(`SELECT * FROM consumers WHERE id = ?`).get(id) as ConsumerRow | undefined;
    if (!row) return null;

    return {
      id: row.id,
      queueId: row.queue_id,
      userId: row.user_id ?? undefined,
      name: row.name,
      email: row.email ?? undefined,
      phone: row.phone ?? undefined,
      isTemporary: row.is_temporary,
      createdAt: new Date(row.created_at),
      expiresAt: new Date(row.expires_at),
    };
  }

  findByQueue(queueId: string): Consumer[] {
    const rows = db.prepare(`SELECT * FROM consumers WHERE queue_id = ?`).all(queueId) as ConsumerRow[];
    return rows.map(r => ({
      id: r.id,
      queueId: r.queue_id,
      userId: r.user_id ?? undefined,
      name: r.name,
      email: r.email ?? undefined,
      phone: r.phone ?? undefined,
      isTemporary: r.is_temporary,
      createdAt: new Date(r.created_at),
      expiresAt: new Date(r.expires_at),
    }));
  }

  findAll(): Consumer[] {
    const rows = db.prepare(`SELECT * FROM consumers`).all() as ConsumerRow[];
    return rows.map(r => ({
      id: r.id,
      queueId: r.queue_id,
      userId: r.user_id ?? undefined,
      name: r.name,
      email: r.email ?? undefined,
      phone: r.phone ?? undefined,
      isTemporary: r.is_temporary,
      createdAt: new Date(r.created_at),
      expiresAt: new Date(r.expires_at),
    }));
  }
}
