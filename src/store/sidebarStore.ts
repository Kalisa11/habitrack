import { create } from "zustand";

type Sidebar = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const useSidebar = create<Sidebar>((set) => ({
  open: true,
  setOpen: (open: boolean) => set({ open }),
}));