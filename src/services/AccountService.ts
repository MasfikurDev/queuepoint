// src/services/AccountService.ts
import { Account } from '../models/Account.js';
import { AccountRepository } from '../repositories/AccountRepository.js';

export class AccountService {
  private repo = new AccountRepository();

  createAccount(name: string,type: Account["type"]) {
    return this.repo.create(name,type);
  }

  getAccount(id: string) {
    return this.repo.findById(id);
  }

  listAccounts() {
    return this.repo.findAll();
  }
}
