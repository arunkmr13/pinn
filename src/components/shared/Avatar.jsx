function Avatar({ initials = "PN", size = "md" }) {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  return (
    <div
      className={[
        "flex items-center justify-center rounded-[8px]",
        "bg-[var(--card)] border border-[var(--border)]",
        "text-[var(--text-primary)] font-medium",
        sizeClasses[size],
      ].join(" ")}
    >
      {initials}
    </div>
  );
}

export default Avatar;