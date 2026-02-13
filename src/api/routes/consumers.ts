import { FastifyInstance } from 'fastify';
import { ConsumerService } from '../../services/ConsumerService.js';

const service = new ConsumerService();

export async function consumerRoutes(app: FastifyInstance) {
  // Create consumer
  app.post('/consumers', {
    schema: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 100 },
          email: { type: 'string', format: 'email', nullable: true },
          phone: { type: 'string', minLength: 5, maxLength: 20, nullable: true },
        },
      },
    },
  }, async (req) => {
    const { name, email, phone } = req.body as {
      name: string;
      email?: string;
      phone?: string;
    };
    return service.createConsumer(name, email, phone);
  });

  // Get consumer by ID
  app.get('/consumers/:id', async (req) => {
    const { id } = req.params as { id: string };
    const consumer = service.getConsumer(id);
    if (!consumer) throw new Error('Consumer not found');
    return consumer;
  });

  // List all consumers
  app.get('/consumers', async () => {
    return service.listConsumers();
  });
}
