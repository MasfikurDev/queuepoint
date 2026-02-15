export interface Consumer {
  id: string;
  queueId: string; // FK - Queue.id
  userId?: string; // FK - User.id

  name: string;
  email?: string;
  phone?: string;
  isTemporary: boolean;

  createdAt: Date;
  expiresAt: Date;
}
