import { UserRepository } from "../repositories/UserRepository.js";
import { hashPassword } from "../security/password.js";


export class UserService {
    private repo = new UserRepository();

    async createUser(name: string, phone: string, email: string,password: string) {
        const passwordHash = await hashPassword(password);
        return this.repo.create(name, phone, email,passwordHash);
    }

    getUser(id: string) {
        return this.repo.findById(id);
    }

    listUsers() {
        return this.repo.findAll();
    }
}
