"use client";
import React from "react";
import { useSidebar } from "@/src/store/sidebarStore";
import { cn } from "@/lib/utils";
import { NewHabit } from "../Forms/NewHabit";

const Navbar = () => {
  const open = useSidebar((state) => state.open);

  return (
    <div className="bg-white flex items-center fixed z-0 shadow-sm px-5 w-screen justify-between py-3">
      <h2 className={cn("text-2xl font-semibold pl-20", open && "pl-72")}>
        Habits
      </h2>
      <NewHabit />
    </div>
  );
};

export default Navbar;
