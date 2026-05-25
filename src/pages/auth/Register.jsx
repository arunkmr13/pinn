import { Link } from "react-router-dom";
import PinnButton from "../../components/shared/PinnButton";

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-[420px] rounded-[8px] border border-[var(--border)] bg-[var(--card)]">
        <div className="border-b border-[var(--border)] px-6 py-5">
          <h1 className="text-xl font-medium text-[var(--text-primary)]">
            Create account
          </h1>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Join the verified real-feed network.
          </p>
        </div>

        <form className="flex flex-col gap-4 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
              Username
            </label>

            <input
              type="text"
              placeholder="Choose username"
              className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
              Verification preference
            </label>

            <select
              className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none"
            >
              <option>Device signature only</option>
              <option>Full identity verification</option>
            </select>
          </div>

          <div className="pt-2">
            <PinnButton fullWidth>
              Create Account
            </PinnButton>
          </div>

          <p className="text-center text-sm text-[var(--text-muted)]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[var(--primary)]"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;