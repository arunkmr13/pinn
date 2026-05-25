function TrustSignalBar({ layers = [] }) {
  const safeLayers = Array.isArray(layers) ? layers : [];
  const verifiedCount = safeLayers.filter(Boolean).length;

  const label =
    verifiedCount >= 4
      ? "High signal"
      : verifiedCount >= 2
      ? "Medium signal"
      : "Low signal";

  // colour reflects signal level — not all muted grey
  const labelColor =
    verifiedCount >= 4
      ? "text-[var(--primary)]"   // coral — high
      : verifiedCount >= 2
      ? "text-[#BB8800]"          // amber — medium
      : "text-[var(--text-muted)]"; // grey — low

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {safeLayers.map((isVerified, index) => (
          <div
            key={index}
            className={[
              "h-3 w-3 rounded-full border",
              isVerified
                ? "border-[var(--primary)] bg-[var(--primary)]"
                : "border-[var(--border)] bg-transparent",
            ].join(" ")}
          />
        ))}
      </div>
      <span className={`text-xs font-medium ${labelColor}`}>
        {label}
      </span>
    </div>
  );
}

export default TrustSignalBar;