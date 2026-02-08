export type QueueStatus = 'active' | 'paused' | 'closed';

export interface Queue {
  id: string;            // UUID
  accountId?: string;     // FK → Account.id

  name: string;          // "Doctor Chamber A"
  status: QueueStatus;

  createdAt: Date;
  updatedAt: Date;
}
