"use client";
import { BookOpenCheck, Dumbbell, GlassWater, Plus } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useSidebar } from "@/src/store/sidebarStore";
import { cn } from "@/lib/utils";
import NewHabit from "../Forms/NewHabit";

const EmptyPlaceholder = () => {
  const cards = [
    {
      icon: <Dumbbell size={30} className="mr-3 text-green-500" />,
    },
    {
      icon: <GlassWater size={30} className="mr-3 text-blue-500" />,
    },
    {
      icon: <BookOpenCheck size={30} className="mr-3 text-yellow-500" />,
    },
  ];

  const open = useSidebar((state) => state.open);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-screen bg-slate-50",
        open && "ml-72"
      )}
    >
      <h1 className="text-xl font-semibold mb-6">
        You haven&apos;t created any habits yet
      </h1>
      {cards.map((card, index) => (
        <div
          className="bg-white mb-4 px-8 py-2 rounded-lg shadow-md flex items-center"
          key={index}
        >
          {card.icon}
          <div className="container px-6 py-3 mx-auto">
            <Skeleton className="w-48 h-5 mb-2 mx-auto bg-gray-200 rounded-lg" />
            <Skeleton className="w-24 h-4 mx-auto bg-gray-200 rounded-lg" />
          </div>
        </div>
      ))}
      <p className="text-gray-500 flex items-center mb-3">
        Habits are like the subtle architects of our existence, crafting the
        intricacies of our daily routines.
      </p>
      <NewHabit />
    </div>
  );
};

export default EmptyPlaceholder;
