import { Bell, Compass, Home, PenSquare, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Board",   path: "/",        icon: Home      },
  { label: "Nearby",  path: "/nearby",  icon: Compass   },
  { label: "Compose", path: "/compose", icon: PenSquare },
  { label: "Alerts",  path: "/alerts",  icon: Bell      },
  { label: "Me",      path: "/me",      icon: User      },
];

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-[var(--surface)] md:hidden">
      <div className="grid grid-cols-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isCompose = item.path === "/compose";

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-3 text-[11px] transition-colors ${
                  isCompose
                    ? "text-[var(--primary)]"
                    : isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--text-muted)]"
                }`
              }
            >
              {isCompose ? (
                /* Compose — coral pill, no label */
                <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[var(--primary)]">
                  <Icon size={18} color="white" />
                </div>
              ) : (
                /* Regular nav item */
                <>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;