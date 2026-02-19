
import { randomUUID } from 'node:crypto';
import { Organization } from '../models/Organization.js';
import { db } from '../db/index.js';

type OrganizationRow = {
    id: string;
    name: string;
    type: 'business' | 'individual';
    created_by: string,
    created_at: string;
    updated_at: string;
};


export class OrganizationRepository {
    create(createdBy: string, name: string, type: Organization['type']): Organization {
        const now = new Date();
        const organization: Organization = {
            id: randomUUID(),
            name,
            type,
            createdBy,
            createdAt: now,
            updatedAt: now,
        };

        db.prepare(`INSERT INTO organizations (id, name, type,created_by, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)`).run(
            organization.id,
            organization.name,
            organization.type,
            organization.createdBy,
            organization.createdAt.toISOString(),
            organization.updatedAt.toISOString()
        );

        return organization;
    }

    findById(id: string): Organization | null {
        const row = db
            .prepare(`SELECT * FROM organizations WHERE id = ?`)
            .get(id) as OrganizationRow | undefined;
        if (!row) return null;

        return {
            id: row.id,
            name: row.name,
            type: row.type,
            createdBy: row.created_by,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        };
    }

    findAll(): Organization[] {
        const rows = db.prepare(`SELECT * FROM organizations`).all() as OrganizationRow[];
        return rows.map(row => ({
            id: row.id,
            name: row.name,
            type: row.type,
            createdBy: row.created_by,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        }));
    }
}
