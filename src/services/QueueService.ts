import { Queue } from "../models/Queue.js";
import { AccountRepository } from "../repositories/AccountRepository.js";
import { QueueRepository } from "../repositories/QueueRepository.js";
import { TokenRepository } from "../repositories/TokenRepository.js";


export class QueueService {



    constructor(
        private accounts = new AccountRepository(),
        private queues = new QueueRepository(),
        private tokens = new TokenRepository()
    ) { }

    createQueue(accountId: string, name: string) {
        const account = this.accounts.findById(accountId);
        if (!account) throw new Error('Account not found');

        return this.queues.create(accountId, name);
    }

    getQueue(id: string): Queue | null {
        return this.queues.findById(id);
    }

    getAllQueues(): Queue[] {
        return this.queues.findAll();
    }

    issueToken(queueId: string) {
        const queue = this.queues.findById(queueId);
        if (!queue || queue.status !== 'active')
            throw new Error('Queue unavailable');

        return this.tokens.issue(queueId);
    }

    callNext(queueId: string) {
        return this.tokens.callNext(queueId);
    }
}
