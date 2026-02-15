
import { randomUUID } from 'node:crypto';
import { db } from '../db/index.js';
import { User } from '../models/User.js';

type UserRow = {
    id: string;
    name: string;
    phone: string;
    email: string;
    created_at: string;
    updated_at: string;
};


export class UserRepository {
    create(name: string, phone: string, email: string): User {
        const now = new Date();
        const user: User = {
            id: randomUUID(),
            name,
            phone,
            email,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        db.prepare(`INSERT INTO users (id, name,phone,email, created_at, updated_at) VALUES (?, ?, ?, ?, ?,?)`).run(
            user.id,
            user.name,
            user.phone,
            user.email,
            user.createdAt.toISOString(),
            user.updatedAt.toISOString()
        );

        return user;
    }

    findById(id: string): User | null {
        const row = db
            .prepare(`SELECT * FROM users WHERE id = ?`)
            .get(id) as UserRow | undefined;
        if (!row) return null;

        return {
            id: row.id,
            name: row.name,
            phone: row.phone,
            email: row.email,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        };
    }

    findAll(): User[] {
        const rows = db.prepare(`SELECT * FROM users`).all() as UserRow[];
        return rows.map(row => ({
            id: row.id,
            name: row.name,
            phone: row.phone,
            email: row.email,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        }));
    }
}
