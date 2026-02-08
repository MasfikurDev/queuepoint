export type TokenStatus =
  | 'waiting'
  | 'called'
  | 'served'
  | 'skipped'
  | 'cancelled';

export interface Token {
  id: string;           // UUID
  queueId: string;      // FK → Queue.id
  consumerId?: string;  // FK → Consumer.id (optional)

  number: number;       // 1, 2, 3...
  status: TokenStatus;

  issuedAt: Date;
  calledAt?: Date;
  servedAt?: Date;
}
