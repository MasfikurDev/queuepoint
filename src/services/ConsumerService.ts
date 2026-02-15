import { Consumer } from '../models/Consumer.js';
import { ConsumerRepository } from '../repositories/ConsumerRepository.js';

export class ConsumerService {
  private repo = new ConsumerRepository();

  createTemporaryConsumer(queueId: string, name: string, email?: string, phone?: string): Consumer {
    return this.repo.createTemporary(queueId, name, email, phone);
  }

  createAuthenticatedConsumer(queueId: string, userId: string): Consumer {
    return this.repo.createAuthenticated(queueId, userId);
  }

  getConsumer(id: string): Consumer | null {
    return this.repo.findById(id);
  }

  getConsumersByQueue(queueId: string): Consumer[] {
    return this.repo.findByQueue(queueId);
  }

  listConsumers(): Consumer[] {
    return this.repo.findAll();
  }
}
