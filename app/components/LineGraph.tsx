"use client";
import { FaEllipsisV } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Sector,
} from "recharts";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import PieComponent from "./PieChart";
import { Progress } from "antd";
import { useSidebar } from "@/src/store/sidebarStore";

const data = [
  {
    day: "Mon",
    tracked: 40,
    goal: 24,
    amt: 24,
  },
  {
    day: "Tue",
    tracked: 30,
    goal: 13,
    amt: 22,
  },
  {
    day: "Wed",
    tracked: 20,
    goal: 48,
    amt: 22,
  },
  {
    day: "Thu",
    tracked: 27,
    goal: 39,
    amt: 20,
  },
  {
    day: "Fri",
    tracked: 18,
    goal: 48,
    amt: 21,
  },
  {
    day: "Sat",
    tracked: 23,
    goal: 38,
    amt: 25,
  },
  {
    day: "Sun",
    tracked: 34,
    goal: 43,
    amt: 21,
  },
];

const LineGraph = () => {
  const open = useSidebar((state) => state.open);

  return (
    <div className="bg-[#F8F9FC]">
      <div className="basis-[60%] border bg-white shadow-md cursor-pointer rounded-[4px]">
        <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
          <h2 className="text-dark-purple text-base leading-[19px] font-bold">
            Habits Overview
          </h2>
          <FaEllipsisV color="gray" className="cursor-pointer" />
        </div>

        <div className="">
          <LineChart
            width={open ? 650 : 800}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="goal"
              stroke="#06B6D4"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="tracked" stroke="#22C55E" />
          </LineChart>
        </div>
      </div>

      {/* <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
              {" "}
              Resources
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-[35px] flex items-center justify-center h-[100%]">
            <div>
              <img
                src={"assets/error.png"}
                alt=""
                className="transform scale-[135%]"
              />
              <p className="mt-[15px] text-semibold text-gray-500">
                No data available
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LineGraph;
