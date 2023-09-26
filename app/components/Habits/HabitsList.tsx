"use client";

import { cn } from "@/lib/utils";
import { Habit } from "@/src/graphql/generated/graphql";
import { useSidebar } from "@/src/store/sidebarStore";

const HabitsList = ({ habits }: { habits: Habit[] }) => {
  const open = useSidebar((state) => state.open);
  return (
    <div
      className={cn(
        "flex flex-col items-ce justify-center h-screen bg-slate-50",
        open && "ml-72"
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="bg-white p-4 cursor-pointer rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h2 className="text-lg font-semibold mb-2">{habit.name}</h2>
            <p className="text-gray-600">{habit.description}</p>
            <p className="text-gray-400 mt-2">
              Category: {habit?.category?.name}
            </p>
            <p className="text-gray-400">
              Start Date: {new Date(habit.start_date).toLocaleDateString()}
            </p>
            <p className="text-gray-400">
              End Date: {new Date(habit.end_date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitsList;
