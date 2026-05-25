import { Menu } from "lucide-react";
import iconLogo from "../../assets/branding/pinn-icon-transparent.svg";

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)] md:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--card)]"
        >
          <Menu size={18} />
        </button>

        <div className="flex items-center gap-2">
          <img
            src={iconLogo}
            alt="Pinn"
            className="h-8 w-8"
          />

          <span className="text-sm font-medium text-[var(--text-primary)]">
            Pinn
          </span>
        </div>

        <div className="h-10 w-10" />
      </div>
    </header>
  );
}

export default TopBar;