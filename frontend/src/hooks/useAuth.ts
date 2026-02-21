import { useState } from "react";
import { auth, type AuthUser } from "../lib/auth";
import { useNavigate } from "react-router-dom";

export function useAuth() {
    const [user, setUser] = useState<AuthUser | null>(() => auth.get());

    const navigate = useNavigate();

    const login = (user: AuthUser) => {
        auth.set(user);
        setUser(user);
    };

    const logout = () => {
        auth.clear();
        setUser(null);
        navigate("/login");
    };

    return {
        user,
        isAuthenticated: !!user,
        login,
        logout,
    };
}
