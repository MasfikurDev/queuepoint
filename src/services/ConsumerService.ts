import { Consumer } from '../models/Consumer.js';
import { ConsumerRepository } from '../repositories/ConsumerRepository.js';

export class ConsumerService {
  private repo = new ConsumerRepository();

  createConsumer(name: string, email?: string, phone?: string): Consumer {
    return this.repo.create(name, email, phone);
  }

  getConsumer(id: string): Consumer | null {
    return this.repo.findById(id);
  }

  listConsumers(): Consumer[] {
    return this.repo.findAll();
  }
}
