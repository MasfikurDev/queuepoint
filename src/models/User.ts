export interface User {
    id: string; // UUID
    name: string;
    email: string;
    phone: string;

    createdAt: Date;
    updatedAt: Date;
}