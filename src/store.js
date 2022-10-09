import create from "zustand";

export const useStore = create((set) => ({
  user: null,
  setUser: (payload) => set((state) => ({ ...state, user: payload })),
  device_type: 0,
  isDark: false,
  toggleMode: () => set((state) => ({ ...state, isDark: !state.isDark })),
  lang: "",
  setLang: (payload) => set((state) => ({ ...state, lang: payload })),
}));
