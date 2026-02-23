import { useNavigate } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@ui/Card";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login({ id: "1", name: "Demo User", email: "demo@test.com" });
        navigate("/profile");
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card variant="glass">
                <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>
                        Sign in to manage your Queues
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

                <CardFooter className="text-(--theme-text-primary)">
                    This is a mock login. Authentication coming soon.
                </CardFooter>
            </Card>
        </div>
    );
}
