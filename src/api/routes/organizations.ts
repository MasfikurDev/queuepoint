// src/api/routes/organizations.ts
import { FastifyInstance } from 'fastify';
import { OrganizationService } from '../../services/OrganizationService.js';

const service = new OrganizationService();

export async function organizationRoutes(app: FastifyInstance) {
  // Create Organization
  app.post('/organizations', {
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
    return service.createOrganization(name, type);
  });

  // Get single organization
  app.get('/organizations/:id', {
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
    const organization = service.getOrganization(id);
    if (!organization) {
      reply.status(404);
      return { error: 'organization not found' };
    }
    return organization;
  });

  // List all organizations
  app.get('/organizations', async () => {
    return service.listOrganizations();
  });
}
