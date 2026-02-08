import { randomUUID } from 'node:crypto';
import { db } from '../index.js';
import { Seeder } from './Seeder.js';

export const AccountsSeeder: Seeder = {
  run() {
    const now = new Date().toISOString();

    const exists = db
      .prepare(`SELECT 1 FROM accounts LIMIT 1`)
      .get();

    if (exists) {
      console.log('⏭️  Accounts already seeded');
      return;
    }

    db.prepare(`
      INSERT INTO accounts (id, name, type, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?)
    `).run(
      '11111111-1111-1111-1111-111111111111',
      'Demo Business',
      'business',
      now,
      now
    );

    console.log('✅ Accounts seeded');
  }
};
