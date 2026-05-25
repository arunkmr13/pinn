import Avatar from "../components/shared/Avatar";
import TrustSignalBar from "../components/shared/TrustSignalBar";
import { useAuthStore } from "../store/authStore.js";

function Profile() {
  const user = useAuthStore((state) => state.user);

  const stats = [
    {
      label: "Verified posts",
      value: "28",
    },
    {
      label: "High signal rate",
      value: "91%",
    },
    {
      label: "Community confirmations",
      value: "142",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[640px] px-4 py-4 md:px-6 md:py-6">
      <div className="rounded-[8px] border border-[var(--border)] bg-[var(--card)]">
        <div className="border-b border-[var(--border)] p-6">
          <div className="flex items-center gap-4">
            <Avatar initials={user.initials} size="lg" />

            <div>
              <h1 className="text-lg font-medium text-[var(--text-primary)]">
                @{user.handle}
              </h1>

              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Trusted local contributor
              </p>

              <div className="mt-3">
                <TrustSignalBar
                  layers={[true, true, true, true, true]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-4"
            >
              <div className="text-xl font-medium text-[var(--text-primary)]">
                {stat.value}
              </div>

              <div className="mt-2 text-sm text-[var(--text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-[8px] border border-[var(--border)] bg-[var(--card)] p-4">
        <h2 className="text-sm font-medium text-[var(--text-primary)]">
          Verification Status
        </h2>

        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center justify-between rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <span className="text-sm text-[var(--text-primary)]">
              Device Signature
            </span>

            <span className="text-xs text-[var(--primary)]">
              Verified
            </span>
          </div>

          <div className="flex items-center justify-between rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <span className="text-sm text-[var(--text-primary)]">
              Human Verification
            </span>

            <span className="text-xs text-[var(--primary)]">
              Confirmed
            </span>
          </div>

          <div className="flex items-center justify-between rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <span className="text-sm text-[var(--text-primary)]">
              Community Trust
            </span>

            <span className="text-xs text-[var(--primary)]">
              Strong
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;