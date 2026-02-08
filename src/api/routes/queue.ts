import { FastifyInstance } from 'fastify';
import { QueueService } from '../../services/QueueService.js';

const service = new QueueService();

export async function queueRoutes(app: FastifyInstance) {

    // Create queue
    app.post('/queues', {
        schema: {
            body: {
                type: 'object',
                required: ['accountId', 'name'],
                additionalProperties: false,
                properties: {
                    accountId: {
                        type: 'string',
                        format: 'uuid',
                    },
                    name: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 100,
                    },
                },
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', format: 'uuid' },
                        accountId: { type: 'string', format: 'uuid' },
                        name: { type: 'string' },
                        status: { type: 'string' },
                        createdAt: { type: 'string' },
                        updatedAt: { type: 'string' },
                    },
                },
            },
        },
    }, async (req) => {
        const { accountId, name } = req.body as {
            accountId: string;
            name: string;
        };

        return service.createQueue(accountId, name);
    });

    app.get('/queues', {
        schema: {
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'string', format: 'uuid' },
                            accountId: { type: 'string', format: 'uuid' },
                            name: { type: 'string' },
                            status: { type: 'string' },
                            createdAt: { type: 'string' },
                            updatedAt: { type: 'string' },
                        },
                    },
                },
            },
        },
    }, async () => {
        return service.getAllQueues();
    });

    app.get('/queues/:id', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', format: 'uuid' },
                },
            },
        },
    }, async (req) => {
        const { id } = req.params as { id: string };
        return service.getQueue(id);
    });

    // Issue token

    app.post('/queues/:id/token', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', format: 'uuid' },
                },
            },
        },
    }, async (req) => {
        const { id } = req.params as { id: string };
        return service.issueToken(id);
    });


    // Call next token

    app.post('/queues/:id/next', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', format: 'uuid' },
                },
            },
        },
    }, async (req) => {
        const { id } = req.params as { id: string };
        return service.callNext(id);
    });
}
