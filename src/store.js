import create from "zustand";

export const useStore = create((set) => ({
  isDark: false,
  toggleMode: () => set((state) => ({ ...state, isDark: !state.isDark })),
}));
