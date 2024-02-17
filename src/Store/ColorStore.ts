import { create } from "zustand";

interface ColorStoreState {
  color: string;
  updateColor: (color: string) => void;
}

export const useColorStore = create<ColorStoreState>()((set) => ({
  color: "#6466F2",
  updateColor: (color) => set(() => ({ color })),
}));
