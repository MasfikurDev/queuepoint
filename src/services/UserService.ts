import { UserRepository } from "../repositories/UserRepository.js";


export class UserService {
    private repo = new UserRepository();

    createUser(name: string, phone: string, email: string) {
        return this.repo.create(name, phone, email);
    }

    getUser(id: string) {
        return this.repo.findById(id);
    }

    listUsers() {
        return this.repo.findAll();
    }
}
