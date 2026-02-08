
import { randomUUID } from 'node:crypto';
import { Account } from '../models/Account.js';
import { db } from '../db/index.js';

type AccountRow = {
    id: string;
    name: string;
    type: 'business' | 'individual';
    created_at: string;
    updated_at: string;
};


export class AccountRepository {
    create(name: string, type: Account['type']): Account {
        const now = new Date();
        const account: Account = {
            id: randomUUID(),
            name,
            type,
            createdAt: now,
            updatedAt: now,
        };

        db.prepare(`
      INSERT INTO accounts (id, name, type, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?)
    `).run(
            account.id,
            account.name,
            account.type,
            account.createdAt.toISOString(),
            account.updatedAt.toISOString()
        );

        return account;
    }

    findById(id: string): Account | null {
        const row = db
            .prepare(`SELECT * FROM accounts WHERE id = ?`)
            .get(id) as AccountRow | undefined;
        if (!row) return null;

        return {
            id: row.id,
            name: row.name,
            type: row.type,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        };
    }
}
