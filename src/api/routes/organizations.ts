import { FastifyInstance } from 'fastify';
import { OrganizationService } from '../../services/OrganizationService.js';

const service = new OrganizationService();

export async function organizationRoutes(app: FastifyInstance) {
  // Create Organization
  app.post('/organizations', async (req) => {
    const { name, type } = req.body as { name: string; type: 'business' | 'individual' };
    return service.createOrganization(name, type);
  });

  // Get single Organization
  app.get('/organizations/:id', async (req, reply) => {
    const { id } = req.params as { id: string };
    const organization = service.getOrganization(id);
    if (!organization) {
      reply.status(404);
      return { error: 'Organization not found' };
    }
    return organization;
  });

  // List all Organizations
  app.get('/organizations', async () => {
    return service.listOrganizations();
  });
}
