import { FastifyInstance } from 'fastify'
import { queueService } from '../context.js'

export async function queueRoutes(app: FastifyInstance) {
  app.post('/queues', async (request) => {
    const { name } = request.body as { name: string }
    return queueService.createQueue(name)
  })

  app.get('/queues', async () => {
    return queueService.getAllQueues()
  })

  app.post('/queues/:id/token', async (request) => {
    const { id } = request.params as { id: string }
    return queueService.issueToken(id)
  })

  app.post('/queues/:id/next', async (request) => {
    const { id } = request.params as { id: string }
    return queueService.callNext(id)
  })

  app.get('/queues/:id', async (request) => {
    const { id } = request.params as { id: string }
    return queueService.snapshot(id)
  })
}
