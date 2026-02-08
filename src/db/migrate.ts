import fs from 'node:fs';
import path from 'node:path';
import { db } from './index.js';

const schemaPath = path.resolve('src/db/schema.sql');

console.log('📦 Running migrations...');

const schema = fs.readFileSync(schemaPath, 'utf-8');

db.exec(schema);

console.log('✅ Database schema applied');
