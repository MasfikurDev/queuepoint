
import { randomUUID } from 'node:crypto';
import { db } from '../db/index.js';
import { Token } from '../models/Token.js';

type TokenRow = {
    id: string;
    queue_id: string;
    number: number;
    status: 'waiting' | 'called' | 'served' | 'skipped' | 'cancelled';
    issued_at: string;
    called_at: string | null;
};


export class TokenRepository {
    issue(queueId: string): Token {
        const row = db
            .prepare(`SELECT MAX(number) as max FROM tokens WHERE queue_id = ?`)
            .get(queueId) as { max: number | null };

        const nextNumber = (row.max ?? 0) + 1;


        const token: Token = {
            id: randomUUID(),
            queueId,
            number: nextNumber,
            status: 'waiting',
            issuedAt: new Date(),
        };

        db.prepare(`
      INSERT INTO tokens (id, queue_id, number, status, issued_at)
      VALUES (?, ?, ?, ?, ?)
    `).run(
            token.id,
            token.queueId,
            token.number,
            token.status,
            token.issuedAt.toISOString()
        );

        return token;
    }

    callNext(queueId: string): Token | null {
        const row = db.prepare(`SELECT * FROM tokens WHERE queue_id = ? AND status = 'waiting' ORDER BY number ASC LIMIT 1`).get(queueId) as TokenRow | undefined;

        if (!row) return null;

        const now = new Date();

        db.prepare(`
      UPDATE tokens
      SET status = 'called', called_at = ?
      WHERE id = ?
    `).run(now.toISOString(), row.id);

        return {
            id: row.id,
            queueId: row.queue_id,
            number: row.number,
            status: 'called',
            issuedAt: new Date(row.issued_at),
            calledAt: now,
        };
    }
}
