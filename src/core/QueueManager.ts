// src/core/QueueManager.ts
import { Queue } from './models/Queue.js'
import { Token } from './models/Token.js'
import { randomUUID } from 'node:crypto'


export class QueueManager {

  private queues = new Map<string, Queue>();


  createQueue(name: string): Queue {
    const id: string = randomUUID();
    const queue: Queue = { id, name, tokens: [] }
    this.queues.set(id, queue)
    return queue;
  }

  getQueue(queueId: string): Queue {
    const queue = this.queues.get(queueId);
    if (!queue) throw new Error("Queue not found");
    return queue;
  }

  getAllQueues() {
    return Array.from(this.queues);
  }

  issueToken(queueId: string): Token {
    const queue = this.queues.get(queueId);
    if (!queue) throw new Error('Queue not found');

    const token: Token = {
      id: randomUUID(),
      number: queue.tokens.length + 1,
      status: 'waiting',
      createdAt: new Date()
    };

    queue.tokens.push(token);
    return token;
  }

  callNext(queueId: string): Token | null {
    const queue = this.queues.get(queueId);
    if (!queue) throw new Error('Queue not found');

    const next = queue.tokens.find(t => t.status === 'waiting');
    if (!next) return null;

    next.status = 'called';
    return next;
  }
}
