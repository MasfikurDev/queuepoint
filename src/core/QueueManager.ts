// src/core/QueueManager.ts
import { Queue } from './Queue.js'
import { Token } from './Token.js'

export class QueueManager {
  private queues = new Map<string, Queue>()

  createQueue(id: string, name: string): Queue {
    const queue: Queue = { id, name, tokens: [] }
    this.queues.set(id, queue)
    return queue
  }

  issueToken(queueId: string): Token {
    const queue = this.queues.get(queueId)
    if (!queue) throw new Error('Queue not found')

    const token: Token = {
      id: crypto.randomUUID(),
      number: queue.tokens.length + 1,
      status: 'waiting',
      createdAt: new Date()
    }

    queue.tokens.push(token)
    return token
  }

  callNext(queueId: string): Token | null {
    const queue = this.queues.get(queueId)
    if (!queue) throw new Error('Queue not found')

    const next = queue.tokens.find(t => t.status === 'waiting')
    if (!next) return null

    next.status = 'called'
    return next
  }
}
