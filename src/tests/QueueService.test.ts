import { describe, it, expect, beforeEach } from 'vitest'
import { QueueService } from '../services/QueueService.js'

describe('QueueService', () => {
  let service: QueueService

  beforeEach(() => {
    service = new QueueService()
  })

  it('creates a queue', () => {
    const queue = service.createQueue('Test Queue')

    expect(queue.id).toBeDefined()
    expect(queue.name).toBe('Test Queue')
    expect(queue.status).toBe('active')
  })

  it('issues tokens sequentially', () => {
    const queue = service.createQueue('Token Queue')

    const t1 = service.issueToken(queue.id)
    const t2 = service.issueToken(queue.id)

    expect(t1.number).toBe(1)
    expect(t2.number).toBe(2)
  })

  it('calls next waiting token', () => {
    const queue = service.createQueue('Call Queue')

    service.issueToken(queue.id)
    service.issueToken(queue.id)

    const next = service.callNext(queue.id)

    expect(next).not.toBeNull()
    expect(next?.number).toBe(1)
    expect(next?.status).toBe('called')
  })

  it('returns null when no tokens are waiting', () => {
    const queue = service.createQueue('Empty Queue')

    const next = service.callNext(queue.id)
    expect(next).toBeNull()
  })

  it('returns snapshot of queue tokens', () => {
    const queue = service.createQueue('Snapshot Queue')

    service.issueToken(queue.id)
    service.issueToken(queue.id)

    const snapshot = service.snapshot(queue.id)

    expect(snapshot.length).toBe(2)
    expect(snapshot[0].number).toBe(1)
  })

  it('throws error for invalid queue id', () => {
    expect(() => {
      service.issueToken('invalid-id')
    }).toThrow('Queue not found')
  })
})
