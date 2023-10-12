"use client";

import { cn } from "@/lib/utils";
import { Habit } from "@/src/graphql/generated/graphql";
import { format } from "date-fns";
import { Droplet } from "lucide-react";
import HabitIcon from "./HabitIcon";

const HabitItem = ({ habit }: { habit: Habit }) => {
  return (
    <div className={cn("p-4 my-1 h-20 w-full ml-auto border-b-2")}>
      <div className="flex justify-between">
        <div className="bg-slate-200 rounded-full px-2 flex items-center justify-center">
          <HabitIcon category={habit?.category?.name as string} />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base font-semibold">{habit.name}</span>
          <span className="text-sm text-gray-500">{habit.category?.name}</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>
            <span className="text-sm text-gray-600 mr-1">Start:</span>
            {format(new Date(habit.start_date), "yyyy-MM-dd")}
          </p>
          <p>
            <span className="text-sm text-gray-600 mr-1">End:</span>{" "}
            {format(new Date(habit.end_date), "yyyy-MM-dd")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HabitItem;
