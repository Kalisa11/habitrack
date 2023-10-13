"use client";

import { cn } from "@/lib/utils";
import { Habit } from "@/src/graphql/generated/graphql";
import { useSidebar } from "@/src/store/sidebarStore";
import HabitItem from "./HabitItem";
import Link from "next/link";

const HabitsList = ({ habits }: { habits: Habit[] }) => {
  const open = useSidebar((state) => state.open);
  return (
    <div className={cn("flex items-center ml-20 bg-slate-50", open && "ml-72")}>
      <div className="mb-2 mt-16 w-screen">
        {habits.map((habit) => (
          <Link
            href={`/habits/${habit.id}`}
            key={habit.id}
            style={{ textDecoration: "none" }}
          >
            <HabitItem habit={habit} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HabitsList;
