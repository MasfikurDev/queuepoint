import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ id: "1", name: "Demo User", email: "demo@test.com" });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full max-w-md rounded-2xl bg-slate-900/70 backdrop-blur border border-white/10 shadow-xl p-8">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to manage your queues
          </p>
        </div>

        {/* Mock form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="demo@test.com"
              disabled
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              disabled
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>

          <button
            onClick={handleLogin}
            className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
          >
            Login (Mock)
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-slate-500">
          This is a mock login. Authentication coming soon.
        </div>
      </div>
    </div>
  );
}