import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: {
    id: "1",
    handle: "arun_k",
    initials: "AK",
  },

  isAuthenticated: true,

  login: (userData) =>
    set({
      user: userData,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));