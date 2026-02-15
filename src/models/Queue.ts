export type QueueStatus = 'active' | 'paused' | 'closed';

export interface Queue {
  id: string;              // UUID
  organizationId: string; // FK - Organization.id
  name: string;
  status: QueueStatus;

  createdAt: Date;
  updatedAt: Date;
}
