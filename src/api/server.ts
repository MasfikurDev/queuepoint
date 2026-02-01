// QueuePoint HTTP Server (Fastify)

import Fastify from 'fastify'
import cors from '@fastify/cors'

export function buildServer() {
  const app = Fastify({
    logger: true
  })

  app.register(cors, {
    origin: true
  })

  app.get('/health', async () => {
    return { status: 'ok' }
  })

  return app
}
