"use client";

import { cn } from "@/lib/utils";
import { Habit } from "@/src/graphql/generated/graphql";
import { useSidebar } from "@/src/store/sidebarStore";
import HabitCalendar from "@components/Calendar";

const CalendarView = ({ habits }: { habits: Habit[] }) => {
  const open = useSidebar((state) => state.open);
  return (
    <div className={cn("flex items-center ml-20 bg-slate-50", open && "ml-72")}>
      <div className="mb-2 mt-16 w-screen">
        <HabitCalendar habits={habits} />
      </div>
    </div>
  );
};

export default CalendarView;
