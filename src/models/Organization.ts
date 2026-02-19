export interface Organization {
    id: string; // UUID
    name: string;
    type: 'business' | 'individual';
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}
