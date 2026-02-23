import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@components/ProtectedRoute";

import IndexPage from "@pages/IndexPage";
import LoginPage from "@pages/auth/login/LoginPage";
import ProfilePage from "@pages/user/profile/ProfilePage";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/profile",
        element: (
            <ProtectedRoute>
                <ProfilePage />
            </ProtectedRoute>
        ),
    },
]);
