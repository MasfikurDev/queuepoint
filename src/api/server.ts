// QueuePoint HTTP Server (Fastify)

import Fastify from 'fastify'
import cors from '@fastify/cors'

import { accountRoutes } from './routes/accounts.js'
import { queueRoutes } from './routes/queues.js'
import { consumerRoutes } from './routes/consumers.js';

export function buildServer() {
  const app = Fastify({
    logger: true
  });

  app.register(cors, {
    origin: true
  });

  // Account Routes
  app.register(accountRoutes);

  // Queue Routes
  app.register(queueRoutes);

  // Consumer Routes 
  app.register(consumerRoutes);

  app.get('/health', async () => {
    return { status: 'ok' }
  });

  return app;
}
