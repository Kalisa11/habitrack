"use client";

import DashNav from "@components/DashNav";
import Dashboard from "./components/Dashboard";
import { useSidebar } from "@/src/store/sidebarStore";
import { cn } from "@/lib/utils";

export default function Home() {
  const open = useSidebar((state) => state.open);

  return (
    <div className={cn(open && "pl-28")}>
      <DashNav />
      <Dashboard />
    </div>
  );
}
