// QueuePoint HTTP Server (Fastify)

import Fastify from 'fastify'
import cors from '@fastify/cors'

import { queueRoutes } from './routes/queues.js'

export function buildServer() {
  const app = Fastify({
    logger: true
  })

  app.register(cors, {
    origin: true
  })

  app.register(queueRoutes);

  app.get('/health', async () => {
    return { status: 'ok' }
  })

  return app
}
