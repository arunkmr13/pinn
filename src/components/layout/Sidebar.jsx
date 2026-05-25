import { NavLink } from "react-router-dom";

import {
    Bell,
    Compass,
    Home,
    Moon,
    PenSquare,
    Sun,
    User,
} from "lucide-react";

import { useThemeStore } from "../../store/themeStore.js";

import lightWordmark from "../../assets/branding/pinn-wordmark-dark.svg";
import darkWordmark from "../../assets/branding/pinn-wordmark-light.svg";

function Sidebar() {
  const theme = useThemeStore((state) => state.theme);

  const toggleTheme = useThemeStore(
    (state) => state.toggleTheme
  );

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
    <aside className="sticky top-0 hidden h-screen w-[272px] flex-col justify-between border-r border-[var(--border)] bg-[var(--surface)] p-4 md:flex">
      <div>
        <div className="mb-10">
          <img
            src={
              theme === "dark"
                ? darkWordmark
                : lightWordmark
            }
            alt="Pinn"
            className="h-10 w-auto"
          />
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-[8px] px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--primary)] text-white"
                      : "text-[var(--text-primary)] hover:bg-[var(--card)]"
                  }`
                }
              >
                <Icon size={18} />

                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <button
        onClick={toggleTheme}
        className="flex items-center justify-between rounded-[8px] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--text-primary)]"
      >
        <span>
          Theme: {theme === "dark" ? "Dark" : "Light"}
        </span>

        {theme === "dark" ? (
          <Moon size={16} />
        ) : (
          <Sun size={16} />
        )}
      </button>
    </aside>
  );
}

export default Sidebar;