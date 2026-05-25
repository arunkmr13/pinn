function TrustSignalBar({ layers = [] }) {
  const verifiedCount = layers.filter(Boolean).length;

  const label =
    verifiedCount >= 4
      ? "High signal"
      : verifiedCount >= 2
      ? "Medium signal"
      : "Low signal";

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {layers.map((isVerified, index) => (
          <div
            key={index}
            className={[
              "h-2.5 w-2.5 rounded-full border",
              isVerified
                ? "border-[var(--primary)] bg-[var(--primary)]"
                : "border-[var(--border)] bg-transparent",
            ].join(" ")}
          />
        ))}
      </div>

      <span className="text-xs text-[var(--text-muted)]">
        {label}
      </span>
    </div>
  );
}

export default TrustSignalBar;