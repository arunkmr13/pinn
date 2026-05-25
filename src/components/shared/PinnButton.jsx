function PinnButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
}) {
  const variants = {
    primary:
      "bg-[var(--primary)] text-white border-[var(--primary)]",
    secondary:
      "bg-[var(--card)] text-[var(--text-primary)] border-[var(--border)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        "rounded-[8px]",
        "border",
        "px-4 py-3",
        "text-sm font-medium",
        "transition-colors",
        "hover:opacity-90",
        fullWidth ? "w-full" : "",
        variants[variant],
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default PinnButton;