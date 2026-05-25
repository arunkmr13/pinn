const layerConfig = [
  {
    key: "device",
    label: "🖥 Device signed (C2PA)",
  },
  {
    key: "identity",
    label: "👤 Verified human",
  },
  {
    key: "captionMatch",
    label: "🧠 Caption match (LLM check)",
  },
  {
    key: "location",
    label: "📍 Location verified",
  },
  {
    key: "community",
    label: "👥 Community hold",
  },
];

function TrustLayerSheet({ trustLayers }) {
  return (
    <div className="mt-4 rounded-[8px] border border-[var(--border)] bg-[var(--surface)]">
      <div className="border-b border-[var(--border)] px-4 py-3">
        <h3 className="text-sm font-medium text-[var(--text-primary)]">
          Signal Threads
        </h3>
      </div>

      <div className="flex flex-col">
        {layerConfig.map((layer) => {
          const currentLayer = trustLayers[layer.key];

          return (
            <div
              key={layer.key}
              className="flex items-start justify-between gap-4 border-b border-[var(--border)] px-4 py-4 last:border-b-0"
            >
              <div>
                <div className="text-sm font-medium text-[var(--text-primary)]">
                  {layer.label}
                </div>

                <div className="mt-1 text-xs text-[var(--text-muted)]">
                  {currentLayer.detail}
                </div>
              </div>

              <div
                className={[
                  "mt-1 h-3 w-3 rounded-full border",
                  currentLayer.verified
                    ? "border-[var(--primary)] bg-[var(--primary)]"
                    : "border-[var(--border)] bg-transparent",
                ].join(" ")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrustLayerSheet;