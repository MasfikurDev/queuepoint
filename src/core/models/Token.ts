// src/core/Token.ts
export type TokenStatus = 'waiting' | 'called' | 'served' | 'skipped'

export interface Token {
  id: string
  number: number
  status: TokenStatus
  createdAt: Date
}
