export type AuthUser = {
    id: string;
    name: string;
    email?: string;
};

const KEY = "auth_user";

export const auth = {
    get(): AuthUser | null {
        const raw = localStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : null;
    },
    set(user: AuthUser) {
        localStorage.setItem(KEY, JSON.stringify(user));
    },
    clear() {
        localStorage.removeItem(KEY);
    },
};
