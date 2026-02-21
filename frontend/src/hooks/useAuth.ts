import { useState } from "react";
import { auth, type AuthUser } from "../lib/auth";

export function useAuth() {
    const [user, setUser] = useState<AuthUser | null>(() => auth.get());

    const login = (user: AuthUser) => {
        auth.set(user);
        setUser(user);
    };

    const logout = () => {
        auth.clear();
        setUser(null);
    };

    return {
        user,
        isAuthenticated: !!user,
        login,
        logout,
    };
}
