import { FastifyInstance } from 'fastify';
import { QueueService } from '../../services/QueueService.js';
import { ConsumerService } from '../../services/ConsumerService.js';

const queueService = new QueueService();
const consumerService = new ConsumerService();

export async function queueRoutes(app: FastifyInstance) {

    /* ------------------------------------------------------------------
     * QUEUES
     * ------------------------------------------------------------------ */

    // Create queue
    app.post('/queues', async (req) => {
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
    app.post('/queues/:id/consumers', async (req) => {
        const { id: queueId } = req.params as { id: string };
        const { name, email, phone } = req.body as {
            name: string;
            email?: string;
            phone?: string;
        };

        return consumerService.createTemporaryConsumer(queueId, name, email, phone);
    });

    // Create AUTHENTICATED consumer
    app.post('/queues/:id/consumers/authenticated', async (req) => {
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
