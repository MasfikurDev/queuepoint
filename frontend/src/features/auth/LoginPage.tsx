import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "../../components/ui/Card";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login({ id: "1", name: "Demo User", email: "demo@test.com" });
        navigate("/profile");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <Card>
                <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>
                        Sign in to manage your queues
                    </CardDescription>
                </CardHeader>

                <div className="space-y-4">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="demo@test.com"
                        defaultValue="demo@test.com"
                        disabled
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        disabled
                    />

                    <Button onClick={handleLogin} className="mt-2" fullWidth>
                        Login (Mock)
                    </Button>
                </div>

                <CardFooter>
                    This is a mock login. Authentication coming soon.
                </CardFooter>
            </Card>
        </div>
    );
}
