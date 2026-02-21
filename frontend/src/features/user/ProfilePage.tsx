import { useAuth } from "../../hooks/useAuth";

export default function ProfilePage() {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="mx-auto max-w-4xl px-6 py-10">
                {/* Header */}
                <div className="mb-8 flex items-center gap-4">
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

                {/* Profile Card */}
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur shadow-xl">
                    <div className="border-b border-white/10 px-6 py-4">
                        <h2 className="text-lg font-medium text-white">
                            Personal Details
                        </h2>
                    </div>

                    <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">
                                Full name
                            </label>
                            <input
                                value={user?.name ?? "Demo User"}
                                disabled
                                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">
                                Email
                            </label>
                            <input
                                value={user?.email ?? "demo@test.com"}
                                disabled
                                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">
                                Phone
                            </label>
                            <input
                                value="+880 1XXXXXXXXX"
                                disabled
                                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">
                                Account type
                            </label>
                            <input
                                value="User"
                                disabled
                                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-300"
                            />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                        Editing will be enabled once backend auth is connected.
                    </p>

                    <button
                        onClick={logout}
                        className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
