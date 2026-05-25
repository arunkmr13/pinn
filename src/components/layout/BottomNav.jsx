import { NavLink } from "react-router-dom";

import {
    Bell,
    Compass,
    Home,
    PenSquare,
    User,
} from "lucide-react";

function BottomNav() {
  const navItems = [
    {
      label: "Board",
      path: "/",
      icon: Home,
    },

    {
      label: "Nearby",
      path: "/nearby",
      icon: Compass,
    },

    {
      label: "Compose",
      path: "/compose",
      icon: PenSquare,
    },

    {
      label: "Alerts",
      path: "/alerts",
      icon: Bell,
    },

    {
      label: "Me",
      path: "/me",
      icon: User,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-[var(--surface)] md:hidden">
      <div className="grid grid-cols-5">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-3 text-[11px] transition-colors ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--text-muted)]"
                }`
              }
            >
              <Icon size={18} />

              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;