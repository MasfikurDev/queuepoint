export interface Account {
    id: string; // UUID
    name: string;
    type: 'business' | 'individual';

    createdAt: Date;
    updatedAt: Date;
}
