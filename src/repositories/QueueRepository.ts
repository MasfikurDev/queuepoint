
import { randomUUID } from 'node:crypto';
import { Queue, QueueStatus } from '../models/Queue.js';
import { db } from '../db/index.js';

type QueueRow = {
    id: string;
    organization_id: string;

    name: string;
    status: QueueStatus;

    created_at: Date;
    updated_at: Date;
};

export class QueueRepository {
    create(organizationId: string, name: string): Queue {
        const now = new Date();
        const queue: Queue = {
            id: randomUUID(),
            organizationId,
            name,
            status: 'active',
            createdAt: now,
            updatedAt: now,
        };

        db.prepare(`INSERT INTO queues (id, organization_id, name, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)`).run(
            queue.id,
            queue.organizationId,
            queue.name,
            queue.status,
            queue.createdAt.toISOString(),
            queue.updatedAt.toISOString()
        );

        return queue;
    }

    findById(id: string): Queue | null {
        const row = db.prepare(`SELECT * FROM queues WHERE id = ?`).get(id) as QueueRow | undefined;
        if (!row) return null;

        return {
            id: row.id,
            organizationId: row.organization_id,
            name: row.name,
            status: row.status,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        };
    }

    findByOrganization(organizationId: string): Queue[] {
        const rows = db
            .prepare(`SELECT * FROM queues WHERE organization_id = ?`)
            .all(organizationId) as QueueRow[];

        return rows.map(row => ({
            id: row.id,
            organizationId: row.organization_id,
            name: row.name,
            status: row.status,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        }));
    }

    findAll(): Queue[] {
        const rows = db
            .prepare(`SELECT * FROM queues`)
            .all() as QueueRow[];

        return rows.map(row => ({
            id: row.id,
            organizationId: row.organization_id,
            name: row.name,
            status: row.status,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        }));
    }

}
