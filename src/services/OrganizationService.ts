
import { Organization } from '../models/Organization.js';
import { OrganizationRepository } from '../repositories/OrganizationRepository.js';

export class OrganizationService {
  private repo = new OrganizationRepository();

  createOrganization(name: string, type: Organization["type"]) {
    return this.repo.create(name, type);
  }

  getOrganization(id: string) {
    return this.repo.findById(id);
  }

  listOrganizations() {
    return this.repo.findAll();
  }
}
