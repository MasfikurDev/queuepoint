import { FastifyInstance } from "fastify";
import { UserService } from "../../services/UserService.js";


const userService: UserService = new UserService();

export async function userRoutes(app: FastifyInstance) {

    // Create User
    app.post('/users', async (req) => {
        const { name, phone, email,password } = req.body as {
            name: string,
            phone: string,
            email: string,
            password: string,
        };

        return userService.createUser(name, phone, email,password);
    });


    // Get a single User
    app.get('/users/:id', async (req, reply) => {
        const { id } = req.params as { id: string };
        const user = userService.getUser(id);
        if (!user) {
            reply.status(404);
            return { error: 'User not found' };
        }
        return user;
    });

    // List all Users
    app.get('/users', async () => {
        return userService.listUsers();
    });

}