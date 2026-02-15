import { FastifyInstance } from 'fastify';
import { QueueService } from '../../services/QueueService.js';
import { ConsumerService } from '../../services/ConsumerService.js';

const queueService = new QueueService();
const consumerService = new ConsumerService();

export async function queueRoutes(app: FastifyInstance) {

    /* ------------------------------------------------------------------
     * QUEUES
     * ------------------------------------------------------------------ 
    */

    // Create queue
    app.post('/queues', {
        schema: {
            body: {
                type: 'object',
                required: ['organizationId', 'name'],
                additionalProperties: false,
                properties: {
                    organizationId: { type: 'string', format: 'uuid' },
                    name: { type: 'string', minLength: 1, maxLength: 100 },
                },
            },
        },
    }, async (req) => {
        const { organizationId, name } = req.body as {
            organizationId: string;
            name: string;
        };

        return queueService.createQueue(organizationId, name);
    });

    app.get('/queues', async () => {
        return queueService.getAllQueues();
    });

    app.get('/queues/:id', async (req) => {
        const { id } = req.params as { id: string };
        return queueService.getQueue(id);
    });

    /* ------------------------------------------------------------------
     * CONSUMERS (QUEUE-SCOPED)
     * ------------------------------------------------------------------ */

    // Create WALK-IN (temporary) consumer
    app.post('/queues/:id/consumers', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', format: 'uuid' },
                },
            },
            body: {
                type: 'object',
                required: ['name'],
                additionalProperties: false,
                properties: {
                    name: { type: 'string', minLength: 1 },
                    email: { type: 'string', format: 'email', nullable: true },
                    phone: { type: 'string', nullable: true },
                },
            },
        },
    }, async (req) => {
        const { id: queueId } = req.params as { id: string };
        const { name, email, phone } = req.body as {
            name: string;
            email?: string;
            phone?: string;
        };

        return consumerService.createTemporaryConsumer(queueId, name, email, phone);
    });

    // Create AUTHENTICATED consumer
    app.post('/queues/:id/consumers/authenticated', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', format: 'uuid' },
                },
            },
            body: {
                type: 'object',
                required: ['userId'],
                additionalProperties: false,
                properties: {
                    userId: { type: 'string', format: 'uuid' },
                },
            },
        },
    }, async (req) => {
        const { id: queueId } = req.params as { id: string };
        const { userId } = req.body as { userId: string };

        return consumerService.createAuthenticatedConsumer(queueId, userId);
    });

    // List consumers in a queue
    app.get('/queues/:id/consumers', async (req) => {
        const { id: queueId } = req.params as { id: string };
        return consumerService.getConsumersByQueue(queueId);
    });

    // Get consumer by id
    app.get('/consumers/:id', async (req) => {
        const { id } = req.params as { id: string };
        return consumerService.getConsumer(id);
    });

    /* ------------------------------------------------------------------
     * TOKENS
     * ------------------------------------------------------------------ */

    // Issue token
    app.post('/queues/:id/token', async (req) => {
        const { id } = req.params as { id: string };
        const { consumerId } = req.body as { consumerId: string };
        return queueService.issueToken(id, consumerId);
    });

    // Call next token
    app.post('/queues/:id/next', async (req) => {
        const { id } = req.params as { id: string };
        return queueService.callNext(id);
    });
}
