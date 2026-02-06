import { randomUUID } from 'node:crypto'
import { Queue } from '../models/Queue.js'
import { Token } from '../models/Token.js'

export class QueueService {
  private queues = new Map<string, Queue>()
  private tokens = new Map<string, Token[]>()

  createQueue(name: string): Queue {
    const queue: Queue = {
      id: randomUUID(),
      name,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.queues.set(queue.id, queue)
    this.tokens.set(queue.id, [])
    return queue
  }

  getQueue(queueId: string): Queue {
    const queue = this.queues.get(queueId)
    if (!queue) throw new Error('Queue not found')
    return queue
  }

  getAllQueues(): Queue[] {
    return Array.from(this.queues.values())
  }

  issueToken(queueId: string): Token {
    const queue = this.getQueue(queueId)
    const tokenList = this.tokens.get(queueId)!

    const token: Token = {
      id: randomUUID(),
      queueId,
      number: tokenList.length + 1,
      status: 'waiting',
      issuedAt: new Date(),
    }

    tokenList.push(token)
    return token
  }

  callNext(queueId: string): Token | null {
    const tokenList = this.tokens.get(queueId)
    if (!tokenList) throw new Error('Queue not found')

    const next = tokenList.find(t => t.status === 'waiting')
    if (!next) return null

    next.status = 'called'
    next.calledAt = new Date()
    return next
  }

  snapshot(queueId: string): Token[] {
    return this.tokens.get(queueId) ?? []
  }
}
