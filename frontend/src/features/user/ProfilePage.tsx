import { useAuth } from "../../hooks/useAuth";
import { Card, CardHeader, CardTitle } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export default function ProfilePage() {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-4xl px-6 py-10">
                {/* Header with Avatar */}
                <div className="mb-8 flex items-center gap-4 bg-(--theme-surface-hover) border border-(--theme-surface-border) rounded-lg px-6 py-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-semibold text-white">
                        {user?.name?.[0] ?? "U"}
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-white">
                            Profile
                        </h1>
                        <p className="text-sm text-slate-400">
                            Manage your personal information
                        </p>
                    </div>
                </div>

                {/* Profile Details Card */}
                <Card variant="glass" className="max-w-full">
                    <CardHeader className="border-b border-white/10 px-6 py-4 text-left">
                        <CardTitle className="text-lg">
                            Personal Details
                        </CardTitle>
                    </CardHeader>

                    <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
                        <Input
                            label="Full name"
                            value={user?.name ?? "Demo User"}
                            disabled
                        />

                        <Input
                            label="Email"
                            type="email"
                            value={user?.email ?? "demo@test.com"}
                            disabled
                        />

                        <Input label="Phone" value="+880 1XXXXXXXXX" disabled />

                        <Input label="Account type" value="User" disabled />
                    </div>
                </Card>

                {/* Actions */}
                <div className="mt-8 flex items-center justify-between w-full bg-(--theme-surface-hover) border border-(--theme-surface-border) rounded-lg px-6 py-4">
                    <p className="text-xs">
                        Editing will be enabled once backend auth is connected.
                    </p>

                    <Button
                        onClick={logout}
                        colorScheme="danger"
                        variant="outline"
                        size="md"
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    );
}
