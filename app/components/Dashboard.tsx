"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/src/store/sidebarStore";
import { CalendarCheck, Flame, ListOrdered, Percent } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Longest Streak",
      value: "1 week",
      border: "border-yellow-500",
      icon: <Flame size={30} className="text-yellow-500" />,
    },
    {
      title: "Habit Count",
      value: "05",
      border: "border-cyan-500",
      icon: <ListOrdered size={30} className="text-cyan-500" />,
    },
    {
      title: "Completion Rate",
      value: "30%",
      border: "border-green-500",
      icon: <Percent size={30} className="text-green-500" />,
    },
    {
      title: "Habit Categories",
      value: "05",
      border: "border-purple-500",
      icon: <CalendarCheck size={30} className="text-purple-500" />,
    },
  ];
  const open = useSidebar((state) => state.open);

  return (
    <div className={cn("p-6 bg-slate-50", open ? "pl-52" : "pl-28")}>
      <div className="flex items-center justify-between">
        <h1 className="text-gray-500 text-2xl leading-8 font-normal">
          Dashboard
        </h1>
        <button className="bg-dark-purple hover:bg-blue-900 rounded-md text-white flex items-center justify-center px-3 py-1.5">
          Generate Report
        </button>
      </div>
      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-7 mt-6 pb-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`rounded-lg px-6 py-3 bg-white border-l-4 flex items-center ${stat.border} justify-between cursor-pointer shadow hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out`}
          >
            <div>
              <h2
                className={`text-sm leading-4 font-bold text-${"black"} uppercase`}
              >
                {stat.title}
              </h2>
              <h3 className="text-xl leading-6 font-bold text-gray-400 mt-1">
                {stat.value}
              </h3>
            </div>
            {stat.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
