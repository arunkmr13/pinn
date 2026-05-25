function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Community verification added",
      detail: "3 nearby users confirmed your recent post.",
      time: "4m ago",
    },
    {
      id: 2,
      title: "Location verification complete",
      detail: "Your flood update received a trusted geo-match.",
      time: "16m ago",
    },
    {
      id: 3,
      title: "Signal strength increased",
      detail: "Your post moved to High signal status.",
      time: "1h ago",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[640px] px-4 py-4 md:px-6 md:py-6">
      <div className="mb-4">
        <h1 className="text-xl font-medium text-[var(--text-primary)]">
          Alerts
        </h1>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Real-time trust and verification updates.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="rounded-[8px] border border-[var(--border)] bg-[var(--card)] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-sm font-medium text-[var(--text-primary)]">
                  {notification.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  {notification.detail}
                </p>
              </div>

              <span className="text-xs text-[var(--text-muted)]">
                {notification.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;