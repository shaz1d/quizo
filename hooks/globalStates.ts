import { create } from "zustand";

interface useDrawer {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useDrawer = create<useDrawer>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
