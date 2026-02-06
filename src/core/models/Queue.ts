// src/core/Queue.ts
import { Token } from './Token.js'

export interface Queue {
  id: string
  name: string
  tokens: Token[]
}
