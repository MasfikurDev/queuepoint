// src/api/routes/accounts.ts
import { FastifyInstance } from 'fastify';
import { AccountService } from '../../services/AccountService.js';

const service = new AccountService();

export async function accountRoutes(app: FastifyInstance) {
  // Create account
  app.post('/accounts', {
    schema: {
      body: {
        type: 'object',
        required: ['name', 'type'],
        additionalProperties: false,
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 100 },
          type: { type: 'string', enum: ['business', 'individual'] },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            name: { type: 'string' },
            type: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' },
          },
        },
      },
    },
  }, async (req) => {
    const { name, type } = req.body as { name: string; type: 'business' | 'individual' };
    return service.createAccount(name, type);
  });

  // Get single account
  app.get('/accounts/:id', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string', format: 'uuid' },
        },
      },
    },
  }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const account = service.getAccount(id);
    if (!account) {
      reply.status(404);
      return { error: 'Account not found' };
    }
    return account;
  });

  // List all accounts
  app.get('/accounts', async () => {
    return service.listAccounts();
  });
}
