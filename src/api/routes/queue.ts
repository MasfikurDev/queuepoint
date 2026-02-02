import { FastifyInstance } from 'fastify'
import { queueManager } from '../context.js'
import { Queue } from '../../core/Queue.js';

export async function queueRoutes(app: FastifyInstance) {
    // Create a new queue 
    app.post('/queues', async (request, reply) => {
        const { name } = request.body as {
            name: string
        };
        const queue = queueManager.createQueue(name);
        reply.code(201);
        return queue;
    });

    app.get('/queues', async (request, reply) => {
        const queues = queueManager.getAllQueues();
        if (queues.length === 0) {
            return reply.code(204).send()
        }
        return queues;
    });

    // Issue a token for a queue
    app.post('/queues/:queueId/tokens', async (request, reply) => {
        const { queueId } = request.params as { queueId: string };
        try {
            return queueManager.issueToken(queueId);
        } catch (err) {
            reply.code(404);
            return { message: 'Queue not found' };
        }
    });

    // Call next token
    app.post('/queues/:queueId/next', async (request, reply) => {
        const { queueId } = request.params as { queueId: string }

        try {
            const token = queueManager.callNext(queueId)
            if (!token) {
                reply.code(204);
                return;
            }
            return token;
        } catch (err) {
            reply.code(404)
            return { message: 'Queue not found' };
        }
    })

    // Get queue snapshot
    app.get('/queues/:queueId', async (request, reply) => {
        const { queueId } = request.params as { queueId: string };

        try {
            const queue = queueManager.getQueue(queueId);
            return queue;
        } catch (err) {
            reply.code(404);
            return { message: 'Queue not found' };
        }
    })
}
