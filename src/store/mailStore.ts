import { create } from "zustand";

type Sidebar = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const useOpenMail = create<Sidebar>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));
