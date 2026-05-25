import { create } from "zustand";

const getInitialTheme = () => {
  const stored = localStorage.getItem("pinn-theme");

  if (stored) {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useThemeStore = create((set) => ({
  theme: getInitialTheme(),

  toggleTheme: () =>
    set((state) => {
      const nextTheme = state.theme === "dark" ? "light" : "dark";

      localStorage.setItem("pinn-theme", nextTheme);

      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(nextTheme);

      return { theme: nextTheme };
    }),
}));