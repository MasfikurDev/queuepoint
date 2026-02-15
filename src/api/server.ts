// QueuePoint HTTP Server (Fastify)

import Fastify from 'fastify'
import cors from '@fastify/cors'

import { organizationRoutes } from './routes/organizations.js'
import { queueRoutes } from './routes/queues.js'
import { userRoutes } from './routes/users.js';

export function buildServer() {
  const app = Fastify({
    logger: true
  });

  app.register(cors, {
    origin: true
  });
  
  // User Routes
  app.register(userRoutes);

  // Organization Routes
  app.register(organizationRoutes);

  // Queue Routes
  app.register(queueRoutes);

  app.get('/health', async () => {
    return { status: 'ok' }
  });

  return app;
}
