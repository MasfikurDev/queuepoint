import { Queue } from "../models/Queue.js";
import { ConsumerRepository } from "../repositories/ConsumerRepository.js";
import { OrganizationRepository } from "../repositories/OrganizationRepository.js";
import { QueueRepository } from "../repositories/QueueRepository.js";
import { TokenRepository } from "../repositories/TokenRepository.js";


export class QueueService {
    constructor(
        private organizations = new OrganizationRepository(),
        private queues = new QueueRepository(),
        private tokens = new TokenRepository(),
        private consumers = new ConsumerRepository()
    ) { }

    createQueue(organizationId: string, name: string) {
        const organization = this.organizations.findById(organizationId);
        if (!organization) throw new Error('Organization not found');
        return this.queues.create(organizationId, name);
    }

    getQueue(id: string): Queue | null {
        return this.queues.findById(id);
    }

    getAllQueues(): Queue[] {
        return this.queues.findAll();
    }

    issueToken(queueId: string, consumerId: string) {
        const queue = this.queues.findById(queueId);
        if (!queue || queue.status !== 'active') {
            throw new Error('Queue unavailable');
        }
        const consumer = this.consumers.findById(consumerId);
        if (!consumer) {
            throw new Error('Consumer not found '+consumerId);
        }

        if (consumer.queueId !== queueId) {
            throw new Error('Consumer does not belong to this queue');
        }

        return this.tokens.issue(queueId, consumerId);
    }

    callNext(queueId: string) {
        return this.tokens.callNext(queueId);
    }
}
